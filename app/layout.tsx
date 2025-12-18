import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ServiGrow - India's One App for All Blue-Collar Jobs",
  description:
    "Find skilled workers near you or get work opportunities in your city — directly, safely, and fairly.",
  verification: {
    google: "WhnI-8sxfsqwsXTzSAvhH6AAag_94HA8JyN79btSAq4",
  },
  applicationName: "ServiGrow",
  icons: {
    icon: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-CMV2ER0RMZ`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CMV2ER0RMZ');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
