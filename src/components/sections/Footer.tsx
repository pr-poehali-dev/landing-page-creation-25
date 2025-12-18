import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">О компании</h3>
            <p className="text-slate-400 text-sm">
              Производитель высококачественных полиуретановых герметиков с международным опытом экспорта
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Продукция</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Полиуретановые герметики</li>
              <li>Строительная химия</li>
              <li>Сертификаты качества</li>
              <li>Техническая поддержка</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Для партнёров</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Условия поставок</li>
              <li>Логистика</li>
              <li>Документация</li>
              <li>Маркетинговая поддержка</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 (___) ___-__-__</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>export@company.ru</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Россия, Москва</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2024 Все права защищены
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon name="Linkedin" size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
