import { ApproachSection } from "./components/approach-section";
import { ContactSection } from "./components/contact-section";
import { HeroSection } from "./components/hero-section";
import { ProcessSection } from "./components/process-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ApproachSection />
      <ProcessSection />
      <ContactSection />
    </main>
  );
}
