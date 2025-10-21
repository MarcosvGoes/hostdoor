"use client";

import {
  Banknote,
  FilePenLine,
  ShieldCheck,
  Wallet,
  Home,
  Globe,
  BellRing,
  Headset,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Solutions() {
  const items = [
    {
      icon: <Banknote size={22} />,
      title: "Intermediação de Pagamentos",
      text: "Receba seus aluguéis com total segurança. A Hostdoor gerencia cobranças, repasses automáticos e sistema antifraude para reduzir a inadimplência e aumentar sua tranquilidade.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Caução Seguro",
      text: "Proteção e transparência garantidas. O valor da caução é armazenado com segurança e liberado apenas após vistoria aprovada, sem complicações.",
    },
    {
      icon: <FilePenLine size={22} />,
      title: "Contrato com Assinatura Digital",
      text: "Crie contratos personalizados e juridicamente válidos. Todas as partes assinam online e o documento é armazenado com segurança na nuvem.",
    },
    {
      icon: <Wallet size={22} />,
      title: "Múltiplas Formas de Pagamento",
      text: "Pix, boleto ou cartão — você escolhe. Dê mais flexibilidade ao inquilino e receba seus aluguéis sempre no prazo.",
    },
    {
      icon: <Globe size={22} />,
      title: "Vitrine Digital do Imóvel",
      text: "Apresente seu imóvel de forma profissional com uma página exclusiva e compartilhável. Alcance mais interessados de forma simples e eficiente.",
    },
    {
      icon: <Home size={22} />,
      title: "Gestão 100% Online",
      text: "Centralize tudo: contratos, pagamentos, cauções e comunicações em um único painel. Acesse de qualquer lugar, a qualquer hora.",
    },
    {
      icon: <BellRing size={22} />,
      title: "Notificações Automáticas",
      text: "A Hostdoor envia lembretes e avisos automáticos para todos os envolvidos — sem precisar se preocupar com prazos ou esquecimentos.",
    },
    {
      icon: <Headset size={22} />,
      title: "Suporte Humanizado",
      text: "Conte com nossa equipe para resolver dúvidas e imprevistos com agilidade. Atendimento humano, direto e eficiente sempre que precisar.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Relatórios Inteligentes e Insights",
      text: "Acompanhe o desempenho dos seus imóveis com relatórios automáticos. Veja valores recebidos, taxas aplicadas e métricas de rentabilidade para tomar decisões mais estratégicas.",
    },
  ];

  return (
    <main className="mt-28 mb-10 lg:mb-20 lg:mt-40 max-w-7xl mx-auto px-6">
      <section className="text-center mb-12">
        <h1 className="font-bold text-3xl text-darkText mb-3">
          Soluções completas para seu imóvel
        </h1>
        <p className="text-gray-600 text-base">
          Simplifique e profissionalize a gestão da sua locação com tecnologia, segurança e agilidade.
        </p>
      </section>

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background-white rounded-xl p-6 shadow-[0_3px_10px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-x-2 mb-3 text-primary">
              {item.icon}
              <h2 className="font-semibold text-lg text-darkText">{item.title}</h2>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{item.text}</p>
          </motion.li>
        ))}
      </ul>
    </main>
  );
}
