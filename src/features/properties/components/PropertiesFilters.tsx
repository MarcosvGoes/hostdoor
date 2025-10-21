'use client'
import { Button } from "@/shared/components/Shadcn-ui/button";
import { Card } from "@/shared/components/Shadcn-ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/shared/components/Shadcn-ui/dropdown-menu";
import { Input } from "@/shared/components/Shadcn-ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/Shadcn-ui/select";
import { MapPinned } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export interface Filters {
  text?: string;
  type?: string;
  bedroomsMin?: number;
  bedroomsMax?: number;
  bathroomsMin?: number;
  bathroomsMax?: number;
  squareMetersMin?: number;
  squareMetersMax?: number;
  parkingSpaces?: number;
  allowsPets?: boolean;
  rentPriceMin?: number;
  rentPriceMax?: number;
}

export default function PropertiesFilters({ onFilterChange }: { onFilterChange: (filters: Filters) => void }) {
  const [text, setText] = useState("");
  const [type, setType] = useState("");
  const [bedrooms, setBedrooms] = useState<string>("");
  const [bathrooms, setBathrooms] = useState<string>("");
  const [parkingSpaces, setParkingSpaces] = useState<string>("");
  const [allowsPets, setAllowsPets] = useState<string>("");
  const [rentPriceMin, setRentPriceMin] = useState<string>("");
  const [rentPriceMax, setRentPriceMax] = useState<string>("");
  const [squareMetersMin, setSquareMetersMin] = useState<string>("");
  const [squareMetersMax, setSquareMetersMax] = useState<string>("");
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll pra baixo, esconde nav
        setHidden(true);
      } else {
        // Scroll pra cima, mostra nav
        setHidden(false);
      }

      setLastScrollY(currentScrollY);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  useEffect(() => {
    const handler = setTimeout(() => {
      const filters = {
        text: text.trim() || undefined,
        type: type === "all" ? undefined : type,
        bedroomsMin: bedrooms && bedrooms !== "all" ? Number(bedrooms) : undefined,
        bedroomsMax: bedrooms && bedrooms !== "all" ? Number(bedrooms) : undefined,
        bathroomsMin: bathrooms && bathrooms !== "all" ? Number(bathrooms) : undefined,
        bathroomsMax: bathrooms && bathrooms !== "all" ? Number(bathrooms) : undefined,
        squareMetersMin: squareMetersMin ? Number(squareMetersMin) : undefined,
        squareMetersMax: squareMetersMax ? Number(squareMetersMax) : undefined,
        parkingSpaces: parkingSpaces && parkingSpaces !== "all" ? Number(parkingSpaces) : undefined,
        allowsPets: allowsPets === "true" ? true : allowsPets === "false" ? false : undefined,
        rentPriceMin: rentPriceMin ? Number(rentPriceMin) : undefined,
        rentPriceMax: rentPriceMax ? Number(rentPriceMax) : undefined,
      }
      onFilterChange(filters);

    }, 300);

    return () => clearTimeout(handler);
  }, [
    text, type, squareMetersMin, squareMetersMax,
    bedrooms, bathrooms, parkingSpaces, allowsPets,
    rentPriceMin, rentPriceMax, onFilterChange,
  ]);


  // Callbacks para inputs para evitar re-criação desnecessária
  const onTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value), []);
  const onSquareMetersMinChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSquareMetersMin(e.target.value), []);
  const onSquareMetersMaxChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSquareMetersMax(e.target.value), []);

  return (
    <>
      <div
        className={`lg:hidden fixed z-20 inset-x-0 w-full max-w-[90%] mx-auto flex flex-col
    transition-all duration-300 ease-in-out
    ${hidden ? "top-2" : "top-20"}`}
      >        
      <Card className="w-full px-4 py-2 m-0 grid gap-2">
          <div className="relative">
            <MapPinned className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={14} />
            <Input
              placeholder="Buscar por bairro, cidade, estado"
              className="pl-8 rounded-full h-10 placeholder:text-xs"
              value={text}
              onChange={onTextChange}
              spellCheck={false}
            />
          </div>
          <div className="lg:hidden w-full pb-1 mx-auto overflow-x-auto scrollbar-none">
            <div className="flex gap-3 w-max">
              {/* Tipo */}
              <Select onValueChange={setType} value={type}>
                <SelectTrigger className="rounded-full whitespace-nowrap px-4 h-10 min-w-[100px]">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Indiferente</SelectItem>
                  <SelectItem value="house">Casa</SelectItem>
                  <SelectItem value="apartment">Apartamento</SelectItem>
                  <SelectItem value="loft">Loft</SelectItem>
                  <SelectItem value="condominium house">Casa de condomínio</SelectItem>
                  <SelectItem value="village house">Casa de vila</SelectItem>
                  <SelectItem value="penthouse">Cobertura</SelectItem>
                  <SelectItem value="duplex triplex">Duplex / Triplex</SelectItem>
                  <SelectItem value="kitnet">Kitnet</SelectItem>
                  <SelectItem value="office store">Sala / Loja</SelectItem>
                  <SelectItem value="storage">Galpão / Depósito</SelectItem>
                  <SelectItem value="land ranch farm">Terreno / Sítio / Fazenda</SelectItem>
                  <SelectItem value="others">Outros</SelectItem>
                </SelectContent>
              </Select>

              {/* Quartos */}
              <Select onValueChange={setBedrooms} value={bedrooms}>
                <SelectTrigger className="rounded-full whitespace-nowrap px-4 h-10 min-w-[100px]">
                  <SelectValue placeholder="Quartos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Indiferente</SelectItem>
                  {[0, 1, 2, 3, 4].map(n => (
                    <SelectItem key={n} value={String(n)}>
                      {n === 0 ? "Sem quarto" : `${n} Quarto${n > 1 ? "s" : ""}`}
                    </SelectItem>
                  ))}
                  <SelectItem value="5">5+ Quartos</SelectItem>
                </SelectContent>
              </Select>

              {/* Banheiros */}
              <Select onValueChange={setBathrooms} value={bathrooms}>
                <SelectTrigger className="rounded-full whitespace-nowrap px-4 h-10 min-w-[100px]">
                  <SelectValue placeholder="Banheiros" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Indiferente</SelectItem>
                  {[1, 2, 3, 4].map(n => (
                    <SelectItem key={n} value={String(n)}>
                      {n} {n > 1 ? "Banheiros" : "Banheiro"}
                    </SelectItem>
                  ))}
                  <SelectItem value="5">5+ Banheiros</SelectItem>
                </SelectContent>
              </Select>

              {/* Pets */}
              <Select onValueChange={setAllowsPets} value={allowsPets}>
                <SelectTrigger className="rounded-full whitespace-nowrap px-4 h-10 min-w-[100px]">
                  <SelectValue placeholder="Pets" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Indiferente</SelectItem>
                  <SelectItem value="true">Aceita</SelectItem>
                  <SelectItem value="false">Não aceita</SelectItem>
                </SelectContent>
              </Select>

              {/* Área */}
        <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full whitespace-nowrap px-4">
                    Área m2
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 grid gap-2">
                  <span className="text-xs font-semibold">Área m2</span>
                  <div className="flex gap-2 items-center">
                    <Input
                      type="number"
                      placeholder="mín"
                      value={squareMetersMin}
                      onChange={(e) => setSquareMetersMin(e.target.value)}
                      className="w-20"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="máx"
                      value={squareMetersMax}
                      onChange={(e) => setSquareMetersMax(e.target.value)}
                      className="w-20"
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Aluguel */}
        <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="rounded-full whitespace-nowrap px-4">
                    Aluguel R$
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="p-2 grid gap-2">
                  <span className="text-xs font-semibold">Valor do Aluguel</span>
                  <div className="flex gap-2 items-center">
                    <Input
                      type="number"
                      placeholder="mín"
                      value={rentPriceMin}
                      onChange={(e) => setRentPriceMin(e.target.value)}
                      className="w-20"
                    />
                    <span>-</span>
                    <Input
                      type="number"
                      placeholder="máx"
                      value={rentPriceMax}
                      onChange={(e) => setRentPriceMax(e.target.value)}
                      className="w-20"
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </Card>
      </div>


      {/* Desktop Filters */}
      <div className="hidden overflow-x-auto scrollbar-none lg:flex gap-4 items-center bg-background py-4 pt-[100px] fixed z-20 w-screen px-10 border-b">
        {/* Input texto para city, neighborhood, state */}
        <div className="relative">
          <MapPinned className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Buscar por bairro, cidade, estado"
            className="pl-10 rounded-full w-[320px] h-[42px]"
            value={text}
            onChange={onTextChange}
            spellCheck={false}
          />
        </div>

        {/* Select tipo imóvel */}
        <Select onValueChange={setType} value={type}>
          <SelectTrigger className="w-[220px] py-5 rounded-full">
            <SelectValue placeholder="Filtrar por tipo" />
          </SelectTrigger>
          <SelectContent className="rounded-xs max-w-[90%] mx-auto font-medium">
            <SelectItem className="text-sm" value="all">Indiferente</SelectItem>
            <SelectItem className="text-sm" value="house">Casa</SelectItem>
            <SelectItem className="text-sm" value="apartment">Apartamento</SelectItem>
            <SelectItem className="text-sm" value="loft">Loft</SelectItem>
            <SelectItem className="text-sm" value="condominium house">Casa de condomínio</SelectItem>
            <SelectItem className="text-sm" value="village house">Casa de vila</SelectItem>
            <SelectItem className="text-sm" value="penthouse">Cobertura</SelectItem>
            <SelectItem className="text-sm" value="duplex triplex">Duplex / Triplex</SelectItem>
            <SelectItem className="text-sm" value="kitnet">Kitnet</SelectItem>
            <SelectItem className="text-sm" value="office store">Sala / Loja</SelectItem>
            <SelectItem className="text-sm" value="storage">Galpão / Depósito</SelectItem>
            <SelectItem className="text-sm" value="land ranch farm">Terreno / Sítio / Fazenda</SelectItem>
            <SelectItem className="text-sm" value="others">Outros</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setBedrooms} value={bedrooms}>
          <SelectTrigger className="w-32 py-5 rounded-full">
            <SelectValue placeholder="Quartos" />
          </SelectTrigger>
          <SelectContent className="rounded-xs max-w-[90%] mx-auto font-medium">
            <SelectItem value="all" className="text-sm ">Indiferente</SelectItem>
            {[0, 1, 2, 3, 4].map(n => (
              <SelectItem key={n} className="text-sm" value={String(n)}>
                {n === 0 ? "Sem quarto" : `${n} Quarto${n > 1 ? "s" : ""}`}
              </SelectItem>
            ))}
            <SelectItem className="text-sm" value="5">5+ Quartos</SelectItem>
          </SelectContent>
        </Select>


        <Select onValueChange={setBathrooms} value={bathrooms}>
          <SelectTrigger className="w-36 py-5 rounded-full">
            <SelectValue placeholder="Banheiros" />
          </SelectTrigger>
          <SelectContent className="rounded-xs max-w-[90%] mx-auto font-medium">
            <SelectItem value="all" className="text-sm ">Indiferente</SelectItem>
            {[1, 2, 3, 4].map((n) => (
              <SelectItem className="text-sm" key={n} value={String(n)}>{`${n} ${n > 1 ? "Banheiros" : "Banheiro"}`}</SelectItem>
            ))}
            <SelectItem className="text-sm" value="5">5+ Banheiros</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setParkingSpaces} value={parkingSpaces}>
          <SelectTrigger className="w-44 py-5 rounded-full">
            <SelectValue placeholder="Vagas de garagem" />
          </SelectTrigger>
          <SelectContent className="rounded-xs font-medium">
            <SelectItem value="all" className="text-sm">Indiferente</SelectItem>
            {[0, 1, 2, 3, 4].map(n => (
              <SelectItem key={n} className="text-sm" value={String(n)}>
                {n === 0 ? "Sem vaga" : `${n} Vaga${n > 1 ? "s" : ""}`}
              </SelectItem>
            ))}
            <SelectItem className="text-sm" value="5">5+ Vagas</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setAllowsPets} value={allowsPets}>
          <SelectTrigger className="w-36 py-5 rounded-full">
            <SelectValue placeholder="Aceita pets" />
          </SelectTrigger>
          <SelectContent className="rounded-xs font-medium">
            <SelectItem value="all" className="text-sm">Indiferente</SelectItem>
            <SelectItem value="true" className="text-sm">Sim</SelectItem>
            <SelectItem value="false" className="text-sm">Não</SelectItem>
          </SelectContent>
        </Select>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full w-24 py-5 justify-center">
              Área m2
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="grid p-6">
            <h1 className="mb-4">Área m2</h1>
            <div className="w-80 rounded-xl space-x-2 flex">
              <div>
                <label className="text-sm text-muted-foreground">Mínimo</label>
                <Input
                  type="number"
                  min={0}
                  value={squareMetersMin}
                  onChange={onSquareMetersMinChange}
                  className="mt-1 border-black/50"
                  placeholder="Ex: 40"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Máximo</label>
                <Input
                  type="number"
                  min={0}
                  value={squareMetersMax}
                  onChange={onSquareMetersMaxChange}
                  className="mt-1 border-black/50"
                  placeholder="Ex: 120"
                />
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full w-28 py-5 justify-center">
              Aluguel R$
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="grid p-6">
            <h1 className="mb-4">Valor</h1>
            <div className="w-80 rounded-xl space-x-2 flex">
              <div>
                <label className="text-sm text-muted-foreground">Mínimo</label>
                <Input
                  type="number"
                  min={0}
                  value={rentPriceMin}
                  onChange={(e) => setRentPriceMin(e.target.value)}
                  className="mt-1 border-black/50"
                  placeholder="Ex: 800"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Máximo</label>
                <Input
                  type="number"
                  min={0}
                  value={rentPriceMax}
                  onChange={(e) => setRentPriceMax(e.target.value)}
                  className="mt-1 border-black/50"
                  placeholder="Ex: 2500"
                />
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}
