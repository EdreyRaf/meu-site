import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ServiceModal } from "./ServiceModal";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  category: "whatsapp" | "video" | "automation" | "social";
  tags: string[];
  features: string[];
  ctaText: string;
  ctaAction: () => void;
  variant?: "poster" | "landscape";
  onCardClick?: () => void;
}

export const ServiceCard = ({
  id,
  title,
  description,
  fullDescription,
  image,
  category,
  tags,
  features,
  ctaText,
  ctaAction,
  variant = "landscape",
  onCardClick,
}: ServiceCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryStyles = {
    whatsapp: "service-whatsapp",
    video: "service-video", 
    automation: "service-automation",
    social: "service-social",
  };

  return (
    <>
      <Card
        className={`netflix-card cursor-pointer group bg-transparent border-0 ${categoryStyles[category]}`}
        onClick={() => (onCardClick ? onCardClick() : setIsModalOpen(true))}
      >
        <CardContent className="p-0 relative">
          <div className={`${variant === "poster" ? "aspect-[2/3]" : "aspect-[16/9]"} relative overflow-hidden rounded-lg`}>
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Netflix-style info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-bold text-lg mb-2 glow-text">{title}</h3>
              <p className="text-sm opacity-90 mb-3 line-clamp-2">{description}</p>
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 2).map((tag, index) => (
                  <Badge key={index} variant="secondary" className="text-xs bg-white/20 text-white border-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Play button overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={fullDescription}
        image={image}
        category={category}
        features={features}
        ctaText={ctaText}
        ctaAction={ctaAction}
      />
    </>
  );
};
