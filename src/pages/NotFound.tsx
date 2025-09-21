import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="container-premium max-w-2xl mx-auto text-center">
        <Card className="p-12 bg-gradient-to-br from-ember/5 to-ember-glow/10 border-ember/20">
          <div className="space-y-6">
            <div className="w-24 h-24 bg-gradient-ember rounded-full flex items-center justify-center mx-auto">
              <Search className="w-12 h-12 text-white" />
            </div>
            
            <div className="space-y-3">
              <h1 className="text-6xl font-bold text-ember">404</h1>
              <h2 className="text-3xl font-semibold">Page Not Found</h2>
              <p className="text-lg text-muted-foreground max-w-md mx-auto">
                The page you're looking for doesn't exist or has been moved.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button asChild size="lg" className="bg-ember hover:bg-ember-glow">
                <Link to="/">
                  <Home className="w-5 h-5 mr-2" />
                  Go Home
                </Link>
              </Button>
              
              <Button asChild size="lg" variant="outline">
                <button onClick={() => window.history.back()}>
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Go Back
                </button>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}