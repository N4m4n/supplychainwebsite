import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OTITO GLOBAL | Logistics & Advisory",
  description:
    "Connecting the world to Nigeria and Nigeria to the world with trusted logistics, import and export coordination.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
