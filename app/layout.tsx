import type { Metadata } from "next";
import "./globals.css";
import { inter } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: "Pokémon Browser",
  description: "ForLoop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
      <footer className="flex flex-col p-8 justify-center items-center">
        
        <div>Thank you for using Pokémon Browser!</div>
      </footer>
    </html>
  );
}
