import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar1 } from "@/components/navbar1";
import { Footer2 } from "@/components/footer2";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "PlantPedia - Sistem Prediksi Tanaman Berbasis AI",
    template: "%s | PlantPedia",
  },
  description: "Platform prediksi tanaman berbasis Machine Learning dan Google Gemini AI. Analisis lahan untuk 22 jenis tanaman dengan akurasi tinggi menggunakan algoritma Random Forest.",
  keywords: [
    "prediksi tanaman",
    "machine learning pertanian",
    "AI pertanian",
    "analisis lahan",
    "random forest",
    "google gemini",
    "rekomendasi tanaman",
    "sistem pakar pertanian",
    "agritech",
    "smart farming",
  ],
  authors: [{ name: "PlantPedia Team" }],
  creator: "PlantPedia Team",
  publisher: "PlantPedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://plantpedia.vercel.app",
    title: "PlantPedia - Sistem Prediksi Tanaman Berbasis AI",
    description: "Platform prediksi tanaman berbasis Machine Learning dan Google Gemini AI untuk membantu petani menemukan tanaman terbaik.",
    siteName: "PlantPedia",
    images: [
      {
        url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "PlantPedia - Prediksi Tanaman AI",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar1 />
        <main className="container mx-auto md:px-4">
          {children}
        </main>
        <Footer2 />
      </body>
    </html>
  );
}
