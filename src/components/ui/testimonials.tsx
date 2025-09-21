import React from 'react';
import { Card } from './card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  company: string;
  review: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    review: "AgentForge transformed our customer support. We went from 4-hour response times to instant answers, and our booking conversion increased by 45%. The AI understands our products perfectly.",
    rating: 5
  },
  {
    name: "Marcus Rodriguez", 
    company: "Elite Wellness Clinic",
    review: "The SMS follow-up feature alone paid for itself. We recovered over $50k in missed bookings in the first quarter. The AI sounds exactly like our staff - professional and caring.",
    rating: 5
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex space-x-1">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-muted-foreground/30'
        }`} 
      />
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="p-8 bg-gradient-card border-line hover-lift">
          <div className="flex items-center justify-between mb-4">
            <StarRating rating={testimonial.rating} />
            <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded-full">
              Verified Google Review
            </span>
          </div>
          
          <blockquote className="text-foreground leading-relaxed mb-6">
            "{testimonial.review}"
          </blockquote>
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-ember rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-sora font-semibold text-sm">{testimonial.name}</div>
              <div className="text-muted-foreground text-xs">{testimonial.company}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};