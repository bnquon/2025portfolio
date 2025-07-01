import type { Metadata } from "next";
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
  metadataBase: new URL("https://brandon-quon.com"),
  title: "Brandon Quon's Portfolio",
  description:
    "I'm Brandon, a software engineer and Computer Science student at SFU, currently interning at Trulioo. Explore my portfolio to see my projects and to learn more about me.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Brandon Quon's Portfolio",
    description:
      "I'm Brandon, a software engineer and Computer Science student at SFU, currently interning at Trulioo. Explore my portfolio to see my projects and to learn more about me.",
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
