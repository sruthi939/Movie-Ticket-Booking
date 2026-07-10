import { Box, Music, Coffee, Compass } from 'lucide-react'

const features = [
  {
    icon: Box,
    title: '3D Seat Selection',
    desc: 'Browse seats in an interactive 3D model of the cinema hall to find your perfect viewing angle.'
  },
  {
    icon: Music,
    title: 'Dolby Atmos Sound',
    desc: 'Each screening is configured with premium sound specifications for complete spatial immersion.'
  },
  {
    icon: Coffee,
    title: 'Luxury Preorders',
    desc: 'Skip the queues by ordering gourmet popcorn, meals, and snacks directly with your seat booking.'
  },
  {
    icon: Compass,
    title: 'Smart Tickets',
    desc: 'Access your ticket details, barcode, and seat allocation instantly with a 3D animated ticket card.'
  }
]

const Experience = () => {
  return (
    <div className="py-24 px-6 md:px-16 lg:px-24 xl:px-44 bg-[#09090b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">The Premium Standard</h2>
          <p className="mt-4 text-sm md:text-base text-gray-400 max-w-xl">
            We offer more than just movie ticket booking. We offer an elevated, VIP-grade entertainment experience.
          </p>
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {features.map((feat, idx) => {
          const IconComp = feat.icon
          return (
            <div key={idx} className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="rounded-2xl bg-primary/10 p-4 text-primary w-fit group-hover:scale-105 transition-transform duration-300">
                <IconComp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white mt-6">{feat.title}</h3>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">{feat.desc}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Experience
