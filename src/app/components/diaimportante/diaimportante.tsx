import Image from 'next/image';
import './diaimportante.css';

interface IProps {
    src: string;
    alt: string;
    dia: string;
    escrita: string;
    width: number;
    height: number;
}

export default function Diaimportante(props: IProps) {
    const {src, alt, dia, escrita, width, height} = props;
    return (
        <>
            <section className="card">
                <div className="card-text">
                    <h2>Dia {dia}</h2>
                    <p>{escrita}</p>
                </div>
                <Image className="card-img" src={src} alt={alt} width={width} height={height} />
            </section>
        </>
    )
}