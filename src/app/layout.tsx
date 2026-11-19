import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nature Bright Industries | Cleaning Solutions",
  description: "Cleaning products for homes, retailers, hotels, restaurants and institutions. Contact Nature Bright Industries in Ausa, Maharashtra for product enquiries and bulk quotations.",
  metadataBase: new URL("https://naturebright.in"),
  openGraph: {
    title: "Nature Bright Industries | A Brighter Clean Starts Here",
    description: "Quality cleaning solutions for homes, businesses and institutions.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}