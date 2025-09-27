import styles from './product.module.css';
import { Link } from 'react-router-dom';

export default function Cart({ cartProducts, removeFromCart }) {
  function handleOrderNow(index) {
    const item = cartProducts[index];
    alert(`Ordered ${item.quantity} x ${item.product.name}!`);
    removeFromCart(index); // Optionally remove after ordering
  }

  return (
    <div className={styles.cartContainer}>
      <h1>Shopping Cart</h1>
      <div className={styles.products}>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((item, index) => (
            <div key={index} className={styles.productCard}>
              <img src={item.product.image} alt={item.product.name} /><br />
              <div className={styles.productInfo}>
                <h2>{item.product.name}</h2>
                <p>Price: ${item.product.price}</p>
                <p>Category: {item.product.category}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => removeFromCart(index)} className={styles.removebutton}>Remove</button>
                <button onClick={() => handleOrderNow(index)} className={styles.orderbutton}>Order Now</button>
              </div>
            </div>
          ))
        ) : (
          <div className={styles.cartEmpty}>
            <p>No products in the cart.</p>
            <Link to="/">Go to Products</Link>
          </div>
        )}
      </div>
      {cartProducts.length > 0 && (
        <div className={styles.cartTotal}>
          <span>
            Total Items: {cartProducts.reduce((total, item) => total + item.quantity, 0)}
          </span>
          <span>
            Total Price: $
            {cartProducts
              .reduce((total, item) => total + item.product.price * item.quantity, 0)
              .toFixed(2)}
          </span>
          <span>
            Total Categories: {new Set(cartProducts.map(item => item.product.category)).size}
          </span>
        </div>
      )}
    </div>
  );
}
