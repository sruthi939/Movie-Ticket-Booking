import ReactPlayer from 'react-player'
import Modal from '../common/Modal'

const TrailerModal = ({ isOpen, onClose, trailerUrl, title }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${title} - Official Trailer`}>
      <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black">
        {trailerUrl ? (
          <ReactPlayer
            url={trailerUrl}
            controls={true}
            playing={isOpen}
            width="100%"
            height="100%"
          />
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 text-sm">
            Trailer is currently unavailable.
          </div>
        )}
      </div>
    </Modal>
  )
}

export default TrailerModal
