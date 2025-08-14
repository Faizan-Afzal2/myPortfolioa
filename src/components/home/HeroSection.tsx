import { Heading, Text } from '../common/Typography';
import { Container, Button } from '../common/Layout';

const HeroSection = () => {
  return (
    <Container className="text-center">
      <Heading level={1}>
        Welcome to My Portfolio
      </Heading>
      <Text size="xl" variant="secondary" className="mb-8 max-w-2xl mx-auto">
        I'm a passionate developer creating amazing web experiences with modern technologies.
      </Text>
      <div className="space-x-4">
        <Button variant="primary" size="lg">
          View Projects
        </Button>
        <Button variant="outline" size="lg">
          Contact Me
        </Button>
      </div>
    </Container>
  );
};

export default HeroSection;