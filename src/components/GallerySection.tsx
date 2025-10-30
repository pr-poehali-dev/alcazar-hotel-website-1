import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface GallerySectionProps {
  rooms: Array<{
    id: number;
    name: string;
    image: string;
  }>;
}

const GallerySection = ({ rooms }: GallerySectionProps) => {
  return (
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
  );
};

export default GallerySection;
