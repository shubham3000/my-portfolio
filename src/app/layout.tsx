import type { Metadata } from "next";
import { Arimo, Kalnia } from "next/font/google";
import "./globals.css";
import { PortfolioSidebar } from "@/Components/sidebar/sidebar";
import Dashboard from "@/Components/Dashboard/dashboard";

// const inter = Inter({ subsets: ["latin"] });
const arimo = Arimo({ subsets: ["latin"] });
const kalnia = Kalnia({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Shubham's Protfolio",
//   description: "I am a Frontend Developer.",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={arimo.className}>
        <div className="flex">
          <PortfolioSidebar />
          <Dashboard>
          {children}
            </Dashboard>
        </div>
      </body>
    </html>
  );
}

export { kalnia };
