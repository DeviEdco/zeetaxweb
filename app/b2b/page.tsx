import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 lg:gap-[3.75rem] shrink-0 self-stretch py-12 md:py-16 lg:py-[5rem] px-4 md:px-6 lg:px-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0.24%,_rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,_#FFF_45.39%,_rgba(59,31,231,0.93)_84.07%,_#391DE8_100%)]">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="w-full max-w-[26rem] md:max-w-[42rem] text-center text-black font-general-sans font-medium text-[1.75rem] md:text-[2.75rem] leading-[120%] tracking-[-0.11rem]">
          Study Material for School & Institutions with their brands
        </h1>
        <p className="w-full max-w-[20rem] md:max-w-[36rem] lg:max-w-[48rem] text-center text-black/60 font-manrope text-xs md:text-base leading-[1.5rem] tracking-[-0.04rem]">
          For JEE Main | JEE Adv | NEET
        </p>
      </div>

      {/* Offer and Features */}
      <div className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* What We Offer */}
        <div className="rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-5 md:p-6 lg:p-8">
          <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-4">WHAT WE OFFER</h2>
          <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base">
            <li>Complete study package with your institute branding</li>
            <li>As per latest syllabus and pattern</li>
            <li>Quantity based price slabs</li>
            <li>Quality material tailored to your needs</li>
          </ul>
        </div>

        {/* Key Features */}
        <div className="rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-5 md:p-6 lg:p-8">
          <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-4">KEY FEATURE</h2>
          <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base">
            <li>Written by Best Faculty members</li>
            <li>Affordable price</li>
            <li>Student Friendly solutions</li>
            <li>Latest and Updated</li>
          </ul>
        </div>
      </div>

      {/* Invite */}
      <div className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-5 md:p-6 lg:p-8">
        <p className="text-black font-manrope text-sm md:text-base leading-[1.75]">
          We cordially invite Authors, Distributors, Book Sellers, Institutes & Schools to get associated with us.
        </p>
      </div>

      {/* CTA */}
      <div className="flex gap-3 md:gap-4">
        <Link href="/" className="flex items-center justify-center gap-2 md:gap-3 pl-4 pr-4 py-2 rounded-full border border-white bg-[#363636] text-white font-general-sans text-sm md:text-base shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Back to Home
        </Link>
        <a href="tel:08619977179" className="flex items-center justify-center gap-2 md:gap-3 pl-4 pr-4 py-2 rounded-full border bg-white text-black font-general-sans text-sm md:text-base shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          Call Us
        </a>
      </div>
    </div>
  );
}


