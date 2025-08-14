import { Heading, Text } from '../common/Typography';
import { Container, Card, Button } from '../common/Layout';

const ProjectsPreview = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution built with React and Node.js',
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates',
      technologies: ['Next.js', 'PostgreSQL', 'Socket.io', 'Tailwind']
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with modern design',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion']
    }
  ];

  return (
    <Container className="py-16">
      <Heading level={2} className="text-center mb-12">
        Featured Projects
      </Heading>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} variant="outlined" padding="lg" className="hover:shadow-lg transition-shadow">
            <div className="h-40 bg-gradient-to-br from-[color:var(--color-primary-100)] to-[color:var(--color-secondary-100)] rounded-lg mb-4 flex items-center justify-center">
              <Text variant="muted">Project Preview</Text>
            </div>
            <Heading level={3} className="mb-2">
              {project.title}
            </Heading>
            <Text variant="secondary" className="mb-4">
              {project.description}
            </Text>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs bg-[color:var(--color-primary-100)] text-[color:var(--color-primary-700)] rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Button variant="outline" size="sm" className="w-full">
              View Project
            </Button>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default ProjectsPreview;