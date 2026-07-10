import { ArrowRight, Ticket } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Glow from '../effects/Glow'

const CTA = () => {
  const navigate = useNavigate()

  return (
    <div className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-44 py-24 bg-[#09090b]">
      <Glow size="400px" opacity={0.15} top="50%" left="50%" color="#F84565" />
      <div className="relative z-10 max-w-4xl mx-auto rounded-[3rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 md:p-16 text-center backdrop-blur-md shadow-2xl">
        <div className="mx-auto rounded-full bg-primary/10 p-4 text-primary w-fit mb-6">
          <Ticket className="h-8 w-8" />
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">Ready to step inside?</h2>
        <p className="mt-4 text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
          Book your tickets now, reserve premium reclining seats, and unlock exclusive digital ticket designs for your upcoming escape.
        </p>
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => { navigate('/movies'); window.scrollTo(0,0) }}
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-black hover:bg-primary-dull transition duration-300 cursor-pointer shadow-lg shadow-primary/20"
          >
            Explore showtimes <ArrowRight className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CTA
