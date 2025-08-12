"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-7 md:gap-16 lg:gap-9 min-h-[17.5rem] md:min-h-[27rem] lg:h-[35.625rem] py-4 md:py-16 lg:py-20 px-4 md:px-6 lg:px-0 shrink-0 self-stretch bg-white">
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="flex flex-col md:flex-row md:justify-between items-start border-b border-black w-full max-w-[23.5rem] md:max-w-[41.8125rem] lg:max-w-[73.4375rem] px-[0.0625rem] py-4 md:py-5 gap-7 md:gap-0">
        {/* Brand Section */}
        <div className="flex flex-col items-start gap-4 shrink-0">
          <h1 className="text-black cursor-pointer text-[1.25rem] md:text-[1.5rem] font-bold leading-[1.5] tracking-[-0.05rem] md:tracking-[-0.06rem] font-fortusnova">
            zeetaX
          </h1>
          <p className="text-black text-xs md:text-[1rem] font-medium leading-[1.5rem] tracking-[-0.03rem] md:tracking-[-0.04rem] font-general-sans">
            Your #1 Platform for Learning
          </p>
        </div>
        
        {/* Links Section */}
        <div className="flex flex-row md:justify-center items-start gap-[6.75rem] md:gap-[3.75rem] w-full md:w-auto">
          <div className="flex flex-col items-start gap-4 md:gap-4">
            <h3 className="text-black font-medium text-xs md:text-[1.5rem] leading-[1.5] tracking-[-0.03rem] md:tracking-[-0.06rem] font-general-sans">
              Site Links
            </h3>
            <div className="flex flex-col items-start gap-[0.625rem]">
              <Link href="/privacy-policy" className="text-black font-general-sans cursor-pointer text-xs md:text-[1rem] font-medium leading-[1.5] tracking-[-0.03rem] md:tracking-[-0.06rem]">
                Privacy Policy
              </Link>
              <Link href="/shipping-policy" className="text-black font-general-sans cursor-pointer text-xs md:text-[1rem] font-medium leading-[1.5] tracking-[-0.03rem] md:tracking-[-0.06rem]">
                Shipping Policy
              </Link>
              <Link href="/return-and-refund-policy" className="text-black font-general-sans cursor-pointer text-xs md:text-[1rem] font-medium leading-[1.5] tracking-[-0.03rem] md:tracking-[-0.06rem]">
                Return and Refund Policy
              </Link>
              <Link href="/terms-and-conditions" className="text-black font-general-sans cursor-pointer text-xs md:text-[1rem] font-medium leading-[1.5] tracking-[-0.03rem] md:tracking-[-0.06rem]">
                Terms & Condition
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2.5 md:gap-4">
            <h3 className="text-black font-medium text-xs md:text-[1.5rem] leading-[1.5] tracking-[-0.03rem] md:tracking-[-0.06rem] font-general-sans">
              Download our mobile app
            </h3>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer justify-center items-center gap-1 md:gap-4 pl-3 md:pl-6 py-1 px-0 md:px-1 rounded-full border border-white bg-[#363636] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[5px] w-[7.625rem] md:w-auto">
              <p className="text-white font-general-sans text-xs md:text-base not-italic font-medium leading-[1.5rem] tracking-[-0.03rem] md:tracking-[-0.04rem]">
                Download App
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
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.05 }} className="flex flex-col md:flex-row w-full max-w-[23.5rem] md:max-w-[41.8125rem] lg:max-w-[73.4375rem] px-[0.0625rem] py-5 md:justify-between items-center gap-7 md:gap-0">
        <div className="w-full md:w-[13.25rem] shrink-0 text-center text-black font-general-sans text-[0.9375rem] font-medium leading-[1.40625rem] tracking-[-0.0375rem]">
          Copyright © 2025 | zeetaX (IEDCO PRIVATE LIMITED)
        </div>

        <div className="flex justify-center items-center gap-4">
          <a target="_blank" href="https://www.facebook.com/zeetaX">
            <Image src="/facebook.svg" alt="facebook" width={24} height={24} />
          </a>
          <a target="_blank" href="https://www.instagram.com/zeetaX">
            <Image src="/instagram.svg" alt="instagram" width={24} height={24} />
          </a>
          <a target="_blank" href="https://www.twitter.com/zeetaX">
            <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
          </a>
        </div>
      </motion.div>

    </div>
  );
};

export default Footer;
