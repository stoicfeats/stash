import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Benefits } from "@/components/Benefits";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <CTA />
      </main>
    </div>
  );
};

export default Index;
