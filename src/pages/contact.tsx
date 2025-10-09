import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import ContactForm from '@/components/partials/ContactForm';

type Props = {};

const Contact = (props: Props) => {
  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Início', path: '/' },
          { label: 'Contato', path: '' },
        ]}
      >
        Contato
      </PageTitle>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image
              src="/images/map.svg"
              className="dark:invert"
              alt="map"
              fill
              sizes="100vw" />
            <h6 className="text-2xl font-bold">Entre em contato comigo</h6>
            <div className="mt-10 text-gray-400">
              <p className="mt-4">+55 31 99644-2788</p>
              <p>patrick8q@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
