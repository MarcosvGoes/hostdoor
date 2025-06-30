"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/components/Shadcn-ui/dropdown-menu";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/shared/components/Shadcn-ui/accordion";
import { Button } from "@/shared/components/Shadcn-ui/button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-[0_1px_5px_var(--foreground)] fixed h-16 justify-between flex items-center w-full px-6 backdrop-blur-lg bg-background/5 z-50 border-none">
      <Link href="/">
        <Image src="/assets/logo.png" width={25} height={25} alt="Logo" />
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="outline-none">
          {isOpen ? <X /> : <Menu />}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-[100vw] h-[100vh] border-none z-50 bg-background px-6 py-4 flex flex-col gap-4"
        >
          <hr className="w-full" />

          <DropdownMenuItem className="py-0" asChild>
            <Link href="/" className="text-base font-semibold pl-3" onClick={() => setIsOpen(false)}>
              Início
            </Link>
          </DropdownMenuItem>

          <hr className="border-dashed w-full" />

          <DropdownMenuItem className="py-0" asChild>
            <Link href="/solutions" className="text-base font-semibold pl-3" onClick={() => setIsOpen(false)}>
              Soluções
            </Link>
          </DropdownMenuItem>

          <hr className="border-dashed w-full" />

          <DropdownMenuItem className="py-0" asChild>
            <Link href="/pricing" className="text-base font-semibold pl-3" onClick={() => setIsOpen(false)}>
              Preços
            </Link>
          </DropdownMenuItem>

          <hr className="border-dashed w-full" />

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="search" className="border-none">
              <AccordionTrigger className="text-sm font-semibold pt-0 px-3 items-center">
                Estou buscando um imóvel
              </AccordionTrigger>
              <AccordionContent className="mx-3 -mt-2">
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/catalog" onClick={() => setIsOpen(false)}>
                    Catálogo de imóveis
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/guide" onClick={() => setIsOpen(false)}>
                    Guia do inquilino
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/help" onClick={() => setIsOpen(false)}>
                    Ajuda
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <hr className="border-dashed w-full" />

            <AccordionItem value="rent" className="border-none">
              <AccordionTrigger className="text-sm font-semibold pb-0 px-3 items-center m-0">
                Estou alugando um imóvel
              </AccordionTrigger>
              <AccordionContent className="mx-3 mt-2 pb-0">
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <a href="https://app-dommi.vercel.app" target="_blank" onClick={() => setIsOpen(false)}>
                    Cadastre seu imóvel
                  </a>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/guide" onClick={() => setIsOpen(false)}>
                    Guia do locador
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/help" onClick={() => setIsOpen(false)}>
                    Ajuda
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <hr className="border-dashed w-full" />

          <DropdownMenuItem className="py-0" asChild>
            <Link href="/terms-and-conditions" className="text-base font-semibold pl-3" onClick={() => setIsOpen(false)}>
              Termos e condições
            </Link>
          </DropdownMenuItem>

          <hr className="border-dashed w-full" />

          <DropdownMenuItem className="py-0" asChild>
            <Link href="/help" className="text-base font-semibold pl-3" onClick={() => setIsOpen(false)}>
              Ajuda
            </Link>
          </DropdownMenuItem>

          <hr className="border-dashed w-full" />

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-[60%]">
            <Button
              className="w-full rounded-full flex bg-background shadow-[0_1px_5px_var(--foreground)]"
              onClick={() => setIsOpen(false)}
            >
              <a
                href="https://app-dommi.vercel.app"
                target="_blank"
                className="text-foreground font-semibold text-sm"
              >
                Login / Cadastrar
              </a>
              <ChevronRight color="var(--foreground)" strokeWidth="3" />
            </Button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
