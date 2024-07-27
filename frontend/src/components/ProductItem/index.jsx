import { useNavigate } from "react-router-dom";
import { PlusIcon, StarIcon } from "@/components";

export const ProductItem = ({ product, odd }) => {
  const { VITE_API_URL } = import.meta.env;
  const navigate = useNavigate();

  return(
    <div 
      className='bg-white flex flex-col' 
      style={{
        borderRadius: `${odd ? '32px' : '12px'} ${!odd ? '32px' : '12px'} 12px 12px`
      }}
    >
      <h3 className='text-center px-4 pt-4 pb-1 text-base text-gray-dark'>
        {product.brand}
      </h3>
      <img src={`${VITE_API_URL}${product.image}`} className='object-contain aspect-square' />
      <div className="flex justify-between items-end">
        <div className="flex flex-col pl-3.5 pb-2">
          <span className="text-xs text-gray-x-light flex gap-2 items-center"><StarIcon /> 4.6</span>
          <span className="text-base text-off-black">
            ${(product.price/100).toFixed(2)}
          </span>
        </div>
        <button 
          style={{ borderRadius: '8px 0 8px 0' }} 
          className="bg-orange text-white w-[40px] h-[40px] flex items-center justify-center" 
          onClick={() => navigate(`/product/${product.id}-${product.brand}`)}
        >
          <PlusIcon />
        </button>
      </div>
    </div>
  )
}