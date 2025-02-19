"use client";

import styles from "./page.module.css";
import Topo from "../components/Top";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Sobre() {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        import("/public/animacaodesigner.json")
            .then((data) => setAnimationData(data.default))
            .catch((err) => console.error("Erro ao carregar a animação:", err));
    }, []);

    return (
        <div className={styles.Sobre}>
            <Topo />
            
            <div className={styles.containertext}>
                <h2>Criação de Sites Profissionais</h2>
                <p>
                    A GR Code é especializada na criação de sites modernos, responsivos e otimizados para SEO.
                    Com uma equipe experiente, oferecemos soluções personalizadas para dar mais visibilidade ao seu negócio online.
                </p>
            </div>
            {animationData && <Lottie animationData={animationData} className={styles.aimation} />}
        </div>
    );
}
