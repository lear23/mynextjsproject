import  Navbar from '@/src/components/Navbar';
import {Roboto} from "next/font/google"
import  './global.css'


export const metadata = {
  title: 'Lars-Next',
  description: 'Esta es mi pagina de nextjs',
  Keywords: 'tienda , online, ecommerce',
}

 const roboto = Roboto({
  weight: ["300","400","500", "700"],
  style: ["italic","normal"],
  subsets: ["latin"],
 })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
       <Navbar/>
       {children}
      </body>
    </html>
  )
}
