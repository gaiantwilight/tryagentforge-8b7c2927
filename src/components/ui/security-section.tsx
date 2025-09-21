import React from 'react';
import { Shield, CheckCircle, Eye, Lock, Globe, UserCheck } from 'lucide-react';

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

export const SecuritySection = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      {/* Security Features */}
      <div className="space-y-6">
        <div className="space-y-4">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="w-4 h-4 text-primary" />
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

      {/* Timeline */}
      <div className="space-y-6">
        <h4 className="text-lg font-sora font-semibold mb-6">Deployment Pipeline</h4>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-0 w-0.5 bg-line"></div>
          
          <div className="space-y-6">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex items-start space-x-4">
                {/* Step indicator */}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center ${
                  index === timelineSteps.length - 1 
                    ? 'bg-gradient-ember text-white' 
                    : 'bg-card border border-line text-muted-foreground'
                }`}>
                  {index === timelineSteps.length - 1 ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-bold">{index + 1}</span>
                  )}
                </div>
                
                {/* Step content */}
                <div className="flex-1 pt-2">
                  <h5 className="font-sora font-semibold text-foreground">{step.label}</h5>
                  <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};