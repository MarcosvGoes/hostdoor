import {
  Banknote,
  FilePenLine,
  ShieldCheck,
  Wallet,
  Home,
  Globe,
  BellRing,
  Headset,
} from "lucide-react";

export default function Solutions() {
  return (
    <main className="py-10 max-w-[90%] mx-auto">
      <section className="gap-y-5 grid">
        <div>
          <h1 className="font-bold text-darkText text-2xl">Soluções completas para seu imóvel</h1>
          <p className="text-[10px]">Simplifique e profissionalize a gestão da sua locação</p>
        </div>

        <div className="text-sm font-semibold text-darkText grid gap-y-2">
          <p>
            Com a Dommi, você tem a tranquilidade de uma gestão 100% digital: cuidamos da cobrança,
            repasse, contratos, caução e muito mais. Segurança, agilidade e praticidade em um só lugar.
          </p>
        </div>
      </section>

      <div className="mt-10">
        <ul className="grid lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-8 text-darkText">
          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <Banknote />
              <h2 className="font-bold">Intermediação de Pagamentos</h2>
            </div>
            <p className="text-sm">
              Receba seus aluguéis sempre em dia com repasses automáticos, aviso de cobrança e sistema
              antifraude. Menos inadimplência, mais tranquilidade para você.
            </p>
          </li>

          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <ShieldCheck />
              <h2 className="font-bold">Caução Seguro</h2>
            </div>
            <p className="text-sm">
              O valor da caução é guardado com segurança e só liberado após vistoria. Mais proteção
              para o proprietário e transparência para o inquilino.
            </p>
          </li>

          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <FilePenLine />
              <h2 className="font-bold">Contrato com Assinatura Digital</h2>
            </div>
            <p className="text-sm">
              Gere contratos personalizados com validade jurídica, assine online com todas as partes
              envolvidas e armazene tudo na nuvem. Rápido, seguro e sem papelada.
            </p>
          </li>

          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <Wallet />
              <h2 className="font-bold">Diversas Formas de Pagamento</h2>
            </div>
            <p className="text-sm">
              Pix, boleto e cartão de crédito. Ofereça flexibilidade para o inquilino e aumente suas
              chances de receber no prazo, sem complicações.
            </p>
          </li>

          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <Globe />
              <h2 className="font-bold">Vitrine Digital do Imóvel</h2>
            </div>
            <p className="text-sm">
              Crie uma página exclusiva para o seu imóvel e compartilhe com interessados. Atraia
              potenciais inquilinos de forma simples e eficiente.
            </p>
          </li>

          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <Home />
              <h2 className="font-bold">Gestão 100% Online</h2>
            </div>
            <p className="text-sm">
              Acesse contratos, pagamentos, status de caução e muito mais direto do seu painel. Tudo
              centralizado em um só lugar, acessível de qualquer dispositivo.
            </p>
          </li>

          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <BellRing />
              <h2 className="font-bold">Notificações Automáticas</h2>
            </div>
            <p className="text-sm">
              Lembretes e avisos são enviados automaticamente para inquilinos e testemunhas, agilizando
              assinaturas, pagamentos e etapas do contrato.
            </p>
          </li>

          <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
            <div className="flex items-center gap-x-2">
              <Headset />
              <h2 className="font-bold">Suporte Humanizado</h2>
            </div>
            <p className="text-sm">
              Nossa equipe está disponível para te auxiliar em cada etapa do processo. Atendimento
              humano, direto e eficiente sempre que você precisar.
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
}
