import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import SeatLayout from './pages/SeatLayout'
import Payment from './pages/Payment'
import PaymentSuccess from './pages/PaymentSuccess'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isSeatLayout = /^\/movies\/[^/]+\/[^/]+$/.test(location.pathname)

  return (
    <>
      <Toaster />
      {!isAdminRoute && <Navbar /> }
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MovieDetails/>} />
        <Route path='/movies/:id/:time' element={<SeatLayout/>} />
        <Route path='/movies/:id/:time/payment' element={<Payment/>} />
        <Route path='/booking-success/:bookingId' element={<PaymentSuccess/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/my-bookings' element={<MyBookings/>} />
      </Routes>
      {!isAdminRoute && !isSeatLayout && <Footer />}
    </>
  )
}

export default App
