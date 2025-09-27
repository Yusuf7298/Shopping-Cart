import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Contacts from './Contacts';
import styles from './product.module.css'; // Assuming the CSS module is named NavBar.module.css

export default function NavBar({ addToCart, cartProducts, removeFromCart }) {
  return (
    <BrowserRouter>
      <nav className={styles.navbar}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cartProducts.length})</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartProducts={cartProducts} removeFromCart={removeFromCart} />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
}
