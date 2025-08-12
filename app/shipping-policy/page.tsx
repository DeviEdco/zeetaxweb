import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 lg:gap-[3.75rem] shrink-0 self-stretch py-12 md:py-16 lg:py-[5rem] px-4 md:px-6 lg:px-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0.24%,_rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,_#FFF_45.39%,_rgba(59,31,231,0.93)_84.07%,_#391DE8_100%)]">
      <div className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-5 md:p-8 lg:p-10">
        <h1 className="text-black font-general-sans font-medium text-2xl md:text-3xl tracking-[-0.06rem] mb-4">Shipping Policy</h1>
        <p className="text-black/70 font-manrope text-sm md:text-base leading-[1.75] mb-6">
          We aim to deliver your orders quickly and safely. This Shipping Policy explains shipping methods, timelines, and charges.
        </p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">1. Shipping Coverage</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">We ship across India via trusted courier partners.</p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">2. Dispatch Time</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Orders are typically processed within 1–2 business days.</li>
          <li>During high-demand periods, processing may take up to 3–5 business days.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">3. Delivery Timelines</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Metro cities: 3–5 business days after dispatch.</li>
          <li>Non-metro/remote locations: 5–10 business days after dispatch.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">4. Shipping Charges</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">Shipping fees (if applicable) will be shown at checkout before payment.</p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">5. Tracking</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">You will receive a tracking link via email/SMS once the order is dispatched.</p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">6. Delays and Issues</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">Unforeseen delays (weather, strikes, operational issues) may affect delivery. We appreciate your understanding.</p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">7. Address and Delivery Attempts</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">Ensure your address and contact details are accurate. Failed deliveries due to incorrect information may incur re-shipping charges.</p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">8. Contact</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base">For shipping queries, contact: 08619977179</p>
      </div>

      <div className="flex justify-center">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 md:gap-3 pl-4 pr-4 py-2 rounded-full border border-white bg-[#363636] text-white font-general-sans text-sm md:text-base shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}


