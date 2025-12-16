// components/sections/ContactSection.tsx
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className="space-y-10">
      <SectionTitle>Entre em contato</SectionTitle>
      <div>
        <p>
          Não curte formulários? <br />
          Me chame no Whatsapp: <span className="italic">+55 31 99644-2788</span>
          <br />
          Ou envie um e-mail para: <span className="italic">patrick8q@gmail.com</span>
        </p>
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactSection;
