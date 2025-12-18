import { useState, FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: 'Запросить прайс-лист CIF'
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('https://functions.poehali.dev/6f393e54-ea55-4a61-82e2-f6f96d7ef638', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast({
          title: 'Заявка отправлена!',
          description: 'Мы свяжемся с вами в ближайшее время',
        });
        setFormData({
          name: '',
          company: '',
          phone: '',
          email: '',
          interest: 'Запросить прайс-лист CIF'
        });
      } else {
        throw new Error(result.error || 'Ошибка отправки');
      }
    } catch (error) {
      toast({
        title: 'Ошибка',
        description: 'Не удалось отправить заявку. Попробуйте позже',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 text-left max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Ваше имя *
          </label>
          <input 
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            placeholder="Иван Иванов"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Компания
          </label>
          <input 
            type="text"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            placeholder="ТОО Название"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Телефон / WhatsApp *
          </label>
          <input 
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            placeholder="+7 (___) ___-__-__"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email
          </label>
          <input 
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
            placeholder="email@example.com"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Что вас интересует? *
          </label>
          <select 
            required
            value={formData.interest}
            onChange={(e) => setFormData({...formData, interest: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          >
            <option>Запросить прайс-лист CIF</option>
            <option>Заказать образцы</option>
            <option>Получить консультацию</option>
            <option>Обсудить партнёрство</option>
          </select>
        </div>
        
        <Button 
          type="submit" 
          size="lg" 
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white"
        >
          {loading ? 'Отправка...' : 'Отправить запрос'}
          <Icon name="Send" className="ml-2" size={20} />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
