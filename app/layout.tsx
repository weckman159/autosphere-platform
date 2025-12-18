import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoSphere - Automotive Social Platform",
  description:
    "Connect with car enthusiasts, share experiences, and showcase your vehicles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
