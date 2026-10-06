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
   const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Harsh Ranjan Jha",
    url: "https://hrjhaa.me",
    author: { "@type": "Person", name: "Harsh Ranjan Jha" },
  };

  export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://hrjhaa.me"),
    title: {
      default: "Harsh Ranjan Jha – Software Engineer",
      template: "%s | Harsh Ranjan Jha",
    },
    description:
      "Portfolio of Harsh Ranjan Jha (Harsh) – Software Engineer specializing in full-stack development, cloud and Gen-AI. Building with Linux, React, Next.js, Spring Boot, and AWS.",
    keywords: [
      "Harsh",
      "Harsh Ranjan",
      "Harsh Jha",
      "Harsh Ranjan Jha",
      "harsh ranjan jha portfolio",
      "harsh ranjan jha developer",
      "Software Engineer",
      "Full Stack Developer",
      "Linux",
      "Github",
      "React",
      "Next.js",
      "Spring Boot",
      "AWS",
      "AI",
      "Web Development",
    ],
    authors: [{ name: "Harsh Ranjan Jha", url: "https://hrjhaa.me" }],
    creator: "Harsh Ranjan Jha",
    openGraph: {
      type: "website",
      url: "https://hrjhaa.me",
      siteName: "Harsh Ranjan Jha",
      title: "Harsh Ranjan Jha – Software Engineer",
      description:
        "Portfolio of Harsh Ranjan Jha – Software Engineer specializing in full-stack development and Gen-AI.",
      images: [{ url: "/icon.png", width: 1200, height: 630, alt: "Harsh Ranjan Jha" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Harsh Ranjan Jha – Software Engineer",
      description:
        "Portfolio of Harsh Ranjan Jha – Software Engineer passionate about full-stack, Cloud, Devops and Gen-AI.",
      creator: "@thattallboy987",
      images: ["/icon.png"],
    },
    icons: { icon: "/icon.png" },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "https://hrjhaa.me",
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harsh Ranjan Jha",
    alternateName: ["Harsh", "Harsh Ranjan", "Harsh Jha"],
    url: "https://hrjhaa.me",
    sameAs: [
      "https://github.com/harshjha987",
      "https://twitter.com/thattallboy987",
      "https://linkedin.com/in/hrjha987",
    ],
    jobTitle: "Software Engineer",
    description: "Software Engineer specializing in full-stack development and Gen-AI.",
    knowsAbout: ["React", "Next.js", "Spring Boot", "AWS", "AI", "Full Stack Development"],
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en" suppressHydrationWarning>
        <head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <script
           type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative w-full flex items-center justify-center">
              <Navbar />
            </div>
            {children}
          </ThemeProvider>
        </body>
      </html>
    );
  }