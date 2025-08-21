"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/shared/components/Shadcn-ui/dropdown-menu";
import { appDomain } from "@/utils/routes";

export default function DesktopNav() {
  return (
    <nav className="fixed mx-auto w-full h-16 px-10 flex items-center justify-between backdrop-blur-lg bg-background/50 shadow-[0_1px_5px_var(--foreground)] z-50">
      <Link href="/" className="flex h-auto items-center gap-x-1 text-xl font-extrabold">
        <Image width={25} height={25} alt="logo hostdoor" src="/assets/logo/hostdoor-logo-light.png"/>
        <span className="text-xl">HostDoor</span>
      </Link>

      <div className="flex items-center gap-4">

        {/* Estou buscando um imóvel */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm cursor-pointer font-semibold flex items-center gap-1">
            Alugar <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="mt-2 w-72 rounded-sm p-5">
            <DropdownMenuLabel className="border-b font-semibold pb-2 text-lg">Alugue com a HostDoor</DropdownMenuLabel>
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
            <DropdownMenuLabel className="border-b font-semibold pb-2 text-lg">Anuncie com a HostDoor</DropdownMenuLabel>
            <div className="gap-1 grid mt-2">
              <DropdownItem external href={appDomain}>
                Cadastre seu imóvel
              </DropdownItem>
              <DropdownItem href="/solutions">Soluções</DropdownItem>
              <DropdownItem href="/guide/owner-guide">Ajuda</DropdownItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Guias */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm cursor-pointer font-semibold flex items-center gap-1">
            Guias <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>

          <DropdownMenuContent align="start" className="mt-2 w-72 rounded-sm p-5 overflow-hidden">
            <DropdownMenuLabel className="border-b font-semibold pb-2 text-lg">Dúvidas</DropdownMenuLabel>
            <div className="gap-1 grid mt-2">
              <DropdownItem href="/guide/tenant-guide">Guia do Inquilino</DropdownItem>
              <DropdownItem href="/guide/owner-guide">Guia do Proprietário</DropdownItem>
              <DropdownItem href="/guide/price-guide">Guia de Preços</DropdownItem>
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
              <DropdownItem href="/help/faq">Dúvidas frequentes</DropdownItem>
              <DropdownItem href="/help/support-center">Central de Suporte</DropdownItem>
              <DropdownItem href="/help/terms-and-conditions">Termos & Condições</DropdownItem>
              <DropdownItem href="/help/privacy-policy">Política de Privacidade</DropdownItem>
              <DropdownItem href="/help/about-us">Sobre nós</DropdownItem>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
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
