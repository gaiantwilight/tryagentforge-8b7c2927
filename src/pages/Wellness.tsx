import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProgressBar } from '@/components/ui/progress-bar';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { WaterCanvas } from '@/components/ui/water-canvas';
import { VideoHero } from '@/components/ui/video-hero';
import { StructuredData } from '@/components/ui/structured-data';
import { Testimonials } from '@/components/ui/testimonials';
import { SecuritySection } from '@/components/ui/security-section';
import { ChatShowcase } from '@/components/ui/chat-showcase';
import { AnnouncementBanner } from '@/components/ui/announcement-banner';
import { MobileNav } from '@/components/ui/mobile-nav';
import { SoundManager } from '@/components/ui/sound-manager';
import { ScrollableChatDemo } from '@/components/ui/scrollable-chat-demo';
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
  Activity,
  Phone,
  Star
} from 'lucide-react';

export default function Wellness() {
  const [selectedPlan, setSelectedPlan] = useState<number>(1); // Default to Growth plan

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fewer no-shows",
      description: "Automated SMS reminders and follow-ups reduce no-shows by up to 40%, keeping your schedule full."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Faster responses",
      description: "24/7 AI support provides instant answers to common questions, improving patient satisfaction."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Better intake",
      description: "Intelligent forms gather the right information upfront, streamlining your consultation process."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Always on",
      description: "Never miss a lead again with round-the-clock booking and inquiry handling."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "On-brand tone",
      description: "Custom-trained agents speak in your clinic's voice and understand your specific treatments."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "HIPAA-aware",
      description: "Enterprise-grade security ensures all patient interactions comply with healthcare regulations."
    }
  ];

  const modalities = [
    "Cryotherapy", "Red Light", "Infrared Sauna", "Cold Plunge", "Hyperbaric"
  ];

  const additionalServices = [
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

  const pricingTiers = [
    {
      name: "WELLNESS STARTER",
      price: "$697",
      period: "/mo",
      setup: "$497 setup",
      features: [
        "1 AI Agent (Web chat OR SMS)",
        "Lead capture + Calendar booking",
        "Booking recovery (missed booking follow-ups)",
        "Up to 1,000 conversations/mo included",
        "Adjustments: every 60 days",
        "No reporting"
      ]
    },
    {
      name: "WELLNESS GROWTH",
      price: "$997",
      period: "/mo",
      setup: "$747 setup",
      features: [
        "1 AI Agent (Web chat + SMS, or Web + Voice)",
        "All Starter features",
        "Advanced booking recovery (multi-channel, escalations)",
        "Up to 3,000 conversations/mo included",
        "Adjustments: monthly",
        "Monthly reporting included"
      ],
      popular: true
    },
    {
      name: "WELLNESS PRO",
      price: "$1,497",
      period: "/mo",
      setup: "$999 setup",
      features: [
        "2 AI Agents (Web + SMS + Voice, or custom mix)",
        "All Growth features",
        "Up to 5,000 conversations/mo included",
        "Custom integrations & analytics dashboards",
        "Adjustments: every 2 weeks",
        "Weekly reporting"
      ]
    },
    {
      name: "CUSTOM",
      price: "Contact us",
      period: "",
      setup: "",
      features: [
        "Unlimited bots",
        "Everything in Pro",
        "Fully tailored integrations & compliance checks"
      ]
    }
  ];

  const addOns = [
    {
      name: "Voice AI Agent",
      price: "$599",
      period: "/mo",
      description: "flat unlimited"
    }
  ];

  const faqs = [
    {
      question: "How does HIPAA compliance work?",
      answer: "Our AI agents are built with healthcare-grade security. All patient data is encrypted, access is logged, and our systems meet HIPAA requirements for protected health information."
    },
    {
      question: "Can the AI match my clinic's tone?",
      answer: "Yes! We train your agent on your specific services, pricing, and communication style. The AI learns your clinic's voice and maintains consistency across all interactions."
    },
    {
      question: "How quickly can we get started?",
      answer: "Most clinics are live within 7-10 business days. This includes agent training, evaluation testing, and integration with your existing booking system."
    },
    {
      question: "What if a patient needs immediate help?",
      answer: "Our AI is trained to recognize emergency situations and will immediately direct patients to call 911 or visit the nearest emergency room when appropriate."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetDemo = () => {
    if ((window as any).agentForgeSounds?.soundEnabled) {
      (window as any).agentForgeSounds?.playBeep(600, 150);
    }
    scrollToSection('demo');
  };

  const wellnessChatMessages = [
    { id: 1, text: "Hi! I'm interested in cryotherapy. What are your rates?", isAgent: false, timestamp: "2:14 PM" },
    { id: 2, text: "Great choice! Our whole body cryotherapy is $45 per session, or you can get 5 sessions for $200. Would you like to book a session?", isAgent: true, timestamp: "2:14 PM" },
    { id: 3, text: "That sounds good. What should I expect during my first session?", isAgent: false, timestamp: "2:15 PM" },
    { id: 4, text: "First-timers get a thorough walkthrough! The session lasts 2-3 minutes at -200°F. We provide protective gear and our staff guides you through everything. Any health conditions I should know about?", isAgent: true, timestamp: "2:15 PM" },
    { id: 5, text: "No health issues. Can I book for tomorrow?", isAgent: false, timestamp: "2:16 PM" },
    { id: 6, text: "Perfect! I have availability at 10 AM, 2 PM, or 4 PM tomorrow. Which works best for you?", isAgent: true, timestamp: "2:16 PM" },
    { id: 7, text: "2 PM works perfectly", isAgent: false, timestamp: "2:17 PM" },
    { id: 8, text: "Excellent! I've reserved 2 PM tomorrow for your first cryotherapy session. You'll receive a confirmation text with arrival instructions. Looking forward to helping you feel amazing!", isAgent: true, timestamp: "2:17 PM" }
  ];

  return (
    <SoundManager>
      <div className="min-h-screen bg-background text-foreground">
        {/* Skip to content link */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-ember focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to content
        </a>
        
        <AnnouncementBanner theme="aqua" onBookNow={() => scrollToSection('demo')} />
        
        {/* SEO Meta Tags */}
        <head>
          <title>Wellness AI Agents | HIPAA-Aware Booking & Patient Care | AgentForge</title>
          <meta name="description" content="AI agents for wellness practices. HIPAA-aware intake, automated booking, and patient follow-ups for cryotherapy, red light, and wellness clinics." />
          <link rel="canonical" href="https://agentforge.lovable.app/wellness" />
          
          {/* Open Graph */}
          <meta property="og:title" content="Wellness AI Agents | HIPAA-Aware Booking & Patient Care" />
          <meta property="og:description" content="AI agents for wellness practices. HIPAA-aware intake, automated booking, and patient follow-ups for cryotherapy, red light, and wellness clinics." />
          <meta property="og:url" content="https://agentforge.lovable.app/wellness" />
          <meta property="og:image" content="https://agentforge.lovable.app/wellness-hero-video.mp4" />
          <meta property="og:type" content="website" />
          
          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Wellness AI Agents | HIPAA-Aware Booking & Patient Care" />
          <meta name="twitter:description" content="AI agents for wellness practices. HIPAA-aware intake, automated booking, and patient follow-ups for cryotherapy, red light, and wellness clinics." />
          <meta name="twitter:image" content="https://agentforge.lovable.app/wellness-hero-video.mp4" />
          
          {/* Preconnect to external domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          
          {/* Preload fonts */}
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" as="style" />
          <link rel="preload" href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&display=swap" as="style" />
          
          {/* GA4/GTM Placeholder */}
          {/* 
          <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          </script>
          */}
        </head>
        
        <StructuredData isWellness />
        <ProgressBar />
      
        {/* Header */}
        <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-line">
          <nav role="navigation" aria-label="Main navigation">
          <div className="container-premium">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-aqua to-aqua-glow rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="font-sora font-bold text-xl">AgentForge</span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
                <Link to="/wellness" className="text-aqua font-medium">
                  Wellness
                </Link>
                <Link to="/blockchain" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blockchain
                </Link>
                <button onClick={() => scrollToSection('pricing')} className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </button>
                <Link to="/affiliate" className="text-muted-foreground hover:text-foreground transition-colors">
                  Affiliate
                </Link>
              </nav>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <Button variant="ghost" size="sm" asChild>
                  <a href="tel:+1-714-475-7502">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Us
                  </a>
                </Button>
                <Button 
                  onClick={handleGetDemo}
                  size="sm" 
                  className="bg-aqua hover:bg-aqua-glow text-background"
                >
                  Get a Demo
                </Button>
              </div>

              {/* Mobile Navigation */}
              <MobileNav onBookDemo={() => scrollToSection('demo')} />
            </div>
          </div>
          </nav>
        </header>

        {/* Personal Passion Section */}
        <section className="py-16 bg-card/20">
          <div className="container-premium max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="space-y-6">
                <div className="w-16 h-16 bg-gradient-to-br from-aqua/20 to-aqua-glow/30 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-aqua" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold">From passion to practice</h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  Our business works closely with wellness centers and takes the time to understand each client's needs. I started using cold exposure several years ago and I'm passionate about wellness, red light therapy, general health, and more. I dream of opening up a wellness center in nature one day.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  While we specialize in <strong className="text-aqua">cryotherapy, red light, infrared sauna, cold plunge, and hyperbaric</strong> treatments, we proudly serve gyms, dental practices, yoga studios, IV therapy clinics, med-spas, massage centers, and the entire wellness ecosystem.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Hero Section */}
        <main id="main-content">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <WaterCanvas className="absolute inset-0 opacity-20" />
          <div className="relative z-10 container-premium py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal className="space-y-8">
                <div className="space-y-6">
                  <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                    AI agents that book more appointments without extra staff
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                    HIPAA-aware intake, text reminders, website chat, and no-show reduction. Tuned for cryotherapy, red light, infrared sauna, cold plunge, and hyperbaric.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleGetDemo}
                    size="lg" 
                    variant="aqua-default"
                  >
                    Get a Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('benefits')}
                    size="lg" 
                    variant="aqua-outline"
                  >
                    See Benefits
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200} className="relative">
                <VideoHero 
                  videoSrc="/wellness-hero-video.mp4"
                  title="Wellness AI Demo"
                  className="bg-gradient-to-br from-aqua/5 to-aqua-glow/10 border border-aqua/20"
                />
              </ScrollReveal>
            </div>
          </div>
        </section>


        {/* Benefits Section */}
        <section id="benefits" className="py-20">
          <div className="container-premium">
            <ScrollReveal className="text-center space-y-4 mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold">Transform your wellness practice</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Reduce administrative burden while improving patient outcomes with AI that understands healthcare.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="p-8 bg-gradient-to-br from-aqua/5 to-aqua-glow/10 border-aqua/20 card-hover-glow h-full">
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

        {/* Modalities Section */}
        <ScrollReveal className="text-center space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold">Wellness modalities we support</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {modalities.map((modality, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-aqua/20 border border-aqua/30 rounded-full text-aqua font-medium hover:bg-aqua/30 transition-colors"
              >
                {modality}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {additionalServices.map((service, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-muted/50 border border-muted rounded-full text-muted-foreground text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Live AI Conversations Section - Moved up after modalities */}
    <section className="py-20 bg-card/30">
      <div className="container-premium">
        <ScrollReveal className="text-center space-y-4 mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold">Live AI Conversations</h2>
          <p className="text-xl text-muted-foreground">
            See our wellness AI agents in action with real conversation examples
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <ScrollableChatDemo theme="aqua" />
        </ScrollReveal>
      </div>
    </section>

        {/* Security & Evaluations Section */}
        <SecuritySection theme="aqua" />

        {/* Features Section */}
        <section className="py-20 bg-card/30">
          <div className="container-premium">
            <ScrollReveal className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">Specialized for wellness</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Purpose-built features for healthcare and wellness practices that understand patient care.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="p-8 bg-gradient-to-br from-aqua/5 to-aqua-glow/10 border-aqua/20 hover-lift text-center h-full">
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

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container-premium">
            <ScrollReveal className="text-center space-y-4 mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold">Wellness pricing</h2>
              <p className="text-xl text-muted-foreground">
                Transparent pricing designed for wellness practices
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {pricingTiers.map((tier, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card 
                    className={`p-6 h-full relative cursor-pointer transition-all duration-300 ${
                      selectedPlan === index
                        ? 'border-aqua bg-gradient-to-br from-aqua/5 to-aqua-glow/10 shadow-lg ring-2 ring-aqua/20' 
                        : tier.popular
                        ? 'border-aqua/50 bg-gradient-to-br from-aqua/3 to-aqua-glow/5'
                        : 'border-line hover:border-aqua/30'
                    }`}
                    onClick={() => setSelectedPlan(index)}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-aqua text-background px-4 py-1 rounded-full text-sm font-medium">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center space-y-3 mb-6">
                      <h3 className="text-lg font-bold text-aqua">{tier.name}</h3>
                      <div>
                        <div className="text-3xl font-bold">{tier.price}<span className="text-lg font-normal text-muted-foreground">{tier.period}</span></div>
                        {tier.setup && <div className="text-sm text-muted-foreground mt-1">{tier.setup}</div>}
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-aqua flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedPlan(index);
                        scrollToSection('demo');
                      }}
                      className={`w-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-aqua focus-visible:ring-offset-2 ${
                        selectedPlan === index || tier.popular
                          ? 'bg-aqua hover:bg-aqua-glow text-background shadow-lg' 
                          : 'bg-muted hover:bg-aqua hover:text-background'
                      }`}
                    >
                      {tier.name === 'CUSTOM' ? 'Contact Sales' : 'Get Started'}
                    </Button>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* Add-ons Section */}
            <ScrollReveal>
              <div className="bg-card/50 rounded-2xl p-6 border border-line">
                <div className="text-center space-y-4 mb-6">
                  <h4 className="text-xl font-semibold">ADD-ON</h4>
                  {addOns.map((addon, index) => (
                    <div key={index} className="inline-flex items-center space-x-3 bg-aqua/10 border border-aqua/20 rounded-lg px-6 py-3">
                      <span className="text-aqua font-semibold">{addon.name}</span>
                      <span className="text-2xl font-bold">{addon.price}<span className="text-base font-normal text-muted-foreground">{addon.period}</span></span>
                      <span className="text-sm text-muted-foreground">({addon.description})</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Setup fee covers training, evaluation checks, and onboarding.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials theme="aqua" />

        {/* Demo Section */}
        <section id="demo" className="py-20">
          <div className="container-premium">
            <ScrollReveal className="text-center space-y-4 mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold">Ready to get started?</h2>
              <p className="text-xl text-muted-foreground">
                Join wellness practices already using AI to grow their business
              </p>
            </ScrollReveal>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <ScrollReveal>
                  <Card className="p-8 bg-gradient-to-br from-aqua/5 to-aqua-glow/10 border-aqua/20 card-hover-glow">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Get Your Demo</h3>
                    {/* GHL_FORM_EMBED */}
                    <div className="space-y-4 text-center">
                      <p className="text-muted-foreground">Contact form will be embedded here</p>
                      <Button variant="aqua-default" className="w-full">
                        Contact Sales
                      </Button>
                    </div>
                  </Card>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <Card className="p-8 bg-gradient-to-br from-aqua/5 to-aqua-glow/10 border-aqua/20 card-hover-glow">
                    <h3 className="text-2xl font-semibold mb-6 text-center">Book a Consult</h3>
                    {/* GHL_CALENDAR_EMBED */}
                    <div className="space-y-4 text-center">
                      <p className="text-muted-foreground">Calendar booking will be embedded here</p>
                      <Button variant="aqua-outline" className="w-full">
                        Schedule Demo
                      </Button>
                    </div>
                  </Card>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container-premium">
            <ScrollReveal className="text-center space-y-4 mb-16">
              <h2 className="text-2xl lg:text-3xl font-bold">Frequently asked questions</h2>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="p-6 border-line">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Care Disclaimer */}
        <section className="py-8 bg-card/50">
          <div className="container-premium">
            <ScrollReveal>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  <strong>Healthcare Notice:</strong> Information only - not medical advice. We build HIPAA-aware conversational agents that respect your clinic's policies. 
                  All patient interactions are logged for quality assurance. 
                  For medical emergencies, patients are directed to appropriate emergency services.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        </main>
        
        {/* Footer */}
        <footer className="py-16 bg-card">
          <div className="container-premium">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <h3 className="font-sora font-bold text-xl">AgentForge</h3>
                <p className="text-muted-foreground text-sm">
                  AI agents for wellness practices. Serving wellness clinics in Huntington Beach, Orange County, Los Angeles & Long Beach.
                </p>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Product</h4>
                <div className="space-y-2 text-sm">
                  <button onClick={() => scrollToSection('benefits')} className="block text-muted-foreground hover:text-aqua transition-colors">Benefits</button>
                  <button onClick={() => scrollToSection('pricing')} className="block text-muted-foreground hover:text-aqua transition-colors">Pricing</button>
                  <button onClick={() => scrollToSection('demo')} className="block text-muted-foreground hover:text-aqua transition-colors">Demo</button>
                  <Link to="/blockchain" className="block text-muted-foreground hover:text-aqua transition-colors">Blockchain</Link>
                </div>
              </div>
              
                <div className="space-y-4">
                <h4 className="font-semibold">Company</h4>
                <div className="space-y-2 text-sm">
                  <Link to="/" className="block text-muted-foreground hover:text-aqua transition-colors">Home</Link>
                  <Link to="/affiliate" className="block text-muted-foreground hover:text-aqua transition-colors">Affiliate</Link>
                  <Link to="/privacy" className="block text-muted-foreground hover:text-aqua transition-colors">Privacy</Link>
                  <Link to="/terms" className="block text-muted-foreground hover:text-aqua transition-colors">Terms</Link>
                </div>
              </div>
              
                <div className="space-y-4">
                <h4 className="font-semibold">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Huntington Beach, Orange County</p>
                  <p>Los Angeles, Long Beach</p>
                  <a href="tel:+1-714-475-7502" className="block hover:text-aqua transition-colors">714-475-7502</a>
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