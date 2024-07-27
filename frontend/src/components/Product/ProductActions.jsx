import { IconButton, Bag } from '@/components';

export const ProductActions = () => {
  return(
    <div className='flex gap-4 pt-12'>
      <IconButton outline size={54}><Bag /></IconButton>
      <button className='bg-orange text-white rounded-xl h-[54px] flex-auto'>Add to Cart</button>
    </div>
  )
}