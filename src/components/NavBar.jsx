import { Link, useLocation } from "react-router-dom";
import styles from "./product.module.css";

export default function NavBar({ cartProducts }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav className={styles.navbar}>
      {path === "/" && (
        <>
          <a href="#FollowUs">Follow Us</a>
          <Link to="/cart">Cart ({cartProducts.length})</Link>
          <Link to="/contacts">Contacts</Link>
        </>
      )}

      {path === "/cart" && (
        <>
          <Link to="/">Products</Link>
          <Link to="/contacts">Contacts</Link>
        </>
      )}

      {(path === "/contacts" || path.startsWith("/product/")) && (
        <>
          <Link to="/">Products</Link>
          <Link to="/cart">Cart ({cartProducts.length})</Link>
          <Link to="/contacts">Contacts</Link>
        </>
      )}
    </nav>
  );
}
