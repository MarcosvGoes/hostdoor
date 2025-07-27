"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/components/Shadcn-ui/dropdown-menu";
import { Button } from "@/shared/components/Shadcn-ui/button";

export default function DesktopNav() {
  return (
    <nav className="fixed left-0 right-0 mx-auto max-w-[80%] h-16 px-6 my-4 flex items-center justify-between rounded-full backdrop-blur-lg bg-background/5 shadow-[0_1px_5px_var(--foreground)] z-50">
      <Link href="/">
        <Image src="/assets/logo.png" width={30} height={30} alt="Logo" />
      </Link>

      <div className="flex items-center gap-6">
        <NavLink href="/solutions">Soluções</NavLink>
        <NavLink href="/pricing">Preços</NavLink>

        {/* Dropdown: Estou buscando um imóvel */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-semibold flex items-center gap-1">
            Estou buscando <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 w-56">
            <DropdownItem href="/catalog">Catálogo de imóveis</DropdownItem>
            <DropdownItem href="/guide">Guia do inquilino</DropdownItem>
            <DropdownItem href="/help">Ajuda</DropdownItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Dropdown: Estou anunciando um imóvel */}
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm font-semibold flex items-center gap-1">
            Estou anunciando <ChevronDown className="w-4 h-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2 w-56">
            <DropdownItem external href="https://app-dommi.vercel.app">
              Cadastre seu imóvel
            </DropdownItem>
            <DropdownItem href="/guide">Guia do locador</DropdownItem>
            <DropdownItem href="/help">Ajuda</DropdownItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <NavLink href="/terms-and-conditions">Termos</NavLink>
        <NavLink href="/help">Ajuda</NavLink>

        {/* Botão de login */}
        <Button
          variant="ghost"
          className="rounded-full flex items-center gap-2 shadow-[0_1px_5px_var(--foreground)] px-4"
        >
          <a
            href="https://dommi-rent.vercel.app"
            target="_blank"
            className="text-sm font-semibold"
          >
            Entrar
          </a>
          <ChevronRight strokeWidth="2.5" />
        </Button>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm font-semibold hover:underline underline-offset-4">
      {children}
    </Link>
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
          className="text-sm font-medium w-full"
        >
          {children}
        </a>
      ) : (
        <Link href={href} className="text-sm font-medium w-full">
          {children}
        </Link>
      )}
    </DropdownMenuItem>
  );
}
