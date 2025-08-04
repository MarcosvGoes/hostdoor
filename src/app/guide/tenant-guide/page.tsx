"use client";

import { Card } from "@/shared/components/Shadcn-ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/components/Shadcn-ui/dialog";

export default function TenantGuide() {
  return (
    <main className="max-w-[90%] mx-auto py-10 space-y-5">
      <h1 className="text-2xl font-bold">Guia do Inquilino</h1>

      <div className="space-y-5">
        <p className="font-semibold">
          Seja bem-vindo à HostDoor! Aqui explicamos tudo o que você precisa saber para alugar com segurança e facilidade.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
          {/* Tópico 1 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Como escolher um imóvel no catálogo</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold my-4">
                Como escolher um imóvel no catálogo
              </DialogTitle>
              <div className="grid gap-5">
                <p>
                  Acesse{" "}
                  <a href="https://app.hostdoor.com.br" target="_blank" className="underline">
                    <strong>app.hostdoor.com.br</strong>
                  </a>{" "}
                  e utilize os filtros por localização, valor, número de quartos, tipo de imóvel e outras preferências.
                </p>
                <p>
                  Explore os detalhes de cada imóvel e entre em contato para marcar uma visita.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Tópico 2 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Contato com o proprietário</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold my-4">
                Contato com o proprietário
              </DialogTitle>
              <div className="grid gap-5">
                <p>
                  Na página do imóvel, clique no botão <strong>“Falar com o proprietário”</strong>.
                </p>
                <p>
                  Você poderá entrar em contato por e-mail, telefone ou WhatsApp, conforme os dados fornecidos pelo anunciante.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Tópico 3 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Visitação e propostas</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold my-4">
                Visitação e propostas
              </DialogTitle>
              <div className="grid gap-5">
                <p>
                  Combine a visita diretamente com o proprietário usando as informações de contato.
                  Certifique-se de esclarecer todas as dúvidas antes da visita.
                </p>
                <p>
                  Caso concordem em um valor diferente do anunciado, solicite ao proprietário que atualize o valor na plataforma antes de gerar o contrato.
                </p>
                <p>
                  Para seguir com a locação, peça ao proprietário que gere o contrato com seus dados. Você receberá um e-mail com o link para assinatura digital.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Tópico 4 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Assinatura digital do contrato</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold my-4">
                Assinatura digital do contrato
              </DialogTitle>
              <div className="grid gap-5">
                <p>
                  Após a geração do contrato, você receberá um link por e-mail para realizar a assinatura digital.
                </p>
                <p>
                  O processo é 100% online, prático e possui validade jurídica garantida.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Tópico 5 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Pagamentos via plataforma</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold my-4">
                Pagamentos via plataforma
              </DialogTitle>
              <div className="grid gap-5">
                <p>
                  Os boletos ou links de pagamento são enviados com 7 dias de antecedência por e-mail, WhatsApp e SMS.
                </p>
                <p>
                  Você poderá pagar por Pix ou boleto diretamente pela plataforma, com total segurança.
                </p>
              </div>
            </DialogContent>
          </Dialog>

          {/* Tópico 6 */}
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-4 h-28 justify-center cursor-pointer">
                <p>Suporte durante toda sua estadia</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold my-4">
                Suporte durante toda sua estadia
              </DialogTitle>
              <div className="grid gap-5">
                <p>
                  A HostDoor oferece suporte contínuo para te ajudar em qualquer necessidade durante sua locação.
                </p>
                <p>
                  Entre em contato conosco por e-mail ou WhatsApp para atendimento sempre que precisar.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </ul>

        <p className="italic text-sm text-gray-500">
          Lembre-se: a HostDoor está aqui para garantir que todo o processo seja seguro e justo para ambas as partes.
        </p>
      </div>
    </main>
  );
}
