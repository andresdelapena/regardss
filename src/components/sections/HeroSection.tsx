import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export function HeroSection({ scrollToSection, onWaitlistClick }: HeroSectionProps) {
  return (
    <section id="home" className="container max-w-[1536px] mx-auto px-4 py-24 md:py-32 animate-fade-in">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col text-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl animate-slide-up">
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Emails Made Simple—
            </span>
            <span className="block mt-2">No More Stress</span>
          </h1>
          <p className="text-muted-foreground text-lg mx-auto max-w-[700px] animate-fade-in-delay">
            Regardss creates clear, professional emails that fit your voice and role—so every message sounds like you
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-4 animate-fade-in-delay-2">
          <Button 
            size="lg" 
            onClick={onWaitlistClick}
            className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500 transform transition-all duration-300 hover:scale-105"
          >
            Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-muted-foreground">
            Limited spots available for early access
          </p>
        </div>
      </div>
    </section>
  );
}