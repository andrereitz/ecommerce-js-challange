import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Products, Product, Home } from './components/pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="*" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:product" element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App
