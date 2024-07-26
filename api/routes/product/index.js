import express from 'express'
import PRODUCTS from '../../data/products.js'
import STOCKS from '../../data/stock-price.js'

const router = express.Router()

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const intID = parseInt(id, 10)

  if(!id || isNaN(intID)) {
    res.status(400).send({ message: 'Invalid request, please provide an id' });
    return;
  }

  const product = PRODUCTS.find(product => product.id == intID)

  if(!product) {
    res.status(404).send({ message: 'Product not found' });
    return;
  }

  res.status(200).send(product)
})

router.get('/:id/stock', (req, res) => {
  const { id } = req.params;
  const intID = parseInt(id, 10)

  if(!id || isNaN(intID)) {
    res.status(400).send({ message: 'Invalid request, please provide an id' });
    return;
  }

  const product = PRODUCTS.find(product => product.id == intID)

  if(!product || !product.skus) {
    res.status(404).send({ message: 'Stock not found' });
    return;
  }

  const stockInfo = product.skus.map(sku => {
    return {name: sku.name, ...STOCKS[sku.code]};
  })

  res.status(200).send(stockInfo)
})

export default router;