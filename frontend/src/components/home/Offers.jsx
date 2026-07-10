import { Sparkles, Gift, Percent } from 'lucide-react'

const MOCK_OFFERS = [
  { id: '1', title: 'Buy 1 Get 1 Free', desc: 'Book with any Visa Infinite Card and get the second ticket free.', code: 'VISAINFINITE', icon: Gift },
  { id: '2', title: '15% Off Snacks', desc: 'Preorder cinema combos now and claim 15% off food bills.', code: 'POPCORN15', icon: Percent },
  { id: '3', title: 'Weekday Premiere Deal', desc: 'Book screenings between Mon-Wed and get ₹100 flat cashback.', code: 'WEEKDAY100', icon: Sparkles },
]

const Offers = () => {
  return (
    <div className="py-16 px-6 md:px-16 lg:px-24 xl:px-44 bg-[#09090b] relative z-10">
      <div className="max-w-7xl mx-auto mb-10">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Exclusive Offers</h2>
        <p className="text-sm text-gray-400 mt-1">Claim cinematic rewards and special promo discounts.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {MOCK_OFFERS.map((offer) => {
          const Icon = offer.icon
          return (
            <div key={offer.id} className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-6 hover:border-primary/20 transition-all duration-300">
              <div className="rounded-2xl bg-primary/10 p-3 text-primary w-fit">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white mt-5">{offer.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{offer.desc}</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">Promo Code</span>
                <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs font-mono text-white border border-white/5">{offer.code}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Offers
