import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SAMPLE | Supply Chain & Regulatory Advisory",
  description:
    "Practical supply chain and Nigeria regulatory advisory from Kedarnath Kaushik.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
