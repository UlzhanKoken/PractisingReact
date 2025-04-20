import React from 'react';
export default function ProductCard({ title, price, image, onAddToCart }){
    return(
        <>
        <div className="product-card" style={styles.card}>
            <img src={image} alt={title} style={styles.image} />
            <h3>{title}</h3>
            <p>${price.toFixed(2)}</p>
            <button onClick={onAddToCart}>Add to Cart</button>
        </div>
        </>
    )
}

const styles = {
    card: {
      border: '1px solid #ddd',
      padding: '1rem',
      borderRadius: '8px',
      maxWidth: '200px',
      textAlign: 'center',
    },
    image: {
      width: '100%',
      height: 'auto',
    },
  };
  