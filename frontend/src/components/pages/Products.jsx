import { useState, useEffect } from "react";
import { ProductItem } from '../ProductItem';

export const Products = () => {
  const [products, setProducts] = useState([])

  const { VITE_API_URL } = import.meta.env;

  async function getProducts() {
    try {
      const resp = await fetch(`${VITE_API_URL}/products`)
      const json = await resp.json()

      setProducts(json)

    } catch(err) {
      alert(err)
    }
  }

  useEffect(() => {
    getProducts()
  }, [])

  return(
    <>
      <span className='text-base text-gray-light'>Hi Mr. Michael</span>
      <h1 className='text-gray-dark text-2xl font-bold pt-1 pb-3.5 font-dm'>Welcome Back!</h1>
      <h2 className='text-lg pb-4'>Our Products</h2>
      <div className='grid grid-cols-2 gap-3.5'>
        {products.length && products.map((product, index) => {
          return(
            <ProductItem product={product} key={product.id} odd={index % 2 != 0} />
          )
        })}
      </div>
    </>
  )
}