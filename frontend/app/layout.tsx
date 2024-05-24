import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import ReactQueryProvider from "./ReactQueryProvider";
import { ReactNode } from "react";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Job Portal",
  description: "Generated by create next app",
};

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className="custom_scrollbar bg-[#181818]">
        <ReactQueryProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
