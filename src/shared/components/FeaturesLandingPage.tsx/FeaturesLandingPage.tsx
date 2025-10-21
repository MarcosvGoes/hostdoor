"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/shared/components/Shadcn-ui/carousel";
import { Card, CardContent } from "@/shared/components/Shadcn-ui/card";
import { ShieldCheck, FastForward, Handshake, CheckCheck, Landmark } from "lucide-react";
import Autoplay from "embla-carousel-autoplay"

export default function FeaturesCarousel() {
const features = [
  {
    title: "Segurança",
    icon: <ShieldCheck size={20} strokeWidth={3} />,
    description: "Alugue com total segurança: contratos digitais válidos, assinatura eletrônica reconhecida, pagamentos protegidos e suporte completo para todos."
  },
  {
    title: "Facilidade",
    icon: <CheckCheck size={20} strokeWidth={3} />,
    description: "Anuncie seu imóvel, aumente visibilidade, gere contratos digitais, receba pagamentos e realize cobranças rapidamente, tudo de forma simples e confiável."
  },
  {
    title: "Agilidade",
    icon: <FastForward size={20} strokeWidth={3} />,
    description: "Finalizar a locação nunca foi tão rápido: dispense fiador, testemunhas e burocracia com contratos digitais válidos em poucos minutos."
  },
  {
    title: "Repasse rápido",
    icon: <Landmark size={20} strokeWidth={3} />,
    description: "Receba pagamentos diretamente na sua conta de forma segura e rápida, sem atrasos, com total controle sobre seus recebíveis."
  },
  {
    title: "Transparência",
    icon: <Handshake size={20} strokeWidth={3} />,
    description: "Negocie diretamente, com total transparência: contratos, taxas e valores ficam disponíveis na Hostdoor, para que você saiba tudo em cada etapa."
  },
];


  return (
<Carousel className="overflow-x-auto" plugins={[
  Autoplay({
    delay: 3000,
  })
]}>
  <CarouselContent className="flex gap-2 px-5">
    {features.map((feature, idx) => (
      <CarouselItem key={idx} className="flex-shrink-0 lg:basis-1/3">
        <div className="">
          <Card className="gap-0 h-40 md:h-30 lg:h-50 justify-center shadow-none bg-muted/20">
            <CardContent className="grid items-center justify-center p-5">
              <h1 className="font-semibold flex gap-x-2 items-center text-lg">
               {feature.icon} {idx + 1}º {feature.title}
              </h1>
              <p className="text-xs lg:text-sm mt-2 font-normal text-accent-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

  );
}
