"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Price() {
    return (
        <main className="max-w-[90%] mx-auto mt-28 mb-10 lg:mb-20 lg:mt-40 lg:max-w-[80%] space-y-5 flex flex-col lg:flex-row">

            <Image width={500} height={500} alt="price" src="/assets/images/price.jpg" className="hidden lg:block" />

            <main className="px-5 mx-auto max-w-lg text-darkText">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-10"
                >
                    <h1 className="text-3xl font-extrabold bg-gradient-to-r from-[#91b5fb] to-[#4546EA] bg-clip-text text-transparent">
                        Um único valor, total transparência
                    </h1>
                    <p className="text-sm mt-2 text-gray-500">Sem pegadinhas. Sem taxas escondidas.</p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative bg-white border border-gray-200 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8 overflow-hidden"
                >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#91b5fb]/10 to-[#4546EA]/10 blur-2xl" />

                    <div className="relative z-10 text-center">
                        <p className="text-gray-500 font-semibold">Outras imobiliárias</p>
                        <s className="block text-gray-400 text-lg font-bold">até 12% sobre o aluguel</s>

                        <div className="mt-6">
                            <h2 className="text-3xl font-extrabold text-[#4546EA]">R$ 9,90/mês</h2>
                            <p className="text-sm text-[#4546EA] font-medium">+ 5% sobre o aluguel</p>
                            <div className="mt-2 inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs font-bold">
                                🎉 3 primeiros meses grátis
                            </div>
                        </div>

                        <ul className="mt-6 text-left grid gap-3">
                            {[
                                "Cobrança automática e segura",
                                "Geração de contrato digital",
                                "Assinatura eletrônica integrada",
                                "Múltiplas formas de pagamento",
                                "Suporte humano e rápido",
                                "Maior visibilidade para seus imóveis",
                                "Zero burocracia",
                                "Repasse instantâneo",
                            ].map((benefit, i) => (
                                <motion.li
                                    key={benefit}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-2 text-sm font-medium"
                                >
                                    <CheckCircle2 className="text-indigo-500 w-4 h-4 flex-shrink-0" />
                                    {benefit}
                                </motion.li>
                            ))}
                        </ul>
                        <p className="text-[10px] text-gray-500 mt-8">
                            A cobrança de 5% é aplicada **apenas sobre o valor do aluguel**, excluindo IPTU e condomínio.
                        </p>
                        <p className="text-[10px] text-gray-500 mt-2">
                            A taxa de R$9,90 por mês se refere a taxa de uso da plataforma, para manter seu imóvel anúnciado.
                        </p>
                    </div>
                </motion.div>
            </main>
        </main>
    );
}
