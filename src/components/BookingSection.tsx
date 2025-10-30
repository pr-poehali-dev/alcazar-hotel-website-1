import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface BookingSectionProps {
  rooms: Array<{
    id: number;
    name: string;
    price: number;
  }>;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  setCheckIn: (date: Date | undefined) => void;
  setCheckOut: (date: Date | undefined) => void;
  setSelectedRoom: (id: number) => void;
  handleBooking: (e: React.FormEvent<HTMLFormElement>) => void;
}

const BookingSection = ({ 
  rooms, 
  checkIn, 
  checkOut, 
  setCheckIn, 
  setCheckOut, 
  setSelectedRoom, 
  handleBooking 
}: BookingSectionProps) => {
  return (
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
  );
};

export default BookingSection;
