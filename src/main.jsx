import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext'; // <-- 1. IMPORT CartProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider> {/* <-- 2. WRAP App */}
      <App />
    </CartProvider>
  </StrictMode>,
)