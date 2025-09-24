import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Target, Award, Hourglass } from "lucide-react"; 

const highlights = [
  {
    id: 1,
    title: "Edição de Vídeo",
    description: "“Vídeos editados estrategicamente que prenderam a audiência até o final e aumentaram o engajamento em campanhas.”",
    metric: "+75%",
    icon: TrendingUp,
    category: "Edição de Vídeo",
    color: "text-video-glow",
  },
  {
    id: 2,
    title: "Automação (N8N)",
    description: "“Automatização de fluxos de leads e relatórios, economizando horas de trabalho da equipe e aumentando a velocidade de resposta.”",
    metric: "-60%",
    icon: Hourglass,
    category: "Automação (n8n)",
    color: "text-automation-glow",
  },
  {
    id: 3,
    title: "Landing Pages",
    description: "“Landing Pages criadas com foco em alta performance, transformando visitantes em clientes de forma simples e eficiente.”",
    metric: "+35%",
    icon: Target,
    category: "Landing Pages",
    color: "text-orange-400",
  },
  {
    id: 4,
    title: "Criatividade",
    description: "“Reconhecimento por desenvolver soluções digitais criativas que se adaptam à necessidade de cada cliente.”",
    metric: "#1",
    icon: Award,
    category: "Criatividade",
    color: "text-social-glow",
  },
];

export const TrendingSection = () => {
  return (
    <section className="pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">Em Alta</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Resultados reais que transformaram negócios e construíram histórias de sucesso
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.id}
              className="netflix-card bg-card/50 backdrop-blur-sm border-border/30 hover:border-border/50 group animate-netflix-fade"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <highlight.icon className={`h-8 w-8 ${highlight.color} group-hover:animate-pulse`} />
                    <Badge variant="outline" className="text-xs border-border/50">
                      {highlight.category}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className={`text-2xl font-bold ${highlight.color} glow-text`}>
                      {highlight.metric}
                    </div>
                    <h3 className="font-semibold text-foreground line-clamp-2">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-6">
          <p className="text-lg text-muted-foreground mb-4">
            Quer ser o próximo case de sucesso?
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-primary/20 to-transparent rounded-full border border-primary/30">
            <span className="text-primary font-medium">
              ✨ Vamos conversar sobre seu projeto
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
