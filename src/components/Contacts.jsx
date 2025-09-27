import styles from './product.module.css';


import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram,FaGithub,FaPhone} from 'react-icons/fa';

export default function Contacts() {
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please fill out the form below:</p>
            <form 
                className={styles.contactForm}
                action="mailto:ym47484988@gmail.com"
                method="POST"
                encType="text/plain"
            >
                <label>
                    Name:
                    <input type="text" name="name" placeholder="Your Name" required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" placeholder="Your Email" required />
                </label>
                <label>
                    Message:
                    <textarea name="message" rows="5" placeholder="Your Message" required />
                </label>
                <button type="submit">Send Message</button>
            </form>
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
        </div>
    );
}