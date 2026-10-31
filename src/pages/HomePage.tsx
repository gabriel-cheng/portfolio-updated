import { Layout } from "../components/layout/Layout";
import {
  ContactSection,
  ExperienceSection,
  HeroSection,
  AboutSection,
  ProjectsSection,
} from "../components/sections";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
