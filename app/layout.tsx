import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextjs Tailwind SandBox",
  description: "This is a tutorial project from DevEmpower Youtube",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
