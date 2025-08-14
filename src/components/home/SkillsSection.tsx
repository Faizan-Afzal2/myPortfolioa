import { Heading, Text } from '../common/Typography';
import { Container, Card } from '../common/Layout';

const SkillsSection = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Next.js', level: 80 }
  ];

  return (
    <Container className="py-16">
      <Heading level={2} className="text-center mb-12">
        My Skills
      </Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <Card key={skill.name} variant="elevated" padding="md">
            <div className="flex items-center justify-between mb-2">
              <Text weight="semibold">{skill.name}</Text>
              <Text size="sm" variant="muted">{skill.level}%</Text>
            </div>
            <div className="w-full bg-[color:var(--color-gray-200)] rounded-full h-2">
              <div
                className="bg-gradient-to-r from-[color:var(--color-primary-500)] to-[color:var(--color-secondary-500)] h-2 rounded-full transition-all duration-300"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;