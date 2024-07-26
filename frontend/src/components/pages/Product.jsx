import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VariantBadge } from '../';
import { useStock } from '../../hooks/useStock';
import { useNavigate} from "react-router-dom";

export const Product = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.product.split('-')[0];
  const [product, setProduct] = useState(null)
  const { stock, loading } = useStock(id)
  const [selected, setSelected] = useState(0);

  console.log('### the stock', stock)
  console.log('### selected', selected)

  const { VITE_API_URL } = import.meta.env;

  async function getProduct() {
    try {
      const resp = await fetch(`${VITE_API_URL}/product/${id}`);

      if(resp.status === 200) {
        const json = await resp.json();
  
        console.log(json)
  
        setProduct(json)
        return;
      }

      throw json;

    } catch(err) {

      console.log('Error getting product data')
    }
  }

  useEffect(() => {
    getProduct()
  }, [])

  if(!product) {
    return <div>Invalid product</div>
  }

  return(
    <div>
      <div className='flex justify-between'>
        <span onClick={() => navigate(-1)}>back</span>
        <span className='text-lg font-dm font-bold'>Detail</span>
        <span>elipsis</span>
      </div>
      <img src={`${VITE_API_URL}${product.image}`} className='aspect-square object-contain' />
      <div className='flex gap-3'>
        <div className='flex flex-col'>
          <h1>{product.brand}</h1>
          <p>Origin: {product.origin}</p>
        </div>
        <div className='ml-auto'>
          {loading && `Loading price`}
          {!loading && `$${(stock[selected].price / 100).toFixed(2)}`}
        </div>
      </div>
      <h3 className='font-bold'>Description</h3>
      <p>{product.information}</p>

      <h3 className='font-bold'>Size</h3>
      {stock ? (
        <div className='flex gap-3'>
          {stock.map((st, index) => 
            <VariantBadge 
              key={`item-stock-${index}`} 
              title={st.name} 
              onClick={() => setSelected(index)}
              isSelected={selected === index}
            />
          )}
        </div>
      ) : (
        `Out of stock`
      )}

      <div className='flex gap-4'>
        <span>cart</span>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}