import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuIcon, Search, TicketPlus, X } from 'lucide-react'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user } = useUser()
  const { openSignIn } = useClerk()
  const navigate = useNavigate()

  return (
    <div className='fixed left-0 top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-16 lg:px-36 bg-black/10 backdrop-blur-md border-b border-white/5'>
      <Link to='/' className='max-md:flex-1'>
        <div className='rounded-full border border-primary/40 bg-black/40 px-4 py-2 text-sm font-semibold tracking-[0.3em] text-white backdrop-blur'>CINEMA</div>
      </Link>
      <div className='absolute left-1/2 -translate-x-1/2'>
        <div className={`z-50 flex flex-col items-center gap-8 overflow-hidden bg-black/70 py-3 backdrop-blur transition-all duration-300 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-screen max-md:justify-center max-md:text-lg max-md:font-medium md:flex-row md:rounded-full md:border md:border-gray-300/20 md:bg-white/10 md:px-8 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>
          <X className='absolute right-6 top-6 h-6 w-6 cursor-pointer md:hidden' onClick={() => setIsOpen(!isOpen)} />
          <Link className='hover:text-primary transition-colors' onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }} to='/'>Home</Link>
          <Link className='hover:text-primary transition-colors' onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }} to='/movies'>Movies</Link>
          <Link className='hover:text-primary transition-colors' onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }} to='/favorite'>Favorites</Link>
          <Link className='hover:text-primary transition-colors' onClick={() => { window.scrollTo(0, 0); setIsOpen(false) }} to='/my-bookings'>Bookings</Link>
        </div>
      </div>
      <div className='flex items-center gap-8'>
        <Search className='hidden h-6 w-6 cursor-pointer md:block text-gray-300 hover:text-primary transition-colors' />
        {!user ? (
          <button onClick={openSignIn} className='cursor-pointer rounded-full bg-primary px-4 py-1 font-medium transition hover:bg-primary-dull sm:px-7 sm:py-2 text-white'>
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action label='My Bookings' labelIcon={<TicketPlus width={15} />} onClick={() => navigate('/my-bookings')} />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      <MenuIcon className='ml-4 h-8 w-8 cursor-pointer md:hidden text-white' onClick={() => setIsOpen(!isOpen)} />
    </div>
  )
}

export default Navbar
