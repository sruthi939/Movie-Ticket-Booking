import React from 'react'

const MovieBanner = ({ backdrop, title, tagline }) => {
  return (
    <div className="relative w-full h-[50vh] min-h-[350px] overflow-hidden">
      {/* Background image */}
      <img
        src={backdrop}
        alt={title}
        className="w-full h-full object-cover object-center opacity-30 scale-105 filter blur-[1px]"
      />
      
      {/* Gradients overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b] via-transparent to-transparent" />

      {/* Title info overlay */}
      <div className="absolute bottom-10 left-6 md:left-16 lg:left-36 right-6 z-10 space-y-2">
        <span className="rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs uppercase tracking-wider text-primary font-semibold">
          Now Screening
        </span>
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">{title}</h1>
        {tagline && <p className="text-lg text-primary italic font-medium">{tagline}</p>}
      </div>
    </div>
  )
}

export default MovieBanner
