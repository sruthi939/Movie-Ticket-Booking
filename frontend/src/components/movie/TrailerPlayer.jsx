import { useState } from 'react'
import ReactPlayer from 'react-player'
import { PlayCircle } from 'lucide-react'

const TrailerPlayer = ({ trailerUrl, poster }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-white tracking-tight">Watch Cinematic Preview</h3>
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/40 shadow-2xl min-h-[260px] flex items-center justify-center">
        {trailerUrl ? (
          <div className="relative w-full aspect-video">
            <ReactPlayer
              url={trailerUrl}
              controls={true}
              playing={isPlaying}
              width="100%"
              height="100%"
              light={!isPlaying && poster} // Show poster light frame before play
              playIcon={
                <button
                  onClick={() => setIsPlaying(true)}
                  className="rounded-full bg-primary p-5 text-black hover:scale-105 transition shadow-lg cursor-pointer"
                >
                  <PlayCircle className="h-10 w-10 fill-current" />
                </button>
              }
            />
          </div>
        ) : (
          <p className="text-gray-400 text-sm">Trailer preview is unavailable for this release.</p>
        )}
      </div>
    </div>
  )
}

export default TrailerPlayer
