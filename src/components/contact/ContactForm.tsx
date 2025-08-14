import { Card, Button } from '../common/Layout';
import { Input, TextArea } from '../common/Input';

const ContactForm = () => {
  return (
    <Card variant="elevated" padding="lg">
      <form className="space-y-6">
        <Input
          type="text"
          id="name"
          label="Name"
          placeholder="Your name"
        />
        <Input
          type="email"
          id="email"
          label="Email"
          placeholder="your@email.com"
        />
        <TextArea
          id="message"
          rows={4}
          label="Message"
          placeholder="Your message..."
        />
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </Card>
  );
};

export default ContactForm;