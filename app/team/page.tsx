import type { Metadata } from "next";
import { TeamSection } from "../components/team-section";

export const metadata: Metadata = {
  title: "Our Team | [Company Name]",
  description:
    "Meet the connected Nigeria, India and global partner network behind each coordinated import journey.",
};

export default function TeamPage() {
  return (
    <main>
      <TeamSection />
    </main>
  );
}
