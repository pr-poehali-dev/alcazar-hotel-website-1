import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactsSection = () => {
  const { toast } = useToast();

  return (
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
  );
};

export default ContactsSection;
