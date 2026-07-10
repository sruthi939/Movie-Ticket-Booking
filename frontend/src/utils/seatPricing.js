import { PRICING, VIP_ROWS } from './constants'

export const getSeatPrice = (seatId) => {
  const row = seatId.split('-')[0]
  if (VIP_ROWS.includes(row)) return PRICING.VIP
  return PRICING.STANDARD
}

export const calculateBookingTotal = (selectedSeats) => {
  const subTotal = selectedSeats.reduce((sum, s) => sum + getSeatPrice(s), 0)
  const convenienceFee = Number((subTotal * PRICING.CONVENIENCE_FEE_PCT).toFixed(2))
  const taxes = Number((subTotal * PRICING.TAX_PCT).toFixed(2))
  const totalAmount = Number((subTotal + convenienceFee + taxes).toFixed(2))

  return {
    subTotal,
    convenienceFee,
    taxes,
    totalAmount,
  }
}
