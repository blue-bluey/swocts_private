import { InfiniteMovingCards } from "./infinite-moving-cards"

const partners = [
  {
    id: 1,
    name: "Hackforge",
    logo: "https://www.opencybersecyqg.io/wp-content/uploads/2025/04/cropped-hackforge-large-white.png",
    url: "https://hackf.org/",
  },
  {
    id: 2,
    name: "University of Windsor",
    logo: "https://www.opencybersecyqg.io/wp-content/uploads/2025/04/uwindsor_logo-new.png",
    url: "https://www.uwindsor.ca/",
  },
  {
    id: 3,
    name: "WE-tech Alliance",
    logo: "https://www.opencybersecyqg.io/wp-content/uploads/2025/04/wetechalliance_cover.jpeg",
    url: "https://www.wetech-alliance.com/",
  }
]

export default function SponsorsSection() {
  return (
    <section className="py-20 bg-gray-900 border-t border-cyan-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partner</h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <InfiniteMovingCards items={partners} speed="slow" pauseOnHover={true} />
      </div>
    </section>
  )
}
