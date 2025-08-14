import { Card, Button } from '../common/Layout';
import { Text } from '../common/Typography';

const AboutImage = () => {
  return (
    <Card variant="outlined" className="h-80 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--color-primary-100)] to-[color:var(--color-secondary-100)] flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-[color:var(--color-primary-200)] rounded-full mb-4 mx-auto flex items-center justify-center">
            <span className="text-3xl">👨‍💻</span>
          </div>
          <Text variant="muted" className="mb-4">
            Professional Photo
          </Text>
          <Button variant="outline" size="sm">
            Upload Image
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </Card>
  );
};

export default AboutImage;