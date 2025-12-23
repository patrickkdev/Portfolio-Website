import SectionHeader from '../shared/SectionHeader';

const ScopeSection = () => {
  return (
    <section className="space-y-12 lg:space-y-16">
      <SectionHeader
        eyebrow="Escopo"
        title="O que não faço"
        subtitle="Para garantir entregas consistentes, evito áreas onde não consigo manter o mesmo nível técnico."
      />
      <ul className="space-y-3 opacity-90 list-disc pl-2 lg:pl-8">
        {[
          'Desenvolvimento em Wordpress ou PHP',
          'Aplicativos mobile nativos',
          'Projetos sem requisitos claros',
        ].map((item) => (
          <li key={item} className="flex gap-3 text-pretty items-center">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current opacity-30" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ScopeSection;
