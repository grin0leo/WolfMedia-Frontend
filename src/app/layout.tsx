import { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";


import localFont from 'next/font/local';

const CeraPro = localFont({
  src: [
    {
      path: '../fonts/CeraPro-Thin.woff2',
      weight: '200',
      style: 'thin'
    },
    {
      path: '../fonts/CeraPro-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../fonts/CeraPro-Regular.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../fonts/CeraPro-Bold.woff2',
      weight: '700',
      style: 'bold'
    }],
  display: 'swap',
  variable: '--font-CeraPro',
}
);

export const metadata: Metadata = {
  title: "WolfMedia",
  description: "Креативное медиаагентство полного цикла"
};

export default function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={CeraPro.variable}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />

        <meta property="og:title" content="WolfMedia" />
        <meta property="og:description" content="Креативное медиаагентство полного цикла" />
        <meta property="og:image" content="/Desktop.png" />
        <meta property="og:url" content="https://wolfmedia.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="WolfMedia" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
