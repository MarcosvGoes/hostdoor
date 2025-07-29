"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/shared/components/Shadcn-ui/dropdown-menu";
import { Button } from "@/shared/components/Shadcn-ui/button";

export default function DesktopNav() {
  return (
    <nav className="fixed mt-5 left-0 right-0 mx-auto max-w-[80%] h-16 px-6 flex items-center justify-between rounded-full backdrop-blur-lg bg-background/50 shadow-[0_1px_5px_var(--foreground)] z-50">
      <Link href="/">
        <Image src="/assets/logo/text-logo.png" width={70} height={70} alt="Logo" />
      </Link>

      <div className="flex items-center gap-4">

        {/* Estou buscando um imóvel */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm cursor-pointer font-semibold flex items-center gap-1">
            Alugar <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="mt-2 w-72 rounded-sm p-5">
            <DropdownMenuLabel className="border-b font-semibold pb-2 text-lg">Alugue com a Dommi</DropdownMenuLabel>
            <div className="gap-1 grid mt-2">
              <DropdownItem href="/catalog">Catálogo de imóveis</DropdownItem>
              <DropdownItem href="/guide/tenant-guide">Ajuda</DropdownItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Estou anunciando um imóvel */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm cursor-pointer font-semibold flex items-center gap-1">
            Anunciar <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="mt-2 w-72 rounded-sm p-5">
            <DropdownMenuLabel className="border-b font-semibold pb-2 text-lg">Anuncie com a Dommi</DropdownMenuLabel>
            <div className="gap-1 grid mt-2">
              <DropdownItem external href="https://dommi-rent.vercel.app/property">
                Cadastre seu imóvel
              </DropdownItem>
              <DropdownItem href="/guide/owner-guide">Ajuda</DropdownItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Guias */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm cursor-pointer font-semibold flex items-center gap-1">
            Guia <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="mt-2 w-72 rounded-sm p-5 overflow-hidden">
            <DropdownMenuLabel className="border-b font-semibold pb-2 text-lg">Dúvidas</DropdownMenuLabel>
            <div className="gap-1 grid mt-2">
              <DropdownItem href="/guide/tenant-guide">Guia do Inquilino</DropdownItem>
              <DropdownItem href="/guide/owner-guide">Guia do Proprietário</DropdownItem>
              <DropdownItem href="/price-guide">Guia de Preços</DropdownItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Ajuda */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm cursor-pointer font-semibold flex items-center gap-1">
            Ajuda <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="mt-2 w-72 rounded-sm p-5 overflow-hidden">
            <DropdownMenuLabel className="border-b font-semibold pb-2 text-lg">Dúvidas</DropdownMenuLabel>
            <div className="gap-1 grid mt-2">
              <DropdownItem href="/catalog">Catálogo de imóveis</DropdownItem>
              <DropdownItem href="/guide/tenant-guide">Guia do inquilino</DropdownItem>
              <DropdownItem href="/terms-and-conditions">Termos & Condições</DropdownItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Botão de login */}
        <Button
          variant="ghost"
          className="rounded-full cursor-pointer flex items-center gap-2 shadow-[0_1px_5px_var(--foreground)] px-4"
        >
          <a
            href="https://dommi-rent.vercel.app"
            target="_blank"
            className="text-sm font-semibold"
          >
            Entrar
          </a>
          <ChevronRight strokeWidth="2" />
        </Button>
      </div>
    </nav>
  );
}

function DropdownItem({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <DropdownMenuItem asChild>
      {external ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium w-full cursor-pointer py-3"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className="text-sm font-medium w-full cursor-pointer py-3">
          {children}
        </Link>
      )}
    </DropdownMenuItem>
  );
}
