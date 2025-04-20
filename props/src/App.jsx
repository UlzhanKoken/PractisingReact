import { useState } from 'react'
import ProductList from './Components/Task2/ProductList';
import Data from './Components/Task1/Data';
import products from './Components/Task2/Data';

function App() {
  const handleAddToCart = (product) => {
    alert(`Added to cart: ${product.title}`);
    // Можно также сохранять в localStorage или state корзины
  };

  return (
    <>
      <Data/>
      <ProductList products={products} onAddToCart={handleAddToCart} />
    </>
  )
}

export default App
