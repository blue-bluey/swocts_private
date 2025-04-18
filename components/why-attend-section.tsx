"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Lightbulb, Users, Network, Sparkles, Shield } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-2xl backdrop-blur-md bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-8 shadow-lg border border-cyan-500/20 transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated corner accent */}
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
      
      <div className="relative z-10">
        <motion.div 
          animate={{ 
            scale: isHovered ? 1.1 : 1, 
            rotate: isHovered ? 5 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 border border-cyan-500/30 shadow-md"
        >
          {icon}
        </motion.div>
        
        <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">{title}</h3>
        
        <p className="text-cyan-100/70 leading-relaxed">
          {description}
        </p>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 w-0 group-hover:w-full transition-all duration-500 opacity-70"></div>
      </div>
    </motion.div>
  )
}

export default function WhyAttendSection() {
  const features = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Great Speakers",
      description: "How you transform your business as technology, consumer, habits, industry dynamic.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "New People",
      description: "How you transform your business as technology, consumer, habits, industry dynamic.",
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Networking",
      description: "How you transform your business as technology, consumer, habits, industry dynamic.",
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Have Fun",
      description: "How you transform your business as technology, consumer, habits, industry dynamic.",
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800/95 to-gray-900"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
      
      {/* Animated blobs */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-600/5 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-600/5 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-gradient-to-r from-cyan-900/40 to-blue-900/40 backdrop-blur-md border border-cyan-500/20 shadow-lg mb-6">
            <div className="flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-cyan-400 mr-2" />
              <span className="text-cyan-400 font-medium">Why You Should Attend</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">
            Why Attend Business Event
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-cyan-100/80"
          >
            Join us for an unforgettable experience that will enhance your knowledge and career in cybersecurity.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
