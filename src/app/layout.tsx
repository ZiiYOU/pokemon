import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { url } from "inspector";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon",
  description: "I love Pokemons!",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./icon.png" sizes="any" />
      <body className="relative w-full h-screen grid justify-items-center bg-[url('../../public/bg.jpg')] bg-cover bg-center">
        {children}
        <footer className="absolute fixed w-full h-56 px-12 bottom-0 flex items-center justify-between basis-0 ">
          <img src="/ggo.png" alt="" className="w-24 h-32" />
          <img src="/logo.webp" alt="" className="w-2/12 " />
          <img src="/jiwooo.png" alt="" className="w-32" />
        </footer>
      </body>
    </html>
  );
}
