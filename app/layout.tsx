import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "[Company Name] | Nigeria Import Facilitation",
  description:
    "One coordinated import journey into Nigeria, from overseas sourcing and freight to customs clearance and final delivery.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
