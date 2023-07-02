import './footer.css';
import { FaHeart } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div>A + B <FaHeart id="footer-heart" /></div>
            </footer>
        </>
    )
}