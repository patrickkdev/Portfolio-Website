import React from 'react';
import SectionTitle from '@/components/shared/SectionTitle';
import PicBackgroundCard from '@/components/shared/PicBackgroundCard';
import { services } from '@/data/services';

const ServiceSection = () => {
  return (
    <>
      <SectionTitle>Serviços</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <PicBackgroundCard key={index} name={service.name} description={service.description} image={service.image} />
        ))}
      </div>
      <ServiceSectionSideBySide />
    </>
  );
};

export default ServiceSection;

function ServiceSectionSideBySide() {
  const servicesIDoList = [
    {
      title: "✅️ O que eu ofereço:",
      description: (
        <ul className="list-inside list-disc text-gray-700 space-y-1">
          <li>Desenvolvimento de Software Sob Medida (Go, React, HTMX, etc)</li>
          <li>Criação e integração de APIs e automações</li>
          <li>Implementação de Inteligência Artificial (Gemini, ChatGPT, etc)</li>
          <li>Integração de pagamentos (Stripe, Mercado Pago, Efí, etc)</li>
          <li>Gestão de servidores Linux e bancos de dados (VPS, PostgreSQL)</li>
        </ul>
      ),
    },
  ];

  const servicesIDoNotList = [
    {
      title: "❌️ O que eu não faço:",
      description: (
        <>
          <p className="text-gray-700 mt-2">Evito atuar onde não entrego meu melhor.</p>
          <ul className="list-inside list-disc text-gray-600 space-y-1 mt-3">
            <li>Wordpress ou PHP</li>
            <li>Marketing digital</li>
            <li>Apps mobile nativos</li>
            <li>Projetos sem escopo definido</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="leading-relaxed mt-12 mx-4 md:mx-8">
      <div className="text-center space-y-3">
        <h1 className="block text-gray-800 text-3xl font-semibold">Serviços</h1>
        <p className="text-gray-500 max-w-lg mx-auto">
          Um panorama claro do que faço e do que não faço.
        </p>
      </div>

      <div
        className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-full sm:mx-auto"
        style={{ boxShadow: "0px 7px 20px 7px #F1F1F1" }}
      >
        <div className="grid gap-4 py-8 md:grid-cols-2">
          <div className="space-y-3 mt-4 px-8">
            {servicesIDoList.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-gray-800 text-xl font-semibold mb-4">{item.title}</h4>
                {item.description}
              </div>
            ))}
          </div>

          <div className="space-y-3 mt-4 px-8">
            {servicesIDoNotList.map((item, idx) => (
              <div key={idx}>
                <h4 className="text-gray-800 text-xl font-semibold mb-4">{item.title}</h4>
                {item.description}
              </div>
            ))}
          </div>
        </div>

        <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
      </div>
    </div>
  );
}
