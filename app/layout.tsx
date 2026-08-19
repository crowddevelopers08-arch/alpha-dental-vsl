import type { Metadata } from "next";
import "./globals.css";
import BookingProvider from "@/component/BookingProvider";

const LOGO_URL = "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612784/alpha-logos.png";

export const metadata: Metadata = {
  title: {
    default: "Alpha Dental Studio | Best Dentist in RA Puram, Chennai",
    template: "%s | Alpha Dental Studio",
  },
  description:
    "Alpha Dental Studio in RA Puram, Chennai offers expert Dental Implants, Smile Design & Root Canal treatments. Watch our video, know the cost and process before you book a consultation.",
  keywords: [
    "Alpha Dental Studio",
    "dentist RA Puram Chennai",
    "dental implants Chennai",
    "smile design Chennai",
    "root canal treatment Chennai",
    "best dental clinic Chennai",
  ],
  authors: [{ name: "Alpha Dental Studio" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Alpha Dental Studio | Best Dentist in RA Puram, Chennai",
    description:
      "Expert Dental Implants, Smile Design & Root Canal treatments in RA Puram, Chennai. Watch the video before you book.",
    siteName: "Alpha Dental Studio",
    images: [{ url: LOGO_URL }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alpha Dental Studio | Best Dentist in RA Puram, Chennai",
    description:
      "Expert Dental Implants, Smile Design & Root Canal treatments in RA Puram, Chennai.",
    images: [LOGO_URL],
  },
  icons: {
    icon: [
      {
        url: LOGO_URL,
        sizes: "any",
      },
      {
        url: LOGO_URL,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: LOGO_URL,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: LOGO_URL,
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: LOGO_URL,
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: LOGO_URL,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col font-sans">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
