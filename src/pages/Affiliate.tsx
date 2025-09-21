import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ProgressBar } from "@/components/ui/progress-bar";
import { 
  ArrowLeft, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Gift,
  CheckCircle,
  Star
} from "lucide-react";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProgressBar />
      
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-line">
        <div className="container-premium">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-ember rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="font-sora font-bold text-xl">AgentForge</span>
            </Link>
            
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container-premium">
          <ScrollReveal className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-sora font-bold leading-tight mb-6">
              Affiliate <span className="text-transparent bg-gradient-ember bg-clip-text">Program</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
              Earn by referring AgentForge. Join our partner network and get rewarded for sharing AI that works.
            </p>
            <Button variant="premium" size="lg" className="text-lg">
              Apply to Join
              <DollarSign className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-card/30">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Why partner with us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              High-value commissions on enterprise AI solutions that clients actually want.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "High Commission",
                description: "Earn generous commissions on all paid plans for the first 12 months of each referral."
              },
              {
                icon: TrendingUp,
                title: "Recurring Revenue",
                description: "Monthly recurring commissions as long as your referrals stay active."
              },
              {
                icon: Gift,
                title: "Bonus Rewards",
                description: "$1,000 bonus for every 5 successful Enterprise plan referrals."
              }
            ].map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-8 h-full hover-lift bg-gradient-card border-line">
                  <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-sora font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20">
        <div className="container-premium">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <h2 className="text-4xl lg:text-5xl font-sora font-bold mb-8">
                Partner Requirements
              </h2>
              <div className="space-y-4">
                {[
                  "Established business or personal brand",
                  "Audience interested in AI/automation",
                  "Commitment to quality referrals",
                  "Professional communication standards"
                ].map((requirement, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{requirement}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-8 bg-gradient-card border-line">
                <h3 className="text-2xl font-sora font-bold mb-6">Ready to Apply?</h3>
                <p className="text-muted-foreground mb-6">
                  Join our exclusive partner network and start earning with every referral.
                </p>
                <div className="space-y-4">
                  <Button variant="premium" className="w-full">
                    <Users className="w-4 h-4" />
                    Submit Application
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Applications reviewed within 48 hours
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-line">
        <div className="container-premium">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground text-sm">
                Terms of Service
              </Link>
            </div>
            <p className="text-muted-foreground text-sm text-center">
              © 2024 AgentForge. All rights reserved.
            </p>
          </div>
          <div className="text-center mt-4">
            <p className="text-muted-foreground text-sm">
              Serving clients in Huntington Beach, Orange County, Los Angeles & Long Beach.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Affiliate;