import ImageSplitFeatureSection from './ImageSplitFeatureSection';

export default function WorkStyleSection() {
  return (
    <div className="space-y-20">
      <div className='text-center space-y-4'>
        <h2 className="text-3xl font-bold text-primary">
          Meu Estilo de Trabalho
        </h2>
        <p className="text-primary opacity-80">
          Clareza no processo, previsibilidade no ritmo e comunicação direta
        </p>
      </div>
      <ImageSplitFeatureSection
        title="Transparência, agilidade e comunicação clara"
        description={`Você não precisa cobrar, insistir ou adivinhar o andamento do que está sendo feito. Meu foco é reduzir o atrito e facilitar sua vida.
            
            Trabalho de segunda a sexta, das 9h às 17h (GMT-3). Nesse período costumo responder rápido. Fora dele, fico disponível apenas em situações importantes ou combinadas anteriormente, para manter o ritmo sustentável e previsível.
            
            As conversas são objetivas. Explico decisões, compartilho o andamento, aviso quando algo muda, quando existe risco de atraso ou quando surge uma solução melhor no caminho. Não prometo milagres, não escondo problemas e não deixo nada acumular.
            `}
        image="/images/workflow.jpg"
        inverse={true}
      >
      </ImageSplitFeatureSection>
      <ImageSplitFeatureSection
        title="Inteligência Artificial no meu trabalho"
        description={`IA faz parte do meu dia a dia tanto como ferramenta quanto como tecnologia integrada nos projetos que desenvolvo. Modelos como Gemini e ChatGPT me ajudam a acelerar tarefas repetitivas, revisar ideias, gerar rascunhos e explorar alternativas de solução sem perder o controle técnico. 

      Além do uso interno, também integro IA diretamente em aplicações reais: geração automática de textos, resumos, classificação de dados e assistentes especializados. Quando o projeto pede, configuro ainda recursos multimodais, como geração de imagens, síntese de voz, etc.

      No fim, a IA entra como reforço, não substitui o olhar humano, mas serve como apoio técnico e criativo, sempre exigindo revisão manual.`}
        image="/images/ai_cpu.jpg"
        inverse={false}
        imageClassName='object-right'
      />
    </div>
  );
}
