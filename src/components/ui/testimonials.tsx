import React from 'react';
import { Card } from './card';
import { Star } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

interface TestimonialProps {
  name: string;
  company: string;
  review: string;
  rating: number;
}

interface TestimonialsProps {
  theme?: "ember" | "aqua";
}

export function Testimonials({ theme = "ember" }: TestimonialsProps) {
  const testimonials: TestimonialProps[] = theme === "aqua" ? [
    {
      name: "Dr. Sarah Martinez",
      company: "Vitality Wellness Center",
      review: "AgentForge helped us reduce no-shows by 40% and improved patient satisfaction significantly. The HIPAA-compliant AI handles intake perfectly and sounds natural.",
      rating: 5
    },
    {
      name: "Michael Chen", 
      company: "Arctic Recovery Spa",
      review: "Our wellness clinic saw a 35% increase in bookings after implementing AgentForge. The AI understands our cryotherapy and infrared sauna services perfectly.",
      rating: 5
    }
  ] : [
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

  return (
    <section className="py-20">
      <div className="container-premium">
        <ScrollReveal className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Client reviews</h2>
          <p className="text-xl text-muted-foreground">
            See what our clients are saying about AgentForge
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className={`p-8 border-line hover-lift h-full ${
                theme === "aqua" 
                  ? "bg-gradient-to-br from-aqua/5 to-aqua-glow/10 border-aqua/20" 
                  : "bg-gradient-card"
              }`}>
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
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    theme === "aqua" 
                      ? "bg-gradient-to-br from-aqua to-aqua-glow" 
                      : "bg-gradient-ember"
                  }`}>
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}