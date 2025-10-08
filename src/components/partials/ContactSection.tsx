import Image from 'next/image';
import React from 'react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

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
            sizes="100vw" />
          <h6 className="text-2xl font-bold">Vamos conversar sobre tudo!</h6>
          <p className="mt-2">
            Não curte formulários? <br />
            Me chame no Whatsapp: <span className="italic">+55 31 99644-2788</span>
            <br />
            Ou envie um e-mail para: <span className="italic">patrick8q@gmail.com</span>
          </p>
        </div>
        <div className="col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <Input placeholder="Seu nome" />
            <Input placeholder="Seu endereço de e-mail" />
          </div>

          <div className="mt-8">
            <Input placeholder="Assunto" />
          </div>
          <div className="mt-8">
            <TextArea placeholder="Mensagem" />
          </div>
          <div className="mt-8">
            <Button className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
              Enviar Mensagem
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
