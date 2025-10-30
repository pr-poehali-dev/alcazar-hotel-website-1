import { useState } from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import RoomsSection from '@/components/RoomsSection';
import BookingSection from '@/components/BookingSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const { toast } = useToast();

  const rooms = [
    {
      id: 1,
      name: 'Эконом',
      description: 'Уютный номер с основными удобствами для комфортного проживания',
      price: 4500,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/b5502499-b1f5-404a-b0e5-067a1a08fa0d.jpg',
      features: ['Двуспальная кровать', 'Wi-Fi', 'Кондиционер', 'TV', 'Душ']
    },
    {
      id: 2,
      name: 'Стандарт',
      description: 'Комфортный номер со всеми необходимыми удобствами',
      price: 6500,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/34105f76-c412-4bba-ab97-94f19f40104f.jpg',
      features: ['Кровать King Size', 'Wi-Fi', 'Кондиционер', 'Smart TV', 'Сейф', 'Мини-бар']
    },
    {
      id: 3,
      name: 'Улучшенный стандарт',
      description: 'Просторный номер с дополнительными удобствами и зоной отдыха',
      price: 8500,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/49a836cf-76b1-4905-9375-c3d31f30c941.jpg',
      features: ['Кровать King Size', 'Wi-Fi', 'Кондиционер', 'Smart TV', 'Зона отдыха', 'Мини-бар', 'Сейф', 'Халаты']
    },
    {
      id: 4,
      name: 'Семейный',
      description: 'Комфортный номер для семейного отдыха с двумя кроватями',
      price: 9500,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/e355ed44-2cd7-4e9f-9d0c-e8294439e41b.jpg',
      features: ['Две двуспальные кровати', 'Wi-Fi', 'Кондиционер', 'Smart TV', 'Мини-бар', 'Сейф', 'Детские принадлежности']
    },
    {
      id: 5,
      name: 'Комфорт',
      description: 'Роскошный номер с панорамным видом и улучшенными удобствами',
      price: 12500,
      image: 'https://cdn.poehali.dev/projects/dfe031ef-6532-4bcc-9277-04b24aa03a8c/files/e355ed44-2cd7-4e9f-9d0c-e8294439e41b.jpg',
      features: ['Кровать King Size', 'Wi-Fi', 'Кондиционер', 'Smart TV', 'Гостиная', 'Мини-бар', 'Сейф', 'Халаты', 'Панорамные окна', 'Люкс ванная']
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
      <Header />
      <main className="pt-20">
        <HeroSection />
        <RoomsSection 
          rooms={rooms}
          checkIn={checkIn}
          checkOut={checkOut}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
          setSelectedRoom={setSelectedRoom}
          handleBooking={handleBooking}
        />
        <BookingSection 
          rooms={rooms}
          checkIn={checkIn}
          checkOut={checkOut}
          setCheckIn={setCheckIn}
          setCheckOut={setCheckOut}
          setSelectedRoom={setSelectedRoom}
          handleBooking={handleBooking}
        />
        <AboutSection />
        <ServicesSection services={services} />
        <GallerySection rooms={rooms} />
        <ReviewsSection reviews={reviews} />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;