import { useState } from 'react'

const PaymentCard = ({ onSubmit, processing }) => {
  const [card, setCard] = useState({ number: '', name: '', expiry: '', cvv: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (onSubmit) onSubmit(card)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Card Holder Name</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={card.name}
          onChange={(e) => setCard({ ...card, name: e.target.value })}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary"
        />
      </div>
      <div>
        <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Card Number</label>
        <input
          type="text"
          required
          maxLength="19"
          placeholder="0000 0000 0000 0000"
          value={card.number}
          onChange={(e) => setCard({ ...card, number: e.target.value })}
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary font-mono"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Expiry Date</label>
          <input
            type="text"
            required
            maxLength="5"
            placeholder="MM/YY"
            value={card.expiry}
            onChange={(e) => setCard({ ...card, expiry: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary font-mono"
          />
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">CVV</label>
          <input
            type="password"
            required
            maxLength="3"
            placeholder="•••"
            value={card.cvv}
            onChange={(e) => setCard({ ...card, cvv: e.target.value })}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none focus:border-primary font-mono"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={processing}
        className="w-full rounded-full bg-primary py-3 text-sm font-bold text-black hover:bg-primary-dull transition disabled:opacity-50 cursor-pointer mt-4"
      >
        {processing ? 'Processing...' : 'Submit Payment'}
      </button>
    </form>
  )
}

export default PaymentCard
