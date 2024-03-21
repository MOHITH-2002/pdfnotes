
import { Inter } from "next/font/google";
import { EdgeStoreProvider } from "@/lib/edgestore";

import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <main className="flex flex-col w-full h-full px-2 md:px-6 ">

        <Navbar/>
        
          {children}
      </main>
          
          
       
    
  );
}
