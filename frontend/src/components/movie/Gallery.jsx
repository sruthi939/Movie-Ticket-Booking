const Gallery = ({ title = 'Movie Stills' }) => {
  const images = [
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=600&q=80',
  ]

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white tracking-tight">Gallery</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {images.map((imgUrl, idx) => (
          <div key={idx} className="relative overflow-hidden rounded-2xl aspect-video border border-white/5 shadow-sm group">
            <img
              src={imgUrl}
              alt={`${title} Still ${idx + 1}`}
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
