import { motion } from 'framer-motion'

const Button = ({
  children,
  variant = 'primary', // primary | secondary | outline | danger
  size = 'md', // sm | md | lg
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 select-none cursor-pointer border'
  
  const variants = {
    primary: 'bg-primary border-primary text-black hover:bg-primary-dull shadow-lg shadow-primary/10 disabled:bg-zinc-800 disabled:border-zinc-800 disabled:text-zinc-500',
    secondary: 'bg-white/10 border-white/5 text-white hover:bg-white/15 disabled:bg-zinc-900 disabled:text-zinc-600',
    outline: 'border-white/20 bg-transparent text-white hover:border-primary hover:text-primary disabled:border-zinc-800 disabled:text-zinc-600',
    danger: 'bg-rose-500 border-rose-500 text-white hover:bg-rose-600 disabled:bg-zinc-800 disabled:text-zinc-500',
  }

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  return (
    <motion.button
      whileTap={!disabled && !loading ? { scale: 0.96 } : {}}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </motion.button>
  )
}

export default Button
