"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

interface AnimatedButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  textSize?: string
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
  textSize = "text-base",
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const Component = href ? "a" : "button"

  return (
    <Component
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden rounded-full
        px-8 pr-16 py-4 min-w-60
        bg-[#1596FF] border border-[#1596FF]
        inline-flex items-center justify-center
        ${className}
      `}
    >
      {/* Fondo expansivo */}
      <motion.span
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black"
        initial={{ width: 44, height: 44 }}
        animate={
          isHovered
            ? { width: "96.5%", height: "90%" }
            : { width: 44, height: 44 }
        }
        transition={{
          duration: 0.45,
          ease: [0.33, 1, 0.68, 1],
        }}
      />

      {/* Texto */}
      <motion.span
        className={`relative z-10 font-medium whitespace-nowrap ${textSize}`}
        animate={{ color: isHovered ? "#ffffff" : "#000000" }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.span>

      {/* Icono */}
      <motion.span
        className="absolute right-1 top-1/2 -translate-y-1/2
                   z-20 flex items-center justify-center
                   size-11 rounded-full text-white"
        animate={{ rotate: isHovered ? -45 : 0 }}
        transition={{
          duration: 0.4,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <ArrowUpRight size={24} strokeWidth={2.5} />
      </motion.span>
    </Component>
  )
}