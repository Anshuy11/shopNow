import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col">
    <Header />
    <div className="flex-grow" /> {/* This takes up the remaining space */}
    <Footer />
  </div>
  
  );
}
