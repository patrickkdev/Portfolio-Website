import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from "next/legacy/image";
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';

type Props = {};

const Contact = (props: Props) => {
  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Entre em contato comigo</h6>
            <p className="mt-2">Vamos conversar sobre tudo!</p>
            <div className="mt-10 text-gray-400">
              <p className="mt-4">+55 31 99644-2788</p>
              <p>patrick8q@gmail.com</p>
            </div>
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
      </div>
    </AppLayout>
  );
};

export default Contact;
