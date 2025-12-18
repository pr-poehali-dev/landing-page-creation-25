import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const stats = [
    { number: '10+', label: 'лет на рынке' },
    { number: '14', label: 'стран экспорта' },
    { number: '500+', label: 'партнёров' },
    { number: '100%', label: 'контроль качества' }
  ];

  const features = [
    {
      icon: 'Factory',
      title: 'Собственное производство',
      description: 'Полный цикл производства на современном оборудовании'
    },
    {
      icon: 'Globe',
      title: 'Экспортный опыт',
      description: 'Успешные поставки в страны СНГ, Средней Азии и дальнего зарубежья'
    },
    {
      icon: 'Users',
      title: 'Проверенный партнёр',
      description: 'Работаем с крупнейшими дистрибьюторами и оптовыми сетями'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            О компании: 100% реальный бизнес
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Надёжный производитель с прозрачной историей и международным опытом
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://cdn.poehali.dev/projects/7971f13d-0860-43a2-9785-8a16da0179b7/files/ab3ab026-c42c-4e22-bea0-b0c6009c56b4.jpg"
              alt="Производство"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl lg:text-3xl font-bold">
              Производитель строительной химии с международной экспертизой
            </h3>
            <p className="text-muted-foreground text-lg">
              Мы специализируемся на производстве высококачественных полиуретановых герметиков для строительной индустрии. Наше оборудование и технологии соответствуют европейским стандартам.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-primary/5 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon} className="text-primary" size={32} />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div id="contact" className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 lg:p-16 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Готовы начать сотрудничество?
            </h3>
            <p className="text-xl mb-8 text-blue-50">
              Запросите коммерческое предложение с расчётом CIF или закажите бесплатные образцы для тестирования
            </p>
            
            <div className="bg-white rounded-xl p-6 lg:p-8 text-left max-w-lg mx-auto">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя *
                  </label>
                  <input 
                    type="text" 
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
                    className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Что вас интересует? *
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-transparent outline-none">
                    <option>Запросить прайс-лист CIF</option>
                    <option>Заказать образцы</option>
                    <option>Получить консультацию</option>
                    <option>Обсудить партнёрство</option>
                  </select>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white">
                  Отправить запрос
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-50">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={20} />
                <span>+7 (___) ___-__-__</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={20} />
                <span>export@company.ru</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
