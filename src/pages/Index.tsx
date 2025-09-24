import { ServiceCard } from "@/components/ServiceCard";
import { TrendingSection } from "@/components/TrendingSection";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Button } from "@/components/ui/button";
import { Play, Instagram, Mail, MessageCircle, CheckCircle, Target, Clock, BarChart2, Sparkles } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const openWhatsApp = (text: string) => {
  const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
};

const services = [
  {
    id: "conecte-se",
    title: "Conecte-se",
    description: "Fale com um especialista agora e dê o primeiro passo para transformar seu negócio digital.",
    fullDescription: "Conecte-se comigo e descubra como posso transformar seu negócio digital. Oferecemos consultoria personalizada, análise completa da sua presença online e estratégias customizadas para acelerar seus resultados. Não perca tempo - sua concorrência não está esperando!",
    image: "/lovable-uploads/c91dd02e-76d5-4b74-9d8c-0be8f04aa274.png",
    category: "whatsapp" as const,
    tags: ["Consultoria", "WhatsApp", "Estratégia"],
    features: [
      "Consultoria personalizada de 60 minutos",
      "Análise completa da sua presença digital",
      "Estratégia customizada para seu negócio",
      "Plano de ação detalhado",
      "Suporte via WhatsApp por 30 dias"
    ],
    ctaText: "🚀 Quero uma Consultoria Gratuita",
    ctaAction: () => {
      openWhatsApp("Olá, Edrey! Quero conhecer seus serviços e começar agora mesmo. Pode me ajudar?");
    }
  },
  {
    id: "edicao-video",
    title: "Edição de Vídeo",
    description: "Transforme momentos em obras-primas com edições criativas e profissionais.",
    fullDescription: "Crie conteúdo visual que engaja, converte e marca presença. Nossa edição vai além do básico - criamos narrativas visuais que conectam com sua audiência, aumentam o engajamento e impulsionam suas vendas. Do conceito à entrega, cuidamos de cada detalhe.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2F537356fffd254fbabb5d500fd3c1e842?format=webp&width=800",
    category: "video" as const,
    tags: ["Edição", "Cinema", "Criativo"],
    features: [
      "Edição profissional em 4K",
      "Motion graphics e animações",
      "Correção de cor cinematográfica",
      "Trilha sonora personalizada",
      "Entrega em múltiplos formatos",
      "Revisões ilimitadas"
    ],
    ctaText: "🎬 Quero Edições Profissionais",
    ctaAction: () => {
      openWhatsApp("Olá, Edrey! Quero transformar meus vídeos com uma edição profissional. Vamos conversar? 🎬");
    }
  },
  {
    id: "automacao",
    title: "Gestão de Automação",
    description: "Automatize processos, ganhe tempo e aumente a eficiência com fluxos inteligentes.",
    fullDescription: "Revolucione seu negócio com automação inteligente. Criamos fluxos que trabalham 24/7 para você: desde a captação de leads até o pós-venda. Aumente suas conversões, reduza custos operacionais e escale seu negócio sem aumentar sua equipe.",
    image: "/lovable-uploads/2112817c-5e06-40a0-aad7-ebbb777580ef.png",
    category: "automation" as const,
    tags: ["AI", "Automação", "Eficiência"],
    features: [
      "Automação de vendas completa",
      "Chatbots inteligentes",
      "Integração com CRM",
      "Nutrição de leads automatizada",
      "Relatórios em tempo real",
      "Suporte técnico especializado"
    ],
    ctaText: "🤖 Quero Automatizar Meu Negócio",
    ctaAction: () => {
      openWhatsApp("Olá, Edrey! Quero automatizar meus processos e escalar meu negócio com N8N. Pode me explicar como funciona? 🤖");
    }
  },
  {
    id: "landing-page",
    title: "Projeto Landing Page",
    description: "Compre sua landing page focada em conversão, rápida e pronta para vender.",
    fullDescription: "Landing pages profissionais, responsivas e otimizadas para conversão. Estruturamos o conteúdo, design e integrações (como WhatsApp e formulários) para capturar leads e gerar vendas. Performance, SEO básico e testes de CTAs inclusos.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2F205a51b1bc9c48cd8e04f219108385e5?format=webp&width=800",
    category: "video" as const,
    tags: ["Alta Conversão", "Responsivo", "SEO"],
    features: [
      "Design responsivo e moderno",
      "Copy orientada à conversão",
      "Integração com WhatsApp e formulários",
      "SEO básico e performance",
      "Publicação e suporte inicial"
    ],
    ctaText: "🛒 Comprar Projeto Agora",
    ctaAction: () => {
      openWhatsApp("Olá, Edrey! Quero comprar um projeto de Landing Page focada em conversão. Pode me passar os próximos passos?");
    }
  },
  {
    id: "social-media",
    title: "Social Media Pro",
    description: "Gestão estratégica de redes sociais para levar sua marca do zero ao topo.",
    fullDescription: "Domine as redes sociais e construa uma marca que todos lembram. Nossa gestão vai além de posts bonitos - criamos estratégias que geram resultados reais: mais seguidores, maior engajamento e principalmente, mais vendas. Sua marca merece estar no topo!",
    image: "/lovable-uploads/303f837b-955b-4c81-8231-012ba6c59d55.png",
    category: "social" as const,
    tags: ["Social Media", "Estratégia", "Crescimento"],
    features: [
      "Estratégia de conteúdo personalizada",
      "Posts e stories diários",
      "Gestão de comunidade",
      "Campanhas de tráfego pago",
      "Relatórios de performance",
      "Criação de identidade visual"
    ],
    ctaText: "📱 Quero Dominar as Redes Sociais",
    ctaAction: () => {
      openWhatsApp("Olá, Edrey! Quero uma gestão de Social Media estratégica para minha marca. Pode me ajudar? 📱");
    }
  }
];

