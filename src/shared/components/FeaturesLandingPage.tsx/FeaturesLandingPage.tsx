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
      description: "Na Hostdoor, sua locação é 100% segura. Contratos digitais com validade jurídica, assinatura eletrônica reconhecida, pagamentos protegidos e suporte completo tanto para inquilinos quanto para proprietários."
    },
    {
      title: "Facilidade",
      icon: <CheckCheck size={20} strokeWidth={3} />,
      description: "Anuncie seu imóvel, ganhe visibilidade, alugue com segurança, gere contratos digitais e receba pagamentos ou realize cobranças e reembolsos diretamente pela Hostdoor. Simples, rápido e confiável."
    },
    {
      title: "Agilidade",
      icon: <FastForward size={20} strokeWidth={3} />,
      description: "Com a Hostdoor você dispensa fiador e testemunhas, finalizando toda a burocracia da locação e cobranças em apenas alguns minutos graças aos contratos digitais com validade jurídica."
    },
    {
    title: "Repasse Instantâneo",
    icon: <Landmark size={20} strokeWidth={3} />,
    description: "Receba pagamentos e repasses de forma rápida e segura, diretamente na sua conta, sem burocracia ou atrasos. Controle total sobre seus recebíveis, com segurança, e velocidade, tudo pela Hostdoor."
    },
    {
      title: "Transparência",
      icon: <Handshake size={20} strokeWidth={3} />,
      description: "Negocie diretamente entre locador e locatário, com transparência: todos os valores, taxas e contratos ficam disponíveis na Hostdoor, para que você saiba exatamente o que está acontecendo em cada etapa da locação."
    },
  ];

  return (
<Carousel className="overflow-x-auto" plugins={[
  Autoplay({
    delay: 4000,
    stopOnMouseEnter: true,
    stopOnFocusIn: true,
    stopOnInteraction: true,
  })
]}>
  <CarouselContent className="flex gap-2 px-5">
    {features.map((feature, idx) => (
      <CarouselItem key={idx} className="flex-shrink-0 lg:basis-1/3">
        <div className="p-3">
          <Card className="gap-0 h-52 justify-center shadow-none bg-muted/20">
            <CardContent className="grid items-center justify-center px-6 py-6">
              <h1 className="font-semibold flex gap-x-2 items-center text-xl">
               {feature.icon} {idx + 1}º {feature.title}
              </h1>
              <p className="text-sm lg:text-base mt-2 font-normal text-accent-foreground">
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
