
import "./globals.css";
import Footer from "@/components/Footer";
import QuoteBar from "@/components/QuoteBar";
import Script from "next/script";
import { Montserrat, Poppins } from "next/font/google";
import Navbar from "@/components/Header/Navbar";
import { RegionProvider } from "@/lib/regionContext";




const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600"],
  variable: "--font-poppins",
});

// export const metadata = {
//   title: "Carelabs",
//   description: "Electrical safety, power system studies, and compliance services.",
// };

export const metadata = {
  title: {
    template: '%s | Acme Carelabs', // %s is replaced by the child's title
    default: 'Carelabs', // Default title if a child doesn't specify one
  },
   description: "Electrical safety, power system studies, and compliance services.",
};

export default function RootLayout({ children }) {

  

  


  return (
    <html lang="en" >
      
        <body className={`${montserrat.variable} ${poppins.variable} font-sans`}> 
        <RegionProvider>
          <Navbar/>
           {children}
          <QuoteBar/>
        <  Footer/>
        </RegionProvider>
        
        {/* cloudflare */}
     <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          async
          defer
        />


      </body>
    </html>
  );
}
