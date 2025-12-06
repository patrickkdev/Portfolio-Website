// --- COMPONENTES DE PLACEHOLDER (apenas para este exemplo) ---
const PlaceholderImage = ({ text = 'Imagem' }) => (
  <div className='flex aspect-video w-full items-center justify-center rounded-lg bg-gray-200 text-gray-500 shadow-inner'>
    <span className='text-lg font-medium'>{text}</span>
  </div>
);

export const landingPageSections = [
  {
    id: 'workflow',
    title: 'Como eu trabalho: Previsibilidade e Transparência',
    inverse: true,
    align: 'start',
    left: <img className="rounded-md object-cover h-full object-center" src="/images/workflow.jpg" alt="Fluxo de Trabalho" />,
    right: (
      <div className='space-y-4 text-gray-700'>
        <ul className='list-inside list-disc space-y-2'>
          <li>
            <strong>Comunicação:</strong> Respondo mensagens diariamente, geralmente no início
            da manhã ou fim da tarde.
          </li>
          <li>
            <strong>Atualizações:</strong> Envio atualizações de progresso claras (semanais ou
            por marco de entrega), sem jargões.
          </li>
          <li>
            <strong>Estimativas:</strong> Minhas estimativas de prazo são realistas. Prefiro
            entregar no prazo a prometer o impossível.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'skills',
    title: 'Habilidades: O que eu faço (e o que eu evito)',
    align: 'start',
    left: (
      <div className='space-y-5'>
        <div>
          <h4 className='font-semibold text-gray-900'>Go (Backend)</h4>
          <p className='text-gray-700'>
            Sou fluente em Go para construir APIs e web servers (usando{' '}
            <strong>Echo</strong>). Crio binários únicos, rápidos e de fácil
            manutenção. É minha escolha padrão para qualquer backend robusto.
            Evito complexidade desnecessária e 'over-engineering'.
          </p>
        </div>
        <div>
          <h4 className='font-semibold text-gray-900'>React + TypeScript</h4>
          <p className='text-gray-700'>
            Uso para UIs que <strong>realmente</strong> precisam de estado complexo no
            cliente ou quando o cliente já possui um time de React. Tenho
            experiência sólida em Next.js para SPAs.
          </p>
        </div>
        <div>
          <h4 className='font-semibold text-gray-900'>
            HTMX + Templ (Frontend)
          </h4>
          <p className='text-gray-700'>
            Essa é a combinação que mais acelera meu trabalho em sistemas internos e painéis administrativos. O servidor renderiza tudo, o navegador só atualiza o que muda. Isso reduz a complexidade típica de frontends modernos e deixa o desenvolvimento muito mais rápido. É meu caminho preferido quando o projeto não precisa de uma SPA super interativo com muito estado cliente.
          </p>
        </div>
        <div>
          <h4 className='font-semibold text-gray-900'>
            PostgreSQL & Cloudflare R2
          </h4>
          <p className='text-gray-700'>
            Prefiro <strong>PostgreSQL</strong> para dados relacionais. Para
            armazenamento de objetos (uploads, mídias), uso{' '}
            <strong>Cloudflare R2</strong>, que é performático, compatível com S3 e tem custo previsível.
          </p>
        </div>
      </div>
    ),
    right: <img className="rounded-md object-cover h-full object-right" src="/images/tech-stack.jpg" alt="Stack de Tecnologia" />,
  },
  {
    id: 'services',
    title: 'Serviços (e o que eu não faço)',
    align: 'start',
    left: (
      <div className='space-y-4'>
        {/* Aqui você mapearia seus `services` */}
        <h4 className='font-semibold text-gray-900'>O que eu ofereço:</h4>
        <ul className='list-inside list-disc text-gray-700'>
          <li>Desenvolvimento de Software Sob Medida (Go, React, HTMX, etc)</li>
          <li>Criação/Integração de APIs e Automações de Processos</li>
          <li>Implementação de Inteligência Artificial (Gemini, ChatGPT, etc)</li>
          <li>Integração de Plataformas de pagamento (Stripe, Mercado Pago, Efí, etc)</li>
          <li>Gestão de Servidores Linux e Bancos de Dados (VPS, PostgreSQL)</li>
        </ul>
      </div>
    ),
    right: (
      <div className='rounded-lg bg-gray-50 p-6 shadow-inner'>
        <h4 className='font-semibold text-gray-900'>O que eu não faço:</h4>
        <p className='mt-2 text-gray-700'>
          Para manter a qualidade, evito áreas onde não entrego meu melhor.
        </p>
        <ul className='mt-3 list-inside list-disc space-y-1 text-gray-600'>
          <li>Não trabalho com Wordpress ou PHP</li>
          <li>Não faço marketing digital</li>
          <li>Não desenvolvo apps mobile nativos</li>
          <li>Não pego projetos sem escopo definido. ('ideias')</li>
        </ul>
        <p className='mt-3 text-sm text-gray-500'>
          Prefiro atuar onde consigo garantir resultado e previsibilidade.
        </p>
      </div>
    ),
  },
  {
    id: 'for-contractors',
    title: 'Para Contratantes',
    inverse: true,
    align: 'start',
    left: <img className="rounded-md object-cover h-full object-center" src="/images/handshake.jpg" alt="Aperto de mão" />,
    right: (
      <div className='space-y-4 text-gray-700'>
        <p className='text-lg font-medium'>
          Meu compromisso é reduzir seu risco.
        </p>
        <ul className='list-inside list-disc space-y-2'>
          <li>
            <strong>Onboarding:</strong> A primeira semana é dedicada a alinhar
            expectativas, configurar ambientes e definir o plano de entregas.
          </li>
          <li>
            <strong>Deadlines:</strong> Eu trato prazos com seriedade. Você será
            o primeiro a saber se houver qualquer risco, e já virei com um plano
            de ação.
          </li>
          <li>
            <strong>Plano de recuperação:</strong> Se algo que eu entreguei
            quebrar, é minha prioridade resolver, sem custo adicional.
          </li>
          <li>
            <strong>Atitude:</strong> Você está contratando um profissional
            maduro que entende de negócios, não apenas um programador.
          </li>
        </ul>
      </div>
    ),
  },
];
