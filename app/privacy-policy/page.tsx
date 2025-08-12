import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 lg:gap-[3.75rem] shrink-0 self-stretch py-12 md:py-16 lg:py-[5rem] px-4 md:px-6 lg:px-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0.24%,_rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,_#FFF_45.39%,_rgba(59,31,231,0.93)_84.07%,_#391DE8_100%)]">
      <div className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-5 md:p-8 lg:p-10">
        <h1 className="text-black font-general-sans font-medium text-2xl md:text-3xl tracking-[-0.06rem] mb-4">Privacy Policy</h1>
        <p className="text-black/70 font-manrope text-sm md:text-base leading-[1.75] mb-6">
          At ZeetaX Publication (&ldquo;ZeetaX&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), we respect your privacy. This Privacy Policy explains what information we collect, how we use it, and your choices. By using our website/app and purchasing our materials, you agree to this policy.
        </p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">1. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li><span className="font-semibold">Contact details</span>: name, phone number, shipping/billing address.</li>
          <li><span className="font-semibold">Account details</span>: username and preferences if you create an account.</li>
          <li><span className="font-semibold">Order information</span>: items purchased, payment status, and delivery details.</li>
          <li><span className="font-semibold">Usage data</span>: interactions with our website/app, device and browser information, cookies.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">2. How We Use Your Information</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Process and deliver your orders and provide customer support.</li>
          <li>Improve our content, products, and website/app performance.</li>
          <li>Send important updates about orders, policies, and new offerings (you may opt out of promotional messages).</li>
          <li>Prevent fraud, enforce our Terms, and comply with legal obligations.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">3. Sharing of Information</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li><span className="font-semibold">Service providers</span> who help with payments, shipping, analytics, and customer support.</li>
          <li><span className="font-semibold">Legal and compliance</span> when required by law or to protect rights and safety.</li>
          <li><span className="font-semibold">Business transfers</span> in connection with a merger, acquisition, or asset sale.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">4. Cookies and Tracking</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">
          We use cookies and similar technologies to remember your preferences and analyze traffic. You can control cookies through your browser settings. Disabling cookies may affect some features.
        </p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">5. Data Retention</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">
          We retain personal data only as long as necessary for the purposes described above or as required by law (for example, for tax and accounting requirements).
        </p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">6. Your Rights</h2>
        <ul className="list-disc pl-5 space-y-2 text-black/80 font-manrope text-sm md:text-base mb-6">
          <li>Access, correct, or delete your personal information where applicable.</li>
          <li>Opt out of marketing communications at any time.</li>
          <li>Contact us to raise questions or concerns about your data.</li>
        </ul>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">7. Children’s Privacy</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">
          Our services are intended for students and parents/guardians. We do not knowingly collect personal information from children without consent from a parent or guardian where required by law.
        </p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">8. Changes to This Policy</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base mb-6">
          We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised effective date.
        </p>

        <h2 className="text-black font-general-sans text-xl md:text-2xl font-medium mb-3">9. Contact Us</h2>
        <p className="text-black/80 font-manrope text-sm md:text-base">
          ZeetaX Publication, 206 Sudarshan Enclave, Hiran Magri, Udaipur · Phone: 08619977179
        </p>
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


