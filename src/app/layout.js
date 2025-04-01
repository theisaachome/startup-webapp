import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header/main-header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
