import { useState } from 'react'

export const usePayment = () => {
  const [processing, setProcessing] = useState(false)
  const [status, setStatus] = useState('idle') // idle | success | failed

  const processPayment = async (amount, method) => {
    setProcessing(true)
    setStatus('idle')

    // Simulate API network call
    return new Promise((resolve) => {
      setTimeout(() => {
        setProcessing(false)
        setStatus('success')
        resolve({ success: true, transactionId: `txn_${Date.now()}` })
      }, 1500)
    })
  }

  return {
    processing,
    status,
    processPayment,
  }
}

export default usePayment
