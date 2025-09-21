import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ChatShowcase } from '@/components/ui/enhanced-chat-showcase';
import { StructuredData } from '@/components/ui/structured-data';
import { SoundManager } from '@/components/ui/sound-manager';
import { 
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Phone,
  BookOpen,
  Smartphone,
  Target,
  BarChart3,
  Users,
  Shield,
  CheckCircle,
  Calendar
} from 'lucide-react';

export default function Index() {
  const [countUp, setCountUp] = useState({
    hours: 0,
    booking: 0,
    deflection: 0,
    support: 0
  });

  useEffect(() => {
    const targetValues = {
      hours: 15,
      booking: 45, 
      deflection: 80,
      support: 24
    };

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCountUp({
        hours: Math.floor(targetValues.hours * progress),
        booking: Math.floor(targetValues.booking * progress),
        deflection: Math.floor(targetValues.deflection * progress),
        support: Math.floor(targetValues.support * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCountUp(targetValues);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const playDemoSound = () => {
    if ((window as any).agentForgeSounds?.soundEnabled) {
      (window as any).agentForgeSounds?.playBeep(600, 150);
    }
  };

  return (
    <SoundManager>
      <div className="min-h-screen bg-background text-foreground">
        <StructuredData />
        <ProgressBar />
      
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-line">
          <div className="container-premium">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-ember rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-sora font-bold text-xl">AgentForge</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="text-ember font-medium">
                  Home
                </Link>
                <button onClick={() => scrollToSection('how-it-works')} className="text-muted-foreground hover:text-foreground transition-colors">
                  How it Works
                </button>
                <button onClick={() => scrollToSection('features')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </button>
                <Link to="/wellness" className="text-muted-foreground hover:text-foreground transition-colors">
                  Wellness
                </Link>
                <Link to="/affiliate" className="text-muted-foreground hover:text-foreground transition-colors">
                  Affiliate
                </Link>
              </nav>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="tel:+1-XXX-XXX-XXXX">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => {
                    playDemoSound();
                    scrollToSection('demo-form');
                  }}
                  className="bg-gradient-ember hover:opacity-90 text-white"
                >
                  Get a Demo
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-30"></div>
          
          <div className="relative z-10 container-premium py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-5xl lg:text-7xl font-sora font-bold leading-tight">
                    AI agents for 
                    <span className="text-ember"> bookings </span>
                    & support
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    24/7 website chat, SMS follow-ups, and on-brand answers that convert visitors into bookings.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    variant="default" 
                    size="lg"
                    onClick={() => {
                      playDemoSound();
                      scrollToSection('demo-form');
                    }}
                    className="text-lg bg-gradient-ember hover:opacity-90 text-white"
                  >
                    Get a Demo
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('live-demo')}
                    className="text-lg"
                  >
                    See Live Demo
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} className="relative">
                <div className="relative aspect-video bg-gradient-card rounded-3xl overflow-hidden shadow-premium">
                  {/* Video placeholder with ember overlay */}
                  <div className="absolute inset-0 bg-gradient-hero"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-ember rounded-full flex items-center justify-center mx-auto">
                        <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-muted-foreground">Hero Video Coming Soon</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Dynamic Chat Showcase */}
        <section id="live-demo" className="py-16 bg-gradient-to-br from-card/30 to-card/10">
          <div className="container-premium">
            <ScrollReveal className="text-center space-y-4 mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold">Live Chat Demo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our AI handles real conversations
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <ChatShowcase />
            </ScrollReveal>
          </div>
        </section>

        {/* How it Works */}
        <section id="how-it-works" className="py-20 lg:py-32">
          <div className="container-premium">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
                How it works
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI agents seamlessly integrate into your workflow, handling conversations with precision and personality.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BookOpen,
                  title: "On-brand conversations",
                  description: "Grounded in your docs, FAQs, and brand voice to deliver consistent, accurate responses."
                },
                {
                  icon: Smartphone,
                  title: "Website & SMS",
                  description: "Capture leads through chat widgets and follow up with personalized SMS sequences."
                },
                {
                  icon: Target,
                  title: "Help Center deflection", 
                  description: "Answer customer questions instantly with traceable sources and smart escalation."
                }
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="p-8 h-full hover-lift bg-gradient-card border-line">
                    <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-6">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-sora font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section id="features" className="py-20 lg:py-32 bg-card/30">
          <div className="container-premium">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
                What you get
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A complete AI agent solution that scales with your business.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: MessageSquare, title: "Live website chat", description: "Instant responses to visitor questions with smart lead qualification." },
                { icon: Smartphone, title: "SMS follow-ups", description: "Automated sequences that nurture leads and reduce no-shows." },
                { icon: BookOpen, title: "Knowledge-grounding", description: "Responses anchored in your actual documentation and policies." },
                { icon: BarChart3, title: "Analytics dashboard", description: "Track performance, conversation quality, and conversion metrics." },
                { icon: Users, title: "Human handoff", description: "Seamless escalation to your team when needed." },
                { icon: Shield, title: "Compliance-aware", description: "PII-conscious responses that protect your business." }
              ].map((feature, index) => (
                <ScrollReveal key={index} delay={index * 75}>
                  <Card className="p-6 hover-lift bg-gradient-card border-line">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-sora font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Results / Metrics */}
        <section className="py-20 lg:py-32">
          <div className="container-premium">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
                Proven results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our AI agents deliver measurable impact from day one.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { value: countUp.hours, suffix: "", label: "avg hours saved / wk" },
                { value: countUp.booking, suffix: "%", label: "booking lift" },
                { value: countUp.deflection, suffix: "%", label: "ticket deflection" },
                { value: countUp.support, suffix: "", label: "support hrs covered" }
              ].map((metric, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="p-6 text-center hover-lift bg-gradient-card border-line">
                    <div className="text-4xl lg:text-5xl font-sora font-bold text-ember mb-2">
                      {metric.value}{metric.suffix}
                    </div>
                    <div className="text-muted-foreground text-sm">{metric.label}</div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20 lg:py-32 bg-card/30">
          <div className="container-premium">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your business needs.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$999",
                  period: "/mo",
                  setup: "$499 setup",
                  features: [
                    "1 AI Agent (Web chat + SMS)",
                    "Lead capture + Calendar booking",
                    "Booking recovery (missed booking follow-ups)",
                    "1,000 conversations/mo included",
                    "Monthly reporting"
                  ],
                  cta: "Start with Starter",
                  popular: false
                },
                {
                  name: "Growth",
                  price: "$1,749", 
                  period: "/mo",
                  setup: "$749 setup",
                  features: [
                    "2 AI Agents (e.g. Web + SMS or Web + Voice)",
                    "All Starter features",
                    "Advanced booking recovery + multi-channel",
                    "3,000 conversations/mo included",
                    "Monthly reporting"
                  ],
                  cta: "Choose Growth",
                  popular: true
                },
                {
                  name: "Pro",
                  price: "$2,449",
                  period: "/mo",
                  setup: "$999 setup", 
                  features: [
                    "2 AI Agents (Web + Voice or custom mix)",
                    "All Growth features",
                    "5,000 conversations/mo included",
                    "Custom integrations & analytics",
                    "Weekly reporting"
                  ],
                  cta: "Go Pro",
                  popular: false
                },
                {
                  name: "Custom",
                  price: "Contact us",
                  period: "",
                  setup: "",
                  features: [
                    "Unlimited bots",
                    "Everything in Pro",
                    "Fully tailored"
                  ],
                  cta: "Contact Sales",
                  popular: false
                }
              ].map((tier, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className={`p-8 h-full relative ${
                    tier.popular 
                      ? 'border-ember bg-gradient-to-br from-ember/5 to-ember/10 shadow-xl' 
                      : 'border-line'
                  }`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-ember text-white px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center space-y-4 mb-8">
                      <h3 className="text-xl font-sora font-bold">{tier.name}</h3>
                      <div>
                        <div className="text-4xl font-sora font-bold">{tier.price}</div>
                        {tier.setup && <div className="text-sm text-muted-foreground mt-1">{tier.setup}</div>}
                        <div className="text-sm text-muted-foreground">{tier.period}</div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-ember flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => scrollToSection('demo-form')}
                      className={`w-full ${
                        tier.popular 
                          ? 'bg-gradient-ember hover:opacity-90 text-white' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {tier.cta}
                    </Button>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="bg-gradient-card rounded-2xl p-8 border border-line mt-12">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-sora font-bold">Add-ons</h4>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center justify-between bg-ember/10 border border-ember/20 rounded-lg px-4 py-3 max-w-sm w-full">
                      <span className="text-ember font-medium">Voice AI Agent</span>
                      <span className="font-bold">$599/mo</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Setup fee covers agent training, testing, and onboarding.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Demo Forms */}
        <section id="demo-form" className="py-20 lg:py-32">
          <div className="container-premium">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
                Get started today
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Book a demo or contact our team to see AgentForge in action.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal>
                <Card className="p-8 bg-gradient-card border-line hover-lift">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-gradient-ember rounded-2xl flex items-center justify-center mx-auto">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-sora font-bold mb-3">Get a personalized demo</h3>
                      <p className="text-muted-foreground">See how AgentForge works with your specific use case</p>
                    </div>
                    {/* GHL_FORM_EMBED */}
                    <div className="space-y-4">
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="w-full bg-gradient-ember hover:opacity-90 text-white"
                        onClick={() => {
                          playDemoSound();
                        }}
                      >
                        Contact Sales
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <Card className="p-8 bg-gradient-card border-line hover-lift">
                  <div className="text-center space-y-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                      <Calendar className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-sora font-bold mb-3">Book a call</h3>
                      <p className="text-muted-foreground">Schedule a 15-minute consultation with our team</p>
                    </div>
                    {/* GHL_CALENDAR_EMBED */}
                    <div className="space-y-4">
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                      >
                        Schedule Demo
                      </Button>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 bg-card border-t border-line">
          <div className="container-premium">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-sora font-bold text-xl">AgentForge</h3>
                <p className="text-muted-foreground text-sm">
                  AI agents for bookings & customer support. Serving businesses in Garden Grove & Orange County.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Product</h4>
                <div className="space-y-2 text-sm">
                  <button onClick={() => scrollToSection('how-it-works')} className="block text-muted-foreground hover:text-primary transition-colors">How it Works</button>
                  <button onClick={() => scrollToSection('features')} className="block text-muted-foreground hover:text-primary transition-colors">Features</button>
                  <button onClick={() => scrollToSection('pricing')} className="block text-muted-foreground hover:text-primary transition-colors">Pricing</button>
                  <Link to="/wellness" className="block text-muted-foreground hover:text-primary transition-colors">Wellness</Link>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Company</h4>
                <div className="space-y-2 text-sm">
                  <Link to="/affiliate" className="block text-muted-foreground hover:text-primary transition-colors">Affiliate</Link>
                  <Link to="/privacy" className="block text-muted-foreground hover:text-primary transition-colors">Privacy</Link>
                  <Link to="/terms" className="block text-muted-foreground hover:text-primary transition-colors">Terms</Link>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Garden Grove, CA</p>
                  <a href="tel:+1-XXX-XXX-XXXX" className="block hover:text-primary transition-colors">+1-XXX-XXX-XXXX</a>
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
    </SoundManager>
  );
}