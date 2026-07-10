import { CheckCircle, AlertTriangle } from 'lucide-react'

const PaymentStatus = ({ status = 'success', message, actionLabel, onAction }) => {
  const isSuccess = status === 'success'

  return (
    <div className="rounded-[2rem] border border-white/10 bg-black/40 p-8 text-center space-y-5 max-w-sm mx-auto">
      <div className={`mx-auto h-16 w-16 rounded-full flex items-center justify-center ${isSuccess ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
        {isSuccess ? <CheckCircle className="h-9 w-9" /> : <AlertTriangle className="h-9 w-9" />}
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-white tracking-tight">{isSuccess ? 'Payment Approved!' : 'Transaction Failed'}</h3>
        <p className="text-sm text-gray-400 leading-relaxed">{message || (isSuccess ? 'Your seat reservations are now locked in.' : 'We encountered an error processing your card.')}</p>
      </div>

      {actionLabel && (
        <button
          onClick={onAction}
          className={`w-full rounded-full py-2.5 text-sm font-semibold transition cursor-pointer mt-4 ${isSuccess ? 'bg-emerald-500 text-black hover:bg-emerald-600' : 'bg-rose-500 text-white hover:bg-rose-600'}`}
        >
          {actionLabel}
        </button>
      )}
    </div>
  )
}

export default PaymentStatus
