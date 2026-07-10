import { GENRES } from '../../utils/constants'

const Categories = ({ activeCategory = 'All', onSelectCategory }) => {
  return (
    <div className="py-6 px-6 md:px-16 lg:px-24 xl:px-44 bg-[#09090b] relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-2.5 items-center">
        <span className="text-xs uppercase tracking-widest text-gray-500 font-bold mr-2">Categories:</span>
        {GENRES.map((genre) => {
          const isSelected = activeCategory === genre
          return (
            <button
              key={genre}
              onClick={() => onSelectCategory && onSelectCategory(genre)}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition border cursor-pointer select-none ${
                isSelected
                  ? 'bg-primary border-primary text-black shadow-lg shadow-primary/20'
                  : 'bg-white/5 border-white/5 text-gray-300 hover:border-white/10 hover:bg-white/10'
              }`}
            >
              {genre}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Categories
