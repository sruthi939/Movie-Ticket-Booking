const BlurBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Red Orb */}
      <div className="absolute top-[-10%] left-[20%] w-[45vw] h-[45vw] rounded-full bg-primary/10 blur-[130px] animate-float" />
      {/* Orange/Amber Orb */}
      <div className="absolute bottom-[10%] right-[15%] w-[35vw] h-[35vw] rounded-full bg-amber-500/8 blur-[120px] animate-float" style={{ animationDelay: '-2s' }} />
    </div>
  )
}

export default BlurBackground
