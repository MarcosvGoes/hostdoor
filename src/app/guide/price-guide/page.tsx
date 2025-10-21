"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/components/Shadcn-ui/dialog";
import { Separator } from "@/shared/components/Shadcn-ui/separator";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PriceGuide() {
  const priceTopics = [
    {
      title: "Pesquise valores na sua região",
      content: (
        <p>
          Antes de definir o valor do aluguel, veja quanto estão pedindo por imóveis similares no seu bairro ou cidade. Isso ajuda a manter o preço competitivo.
        </p>
      ),
    },
    {
      title: "Considere tamanho, localização e estado",
      content: (
        <p>
          Imóveis maiores, bem localizados e em bom estado costumam ter maior valor de mercado. Avalie esses pontos com realismo ao definir o preço.
        </p>
      ),
    },
    {
      title: "Use o preço médio por m²",
      content: (
        <p>
          Divida o valor de imóveis similares pela metragem para entender o valor médio por metro quadrado. Isso ajuda a manter a coerência com o mercado.
        </p>
      ),
    },
    {
      title: "Ofereça descontos para contratos longos",
      content: (
        <p>
          Contratos de 24 ou 36 meses dão mais estabilidade e menor rotatividade. Oferecer um desconto simbólico pode atrair inquilinos comprometidos.
        </p>
      ),
    },
    {
      title: "Considere benefícios extras",
      content: (
        <p>
          Itens como segurança 24h, garagem, mobília, ar-condicionado ou eletrodomésticos agregam valor ao imóvel e podem justificar um preço mais alto.
        </p>
      ),
    },
  ];

  return (
    <main className="max-w-[90%] mx-auto mt-28 mb-10 lg:mb-20 lg:mt-40 lg:max-w-[60%] space-y-5">
      <h1 className="text-2xl font-bold">Guia de Preço</h1>

      <div className="space-y-5">
        <p className="font-semibold">
          Definir o valor ideal de aluguel é essencial para atrair bons inquilinos e garantir um retorno justo ao proprietário.
        </p>

        <ul className="flex flex-col space-y-1 lg:p-3 py-2">
          {priceTopics.map((topic, index) => (
            <motion.li
              key={topic.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="mb-0"
            >
              <Dialog>
                <DialogTrigger className="text-start flex items-center gap-x-2 hover:bg-muted p-1 my-1 lg:px-2 rounded-sm cursor-pointer">
                  <ChevronRight size={14} /> {topic.title}
                </DialogTrigger>
                <DialogContent className="my-10 w-screen bg-background overflow-y-auto">
                  <DialogTitle className="text-xl font-semibold">{topic.title}</DialogTitle>
                  <div className="grid gap-5">{topic.content}</div>
                </DialogContent>
              </Dialog>
              {index < priceTopics.length - 1 && <Separator />}
            </motion.li>
          ))}
        </ul>

        <p className="italic text-sm text-gray-500">
          Lembre-se: a Hostdoor está aqui para garantir que todo o processo seja seguro e justo para ambas as partes.
        </p>
      </div>
    </main>
  );
}
