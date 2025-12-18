import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в течение 24 часов для отправки коммерческого предложения.');
    setFormData({ company: '', name: '', phone: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Shield" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">PolyGuard Pro</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Запросить прайс-лист
          </Button>
        </div>
      </header>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Icon name="TrendingUp" size={18} />
                <span className="text-sm font-semibold">Прибыль выше на 35-40%</span>
              </div>
              <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
                Повышайте прибыль и доверие клиентов
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Качественный полиуретановый герметик напрямую от производителя. 
                Стабильная маржа без демпинга цен.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Сертификация ЕАЭС</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span className="text-muted-foreground">Прозрачная логистика</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Check" size={20} className="text-primary" />
                  <span className="text-muted-foreground">10+ лет экспорта</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  <Icon name="FileText" size={20} className="mr-2" />
                  Получить прайс CIF
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Package" size={20} className="mr-2" />
                  Заказать образцы
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-accent p-8 rounded-2xl shadow-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg h-64 flex items-center justify-center mb-6">
                  <Icon name="Package" size={120} className="text-white/80" />
                </div>
                <div className="flex justify-around">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="Award" size={28} className="text-white" />
                    </div>
                    <p className="text-white text-sm font-semibold">ISO 9001</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="ShieldCheck" size={28} className="text-white" />
                    </div>
                    <p className="text-white text-sm font-semibold">ЕАЭС</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2">
                      <Icon name="CheckCircle" size={28} className="text-white" />
                    </div>
                    <p className="text-white text-sm font-semibold">ГОСТ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Почему выбирают нас в Казахстане
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Сравните с китайскими аналогами и убедитесь в преимуществах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-scale border-2 hover:border-primary transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="TrendingUp" size={28} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Маржа выше на 35-40%
              </h3>
              <p className="text-muted-foreground mb-4">
                Без компромиссов в качестве. Стабильные поставки, прозрачное происхождение сырья
              </p>
              <div className="bg-primary/5 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground mb-1">Средняя маржа на рынке</p>
                <p className="text-3xl font-bold text-foreground">15-20%</p>
                <div className="mt-2 pt-2 border-t border-primary/20">
                  <p className="text-sm text-primary mb-1">С PolyGuard Pro</p>
                  <p className="text-3xl font-bold text-primary">35-40%</p>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-scale border-2 hover:border-primary transition-all">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="ThumbsUp" size={28} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Минимум рекламаций
              </h3>
              <p className="text-muted-foreground mb-4">
                Стабильное качество каждой партии. Полный контроль производства на всех этапах
              </p>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Китайские аналоги</span>
                  <span className="text-sm font-semibold text-red-500">8-12% брака</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary">PolyGuard Pro</span>
                  <span className="text-sm font-semibold text-primary">{'<'}1% брака</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover-scale border-2 hover:border-primary transition-all">
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                <Icon name="FileCheck" size={28} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Готовы к тендерам
              </h3>
              <p className="text-muted-foreground mb-4">
                Все сертификаты для участия в госзакупках и крупных тендерах
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-sm text-muted-foreground">Сертификат соответствия ЕАЭС</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-sm text-muted-foreground">ГОСТ и ISO 9001:2015</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Check" size={18} className="text-green-600" />
                  <span className="text-sm text-muted-foreground">Паспорта качества на партию</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Логистика и таможня
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачные условия и сопровождение на всех этапах
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Прямые поставки CIF
                    </h3>
                    <p className="text-muted-foreground">
                      Работаем по Incoterms 2020. Доставка CIF Алматы/Астана или EXW на выбор
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="DollarSign" size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Гибкая оплата
                    </h3>
                    <p className="text-muted-foreground">
                      Расчёт в тенге, рублях или валюте. Отсрочка для постоянных партнёров
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Быстрое оформление
                    </h3>
                    <p className="text-muted-foreground">
                      Собственная служба сопровождения. Помощь на всех этапах таможенного оформления
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-6">Сроки доставки</h3>
              <div className="space-y-4">
                {[
                  { city: 'Алматы', days: '12-15 дней' },
                  { city: 'Астана', days: '14-17 дней' },
                  { city: 'Шымкент', days: '15-18 дней' },
                  { city: 'Актобе', days: '16-19 дней' }
                ].map(({ city, days }) => (
                  <div key={city} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon name="MapPin" size={20} className="text-primary" />
                      <span className="font-semibold text-foreground">{city}</span>
                    </div>
                    <span className="text-primary font-bold">{days}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                * Сроки указаны с момента отгрузки до получения на складе покупателя
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Сертификаты и стандарты
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Соответствие локальным и международным требованиям
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {[
              { icon: 'Award', title: 'ISO 9001:2015', desc: 'Система менеджмента качества', color: 'primary' },
              { icon: 'ShieldCheck', title: 'ЕАЭС', desc: 'Декларация соответствия', color: 'accent' },
              { icon: 'CheckCircle', title: 'ГОСТ', desc: 'Российские стандарты', color: 'green-600' },
              { icon: 'FileCheck', title: 'Паспорта', desc: 'На каждую партию', color: 'blue-600' }
            ].map(({ icon, title, desc, color }) => (
              <Card key={title} className="p-6 text-center hover-scale">
                <div className={`w-20 h-20 bg-${color === 'primary' || color === 'accent' ? color : color.split('-')[0] + '-500'}/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={icon as any} size={36} className={`text-${color}`} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  Документация готова к проверке
                </h3>
                <p className="text-muted-foreground">
                  Предоставим все сертификаты и декларации уже на этапе запроса прайс-листа. 
                  QR-коды для онлайн-проверки подлинности документов.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-[hsl(222,47%,11%)] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                О компании: 100% реальный бизнес
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Мы не перепродаём чужую продукцию — мы производим качественную строительную химию 
                и экспортируем в 14 стран
              </p>

              <div className="space-y-6 mb-8">
                {[
                  { icon: 'Factory', title: 'Собственное производство', desc: 'Полный контроль качества на всех этапах. Современное оборудование и технологии', color: 'primary' },
                  { icon: 'Globe', title: 'Экспорт в 14 стран', desc: 'Более 10 лет международного опыта. Доверие партнёров по всему миру', color: 'accent' },
                  { icon: 'Users', title: 'Персональное обслуживание', desc: 'Личный менеджер, маркетинговая поддержка, совместные акции для ваших клиентов', color: 'green-400' }
                ].map(({ icon, title, desc, color }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className={`w-12 h-12 bg-${color === 'primary' || color === 'accent' ? color : color.split('-')[0] + '-500'}/20 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon name={icon as any} size={24} className={`text-${color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{title}</h3>
                      <p className="text-white/70">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-6 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-4xl font-bold text-primary mb-1">10+</p>
                  <p className="text-sm text-white/70">лет на рынке</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-accent mb-1">14</p>
                  <p className="text-sm text-white/70">стран экспорта</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-400 mb-1">500+</p>
                  <p className="text-sm text-white/70">B2B клиентов</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">География поставок</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Казахстан', 'Узбекистан', 'Кыргызстан', 'Таджикистан',
                  'Армения', 'Азербайджан', 'Грузия', 'Монголия',
                  'Беларусь', 'Молдова', 'Туркменистан', 'Афганистан',
                  'Иран', 'Турция'
                ].map((country) => (
                  <div key={country} className="flex items-center gap-2 p-3 bg-white/5 rounded-lg">
                    <Icon name="MapPin" size={16} className="text-primary" />
                    <span className="text-sm">{country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Запросите коммерческое предложение
            </h2>
            <p className="text-xl text-muted-foreground">
              Отправим прайс-лист CIF и образцы продукции в течение 24 часов
            </p>
          </div>

          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Название компании *
                  </label>
                  <Input
                    required
                    placeholder="ТОО «Ваша компания»"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    required
                    placeholder="Имя Фамилия"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Телефон *
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+7 (777) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="email@company.kz"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Комментарий
                </label>
                <Textarea
                  placeholder="Укажите интересующий объём закупки, город доставки и другие детали..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                <Icon name="Info" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Отправляя форму, вы получите прайс-лист CIF с расчётом для вашего региона, 
                  информацию о возможности заказа образцов и условиях сотрудничества
                </p>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white h-14 text-lg">
                <Icon name="Send" size={20} className="mr-2" />
                Получить коммерческое предложение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="bg-[hsl(222,47%,11%)] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shield" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">PolyGuard Pro</span>
              </div>
              <p className="text-white/70 text-sm">
                Производитель полиуретановых герметиков премиум-класса для профессионального строительства
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  export@polyguard.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MessageCircle" size={16} />
                  WhatsApp: +7 (777) 123-45-67
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4">Документы</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Сертификаты качества</li>
                <li>Декларация ЕАЭС</li>
                <li>ISO 9001:2015</li>
                <li>Условия поставки</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            <p>© 2024 PolyGuard Pro. Все права защищены. Экспорт строительной химии премиум-класса.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
