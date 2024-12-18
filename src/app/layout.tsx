import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from '@/components/shared/Header/Header.jsx';
import Footer from '@/components/shared/Footer/Footer.jsx';
import { ThemeContextProvider } from "@/context/ThemeContext.jsx";
import ThemeProvider from '@/providers/ThemeProvider.jsx'

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <Header />
            <div className="container">
              {children}
            </div>
            <Footer/>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
