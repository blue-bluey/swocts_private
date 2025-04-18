"use client"
import Link from "next/link"
import React, { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"

interface Partner {
  id: number
  name: string
  logo: string
  url: string
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: Partner[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  const [start, setStart] = useState(false);
  
  useEffect(() => {
    addAnimation();
  }, []);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      // Clone items for seamless scrolling
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      
      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "60s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] [scrollbar-width:none] [-ms-overflow-style:none]",
        className
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex w-max flex-nowrap gap-4 py-4 [scrollbar-width:none] [-ms-overflow-style:none]",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-[200px] max-w-full flex-shrink-0 px-4 py-6 md:w-[250px]"
          >
            <div className="relative flex h-32 w-full items-center justify-center rounded-xl border border-cyan-900/30 bg-gray-800 p-4 shadow-md shadow-cyan-900/10 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-400/20">
              <div className="relative h-full w-full flex items-center justify-center">
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder-logo.svg';
                  }}
                />
              </div>
              <div className="absolute inset-0 rounded-xl bg-cyan-400/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
