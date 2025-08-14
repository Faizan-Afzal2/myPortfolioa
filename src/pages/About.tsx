import { Section, Container } from '../components/common/Layout';
import AboutDetail from "../components/about/about-details";
import AboutHeading from "../components/about/about-heading";
import AboutSkillsSection from "../components/about/about-skill-section";
import AboutImage from "../components/about/AboutImage";

const About = () => {
  return (
    <Section background="primary" padding="xl">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="lg:col-span-2">
            <AboutHeading />
          </div>
          <div className="space-y-8">
            <AboutDetail />
            <AboutSkillsSection />
          </div>
          <div className="lg:sticky lg:top-8">
            <AboutImage />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default About;
