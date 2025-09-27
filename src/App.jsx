import { useState } from 'react';
import NavBar from './components/NavBar';
import styles from './components/product.module.css';

export default function App() {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product) {
    setCartProducts(prev => {
      const idx = prev.findIndex(item => item.product.id === product.id);
      if (idx !== -1) {
        // Product exists, increment quantity
        return prev.map((item, i) =>
          i === idx ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // New product
        return [...prev, { product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(index) {
    setCartProducts(prev => {
      const item = prev[index];
      if (item.quantity > 1) {
        // Decrease quantity
        return prev.map((it, i) =>
          i === index ? { ...it, quantity: it.quantity - 1 } : it
        );
      } else {
        // Remove product
        return prev.filter((_, i) => i !== index);
      }
    });
  }

  return (
    <div className={styles.container}>
      <NavBar
        addToCart={addToCart}
        cartProducts={cartProducts}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}
