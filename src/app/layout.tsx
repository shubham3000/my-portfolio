import type { Metadata } from "next";
import "./globals.css";
import { PortfolioSidebar } from "@/Components/sidebar/sidebar";
import Dashboard from "@/Components/Dashboard/dashboard";
import { Inter } from "next/font/google";

// export const metadata: Metadata = {
//   title: "Shubham's Protfolio",
//   description: "I am a Frontend Developer.",
// };

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <PortfolioSidebar />
          <Dashboard>{children}</Dashboard>
        </div>
      </body>
    </html>
  );
}
