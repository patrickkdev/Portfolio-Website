
const ServiceSection = () => {
  return (
    <>
      <div className="space-y-4 max-w-6xl mx-auto gap-12 flex flex-col">
        <div className='text-center space-y-4'>
          <h2 className="text-3xl font-bold text-primary">
            Serviços e Escopo de Trabalho
          </h2>
          <p className="text-primary opacity-80">
            Esta seção mostra de forma direta onde entrego meus melhores resultados  
            e quais tipos de projetos prefiro não assumir.
          </p>
        </div>
        <div className='grid gap-8 md:grid-cols-2'>
          <div className='bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg bg-white dark:bg-gray-700'>
            <div className='space-y-4'>
              <h4 className='font-semibold text-primary'>✅️ O que eu faço:</h4>
              <ul className='list-inside list-disc text-primary'>
                <li>Criação e manutenção de sites, sistemas web, APIs, bots e aplicações personalizadas</li>
                <li>Integração de APIs e automações que reduzem trabalho manual</li>
                <li>Implementação prática de recursos de Inteligência Artificial</li>
                <li>Integração com plataformas de pagamento e serviços externos</li>
                <li>Gestão de servidores Linux, bancos de dados e monitoramento de aplicações em produção</li>
              </ul>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg bg-white dark:bg-gray-700">
            <div className='space-y-4'>
              <h4 className='font-semibold text-primary'>❌️ O que eu não faço:</h4>
              <p className='mt-2 text-primary'>
                Para manter a qualidade, evito áreas onde não entrego meu melhor.
              </p>
              <ul className='mt-3 list-inside list-disc space-y-1 opacity-80'>
                <li>Não trabalho com Wordpress ou PHP</li>
                <li>Não desenvolvo apps mobile nativos</li>
                <li>Não pego projetos sem escopo definido.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <SectionTitle>Serviços</SectionTitle>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <PicBackgroundCard key={index} name={service.name} description={service.description} image={service.image} />
        ))}
      </div> */}
    </>
  );
};

export default ServiceSection;