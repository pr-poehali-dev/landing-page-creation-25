import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="TrendingUp" size={16} />
              Прямые поставки из России
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Повышайте прибыль и доверие ваших клиентов
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Качественный полиуретановый герметик напрямую от производителя с высокой маржой для вашего бизнеса
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span className="text-sm">Сертификаты ЕАЭС</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span className="text-sm">ISO 9001</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span className="text-sm">ГОСТ стандарты</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" className="text-primary" size={20} />
                <span className="text-sm">Прямые поставки</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={scrollToContact} className="text-lg px-8">
                Запросить коммерческое предложение
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToContact} className="text-lg px-8">
                Заказать образец
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
              <img 
                src="https://cdn.poehali.dev/projects/7971f13d-0860-43a2-9785-8a16da0179b7/files/fac0139c-6306-4d55-859b-d69f8cdd97f1.jpg"
                alt="Полиуретановый герметик"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">лет опыта</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">14</div>
                  <div className="text-sm text-muted-foreground mt-1">стран экспорта</div>
                </div>
                <div className="bg-primary/5 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground mt-1">качество</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
