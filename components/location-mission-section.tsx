"use client";

import React from "react";
import { PinContainer } from "./3d-pin";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function LocationMissionSection() {
  return (
    <section className="w-full py-12 md:py-24 bg-slate-950">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[450px] md:h-[550px] flex items-center justify-center">
            <PinContainer 
              title="Windsor, ON" 
              containerClassName="w-[450px] md:w-[500px] lg:w-[550px]"
              backgroundImage="https://www.uwindsor.ca/dailynews/sites/uwindsor.ca.dailynews/files/900_300ouellette.jpg"
            >
              <div className="flex flex-col justify-end h-full">
                <div className="bg-black/60 p-4 rounded-lg mt-auto">
                  <h3 className="text-white text-xl font-bold mb-1">Windsor, ON</h3>
                  <p className="text-gray-300 text-sm mb-1">University of Windsor</p>
                  <p className="text-gray-300 text-xs">300 Ouellette Ave, Windsor, ON N9A 1A5</p>
                </div>
              </div>
            </PinContainer>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-white">
                Mission
              </h2>
              <p className="text-gray-300 md:text-xl">
                The SWOCTS 2025 event aims to highlight local talent in the cybersecurity space and promote 
                Windsor as a growing hub for innovation, especially in the cybersecurity field. We want to use 
                the talent in our area to provide cybersecurity services and resources to companies and organizations 
                in the Windsor-Essex area. By bringing together experts of all areas in the cybersecurity space, we are 
                helping students achieve better outcomes in their career opportunities by learning through hands-on skills, 
                combining both old and new technology.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 