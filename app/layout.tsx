import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { DM_Mono, Oswald } from "next/font/google";

const dm_mono = DM_Mono({
  weight: ["400", "500"],
  variable: "--font-dm-mono",
});

const oswald = Oswald({ variable: "--font-oswald" });

export const metadata: Metadata = {
  title: { default: "Smart Pill", template: "%S | Smart Pill" },

  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dm_mono.variable} ${oswald.variable} antialiased`}>
        <ThemeProvider attribute={"class"} enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
