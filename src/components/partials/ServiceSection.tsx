import classNames from 'classnames';
import Image from "next/legacy/image";
import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import { services } from '@/data/services';
import PicBackgroundCard from '../shared/PicBackgroundCard';

const ServiceSection = () => {
  return (
    <>
      <SectionTitle>Serviços</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <PicBackgroundCard key={index} name={service.name} description={service.description} image={service.image} />
        ))}
      </div>
    </>
  );
};

export default ServiceSection;
