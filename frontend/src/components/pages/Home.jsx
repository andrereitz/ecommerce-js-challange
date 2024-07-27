import { useNavigate } from 'react-router-dom'
import { Navbar } from '@/components'
import { WelcomeBlock } from '@/components'

export const Home = () => {
  const navigate = useNavigate();

  return(
    <div className='max-w-[600px] text-left min-h-[100vh] font-dm px-6 bg-off-white'>
      <Navbar />
      <WelcomeBlock />
      <div className='text-center py-7'>
        <button onClick={() => navigate('/products')} className='bg-orange px-6 text-white rounded-xl h-[54px] flex-auto'>
          Go to Products
        </button>
      </div>
    </div>
  )
}