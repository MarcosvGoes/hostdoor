'use client';

import Link from 'next/link';
import { Button } from '@/shared/components/Shadcn-ui/button';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-darkText text-center">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <Ghost size={48} />
        <h1 className="text-3xl font-bold">Página não encontrada</h1>
        <p className="text-sm text-muted-foreground">
          A página que você está tentando acessar não existe ou foi removida.
        </p>
        <Link href="/">
          <Button className="mt-4">Voltar para a página inicial</Button>
        </Link>
      </div>
    </main>
  );
}
