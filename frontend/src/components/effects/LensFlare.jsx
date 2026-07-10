const LensFlare = () => {
  return (
    <div className="absolute top-0 left-0 right-0 h-96 pointer-events-none overflow-hidden z-0 select-none">
      {/* Glare Center */}
      <div className="absolute top-[20%] left-[30%] w-60 h-2 bg-white rounded-full blur-md opacity-25 transform rotate-[-15deg] shadow-[0_0_50px_10px_rgba(248,69,101,0.5)]" />
      {/* Halo ring */}
      <div className="absolute top-[10%] left-[20%] w-80 h-80 rounded-full border border-primary/5 blur-[4px] opacity-20 pointer-events-none" />
      {/* Small reflections */}
      <div className="absolute top-[35%] left-[50%] w-10 h-10 rounded-full bg-amber-500/10 blur-[1px] opacity-30" />
      <div className="absolute top-[45%] left-[55%] w-6 h-6 rounded-full bg-primary/10 blur-[2px] opacity-25" />
    </div>
  )
}

export default LensFlare
