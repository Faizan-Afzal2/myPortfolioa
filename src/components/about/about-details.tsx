import { Heading, Text } from '../common/Typography';

const AboutDetail = () => {
  return (
    <div>
      <Heading level={2} className="mb-4">
        Hi, I'm a Developer
      </Heading>
      <Text variant="secondary" className="mb-4">
        I'm passionate about creating web applications that solve real-world
        problems. With experience in React, TypeScript, and modern web
        technologies, I love building user-friendly interfaces and scalable
        applications.
      </Text>
    </div>
  );
};

export default AboutDetail;
