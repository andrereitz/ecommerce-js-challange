import './App.css'
import { Navbar } from './components'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Products, Product } from './components/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/products" element={<Products />} />
        <Route path="/product/:product" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
