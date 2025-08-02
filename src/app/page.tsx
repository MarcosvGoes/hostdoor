import { Button } from "@/shared/components/Shadcn-ui/button";
import { File, Handshake, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background">
      {/* Desktop */}
      <section className="relative w-full h-60 lg:h-[1000px] overflow-hidden pt-20 hidden lg:block">
        <div className="absolute inset-0 bg-[url('/assets/images/homeone.png')] lg:bg-[url('/assets/images/bgimg1.png')] bg-cover bg-center" />

        <div className="relative z-10 w-full max-w-[90%] mx-auto text-darkText text-center pt-20">
          <h1 className="text-xl lg:text-3xl text-darkText font-bold text-center mt-10">Simples, <br /> confiável e segura,<br /> para quem busca praticidade</h1>
          <Button className="p-5 mx-auto justify-center flex mt-5 rounded-full" variant={"outline"}>
            <Link href="/catalog">
              Confira nosso catálogo
            </Link>
          </Button>
        </div>
      </section>

      {/* Mobile */}
      <section className="w-full lg:hidden block">
        <div className="max-w-[90%] mx-auto text-center pt-5">
          <h1 className="text-xl lg:text-3xl text-darkText font-bold text-center mt-10">Simples, <br /> confiável e segura,<br /> para quem busca praticidade</h1>
          <Button className="p-5 mx-auto justify-center flex mt-5 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]" variant={"outline"}>
            <Link href="/catalog">
              Encontre agora seu novo lar
            </Link>
          </Button>
        </div>

      </section>

      <section className="w-full my-20 max-w-[90%] mx-auto grid gap-8 lg:grid-cols-3 lg:gap-x-80">
        <div>
          <h1 className="font-semibold flex gap-x-2 items-center lg:text-xl">
            <ShieldCheck strokeWidth={3} /> Segurança
          </h1>
          <p className="text-xs lg:text-base mt-2">A Dommi oferece todo suporte e segurança tanto para o inquilino quanto para o proprietário.</p>
        </div>
        <div>
          <h1 className="font-semibold flex gap-x-2 items-center lg:text-xl">
            <File strokeWidth={3} /> Facilidade
          </h1>
          <p className="text-xs lg:text-base mt-2">A Dommi gera contrato automático, assinatura digital e pagamento automático, para que possa apenas aproveitar seu novo lar.</p>
        </div>
        <div>
          <h1 className="font-semibold flex gap-x-2 items-center lg:text-xl">
            <Handshake strokeWidth={3} /> Transparência
          </h1>
          <p className="text-xs lg:text-base mt-2">Negocie diretamente com o vendedor e tenha total clareza e transparência sobre todos os custos, contratos e taxas.</p>
        </div>
      </section>
    </main>
  )
}
