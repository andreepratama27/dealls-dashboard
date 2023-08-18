import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { QueryProvider } from "@/utils/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dealls Commerce",
  description: "Dealls Commerce Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex w-full">
          <Sidebar />
          <QueryProvider>
            <div className="main-content w-full py-10 px-8">{children}</div>
          </QueryProvider>
        </main>
      </body>
    </html>
  );
}
