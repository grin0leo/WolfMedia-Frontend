import { SloganSection } from "@/components/Slogan";
import styles from "./page.module.css";
import { AboutSection } from "@/components/About";
import { CommunitiesSection } from "@/components/Communities";
import { WorkflowSection } from "@/components/Workflow";

export default function Home() {
  return (
    <main className={styles.page}>
      <SloganSection />

      <AboutSection />

      <CommunitiesSection />

      <WorkflowSection />
    </main>
  );
}
