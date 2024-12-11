import { Mail } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
  onWaitlistClick: () => void;
}

export function Header({ scrollToSection, onWaitlistClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="flex items-center gap-2">
          <Mail className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Regardss</span>
        </div>
        <div className="flex-1 flex justify-end items-center gap-6">
          <nav className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 left-0 md:top-0 w-full md:w-auto flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 bg-background md:bg-transparent p-4 md:p-0 border-b md:border-0`}>
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium hover:text-primary w-full md:w-auto max-w-[15.625rem]">
              Home
            </button>
            <button onClick={() => scrollToSection("benefits")} className="text-sm font-medium hover:text-primary w-full md:w-auto max-w-[15.625rem]">
              Benefits
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-sm font-medium hover:text-primary w-full md:w-auto max-w-[15.625rem]">
              How It Works
            </button>
            <Button onClick={onWaitlistClick} className="md:hidden w-full max-w-[15.625rem] bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500">
              Join Waitlist
            </Button>
          </nav>
          <Button 
            onClick={onWaitlistClick} 
            className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:from-blue-700 hover:to-cyan-500"
          >
            Join Waitlist
          </Button>
          <Button 
            variant="outline" 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
}