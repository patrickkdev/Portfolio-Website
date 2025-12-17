import SectionHeader from '../shared/SectionHeader';
import ImageSplitFeatureSection from './ImageSplitFeatureSection';

export default function WorkStyleSection() {
  return (
    <div className="space-y-12 lg:space-y-16">
      <SectionHeader 
        eyebrow="Como trabalho" 
        title="Uma visão clara do meu processo e abordagem" 
      />
      <ImageSplitFeatureSection
        title="Responsabilidade e transparência"
        description={
          <p className='mt-6 lg:mt-4 lg:text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
          
            Você não precisa cobrar, insistir ou adivinhar o andamento do que está sendo feito. <strong>Meu foco é reduzir o atrito e facilitar sua vida.</strong> <br /><br />
              
            Sempre explico decisões, compartilho o andamento, aviso quando algo muda, quando existe risco de atraso ou quando surge uma solução melhor no caminho. Não prometo o que não posso entregar, não escondo problemas e não deixo nada acumular. <br /><br />
            
            Atuo de segunda a sexta, das 9h às 17h (GMT-3). Nesse período costumo responder rápido. Fora dele, fico disponível apenas em situações importantes ou combinadas anteriormente, para manter o ritmo sustentável e previsível.
          </p>
        }
        image="/images/workflow.jpg"
        inverse={true}
      >
      </ImageSplitFeatureSection>
      <ImageSplitFeatureSection
        title="Inteligência Artificial"
        description={
          <p className='mt-6 lg:mt-4 lg:text-lg text-primary opacity-80 whitespace-pre-line text-pretty leading-8'>
            Uso ferramentas de IA como apoio técnico e criativo para acelerar tarefas, explorar alternativas, validar ideias e aumentar produtividade, sempre com <strong>revisão humana em todas as etapas.</strong> <br /><br />

            Além do uso interno, integro recursos de IA diretamente em aplicações reais, como geração de descrições de produtos, síntese de voz, geração de imagens e moderação de conteúdo.
          </p>
        }
        image="/images/ai_cpu_2.jpg"
        inverse={false}
        imageClassName='object-right'
      />
    </div>
  );
}
