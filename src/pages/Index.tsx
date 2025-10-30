import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const { toast } = useToast();

  const rooms = [
    {
      id: 1,
      name: 'Стандартный номер',
      description: 'Уютный номер с видом на город, оснащенный всем необходимым для комфортного пребывания',
      price: 5000,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/14d3e0cd-af7d-469f-8ecf-9049a01c5b30.jpg',
      features: ['Двуспальная кровать', 'Wi-Fi', 'Кондиционер', 'ТВ', 'Мини-бар']
    },
    {
      id: 2,
      name: 'Люкс',
      description: 'Просторный номер премиум-класса с отдельной зоной отдыха и видом на парк',
      price: 8500,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/2599b149-7d30-4aa2-9997-986fec7bedb7.jpg',
      features: ['Кровать King Size', 'Wi-Fi', 'Кондиционер', 'ТВ', 'Мини-бар', 'Зона отдыха', 'Балкон']
    },
    {
      id: 3,
      name: 'Президентский люкс',
      description: 'Роскошные апартаменты с панорамными окнами и эксклюзивным сервисом',
      price: 15000,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/4fffd1d7-e8fc-417b-9821-c99e8a5a6971.jpg',
      features: ['Кровать King Size', 'Wi-Fi', 'Кондиционер', 'ТВ', 'Мини-бар', 'Гостиная', 'Панорамные окна', 'Люстра', 'Два санузла']
    }
  ];

  const services = [
    { icon: 'Utensils', title: 'Ресторан', description: 'Изысканная кухня от шеф-повара' },
    { icon: 'Waves', title: 'SPA & Wellness', description: 'Комплекс для отдыха и релаксации' },
    { icon: 'Car', title: 'Парковка', description: 'Охраняемая парковка для гостей' },
    { icon: 'Wifi', title: 'Wi-Fi', description: 'Высокоскоростной интернет' },
    { icon: 'Dumbbell', title: 'Фитнес-центр', description: 'Современный тренажерный зал' },
    { icon: 'Users', title: 'Конференц-зал', description: 'Для деловых мероприятий' }
  ];

  const reviews = [
    { name: 'Мария Иванова', rating: 5, text: 'Прекрасный отель! Отличный сервис, чистые номера и вежливый персонал.', date: '15 октября 2024' },
    { name: 'Александр Петров', rating: 5, text: 'Останавливались в отеле на выходные. Все понравилось, особенно ресторан.', date: '10 октября 2024' },
    { name: 'Елена Сидорова', rating: 4, text: 'Хороший отель, удобное расположение. Рекомендую!', date: '5 октября 2024' }
  ];

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      room: rooms.find(r => r.id === selectedRoom)?.name,
      checkIn: checkIn ? format(checkIn, 'dd.MM.yyyy', { locale: ru }) : '',
      checkOut: checkOut ? format(checkOut, 'dd.MM.yyyy', { locale: ru }) : '',
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      guests: formData.get('guests')
    };

    toast({
      title: 'Заявка отправлена!',
      description: `Спасибо, ${data.name}! Мы свяжемся с вами в ближайшее время.`
    });
  };

  return (
    <div className="min-h-screen">
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

      <main className="pt-20">
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://cdn.poehali.dev/files/95f511e1-dbcd-4571-8962-cb8b570bcbd7.jpg)' }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative z-10 text-center text-white px-4 animate-fade-in">
            <h2 className="text-6xl md:text-8xl font-bold mb-6">Отель Алькасар</h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Классическая роскошь в сердце города</p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <a href="#booking">Забронировать номер</a>
            </Button>
          </div>
        </section>

        <section id="rooms" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">Наши номера</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Выберите идеальный номер для вашего отдыха</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rooms.map((room, idx) => (
                <Card key={room.id} className="overflow-hidden hover:shadow-xl transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-2xl">{room.name}</CardTitle>
                    <CardDescription className="text-base">{room.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {room.features.map(feature => (
                        <span key={feature} className="bg-secondary px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <p className="text-3xl font-bold text-primary">{room.price.toLocaleString()} ₽<span className="text-base text-muted-foreground">/ночь</span></p>
                  </CardContent>
                  <CardFooter>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full" onClick={() => setSelectedRoom(room.id)}>
                          Забронировать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">Бронирование номера</DialogTitle>
                          <DialogDescription>Заполните форму, и мы свяжемся с вами</DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleBooking} className="space-y-4">
                          <div>
                            <Label>Выбранный номер</Label>
                            <Input value={room.name} disabled />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label>Заезд</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="outline" className="w-full justify-start">
                                    <Icon name="Calendar" className="mr-2" size={16} />
                                    {checkIn ? format(checkIn, 'dd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} locale={ru} />
                                </PopoverContent>
                              </Popover>
                            </div>
                            <div>
                              <Label>Выезд</Label>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <Button variant="outline" className="w-full justify-start">
                                    <Icon name="Calendar" className="mr-2" size={16} />
                                    {checkOut ? format(checkOut, 'dd.MM.yyyy', { locale: ru }) : 'Выберите дату'}
                                  </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                  <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} locale={ru} />
                                </PopoverContent>
                              </Popover>
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="name">Имя</Label>
                            <Input id="name" name="name" required />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" name="email" type="email" required />
                          </div>
                          <div>
                            <Label htmlFor="phone">Телефон</Label>
                            <Input id="phone" name="phone" type="tel" required />
                          </div>
                          <div>
                            <Label htmlFor="guests">Количество гостей</Label>
                            <Input id="guests" name="guests" type="number" min="1" defaultValue="1" required />
                          </div>
                          <Button type="submit" className="w-full">Отправить заявку</Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">Онлайн бронирование</h2>
              <p className="text-center text-muted-foreground mb-12 text-lg">Забронируйте номер прямо сейчас</p>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Форма бронирования</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div>
                      <Label htmlFor="room-select">Выберите номер</Label>
                      <select 
                        id="room-select" 
                        className="w-full p-2 border rounded-md"
                        onChange={(e) => setSelectedRoom(Number(e.target.value))}
                        required
                      >
                        <option value="">Выберите номер</option>
                        {rooms.map(room => (
                          <option key={room.id} value={room.id}>{room.name} - {room.price.toLocaleString()} ₽/ночь</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label>Дата заезда</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                              <Icon name="Calendar" className="mr-2" size={16} />
                              {checkIn ? format(checkIn, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} locale={ru} />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div>
                        <Label>Дата выезда</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start">
                              <Icon name="Calendar" className="mr-2" size={16} />
                              {checkOut ? format(checkOut, 'dd MMMM yyyy', { locale: ru }) : 'Выберите дату'}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} locale={ru} />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="booking-name">Ваше имя</Label>
                        <Input id="booking-name" name="name" required />
                      </div>
                      <div>
                        <Label htmlFor="booking-phone">Телефон</Label>
                        <Input id="booking-phone" name="phone" type="tel" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="booking-email">Email</Label>
                      <Input id="booking-email" name="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="booking-guests">Количество гостей</Label>
                      <Input id="booking-guests" name="guests" type="number" min="1" defaultValue="1" required />
                    </div>
                    <div>
                      <Label htmlFor="booking-comments">Комментарии к бронированию</Label>
                      <Textarea id="booking-comments" name="comments" rows={4} />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Забронировать
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold mb-6 animate-fade-in">Об отеле Алькасар</h2>
              <p className="text-lg text-muted-foreground mb-8 animate-fade-in">
                Отель Алькасар — это воплощение классической элегантности и современного комфорта. 
                Наш отель располагается в историческом здании с уникальной архитектурой, 
                напоминающей средневековый замок.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="animate-slide-in">
                  <div className="text-5xl font-bold text-primary mb-2">15+</div>
                  <p className="text-lg">Лет на рынке</p>
                </div>
                <div className="animate-slide-in" style={{ animationDelay: '0.1s' }}>
                  <div className="text-5xl font-bold text-primary mb-2">50+</div>
                  <p className="text-lg">Номеров</p>
                </div>
                <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
                  <div className="text-5xl font-bold text-primary mb-2">10K+</div>
                  <p className="text-lg">Довольных гостей</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">Наши услуги</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Все для вашего комфорта</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, idx) => (
                <Card key={service.title} className="text-center hover:shadow-lg transition-shadow animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name={service.icon as any} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">Галерея</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Посмотрите на наш отель</p>
            <Tabs defaultValue="rooms" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="rooms">Номера</TabsTrigger>
                <TabsTrigger value="hotel">Отель</TabsTrigger>
                <TabsTrigger value="restaurant">Ресторан</TabsTrigger>
              </TabsList>
              <TabsContent value="rooms" className="grid md:grid-cols-3 gap-4">
                {rooms.map(room => (
                  <div key={room.id} className="overflow-hidden rounded-lg hover:scale-105 transition-transform">
                    <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
                  </div>
                ))}
              </TabsContent>
              <TabsContent value="hotel" className="grid md:grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-lg">
                  <img src="https://cdn.poehali.dev/files/95f511e1-dbcd-4571-8962-cb8b570bcbd7.jpg" alt="Фасад отеля" className="w-full h-80 object-cover" />
                </div>
                <div className="overflow-hidden rounded-lg">
                  <img src="https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/4fffd1d7-e8fc-417b-9821-c99e8a5a6971.jpg" alt="Интерьер" className="w-full h-80 object-cover" />
                </div>
              </TabsContent>
              <TabsContent value="restaurant" className="text-center py-12">
                <p className="text-muted-foreground">Фотографии ресторана скоро появятся</p>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="reviews" className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-4 animate-fade-in">Отзывы гостей</h2>
            <p className="text-center text-muted-foreground mb-16 text-lg">Что говорят наши гости</p>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {reviews.map((review, idx) => (
                <Card key={idx} className="animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="fill-primary text-primary" />
                        ))}
                      </div>
                    </div>
                    <CardDescription>{review.date}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center mb-16 animate-fade-in">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6 animate-slide-in">
                <div className="flex gap-4">
                  <Icon name="MapPin" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Phone" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Mail" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@alkasar-hotel.ru</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Icon name="Clock" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Круглосуточно</p>
                  </div>
                </div>
              </div>
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Напишите нам</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4" onSubmit={(e) => {
                    e.preventDefault();
                    toast({ title: 'Сообщение отправлено!', description: 'Мы свяжемся с вами в ближайшее время.' });
                  }}>
                    <div>
                      <Label htmlFor="contact-name">Имя</Label>
                      <Input id="contact-name" required />
                    </div>
                    <div>
                      <Label htmlFor="contact-email">Email</Label>
                      <Input id="contact-email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="contact-message">Сообщение</Label>
                      <Textarea id="contact-message" rows={4} required />
                    </div>
                    <Button type="submit" className="w-full">Отправить</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

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
    </div>
  );
};

export default Index;
