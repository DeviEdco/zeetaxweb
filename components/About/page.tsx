"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import {
  IndianRupee,
  BookText,
  Users,
  ClipboardCheck,
  Globe,
  FlaskConical,
  School,
  StickyNote,
  Timer,
} from "lucide-react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-9 lg:gap-[3.75rem] shrink-0 self-stretch py-9 md:py-16 lg:py-[5rem] px-4 md:px-6 lg:px-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0.24%,_rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,_#FFF_45.39%,_rgba(59,31,231,0.93)_84.07%,_#391DE8_100%)]">
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="w-full max-w-[23.5rem] md:max-w-[36rem] text-center text-black font-general-sans font-medium text-[1.75rem] md:text-[2.75rem] leading-[120%] tracking-[-0.11rem]">
          About ZeetaX Publication
        </h1>
        <p className="w-full max-w-[18rem] md:max-w-[32rem] lg:max-w-[42rem] text-center text-black/60 font-manrope text-xs md:text-base leading-[1.5rem] tracking-[-0.04rem]">
          Your Affordable Learning Partner for IIT-JEE, NEET & Board Exams.
        </p>
      </motion.div>

      {/* Intro */}
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-4 md:p-6 lg:p-8">
        <p className="text-black font-manrope text-sm md:text-base leading-[1.75] tracking-[-0.02rem]">
          At ZeetaX Learning Solutions, we believe that quality education should be accessible and affordable for every student in India. Our mission is to provide well-structured, exam-focused study materials that help students excel in IIT-JEE, NEET and board exams. Whether you’re preparing for competitive exams or aiming for high scores in your board exams, we’ve got you covered!
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className="w-full max-w-[23.625rem] md:max-w-[41.9375rem] lg:max-w-[62.875rem] grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-stretch">
        {/* Why Choose */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-4 md:p-6 lg:p-8 flex flex-col gap-4 h-full">
          <h2 className="text-black font-general-sans text-lg md:text-2xl font-medium tracking-[-0.06rem]">
            Why Choose ZeetaX Publication?
          </h2>
          <ul className="flex flex-col gap-3 md:gap-4">
            <li className="flex items-start gap-3">
              <IndianRupee className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Affordable Study Material</span> – High-quality resources at a fraction of the cost.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <BookText className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Comprehensive & Exam-Oriented Content</span> – Aligned with NCERT, CBSE, and state board syllabi.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Users className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Expert-Curated Notes</span> – Prepared by experienced educators and subject experts.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <ClipboardCheck className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Practice & Assessments</span> – Mock tests, PYQs, and chapter-wise exercises to improve performance.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Globe className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Available Anytime, anywhere</span> – Access online and offline to learn at your pace.
              </p>
            </li>
          </ul>
        </motion.div>

        {/* Offerings */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: 0.05 }} className="rounded-md bg-white shadow-[-4px_8px_8px_rgba(0,0,0,0.16)] backdrop-blur-[2px] p-4 md:p-6 lg:p-8 flex flex-col gap-4 h-full">
          <h2 className="text-black font-general-sans text-lg md:text-2xl font-medium tracking-[-0.06rem]">
            Our Offerings
          </h2>
          <ul className="flex flex-col gap-3 md:gap-4">
            <li className="flex items-start gap-3">
              <FlaskConical className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">NEET & JEE Preparation</span> – Tailored content to master key concepts and boost success.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <School className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Board Exam Special Resources</span> – Guides focused on exam patterns, marking schemes, and key questions.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <StickyNote className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Revision Notes & Quick Summaries</span> – Ideal for last-minute revisions and concept recall.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <Timer className="w-5 h-5 md:w-6 md:h-6 text-[#3B1FE7] mt-0.5" />
              <p className="text-black font-manrope text-sm md:text-base leading-[1.6]">
                <span className="font-semibold">Test Series & Mock Exams</span> – Practice under exam conditions to enhance speed and accuracy.
              </p>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer items-center justify-center gap-2 md:gap-4 pl-3 md:pl-5 px-1 md:px-2 py-1 md:py-2 rounded-full border border-white bg-[#363636] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
        <p className="text-white font-general-sans text-xs md:text-xl font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[-0.48px] md:tracking-[-0.8px]">
          Download App
        </p>
        <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white">
          <ArrowRight className="md:w-6 md:h-6 w-5 h-5 text-black" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;