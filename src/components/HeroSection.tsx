import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
