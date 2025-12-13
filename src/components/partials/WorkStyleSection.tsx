import ImageSplitFeatureSection from './ImageSplitFeatureSection';

export default function WorkStyleSection() {
  return (
    <div className="space-y-20">
      <div className='text-center space-y-4'>
        <h2 className="text-3xl font-bold text-primary">
          Meu estilo de trabalho
        </h2>
      </div>
      <ImageSplitFeatureSection
        title="Responsabilidade e transparência"
        description={`Você não precisa cobrar, insistir ou adivinhar o andamento do que está sendo feito. Meu foco é reduzir o atrito e facilitar sua vida.
            
          As conversas são objetivas. Explico decisões, compartilho o andamento, aviso quando algo muda, quando existe risco de atraso ou quando surge uma solução melhor no caminho. Não prometo o que não posso entregar, não escondo problemas e não deixo nada acumular.
          
          Atuo de segunda a sexta, das 9h às 17h (GMT-3). Nesse período costumo responder rápido. Fora dele, fico disponível apenas em situações importantes ou combinadas anteriormente, para manter o ritmo sustentável e previsível.
            `}
        image="/images/workflow.jpg"
        inverse={true}
      >
      </ImageSplitFeatureSection>
      <ImageSplitFeatureSection
        title="Inteligência Artificial"
        description={`Uso ferramentas de IA como apoio técnico e criativo para acelerar tarefas, explorar alternativas, validar ideias e aumentar produtividade sempre com controle técnico e revisão humana.

          Além do uso interno, integro recursos de IA diretamente em aplicações reais, como geração de descrições de produtos, síntese de voz, geração de imagens e moderação de conteúdo.
        `}
        image="/images/ai_cpu_2.jpg"
        inverse={false}
        imageClassName='object-right'
      />
    </div>
  );
}
