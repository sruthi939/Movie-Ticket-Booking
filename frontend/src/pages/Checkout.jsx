import { useLocation, useNavigate } from 'react-router-dom'
import { ArrowRight, CreditCard, Smartphone, Wallet } from 'lucide-react'
import BookingSummary from '../components/booking/BookingSummary'
import BlurBackground from '../components/effects/BlurBackground'

const PAYMENT_METHODS = [
  { id: 'card', label: 'Credit / Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, Rupay' },
  { id: 'upi', label: 'UPI', icon: Smartphone, desc: 'GPay, PhonePe, Paytm' },
  { id: 'wallet', label: 'Wallet', icon: Wallet, desc: 'Amazon Pay, Mobikwik' },
]

const Checkout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const booking = location.state || {}

  const missingDetails = !booking.selectedDate || !booking.selectedSeats?.length || !booking.totalAmount

  return (
    <div className="relative min-h-screen text-white">
      <BlurBackground />
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 md:px-10 space-y-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Checkout</h1>
          <p className="text-gray-400 mt-1">Review your booking and choose a payment method.</p>
        </div>

        {missingDetails ? (
          <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 p-6 text-rose-300 text-sm">
            Booking details are missing. Please go back and complete seat selection.
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* Payment methods */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold">Payment Method</h2>
              <div className="space-y-3">
                {PAYMENT_METHODS.map((method) => {
                  const Icon = method.icon
                  return (
                    <label
                      key={method.id}
                      htmlFor={method.id}
                      className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 cursor-pointer hover:border-primary/40 transition"
                    >
                      <input id={method.id} type="radio" name="paymentMethod" value={method.id} className="accent-primary h-4 w-4" />
                      <div className="rounded-xl bg-primary/10 p-3 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white text-sm">{method.label}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{method.desc}</p>
                      </div>
                    </label>
                  )
                })}
              </div>
            </div>

            {/* Summary sidebar */}
            <div className="space-y-4">
              <BookingSummary {...booking} />
              <button
                onClick={() => navigate(`/movies/${booking.movieId}/${booking.selectedTime}/payment`, { state: booking })}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-sm font-bold text-black hover:bg-primary-dull transition shadow-lg shadow-primary/20 cursor-pointer"
              >
                Pay ₹{Number(booking.totalAmount).toFixed(2)} <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Checkout
