"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Lock } from "lucide-react"

const NavbarMenu = () => {
  const [active, setActive] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full">
      <nav className="fixed top-0 inset-x-0 h-16 border-b border-cyan-900/30 backdrop-blur-md bg-gray-900/80 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white">
          <Lock className="h-6 w-6 text-cyan-400" />
          <span>Open Cyber-Security YQG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavItem href="https://www.eventbrite.com/e/southwestern-ontario-cyber-talent-showcase-swocts-tickets-1296093944879" text="Get Tickets" external={true} />
          <NavItem href="https://www.eventbrite.com/e/southwestern-ontario-cyber-talent-showcase-swocts-tickets-1296093944879" text="Know More" external={true} />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMenu}
          className="md:hidden flex flex-col gap-1.5 items-center justify-center"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-cyan-400"
          />
          <motion.div animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-cyan-400" />
          <motion.div
            animate={isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-cyan-400"
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          y: isMenuOpen ? 0 : -10,
          display: isMenuOpen ? "flex" : "none",
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-16 inset-x-0 bg-gray-900/95 z-40 flex-col items-center py-4 border-b border-cyan-900/30 md:hidden"
      >
        <div className="flex flex-col w-full">
          <MobileNavItem href="https://www.eventbrite.com/e/southwestern-ontario-cyber-talent-showcase-swocts-tickets-1296093944879" text="Get Tickets" external={true} />
          <MobileNavItem href="https://www.eventbrite.com/e/southwestern-ontario-cyber-talent-showcase-swocts-tickets-1296093944879" text="Know More" external={true} />
        </div>
      </motion.div>
    </div>
  )
}

const NavItem = ({ href, text, external }: { href: string; text: string; external?: boolean }) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative group px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors"
    >
      <span>{text}</span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
    </Link>
  )
}

const MobileNavItem = ({ href, text, external }: { href: string; text: string; external?: boolean }) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="w-full px-6 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-cyan-400 transition-colors"
    >
      {text}
    </Link>
  )
}

export default NavbarMenu
