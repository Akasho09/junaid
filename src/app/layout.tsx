import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://junaid12.vercel.app"),

  title: {
    default:
      "Junaid Ahmad Malik | Kashmir Cricketer | B.Tech Computer Science Student",
    template: "%s | Junaid Ahmad Malik",
  },

  description:
    "Official portfolio of Junaid Ahmad Malik, a Kashmir cricketer and B.Tech Computer Science student. Explore cricket achievements, academics, projects, leadership experience, and professional profile.",

  keywords: [
    "Junaid Ahmad Malik",
    "Junaid Malik",
    "Kashmir Cricketer",
    "J&K Cricketer",
    "Jammu and Kashmir Cricket",
    "Under 23 Cricketer",
    "Jamia Millia Islamia",
    "BTech Computer Science",
    "Student Portfolio",
    "Cricket Portfolio",
    "Kashmir Student",
    "Software Developer",
    "Computer Science Student",
    "Cricket Player",
    "Full Stack Developer",
    "J&K Under 23",
  ],

  authors: [{ name: "Junaid Ahmad Malik" }],
  creator: "Junaid Ahmad Malik",
  publisher: "Junaid Ahmad Malik",

  category: "Sports",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://junaid12.vercel.app",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://junaid12.vercel.app",
    siteName: "Junaid Ahmad Malik",

    title:
      "Junaid Ahmad Malik | Kashmir Cricketer | B.Tech Computer Science Student",

    description:
      "Official website of Junaid Ahmad Malik. Explore cricket achievements, academics, leadership journey, and software development projects.",

    images: [
      {
        url: "/junaid.jpeg",
        width: 1200,
        height: 630,
        alt: "Junaid Ahmad Malik",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Junaid Ahmad Malik | Kashmir Cricketer | B.Tech Computer Science Student",

    description:
      "Official portfolio of Junaid Ahmad Malik featuring cricket achievements, academics, and projects.",

    images: ["/junaid.jpeg"],
  },

  verification: {
    google: "uhUSq3S9zTC8jQ-rP1KM_Ne-ZPVdXiya5FtSIS2RCkk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <footer className="mt-20 border-t border-gray-200 bg-white py-8 text-center text-sm text-gray-500">
          <p>
            © 2026 Junaid Ahmad Malik · Kashmir, Jammu & Kashmir · India
          </p>
          <p className="mt-1 text-xs text-gray-400">
            Cricketer · B.Tech Computer Science Student · Portfolio Website
          </p>
        </footer>
      </body>
    </html>
  );
}