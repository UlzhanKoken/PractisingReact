import React from 'react';
import ProductCard from './ProductCard';
export default function ProductList({products, onAddToCart}){
    return(
        <>
        <div style={styles.grid}>
            {
                products.map((product)=>
                    <ProductCard
                        key={product.id}
                        title = {product.title}
                        price={product.price}
                        image={product.image}
                        onAddToCart={() => onAddToCart(product)}
                    />
                )
            }
        </div>
        </>
    )
}

const styles = {
    grid: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
    },
  };