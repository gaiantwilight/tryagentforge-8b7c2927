import { Link } from 'react-router-dom';
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Zap } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-line">
        <div className="container-premium">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-ember rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-sora font-bold">AgentForge</span>
            </Link>
          </div>
        </div>
      </header>
      
      <div className="container-premium py-20">
        <ScrollReveal className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-xl text-muted-foreground">
              This privacy policy will be updated with AgentForge's specific privacy practices and data handling procedures.
            </p>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">Information We Collect</h2>
              <p className="text-muted-foreground">
                Details about what information AgentForge collects will be specified here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground">
                Information about how AgentForge uses collected data will be detailed here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">Data Protection</h2>
              <p className="text-muted-foreground">
                AgentForge's data protection measures and security practices will be outlined here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For privacy-related questions, contact details will be provided here.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Privacy;