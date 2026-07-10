import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Movies from '../pages/Movies'
import MovieDetails from '../pages/MovieDetails'
import TheatreSelection from '../pages/TheatreSelection'
import SeatSelection from '../pages/SeatSelection'
import Checkout from '../pages/Checkout'
import Payment from '../pages/Payment'
import Ticket from '../pages/Ticket'
import MyBookings from '../pages/MyBookings'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import ProtectedRoutes from './ProtectedRoutes'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/theatres" element={<TheatreSelection />} />
      <Route path="/movies/:id/:time" element={<SeatSelection />} />
      
      {/* Protected routes */}
      <Route
        path="/checkout"
        element={
          <ProtectedRoutes>
            <Checkout />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/movies/:id/:time/payment"
        element={
          <ProtectedRoutes>
            <Payment />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/ticket/:bookingId"
        element={
          <ProtectedRoutes>
            <Ticket />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/my-bookings"
        element={
          <ProtectedRoutes>
            <MyBookings />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />
      
      {/* Auth routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      
      {/* Fallback */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
