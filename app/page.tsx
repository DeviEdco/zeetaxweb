import Books from "@/components/Books/Books";
import Footer from "@/components/Footer/page";
import HeroSection from "@/components/Hero/HeroSection";
import Reviews from "@/components/reviews/page";
import About from "@/components/About/page";

import React from "react";
import Contact from "@/components/contact/page";
export default function Home() {
  return (
   <div className="flex  bg-white flex-col items-center justify-center h-fit">
    <HeroSection />
    <Books />
    <Reviews />
    <About />
    <Contact />
    <Footer />
   </div>   
  );
}
