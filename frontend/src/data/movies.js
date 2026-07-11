export const movies = [
  {
    id: 'gladiator',
    title: 'Gladiator',
    tagline: 'What we do in life echoes in eternity.',
    poster: '/posters/HeroSection.png',
    backdrop: '/images/HeroSection.png',
    year: 2000,
    genres: ['Action', 'Drama', 'Adventure'],
    runtime: 155,
    rating: 8.5,
    overview:
      'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
    cast: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
    showtimes: ['18:30', '20:00', '22:15'],
    trailerUrl: 'https://www.youtube.com/watch?v=ol67qo3WhJk',
    highlights: ['4K Dolby Atmos', 'VIP recliners', 'Immersive audio']
  },
  {
    id: 'inception',
    title: 'Inception',
    tagline: 'Your mind is the scene of the crime.',
    poster: '/posters/movie2.jpeg',
    backdrop: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1600&q=80',
    year: 2010,
    genres: ['Sci-Fi', 'Action', 'Thriller'],
    runtime: 148,
    rating: 8.8,
    overview:
      'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    cast: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Elliot Page'],
    showtimes: ['17:45', '19:30', '21:45'],
    trailerUrl: 'https://www.youtube.com/watch?v=YoHD9XEInc0',
    highlights: ['Late-night premiere', 'Limited seats', 'Arcade lounge']
  },
  {
    id: 'the-bourne-identity',
    title: 'The Bourne Identity',
    tagline: 'He was the perfect weapon until he became the target.',
    poster: '/posters/movie3.jpeg',
    backdrop: 'https://images.unsplash.com/photo-1547483238-f400e65ccd56?auto=format&fit=crop&w=1600&q=80',
    year: 2002,
    genres: ['Action', 'Thriller', 'Mystery'],
    runtime: 119,
    rating: 7.9,
    overview:
      'A man is picked up by a fishing boat, bullet-riddled and without memory, then races to elude assassins and recover his identity.',
    cast: ['Matt Damon', 'Franka Potente', 'Chris Cooper'],
    showtimes: ['16:00', '19:15', '22:30'],
    trailerUrl: 'https://www.youtube.com/watch?v=FpKaB5dvQ4g',
    highlights: ['Ocean-view lounge', 'Dolby vision', 'Collector merch']
  },
  {
    id: 'the-dark-knight',
    title: 'The Dark Knight',
    tagline: 'Why So Serious?',
    poster: '/posters/movie4.jpeg',
    backdrop: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
    year: 2008,
    genres: ['Action', 'Crime', 'Drama'],
    runtime: 152,
    rating: 9.0,
    overview:
      'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    showtimes: ['17:15', '20:45', '23:10'],
    trailerUrl: 'https://www.youtube.com/watch?v=EXeTwQWrcwY',
    highlights: ['Stargazer balcony', 'Premium snacks', 'Late show']
  },
  {
    id: 'mission-impossible',
    title: 'Mission: Impossible',
    tagline: 'Expect the Impossible.',
    poster: '/posters/movie5.jpeg',
    backdrop: 'https://images.unsplash.com/photo-1533563906091-fdfdffc3e3c4?auto=format&fit=crop&w=1600&q=80',
    year: 1996,
    genres: ['Action', 'Adventure', 'Thriller'],
    runtime: 110,
    rating: 7.2,
    overview:
      'An American agent, under false suspicion of disloyalty, must discover and expose the real spy without the help of his organization.',
    cast: ['Tom Cruise', 'Jon Voight', 'Emmanuelle Béart'],
    showtimes: ['15:30', '18:00', '21:00'],
    trailerUrl: 'https://www.youtube.com/watch?v=tGsKzZ12WaY',
    highlights: ['IMAX scale', 'Luxury lounge', 'Collector poster']
  },
  {
    id: 'interstellar',
    title: 'Interstellar',
    tagline: 'Mankind was born on Earth. It was never meant to die here.',
    poster: '/posters/movie6.jpeg',
    backdrop: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    year: 2014,
    genres: ['Sci-Fi', 'Drama', 'Adventure'],
    runtime: 169,
    rating: 8.7,
    overview:
      'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    showtimes: ['19:00', '21:30', '23:40'],
    trailerUrl: 'https://www.youtube.com/watch?v=zSWdZATo3Dc',
    highlights: ['VIP skip-the-line', 'After-show talk', 'Arcade bar']
  }
]

export const featuredMovies = movies.slice(0, 4)
