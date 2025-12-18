import SectionHeader from '../shared/SectionHeader';

const ServiceSection = () => {
  return (
    <section className="space-y-12 lg:space-y-16">
      <SectionHeader
        eyebrow="Escopo"
        title="O que faço — e o que evito"
        subtitle="Clareza desde o início evita fricção depois."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {/* OFFER */}
        <div className="card p-6 space-y-6">
          <header className="space-y-1">
            <p className="text-sm font-medium uppercase tracking-wide opacity-60">
              O que ofereço
            </p>
            <h4 className="text-lg font-semibold">
              Desenvolvimento focado em produto e performance
            </h4>
          </header>

          <ul className="space-y-3 text-pretty">
            {[
              'Criação e manutenção de sites, sistemas, APIs, bots, automações e aplicativos',
              'Implementação prática de recursos de Inteligência Artificial',
              'Integração com meios de pagamento e serviços externos',
              'Gestão de servidores Linux, bancos de dados e aplicações em produção',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current opacity-40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* NOT OFFER */}
        <div className="rounded-xl bg-[var(--surface)] ring-1 ring-[var(--surface-border)] p-6 space-y-6">
          <header className="space-y-1">
            <p className="text-sm font-medium uppercase tracking-wide opacity-60">
              O que não faço
            </p>
            <h4 className="text-lg font-semibold">
              Limites claros para manter qualidade
            </h4>
          </header>

          <p className="opacity-80 text-pretty">
            Para garantir entregas sólidas, evito áreas onde não consigo manter
            o mesmo nível técnico.
          </p>

          <ul className="space-y-3 opacity-90">
            {[
              'Projetos em Wordpress ou PHP',
              'Aplicativos mobile nativos',
              'Trabalhos sem escopo claro ou objetivos definidos',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current opacity-30" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
