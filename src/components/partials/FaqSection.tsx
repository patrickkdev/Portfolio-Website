import SectionHeader from '../shared/SectionHeader';

export default function FaqSection() {
  const faqsList = [
    {
      q:'Você trabalha com contrato ou por projeto?',
      a:'Atuo com flexibilidade. Trabalho por projeto com escopo fechado e também aceito contrato para manutenção contínua, onde a hora é faturada a R$ 60.'
    },
    {
      q:'Quanto tempo leva para entregar um site institucional simples?',
      a:'Com escopo e design definidos, normalmente entre duas e três semanas.'
    },
    {
      q:'Qual é sua política para retrabalho?',
      a:'Tudo que estiver no escopo será ajustado até aprovação. Mudanças significativas viram um mini-projeto separado, sempre com orçamento claro.'
    },
    {
      q:'Você está aberto a propostas de emprego integral?',
      a:'Sim. Estou sempre aberto a avaliar propostas de emprego integral (CLT ou PJ), desde que a posição seja 100% remota.'
    },
    {
      q:'Qual é o seu nível de inglês? 🇬🇧🇺🇸',
      a:'Inglês avançado para leitura, escrita e escuta. Adoto o idioma exclusivamente em código, commits, documentações, estudos e interações em comunidades de programação online.'
    },
  ];

  return (
    <div className="w-full mx-auto gap-12 lg:flex">
      <SectionHeader eyebrow="Perguntas Frequentes" title="Tire suas dúvidas antes de começarmos." className="md:sticky md:top-24 md:self-start max-w-lg" />
      <div className='flex-1 mt-12 lg:mt-0'>
        <ul className='space-y-4 divide-y'>
          {faqsList.map((item, idx) => (
            <li
              className="py-5"
              key={idx}>
              <summary
                className="flex items-center justify-between font-semibold text-primary">
                {item.q}
              </summary>
              <p
                dangerouslySetInnerHTML={{ __html: item.a }}
                className='mt-3 opacity-80 text-pretty'>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
