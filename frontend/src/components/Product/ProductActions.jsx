import { Bag } from '@/components';

export const ProductActions = ({ id }) => {
  return(
    <div className='flex gap-4 pt-12'>
      <button 
        className={`flex justify-center items-center rounded-xl grow-0 shrink-0 basis-[54px] border border-orange text-orange`}
      >
        <Bag />
      </button>
      <button onClick={() => alert(`Product with id ${id} was added to cart`)} className='bg-orange text-white rounded-xl h-[54px] flex-auto'>Add to Cart</button>
    </div>
  )
}