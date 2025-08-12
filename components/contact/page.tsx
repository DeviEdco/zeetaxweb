
"use client";
import React from "react";
import { Phone, Globe, MapPin } from "lucide-react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 lg:gap-[3.75rem] shrink-0 self-stretch py-9 md:py-16 lg:py-[5rem] px-4 md:px-6 lg:px-0  bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0.24%,rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,#391DE8_0%,#3B1FE7_49.75%,#FFF_76.81%)]">
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="w-full max-w-[23.5rem] md:max-w-[36rem] text-center text-white font-general-sans font-medium text-[1.75rem] md:text-[2.75rem] leading-[120%] tracking-[-0.11rem]">
          Join Thousands of Successful Students!
        </h1>
        <p className="w-full max-w-[20rem] md:max-w-[36rem] lg:max-w-[48rem] text-center text-white font-manrope text-xs md:text-base leading-[1.5rem] tracking-[-0.04rem]">
          At ZeetaX, we take pride in helping students achieve their academic goals with confidence. Our affordable and high-quality learning resources are designed to make exam preparation stress-free and result-oriented.
        </p>
      </motion.div>

      {/* Contact Card */}
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6">
        <h2 className="text-black font-general-sans text-lg md:text-2xl font-medium tracking-[-0.06rem] text-center md:text-left">
          Get in Touch with Us!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          <div className="flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <a href="tel:08619977179" className="text-black font-manrope text-sm md:text-base leading-[1.6] hover:underline">
                Phone: 08619977179
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <span className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                Website: Your Website
              </span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
            <div className="text-black font-manrope text-sm md:text-base leading-[1.6]">
              <p>206 Sudarshan Enclave</p>
              <p>Hiran Magri Udaipur</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer items-center justify-center gap-2 md:gap-4 pl-3 md:pl-5 px-1 md:px-2 py-1 md:py-2 rounded-full border border-white bg-[#363636] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
        <p className="text-white font-general-sans text-xs md:text-xl font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[-0.48px] md:tracking-[-0.8px]">
          Start your journey towards success with ZeetaX Publication today!
        </p>
        <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white">
          <svg className="md:w-6 md:h-6 w-5 h-5 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /><path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;


