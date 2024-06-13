import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: "Project Pilot",
  description: "Created project pilot",
}

export default function RootLayout({ children }: RootLayoutProps) {
  function cn(arg0: string, className: string): string | undefined {
    throw new Error("Function not implemented.");
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}