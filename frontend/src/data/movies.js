export const movies = [
  {
    id: 'aurora-echo',
    title: 'Aurora Echo',
    tagline: 'A neon rebellion in the sky.',
    poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
    year: 2026,
    genres: ['Sci-Fi', 'Adventure', 'Thriller'],
    runtime: 128,
    rating: 8.7,
    overview:
      'When the city’s sky network fails, a fearless courier discovers a hidden signal that could change the future of the metropolis.',
    cast: ['Maya Chen', 'Liam Ortiz', 'Nia Brooks'],
    showtimes: ['18:30', '20:00', '22:15'],
    trailerUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    highlights: ['4K Dolby Atmos', 'VIP recliners', 'Immersive audio']
  },
  {
    id: 'midnight-rail',
    title: 'Midnight Rail',
    tagline: 'Every station hides a secret.',
    poster: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80',
    year: 2025,
    genres: ['Mystery', 'Action'],
    runtime: 112,
    rating: 8.2,
    overview:
      'A stranded detective boards a train that only appears at midnight, where memories are stolen one carriage at a time.',
    cast: ['Ava Stone', 'Jonah Reed', 'Priya Singh'],
    showtimes: ['17:45', '19:30', '21:45'],
    trailerUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    highlights: ['Late-night premiere', 'Limited seats', 'Arcade lounge']
  },
  {
    id: 'crystal-surge',
    title: 'Crystal Surge',
    tagline: 'The ocean remembers.',
    poster: 'https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=1600&q=80',
    year: 2024,
    genres: ['Fantasy', 'Drama'],
    runtime: 136,
    rating: 8.9,
    overview:
      'An underwater archivist uncovers a crystal signal that awakens a lost civilization beneath the sea.',
    cast: ['Elena Cruz', 'Theo Bell', 'Mina Hal'],
    showtimes: ['16:00', '19:15', '22:30'],
    trailerUrl: 'https://www.youtube.com/watch?v=HhesaQXLuRY',
    highlights: ['Ocean-view lounge', 'Dolby vision', 'Collector merch']
  },
  {
    id: 'nova-parade',
    title: 'Nova Parade',
    tagline: 'The city glows when the stars fall.',
    poster: 'https://images.unsplash.com/photo-1517606497123-9a41c8a0f47d?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    year: 2026,
    genres: ['Romance', 'Sci-Fi'],
    runtime: 104,
    rating: 7.8,
    overview:
      'Two rooftop astronomers race across the skyline to stop a meteor shower from tearing apart their city.',
    cast: ['Sara Kim', 'Milo Grant', 'Rina Cole'],
    showtimes: ['17:15', '20:45', '23:10'],
    trailerUrl: 'https://www.youtube.com/watch?v=6ZfuNTqbHE8',
    highlights: ['Stargazer balcony', 'Premium snacks', 'Late show']
  },
  {
    id: 'ember-crown',
    title: 'Ember Crown',
    tagline: 'A kingdom is forged in fire.',
    poster: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&w=1600&q=80',
    year: 2025,
    genres: ['Epic', 'Adventure'],
    runtime: 149,
    rating: 8.5,
    overview:
      'A young heir must navigate political intrigue and ancient fire to reclaim the throne of an empire.',
    cast: ['Noah Vale', 'June Hart', 'Kai Sol'],
    showtimes: ['15:30', '18:00', '21:00'],
    trailerUrl: 'https://www.youtube.com/watch?v=8Qn_spdM5Zg',
    highlights: ['IMAX scale', 'Luxury lounge', 'Collector poster']
  },
  {
    id: 'shadow-market',
    title: 'Shadow Market',
    tagline: 'The night never sleeps.',
    poster: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?auto=format&fit=crop&w=900&q=80',
    backdrop: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1600&q=80',
    year: 2024,
    genres: ['Thriller', 'Crime'],
    runtime: 121,
    rating: 7.9,
    overview:
      'A jewel thief infiltrates a citywide auction where every item comes with a deadly secret.',
    cast: ['Drew Flores', 'Tess Lane', 'Marcus Hale'],
    showtimes: ['19:00', '21:30', '23:40'],
    trailerUrl: 'https://www.youtube.com/watch?v=2Vv-BfVoq4g',
    highlights: ['VIP skip-the-line', 'After-show talk', 'Arcade bar']
  }
]

export const featuredMovies = movies.slice(0, 4)
