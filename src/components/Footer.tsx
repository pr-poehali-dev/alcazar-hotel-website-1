const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Алькасар</h3>
            <p className="text-background/80">Классическая роскошь в сердце города</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <div className="space-y-2 text-background/80">
              <div><a href="#rooms" className="hover:text-background transition-colors">Номера</a></div>
              <div><a href="#services" className="hover:text-background transition-colors">Услуги</a></div>
              <div><a href="#gallery" className="hover:text-background transition-colors">Галерея</a></div>
              <div><a href="#contacts" className="hover:text-background transition-colors">Контакты</a></div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-background/80">
              <p>+7 (495) 123-45-67</p>
              <p>info@alkasar-hotel.ru</p>
              <p>г. Москва, ул. Примерная, д. 1</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>&copy; 2024 Отель Алькасар. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
