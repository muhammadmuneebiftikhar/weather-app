import "./globals.css";
import { Metadata } from 'next/types';

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100">
        {children}
      </body>
    </html>
  );
}
