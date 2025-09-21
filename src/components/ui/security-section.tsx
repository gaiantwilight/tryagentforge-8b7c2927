import React from 'react';
import { Shield, CheckCircle, Eye, Lock, Globe, UserCheck, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './scroll-reveal';

interface SecuritySectionProps {
  theme?: "ember" | "aqua";
}

export function SecuritySection({ theme = "ember" }: SecuritySectionProps) {
  const securityFeatures = [
    { icon: Shield, text: "Evaluation harness (red-team checks)" },
    { icon: Lock, text: "Policy & guardrails" },
    { icon: Eye, text: "Audit logs" },
    { icon: Globe, text: "Region gating" },
    { icon: UserCheck, text: "Human approval gates" }
  ];

  const timelineSteps = [
    { label: "Ingest", description: "Data collection & processing" },
    { label: "Evals", description: "Automated testing & validation" },
    { label: "Guardrails", description: "Safety & policy enforcement" },
    { label: "Shadow mode", description: "Real-world testing" },
    { label: "Launch", description: "Production deployment" }
  ];

  return (
    <section className="py-20 bg-card/50">
      <div className="container-premium">
        <ScrollReveal className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">Ship safely: security, evals & approvals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every deployment goes through comprehensive security and evaluation checks before going live.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Security Features */}
          <ScrollReveal>
            <div className="space-y-6">
              <div className="space-y-4">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      theme === "aqua" ? "bg-aqua/20 text-aqua" : "bg-ember/20 text-ember"
                    }`}>
                      <feature.icon className="w-4 h-4" />
                    </div>
                    <span className="text-foreground">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="pt-4 border-t border-line">
                <p className="text-muted-foreground text-sm">
                  Every AgentForge deployment goes through a preflight battery.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Timeline */}
          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <h4 className="text-lg font-sora font-semibold mb-6">Deployment Pipeline</h4>
              
              <div className="space-y-6">
                {timelineSteps.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      theme === "aqua" ? "bg-aqua/20" : "bg-ember/20"
                    }`}>
                      <span className={`font-semibold text-sm ${
                        theme === "aqua" ? "text-aqua" : "text-ember"
                      }`}>{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{step.label}</h4>
                      <p className="text-xs text-muted-foreground">{step.description}</p>
                    </div>
                    {index < timelineSteps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}