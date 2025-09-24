import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá, Edrey! Quero conhecer mais sobre seus serviços e criar minha Landing Page de alta conversão.");
    const whatsappUrl = `https://api.whatsapp.com/send?1=pt_BR&phone=5587933001911&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="floating-cta animate-float group"
      aria-label="Falar no WhatsApp"
    >
      <div className="flex items-center gap-2">
        <MessageCircle className="h-5 w-5 group-hover:animate-pulse" />
        <span className="hidden sm:inline font-medium">Fale comigo no WhatsApp</span>
        <span className="sm:hidden font-medium">WhatsApp</span>
      </div>
    </button>
  );
};
