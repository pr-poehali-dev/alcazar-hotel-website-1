const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">Алькасар</h1>
          <div className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#rooms" className="hover:text-primary transition-colors">Номера</a>
            <a href="#booking" className="hover:text-primary transition-colors">Бронирование</a>
            <a href="#about" className="hover:text-primary transition-colors">Об отеле</a>
            <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Галерея</a>
            <a href="#reviews" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
