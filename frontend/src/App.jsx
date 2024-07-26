import './App.css'
import { Navbar } from './components'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Products, Product } from './components/pages';

function App() {
  return (
    <Router>
      <div className='max-w-[600px] text-left font-dm px-6 bg-off-white'>
        <Navbar />
        <Routes>
          <Route index path="/products" element={<Products />} />
          <Route path="/product/:product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
