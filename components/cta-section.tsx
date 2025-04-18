"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ShieldCheck, Lock, Terminal, Zap } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-t border-cyan-900/30 relative overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      </div>
      
      {/* Grid lines overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-md border border-cyan-500/20 shadow-lg mb-6">
              <div className="flex items-center justify-center">
                <Terminal className="h-5 w-5 text-cyan-400 mr-2" />
                <span className="text-cyan-400 font-medium">Limited Time Offer</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
              Reserve Your Spot Today
            </h2>
            
            <p className="text-lg text-cyan-100/80 max-w-2xl mx-auto">
              Join us for this exclusive cybersecurity event and take your skills to the next level
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {/* Card 1 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 shadow-xl relative z-10 h-full flex flex-col items-center transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-5 backdrop-blur-md border border-cyan-500/30">
                  <ShieldCheck className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">FREE</h3>
                <p className="text-cyan-100/70 text-center">No cost to attend this event</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/20 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 shadow-xl relative z-10 h-full flex flex-col items-center transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-5 backdrop-blur-md border border-cyan-500/30">
                  <Lock className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">25/25</h3>
                <p className="text-cyan-100/70 text-center">spots filled</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
              <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/20 shadow-xl relative z-10 h-full flex flex-col items-center transform group-hover:translate-y-[-5px] transition-all duration-300">
                <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl mb-5 backdrop-blur-md border border-cyan-500/30">
                  <Zap className="h-8 w-8 text-cyan-400" />
                </div>
                <h3 className="text-3xl font-bold mb-3 text-white">Career Boost</h3>
                <p className="text-cyan-100/70 text-center">Don't miss this opportunity</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block relative group animate-pulse-slow">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-md opacity-80 group-hover:opacity-100 transition-opacity duration-300 pulse-glow"></div>
              <Link
                href="https://www.eventbrite.com/e/southwestern-ontario-cyber-talent-showcase-swocts-tickets-1296093944879"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-900 font-bold text-xl rounded-full hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 transform group-hover:-translate-y-1 border-2 border-white/10"
              >
                <span className="mr-2">Register Here</span>
                <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <p className="mt-6 text-cyan-100/80 text-lg">Limited spots available. Register now to secure your place.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
