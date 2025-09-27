import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/ProductList';
import styles from './product.module.css';
import Contacts from './Contacts';

export default function Products({ addToCart }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const navigate = useNavigate();

  const categories = ["all", ...Array.from(new Set(products.map(p => p.category)))];

  useEffect(() => {
    let results = products.filter(
      prod =>
        prod.name.toLowerCase().includes(search.toLowerCase()) ||
        prod.category.toLowerCase().includes(search.toLowerCase()) 
    );
    if (category !== "all") {
      results = results.filter(prod => prod.category === category);
    }
    setFilteredProducts(results);
  }, [search, category]);

  function handleOrderNow(item) {
    addToCart(item);
    navigate('/cart');
  }

  return (
    <div className={styles.container}>
      <h1>Products</h1>
      <div className={styles.filterContainer}>
        <input
        type="text"
        placeholder="Search by name or category..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className={styles.selectCategory}
      >
        {categories.map(cat => (
          <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
        ))}
      </select>
      </div>
      <div className={styles.products}>
        {filteredProducts.map((item, index) => (
          <div key={index} className={styles.productCard}>
            {item.image && (
              <img src={item.image} alt={item.name} className={styles.productImage} />
            )}
            <h2>{item.name}</h2>
            <p>Price: ${item.price}</p>
            <p>Category: {item.category}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <button onClick={() => handleOrderNow(item)} className={styles.orderbutton}>Order Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
