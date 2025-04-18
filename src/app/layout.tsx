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
  description: "Креативное медиаагентство полного цикла",
  // icons: {
  //   icon: "./favicon.ico",
  //   shortcut: "/favicon-32x32.png",
  //   apple: "/apple-touch-icon.png",
  // },
  openGraph: {
    title: "WolfMedia",
    description: "Креативное медиаагентство полного цикла",
    url: "https://wolfmedia.ru",
    siteName: "WolfMedia",
    locale: "ru_RU",
    type: "website",
  }
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
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html >
  );
}
