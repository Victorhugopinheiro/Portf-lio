import Image from "next/image";
import styles from "./page.module.css";
import { Hight } from "./components/hight";
import { Projects } from "./components/projects";
import { Container } from "./components/projects/components/container";


export default function Home() {
  return (
    <div className={styles.page}>
      <Container>
        <Hight />
        <Projects />
      </Container>
    </div>
  );
}
