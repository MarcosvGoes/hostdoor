'use client'

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/Shadcn-ui/carousel";
import { Card, CardContent } from "@/shared/components/Shadcn-ui/card";
import { BedSingle, CarFront, Images, Info, PawPrint, Ruler, ShowerHead } from "lucide-react";
import { Badge } from "@/shared/components/Shadcn-ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/shared/components/Shadcn-ui/breadcrumb";
import { ContactOwner } from "@/features/properties/components/ContactOwnerDrawer";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/components/Shadcn-ui/popover";
import SharePropertyButton from "@/features/properties/components/SharePropertyButton";
import PropertyDetailsLoadingSkeleton from "./loading";

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
  user: {
    email: string;
    phoneNumber: string;
    name: string;
  };
}

export default function PropertyDetails() {
  const params = useParams();
  const propertyNumber = params.propertyNumber
  const [property, setProperty] = useState<Property | null>(null);

  const rent = property?.rentPrice ?? 0;
  const condo = property?.condominium ?? 0;
  const iptu = property?.iptu ?? 0;
  const tax = rent * 0.05;

  const total = rent + condo + iptu / 12 + tax;

  const currencyFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const rentPriceFormatted = currencyFormatter.format(rent);
  const condominiumFormatted = currencyFormatter.format(condo);
  const IPTUFormatted = currencyFormatter.format(iptu / 12);
  const taxFormatted = currencyFormatter.format(tax);
  const totalFormatted = currencyFormatter.format(total);

  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem("viewedProperties") || "[]");
    if (!visited.includes(propertyNumber)) {
      visited.push(propertyNumber);
      localStorage.setItem("viewedProperties", JSON.stringify(visited));
    }

    fetch(`/api/get-properties/${propertyNumber}`)
      .then(res => {
        if (!res.ok) throw new Error("Erro ao buscar propriedade");
        return res.json();
      })
      .then(data => setProperty(data))
      .catch(console.error);
  }, [propertyNumber]);


  const address = `${property?.street}, ${property?.houseNumber}, ${property?.neighborhood}, ${property?.city} - ${property?.state}, ${property?.cep}`;
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;



  if (!property) return <PropertyDetailsLoadingSkeleton />

  return (
    <div className="max-w-[90%] lg:max-w-[1200px] lg:px-10 mx-auto w-full mb-10 mt-20">

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

        <div className="cursor-pointer bg-accent p-2 rounded-full hover:bg-accent/50 transition duration-100">
          <SharePropertyButton id={property.propertyNumber} />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full">
        <div className="w-full lg:flex-1 grid gap-x-4">
          <Carousel className="h-full shadow-[0_3px_10px_rgb(0,0,0,0.2)]" id="carousel-images">
            <CarouselContent className="h-full">
              {property.images.length > 0 ? (
                property.images.map((src, idx) => (
                  <CarouselItem key={idx} className="h-full px-0">
                    <CardContent className="relative h-60 lg:h-80 w-full p-0">
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
            <h1 className="text-lg font-semibold mb-2">{property.title}</h1>

            <div className="flex flex-wrap gap-x-4 gap-y-3 my-3 text-xs lg:text-md" id="icons-data">
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

          <div className="mb-5 text-sm">
            <p>{property.description}</p>
          </div>
          <div className="mt-4 w-full h-64 rounded-sm overflow-hidden shadow-md">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="w-full lg:w-[280px] shrink-0" id="price-card">
          <div className="lg:sticky top-24">
            <Card className="h-fit rounded-xs shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 gap-0">
              <div className="gap-x-1 flex items-center text-xs mb-4">
                <span className="text-xs">Imóvel</span>
                <span className="text-xs">{property.propertyNumber}</span>
              </div>

              <div className="grid gap-4">
                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    Aluguel
                    <Popover>
                      <PopoverTrigger asChild>
                        <Info className="w-4 h-4 cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="max-w-xs text-sm">
                        Valor definido diretamente pelo proprietário com base nas condições do imóvel e região.
                      </PopoverContent>
                    </Popover>
                  </span>
                  <span>{rentPriceFormatted}</span>
                </div>

                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    Condomínio
                    <Popover>
                      <PopoverTrigger asChild>
                        <Info className="w-4 h-4 cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="max-w-xs text-sm">
                        Valor cobrado pelo condomínio do imóvel. Pode variar de acordo com decisões internas do prédio ou complexo.
                      </PopoverContent>
                    </Popover>
                  </span>
                  <span>{condominiumFormatted}</span>
                </div>

                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    IPTU
                    <Popover>
                      <PopoverTrigger asChild>
                        <Info className="w-4 h-4 cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="max-w-xs text-sm">
                        Imposto anual definido pela prefeitura para o imóvel, cujo valor é dividido em 12 parcelas mensais.
                      </PopoverContent>
                    </Popover>
                  </span>
                  <span>{IPTUFormatted}</span>
                </div>

                <div className="flex items-center justify-between text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    Taxa de Serviço
                    <Popover>
                      <PopoverTrigger asChild>
                        <Info className="w-4 h-4 cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="max-w-xs text-sm">
                        Taxa de serviço aplicada exclusivamente sobre o valor do aluguel, destinada à manutenção da plataforma, atendimento, suporte, gestão de contratos e segurança dos repasses.                      </PopoverContent>
                    </Popover>
                  </span>
                  <span>{taxFormatted}</span>
                </div>
              </div>

              <hr className="my-3 border-dashed" />

              <div className="flex items-center justify-between text-lg">
                <span>Total</span>
                <span>{totalFormatted}</span>
              </div>

              {property && property.user ? (
                <ContactOwner
                  email={property.user.email}
                  phone={property.user.phoneNumber}
                  whatsapp={property.user.phoneNumber}
                />
              ) : null}

            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
