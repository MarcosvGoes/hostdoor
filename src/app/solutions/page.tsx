import { Banknote, FilePenLine, ShieldCheck, Wallet } from "lucide-react";

export default function Solutions() {
    return (
        <main className="py-16 max-w-[90%] mx-auto">
            <section className="gap-y-5 grid">
                <div className="mt-10">
                    <h1 className="font-bold text-darkText text-2xl">Soluções para seu imóvel</h1>
                    <p className="text-xs">Gerencie de ponta a ponta a locação de seu imóvel</p>
                </div>

                <div className="text-sm font-semibold text-darkText grid gap-y-2">
                    <p>Cuidamos de tudo, desde a cobrança e repasse até a garantia de que seu imóvel será devolvido nas mesmas condições que foi entregue. Simples, seguro e sem preocupações.</p>
                </div>
            </section>

            <div className="mt-10">
                <ul className="grid lg:grid-cols-2 xl:grid-cols-4 gap-3 lg:gap-8 text-darkText">
                    <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <Banknote />
                            <h2 className="font-bold">Intermediação de Pagamentos</h2>
                        </div>
                        <p className="text-sm">Garantimos que você receba seus aluguéis no prazo certo, sem preocupações. Com pagamentos automatizados e repasse direto, você tem mais segurança e menor inadimplência.</p>
                    </li>
                    <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <ShieldCheck />
                            <h2 className="font-bold">Caução Seguro</h2>
                        </div>
                        <p className="text-sm">O valor do caução fica protegido até o fim do contrato. O repasse só acontece após a confirmação de que o imóvel está em boas condições, garantindo mais segurança para ambas as partes.</p>
                    </li>
                    <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <FilePenLine />
                            <h2 className="font-bold">Contrato e assinatura digital</h2>
                        </div>
                        <p className="text-sm">Crie e assine contratos digitalmente, de forma rápida e segura. Com validade jurídica, tudo fica armazenado na plataforma, sem burocracia ou papelada.</p>
                    </li>
                    <li className="grid bg-background-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5 rounded-sm gap-y-2">
                        <div className="flex items-center gap-x-2">
                            <Wallet />
                            <h2 className="font-bold">Variedade de pagamentos</h2>
                        </div>
                        <p className="text-sm">Aceitamos todos os meios de pagamento – Pix, boleto e cartão de crédito – para garantir que o inquilino tenha sempre uma opção acessível. Assim, você recebe no dia certo, sem complicações.</p>
                    </li>
                </ul>
            </div>
        </main>
    )
}