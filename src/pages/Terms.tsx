import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container-premium py-20">
        <ScrollReveal className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-sora font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-xl text-muted-foreground">
              These terms of service will be updated with AgentForge's specific service terms and conditions.
            </p>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">Service Agreement</h2>
              <p className="text-muted-foreground">
                Terms governing the use of AgentForge services will be specified here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground">
                Client responsibilities when using AgentForge will be detailed here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">Service Level Agreements</h2>
              <p className="text-muted-foreground">
                SLA details and service guarantees will be outlined here.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-sora font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For terms-related questions, contact details will be provided here.
              </p>
            </section>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Terms;