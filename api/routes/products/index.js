import express from 'express'
import PRODUCTS from '../../data/products.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(PRODUCTS)
})

export default router;