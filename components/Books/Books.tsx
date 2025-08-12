"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Books = () => {
  const tabs = [
    { id: "jee", label: "JEE", icon: "/jee.svg" },
    { id: "neet", label: "NEET", icon: "/neet.svg" },
    { id: "class11", label: "Class 11", icon: "/11.svg" },
    { id: "class12", label: "Class 12", icon: "/12.svg" },
  ] as const;

  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]["id"]>("jee");

  const contentByTab: Record<(typeof tabs)[number]["id"], { title: string; items: string[] }> = {
    jee: { title: "JEE Books", items: ["Physics", "Chemistry", "Mathematics"] },
    neet: { title: "NEET Books", items: ["Physics", "Chemistry", "Biology"] },
    class11: { title: "Class 11 Notes", items: ["Mathematics", "Physics", "Chemistry"] },
    class12: { title: "Class 12 Notes", items: ["Mathematics", "Physics", "Chemistry"] },
  };

  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 lg:gap-[3.75rem] shrink-0 self-stretch py-9 md:py-16 lg:py-[5rem] min-h-[28rem] md:min-h-[40rem] lg:h-[69.4375rem] px-4 md:px-6 lg:px-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0.24%,_rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,_#FFF_45.39%,_rgba(59,31,231,0.93)_84.07%,_#391DE8_100%)]">
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="w-full max-w-[23.5rem] md:max-w-[36rem] text-center text-black font-medium text-[1.75rem] md:text-[2.75rem] leading-[120%] tracking-[-0.11rem] font-general-sans">
          Book Collection at zeetaX
        </h1>

        <p className="w-full max-w-[14.625rem] md:max-w-[26.875rem] text-black/50 text-center font-manrope text-xs md:text-base not-italic font-normal leading-[1.5rem] tracking-[-0.04rem]">
          Get high-quality notes and prep material for Class 11, 12, and JEE
          with zeetaX.
        </p>
      </motion.div>

      {/* tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.1 }}
        className="flex w-full justify-center max-w-[20.5rem] md:max-w-[43.9375rem] lg:max-w-[60.75rem] items-start gap-0 md:gap-2 border-b border-[#C6CAD1]"
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative flex cursor-pointer w-[4.875rem] md:w-44 lg:w-60 py-3 justify-center items-center gap-1 md:gap-2 shrink-0 focus:outline-none"
            >
              <Image
                src={tab.icon}
                alt={tab.label}
                width={13}
                height={13}
                className="md:w-6 md:h-6"
              />
              <h2
                className={
                  isActive
                    ? "text-black font-medium text-[0.8125rem] md:text-base lg:text-[1.25rem] leading-[120%] tracking-[-0.05rem] font-general-sans"
                    : "text-black/50 font-medium text-[0.8125rem] md:text-base lg:text-[1.25rem] leading-[120%] tracking-[-0.05rem] font-general-sans"
                }
              >
                {tab.label}
              </h2>
              {isActive ? (
                <motion.span
                  layoutId="active-tab-underline"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#391DE8]"
                  transition={{ type: "spring", stiffness: 500, damping: 40 }}
                />
              ) : null}
            </button>
          );
        })}
      </motion.div>

      {/* content area */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="w-full h-fit max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] h-[14.82rem] md:h-[26.3125rem] lg:h-[39.4375rem] flex-shrink-0 bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] rounded-md"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="w-full h-full p-4 md:p-6 lg:p-8"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-black font-general-sans text-lg md:text-2xl lg:text-3xl font-medium tracking-[-0.04rem]">
                {contentByTab[activeTab].title}
              </h3>
            </div>
            <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
              {contentByTab[activeTab].items.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 rounded-md border border-[#E5E7EB] bg-[#F9FAFB] p-3 md:p-4"
                >
                  <Image src="/file.svg" alt="file" width={20} height={20} className="  md:w-6 md:h-6" />
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base font-medium text-black">{item}</span>
                    <span className="text-xs text-black/50">High-quality notes and problems</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

    </div>
  );
};

export default Books;
