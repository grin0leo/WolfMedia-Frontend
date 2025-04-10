import { SloganSection } from "@/components/Slogan";
import styles from "./page.module.css";
import { AboutSection } from "@/components/About";

export default function Home() {
  return (
    <main className={styles.page}>
      <SloganSection />

      <AboutSection />
    </main>
  );
}
