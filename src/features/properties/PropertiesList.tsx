import { Badge } from "@/shared/components/Shadcn-ui/badge";
import { Card, CardContent } from "@/shared/components/Shadcn-ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/shared/components/Shadcn-ui/carousel";
import { cn } from "@/shared/components/Shadcn-ui/lib/utils-shadcn";
import { Images, Ruler, BedSingle, ShowerHead, CarFront } from "lucide-react";
import Image from "next/image";

const properties = [
  {
    title: "Apartamento aconchegante na Praia da Costa",
    images: ["/assets/homeone.png", "/assets/logo.png"],
    area: "85 m²",
    bedrooms: 2,
    bathrooms: 2,
    garageSpots: 1,
    rent: "R$ 2.500,00",
    total: "R$ 3.100,00",
    address: "Av. Champagnat, 123, Praia da Costa, Vila Velha - ES",
    badges: ["Anúncio Novo", "Baixou o preço"],
  },
  {
    title: "Casa ampla com quintal em Jardim Camburi",
    images: ["/assets/homeone.png", "/assets/logo.png"],
    area: "150 m²",
    bedrooms: 3,
    bathrooms: 2,
    garageSpots: 2,
    rent: "R$ 3.800,00",
    total: "R$ 4.200,00",
    address: "Rua das Acácias, 45, Jardim Camburi, Vitória - ES",
    badges: ["Exclusivo", "Baixou o preço"],
  },
  {
    title: "Kitnet mobiliada próxima à UFES",
    images: ["/assets/homeone.png", "/assets/logo.png"],
    area: "30 m²",
    bedrooms: 1,
    bathrooms: 1,
    garageSpots: 0,
    rent: "R$ 1.200,00",
    total: "R$ 1.400,00",
    address: "Rua da Universidade, 900, Goiabeiras, Vitória - ES",
    badges: ["Mobiliado"],
  },
]

export default function PropertiesList() {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {properties.map((property, idx) => (
  <Card
    key={idx}
    className="flex flex-col rounded-lg overflow-hidden hover:shadow-lg transition-shadow p-0 w-full gap-0"
  >
    <div className="relative w-full aspect-video bg-black/5">
      <Carousel className="h-full w-full">
        <CarouselContent className="h-full">
          {property.images.map((src, index) => (
            <CarouselItem key={index} className="h-full w-full px-0">
              <CardContent className="relative h-40 lg:h-60 w-100vw p-0">
                <Image
                  src={src}
                  alt={`Imagem ${index + 1} de ${property.images.length}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                />
                <div className="absolute bottom-3 right-3 flex items-center gap-x-1">
                  {property.badges.map((badge, bidx) => (
                    <Badge
                      key={bidx}
                      className={cn(
                        "bg-background text-accent-foreground font-semibold border-border text-[10px]"
                      )}
                    >
                      {badge}
                    </Badge>
                  ))}
                  <Badge className="text-foreground bg-background/80">
                    <Images size={12} /> {index + 1}/{property.images.length}
                  </Badge>
                </div>
              </CardContent>
            </CarouselItem>
          ))}
        </CarouselContent>
        {property.images.length > 1 && (
          <>
            <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/30 text-white p-1 rounded-full z-10" />
            <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/30 text-white p-1 rounded-full z-10" />
          </>
        )}
      </Carousel>
    </div>
    <div className="flex-grow flex flex-col p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-base truncate relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">
          {property.title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-xs text-muted-foreground">
        <div className="flex items-center gap-1">
          <Ruler size={16} /> <span>{property.area}</span>
        </div>
        <div className="flex items-center gap-1">
          <BedSingle size={16} /> <span>{property.bedrooms} quartos</span>
        </div>
        <div className="flex items-center gap-1">
          <ShowerHead size={16} /> <span>{property.bathrooms} banheiros</span>
        </div>
        {property.garageSpots > 0 && (
          <div className="flex items-center gap-1">
            <CarFront size={16} /> <span>{property.garageSpots} vagas</span>
          </div>
        )}
      </div>
      <div className="mt-auto">
        <p className="font-semibold items-center flex gap-x-1 text-lg mt-2">
          <span className="text-sm">{property.rent} aluguel</span>
        </p>
        <p className="items-center flex gap-x-1 text-lg mt-1">
          <span className="text-xs text-muted-foreground">{property.total} total</span>
        </p>
        <p className="text-xs text-muted-foreground truncate mt-2">{property.address}</p>
      </div>
    </div>
  </Card>
))}

    </div>
  )
}