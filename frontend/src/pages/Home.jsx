import Hero from '../components/home/Hero'
import FeaturedMovies from '../components/home/FeaturedMovies'
import MovieSlider from '../components/home/MovieSlider'
import Experience from '../components/home/Experience'
import ComingSoon from '../components/home/ComingSoon'
import CTA from '../components/home/CTA'
import MouseLight from '../components/effects/MouseLight'
import BlurBackground from '../components/effects/BlurBackground'
import FloatingParticles from '../components/effects/FloatingParticles'

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      <MouseLight />
      {/* Hero */}
      <div className="relative">
        <BlurBackground />
        <FloatingParticles count={25} />
        <Hero />
      </div>
      {/* Featured movies grid */}
      <FeaturedMovies />
      {/* Sliding showcase */}
      <MovieSlider />
      {/* Immersive cinema experience highlights */}
      <Experience />
      {/* Coming soon section */}
      <ComingSoon />
      {/* CTA strip */}
      <CTA />
    </div>
  )
}

export default Home
