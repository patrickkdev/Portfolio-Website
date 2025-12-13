
export default function FaqSection() {
  const faqsList = [
    {
      q:'Você trabalha com contrato mensal ou por projeto?',
      a:'Prefiro trabalhar por projeto com escopo fechado, mas também aceito contratos mensais para manutenção contínua, onde a alocação de horas é faturada a R$ 60/hora.'
    },
    {
      q:'Qual é sua política para retrabalho?',
      a:'Tudo que estiver no escopo será ajustado até aprovação. Mudanças significativas viram um mini-projeto separado, sempre com orçamento claro.'
    },
    {
      q:'Você está aberto a propostas de emprego integral?',
      a:'Sim. Embora meu foco principal seja o desenvolvimento de projetos sob medida, estou aberto a avaliar propostas de emprego integral (CLT ou PJ), desde que a posição seja 100% home office.'
    },
    {
      q:'Qual é o seu nível de inglês?',
      a:'Para o ambiente de desenvolvimento, minha proficiência em escuta, leitura e escrita é alta. Todo o código, documentação e commit messages são escritos em inglês, e busco ativamente conteúdo e fóruns no idioma. Minha comunicação falada (conversação) é limitada, mas para comunicação assíncrona, não há barreiras.'
    },
    {
      q:'Quanto tempo leva para entregar um site institucional simples?',
      a:'Com escopo e design definidos, normalmente entre duas e três semanas.'
    },
  ];

  return (
    <section className='py-14'>
      <div className="max-w-screen-xl mx-auto px-4 gap-12 md:flex md:px-8">
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
    </section>
  );
};
