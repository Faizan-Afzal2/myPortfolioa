import { Text } from '../common/Typography';

const AboutSkillsSection = () => {
  return (
    <div className="space-y-2">
      <div className="flex items-center">
        <Text weight="semibold" variant="secondary" className="w-20 mb-0">Skills:</Text>
        <Text variant="secondary" className="mb-0">
          React, TypeScript, Tailwind CSS, Node.js
        </Text>
      </div>
      <div className="flex items-center">
        <Text weight="semibold" variant="secondary" className="w-20 mb-0">Focus:</Text>
        <Text variant="secondary" className="mb-0">
          Frontend Development, UI/UX Design
        </Text>
      </div>
    </div>
  );
};

export default AboutSkillsSection;
