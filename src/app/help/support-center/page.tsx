"use client";

import { Mail } from "lucide-react";
import { Button } from "@/shared/components/Shadcn-ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/components/Shadcn-ui/card";
import Image from "next/image";

export default function SupportCenter() {
    return (
        <main className="max-w-[90%] mx-auto py-10 space-y-10">
            <h1 className="text-3xl font-bold">Central de Suporte</h1>

            <p className="text-muted-foreground text-base">
                Estamos aqui para te ajudar. Entre em contato com a nossa equipe pelo canal mais adequado para sua necessidade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Suporte por E-mail */}
                <Card className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-between m-0 p-5">
                    <CardHeader className="p-0">
                        <CardTitle className="flex items-center gap-2">
                            <Mail className="text-primary" size={20} />
                            Suporte por E-mail
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4 text-sm text-muted-foreground">
                        <p>Envie sua dúvida, solicitação ou problema para nossa equipe.</p>
                        <p>Tempo de resposta: até 24 horas úteis.</p>
                    </CardContent>
                    <Button asChild variant="secondary" className="hover:cursor-pointer">
                        <a href="mailto:suporte@dommi.com" target="_blank" rel="noopener noreferrer">
                            Enviar E-mail
                        </a>
                    </Button>
                </Card>

                {/* Suporte via WhatsApp */}
                <Card className="shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-between m-0 p-5">
                    <CardHeader className="p-0">
                        <CardTitle className="flex items-center gap-2">
                            <Image src="/assets/icons/whatsapp-icon.svg" width={20} height={20} alt="logo whatsapp" />
                            WhatsApp
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4 text-sm text-muted-foreground">
                        <p>Atendimento para situações urgentes, como acesso à plataforma.</p>
                        <p>Disponível em horário comercial.</p>
                    </CardContent>
                    <Button asChild variant="secondary" className="hover:cursor-pointer">
                        <a
                            href="https://wa.me/+5527988567724"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Iniciar conversa
                        </a>
                    </Button>

                </Card>
            </div>

            <div className="text-center text-xs text-gray-400 mt-8">
                * Em breve teremos chat direto pela plataforma.
            </div>
        </main>
    );
}
