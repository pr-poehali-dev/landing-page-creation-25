import json
import os
import urllib.request
import urllib.error
from typing import Dict, Any
from pydantic import BaseModel, Field, field_validator


class LeadRequest(BaseModel):
    """Модель данных заявки с сайта"""
    name: str = Field(..., min_length=1, max_length=100)
    company: str = Field(default="", max_length=200)
    phone: str = Field(..., min_length=5, max_length=30)
    email: str = Field(default="", max_length=100)
    interest: str = Field(..., min_length=1)

    @field_validator('phone')
    @classmethod
    def validate_phone(cls, v: str) -> str:
        if not v.strip():
            raise ValueError('Телефон обязателен')
        return v.strip()


def send_telegram_message(text: str) -> bool:
    """Отправка сообщения в Telegram"""
    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID')
    
    if not bot_token or not chat_id:
        raise ValueError('Не настроены TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID')
    
    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    data = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'HTML'
    }).encode('utf-8')
    
    req = urllib.request.Request(
        url,
        data=data,
        headers={'Content-Type': 'application/json'}
    )
    
    with urllib.request.urlopen(req, timeout=10) as response:
        result = json.loads(response.read().decode('utf-8'))
        return result.get('ok', False)


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    """
    Обработка заявок с лендинга и отправка в Telegram
    Args: event - HTTP запрос с данными формы
          context - контекст выполнения функции
    Returns: HTTP ответ с результатом
    """
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Только POST запросы'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    lead = LeadRequest(**body_data)
    
    message = f"""🔔 <b>Новая заявка с сайта</b>

👤 <b>Имя:</b> {lead.name}
🏢 <b>Компания:</b> {lead.company or 'Не указана'}
📱 <b>Телефон:</b> {lead.phone}
📧 <b>Email:</b> {lead.email or 'Не указан'}
💼 <b>Интересует:</b> {lead.interest}

⏰ ID запроса: {context.request_id}"""
    
    send_telegram_message(message)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'message': 'Заявка отправлена'
        }),
        'isBase64Encoded': False
    }
