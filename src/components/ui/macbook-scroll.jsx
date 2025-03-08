"use client"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"


export const MacbookScroll = ({ title, src, showGradient, children }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={ref} className="flex flex-col items-center justify-start py-20 md:py-40 antialiased relative">
      <motion.div
        style={{
          scale,
          opacity,
          y,
        }}
        className="flex flex-col items-center justify-center"
      >
        <div className="max-w-5xl mx-auto px-4 md:px-0">
          {title && <div className="text-2xl md:text-4xl font-bold text-center mb-8 dark:text-white">{title}</div>}
          <div className="relative flex flex-col items-center">
            <div className="w-[300px] h-[172px] md:w-[600px] md:h-[342px] rounded-t-lg bg-gray-200 dark:bg-gray-800 overflow-hidden flex items-center justify-center">
              <img
                src="https://ui.aceternity.com/_next/image?url=%2Flinear.webp&w=1920&q=75"
                alt="Macbook screen content"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[320px] h-[12px] md:w-[640px] md:h-[24px] bg-gray-200 dark:bg-gray-800 rounded-b-lg" />
            <div className="w-[340px] h-[8px] md:w-[680px] md:h-[16px] bg-gray-300 dark:bg-gray-700 rounded-b-lg" />
            <div className="w-[220px] h-[6px] md:w-[440px] md:h-[12px] bg-gray-400 dark:bg-gray-600 rounded-b-lg" />
          </div>
        </div>
      </motion.div>

      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 z-10 h-20 w-full bottom-0 top-auto" />
      )}

      <div className="mt-12 w-full">{children}</div>
    </div>
  )
}

