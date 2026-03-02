"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

type ButtonSize = "sm" | "lg" | "xl"

interface AnimatedButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  size?: ButtonSize
}

export default function AnimatedButton({
  children,
  href,
  onClick,
  className = "",
  size = "xl", // 👈 por defecto XL
}: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  const Component = href ? "a" : "button"

  const sizeStyles = {
    sm: {
      container: "px-5 pr-12 py-2 min-w-25",
      text: "text-sm",
      icon: "size-7",
      iconSize: 16,
      circleSize: 30,
    },
    lg: {
      container: "px-6 pr-14 py-3 min-w-52",
      text: "text-base",
      icon: "size-10",
      iconSize: 22,
      circleSize: 40,
    },
    xl: {
      container: "px-8 pr-16 py-4 min-w-60",
      text: "text-xl",
      icon: "size-11",
      iconSize: 24,
      circleSize: 44,
    },
  }

  const currentSize = sizeStyles[size]

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
        bg-[#1596FF] border border-[#1596FF]
        inline-flex items-center justify-center
        ${currentSize.container}
        ${className}
      `}
    >
      {/* Fondo expansivo */}
      <motion.span
        className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full bg-black"
        initial={{ 
          width: currentSize.circleSize, 
          height: currentSize.circleSize 
        }}
        animate={
          isHovered
            ? { width: "96.5%", height: "90%" }
            : { 
                width: currentSize.circleSize, 
                height: currentSize.circleSize 
              }
        }
        transition={{
          duration: 0.45,
          ease: [0.33, 1, 0.68, 1],
        }}
      />

      {/* Texto */}
      <motion.span
        className={`relative z-10 font-medium whitespace-nowrap ${currentSize.text}`}
        animate={{ color: isHovered ? "#ffffff" : "#000000" }}
        transition={{ duration: 0.25 }}
      >
        {children}
      </motion.span>

      {/* Icono */}
      <motion.span
        className={`
          absolute right-1 top-1/2 -translate-y-1/2
          z-20 flex items-center justify-center
          rounded-full text-white
          ${currentSize.icon}
        `}
        animate={{ rotate: isHovered ? -45 : 0 }}
        transition={{
          duration: 0.4,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        <ArrowUpRight size={currentSize.iconSize} strokeWidth={2.5} />
      </motion.span>
    </Component>
  )
}