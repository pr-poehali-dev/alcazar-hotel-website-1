import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface ReviewsSectionProps {
  reviews: Array<{
    name: string;
    rating: number;
    text: string;
    date: string;
  }>;
}

const ReviewsSection = ({ reviews }: ReviewsSectionProps) => {
  return (
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
  );
};

export default ReviewsSection;
