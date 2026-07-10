import express from 'express'

const router = express.Router()

router.get('/', (req, res) => res.json({ message: 'Theatres placeholder' }))

export default router
