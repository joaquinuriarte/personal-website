import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Joaquin Uriarte",
  description: "Personal website of Joaquin Uriarte",
  icons: {
    icon: '/images/me_global.svg',
    shortcut: '/images/me_global.svg',
    apple: '/images/me_global.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-black text-white overscroll-x-none">
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

        {/* Decorative elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="fixed top-0 left-0 right-0 z-50">
          <Header />
        </div>
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
