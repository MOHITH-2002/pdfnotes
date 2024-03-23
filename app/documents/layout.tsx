
import Navbar from "./_components/Navbar";
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
