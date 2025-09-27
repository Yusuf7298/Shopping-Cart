import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contacts from "./components/Contacts";
import ProductDetails from "./components/ProductDetails";
import styles from "./components/product.module.css";

export default function App() {
  const [cartProducts, setCartProducts] = useState([]);

  function addToCart(product) {
    setCartProducts((prev) => {
      const idx = prev.findIndex((item) => item.product.id === product.id);
      if (idx !== -1) {
        return prev.map((item, i) =>
          i === idx ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  }

  function removeFromCart(index) {
    setCartProducts((prev) => {
      const item = prev[index];
      if (item.quantity > 1) {
        // decrease quantity
        return prev.map((it, i) =>
          i === index ? { ...it, quantity: it.quantity - 1 } : it
        );
      } else {
        // remove product
        return prev.filter((_, i) => i !== index);
      }
    });
  }

  return (
    <BrowserRouter>
      <div className={styles.container}>
        {/* Navigation bar always visible */}
        <NavBar cartProducts={cartProducts} />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Products addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartProducts={cartProducts}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
