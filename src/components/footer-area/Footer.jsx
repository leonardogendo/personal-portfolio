import { FaReact, FaHeart } from "react-icons/fa"
import './styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <p><span style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '0.5px' }}>Powered by</span> <FaReact className="react-icon"/><span id="react-hero">React</span></p>
            <p><span style={{ color: '#fff', fontSize: '0.8rem' }}>Developed by </span> <span style={{ color: '#f24312', fontSize: '1rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>Leonard</span></p>
            <span id="copyright">© 2025 Leon</span>
        </div>
    )
};

export default Footer;