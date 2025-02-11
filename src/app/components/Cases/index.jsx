import styles from "./Cases.module.css"

export default function Cases(){
    return (
        <section className={styles.ContainerCases}>
            
            <div className={styles.Cases}>
           
                <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <a href="#">
                    <span className={styles.title}>
                   Riick Store
                    </span>
                    </a>

                    <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium 
                    </p>

                    <a className={styles.action} href="#">
                    deploy
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <a href="#">
                    <span className={styles.title}>
                   Riick Store
                    </span>
                    </a>

                    <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium 
                    </p>

                    <a className={styles.action} href="#">
                    deploy
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <a href="#">
                    <span className={styles.title}>
                   Riick Store
                    </span>
                    </a>

                    <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium 
                    </p>

                    <a className={styles.action} href="#">
                    deploy
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>

                <div className={styles.card}>
                <div className={styles.image}></div>
                <div className={styles.content}>
                    <a href="#">
                    <span className={styles.title}>
                   Riick Store
                    </span>
                    </a>

                    <p className={styles.desc}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                    dolores, possimus pariatur animi temporibus nesciunt praesentium 
                    </p>

                    <a className={styles.action} href="#">
                    deploy
                    <span aria-hidden="true">
                        →
                    </span>
                    </a>
                </div>
                </div>
            </div>
        </section>
    )
}