import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ServicesSectionProps {
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
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
  );
};

export default ServicesSection;
