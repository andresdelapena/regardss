import { useState } from "react";
import { WaitlistDialog } from "@/components/WaitlistDialog";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Index() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleWaitlistClick = () => {
    setDialogOpen(true);
  };

  return (
    <div className="relative flex min-h-screen flex-col text-slate-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(109.6deg,rgba(223,234,247,0.9)_11.2%,rgba(244,248,252,0.9)_91.1%)]">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtMy4zMTUgMC02IDIuNjg1LTYgNnMyLjY4NSA2IDYgNiA2LTIuNjg1IDYtNi0yLjY4NS02LTYtNnptMCAyYTQgNCAwIDExMCA4IDQgNCAwIDAxMC04eiIgZmlsbD0icmdiYSgxNDcsIDE5NywgMjUzLCAwLjIpIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      </div>

      <Header scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
      
      <main className="flex-1">
        <HeroSection scrollToSection={scrollToSection} onWaitlistClick={handleWaitlistClick} />
        <HowItWorksSection />
        <ProblemSection />
        <BenefitsSection />
        <TrustSection />
        <FinalCTASection onWaitlistClick={handleWaitlistClick} />
      </main>

      <Footer />
      <WaitlistDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}