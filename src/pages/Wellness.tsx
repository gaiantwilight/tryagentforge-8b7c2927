import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { WaterCanvas } from '@/components/ui/water-canvas';
import { StructuredData } from '@/components/ui/structured-data';
import { 
  ArrowRight, 
  Shield, 
  Clock, 
  Users, 
  TrendingUp,
  CheckCircle,
  Zap,
  Heart,
  Brain,
  Activity
} from 'lucide-react';

export default function Wellness() {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Improved Patient Care",
      description: "24/7 AI support reduces wait times and improves patient satisfaction with instant, accurate responses."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Automated Scheduling",
      description: "Smart booking system handles appointment scheduling, reminders, and follow-ups automatically."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensures all patient data is protected and compliant with healthcare regulations."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Revenue",
      description: "Reduce no-shows by 40% and increase bookings by 35% with intelligent follow-up systems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Staff Efficiency",
      description: "Free up your team to focus on patient care while AI handles routine inquiries and scheduling."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Smart Insights",
      description: "Analytics dashboard provides actionable insights on patient engagement and clinic performance."
    }
  ];

  const modalities = [
    "Cryotherapy", "Red Light", "Infrared Sauna", "Cold Plunge", "Hyperbaric",
    "Gyms", "Dental", "Massage", "Yoga", "Med-Spa"
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-aqua" />,
      title: "Intelligent Triage",
      description: "AI assesses patient needs and routes to appropriate care providers or emergency services when needed."
    },
    {
      icon: <Activity className="w-8 h-8 text-aqua" />,
      title: "Wellness Tracking",
      description: "Monitor patient progress, treatment adherence, and wellness goals with automated check-ins."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-aqua" />,
      title: "Treatment Reminders",
      description: "Automated SMS and email reminders for medications, treatments, and wellness appointments."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProgressBar />
      <StructuredData />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-line">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="font-sora font-bold text-xl">AgentForge</a>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
                <a href="/wellness" className="text-aqua">Wellness</a>
                <a href="/affiliate" className="text-muted-foreground hover:text-foreground transition-colors">Affiliate</a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="tel:+1-XXX-XXX-XXXX">Call Us</a>
              </Button>
              <Button size="sm" className="bg-aqua hover:bg-aqua-glow text-background" asChild>
                <a href="#demo">Get a Demo</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <WaterCanvas className="absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  AI agents for 
                  <span className="text-aqua"> wellness </span>
                  & healthcare
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                  24/7 HIPAA-compliant patient support, intelligent scheduling, and wellness tracking that keeps your practice running smoothly.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-aqua hover:bg-aqua-glow text-background">
                  Get a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-aqua text-aqua hover:bg-aqua hover:text-background">
                  See Live Embeds
                </Button>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="relative">
              <div className="relative aspect-video bg-gradient-card rounded-2xl border border-line overflow-hidden">
                {/* VIDEO_PLACEHOLDER: Wellness demo video will go here */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 bg-aqua/20 rounded-full flex items-center justify-center mx-auto">
                      <Heart className="w-8 h-8 text-aqua" />
                    </div>
                    <p className="text-muted-foreground">Wellness Demo Video</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Transform your wellness practice</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Reduce administrative burden while improving patient outcomes with AI that understands healthcare.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-8 bg-gradient-card border-line hover-lift h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-aqua/20 rounded-full flex items-center justify-center text-aqua">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Modalities Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Wellness modalities we support</h2>
            <p className="text-lg text-muted-foreground">
              AI agents trained for your specific wellness services and treatments
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-3">
              {modalities.map((modality, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-aqua/10 border border-aqua/20 rounded-full text-aqua font-medium text-sm hover:bg-aqua/20 transition-colors"
                >
                  {modality}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Specialized for wellness</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Purpose-built features for healthcare and wellness practices that understand patient care.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className="p-8 bg-gradient-card border-line hover-lift text-center h-full">
                  <div className="w-16 h-16 bg-aqua/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Try it live</h2>
            <p className="text-xl text-muted-foreground">
              Experience our wellness AI agents in action
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <Card className="p-8 bg-gradient-card border-line">
                <h3 className="text-2xl font-semibold mb-6 text-center">Get Started Today</h3>
                {/* GHL_FORM_EMBED */}
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground">Contact form will be embedded here</p>
                  <Button className="bg-aqua hover:bg-aqua-glow text-background">
                    Contact Sales
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-8 bg-gradient-card border-line">
                <h3 className="text-2xl font-semibold mb-6 text-center">Book a Demo</h3>
                {/* GHL_CALENDAR_EMBED */}
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground">Calendar booking will be embedded here</p>
                  <Button variant="outline" className="border-aqua text-aqua hover:bg-aqua hover:text-background">
                    Schedule Demo
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Care Disclaimer */}
      <section className="py-8 bg-card/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                <strong>Healthcare Notice:</strong> AgentForge AI agents provide informational support and are not intended as medical advice. 
                All patient interactions are HIPAA-compliant and logged for quality assurance. 
                For medical emergencies, patients are directed to appropriate emergency services.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-sora font-bold text-xl">AgentForge</h3>
              <p className="text-muted-foreground text-sm">
                AI agents for wellness practices. Serving clinics in Garden Grove & Orange County.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-muted-foreground hover:text-aqua transition-colors">Features</a>
                <a href="#pricing" className="block text-muted-foreground hover:text-aqua transition-colors">Pricing</a>
                <a href="#demo" className="block text-muted-foreground hover:text-aqua transition-colors">Demo</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm">
                <a href="/affiliate" className="block text-muted-foreground hover:text-aqua transition-colors">Affiliate</a>
                <a href="/privacy" className="block text-muted-foreground hover:text-aqua transition-colors">Privacy</a>
                <a href="/terms" className="block text-muted-foreground hover:text-aqua transition-colors">Terms</a>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Garden Grove, CA</p>
                <a href="tel:+1-XXX-XXX-XXXX" className="block hover:text-aqua transition-colors">+1-XXX-XXX-XXXX</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-line mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AgentForge. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* GHL_CHAT_WIDGET */}
    </div>
  );
}