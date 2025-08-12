"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const Reviews = () => {
  const STUDENT_REVIEWS: Array<{
    name: string;
    location: string;
    exam: string;
    quote: string;
    rating: number;
  }> = [
    {
      name: "Rohan Sharma",
      location: "Kota, Rajasthan",
      exam: "JEE Main",
      quote:
        "The concise theory + PYQs helped me quickly revise. Loved the step-by-step solutions!",
      rating: 5,
    },
    {
      name: "Aisha Khan",
      location: "New Delhi",
      exam: "NEET UG",
      quote:
        "Affordable and to-the-point. The biology notes are super crisp and exam-oriented.",
      rating: 5,
    },
    {
      name: "Arjun Patel",
      location: "Ahmedabad, Gujarat",
      exam: "JEE Advanced",
      quote:
        "Practice sets mirror the real exam pattern. My accuracy and speed improved a lot.",
      rating: 4,
    },
    {
      name: "Sneha Iyer",
      location: "Mumbai, Maharashtra",
      exam: "Class 12 CBSE",
      quote:
        "Revision notes were perfect for last-minute prep. Cleared my doubts quickly.",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      location: "Jaipur, Rajasthan",
      exam: "NEET UG",
      quote:
        "Great quality at a reasonable price. The chapter-wise tests kept me on track.",
      rating: 4,
    },
    {
      name: "Priya Verma",
      location: "Lucknow, Uttar Pradesh",
      exam: "JEE Main",
      quote:
        "Clear explanations and lots of practice questions. Highly recommended!",
      rating: 5,
    },
  ];

  const Stars = ({ rating }: { rating: number }) => {
    const full = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return (
      <span className="text-[#FFB800] text-sm md:text-base" aria-label={`${rating} out of 5`}>
        {full}
        <span className="text-[#E3E3E3]">{empty}</span>
      </span>
    );
  };

  return (
    <div className="flex flex-col items-center flex-shrink-0 self-stretch min-h-[37.1875rem] md:min-h-[54rem] lg:h-fit py-9 md:py-16 lg:py-[5rem] gap-6 md:gap-9 lg:gap-[3.75rem] px-4 md:px-6 lg:px-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0.24%,rgba(255,255,255,0.16)_99.76%),radial-gradient(107.81%_107.81%_at_50%_-4.1%,#391DE8_0%,#3B1FE7_49.75%,#FFF_76.81%)]">
      {/* Headings */}
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-center text-white font-medium text-[1.75rem] md:text-[2.75rem] leading-[120%] tracking-[-0.11rem] font-general-sans w-full max-w-[23.5rem] md:max-w-[36rem]">
          Customers Reviews
        </h1>

        <p className="text-white text-center font-manrope text-xs md:text-base font-normal leading-[1.5rem] tracking-[-0.04rem] w-full max-w-[13.5rem] md:max-w-[26.875rem]">
          At zeetaX, we prioritize user satisfaction and continuously improve
          our platform based on your valuable feedback.
        </p>
      </motion.div>
      {/* review cards */}
      <div className="flex flex-col justify-center items-center w-full max-w-[23.5rem] md:max-w-[41.8125rem] lg:max-w-[62.875rem]">
        {/* Mobile Layout - stacked cards */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }} className="flex md:hidden justify-center items-center flex-col gap-[1.625rem] w-full">
          {STUDENT_REVIEWS.map((r) => (
            <div
              key={`${r.name}-${r.exam}`}
              className="w-full max-w-[19.25rem] rounded-lg bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-4 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-black font-general-sans text-sm font-medium">
                    {r.name}
                  </h3>
                  <p className="text-black/60 font-manrope text-xs">{r.location}</p>
                </div>
                <Stars rating={r.rating} />
              </div>
              <p className="text-black font-manrope text-xs leading-5">“{r.quote}”</p>
              <p className="text-[#3B1FE7] font-general-sans text-xs font-medium">{r.exam}</p>
            </div>
          ))}
        </motion.div>

        {/* Tablet and Desktop Layout - horizontal scroll */}
        <div className="hidden md:flex w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            onWheel={(e) => {
              // Convert vertical scroll to horizontal
              if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                e.currentTarget.scrollLeft += e.deltaY;
                e.preventDefault();
              }
            }}
            className="flex w-full overflow-x-auto scrollbar-hide gap-4 py-2 snap-x snap-mandatory"
          >
            {STUDENT_REVIEWS.map((r) => (
              <div
                key={`${r.name}-${r.exam}`}
                className="snap-center w-[22rem] md:w-[27.25rem] shrink-0 rounded-lg bg-white shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-5 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-black font-general-sans text-base md:text-lg font-medium">
                      {r.name}
                    </h3>
                    <p className="text-black/60 font-manrope text-xs md:text-sm">{r.location}</p>
                  </div>
                  <Stars rating={r.rating} />
                </div>
                <p className="text-black font-manrope text-sm md:text-base leading-6">“{r.quote}”</p>
                <p className="text-[#3B1FE7] font-general-sans text-sm md:text-base font-medium">{r.exam}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA */}
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer items-center justify-center gap-2 md:gap-4 pl-3 md:pl-5 px-1 md:px-2 py-1 md:py-2 rounded-full border border-white bg-[#363636] shadow-[0_4px_4px_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
        <p className="text-white font-general-sans text-xs md:text-xl font-medium leading-[1.5rem] md:leading-[2.25rem] tracking-[-0.48px] md:tracking-[-0.8px]">
          Download App
        </p>
        <div className="w-6 h-6 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-white">
          <ArrowRight className='md:w-6 md:h-6 w-5 h-5 text-black' />
        </div>
      </motion.div>

    </div>
  );
};

export default Reviews;
