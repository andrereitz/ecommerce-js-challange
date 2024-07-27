import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useStock } from '@/hooks/useStock';
import { IconButton, Spinner, VariantBadge } from '@/components';
import { Bag } from '@/components/icons';
import { Elipsis } from '../icons';
import { BackArrow } from '../shared';

export const Product = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.product.split('-')[0];
  const [product, setProduct] = useState(null)
  const { stock, loading } = useStock(id)
  const [selected, setSelected] = useState(0);
  const [readMore, setReadMore] = useState(false)

  const { VITE_API_URL } = import.meta.env;

  console.log(stock)

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
    <div className='max-w-[600px] text-left font-dm bg-off-white'>
      <div className='flex flex-col justify-center pt-10 px-6 pb-2.5'>
        <div className='flex justify-between items-center'>
          <IconButton onClick={() => navigate(-1)}><BackArrow /></IconButton>
          <span className='text-lg font-dm font-bold'>Detail</span>
          <IconButton><Elipsis /></IconButton>
        </div>
        <img src={`${VITE_API_URL}${product.image}`} className='aspect-square object-contain max-h-[240px] pt-1' style={{ mixBlendMode: 'multiply' }} />
      </div>
      <div className='bg-white pl-9 pr-4 pt-11 pb-9 translate-x-[-10px]' style={{ borderRadius: '48px 48px 0 0' }}>
        <div className='flex gap-3'>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold'>{product.brand}</h1>
            <p className='text-gray-xx-light'>Origin: {product.origin} | Stock: {stock ? stock[selected].stock : '...'}</p>
          </div>
          <div className='ml-auto text-2xl text-orange'>
            {loading && <Spinner />}
            {!loading && `$${(stock[selected]?.price / 100).toFixed(2)}`}
          </div>
        </div>
        <h3 className='font-bold pt-5 pb-2'>Description</h3>
        <p 
          className={`text-gray-xx-light text-sm ${readMore ? 'h-auto' : 'h-[80px] overflow-hidden relative'}`}>
            {product.information} 
            {!readMore && (
              <span className='absolute bottom-0 right-0 bg-white w-[90px] text-right'>
                {'... '}
                <span 
                  className='text-orange font-bold'
                  onClick={() => setReadMore(true)}
                >
                  Read More
                </span>
              </span>
              )}
          </p>

        <h3 className='font-bold pt-5 pb-2'>Size</h3>
        {stock && !loading && (
          <div className='flex flex-wrap gap-3'>
            {stock.map((st, index) => 
              <VariantBadge 
                key={`item-stock-${index}`} 
                title={st.name} 
                onClick={() => setSelected(index)}
                isSelected={selected === index}
              />
            )}
          </div>
        )} 
        {!stock && !loading && (
          `Out of stock`
        )}
        {loading && <Spinner />}

        <div className='flex gap-4 pt-12'>
          <IconButton outline size={54}><Bag /></IconButton>
          <button className='bg-orange text-white rounded-xl h-[54px] flex-auto'>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}