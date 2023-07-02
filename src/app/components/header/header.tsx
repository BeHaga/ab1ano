import './header.css';
import { FaHeart } from 'react-icons/fa';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <header className="header">
                <div className="header-div"><a>A + B <FaHeart id="header-heart" /></a></div>
                <nav className="header-nav">
                    {/* <Link href="/fotos">FOTOS</Link> */}
                    <a>FOTOS</a>
                    <a>CARTAS</a>
                    <a>CLIQUE AQUI</a>
                </nav>
            </header>
        </>
    )
}