import { useNavigate } from "react-router-dom";
import { Elipsis, BackArrow, IconButton } from '@/components'

export const ProductNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex justify-between items-center'>
      <IconButton onClick={() => navigate(-1)}><BackArrow /></IconButton>
      <span className='text-lg font-dm font-bold'>Detail</span>
      <IconButton><Elipsis /></IconButton>
    </div>
  )
}