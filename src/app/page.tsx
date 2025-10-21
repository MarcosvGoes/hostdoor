"use client"
import FeaturesCarousel from "@/shared/components/FeaturesLandingPage.tsx/FeaturesLandingPage";
import { Button } from "@/shared/components/Shadcn-ui/button";
import { motion } from "framer-motion";
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
          <h1 className="text-2xl text-darkText font-bold text-center mt-40 lg:text-4xl">Alugue ou anuncie imóveis <br /> de forma simples, segura <br />e sem burocracia</h1>
          <Link href="/catalog">
            <Button className="p-5 mx-auto justify-center flex mt-5 rounded-full" variant={"outline"}>
              Confira nosso catálogo
            </Button>
          </Link>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="w-full my-10 lg:my-20 max-w-[90%] lg:max-w-[70%] mx-auto">
        <h1 className="text-center text-2xl font-semibold my-10 lg:my-20">Na Hostdoor, sua locação é simples confiável e segura, como deve ser.</h1>
        <FeaturesCarousel />
      </motion.section>

      <div className="space-y-20">
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:flex lg:max-w-[1200px] max-w-[90%] mx-auto lg:mx-auto lg:items-center">
          <Image alt="house for rent" src="/assets/images/rent.jpg" width={500} height={500} className="my-10 lg:my-0 mx-auto lg:w-1/2" />
          <div className="lg:w-1/2">
            <span className="underline underline-offset-5 text-muted-foreground decoration-gray-300 flex justify-center lg:justify-start">Imóveis</span>
            <div className="mt-2">
              <h1 className="text-center lg:text-start text-2xl font-semibold mb-5">Anúncie seu imóvel</h1>
              <p className="text-accent-foreground text-center lg:text-start text-lg font-medium">
                Crie agora sua conta na Hostdoor e anuncie seu imóvel para que todos possam ver. Adicione fotos, descrição, localização, compartilhe o anúncio, e gerencie tudo de forma fácil, segura e rápida.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:flex lg:max-w-[1200px] max-w-[90%] mx-auto lg:mx-auto lg:items-center lg:flex-row-reverse">
          <Image
            alt="assinatura digital"
            src="/assets/images/contract.jpg"
            width={500}
            height={500}
            className="my-10 lg:my-0 mx-auto lg:w-1/2"
          />
          <div className="lg:w-1/2">
            <span className="underline underline-offset-5 text-muted-foreground decoration-gray-300 flex justify-center lg:justify-start flex-row-reverse">Contratos</span>
            <div className="mt-2">
              <h1 className="text-center lg:text-end text-2xl font-semibold mb-5">
                Crie seu contrato digital
              </h1>
              <p className="text-accent-foreground text-center lg:text-end text-lg font-medium">
                Gere contratos de locação automaticamente com validade jurídica, assinatura digital certificada e segurança total.
                A Hostdoor utiliza validação ICP-Brasil, reconhecimento facial, registro de IP e autenticação de documentos e CPF,
                garantindo a legitimidade de cada contrato.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="lg:flex lg:max-w-[1200px] max-w-[90%] mx-auto lg:mx-auto lg:items-center mb-20">
          <Image
            alt="assinatura digital"
            src="/assets/images/security.jpg"
            width={500}
            height={500}
            className="my-10 lg:my-0 mx-auto lg:w-1/2"
          />
          <div className="lg:w-1/2">
            <span className="underline underline-offset-5 text-muted-foreground justify-center flex lg:justify-start decoration-gray-300">Segurança</span>
            <div className="mt-2">
              <h1 className="text-center lg:text-start text-2xl font-semibold mb-5">
                Máxima segurança em cada etapa
              </h1>
              <ul className="mx-auto justify-center lg:justify-start lg:grid text-accent-foreground text-base font-medium space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} strokeWidth={3} />
                  Contrato com validade jurídica (ICP-Brasil)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} strokeWidth={3} />
                  Assinatura digital com reconhecimento facial
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} strokeWidth={3} />
                  Validação automática de CPF e documentos
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} strokeWidth={3} />
                  Registro de IP e trilha de autenticação segura
                </li>
                <li className="flex items-center gap-2">
                  <Check className="text-green-600" size={18} strokeWidth={3} />
                  Geração automática de cobranças e caução após assinatura
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  )
}