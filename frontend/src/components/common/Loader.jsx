import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#09090b]'>
      <div className='relative flex items-center justify-center'>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className='absolute h-24 w-24 rounded-full bg-primary/20 blur-md'
        />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className='relative h-16 w-16 rounded-full border-4 border-dashed border-primary flex items-center justify-center'
        >
          <div className='absolute h-10 w-10 rounded-full border-2 border-white/20' />
          <div className='absolute h-full w-0.5 bg-white/20' />
          <div className='absolute h-0.5 w-full bg-white/20' />
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className='mt-6 text-sm uppercase tracking-[0.35em] text-gray-300'
      >
        Loading...
      </motion.p>
    </div>
  )
}

export default Loader
