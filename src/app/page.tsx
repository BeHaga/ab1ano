import styles from './page.module.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Fotos from './components/fotos/fotos'

export default function Home() {
  return (
    <>
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&family=Open+Sans&family=Overpass:wght@500&family=Poppins:ital,wght@0,400;0,500;1,700&display=swap" rel="stylesheet"/> 
        </head>
        <main className={styles.main}>
          <Header />
          <Fotos />
          <Footer />
        </main>
      </html>                 
    </>
  )
}