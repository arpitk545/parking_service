"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"
import { IconStar } from "@tabler/icons-react"
import { cn } from "../utils/cn"

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      text: "Absolutely seamless parking experience. The QR-based check-in and GPS tracking are game changers!",
      author: "Alex P.",
      role: "Happy Customer",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      text: "I never worry about parking anymore. The professional drivers are courteous and the app is so easy to use!",
      author: "Sarah M.",
      role: "Regular User",
      rating: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      text: "The secure lockers give me peace of mind. This service has saved me so much time and stress.",
      author: "Michael K.",
      role: "Business Traveler",
      rating: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="bg-gradient-to-b from-black to-gray-900 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-transparent bg-gradient-to-r from-[#11C675] to-[#1ADD86] bg-clip-text md:text-4xl glow-text">
          💬 What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedTestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AnimatedTestimonialCard({ testimonial, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay: index * 0.2,
          },
        },
      }}
      className={cn(
        "rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-center transition-all duration-300",
        "shadow-[0_0_15px_rgba(26,221,134,0.3)]",
        "hover:shadow-[0_0_25px_rgba(26,221,134,0.7)]",
        "transform hover:scale-105",
        "border border-[#1ADD86]/20",
        "hover:border-[#1ADD86]/40",
        "hover:bg-gradient-to-br hover:from-gray-800 hover:to-gray-900",
      )}
    >
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full overflow-hidden gradient-border">
          <img
            src={testimonial.image || "/placeholder.svg"}
            alt={testimonial.author}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="mb-4 flex justify-center">
        {[...Array(testimonial.rating)].map((_, i) => (
          <IconStar key={i} className="h-5 w-5 text-[#1ADD86] fill-[#1ADD86]" />
        ))}
        {[...Array(5 - testimonial.rating)].map((_, i) => (
          <IconStar key={i + testimonial.rating} className="h-5 w-5 text-gray-600" />
        ))}
      </div>
      <motion.p
        className="mb-6 text-xl text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.3 + 0.3, duration: 0.5 }}
      >
        "
        {testimonial.text.replace(
          "game changers",
          <span className="text-transparent bg-gradient-to-r from-[#11C675] to-[#1ADD86] bg-clip-text glow-text">
            game changers
          </span>,
        )}
        "
      </motion.p>
      <motion.p
        className="text-lg font-medium text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
      >
        — {testimonial.author}, <span className="text-[#CACACA]">{testimonial.role}</span>
      </motion.p>
    </motion.div>
  )
}

export default TestimonialsSection

