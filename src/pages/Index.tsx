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

  const rooms: Array<{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    features: string[];
  }> = [];

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