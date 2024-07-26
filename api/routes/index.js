import express from 'express';
import products from './products/index.js'
import product from './product/index.js'

const router = express.Router()

router.use('/products', products)
router.use('/product', product)

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Api is running!' })
})

export default router;