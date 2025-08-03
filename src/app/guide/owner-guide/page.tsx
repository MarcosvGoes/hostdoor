"use client";

import { Card } from "@/shared/components/Shadcn-ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/shared/components/Shadcn-ui/dialog";

export default function OwnerGuide() {
    return (
        <main className="max-w-[90%] mx-auto py-10 space-y-5">
            <h1 className="text-2xl font-bold">Guia do Proprietário</h1>

            <div className="space-y-5">
                <p className="font-semibold">
                    Cadastre, gerencie e alugue seus imóveis de forma prática e segura com a Dommi.
                </p>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
                    {/* Tópico 1 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="p-4 h-28 justify-center cursor-pointer">
                                <p>Como criar sua conta de proprietário</p>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
                            <DialogTitle className="text-xl font-semibold my-4">
                                Como criar sua conta de proprietário
                            </DialogTitle>
                            <div className="grid gap-5">
                                <p>
                                    Para criar sua conta de proprietário basta acessar{" "}
                                    <a href="https://dommi-rent.vercel.app" target="_blank" className="underline">
                                        <strong>dommi-rent.vercel.app</strong>
                                    </a>, clicar em Criar conta, inserir os dados solicitados, verificar seu e-mail e pronto, sua conta já está criada.
                                </p>
                                <p>
                                    Após isso complete seus dados na aba perfil para desbloquear todas as funcionalidades disponíveis.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Tópico 2 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="p-4 h-28 justify-center cursor-pointer">
                                <p>Como cadastrar um imóvel</p>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
                            <DialogTitle className="text-xl font-semibold my-4">
                                Como cadastrar um imóvel
                            </DialogTitle>
                            <div className="grid gap-5">
                                <p>
                                    Acesse sua conta em{" "}
                                    <a href="https://dommi-rent.vercel.app" target="_blank" className="underline">
                                        <strong>dommi-rent.vercel.app</strong>
                                    </a>, vá até a aba <strong>Imóveis</strong> e clique em <strong>Adicionar Imóvel</strong>.
                                </p>
                                <p>
                                    Preencha o formulário com fotos, localização, valores e outras informações relevantes. O imóvel aparecerá no catálogo em poucos minutos.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Tópico 4 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="p-4 h-28 justify-center cursor-pointer">
                                <p>Recebimento de contatos de inquilinos</p>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
                            <DialogTitle className="text-xl font-semibold my-4">
                                Recebimento de contatos de inquilinos
                            </DialogTitle>
                            <div className="grid gap-5">
                                <p>
                                    Quando um interessado clicar em &quot;Falar com o proprietário&quot;, seu número registrado no cadastro da conta será disponibilizado para contato.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Tópico 5 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="p-4 h-28 justify-center cursor-pointer">
                                <p>Geração e assinatura de contrato</p>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
                            <DialogTitle className="text-xl font-semibold my-4">
                                Geração e assinatura de contrato
                            </DialogTitle>
                            <div className="grid gap-5">
                                <p>
                                    Após acordo com o inquilino, você pode gerar o contrato dentro da Dommi usando o sistema de geração automática.
                                </p>
                                <p>
                                    A assinatura é digital, com validade jurídica, e as partes são notificadas por e-mail para assinar com segurança.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>

                    {/* Tópico 6 */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Card className="p-4 h-28 justify-center cursor-pointer">
                                <p>Recebimento automático do aluguel</p>
                            </Card>
                        </DialogTrigger>
                        <DialogContent className="my-10 overflow-y-auto w-screen bg-background">
                            <DialogTitle className="text-xl font-semibold my-4">
                                Recebimento automático do aluguel
                            </DialogTitle>
                            <div className="grid gap-5">
                                <p>
                                    As cobranças serão enviadas automáticamente para o inquilino através de e-mail, WhatsApp e SMS.
                                </p>
                                <p>
                                    As cobranças serão sempre realizadas 7 dias antes da data estipulada com vencimento na data prevista em contrato.
                                </p>
                                <p>
                                    Quando o inquilino realiza o pagamento pela plataforma, o valor é repassado automaticamente para sua conta bancária cadastrada.
                                </p>
                                <p>
                                    Sem atrasos, sem intermediários. A Dommi cuida da cobrança e da segurança da transação.
                                </p>
                            </div>
                        </DialogContent>
                    </Dialog>
                </ul>

                <p className="italic text-sm text-gray-500">
                    Lembre-se: a Dommi está aqui para garantir que todo o processo seja seguro e justo para ambas as partes.
                </p>
            </div>
        </main>
    );
}
