import type { Metadata } from "next";
import { ProfileSection } from "../components/profile-section";

export const metadata: Metadata = {
  title: "About | [Company Name]",
  description:
    "Learn about our mission to make cross-border trade to Nigeria more seamless, reliable and transparent.",
};

export default function AboutPage() {
  return (
    <main>
      <ProfileSection />
    </main>
  );
}
