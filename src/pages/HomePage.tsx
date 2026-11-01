import { Layout } from "../components/layout/Layout";
import {
  AboutSection,
  ContactSection,
  EducationSection,
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
      <EducationSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
}
