'use client';

import Link from 'next/link';
import { Button } from '@/shared/components/Shadcn-ui/button';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-darkText text-center">
      <div className="flex flex-col items-center gap-4 max-w-md">
        <Image width={500} height={500} alt='not-found' src="/assets/images/not-found.jpg" />
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