const servicesOrdered = [...services.filter((s) => s.id !== "conecte-se"), services.find((s) => s.id === "conecte-se")!];

export default function Index() {
  const handleHeroCTA = () => {
    openWhatsApp("Olá, Edrey! Quero começar agora e transformar minhas redes em vendas reais. 🚀");
  };

  const sectionCTA = (label = "Quero começar agora") => (
    <div className="mt-6 flex justify-center">
      <Button
        size="lg"
        className="service-whatsapp border-0 px-6 py-3 text-base font-semibold group hover:scale-105 transition-all duration-300"
        onClick={handleHeroCTA}
      >
        <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
        {label}
      </Button>
    </div>
  );

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden py-10">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(236,72,153,0.1),transparent_50%)]" />


        {/* Bottom fade overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 md:h-28 bg-gradient-to-t from-background to-transparent pointer-events-none z-[6]" />

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-whatsapp/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-video/10 rounded-full blur-xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-automation/10 rounded-full blur-xl animate-float" style={{ animationDelay: "4s" }} />

        {/* Small portrait bottom-right */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2F7203e7666f0f47b79347c72d4b7ec15d?format=webp&width=1200"
          alt="Edrey"
          className="block absolute left-2 sm:left-4 md:left-auto md:right-8 z-[30] w-20 sm:w-24 md:w-40 lg:w-56 h-auto object-cover object-[60%_20%] shadow-[0_30px_90px_rgba(0,0,0,0.6)] pointer-events-none select-none bottom-36 sm:bottom-44 md:bottom-24 lg:bottom-16 top-auto animate-netflix-fade"
          style={{ WebkitMaskImage: "radial-gradient(120% 100% at 65% 35%, rgba(255,255,255,1) 58%, rgba(255,255,255,0) 78%)", maskImage: "radial-gradient(120% 100% at 65% 35%, rgba(255,255,255,1) 58%, rgba(255,255,255,0) 78%)", animationDelay: "0.25s" }}
          loading="eager"
          decoding="async"
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto animate-netflix-fade bg-black/35 backdrop-blur-sm rounded-xl px-4 md:px-6 py-4 md:py-5 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-3 leading-tight text-foreground font-heading tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              Transforme suas redes em vendas reais 🚀
            </h1>
            <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-automation to-video/80"></div>
            
            <p className="text-base md:text-lg text-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
              Gestão de Social Media, Edição de Vídeo, Automação e Landing Pages em um só lugar, para você vender mais e trabalhar menos.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-xs md:text-sm">
              <button type="button" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 rounded-full bg-white/5 border border-border/30 cursor-pointer hover:bg-white/10 transition-colors">Edição de Vídeo</button>
              <button type="button" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 rounded-full bg-white/5 border border-border/30 cursor-pointer hover:bg-white/10 transition-colors">Automação</button>
              <button type="button" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 rounded-full bg-white/5 border border-border/30 cursor-pointer hover:bg-white/10 transition-colors">Landing Pages</button>
              <button type="button" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="px-3 py-1 rounded-full bg-white/5 border border-border/30 cursor-pointer hover:bg-white/10 transition-colors">Social Media</button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
              <Button
                size="lg"
                className="service-whatsapp border-0 px-6 py-3 text-base font-semibold group hover:scale-105 transition-all duration-300"
                onClick={handleHeroCTA}
              >
                <MessageCircle className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Quero começar agora
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-border/50 bg-background/20 backdrop-blur-sm hover:bg-background/30 px-6 py-3 text-base group transition-all duration-300"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Ver Serviços
              </Button>
            </div>

            <div className="text-xs md:text-sm text-muted-foreground">
              ⭐ Transformando negócios digitais desde 2020 • +100 projetos entregues
            </div>
          </div>
        </div>

      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">O que você vai conquistar com meus serviços</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">Resultados práticos que impactam seu caixa e seu tempo.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl border border-border/30 bg-card/60 p-4">
              <div className="flex items-start gap-3">
                <Target className="h-6 w-6 text-automation" />
                <div>
                  <h3 className="font-semibold">Mais leads qualificados</h3>
                  <p className="text-sm text-muted-foreground">Estratégias e páginas pensadas para atrair quem tem potencial real de compra.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/30 bg-card/60 p-4">
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-video" />
                <div>
                  <h3 className="font-semibold">Economia de tempo</h3>
                  <p className="text-sm text-muted-foreground">Automação e gestão que tiram tarefas manuais do seu dia a dia.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/30 bg-card/60 p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-social" />
                <div>
                  <h3 className="font-semibold">Autoridade com conteúdo</h3>
                  <p className="text-sm text-muted-foreground">Vídeos e social que posicionam sua marca como referência.</p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border border-border/30 bg-card/60 p-4">
              <div className="flex items-start gap-3">
                <BarChart2 className="h-6 w-6 text-whatsapp" />
                <div>
                  <h3 className="font-semibold">Estrutura para escalar</h3>
                  <p className="text-sm text-muted-foreground">Métricas, performance e funis prontos para crescer com previsibilidade.</p>
                </div>
              </div>
            </div>
          </div>
          {sectionCTA()}
        </div>
      </section>

      {/* Services Catalog */}
      <section id="services" className="pt-8 md:pt-10 pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Escolha seu próximo blockbuster digital. Cada serviço é uma jornada única 
              para elevar sua presença online ao próximo nível.
            </p>
          </div>

          <div>
            <Carousel opts={{ align: "start", dragFree: true }}>
              <CarouselContent>
                {servicesOrdered.map((service, index) => (
                  <CarouselItem
                    key={service.id}
                    className="basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                  >
                    <div
                      className="animate-netflix-fade"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <ServiceCard {...service} variant="poster" onCardClick={service.id === 'conecte-se' ? () => { openWhatsApp("Olá, Edrey! Quero conhecer seus serviços e começar agora mesmo."); } : undefined} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          {sectionCTA()}
        </div>
      </section>

      {/* Trending Section */}
      <TrendingSection />


      {/* About Me */}
      <section id="about" className="py-10 md:py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Quem é Edrey?</h2>
              <p className="text-muted-foreground mb-4">Estrategista digital com foco em conversão. Desde 2023, ajudo marcas e negócios a venderem mais usando suas redes sociais. Meu diferencial é integrar criação, dados e tecnologia, com várias ferramentas diferentes, para gerar crescimento previsível.</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-automation" /><span>+50 clientes satisfeitos no mercado</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-video" /><span>Estratégia integrada focando em resultado</span></li>
                <li className="flex items-start gap-3"><CheckCircle className="h-5 w-5 text-social" /><span>Diversos cursos na área</span></li>
              </ul>
              {sectionCTA()}
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-2xl overflow-hidden border border-border/40">
                <img src="https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2F69450ab2e9424ab89b774620f04c1e21?format=webp&width=800" alt="Edrey" className="w-full h-full object-contain bg-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scarcity & Bonus */}
      <section id="offer" className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border border-border/40 bg-card/70 p-6 text-center">
            <div className="text-sm text-yellow-500 font-semibold">Agenda limitada</div>
            <h3 className="text-2xl md:text-3xl font-bold mt-1">Vagas para novos clientes somente este mês</h3>
            <p className="text-muted-foreground mt-2">Garanta sua posição para começar ainda esta semana.</p>
            <div className="mt-4 rounded-lg border border-border/30 bg-background/60 p-4">
              <div className="text-sm"><strong>Bônus:</strong> ao adquirir dois serviços, você ganha uma consultoria gratuita de anúncios.</div>
            </div>
            {sectionCTA()}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-10 md:py-14">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Ainda tem dúvidas?</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-6">Perguntas frequentes para você decidir com segurança.</p>
          <div className="max-w-3xl mx-auto rounded-xl border border-border/40 bg-card/60 p-2 md:p-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="q1">
                <AccordionTrigger>Funciona para negócios locais?</AccordionTrigger>
                <AccordionContent>
                  Sim. Já aplicamos as estratégias em clínicas, restaurantes e varejo local, com foco em captar leads interessados e marcar presença na região.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>Como funciona o processo de contratação?</AccordionTrigger>
                <AccordionContent>
                  Conversamos pelo WhatsApp, entendemos suas metas, definimos o plano, prazo e investimento. Você aprova e iniciamos a execução com check-ins semanais.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Quanto tempo leva para ver resultados?</AccordionTrigger>
                <AccordionContent>
                  Depende do serviço e do ponto de partida. Em geral, melhorias de conversão e organização aparecem nas primeiras semanas, e ganhos consistentes em 30 a 60 dias.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q4">
                <AccordionTrigger>Posso contratar só a Landing Page?</AccordionTrigger>
                <AccordionContent>
                  Sim. A Landing Page é entregue completa, com integrações e performance. Se quiser, podemos integrar com Social Media e Automação para potencializar os resultados.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          {sectionCTA("Quero tirar minhas dúvidas no WhatsApp")}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Edrey</h3>
              <p className="text-muted-foreground">
                Criatividade, Estratégia e Resultados.
              </p>
            </div>

            <div className="flex justify-center gap-6">
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-social group"
                onClick={() => window.open('https://www.instagram.com/edreyraff_/', '_blank')}
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="ml-2">Instagram</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-whatsapp group"
                onClick={() => openWhatsApp("Olá, Edrey! Quero falar com você pelo WhatsApp sobre seus serviços.")}
              >
                <MessageCircle className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="ml-2">WhatsApp</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-video group"
                onClick={() => window.open('mailto:edrey_rafael@outlook.com', '_blank')}
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="ml-2">E-mail</span>
              </Button>
            </div>

            <div className="text-center text-sm text-muted-foreground pt-6 border-t border-border/20">
              <p>© 2024 Edrey. Todos os direitos reservados.</p>
              <p className="mt-2">Feito com ❤️ para transformar negócios digitais.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
