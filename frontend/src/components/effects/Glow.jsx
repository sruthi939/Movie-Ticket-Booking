const Glow = ({ color = '#F84565', size = '400px', opacity = 0.15, top = '50%', left = '50%', delay = 0 }) => {
  return (
    <div
      className="absolute pointer-events-none rounded-full blur-[120px] z-0 animate-pulse-glow"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        opacity: opacity,
        top: top,
        left: left,
        transform: 'translate(-50%, -50%)',
        animationDelay: `${delay}s`,
      }}
    />
  )
}

export default Glow
