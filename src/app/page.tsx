import { SloganSection } from "@/components/Slogan";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <SloganSection />
    </main>
  );
}
