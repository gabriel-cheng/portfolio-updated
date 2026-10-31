import { Layout } from "../components/layout/Layout";
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
} from "../components/sections";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
    </Layout>
  );
}
