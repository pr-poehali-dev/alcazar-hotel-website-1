import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface RoomsSectionProps {
  rooms: Array<{
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    features: string[];
  }>;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  setCheckIn: (date: Date | undefined) => void;
  setCheckOut: (date: Date | undefined) => void;
  setSelectedRoom: (id: number) => void;
  handleBooking: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RoomsSection = ({ 
  rooms, 
  checkIn, 
  checkOut, 
  setCheckIn, 
  setCheckOut, 
  setSelectedRoom, 
  handleBooking 
}: RoomsSectionProps) => {
  return (
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
  );
};

export default RoomsSection;
