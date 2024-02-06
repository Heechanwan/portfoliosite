'use client'

import React, { useState, useEffect } from 'react'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';
import CustomCursor from './components/Cursor/Cursor'

const popp = Montserrat({weight: ['200', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] })

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [isAnimating, setIsAnimating] = useState(false);


  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500); // время анимации
    return () => clearTimeout(timer); // очистка таймера
  }, [pathname]);

  const variants = {
    hidden: { y: '10vh', opacity: 0 },
    visible: { y: '0', opacity: 1, transition: { delay: 1, duration: 0.3 } },
    exit: {opacity: 0}
  };
  return (
    <html lang="en">
    <body className={popp.className}>
    {/* <CustomCursor/> */}
    <div className="modalSpawn"></div>
    <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
      </div>
    <AnimatePresence>
      <motion.div
        key={pathname}
        className='app'
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
      <Navbar/>
      <div className="ver">
        <span>V0.7b</span>
      </div>
      </body>
  </html>
  )
}
