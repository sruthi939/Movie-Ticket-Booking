import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-400 bg-[#060608] border-t border-white/5 py-12">
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-white/10 pb-14">
        <div className="md:max-w-96 space-y-6">
          {assets.logo ? (
            <img className="w-36 h-auto filter brightness-90" src={assets.logo} alt="logo" />
          ) : (
            <div className="text-xl font-bold tracking-[0.3em] text-white">CINEMA</div>
          )}
          <p className="text-sm leading-relaxed">
            Experience the future of film ticket booking with immersive 3D seat previews, Dolby Atmos specifications, and streamlined checkouts.
          </p>
        </div>
        <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
          <div>
            <h2 className="font-semibold text-white mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-white mb-5">Get in Touch</h2>
            <div className="text-sm space-y-2">
              <p>+91 7926347869</p>
              <p className="hover:text-primary transition-colors cursor-pointer">support@movietickets.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="pt-8 text-center text-sm text-gray-500">
        Copyright &copy; {new Date().getFullYear()} MovieTickets. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
