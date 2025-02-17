import styles from  "./page.module.css"
import Topo from "../components/Top"
import Image from "next/image"
import artedemo from "/public/arte-demo.png"

export default function Sobre(){
    return(
        <div className={styles.Sobre}>
            <Topo />
            <Image src={artedemo} alt="artedemo" className={styles.artedemo} priority />
            <div className={styles.containertext}>
            <h2>Criação de Sites  Profissionais</h2>
            <p >
            A GR Code é especializada na criação de sites modernos, responsivos e otimizados para SEO. Com uma equipe experiente, oferecemos soluções personalizadas para dar mais visibilidade ao seu negócio online. </p>
            </div>
        </div>
    )
}