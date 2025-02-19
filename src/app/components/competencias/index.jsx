"use client";

import styles from './Competencias.module.css';
import Image from "next/image";
import responsivo from "/public/icones/responsivo.png";
import webdesign from "/public/icones/web-design.png";
import esquema from "/public/icones/esquema.png";
import rapidez from "/public/icones/rapidez.png";
import suportetecnico from "/public/icones/suporte-tecnico.png";
import google from "/public/icones/google.png";
import personalizacao from "/public/icones/personalizacao.png";
import integracaodedados from "/public/icones/integracao-de-dados.png";

import Lottie from "lottie-react";
import animationGlobo from "/public/animationGlobo.json"
import animacaodesigner from "/public/animacaodesigner.json"
import AnimationLayout from "/public/AnimationLayout.json"
import AnimationSpeed from "/public/AnimationSpeed.json"
import AnimationSupport from "/public/AnimationSupport.json"
import AnimationGoogle from "/public/AnimationGoogle.json"
import AnimationCustomization from "/public/AnimationCustomization.json"
import AnimationIntegração from "/public/AnimationIntegração.json"


export default function Competencias() {
    return (
        <section   className={styles.containerCompetencias}> 


            


            <div className={styles.competencias}>
                <div className={styles.cards}>
                <Lottie animationData={animationGlobo} loop={true} className={styles.icon} />
                    <h2>Sites Responsivos</h2>
                    <p>Sites que se ajustam perfeitamente a qualquer tela, seja de computador, celular ou tablet.</p>
                </div>
                <div className={styles.cards}>
                <Lottie animationData={animacaodesigner} loop={true} className={styles.icon} />
                    <h2>User Experience</h2>
                    <p>Estratégias de UX/UI Design voltadas para aprimorar a experiência do usuário, garantindo melhor usabilidade, navegação e conversão.</p>
                </div>
                <div className={styles.cards}>
                <Lottie animationData={AnimationLayout} loop={true} className={styles.icon} />
                    <h2>Layout Personalizado</h2>
                    <p>O layout é único e criado por especialistas. Cada detalhe, das formas às cores, das imagens aos ícones, é cuidadosamente planejado para você.</p>
                </div>
                <div className={styles.cards}>
                <Lottie animationData={AnimationSpeed} loop={true} className={styles.icon} />
                    <h2>Páginas Rápidas</h2>
                    <p>Páginas com carregamento rápido para maximizar conversões, utilizando otimização e servidores em nuvem de alta performance.</p>
                </div>
                <div className={styles.cards}>
                <Lottie animationData={AnimationSupport} loop={true} className={styles.icon} />
                    <h2>Suporte Contínuo</h2>
                    <p>Tenha à disposição um time de especialistas para atender às suas necessidades, sempre que precisar e sob demanda.</p>
                </div>
                <div className={styles.cards}>
                <Lottie animationData={AnimationGoogle} loop={true} className={styles.icon} />
                    <h2>Pronto para o Google</h2>
                    <p>Desenvolvemos seu site seguindo todas as diretrizes do Google, garantindo que sua empresa se destaque na maior rede de pesquisa.</p>
                </div>
                <div className={styles.cards}>
                <Lottie animationData={AnimationCustomization} loop={true} className={styles.icon} />
                    <h2>Personalização Total</h2>
                    <p>Criamos sites totalmente personalizados, com layouts exclusivos para sua marca. Design moderno e profissional para transmitir confiança aos seus visitantes.</p>
                </div>
                <div className={styles.cards}>
                <Lottie animationData={AnimationIntegração} loop={true} className={styles.icon} />
                    <h2>Integração</h2>
                    <p>Realizamos integrações com os principais CRM’s, ERP’s, sistemas e plataformas de pagamento digital, automatizando seus processos e otimizando o tempo no fluxo de trabalho.</p>
                </div>
            </div>
            
        </section>
    )

}