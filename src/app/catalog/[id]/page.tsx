'use client'

import { useEffect, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/Shadcn-ui/carousel";
import { Card, CardContent } from "@/shared/components/Shadcn-ui/card";
import { BedSingle, CarFront, CircleCheck, Images, PawPrint, Ruler, Share2, ShowerHead } from "lucide-react";
import { Badge } from "@/shared/components/Shadcn-ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/shared/components/Shadcn-ui/breadcrumb";
import { Button } from "@/shared/components/Shadcn-ui/button";
import { toast } from "sonner";

interface Property {
  id: string
  title: string
  description: string;
  squareMeters: number
  bedrooms: number
  bathrooms: number
  parkingSpaces: number
  rentPrice: number
  condominium: number
  iptu: number
  city: string
  state: string
  createdAt: string
  propertyNumber: string
  street: string
  houseNumber: string
  neighborhood: string
  cep: string
  allowsPet: boolean
  images: string[]
}

export default function PropertyDetails() {
  const params = useParams();
  const propertyId = params.id;
  const pathname = usePathname();
  const [property, setProperty] = useState<Property | null>(null);

  const rent = property?.rentPrice ?? 0;
  const condo = property?.condominium ?? 0;
  const iptu = property?.iptu ?? 0;
  const tax = rent * 0.05;

  const total = rent + condo + iptu + tax;

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const rentPriceFormatted = currencyFormatter.format(rent);
  const condominiumFormatted = currencyFormatter.format(condo);
  const IPTUFormatted = currencyFormatter.format(iptu);
  const taxFormatted = currencyFormatter.format(tax);
  const totalFormatted = currencyFormatter.format(total);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("viewedProperties") || "[]");
    if (!visited.includes(propertyId)) {
      visited.push(propertyId);
      localStorage.setItem("viewedProperties", JSON.stringify(visited));
    }

    fetch(`/api/get-properties/${propertyId}`)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar propriedade");
        return res.json();
      })
      .then(data => setProperty(data))
      .catch(console.error);
  }, [propertyId]);

  const handleShareClick = () => {
    const fullUrl = `${window.location.origin}${pathname}`;
    navigator.clipboard.writeText(fullUrl)
      .then(() => {
        toast(
          <div className="flex items-center gap-2">
            <CircleCheck color="#00c950" size={20} />
            <span>Link copiado!</span>
          </div>
        );
      })
      .catch(err => {
        toast.error("Erro ao copiar link");
        console.error(err);
      });
  };

  const handleOpenMap = () => {
    const address = `${property?.street}, ${property?.houseNumber}, ${property?.neighborhood}, ${property?.city} - ${property?.state}, ${property?.cep}`;
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    window.open(url, '_blank');
  };


  if (!property) return <p>Carregando...</p>;

  return (
    <div className="max-w-[90%] lg:max-w-[60%] mx-auto w-full mb-10">

      <div className="flex justify-between items-center py-5" id="breadcumb-pages">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/catalog">Catálogo</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{property.state}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{property.city}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div onClick={handleShareClick} className="cursor-pointer">
          <Share2 size={16} />
        </div>
      </div>

      <div className="grid lg:flex gap-10">
        <div className="grid gap-x-20 lg:w-4/5 w-full">
          <Carousel className="h-full w-full" id="carousel-images">
            <CarouselContent className="h-full">
              {property.images.length > 0 ? (
                property.images.map((src, idx) => (
                  <CarouselItem key={idx} className="h-full w-full px-0">
                    <CardContent className="relative h-60 lg:h-80 w-100vw p-0">
                      <Image
                        src={src}
                        alt={`Imagem ${idx + 1} de ${property.title}`}
                        fill
                        className="object-cover"
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

                        <Badge className="text-foreground bg-background/80">
                          <Images size={12} /> {idx + 1}/{property.images.length}
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
                <CarouselPrevious className="absolute top-1/2 left-3 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/30 text-white p-1 rounded-full z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </CarouselPrevious>
                <CarouselNext className="absolute top-1/2 right-3 -translate-y-1/2 h-8 w-8 bg-black/20 hover:bg-black/30 text-white p-1 rounded-full z-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </CarouselNext>
              </>
            )}
          </Carousel>

          <div className="mt-5">
            <h1 className="text-xl font-semibold mb-2 truncate">{property.title}</h1>

            <div className="flex flex-wrap gap-x-4 gap-y-2 my-3 text-xs lg:text-md" id="icons-data">
              <div className="flex items-center gap-1">
                <Ruler size={16} /> <span>{property.squareMeters} m²</span>
              </div>
              <div className="flex items-center gap-1">
                <BedSingle size={16} />
                <span>
                  {property.bedrooms} quarto{property.bedrooms !== 1 ? "s" : ""}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <ShowerHead size={16} />
                <span>
                  {property.bathrooms} banheiro{property.bathrooms !== 1 ? "s" : ""}
                </span>
              </div>
              {property.parkingSpaces > 0 && (
                <div className="flex items-center gap-1">
                  <CarFront size={16} />
                  <span>
                    {property.parkingSpaces} vaga{property.parkingSpaces !== 1 ? "s" : ""}
                  </span>
                </div>
              )}
              <div className="flex items-center gap-1">
                {
                  property.allowsPet ? ""
                    : <div className="flex gap-1 items-center">
                      <PawPrint size={16} />
                      <span>
                        Aceita pet
                      </span>
                    </div>
                }
              </div>
            </div>
          </div>

          <div className="mb-5">
            <p>{property.description}</p>
          </div>

          <div className="p-5 m-0 gap-3 flex justify-between shadow-[0_3px_10px_rgb(0,0,0,0.2)] items-center" id="location">
            <div className="grid gap-3 w-3/5">
              <h1 className="text-xl">{property.street}</h1>
              <div className="p-0 m-0 text-sm text-muted-foreground">
                <span>{property.neighborhood}, </span>
                <span>{property.city}, </span>
                <span>{property.state}</span><br />
              </div>
            </div>
            <Button className="rounded-full text-xs lg:text-base w-1/6" onClick={handleOpenMap}>
              Ver no mapa
            </Button>
          </div>
        </div>

        <div className="lg:w-1/5 w-full" id="price-card">
          <div className="sticky top-24">
            <Card className="h-fit rounded-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 gap-0">
              <div className="gap-x-1 flex items-center text-xs mb-4">
                <span>Imóvel</span>
                <span className="text-[10px]">{property.propertyNumber}</span>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span>Aluguel</span>
                  <span>{rentPriceFormatted}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span>Condomínio</span>
                  <span>{condominiumFormatted}</span>
                </div>

                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span>IPTU</span>
                  <span>{IPTUFormatted}</span>
                </div>
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span>Taxa de Serviço</span>
                  <span>{taxFormatted}</span>
                </div>
              </div>

              <hr className="my-3 border-dashed" />

              <div className="flex items-center justify-between text-lg">
                <span>Total</span>
                <span>{totalFormatted}</span>
              </div>

              <Button className="mt-10 rounded-full hover:bg-accent-foreground hover:text-muted" variant="secondary">
                Entrar em contato com anunciante
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
