"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/components/Shadcn-ui/dialog";
import { Separator } from "@/shared/components/Shadcn-ui/separator";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function OwnerGuide() {
    const ownerTopics = [
        {
            title: "Como criar sua conta de proprietário",
            content: (
                <>
                    <p>
                        Para criar sua conta de proprietário basta acessar{" "}
                        <a href="https://app.hostdoor.com.br" target="_blank" className="underline">
                            <strong>app.hostdoor.com.br</strong>
                        </a>, clicar em Criar conta, inserir os dados solicitados, verificar seu e-mail e pronto, sua conta já está criada.
                    </p>
                    <p>Após isso complete seus dados na aba perfil para desbloquear todas as funcionalidades disponíveis.</p>
                </>
            ),
        },
        {
            title: "Como cadastrar um imóvel",
            content: (
                <>
                    <p>
                        Acesse sua conta em{" "}
                        <a href="https://app.hostdoor.com.br" target="_blank" className="underline">
                            <strong>app.hostdoor.com.br</strong>
                        </a>, vá até a aba <strong>Imóveis</strong> e clique em <strong>Adicionar Imóvel</strong>.
                    </p>
                    <p>Preencha o formulário com fotos, localização, valores e outras informações relevantes. O imóvel aparecerá no catálogo em poucos minutos.</p>
                </>
            ),
        },
        {
            title: "Recebimento de contatos de inquilinos",
            content: (
                <>
                    <p>
                        Quando um interessado clicar em &quot;Falar com o proprietário&quot;, seu número registrado no cadastro da conta será disponibilizado para contato.
                    </p>
                </>
            ),
        },
        {
            title: "Geração e assinatura de contrato",
            content: (
                <>
                    <p>Após acordo com o inquilino, você pode gerar o contrato dentro da Hostdoor usando o sistema de geração automática.</p>
                    <p>A assinatura é digital, com validade jurídica, e as partes são notificadas por e-mail para assinar com segurança.</p>
                </>
            ),
        },
        {
            title: "Recebimento automático do aluguel",
            content: (
                <>
                    <p>As cobranças serão enviadas automaticamente para o inquilino através de e-mail, WhatsApp e SMS.</p>
                    <p>As cobranças serão sempre realizadas 7 dias antes da data estipulada com vencimento na data prevista em contrato.</p>
                    <p>Quando o inquilino realiza o pagamento pela plataforma, o valor é repassado automaticamente para sua conta bancária cadastrada.</p>
                    <p>Sem atrasos, sem intermediários. A Hostdoor cuida da cobrança e da segurança da transação.</p>
                </>
            ),
        },
    ];

    return (
        <main className="max-w-[90%] mx-auto mt-28 mb-10 lg:mb-20 lg:mt-40 lg:max-w-[60%] space-y-5">
            <h1 className="text-2xl font-bold">Guia do Proprietário</h1>

            <div className="space-y-5">
                <p className="font-semibold">
                    Cadastre, gerencie e alugue seus imóveis de forma prática e segura com a Hostdoor.
                </p>

                <ul className="flex flex-col space-y-1 lg:p-3 py-2">
                    {ownerTopics.map((topic, index) => (
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
                                <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
                                    <DialogTitle className="text-xl font-semibold">{topic.title}</DialogTitle>
                                    <div className="grid gap-5">{topic.content}</div>
                                </DialogContent>
                            </Dialog>
                            {index < ownerTopics.length - 1 && <Separator />}
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
