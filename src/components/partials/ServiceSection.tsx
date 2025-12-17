import SectionHeader from '../shared/SectionHeader';

const ServiceSection = () => {
  return (
    <div className="space-y-16">
      <SectionHeader eyebrow="Escopo" title="O que ofereço" subtitle="E o que não ofereco." />
      <div className='grid gap-8 md:grid-cols-2'>
        <div className='bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg bg-white dark:bg-gray-700'>
          <div className='space-y-4'>
            <h4 className='font-semibold text-primary'>✅️ O que ofereço:</h4>
            <ul className='text-primary text-balance space-y-2 list-disc list-outside ml-5'>
              <li>Criação e manutenção de sites, sistemas web, APIs, bots e aplicações personalizadas</li>
              <li>Implementação prática de recursos de Inteligência Artificial</li>
              <li>Integração com plataformas de pagamento e serviços externos</li>
              <li>Gestão de servidores Linux, bancos de dados e monitoramento de aplicações em produção</li>
            </ul>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg bg-white dark:bg-gray-700">
          <div className='space-y-4'>
            <h4 className='font-semibold text-primary'>❌️ O que não ofereço:</h4>
            <p className='text-primary'>
              Para manter a qualidade, evito áreas onde não entrego meu melhor.
            </p>
            <ul className='text-balance space-y-2 list-disc list-outside ml-5 opacity-90'>
              <li>Não trabalho com Wordpress ou PHP</li>
              <li>Não desenvolvo apps mobile nativos</li>
              <li>Não pego projetos sem escopo definido.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;