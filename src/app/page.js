import Image from "next/image";
import styles from "./page.module.css";

import Topo from "./components/Top"
import Main from "./components/Main";
import Competencias from "./components/competencias";
import Cases from "./components/Cases";

export default function Home() {
  return (
    <div className={styles.page}>
      <Topo />
      <Main />
      <Competencias />
     
    </div>
  );
}
