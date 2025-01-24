import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Saira, Manrope } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import WhatsAppIcon from "@/components/WhatsappIcon";
import MapAndPhone from "@/components/MapAndPhone";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const saira = Saira({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"], // Add required weights for Saira
});

const manrope = Manrope({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"], // Add required weights for Manrope
});

export const metadata = {
  title: "Anandam Construction",
  description: "Building Strong Foundations for better tomorrow.",
  metadataBase: new URL("https://anandamconstruction.com/"),
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Anandam Construction",
    "Construction company in Patna",
    "Real estate company in Patna",
    "Real estate construction in Patna",
    "Best construction company in Bihar",
    "Construction services in Patna",
    "Residential construction Patna",
    "Commercial construction Patna",
    "Patna real estate developers",
    "Top builders in Patna",
    "Property developers Patna",
    "Affordable housing Patna",
    "Luxury homes in Patna",
    "Builders in Patna Bihar",
    "Construction contractors Patna",
    "Patna real estate market",
    "Construction companies in Bihar",
    "Patna real estate builders",
    "Patna property construction",
    "Construction projects Patna",
    "Real estate developers Bihar",
    "Residential building contractors Patna",
    "Patna construction experts",
    "Construction projects in Bihar",
    "Construction company in India",
    "Building homes in Patna",
    "Construction firms in Patna",
    "Construction industry Patna",
    "Top real estate construction company Bihar",
    "Best construction builders Patna",
    "Patna building contractors",
    "New construction projects Patna",
    "Real estate investment Patna",
    "Property builders in Bihar",
    "Anandam construction services",
    "Real estate consultants Patna",
    "Builders for luxury apartments Patna",
    "Patna property developers list",
    "House construction Patna",
    "Patna housing projects",
    "Architecture",
    "Building",
    "Construction",
  ],
  openGraph: {
    title: "Anandam Construction",
    description: "Building Strong Foundations for better tomorrow.",
  
    url: "https://anandamconstruction.com",
    siteName: "Anandam Construction",
    images: [
      {
        url: "https://anandamconstruction.com/og-image.jpg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Anandam Construction",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anandam Construction",
    description: "Building Strong Foundations for better tomorrow.",
    images: ["https://anandamconstruction.com/og-image.jpg"], // Replace with your image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${saira.className} ${manrope.className} antialiased`}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light" // You can change this to 'dark'
      />
        <SmoothScroll>
          {children}
          <Footer />
          <ScrollToTopButton />
          <WhatsAppIcon />
          <MapAndPhone />
        </SmoothScroll>
      </body>
    </html>
  );
}
