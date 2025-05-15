import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Products from './products'



export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
 <Products/>
  </div>
  
  );
}
