import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "scroll-smooth antialiased",
        jakarta.variable,
        instrumentSerif.variable,
        "font-sans",
      )}
    >
      <body>{children}</body>
    </html>
  )
}
