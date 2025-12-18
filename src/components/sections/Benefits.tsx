import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Benefits = () => {
  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Маржа выше средней по рынку',
      description: 'Прямые поставки от производителя обеспечивают выгодные условия для вашего бизнеса без компромиссов в качестве'
    },
    {
      icon: 'Shield',
      title: 'Минимум рекламаций',
      description: 'Стабильные поставки и прозрачное происхождение сырья гарантируют постоянное качество продукции'
    },
    {
      icon: 'Award',
      title: 'Сертификаты для тендеров',
      description: 'Полный пакет документов для участия в госзакупках и тендерах в странах ЕАЭС'
    },
    {
      icon: 'Users',
      title: 'Персональное обслуживание',
      description: 'Выделенный менеджер для ваших поставок и поддержка на всех этапах сотрудничества'
    },
    {
      icon: 'Package',
      title: 'Стабильное качество',
      description: 'Собственное производство и контроль качества на каждом этапе производства'
    },
    {
      icon: 'Handshake',
      title: 'Совместный маркетинг',
      description: 'Готовые маркетинговые материалы и совместные инициативы для продвижения продукции'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Почему выбирают нас в Казахстане
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Надёжный партнёр с прозрачными условиями и фокусом на вашей прибыли
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={benefit.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/5 to-blue-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                +25%
              </div>
              <p className="text-muted-foreground">
                средний рост маржи по сравнению с китайскими аналогами
              </p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                &lt;3%
              </div>
              <p className="text-muted-foreground">
                процент рекламаций благодаря стабильному качеству
              </p>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                100%
              </div>
              <p className="text-muted-foreground">
                прозрачность логистики и документооборота
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
