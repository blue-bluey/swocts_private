"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Clock, Terminal } from "lucide-react"

interface AgendaItem {
  time: string
  title: string
  description?: string
}

export const StickyScrollReveal = ({ items }: { items: AgendaItem[] }) => {
  const [activeCard, setActiveCard] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  // Calculate opacity and scale values outside the component for performance
  const stickyOpacityValues = [0, 0.1, 0.9, 1]
  const stickyOpacityRange = [0.4, 1, 1, 0.4]
  const cardAnimationValues = items.map((_, index) => {
    const segment = 1 / items.length
    const start = index * segment
    const end = start + segment

    return {
      opacityValues: [start, start + segment * 0.1, end - segment * 0.1, end],
      opacityRange: [0.3, 1, 1, 0.3],
      scaleValues: [start, start + segment * 0.1, end - segment * 0.1, end],
      scaleRange: [0.8, 1, 1, 0.8],
    }
  })

  // Use useTransform for opacity and scale animations
  const stickyOpacity = useTransform(scrollYProgress, stickyOpacityValues, stickyOpacityRange)

  // Create an array of opacity and scale transforms for each card
  const cardAnimations = items.map((_, index) => {
    return {
      opacity: useTransform(
        scrollYProgress,
        cardAnimationValues[index].opacityValues,
        cardAnimationValues[index].opacityRange,
      ),
      scale: useTransform(
        scrollYProgress,
        cardAnimationValues[index].scaleValues,
        cardAnimationValues[index].scaleRange,
      ),
    }
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const { top, height } = ref.current.getBoundingClientRect()
      const scrollPosition = window.innerHeight - top
      const sectionHeight = height

      // Calculate which card should be active based on scroll position
      const cardHeight = sectionHeight / items.length
      const activeIndex = Math.min(Math.max(Math.floor(scrollPosition / cardHeight), 0), items.length - 1)

      setActiveCard(activeIndex)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items.length])

  return (
    <div ref={ref} className="relative mx-auto h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="flex w-full items-start justify-center gap-4 px-4">
          <div className="w-full max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Left side - Sticky content */}
              <div className="flex flex-col justify-center">
                <motion.div
                  className="relative h-[30rem] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white border border-cyan-900/30 shadow-lg shadow-cyan-900/10"
                  style={{
                    opacity: stickyOpacity,
                  }}
                >
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-center">
                      <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
                      <h3 className="text-2xl font-bold">Event Agenda</h3>
                    </div>
                    <div className="mt-8">
                      <div className="mb-2 text-lg font-medium text-cyan-400">{items[activeCard]?.time}</div>
                      <div className="text-3xl font-bold">{items[activeCard]?.title}</div>
                      {items[activeCard]?.description && (
                        <div className="mt-4 text-gray-400">{items[activeCard].description}</div>
                      )}
                    </div>
                    <div className="mt-auto">
                      <div className="flex items-center gap-2 text-sm text-cyan-400/60">
                        <Clock className="h-4 w-4" />
                        <div>Scroll to see the full agenda</div>
                      </div>
                    </div>
                  </div>

                  {/* Background elements */}
                  <div className="absolute right-0 top-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
                </motion.div>
              </div>

              {/* Right side - Scrolling content */}
              <div className="flex flex-col gap-8 py-[50vh]">
                {items.map((item, index) => (
                  <motion.div
                    key={index}
                    className={`rounded-xl border border-cyan-900/30 bg-gray-800 p-6 shadow-md transition-all duration-200 ${
                      activeCard === index ? "scale-105 border-cyan-500/30 shadow-lg shadow-cyan-900/20" : "opacity-50"
                    }`}
                    style={{
                      opacity: cardAnimations[index].opacity,
                      scale: cardAnimations[index].scale,
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-cyan-400">
                        <Clock className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-cyan-400">{item.time}</div>
                        <div className="text-xl font-bold text-white">{item.title}</div>
                      </div>
                    </div>
                    {item.description && <div className="mt-4 text-gray-400">{item.description}</div>}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
