import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hrjhaa.me"),
    title: {
      default: "Harsh Ranjan Jha — Software Engineer",
      template: "%s | Harsh Ranjan Jha",
    },
    description:
      "Software Engineer passionate about full-stack development and Gen-AI. Building with React, Next.js, Spring Boot, and AWS.",
    keywords: [
      "Software Engineer",
      "Full Stack Developer",
      "React",
      "Next.js",
      "Spring Boot",
      "AWS",
      "AI",
      "Web Development",
    ],
    authors: [{ name: "Harsh Ranjan Jha" }],
    creator: "Harsh Ranjan Jha",
    openGraph: {
      type: "website",
      siteName: "Harsh Ranjan Jha",
      title: "Harsh Ranjan Jha — Software Engineer",
      description:
        "Software Engineer passionate about full-stack development and Gen-AI.",
      images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Harsh Ranjan Jha" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Harsh Ranjan Jha — Software Engineer",
      description:
        "Software Engineer passionate about full-stack development and Gen-AI.",
      creator: "@thattallboy987",
      images: ["/icon.png"],
    },
    icons: {
      icon: "/icon.png",
    },
    robots: {
      index: true,
      follow: true,
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <ThemeProvider attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange >
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
