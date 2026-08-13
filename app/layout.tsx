import type { Metadata } from "next";
import "./globals.css";
import BookingProvider from "@/component/BookingProvider";

export const metadata: Metadata = {
  title: "Dentist & Medical Odontologist",
  description: "Modern dental and medical WordPress theme showcase",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png",
        sizes: "any",
      },
      {
        url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "https://res.cloudinary.com/x6ec5hqm/image/upload/v1786612791/logos.png",
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
