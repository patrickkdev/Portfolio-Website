// components/sections/ContactSection.tsx
import Image from 'next/image';
import SectionTitle from '@/components/shared/SectionTitle';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <>
      <SectionTitle>Entre em contato</SectionTitle>
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        <div className="relative h-48">
          <Image
            src="/images/map.svg"
            className="dark:invert"
            alt="map"
            fill
            sizes="100vw"
          />
          <p className="mt-2">
            Não curte formulários? <br />
            Me chame no Whatsapp: <span className="italic">+55 31 99644-2788</span>
            <br />
            Ou envie um e-mail para: <span className="italic">patrick8q@gmail.com</span>
          </p>
        </div>

        <div className="col-span-2">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
