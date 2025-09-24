import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, CheckCircle } from "lucide-react";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  category: "whatsapp" | "video" | "automation" | "social";
  features: string[];
  ctaText: string;
  ctaAction: () => void;
}

export const ServiceModal = ({
  isOpen,
  onClose,
  title,
  description,
  image,
  category,
  features,
  ctaText,
  ctaAction,
}: ServiceModalProps) => {
  const isAutomation = category === "automation";
  const isLanding = title.toLowerCase().includes("landing");
  const isSocial = category === "social" || title.toLowerCase().includes("social");
  const isVideo = (category === "video" || title.toLowerCase().includes("vídeo") || title.toLowerCase().includes("video")) && !isLanding;
  const baseVideoUrl = "https://www.youtube.com/embed/zH8XFNf0_s4?rel=0&modestbranding=1&playsinline=1&enablejsapi=1";
  const iframeSrc = isVideo ? (isOpen ? `${baseVideoUrl}&autoplay=1` : baseVideoUrl) : undefined;
  const automationYoutubeBase = "https://www.youtube.com/embed/-ZrBWdfw_x0?rel=0&modestbranding=1&playsinline=1&enablejsapi=1";
  const automationIframeSrc = isAutomation ? (isOpen ? `${automationYoutubeBase}&autoplay=1` : automationYoutubeBase) : undefined;
  const categoryStyles = {
    whatsapp: "service-whatsapp",
    video: "service-video",
    automation: "service-automation", 
    social: "service-social",
  };

  const categoryColors = {
    whatsapp: "text-whatsapp-glow",
    video: "text-video-glow",
    automation: "text-automation-glow",
    social: "text-social-glow",
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`w-[92vw] sm:w-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-card/95 backdrop-blur-lg border-border/50 p-0 rounded-2xl max-h-[70vh] sm:max-h-[75vh] overflow-y-auto overflow-x-hidden`}>
        <div className="relative">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon" 
            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>

          {/* Header media */}
          {isVideo || isAutomation ? (
            <div className="relative p-0" />
          ) : (
            <div className={`relative h-52 md:h-60 overflow-hidden`}>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-4 md:p-8 overflow-x-hidden">
            {isVideo ? (
              <>
                <DialogHeader className="space-y-2 mb-4 text-center">
                  <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    Veja a diferença que uma boa edição faz
                  </DialogTitle>
                </DialogHeader>

                {/* Vídeo destaque */}
                <div className="mb-6">
                  <div className="relative w-full rounded-xl overflow-hidden border border-border/40 aspect-[16/9]">
                    <iframe
                      key={isOpen ? "open" : "closed"}
                      src={iframeSrc}
                      title="Antes e Depois - Edição de Vídeo"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Descriç��o */}
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Um vídeo cru pode até contar uma história, mas com cortes estratégicos, trilha sonora certa e identidade visual profissional, ele prende a atenção e gera impacto real. Essa é a diferença entre simplesmente postar… e realmente engajar.
                </p>

                {/* O que você ganha */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">O que você ganha com minhas edições</h4>
                  <div className="grid gap-2">
                    {[
                      "Conteúdo mais dinâmico e atrativo",
                      "Melhor retenção da audiência",
                      "Qualidade profissional que gera autoridade",
                      "Estilo adaptado para Reels, Shorts ou Ads",
                      "Correção de cor e áudio para uma experiência imersiva",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-video-glow" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prova social */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Feedbacks de clientes</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2Fda0981e29b024abd9d3d9d502de63cd5?format=webp&width=800" alt="Depoimento 1" className="rounded-lg border border-border/40 w-full object-cover" />
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2F57d85ff4332f49d4b93a3223daa4309a?format=webp&width=800" alt="Depoimento 2" className="rounded-lg border border-border/40 w-full object-cover" />
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 space-y-3">
                  <Button
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold bg-gradient-to-r from-video to-video/80 text-white border-0 hover:brightness-110 hover:scale-105 transition-transform duration-300 whitespace-normal break-words"
                    onClick={() => {
                      const msg = "Olá, Edrey! Vi seu portfólio de edição e quero transformar meus vídeos com você. Pode me passar os detalhes?";
                      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank');
                      onClose();
                    }}
                  >
                    👉 Quero transformar meus vídeos 🚀
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold border-border/50 bg-background/40 hover:bg-background/60"
                    onClick={() => {
                      const msg = "Olá, Edrey! Quero começar agora com um pacote de edição de vídeos.";
                      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank');
                      onClose();
                    }}
                  >
                    Quero começar agora
                  </Button>
                </div>
              </>
            ) : isLanding ? (
              <>
                <DialogHeader className="space-y-2 mb-4 text-center">
                  <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    Landing Pages que Convertem
                  </DialogTitle>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Sua vitrine digital que transforma cliques em clientes. Landing Pages modernas, rápidas e feitas para vender.
                  </p>
                </DialogHeader>

                {/* Exemplos */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {/* Projeto real */}
                  <a
                    href="https://clinicainove.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-border/50 bg-background/60 p-4 group block"
                    aria-label="Abrir exemplo real de Landing Page"
                  >
                    <div className="text-xs text-muted-foreground mb-2">Projeto real (clique para visitar)</div>
                    <div className="relative rounded-xl overflow-hidden border border-border/40">
                      <img src="https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2Ffd3eaf6d54d840a29f1ae48dad4dd6ad?format=webp&width=800" alt="Landing Page Clínica Inove" className="w-full h-48 md:h-56 object-cover" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                      <div className="absolute bottom-2 right-2 px-2 py-1 text-xs rounded bg-black/60 text-white">Visitar site ↗</div>
                    </div>
                  </a>
                  {/* Exemplo genérico */}
                  <div className="rounded-xl border border-border/50 bg-background/60 p-4">
                    <div className="text-xs text-muted-foreground mb-2">Exemplo genérico</div>
                    <div className="rounded-xl overflow-hidden border border-border/40">
                      <img src="https://cdn.builder.io/api/v1/image/assets%2F403b9360bc594a06973aa2dafa172b04%2F5ebe390ae91d48fb88903af9c652b0cc?format=webp&width=800" alt="Landing Page genérica" className="w-full h-48 md:h-56 object-cover" />
                    </div>
                  </div>
                </div>

                {/* Diferencial */}
                <p className="text-foreground/90 leading-relaxed mb-4">
                  Criamos páginas focadas em conversão, com design estratégico, copywriting persuasivo e integrações que realmente trazem resultado.
                </p>

                {/* Incluso */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">O que está incluído</h4>
                  <div className="grid gap-2">
                    {[
                      "Design responsivo (desktop + mobile)",
                      "Estrutura focada em conversão (CTA, prova social, escaneabilidade)",
                      "Integração com CRM, WhatsApp ou e-mail",
                      "Instalação de Pixel/Tag Manager para rastrear resultados",
                      "Velocidade otimizada (não trava no celular do cliente)",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Prova social */}
                <div className="mb-6 rounded-lg border border-border/40 p-4 bg-card/60">
                  <div className="text-sm text-muted-foreground">
                    Landing Page criada para um negócio local → aumento de 45% nas conversões em 30 dias.
                  </div>
                </div>

                {/* Benefícios */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Benefícios diretos</h4>
                  <div className="grid gap-2">
                    {[
                      "Mais leads sem gastar mais em anúncios",
                      "Mais credibilidade e profissionalismo",
                      "Métricas reais para controle total dos resultados",
                    ].map((b, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-orange-400" />
                        <span className="text-foreground/80">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-2 space-y-3">
                  <Button
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold bg-gradient-to-r from-orange-500 to-orange-600 text-white border-0 hover:brightness-110 hover:scale-105 transition-transform duration-300 whitespace-normal break-words"
                    onClick={() => {
                      const msg = "Olá, Edrey! 👋 Acabei de ver sua página e quero uma Landing Page de Alta Conversão para o meu negócio. Pode me passar mais detalhes sobre como funciona?";
                      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank');
                      onClose();
                    }}
                  >
                    👉 Quero minha Landing Page de Alta Conversão 🚀
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold border-border/50 bg-background/40 hover:bg-background/60"
                    onClick={() => {
                      const msg = "Olá, Edrey! Quero começar agora com a criação da minha Landing Page.";
                      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank');
                      onClose();
                    }}
                  >
                    Quero começar agora
                  </Button>
                </div>
              </>
            ) : isSocial ? (
              <>
                <DialogHeader className="space-y-2 mb-4 text-center">
                  <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    Social Media
                  </DialogTitle>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Serviço temporariamente indisponível.
                  </p>
                </DialogHeader>

                <div className="rounded-lg border border-border/40 p-4 bg-card/60 text-center">
                  <p className="text-foreground/90">
                    No momento não estamos aceitando novos projetos de Social Media. Em breve novidades.
                  </p>
                </div>
              </>
            ) : isAutomation ? (
              <>
                <DialogHeader className="space-y-2 mb-4 text-center">
                  <DialogTitle className="text-2xl md:text-3xl font-extrabold tracking-tight text-foreground">
                    Automatize processos, ganhe tempo e foque no que importa.
                  </DialogTitle>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Deixe a tecnologia trabalhar por você 🤖
                  </p>
                </DialogHeader>

                {/* Vídeo destaque automação */}
                <div className="mb-6 relative">
                  <div className="relative w-full rounded-xl overflow-hidden border border-border/40 aspect-[16/9] bg-black">
                    <iframe
                      key={isOpen ? "auto-open" : "auto-closed"}
                      src={automationIframeSrc}
                      title="Automação n8n - demonstração"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-2 text-center">
                    Se o vídeo não carregar, <a href="https://youtu.be/-ZrBWdfw_x0" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground">abra em nova aba</a>.
                  </div>
                  <div className="text-xs text-muted-foreground mt-1 text-center">
                    Veja na prática como a automação conecta ferramentas e elimina tarefas manuais.
                  </div>
                </div>

                <p className="text-foreground/90 leading-relaxed mb-4">
                  Com o N8N, criamos fluxos inteligentes que integram suas ferramentas favoritas — WhatsApp, CRM, planilhas, e-mail e muito mais. Isso significa menos trabalho manual, respostas mais rápidas e processos sem erros.
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Exemplos práticos</h4>
                  <div className="grid gap-2">
                    {[
                      "Novo lead preenche formulário → mensagem automática no WhatsApp",
                      "Dados de clientes organizados em planilhas/CRM",
                      "Relatórios de anúncios enviados no seu e-mail",
                      "Agendamento automático de follow-up",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-automation-glow" />
                        <span className="text-foreground/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Benefícios</h4>
                  <div className="grid gap-2">
                    {[
                      "Mais agilidade ⏱️",
                      "Economia de tempo e equipe 💼",
                      "Zero erros manuais ⚡",
                      "Escalabilidade para o seu negócio 📈",
                    ].map((b, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-automation-glow" />
                        <span className="text-foreground/80">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 text-center text-sm text-muted-foreground">
                  Quer ver a automação em ação? Clique abaixo e converse com minha agente de IA.
                </div>
                <div className="mb-6">
                  <Button
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold service-automation text-white border-0 hover:brightness-110 hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                      const msg = "Olá, Edrey! Quero testar sua agente de IA de automação agora.";
                      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank');
                      onClose();
                    }}
                  >
                    Testar agora 🤖
                  </Button>
                </div>

                <div className="pt-2">
                  <Button
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold service-automation text-white border-0 hover:brightness-110 hover:scale-105 transition-transform duration-300 whitespace-normal break-words"
                    onClick={() => {
                      const msg = "Olá, Edrey! Quero automatizar meus processos com N8N. Pode me explicar como funciona e me passar uma proposta?";
                      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(msg)}`;
                      window.open(url, '_blank');
                      onClose();
                    }}
                  >
                    👉 Quero automatizar meu negócio 🚀
                  </Button>
                </div>
              </>
            ) : (
              <>
                <DialogHeader className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${categoryStyles[category]}`} />
                    <DialogTitle className={`text-2xl md:text-3xl font-bold ${categoryColors[category]} glow-text`}>
                      {title}
                    </DialogTitle>
                  </div>
                </DialogHeader>

                <div className="space-y-6">
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    {description}
                  </p>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">
                      ✨ O que está incluído:
                    </h4>
                    <div className="grid gap-2">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className={`h-5 w-5 ${categoryColors[category]}`} />
                          <span className="text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 mt-6 text-foreground">O que você ganha</h4>
                    <div className="grid gap-2">
                      {[
                        "Direção clara do que fazer nos próximos 30 dias",
                        "Aceleração dos resultados com foco em conversão",
                        "Acompanhamento por WhatsApp para não travar",
                      ].map((b, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className={`h-5 w-5 ${categoryColors[category]}`} />
                          <span className="text-foreground/80">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 space-y-3">
                  <Button
                    className={`w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold ${categoryStyles[category]} border-0 hover:scale-105 transition-transform duration-300 whitespace-normal break-words`}
                    onClick={() => {
                      ctaAction();
                      onClose();
                    }}
                  >
                    {ctaText}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full md:w-auto px-6 py-3 text-sm md:text-lg font-semibold border-border/50 bg-background/40 hover:bg-background/60"
                    onClick={() => {
                      const generic = `Olá, Edrey! Quero começar agora com ${title}.`;
                      const url = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${encodeURIComponent(generic)}`;
                      window.open(url, '_blank');
                      onClose();
                    }}
                  >
                    Quero começar agora
                  </Button>
                </div>
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
