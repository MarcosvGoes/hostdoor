import { Card } from "@/shared/components/Shadcn-ui/card";
import { ChevronRight } from "lucide-react";

export default function TenantGuide() {
    return (
        <main className="max-w-[90%] mx-auto py-10 lg:py-20 space-y-5">
            <h1 className="text-2xl lg:text-4xl font-bold">Guia do Inquilino</h1>

            <div className="space-y-5">
                <p className="font-semibold lg:text-lg">
                    Seja bem-vindo à Dommi! Aqui explicamos tudo que você precisa saber para alugar com segurança e facilidade.
                </p>

                <ul className="list-disc list-inside space-y-2 flex gap-2">
                    <Card className="p-4">
                        <p>Como escolher um imóvel no catálogo </p>
                        <ChevronRight />
                    </Card>
                    <Card className="p-4 flex"><p>Contato com o proprietário </p><ChevronRight /></Card>
                    <Card className="p-4 flex"><p>Visitação e propostas </p><ChevronRight /></Card>
                    <Card className="p-4 flex"><p>Assinatura digital do contrato </p><ChevronRight /></Card>
                    <Card className="p-4 flex"><p>Pagamentos via plataforma </p><ChevronRight /></Card>
                    <Card className="p-4 flex"><p>Suporte durante toda sua estadia </p><ChevronRight /></Card>
                </ul>

                <p className="italic text-sm text-gray-500">
                    Lembre-se: a Dommi está aqui para garantir que todo o processo seja seguro e justo para ambas as partes.
                </p>
            </div>
        </main>
    );
}
