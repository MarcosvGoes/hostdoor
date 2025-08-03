"use client";

import { Card } from "@/shared/components/Shadcn-ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/components/Shadcn-ui/dialog";

export default function PriceGuide() {
  return (
    <main className="max-w-[90%] mx-auto py-10 space-y-5">
      <h1 className="text-2xl font-bold">Guia de Preço</h1>

      <div className="space-y-5">
        <p className="font-semibold">
          Definir o valor ideal de aluguel é essencial para atrair bons inquilinos e garantir um retorno justo ao proprietário.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {/* Item 1 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Pesquise valores na sua região</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 w-screen bg-background overflow-y-auto">
              <DialogTitle className="text-xl font-semibold my-4">Pesquise valores na sua região</DialogTitle>
              <div className="grid gap-5">
                <p>
                  Antes de definir o valor do aluguel, veja quanto estão pedindo por imóveis similares no seu bairro ou cidade. Isso ajuda a manter o preço competitivo.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Item 2 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Considere tamanho, localização e estado</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 w-screen bg-background overflow-y-auto">
              <DialogTitle className="text-xl font-semibold my-4">Considere tamanho, localização e estado</DialogTitle>
              <div className="grid gap-5">
                <p>
                  Imóveis maiores, bem localizados e em bom estado costumam ter maior valor de mercado. Avalie esses pontos com realismo ao definir o preço.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Item 3 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Use o preço médio por m²</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 w-screen bg-background overflow-y-auto">
              <DialogTitle className="text-xl font-semibold my-4">Use o preço médio por m²</DialogTitle>
              <div className="grid gap-5">
                <p>
                  Divida o valor de imóveis similares pela metragem para entender o valor médio por metro quadrado. Isso ajuda a manter a coerência com o mercado.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Item 4 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Ofereça descontos para contratos longos</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 w-screen bg-background overflow-y-auto">
              <DialogTitle className="text-xl font-semibold my-4">Ofereça descontos para contratos longos</DialogTitle>
              <div className="grid gap-5">
                <p>
                  Contratos de 24 ou 36 meses dão mais estabilidade e menor rotatividade. Oferecer um desconto simbólico pode atrair inquilinos comprometidos.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Item 7 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Considere benefícios extras</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 w-screen bg-background overflow-y-auto">
              <DialogTitle className="text-xl font-semibold my-4">Considere benefícios extras</DialogTitle>
              <div className="grid gap-5">
                <p>
                  Itens como segurança 24h, garagem, mobília, ar-condicionado ou eletrodomésticos agregam valor ao imóvel e podem justificar um preço mais alto.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </ul>
      </div>
    </main>
  );
}
