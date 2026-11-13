import type { Metadata } from "next";
import { ExpertiseSection } from "../components/expertise-section";
import { IndustriesSection } from "../components/industries-section";

export const metadata: Metadata = {
  title: "Services | [Company Name]",
  description:
    "Explore coordinated import services, from overseas sourcing and freight to Nigerian customs clearance and final delivery.",
};

export default function ServicesPage() {
  return (
    <main>
      <ExpertiseSection />
      <IndustriesSection />
    </main>
  );
}
