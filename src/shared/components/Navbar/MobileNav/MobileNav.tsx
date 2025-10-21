"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/shared/components/Shadcn-ui/dropdown-menu";
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "@/shared/components/Shadcn-ui/accordion";
import { Button } from "@/shared/components/Shadcn-ui/button";
import Image from "next/image";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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

  return (
    <nav
      className={`shadow-[0_1px_5px_var(--foreground)] fixed h-16 justify-between flex items-center w-full px-6 bg-background z-50 border-none transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"
        }`}
    >
      <Link href="/" className="flex h-auto items-center gap-x-1 text-xl font-extrabold">
        <Image width={25} height={25} alt="logo hostdoor" src="/assets/logo/hostdoor-logo-light.png"/>
        <span className="text-xl">Hostdoor</span>
      </Link>

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger className="outline-none">
          {isOpen ? <X /> : <Menu />}
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="end"
          className="w-[100vw] h-[100vh] rounded-none border-none z-50 bg-background px-6 mt-4 flex flex-col gap-1"
        >

          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem value="search" className="border-none">
              <AccordionTrigger className="text-sm font-semibold px-3 items-center">
                Alugar
              </AccordionTrigger>
              <AccordionContent className="mx-1 -mt-2">
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/catalog" onClick={() => setIsOpen(false)}>
                    Catálogo de imóveis
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/guide/tenant-guide" onClick={() => setIsOpen(false)}>
                    Ajuda
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <hr className="border-dashed w-full" />

            <AccordionItem value="rent" className="border-none">
              <AccordionTrigger className="text-sm font-semibold px-3 items-center m-0">
                Anunciar
              </AccordionTrigger>
              <AccordionContent className="mx-1 -mt-2">
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <a href={"https://app.hostdoor.com.br"} target="_blank" onClick={() => setIsOpen(false)}>
                    Cadastre seu imóvel
                  </a>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/solutions" onClick={() => setIsOpen(false)}>
                    Soluções
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/guide/owner-guide" onClick={() => setIsOpen(false)}>
                    Ajuda
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <hr className="border-dashed w-full" />

            <AccordionItem value="guide" className="border-none">
              <AccordionTrigger className="text-sm font-semibold px-3 items-center m-0">
                Guias
              </AccordionTrigger>
              <AccordionContent className="mx-1 -mt-2">
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/guide/tenant-guide" onClick={() => setIsOpen(false)}>
                    Guia do Inquilino
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/guide/owner-guide" onClick={() => setIsOpen(false)}>
                    Guia do Proprietário
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/guide/price-guide" onClick={() => setIsOpen(false)}>
                    Guia de Preços
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>

            <hr className="border-dashed w-full" />

            <AccordionItem value="help" className="border-none">
              <AccordionTrigger className="text-sm font-semibold px-3 items-center m-0">
                Ajuda
              </AccordionTrigger>
              <AccordionContent className="mx-1 -mt-2">
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/help/faq" onClick={() => setIsOpen(false)}>
                    Dúvidas frequentes
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <a href="/help/support-center" onClick={() => setIsOpen(false)}>
                    Central de Suporte
                  </a>
                </Button>
                 <Button asChild variant="link" className="block text-left w-full font-medium">
                  <a href="/help/rules" onClick={() => setIsOpen(false)}>
                    Regras de locação
                  </a>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/help/terms-and-conditions" onClick={() => setIsOpen(false)}>
                    Termos de Uso
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/help/privacy-policy" onClick={() => setIsOpen(false)}>
                    Política de Privacidade
                  </Link>
                </Button>
                <Button asChild variant="link" className="block text-left w-full font-medium">
                  <Link href="/help/about-us" onClick={() => setIsOpen(false)}>
                    Sobre nós
                  </Link>
                </Button>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
