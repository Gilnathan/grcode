import styles from "./Main.module.css"
import Image from "next/image";

export default function Main() {
    return (
     <main className={styles.main}>
        <video autoPlay loop muted playsInline   className={styles.video}>
        <source src="/videos/bgvideo3.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
        <div className={styles.containerText}>
          <h1 className={styles.title_main}> Aumente suas <br /> vendas com  <span className={styles.span}> sites <br /> inteligentes </span> </h1>
          <p className={styles.text_main}> Desenvolvemos sites e lojas virtuais com design moderno e responsivo <br /> que se adaptam a qualquer dispositivo. </p>
        </div>
  
    </main>
    
    );
  }