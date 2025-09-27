import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/ProductList';
import styles from './product.module.css';
import { FaTag, FaBoxOpen, FaArrowLeft } from 'react-icons/fa';

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => String(p.id) === id);

  function handleOrderNow(item) {
    addToCart(item);
    navigate('/cart');
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <button onClick={() => navigate(-1)} className={styles.detailsbutton}>
          <FaArrowLeft /> Back
        </button>
        <h2>Product not found.</h2>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.productdet}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImages}
        />
        <div className={styles.productdetailsCard}>
          <h1>{product.name}</h1>
          <p>
            <FaTag style={{ marginRight: 8, color: '#007bff' }} />
            <strong>Price:</strong> ${product.price}
          </p>
          <p>
            <FaBoxOpen style={{ marginRight: 8, color: '#28a745' }} />
            <strong>Category:</strong> {product.category}
          </p>
          <div className={styles.buttonGroup}>
            <button onClick={() => addToCart(product)} className={styles.buttons}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
