import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LimeSugar — Premium Anime, Drama & Hollywood Streaming",
    template: "%s | LimeSugar",
  },
  description: "Stream anime, Asian dramas, and Hollywood movies & series. Beautiful dark UI, resume playback, multi-server streaming, and cross-platform apps.",
  keywords: ["anime streaming", "drama streaming", "hollywood movies", "anime app", "drama app", "video streaming", "media player"],
  authors: [{ name: "LimeSugar" }],
  creator: "LimeSugar",
  publisher: "LimeSugar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://limesugar.app",
    siteName: "LimeSugar",
    title: "LimeSugar — Premium Anime, Drama & Hollywood Streaming",
    description: "Stream anime, Asian dramas, and Hollywood movies & series. Beautiful dark UI, resume playback, multi-server streaming.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LimeSugar - Premium Streaming App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LimeSugar — Premium Anime, Drama & Hollywood Streaming",
    description: "Stream anime, Asian dramas, and Hollywood movies & series. Beautiful dark UI, resume playback, multi-server streaming.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-bg text-text flex flex-col">
        {children}
      </body>
    </html>
  );
}