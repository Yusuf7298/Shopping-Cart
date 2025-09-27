import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaShoppingCart, FaBolt } from "react-icons/fa";
import products from '../data/ProductList';
import styles from './product.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram,FaGithub,FaPhone} from 'react-icons/fa';


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
            <div className={styles.buttonGroup}>
               <button onClick={() => navigate(`/product/${item.id}`)} className={styles.detailsbutton}><FaEye /></button>
               <button onClick={() => addToCart(item)}><FaShoppingCart /></button>
               <button onClick={() => handleOrderNow(item)} className={styles.orderbutton}><FaBolt /></button>
            </div>
          </div>
        ))}
      </div>
      <footer id="FollowUs">
        <div className={styles.contactInfos}>
            <h4>For More information follow us on</h4>
                <div className={styles.socialIcons}>
                      <a href="https://web.facebook.com/YusufMohammedHebo/" target="_blank" rel="noopener noreferrer" title="Facebook"><FaFacebook color="#4267B2" /></a>
                      <a href="https://t.me/Y_4life" target="_blank" rel="noopener noreferrer" title="Telegram"><FaTelegram color="#0a43b6ff" /></a>
                      <a href="https://twitter.com/@HeboYusuf" target="_blank" rel="noopener noreferrer" title="Twitter"><FaTwitter color="#1DA1F2" /></a>
                      <a href="https://www.instagram.com/kebilad_7488/" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram color="#C13584" /></a>
                      <a href="https://www.linkedin.com/in/yusuf-mohammed-5272572b6?" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin color="#0077B5" /></a>
                      <a href="https://www.github.com/Yusuf7298" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub color="#171515" /></a>
                      <a href="tel:+251928892344" target="_blank" rel="noopener noreferrer" title="Phone"><FaPhone color="#34A853" /></a>
                </div>
        </div>
      </footer>
    </div>
  );
}
