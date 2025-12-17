// components/sections/ContactSection.tsx
import ExternalLink from '../shared/ExternalLinks';
import SectionHeader from '../shared/SectionHeader';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <div className="space-y-12 lg:space-y-16">
      <SectionHeader eyebrow="Contato" title="Fale comigo" subtitle={
        <>
          Não curte formulários? <br />
          Me envie uma mensagem no Whatsapp: <ExternalLink href="https://wa.me/5531996442788">+55 31 99644-2788</ExternalLink><br /> ou e-mail: <ExternalLink href="mailto:patrick8q@gmail.com">patrick8q@gmail.com</ExternalLink>
        </>
      }
      />

      <ContactForm />
    </div>
  );
};

export default ContactSection;
