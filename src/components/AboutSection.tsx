const AboutSection = () => {
  return (
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
  );
};

export default AboutSection;
