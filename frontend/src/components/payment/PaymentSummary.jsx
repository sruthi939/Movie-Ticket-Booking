import { formatCurrency } from '../../utils/formatCurrency'

const PaymentSummary = ({ title, ticketsCount, subTotal, convenienceFee, taxes, totalAmount }) => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/40 p-6 space-y-4">
      <h3 className="text-lg font-bold text-white leading-tight">Order Details</h3>
      <p className="text-sm text-gray-300 font-semibold">{title}</p>
      
      <div className="space-y-2.5 text-sm text-gray-400 border-t border-white/5 pt-4">
        <div className="flex justify-between">
          <span>Tickets count</span>
          <span>{ticketsCount} seat(s)</span>
        </div>
        <div className="flex justify-between">
          <span>Ticket price</span>
          <span>{formatCurrency(subTotal)}</span>
        </div>
        <div className="flex justify-between">
          <span>Convenience fees</span>
          <span>{formatCurrency(convenienceFee)}</span>
        </div>
        <div className="flex justify-between">
          <span>GST Taxes</span>
          <span>{formatCurrency(taxes)}</span>
        </div>
        <div className="flex justify-between border-t border-white/10 pt-3 text-base font-bold text-white">
          <span>Total Payable</span>
          <span className="text-amber-400">{formatCurrency(totalAmount)}</span>
        </div>
      </div>
    </div>
  )
}

export default PaymentSummary
