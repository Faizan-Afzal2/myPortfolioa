import { Section } from '../components/common/Layout';
import HeroSection from '../components/home/HeroSection';
import SkillsSection from '../components/home/SkillsSection';
import ProjectsPreview from '../components/home/ProjectsPreview';

const Home = () => {
  return (
    <>
      <Section background="gradient" padding="xl">
        <HeroSection />
      </Section>
      <Section background="primary" padding="md">
        <SkillsSection />
      </Section>
      <Section background="secondary" padding="md">
        <ProjectsPreview />
      </Section>
    </>
  );
};

export default Home;