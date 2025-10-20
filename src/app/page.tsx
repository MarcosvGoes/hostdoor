import FeaturesCarousel from "@/shared/components/FeaturesLandingPage.tsx/FeaturesLandingPage";
import { Button } from "@/shared/components/Shadcn-ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";



export default function Home() {

  
  return (
    <main className="bg-background">
      {/* Desktop */}
      <section className="relative w-full h-screen overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('/assets/images/bg-apartament.jpg')] bg-cover bg-center" />
        <div className="relative z-10 w-full max-w-[90%] mx-auto text-darkText text-center lg:pt-20">
          <h1 className="text-2xl text-darkText font-bold text-center mt-40 lg:text-4xl">Simples, <br /> confiável e segura,<br /> para quem busca praticidade</h1>
          <Button className="p-5 mx-auto justify-center flex mt-5 rounded-full" variant={"outline"}>
            <Link href="/catalog">
              Confira nosso catálogo
            </Link>
          </Button>
        </div>
      </section>

      <section className="w-full my-10 lg:my-20 max-w-[90%] lg:max-w-[70%] mx-auto">
        <h1 className="text-center text-2xl font-semibold my-10 lg:my-20">Na Hostdoor, sua locação é simples confiável e segura, como deve ser.</h1>
       <FeaturesCarousel />
      </section>

      <section className="lg:flex lg:max-w-[60%] lg:mx-auto lg:items-center lg:my-40">
        <Image alt="key on hands" src="/assets/images/key-hands.png" width={500} height={500} className="my-10 lg:my-0 mx-auto lg:rounded-full lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:bg-muted/20" />
        <div>
        <h1 className="text-center lg:text-start max-w-[80%] mx-auto text-2xl font-semibold mb-5">Anúncie seu imóvel</h1>
<p className="text-accent-foreground max-w-[80%] mx-auto text-center lg:text-start text-lg font-medium">
Crie agora sua conta na Hostdoor e anuncie seu imóvel para que todos possam ver. Adicione fotos, descrição, localização, compartilhe o anúncio, e gerencie tudo de forma fácil, segura e rápida.
</p>
</div>
      </section>

      <section className="lg:flex lg:max-w-[60%] lg:mx-auto lg:items-center my-40 lg:flex-row-reverse">
  <Image
    alt="assinatura digital"
    src="/assets/images/contract.png"
    width={500}
    height={500}
    className="my-10 lg:my-0 mx-auto lg:rounded-full lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:bg-muted/20"
  />
  <div>
  <h1 className="text-center lg:text-end text-2xl font-semibold max-w-[80%] mx-auto mb-5">
    Crie seu contrato digital
  </h1>
  <p className="text-accent-foreground max-w-[80%] mx-auto text-center lg:text-end text-lg font-medium">
    Gere contratos de locação automaticamente com validade jurídica, assinatura digital certificada e segurança total. 
    A Hostdoor utiliza validação ICP-Brasil, reconhecimento facial, registro de IP e autenticação de documentos e CPF, 
    garantindo a legitimidade de cada contrato.
  </p>
  <ul className="max-w-[80%] mx-auto justify-center lg:grid lg:justify-end text-accent-foreground text-base font-medium space-y-2 my-10 lg:my-20 mb-40">
    <li className="flex items-center gap-2 flex-row-reverse">
      <Check className="text-green-600" size={18} strokeWidth={3} /> 
      Contrato com validade jurídica (ICP-Brasil)
    </li>
    <li className="flex items-center gap-2 flex-row-reverse">
      <Check className="text-green-600" size={18} strokeWidth={3} /> 
      Assinatura digital com reconhecimento facial
    </li>
    <li className="flex items-center gap-2 flex-row-reverse">
      <Check className="text-green-600" size={18} strokeWidth={3} /> 
      Validação automática de CPF e documentos
    </li>
    <li className="flex items-center gap-2 flex-row-reverse">
      <Check className="text-green-600" size={18} strokeWidth={3} /> 
      Registro de IP e trilha de autenticação segura
    </li>
    <li className="flex items-center gap-2 flex-row-reverse">
      <Check className="text-green-600" size={18} strokeWidth={3} /> 
      Geração automática de cobranças e caução após assinatura
    </li>
  </ul>
  </div>  
</section>
    </main>
  )
}