import type { Metadata } from "next";
import Head from "next/head";
import { config } from "@fortawesome/fontawesome-svg-core";
import { poppins } from "./fonts";
import { Toaster } from "sonner";
import LenisProvider from "../../components/LenisProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import NavBar from "../../components/home/NavBar";
import Footer from "../../components/footer/Footer";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Brandon Quon's Portfolio",
  description:
    "I'm Brandon, CS student at SFU and currently interning at Trulioo. Outside of code, you'll find me lifting weights or getting lost in Night City.",
  openGraph: {
    title: "Brandon Quon's Portfolio",
    description:
      "I'm Brandon, CS student at SFU and currently interning at Trulioo. Outside of code, you'll find me lifting weights or getting lost in Night City.",
    url: "https://2025portfolio-sepia.vercel.app/",
    siteName: "Brandon Quon's Portfolio",
    images: [
      {
        url: "/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Brandon Quon's Portfolio Open Graph Preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/png"
          sizes="32x32"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <LenisProvider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
        <Toaster richColors />
      </body>
    </html>
  );
}
