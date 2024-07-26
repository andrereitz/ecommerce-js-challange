import { useNavigate } from "react-router-dom";

export const ProductItem = ({ product, odd }) => {
  const { VITE_API_URL } = import.meta.env;
  const navigate = useNavigate();

  return(
    <div 
      className='bg-white' 
      style={{
        borderRadius: `${odd ? '32px' : '12px'} ${!odd ? '32px' : '12px'} 12px 12px`
      }}
    >
      <h3 className='text-center px-4 pt-4'>
        {product.brand}
      </h3>
      <img src={`${VITE_API_URL}${product.image}`} className='object-contain aspect-square' />
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>rate here</span>
          <span>
            price here
          </span>
        </div>
        <button 
          style={{ borderRadius: '8px 0 8px 0' }} 
          className="bg-orange text-white" 
          onClick={() => navigate(`/product/${product.id}-${product.brand}`)}
        >
          +
        </button>
      </div>
    </div>
  )
}