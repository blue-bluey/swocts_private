"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowDown, Terminal } from "lucide-react"

interface CountdownProps {
  targetDate: Date
}

const CountdownTimer = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="grid grid-cols-4 gap-4 md:gap-6 max-w-xl mx-auto">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="bg-gray-800/50 backdrop-blur-md rounded-xl p-3 md:p-6 w-full border border-cyan-900/30 animate-pulse-glow">
            <div className="text-2xl md:text-4xl font-bold text-cyan-400 text-center">
              {value.toString().padStart(2, "0")}
            </div>
          </div>
          <div className="text-xs md:text-sm text-cyan-100/80 mt-2 capitalize">{key}</div>
        </div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  // Set the target date to May 7, 2025, 8:30 AM EDT
  const targetDate = new Date('May 7, 2025 08:30:00 EDT')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden cyber-grid">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-0" />

      {/* Animated background elements */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-20">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center mb-4">
              <Terminal className="h-10 w-10 text-cyan-400 mr-2" />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                Open Cyber-Security <span className="text-cyan-400">YQG</span>
              </h1>
            </div>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Where we bring back "Free as in beer" engagements that bring together students, experts, leaders, and
              everyone who wants to learn and become a little better with a hands-on experience and in-person
              interaction.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.eventbrite.com/e/southwestern-ontario-cyber-talent-showcase-swocts-tickets-1296093944879"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-cyan-500 text-gray-900 font-medium hover:bg-cyan-400 transition-colors border border-cyan-400/50 shadow-lg shadow-cyan-500/20"
              >
                Get Tickets
              </Link>
              <Link
                href="https://www.eventbrite.com/e/southwestern-ontario-cyber-talent-showcase-swocts-tickets-1296093944879"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gray-800/50 backdrop-blur-sm text-cyan-400 border border-cyan-500/30 font-medium hover:bg-gray-700/50 transition-colors"
              >
                Know More
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-xl text-cyan-100/80 mb-6">Event Starts In:</h3>
            <CountdownTimer targetDate={targetDate} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <ArrowDown className="h-8 w-8 text-cyan-400/70" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
