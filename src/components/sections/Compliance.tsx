import Icon from '@/components/ui/icon';
import { Card, CardContent } from '@/components/ui/card';

const Compliance = () => {
  const certificates = [
    {
      icon: 'Award',
      name: 'ISO 9001',
      description: 'Международный стандарт системы менеджмента качества'
    },
    {
      icon: 'FileCheck',
      name: 'ЕАС / ЕАЭС',
      description: 'Сертификат соответствия для стран Евразийского союза'
    },
    {
      icon: 'ShieldCheck',
      name: 'ГОСТ',
      description: 'Соответствие государственным стандартам качества'
    },
    {
      icon: 'ClipboardCheck',
      name: 'SGS',
      description: 'Международная проверка качества продукции'
    }
  ];

  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Сертификаты и стандарты качества
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Все необходимые документы для работы в Казахстане и участия в тендерах
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificates.map((cert, index) => (
            <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8 pb-8">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={cert.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                Полный пакет документов для вашего бизнеса
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Сертификаты соответствия</h4>
                    <p className="text-muted-foreground text-sm">
                      Все сертификаты действительны для Казахстана и стран ЕАЭС
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Технические паспорта</h4>
                    <p className="text-muted-foreground text-sm">
                      Подробные спецификации и характеристики продукции
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Паспорта безопасности</h4>
                    <p className="text-muted-foreground text-sm">
                      Полная информация о безопасном использовании и хранении
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-2 mt-1">
                    <Icon name="Check" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Для участия в тендерах</h4>
                    <p className="text-muted-foreground text-sm">
                      Готовый комплект документов для госзакупок
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-blue-50 rounded-xl p-8 border-2 border-primary/20">
              <div className="text-center mb-6">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileText" className="text-primary" size={40} />
                </div>
                <h4 className="text-xl font-bold mb-2">Документы доступны сразу</h4>
                <p className="text-muted-foreground">
                  Предоставим всю необходимую документацию уже на этапе запроса прайс-листа
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Сертификаты качества</span>
                  <Icon name="Download" className="text-primary" size={18} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Технические паспорта</span>
                  <Icon name="Download" className="text-primary" size={18} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Паспорта безопасности</span>
                  <Icon name="Download" className="text-primary" size={18} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
