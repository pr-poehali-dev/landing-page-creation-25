import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Logistics = () => {
  const logistics = [
    {
      icon: 'MapPin',
      title: 'Гибкие условия поставок',
      description: 'CIF Алматы/Астана или EXW — выбирайте удобный вариант по Incoterms 2020'
    },
    {
      icon: 'Wallet',
      title: 'Прозрачные расчёты',
      description: 'Работаем в тенге, рублях или валюте — удобная форма оплаты для вашего бизнеса'
    },
    {
      icon: 'Users',
      title: 'Полное сопровождение',
      description: 'Собственная служба поддержки на всех этапах оформления и доставки'
    },
    {
      icon: 'Clock',
      title: 'Короткие сроки',
      description: 'Быстрая доставка в любой регион Казахстана с прозрачным трекингом'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Логистика и таможня
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачный процесс от заказа до получения товара
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="grid sm:grid-cols-2 gap-6">
            {logistics.map((item, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={item.icon} className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-border">
              <img 
                src="https://cdn.poehali.dev/projects/7971f13d-0860-43a2-9785-8a16da0179b7/files/59e8d7fa-51f2-4010-a883-debe16bdaf9b.jpg"
                alt="Карта логистики"
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4">
                <h4 className="font-bold text-lg mb-2">География поставок</h4>
                <p className="text-muted-foreground text-sm">
                  Прямые поставки в Алматы, Астану, Шымкент и другие города Казахстана
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-primary/20">
          <h3 className="text-2xl font-bold mb-6 text-center">Этапы работы с нами</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="font-bold mb-2">Запрос</h4>
              <p className="text-sm text-muted-foreground">
                Оставьте заявку на коммерческое предложение
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="font-bold mb-2">Расчёт</h4>
              <p className="text-sm text-muted-foreground">
                Получите детальный расчёт CIF с учётом всех расходов
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="font-bold mb-2">Образцы</h4>
              <p className="text-sm text-muted-foreground">
                Закажите тестовые образцы для проверки качества
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h4 className="font-bold mb-2">Поставка</h4>
              <p className="text-sm text-muted-foreground">
                Получите товар с полным комплектом документов
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
