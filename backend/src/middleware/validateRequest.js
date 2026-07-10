const validateRequest = (schema) => (req, res, next) => {
  if (!schema) return next()
  next()
}

export default validateRequest
