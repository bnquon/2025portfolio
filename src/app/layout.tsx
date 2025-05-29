import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import { poppins } from "./fonts";
import { Toaster } from "sonner";
import  LenisProvider from "../../components/LenisProvider";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "BQ 2025",
  description: "Brandon Quon's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>

      <Toaster richColors />
    </html>
  );
}
