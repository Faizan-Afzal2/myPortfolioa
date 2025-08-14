import { Heading, Text } from '../common/Typography';
import { Card } from '../common/Layout';

const ContactInfo = () => {
  const contactItems = [
    {
      label: 'Email',
      value: 'hello@yourportfolio.com',
      icon: '📧'
    },
    {
      label: 'Phone',
      value: '+1 (555) 123-4567',
      icon: '📱'
    },
    {
      label: 'Location',
      value: 'Your City, Country',
      icon: '📍'
    }
  ];

  return (
    <Card variant="outlined" padding="lg" className="mb-8">
      <Heading level={3} className="mb-6">
        Contact Information
      </Heading>
      <div className="space-y-4">
        {contactItems.map((item) => (
          <div key={item.label} className="flex items-center space-x-3">
            <span className="text-xl">{item.icon}</span>
            <div>
              <Text size="sm" variant="muted" className="mb-0">
                {item.label}
              </Text>
              <Text className="mb-0">
                {item.value}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ContactInfo;