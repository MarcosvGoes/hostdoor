'use client';

import { Badge } from "@/shared/components/Shadcn-ui/badge";
import { Card, CardContent } from "@/shared/components/Shadcn-ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/Shadcn-ui/carousel";
import { Property } from "@/shared/types/Property";
import { BedSingle, CarFront, Images, PawPrint, Ruler, ShowerHead } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Props {
  properties: Property[];
}

function PropertiesListComponent({ properties }: Props) {
  const [viewed, setViewed] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("viewedProperties");
    const viewedIds = stored ? JSON.parse(stored) : [];
    setViewed(viewedIds);
  }, []);

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1500px] mx-auto">
        {properties.map((property) => (
          <Card
            key={property.id}
            className="flex rounded-sm cursor-pointer flex-col p-0 gap-0"
            onClick={() => router.push(`/catalog/${property.id}`)}
          >
            <div className="relative w-full aspect-video">
              <Carousel className="h-full w-full">
                <CarouselContent className="h-full ml-0">
                  {property.images.length > 0 ? (
                    property.images.map((src, idx) => (
                      <CarouselItem key={idx} className="h-full w-full px-0">
                        <CardContent className="relative h-60 lg:h-80 w-100vw p-0">
                          <Image
                            src={src}
                            alt={`Imagem ${idx + 1} de ${property.title}`}
                            fill
                            className="object-cover rounded-t-sm"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={idx === 0}
                          />
                          <div className="absolute bottom-3 right-3 flex items-center gap-x-1">
                            {(() => {
                              const createdAt = new Date(property.createdAt);
                              const now = new Date();
                              const diffHours = (now.getTime() - createdAt.getTime()) / (1000 * 60 * 60);
                              return diffHours < 24 ? (
                                <Badge className="text-foreground bg-background/80">Anúncio novo</Badge>
                              ) : null;
                            })()}
                            {viewed.includes(property.id) && (
                              <Badge className="text-foreground bg-background/80">Visualizado</Badge>
                            )}
                            <Badge className="text-foreground bg-background/80">
                              <Images size={12} /> 
                              <span className="font-semibold">{`${(idx + 1).toString()} / ${property.images.length}`}</span>
                            </Badge>
                          </div>
                        </CardContent>
                      </CarouselItem>
                    ))
                  ) : (
                    <CarouselItem className="h-full w-full">
                      <CardContent className="flex items-center justify-center h-80 w-full bg-muted">
                        <div className="text-center text-muted-foreground">
                          <Images size={28} className="mx-auto mb-2" />
                          <p className="text-sm">Sem imagens</p>
                        </div>
                      </CardContent>
                    </CarouselItem>
                  )}
                </CarouselContent>
                {property.images.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/30 text-white p-1 rounded-full z-10" />
                    <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/30 text-white p-1 rounded-full z-10" />
                  </>
                )}
              </Carousel>
            </div>
            <div className="p-4 justify-between flex flex-col h-full">
              <h3 className="font-semibold text-base mb-2 truncate">{property.title}</h3>
              <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Ruler size={16} /> <span>{property.squareMeters} m²</span>
                </div>
                <div className="flex items-center gap-1">
                  <BedSingle size={16} /> <span>{property.bedrooms} quarto{property.bedrooms !== 1 ? "s" : ""}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShowerHead size={16} /> <span>{property.bathrooms} banheiro{property.bathrooms !== 1 ? "s" : ""}</span>
                </div>
                {property.parkingSpaces > 0 && (
                  <div className="flex items-center gap-1">
                    <CarFront size={16} /> <span>{property.parkingSpaces} vaga{property.parkingSpaces !== 1 ? "s" : ""}</span>
                  </div>
                )}
                {!!property.allowsPets ? (
                  <div className="flex items-center gap-1">
                    <PawPrint size={16} /> <p>Aceita pets</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-1">
                    <PawPrint size={16} /> <p>Não aceita pet</p>
                  </div>
                )}
              </div>
              <div>
                <p className="text-base font-semibold mt-1">R$ {property.rentPrice.toLocaleString()} Aluguel</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {(property.iptu/12 + property.condominium + property.rentPrice + (property.rentPrice * 5/100)).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })} total
                </p>
                <p className="text-xs mt-2">{property.street}, {property.houseNumber} - {property.neighborhood}, {property.city} - {property.state}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default React.memo(PropertiesListComponent);
