import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Codecrest | Learn Full Stack, Python and AI",
  description:
    "Codecrest helps you climb to the top of your coding career with hands-on projects and expert mentors.",
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
