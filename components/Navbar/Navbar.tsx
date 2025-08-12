"use client";
import Link from 'next/link'
import React from 'react'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'

const Navbar = () => {
  return (
    <div className="flex w-full max-w-[23.75rem] md:max-w-[40.5rem] lg:max-w-[48rem] py-3 justify-between items-center backdrop-blur-[70px]">
      <div>
        <h1 className='font-fortusnova text-[1.4375rem] cursor-pointer not-italic font-bold leading-[150%] text-white'>zeetaX</h1>
      </div>
      <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='hidden lg:flex items-center gap-10 font-general-sans text-white'>
        <h3 className="text-xs md:text-base xl:text-lg tracking-[-0.48px] cursor-pointer">Books</h3>
        <h3 className="text-xs md:text-base xl:text-lg tracking-[-0.48px] cursor-pointer">Contact</h3>
        <h3 className="text-xs md:text-base xl:text-lg tracking-[-0.48px] cursor-pointer">About</h3>
        <Link href="/b2b" className="text-xs md:text-base xl:text-lg tracking-[-0.48px] cursor-pointer">B2B</Link>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer justify-center items-center gap-4 pl-6 py-1 px-1 rounded-full border border-white bg-[#363636] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
          <p className="text-white font-general-sans text-xs xl:text-[17px] not-italic font-medium leading-[1.5rem] tracking-[-0.48px]">
            Download App
          </p>
          <div className="w-8 h-8 relative gap-[0.625rem] rounded-full bg-white flex items-center justify-center">
            <ArrowRight className='w-5 h-5 text-black' />
          </div>
        </motion.div>
      </motion.div>
      {/* Mobile Download Button */}
      <div className="lg:hidden">
        <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="flex cursor-pointer justify-center items-center gap-2 md:gap-3 pl-3 md:pl-4 py-1 px-1 md:px-1 rounded-full border border-white bg-[#363636] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] backdrop-blur-[5px]">
          <p className="text-white font-general-sans text-sm md:text-base not-italic font-medium leading-[1.5rem] tracking-[-0.48px]">
            Download App
          </p>
          <div className="w-6 h-6 md:w-8 md:h-8 relative gap-[0.625rem] rounded-full bg-white flex items-center justify-center">
            <ArrowRight className='w-4 h-4 text-black' />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar