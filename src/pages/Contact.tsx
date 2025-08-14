import { Section, Container } from '../components/common/Layout';
import ContactHeader from '../components/contact/ContactHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact = () => {
  return (
    <Section background="secondary" padding="xl">
      <Container size="md">
        <ContactHeader />
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <ContactInfo />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;