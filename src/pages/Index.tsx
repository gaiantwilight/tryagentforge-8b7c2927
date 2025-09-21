import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { EmberCanvas } from "@/components/ui/ember-canvas";
import { ChatShowcase } from "@/components/ui/chat-showcase";
import { Testimonials } from "@/components/ui/testimonials";
import { SecuritySection } from "@/components/ui/security-section";
import { SoundManager } from "@/components/ui/sound-manager";
import { StructuredData } from "@/components/ui/structured-data";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Calendar, 
  MessageSquare, 
  Smartphone, 
  BookOpen, 
  BarChart3,
  Users,
  Shield,
  Zap,
  Clock,
  Target,
  CheckCircle,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [countUp, setCountUp] = useState({
    hours: 0,
    booking: 0,
    deflection: 0,
    support: 0
  });

  // Count up animation for metrics
  useEffect(() => {
    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCountUp({
          hours: Math.floor(42 * progress),
          booking: Math.floor(31 * progress),
          deflection: Math.floor(67 * progress),
          support: Math.floor(24 * progress)
        });

        if (currentStep >= steps) {
          clearInterval(interval);
          setCountUp({ hours: 42, booking: 31, deflection: 67, support: 24 });
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
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
              <Button variant="call" size="sm">
                <Phone className="w-4 h-4" />
                Call Us
              </Button>
              <Button 
                variant="premium" 
                size="sm"
                onClick={() => {
                  playDemoSound();
                  scrollToSection('demo-form');
                }}
              >
                Get a Demo
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-line">
              <nav className="flex flex-col space-y-3">
                <button onClick={() => scrollToSection('how-it-works')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                  How it Works
                </button>
                <button onClick={() => scrollToSection('features')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </button>
                <Link to="/affiliate" className="text-left text-muted-foreground hover:text-foreground transition-colors">
                  Affiliate
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="call" size="sm">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </Button>
                  <Button 
                    variant="premium" 
                    size="sm"
                    onClick={() => {
                      playDemoSound();
                      scrollToSection('demo-form');
                    }}
                  >
                    Get a Demo
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <EmberCanvas className="opacity-30" />
        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-sora font-bold leading-tight">
                  AI agents for <span className="text-transparent bg-gradient-ember bg-clip-text">bookings</span> & support
                </h1>
                <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                  24/7 website chat, SMS follow-ups, and on-brand answers that convert—so your team doesn't have to.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="premium" 
                  size="lg"
                  onClick={() => {
                    playDemoSound();
                    scrollToSection('demo-form');
                  }}
                  className="text-lg"
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
                  See Live Embeds
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
      <section className="py-12 border-y border-line">
        <div className="container-premium">
          <ScrollReveal>
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
                <Card className="p-8 text-center hover-lift bg-gradient-card border-line">
                  <div className="text-4xl lg:text-5xl font-sora font-bold text-transparent bg-gradient-ember bg-clip-text mb-2">
                    {metric.value}{metric.suffix}
                  </div>
                  <p className="text-muted-foreground">{metric.label}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="live-demo" className="py-20 lg:py-32 bg-card/30">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              See it in action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our AI agents firsthand with live demos and booking tools.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollReveal>
              <Card className="p-8 bg-gradient-card border-line h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-sora font-bold mb-4">Capture leads instantly</h3>
                  <p className="text-muted-foreground">Try our lead capture form with smart qualification questions.</p>
                </div>
                <div className="bg-muted/10 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                  {/* GHL_FORM_EMBED */}
                  <div className="text-center space-y-4">
                    <Calendar className="w-12 h-12 text-primary mx-auto" />
                    <p className="text-muted-foreground">Lead capture form embed goes here</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-8 bg-gradient-card border-line h-full">
                <div className="mb-6">
                  <h3 className="text-2xl font-sora font-bold mb-4">Book a demo</h3>
                  <p className="text-muted-foreground">Schedule a personalized walkthrough of our platform.</p>
                </div>
                <div className="bg-muted/10 rounded-2xl p-8 min-h-[300px] flex items-center justify-center">
                  {/* GHL_CALENDAR_EMBED */}
                  <div className="text-center space-y-4">
                    <MessageSquare className="w-12 h-12 text-primary mx-auto" />
                    <p className="text-muted-foreground">Calendar booking embed goes here</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Security & Evaluations */}
      <section className="py-20 lg:py-32">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Ship safely: security, evals & approvals
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every deployment is thoroughly tested and validated before going live.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <SecuritySection />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32 bg-card/30">
        <div className="container-premium">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Client reviews
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our clients say about their AgentForge experience.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Testimonials />
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 lg:py-32">
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
                <Card className={`p-8 h-full hover-lift bg-gradient-card border-line relative ${
                  tier.popular ? 'ring-2 ring-primary' : ''
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-ember text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-sora font-bold mb-4">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-sora font-bold">{tier.price}</span>
                      {tier.period && <span className="text-muted-foreground">{tier.period}</span>}
                    </div>
                    {tier.setup && (
                      <p className="text-sm text-muted-foreground">{tier.setup}</p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8 flex-1">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={tier.popular ? "premium" : "outline"} 
                    className="w-full"
                    onClick={() => scrollToSection('demo-form')}
                  >
                    {tier.cta}
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300} className="text-center mt-12">
            <div className="space-y-4">
              <p className="text-muted-foreground text-sm">
                Setup fee covers training, evaluation checks, and onboarding.
              </p>
              <div className="inline-flex items-center space-x-2 bg-card px-4 py-2 rounded-lg border border-line">
                <span className="text-sm font-semibold">Add-on:</span>
                <span className="text-sm text-muted-foreground">Voice AI Agent — $599/mo (flat unlimited)</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Get a Demo Form */}
      <section id="demo-form" className="py-20 lg:py-32 bg-card/30">
        <div className="container-premium">
          <div className="max-w-2xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-sora font-bold mb-6">
                Get your demo
              </h2>
              <p className="text-xl text-muted-foreground">
                See how AgentForge can transform your customer interactions in just 15 minutes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-8 bg-gradient-card border-line">
                <div className="bg-muted/10 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
                  {/* GHL_FORM_EMBED */}
                  <div className="text-center space-y-4">
                    <Calendar className="w-16 h-16 text-primary mx-auto" />
                    <h3 className="text-2xl font-sora font-bold">Demo request form</h3>
                    <p className="text-muted-foreground">GoHighLevel form embed will be placed here</p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Wellness Section Placeholder */}
      <section id="wellness" className="py-20 lg:py-32">
        <div className="container-premium">
          <ScrollReveal className="text-center">
            <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Wellness Integration
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Content for wellness features will be added here based on your specific requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Blockchain Section Placeholder */}
      <section id="blockchain" className="py-20 lg:py-32 bg-card/30">
        <div className="container-premium">
          <ScrollReveal className="text-center">
            <h2 className="text-4xl lg:text-6xl font-sora font-bold mb-6">
              Blockchain Solutions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Content for blockchain features will be added here based on your specific requirements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-line">
        <div className="container-premium">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-gradient-ember rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-sora font-bold text-xl">AgentForge</span>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                AI agents for bookings & customer support. Transform your customer interactions with intelligent, on-brand conversations.
              </p>
              {/* GHL_CHAT_WIDGET */}
            </div>

            <div>
              <h4 className="font-sora font-bold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a></li>
                <li><Link to="/affiliate" className="text-muted-foreground hover:text-foreground transition-colors">Affiliate Program</Link></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-sora font-bold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li><Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-line text-center">
            <p className="text-muted-foreground mb-4">
              © 2024 AgentForge. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Serving clients in Garden Grove & Orange County.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </SoundManager>
  );
};

export default Index;
