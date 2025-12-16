
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
      a:'Minha proficiência em fala é limitada, mas em escuta, leitura e escrita é muito alta. Todo o meu código, documentação e mensagens de commit são escritos exclusivamente em inglês. Além disso, adoto o idioma como padrão em minha rotina de estudos e nas interações em comunidades globais de programação."'
    },
  ];

  return (
    <div className="w-full mx-auto gap-12 md:flex">
      <div className='flex-1 md:sticky md:top-24 md:self-start'>
        <div className="max-w-lg">
          <h3 className='font-semibold text-primary-500'>
            Perguntas Frequentes
          </h3>
          <p className='mt-3 text-primary text-3xl font-bold sm:text-4xl'>
            Tire suas dúvidas antes de começarmos.
          </p>
        </div>
      </div>
      <div className='flex-1 mt-12 md:mt-0'>
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
                className='mt-3 text-primary opacity-80 leading-relaxed'>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
