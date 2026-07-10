import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Layout components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cursor from './components/layout/Cursor'

// Pages
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatSelection from './pages/SeatSelection'
// SeatLayout page replaced by SeatSelection
import TheatreSelection from './pages/TheatreSelection'
import Checkout from './pages/Checkout'
import Payment from './pages/Payment'
import BookingSuccess from './pages/BookingSuccess'
import PaymentSuccess from './pages/PaymentSuccess'  // keep old alias working
import Ticket from './pages/Ticket'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'

const App = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  // Hide footer on seat selection / payment pages
  const hideFooter = /^\/movies\/[^/]+\/[^/]+/.test(location.pathname)

  return (
    <>
      <Toaster position="top-center" toastOptions={{ style: { background: '#18181b', color: '#fff', border: '1px solid rgba(255,255,255,0.08)' } }} />
      {/* Custom cursor (desktop only) */}
      <Cursor />

      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />

        {/* Seat selection (new canonical route) */}
        <Route path="/movies/:id/:time" element={<SeatSelection />} />

        {/* Payment */}
        <Route path="/movies/:id/:time/payment" element={<Payment />} />

        {/* Booking success (new) */}
        <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />

        {/* Ticket view */}
        <Route path="/ticket/:bookingId" element={<Ticket />} />

        {/* Theatre selection */}
        <Route path="/theatres" element={<TheatreSelection />} />

        {/* Checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Favorites */}
        <Route path="/favorite" element={<Favorite />} />

        {/* My bookings */}
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Profile */}
        <Route path="/profile" element={<Profile />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isAdminRoute && !hideFooter && <Footer />}
    </>
  )
}

export default App
