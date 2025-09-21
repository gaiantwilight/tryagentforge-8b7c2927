import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EmberCanvas } from '@/components/ui/ember-canvas';
import { StructuredData } from '@/components/ui/structured-data';
import { MobileNav } from '@/components/ui/mobile-nav';
import { Testimonials } from '@/components/ui/testimonials';
import { 
  Menu,
  ArrowRight, 
  MessageSquare, 
  Code,
  Phone,
  BookOpen,
  Shield,
  CheckCircle,
  Calendar,
  Zap,
  Users,
  Bot,
  Lock,
  Globe,
  TrendingUp,
  AlertTriangle,
  Coins,
  Database,
  FileText,
  HeadphonesIcon
} from 'lucide-react';

export default function Blockchain() {
  const [selectedPlan, setSelectedPlan] = useState('growth');
  const [isAnnual, setIsAnnual] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookDemo = () => {
    scrollToSection('demo');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <StructuredData />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-line">
        <div className="container-premium flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-ember flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-sora font-bold text-xl">AgentForge</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/wellness" className="font-medium hover:text-primary transition-colors">
              Wellness
            </Link>
            <button 
              onClick={() => scrollToSection('services')}
              className="font-medium hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="font-medium hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <Link to="/affiliate" className="font-medium hover:text-primary transition-colors">
              Affiliate
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="call" onClick={handleBookDemo}>
              Get a Demo
            </Button>
            <Button variant="outline" asChild>
              <a href="tel:+1-XXX-XXX-XXXX">
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav onBookDemo={handleBookDemo} />
        </div>
      </header>

      {/* Hero Section with Charcoal + Ember Theme */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Dark Background with Tech Grid */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />
        
        <div className="container-premium relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal>
                <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Blockchain & Web3 Agents for Community, Dev & Treasury Projects
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Smart, secure, on-brand AI agents that moderate, answer FAQs, integrate with your token, support your devs—and protect your reputation.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-ember text-white hover:shadow-premium hover:-translate-y-1"
                    onClick={handleBookDemo}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    View Case Studies
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Video Slot with Ember Canvas */}
            <ScrollReveal delay={600} className="relative">
              <div className="relative">
                <EmberCanvas className="absolute inset-0 z-0" />
                <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600">
                  <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-ember rounded-full flex items-center justify-center">
                        <MessageSquare className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-slate-300 font-medium">Demo Video</p>
                      <p className="text-slate-400 text-sm">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container-premium">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Blockchain & Web3 Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive AI solutions for the modern crypto ecosystem
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={100}>
              <Card className="p-6 border-line hover-lift bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Community Bots</h3>
                <p className="text-muted-foreground mb-4">
                  Discord & Telegram moderation, auto-reply, spam filtering, and community engagement automation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    24/7 moderation & spam detection
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Automated FAQ responses
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Role management & verification
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-6 border-line hover-lift bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Developer Support</h3>
                <p className="text-muted-foreground mb-4">
                  Docs copilot and developer Q&A for SDK, API support, and technical documentation.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Intelligent docs search
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Code example generation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    API troubleshooting
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="p-6 border-line hover-lift bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Market & Token Alerts</h3>
                <p className="text-muted-foreground mb-4">
                  Real-time market notifications, token launch alerts, and smart contract updates.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Price movement alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Contract event monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Launch announcements
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="p-6 border-line hover-lift bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Security & Compliance</h3>
                <p className="text-muted-foreground mb-4">
                  Smart contract reviews, security policy setup, and compliance guardrails.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Security audits & reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Compliance monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Risk assessment
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={500}>
              <Card className="p-6 border-line hover-lift bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">DAO & Treasury Support</h3>
                <p className="text-muted-foreground mb-4">
                  FAQs, policies, grant voting assistance, and secure escalation workflows.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Governance assistance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Proposal management
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    Treasury reporting
                  </li>
                </ul>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <Card className="p-6 border-line hover-lift bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center mb-4">
                  <HeadphonesIcon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Voice Agent Add-On</h3>
                <p className="text-muted-foreground mb-4">
                  Optional voice AI capabilities for Discord calls, community AMAs, and phone support.
                </p>
                <div className="mt-4">
                  <Badge variant="secondary" className="text-xs">
                    +$599/month
                  </Badge>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container-premium">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Real-World Applications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how blockchain projects leverage our AI agents
            </p>
          </ScrollReveal>

          <Tabs defaultValue="defi" className="blockchain-tabs">
            <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
              <TabsTrigger value="defi">DeFi & Tokens</TabsTrigger>
              <TabsTrigger value="gaming">Crypto Gaming</TabsTrigger>
              <TabsTrigger value="dao">DAOs & Treasury</TabsTrigger>
            </TabsList>

            <TabsContent value="defi" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 border-line">
                  <Coins className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Memecoin Launches</h3>
                  <p className="text-muted-foreground">
                    Automated community management, launch announcements, price updates, and scam protection during high-traffic token launches.
                  </p>
                </Card>
                <Card className="p-6 border-line">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">DeFi Protocols</h3>
                  <p className="text-muted-foreground">
                    User onboarding, yield farming guidance, smart contract interaction help, and real-time protocol updates.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="gaming" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 border-line">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Player Support</h3>
                  <p className="text-muted-foreground">
                    24/7 assistance with wallet connections, NFT transfers, game mechanics, and troubleshooting technical issues.
                  </p>
                </Card>
                <Card className="p-6 border-line">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">NFT Ownership</h3>
                  <p className="text-muted-foreground">
                    Verification of NFT ownership, trait explanations, marketplace guidance, and anti-fraud protection.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="dao" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-6 border-line">
                  <FileText className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Governance Support</h3>
                  <p className="text-muted-foreground">
                    Proposal explanations, voting guidance, governance token information, and decision tracking.
                  </p>
                </Card>
                <Card className="p-6 border-line">
                  <Database className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">Treasury Management</h3>
                  <p className="text-muted-foreground">
                    Grant application assistance, fund allocation transparency, financial reporting, and member queries.
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Security & Trust Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container-premium">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Security & Trust</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for the highest security standards in crypto
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollReveal delay={100}>
              <Card className="p-6 text-center border-line">
                <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Pre-Launch Evaluation</h3>
                <p className="text-sm text-muted-foreground">
                  Red-team style security checks and audit readiness assessment
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-6 text-center border-line">
                <Lock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Compliance Aware</h3>
                <p className="text-sm text-muted-foreground">
                  Regional regulation compliance with no unsubstantiated advice
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="p-6 text-center border-line">
                <Shield className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Moderation Filters</h3>
                <p className="text-sm text-muted-foreground">
                  Advanced spam, scam, and fraud detection with real-time blocking
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="p-6 text-center border-line">
                <FileText className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Logging & Oversight</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive audit trails and administrative oversight tools
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials theme="ember" />

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container-premium">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Blockchain-Focused Pricing</h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your Web3 project
            </p>
          </ScrollReveal>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4 bg-muted p-1 rounded-full">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full transition-all ${
                  !isAnnual
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full transition-all ${
                  isAnnual
                    ? 'bg-background text-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Annual
                <Badge variant="secondary" className="ml-2 text-xs">
                  Save 20%
                </Badge>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Starter Plan */}
            <ScrollReveal delay={100}>
              <Card className={`p-6 border-2 transition-all hover-lift ${
                selectedPlan === 'starter' 
                  ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                  : 'border-line hover:border-primary/50'
              }`}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Starter</h3>
                    <p className="text-sm text-muted-foreground">Perfect for new projects</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-bold">
                        ${isAnnual ? '400' : '500'}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      + $500 setup fee
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Basic Discord/Telegram bot
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      FAQ automation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Basic moderation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Token price alerts
                    </li>
                  </ul>
                  <Button 
                    className="w-full"
                    variant={selectedPlan === 'starter' ? 'premium' : 'outline'}
                    onClick={() => setSelectedPlan('starter')}
                  >
                    {selectedPlan === 'starter' ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* Growth Plan */}
            <ScrollReveal delay={200}>
              <Card className={`p-6 border-2 transition-all hover-lift relative ${
                selectedPlan === 'growth' 
                  ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                  : 'border-line hover:border-primary/50'
              }`}>
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-ember text-white">
                  Most Popular
                </Badge>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Growth</h3>
                    <p className="text-sm text-muted-foreground">For scaling communities</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-bold">
                        ${isAnnual ? '800' : '1000'}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      + $1,000 setup fee
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Advanced moderation & spam detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Developer docs copilot
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Smart contract monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Multi-platform integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Security audit assistance
                    </li>
                  </ul>
                  <Button 
                    className="w-full"
                    variant={selectedPlan === 'growth' ? 'premium' : 'outline'}
                    onClick={() => setSelectedPlan('growth')}
                  >
                    {selectedPlan === 'growth' ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* Pro Plan */}
            <ScrollReveal delay={300}>
              <Card className={`p-6 border-2 transition-all hover-lift ${
                selectedPlan === 'pro' 
                  ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                  : 'border-line hover:border-primary/50'
              }`}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Pro</h3>
                    <p className="text-sm text-muted-foreground">For established protocols</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-bold">
                        ${isAnnual ? '1600' : '2000'}
                      </span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      + $2,000 setup fee
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      DAO governance support
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Treasury management tools
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Advanced compliance monitoring
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Custom integrations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Priority support
                    </li>
                  </ul>
                  <Button 
                    className="w-full"
                    variant={selectedPlan === 'pro' ? 'premium' : 'outline'}
                    onClick={() => setSelectedPlan('pro')}
                  >
                    {selectedPlan === 'pro' ? 'Selected' : 'Select Plan'}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* Custom Plan */}
            <ScrollReveal delay={400}>
              <Card className={`p-6 border-2 transition-all hover-lift ${
                selectedPlan === 'custom' 
                  ? 'border-primary shadow-lg ring-4 ring-primary/20' 
                  : 'border-line hover:border-primary/50'
              }`}>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Custom</h3>
                    <p className="text-sm text-muted-foreground">Tailored solutions</p>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl font-bold">Custom</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Contact for pricing
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Dedicated blockchain team
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Custom smart contract integration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Enterprise compliance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      SLA guarantees
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      24/7 dedicated support
                    </li>
                  </ul>
                  <Button 
                    className="w-full"
                    variant={selectedPlan === 'custom' ? 'premium' : 'outline'}
                    onClick={() => setSelectedPlan('custom')}
                  >
                    {selectedPlan === 'custom' ? 'Selected' : 'Contact Sales'}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Voice Agent Add-on */}
          <ScrollReveal delay={500}>
            <Card className="mt-12 p-6 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border-line">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-ember rounded-xl flex items-center justify-center">
                    <HeadphonesIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Voice AI Agent Add-On</h3>
                    <p className="text-muted-foreground">
                      Discord calls, community AMAs, and phone support capabilities
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$599/month</div>
                  <p className="text-sm text-muted-foreground">Available for all plans</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-premium">
          <ScrollReveal className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our blockchain solutions
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <Card className="p-6 border-line">
                <h3 className="font-bold mb-3">Can your bots handle token price queries & market updates?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, our agents integrate with major price APIs and DEX data sources to provide real-time market information, price alerts, and trading volume updates while avoiding unsubstantiated advice.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="p-6 border-line">
                <h3 className="font-bold mb-3">How do you prevent spam, scams, and fraud?</h3>
                <p className="text-muted-foreground text-sm">
                  We employ advanced AI models trained on crypto-specific scam patterns, real-time blacklist updates, wallet address verification, and smart contract interaction monitoring to protect your community.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Card className="p-6 border-line">
                <h3 className="font-bold mb-3">Are you legally safe for finance & token projects?</h3>
                <p className="text-muted-foreground text-sm">
                  Our agents are designed with compliance guardrails, avoiding financial advice, maintaining audit trails, and respecting regional regulations. We recommend consulting your legal team for specific compliance requirements.
                </p>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <Card className="p-6 border-line">
                <h3 className="font-bold mb-3">What are your turnaround and onboarding times?</h3>
                <p className="text-muted-foreground text-sm">
                  Standard setup takes 5-7 business days for basic plans, 7-10 days for advanced configurations. Custom enterprise solutions may require 2-3 weeks depending on integration complexity.
                </p>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="demo" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container-premium text-center">
          <ScrollReveal>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Secure Your Web3 Community?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the blockchain projects already using AgentForge to protect and grow their communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-ember text-white hover:shadow-premium hover:-translate-y-1">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-slate-400 text-slate-300 hover:bg-slate-800">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-line">
        <div className="container-premium">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-ember flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="font-sora font-bold text-xl">AgentForge</span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI agents built for the future of Web3 and blockchain communities.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-foreground transition-colors">General AI Agents</Link></li>
                <li><Link to="/wellness" className="hover:text-foreground transition-colors">Wellness Solutions</Link></li>
                <li><span className="text-foreground">Blockchain & Web3</span></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/affiliate" className="hover:text-foreground transition-colors">Affiliate Program</Link></li>
                <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="tel:+1-XXX-XXX-XXXX" className="hover:text-foreground transition-colors">
                    (XXX) XXX-XXXX
                  </a>
                </li>
                <li>Garden Grove, CA</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-line mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 AgentForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}