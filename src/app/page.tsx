import { SloganSection } from "@/components/Section/HomePage/Slogan";
import styles from "./page.module.css";
import { AboutSection } from "@/components/Section/HomePage/About";
import { CommunitiesSection } from "@/components/Section/HomePage/Communities";
import { WorkflowSection } from "@/components/Section/HomePage/Workflow";
import { AudienceSection } from "@/components/Section/HomePage/Audience";
import { AutomationSection } from "@/components/Section/HomePage/Automation";
import { ContactsSection } from "@/components/Section/HomePage/Contacts";
import { BackToTopButton } from "@/components/Section/HomePage/Workflow/ui/BackToTopButton";

export default function Home() {
  return (
    <main className={styles.page}>

      <SloganSection />

      <AboutSection />

      <CommunitiesSection />

      <WorkflowSection />

      <AudienceSection />

      <AutomationSection />

      <ContactsSection />

      <BackToTopButton />
    </main>
  );
}
