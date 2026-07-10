import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import TheatreCard from '../components/theatre/TheatreCard'
import ShowtimeCard from '../components/theatre/ShowtimeCard'
import DateSelector from '../components/theatre/DateSelector'
import BlurBackground from '../components/effects/BlurBackground'

const buildDateOptions = () =>
  Array.from({ length: 5 }, (_, idx) => {
    const date = new Date()
    date.setDate(date.getDate() + idx)
    return {
      id: date.toISOString().slice(0, 10),
      label: date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
    }
  })

const THEATRES = [
  { id: 'pvr-gold', name: 'PVR Gold Class', location: 'Inorbit Mall, Malad West', rating: 4.8, amenities: ['IMAX', 'Dolby Atmos', 'Recliner Seats', 'VIP Lounge'] },
  { id: 'inox-luxe', name: 'INOX Luxe', location: 'R-City Mall, Ghatkopar', rating: 4.6, amenities: ['Screenx', '4K Laser', 'Premium Snacks', 'Dolby Vision'] },
  { id: 'cinepolis', name: 'Cinepolis VIP', location: 'Thane West', rating: 4.4, amenities: ['Sofa Seats', 'In-Hall Dining', '7.1 Surround', 'Roof Lounge'] },
]

const SHOWTIMES = ['10:00', '13:15', '16:30', '19:45', '22:00']

const TheatreSelection = () => {
  const navigate = useNavigate()
  const dateOptions = buildDateOptions()
  const [selectedDate, setSelectedDate] = useState(dateOptions[0].id)
  const [selectedTheatre, setSelectedTheatre] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const canProceed = selectedTheatre && selectedTime && selectedDate

  return (
    <div className="relative min-h-screen text-white">
      <BlurBackground />
      <div className="relative z-10 px-6 py-24 md:px-16 lg:px-24 xl:px-44 space-y-10">
        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-widest text-primary font-semibold mb-4">
            <MapPin className="h-4 w-4" /> Theatre Selection
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Choose your theatre</h1>
          <p className="mt-2 text-gray-400 max-w-xl">
            Select the hall that matches your luxury preference, then pick a date and showtime.
          </p>
        </div>

        {/* Date picker */}
        <DateSelector dates={dateOptions} selectedDate={selectedDate} onSelectDate={setSelectedDate} />

        {/* Theatre list */}
        <div className="space-y-4">
          <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold">Select Theatre</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {THEATRES.map((t) => (
              <TheatreCard
                key={t.id}
                theatre={t}
                isSelected={selectedTheatre?.id === t.id}
                onSelect={() => setSelectedTheatre(t)}
              />
            ))}
          </div>
        </div>

        {/* Showtimes */}
        {selectedTheatre && (
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-gray-500 font-bold">
              Showtimes at {selectedTheatre.name}
            </h3>
            <ShowtimeCard
              format="IMAX 3D"
              showtimes={SHOWTIMES}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
        )}

        {/* CTA */}
        {canProceed && (
          <div className="flex justify-end">
            <button
              onClick={() => navigate('/movies')}
              className="flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-bold text-black hover:bg-primary-dull transition shadow-lg shadow-primary/20 cursor-pointer"
            >
              Proceed to Seats <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default TheatreSelection
