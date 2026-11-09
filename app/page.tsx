import { ApproachSection } from "./components/approach-section";
import { ContactSection } from "./components/contact-section";
import { ExpertiseSection } from "./components/expertise-section";
import { HeroSection } from "./components/hero-section";
import { IndustriesSection } from "./components/industries-section";
import { ProcessSection } from "./components/process-section";
import { ProfileSection } from "./components/profile-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <HeroSection />
      <ApproachSection />
      <ExpertiseSection />
      <ProcessSection />
      <ProfileSection />
      <IndustriesSection />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}
