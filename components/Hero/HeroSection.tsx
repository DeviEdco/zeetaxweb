"use client";
import Image from "next/image";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="w-full  h-fit xl:min-h-screen flex flex-col justify-start bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0.24%,_rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,_#391DE8_0%,_rgba(59,31,231,0.93)_42.22%,_#FFF_100%)] py-6 md:py-[1.4375rem] items-center gap-8 md:gap-12 lg:gap-[3.75rem] px-4 md:px-6 lg:px-0">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full flex justify-center">
        <Navbar />
      </motion.div>
      {/* headings */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="flex flex-col items-center gap-2 md:gap-4">
        <div className="flex items-center px-3 md:px-6 py-1 md:py-2 gap-1 md:gap-2 rounded-[1.5rem] border border-[#FCFDFF] bg-white">
          <Image src="/box.svg" alt="logo" width={12} height={12} className="md:w-6 md:h-6" />
          <h2 className="text-[#002B6B] font-general-sans text-xs md:text-base not-italic font-medium leading-[1.5rem] tracking-[-0.04rem]">
            Your #1 Platform for Learning
          </h2>
        </div>

        <h1 className="w-full max-w-[26rem] md:max-w-[42rem] lg:max-w-[52.875rem] text-white text-center font-general-sans text-4xl md:text-[3.75rem] lg:text-[4.5rem] not-italic font-medium leading-[1] md:leading-[4.5rem] lg:leading-[5.4rem] tracking-[-0.001rem]">
          Learn from the best and become one
        </h1>

        <p className="w-full max-w-[20rem] md:max-w-[25rem] lg:max-w-[26.875rem] text-[#F4F4F4] text-center font-manrope text-xs md:text-sm lg:text-base not-italic font-normal leading-[1.5rem] tracking-[-0.04rem]">
          zeetaX is the most Interactive, Easy to Understand and Self Learning
          education Platform 
        </p>
      </motion.div>

      {/* Cta */}
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.2, duration: 0.6 }} className="flex justify-center items-center gap-2">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer justify-center items-center pl-3 md:pl-6 py-1 px-1 gap-2 md:gap-4 rounded-full border border-white bg-[#363636] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
          <p className="text-white font-general-sans text-xs md:text-base not-italic font-medium leading-[1.5rem] tracking-[-0.04rem]">
            Playstore zeetaX
          </p>
          <div className="w-6 h-6 md:w-10 md:h-10 p-3 md:p-5 relative gap-[0.625rem] rounded-full bg-white">
            <Image
              src="/playstore.svg"
              alt="download"
              width={12}
              height={12}
              className="md:w-6 md:h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </motion.div>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer w-[7.5rem] md:w-[11rem] h-8 md:h-12 justify-center items-center gap-4 rounded-full border border-white bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
          <p className="text-black font-general-sans text-xs md:text-base not-italic font-medium leading-[1.5rem] tracking-[-0.04rem]">
            Contact Now
          </p>
        </motion.div>
      </motion.div>
      {/* box */}
      <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, ease: "easeOut" }} className="w-full max-w-[23.75rem] md:max-w-[40.5rem] lg:max-w-[62.8125rem] h-[9.5625rem] md:h-[19rem] lg:h-[25.3125rem] border-b border-r border-[#3B1FE7ED] relative shrink-0 rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px]">
        {/* ff.svg image replacing the 5 boxes */}
        <Image
          src="/ff.svg"
          alt="zeetaX class notes and study materials"
         
          fill
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
