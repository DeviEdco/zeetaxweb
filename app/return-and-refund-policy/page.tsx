import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 lg:gap-[3.75rem] shrink-0 self-stretch py-12 md:py-16 lg:py-[5rem] px-4 md:px-6 lg:px-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0.24%,_rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,_#FFF_45.39%,_rgba(59,31,231,0.93)_84.07%,_#391DE8_100%)]">
      <div className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-5 md:p-8 lg:p-10">
        <h1 className="text-black font-general-sans font-medium text-2xl md:text-3xl tracking-[-0.06rem] mb-4">Return and Refund Policy</h1>
        <p className="text-black/70 font-manrope text-sm md:text-base leading-[1.75] mb-6">
          We want you to be satisfied with your purchase. This policy explains when returns and refunds are accepted for ZeetaX products.
        </p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">1. Eligibility for Returns</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Incorrect product received compared to your order confirmation.</li>
          <li>Damaged or defective product received on delivery.</li>
          <li>Missing items from your order.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">2. Non-Returnable Items</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Digital products (eBooks, PDFs, test series) once delivered.</li>
          <li>Items damaged due to misuse or not in original condition and packaging.</li>
          <li>Products returned without proof of purchase or beyond the return window.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">3. Return Window</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">Returns must be requested within 7 days of delivery.</p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">4. Return Process</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Contact us at 08619977179 with order ID, issue details, and photos (if damaged/defective).</li>
          <li>Our team will verify and provide return instructions and pickup details where applicable.</li>
          <li>Pack the product securely in the original packaging for pickup.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">5. Refunds</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Refunds are processed to the original payment method within 5–7 business days after inspection.</li>
          <li>Shipping charges are non-refundable unless the return is due to our error (wrong/damaged item).</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">6. Exchanges</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">Subject to stock availability, we can exchange incorrect or defective products for the correct item.</p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">7. Contact</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base">For return/refund queries, contact: 08619977179</p>
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


