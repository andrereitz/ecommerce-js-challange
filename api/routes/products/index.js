import express from 'express'
import PRODUCTS from '../../data/products.js'
import STOCKS from '../../data/stock-price.js'

const router = express.Router()

router.get('/', (req, res) => {
  const priced = PRODUCTS.map(product => ({
   ...product,
    price: STOCKS[product.skus[0].code].price
  }))

  res.status(200).json(priced)
})

export default router;