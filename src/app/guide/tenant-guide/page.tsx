"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/components/Shadcn-ui/dialog";
import { Separator } from "@/shared/components/Shadcn-ui/separator";
import { ChevronRight } from "lucide-react";

export default function TenantGuide() {
  return (
    <main className="max-w-[90%] mx-auto mt-28 mb-10 lg:mb-20 lg:mt-40 lg:max-w-[60%] space-y-5">
      <h1 className="text-2xl font-bold">Guia do Inquilino</h1>

      <div className="space-y-5">
        <p className="font-semibold">
          Seja bem-vindo à Hostdoor! Aqui explicamos tudo o que você precisa saber para alugar com segurança e facilidade.
        </p>

        <ul className="flex flex-col space-y-1 lg:p-3 py-2">
          {/* Tópico 1 */}
          <Dialog>
            <DialogTrigger className="text-start flex items-center gap-x-2 hover:bg-muted p-1 lg:px-2 rounded-sm cursor-pointer">
              <ChevronRight size={14} />  Como escolher um imóvel no catálogo
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold">
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

          <Separator />

          {/* Tópico 2 */}
          <Dialog>
            <DialogTrigger className="text-start flex items-center gap-x-2 hover:bg-muted p-1 lg:px-2 rounded-sm cursor-pointer">
              <ChevronRight size={14} />  Contato com o proprietário
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold">
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

          <Separator />

          {/* Tópico 3 */}
          <Dialog>
            <DialogTrigger className="text-start flex items-center gap-x-2 hover:bg-muted p-1 lg:px-2 rounded-sm cursor-pointer">
              <ChevronRight size={14} />  Visitação e propostas
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold">
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

          <Separator />

          {/* Tópico 4 */}
          <Dialog>
            <DialogTrigger className="text-start flex items-center gap-x-2 hover:bg-muted p-1 lg:px-2 rounded-sm cursor-pointer">
              <ChevronRight size={14} />Assinatura digital do contrato
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold">
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

          <Separator />

          {/* Tópico 5 */}
          <Dialog>
            <DialogTrigger className="text-start flex items-center gap-x-2 hover:bg-muted p-1 lg:px-2 rounded-sm cursor-pointer">
              <ChevronRight size={14} />  Pagamentos via plataforma
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold">
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

          <Separator />

          {/* Tópico 6 */}
          <Dialog>
            <DialogTrigger className="text-start flex items-center gap-x-2 hover:bg-muted p-1 lg:px-2 rounded-sm cursor-pointer">
              <ChevronRight size={14} />  Suporte durante toda sua estadia
            </DialogTrigger>
            <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
              <DialogTitle className="text-xl font-semibold">
                Suporte durante toda sua estadia
              </DialogTitle>
              <div className="grid gap-5">
                <p>
                  A Hostdoor oferece suporte contínuo para te ajudar em qualquer necessidade durante sua locação.
                </p>
                <p>
                  Entre em contato conosco por e-mail ou WhatsApp para atendimento sempre que precisar.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </ul>

        <p className="italic text-sm text-gray-500">
          Lembre-se: a Hostdoor está aqui para garantir que todo o processo seja seguro e justo para ambas as partes.
        </p>
      </div>
    </main>
  );
}
