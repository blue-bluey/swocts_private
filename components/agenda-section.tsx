"use client"

import { Clock } from "lucide-react"
import { Carousel, Card } from "@/components/ui/apple-cards-carousel"

const agendaItems = [
  {
    time: "08:30 AM",
    title: "Breakfast and Registration",
    description: "Breakfast and registration",
    image: "https://images.unsplash.com/photo-1517705008128-361805f42e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1087&q=80"
  },
  {
    time: "09:00 AM",
    title: "Intro Keynote and Event",
    description: "Opening introduction by Rob",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    time: "09:15 AM",
    title: "Keynote: Cybersecurity - Fleet Cyber security",
    description: "AJ Khan discusses fleet cyber security and automotive impact",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1034&q=80"
  },
  {
    time: "09:45 AM",
    title: "Q&A with AJ Khan",
    description: "Questions and Answers session",
    image: "https://images.unsplash.com/photo-1560523159-4a9692d222f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1036&q=80"
  },
  {
    time: "10:05 AM",
    title: "CI/CD Pipeline Security",
    description: "Goran presents on supply chain and CI/CD pipeline risk with Open Source",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    time: "10:45 AM",
    title: "Coffee Break",
    description: "Short break for refreshments",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    time: "11:05 AM",
    title: "Career in Cyber Security",
    description: "Peaches discusses: Degree in Hand, Cyber Career in Sight: What's Next?",
    image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
  },
  {
    time: "12:00 PM",
    title: "Lunch",
    description: "Networking lunch break",
    image: "https://images.unsplash.com/photo-1559915568-199d76ade61a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    time: "01:05 PM",
    title: "Panel Discussion: Cybersecurity in YQG",
    description: "What can we do? Challenges and Opportunities",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80"
  },
  {
    time: "02:00 PM",
    title: "Student Talks",
    description: "Presentations by students until 3:45 PM",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    time: "03:45 PM",
    title: "Networking & Games",
    description: "CTF - Arcade activities and networking",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1069&q=80"
  },
  {
    time: "04:30 PM",
    title: "Closing Remarks",
    description: "Thank you and farewell from the Organizers",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"
  },
]

export default function AgendaSection() {
  const carouselItems = agendaItems.map((item, index) => {
    const card = {
      src: item.image, // Use the image URL here
      title: item.title,
      category: item.time,
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-cyan-400" />
            <span>{item.time}</span>
          </div>
          <p className="text-lg">{item.description}</p>
        </div>
      ),
    };
    
    return <Card key={index} card={card} index={index} />;
  });

  return (
    <section className="py-20 bg-gray-900 border-t border-cyan-900/30">
      <div className="container mx-auto px-4 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Event Agenda</h2>
        <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
      </div>

      <Carousel items={carouselItems} />
    </section>
  )
}