import { SloganSection } from "@/components/Slogan";
import styles from "./page.module.css";
import { AboutSection } from "@/components/About";
import { CommunitiesSection } from "@/components/Communities";
import { WorkflowSection } from "@/components/Workflow";
import { AudienceSection } from "@/components/Audience";
import { AutomationSection } from "@/components/Automation";

export default function Home() {
  return (
    <main className={styles.page}>
      <SloganSection />

      <AboutSection />

      <CommunitiesSection />

      <WorkflowSection />

      <AudienceSection />

      <AutomationSection />
    </main>
  );
}
