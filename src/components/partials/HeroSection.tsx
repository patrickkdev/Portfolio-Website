import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from '@/components/form/Button';
import HeroBackground from './HeroBackground';
import { ReactTyped } from 'react-typed';
import { BsDiscord, BsWhatsapp } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <div className="hero relative -mt-16 flex items-center justify-center">
      <HeroBackground />
      <div className="flex w-full flex-col items-center">
        <div className="overflow-hidden">
          <Image
            className="aspect-square rounded-xl object-cover"
            src="/images/avatar/me.png"
            width={200}
            height={200}
            alt="avatar"
          />
        </div>
        <h1 className="mt-4 text-3xl font-bold ">Patrick Ferreira</h1>
        <div className="mt-2 flex gap-1">
          {' '}
          <ReactTyped
            strings={[
              'Desenvolvedor Full-stack e Admin. de Sistemas',
              'Crio sites, sistemas, APIs e scripts de automação',
              'Conecto negócios a tecnologias modernas',
              'Integro plataformas, serviços e IA',
            ]}
            typeSpeed={60}
            backSpeed={30}
            backDelay={1200}
            loop
          />
        </div>
        <div className="m-8 flex gap-5">
          <Link
            href="https://www.github.com"
            className="text-primary-500 transition-colors duration-150 hover:text-primary-500"
          >
            <FiGithub size={25} />
          </Link>
          <Link
            href="https://wa.me/5531996442788?text=Olá Patrick!"
            className="text-primary-500 transition-colors duration-150 hover:text-primary-500"
          >
            <BsWhatsapp size={25} />
          </Link>
          <Link
            href="https://discord.com/users/patrickkdev"
            className="text-primary-500 transition-colors duration-150 hover:text-primary-500"
          >
            <BsDiscord size={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/patrickkdev/"
            className="text-primary-500 transition-colors duration-150 hover:text-primary-500"
          >
            <FiLinkedin size={25} />
          </Link>
        </div>
        <Button className="px-8">Vamos Conversar</Button>
      </div>
      <div className="absolute bottom-0 mb-10 flex flex-col items-center">
        <p className="mb-3 text-sm">Role para baixo</p>
        <div className="relative flex h-7 w-5 justify-center rounded-full border-2 border-gray-600 dark:border-gray-100">
          <div className="animate-scroll absolute h-1 w-1 bg-gray-600 dark:bg-gray-100" style={{ top: '6px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
