import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/Shadcn-ui/accordion";
import Link from "next/link";

export default function FAQ() {
    return (
    <main className="max-w-[90%] mx-auto mt-28 mb-10 lg:mb-20 lg:mt-40 lg:max-w-[70%] space-y-5">
            <h1 className="text-2xl font-bold">Perguntas Frequentes</h1>

            <Accordion type="single" className="">

                {/* GERAL */}
                <AccordionItem value="o-que-e-a-hostdoor">
                    <AccordionTrigger className="font-semibold py-6">O que é a Hostdoor?</AccordionTrigger>
                    <AccordionContent>
                        A Hostdoor é uma plataforma digital que conecta inquilinos e proprietários para locações residenciais e comerciais, oferecendo segurança, contratos digitais e preços justos — sem a intermediação de imobiliárias tradicionais.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="como-a-hostdoor-ganha-dinheiro">
                    <AccordionTrigger className="font-semibold py-6">Como a Hostdoor ganha dinheiro?</AccordionTrigger>
                    <AccordionContent>
                        A Hostdoor cobra uma taxa fixa de 5% sobre o valor do aluguel, já visível no momento da contratação. Nada de comissões escondidas ou cobranças surpresa — o valor que você vê é o que você paga.
                    </AccordionContent>
                </AccordionItem>

                {/* INQUILINOS */}
                <AccordionItem value="como-alugar-imovel">
                    <AccordionTrigger className="font-semibold py-6">Como faço para alugar um imóvel na Hostdoor?</AccordionTrigger>
                    <AccordionContent>
                        Acesse o catálogo, escolha o imóvel, entre em contato com o proprietário e agende uma visita. Se aprovado, você receberá um contrato digital para assinatura e poderá fazer todos os pagamentos pela plataforma.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="preciso-de-fiador">
                    <AccordionTrigger className="font-semibold py-6">Preciso de fiador ou garantia?</AccordionTrigger>
                    <AccordionContent>
                        Não obrigatoriamente. A Hostdoor permite caução em dinheiro ou seguro-fiança, dependendo do tipo de imóvel e da negociação entre as partes.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="como-sao-feitos-os-pagamentos">
                    <AccordionTrigger className="font-semibold py-6">Como são feitos os pagamentos de aluguel?</AccordionTrigger>
                    <AccordionContent>
                        Todos os pagamentos são feitos diretamente pela plataforma da Hostdoor, via PIX ou boleto. O valor é repassado automaticamente para o proprietário.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="e-se-o-imovel-tiver-problemas">
                    <AccordionTrigger className="font-semibold py-6">O que acontece se o imóvel tiver problemas após a mudança?</AccordionTrigger>
                    <AccordionContent>
                        A Hostdoor oferece suporte para mediação. O proprietário é responsável pela manutenção conforme estipulado em contrato. Tudo é documentado digitalmente.
                    </AccordionContent>
                </AccordionItem>

                {/* PROPRIETÁRIOS */}
                <AccordionItem value="como-cadastrar-imovel">
                    <AccordionTrigger className="font-semibold py-6">Como cadastro meu imóvel na plataforma?</AccordionTrigger>
                    <AccordionContent>
                        Basta criar uma conta de proprietário no app da Hostdoor, preencher seus dados e cadastrar seu imóvel com fotos, descrição e valor desejado. Em minutos, ele estará disponível no catálogo.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="como-funciona-o-contrato">
                    <AccordionTrigger className="font-semibold py-6">Como funciona o contrato digital?</AccordionTrigger>
                    <AccordionContent>
                        A Hostdoor gera o contrato automaticamente com base nos dados do imóvel, proprietário e inquilino. Ele é assinado digitalmente por ambas as partes, com validade jurídica.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="e-se-o-inquilino-nao-pagar">
                    <AccordionTrigger className="font-semibold py-6">O que acontece se o inquilino não pagar?</AccordionTrigger>
                    <AccordionContent>
                        A Hostdoor envia lembretes automáticos e oferece apoio jurídico caso necessário. A caução (se houver) pode ser usada conforme previsto em contrato.
                    </AccordionContent>
                </AccordionItem>

                {/* CONTRATO & SUPORTE */}
                <AccordionItem value="posso-cancelar-contrato">
                    <AccordionTrigger className="font-semibold py-6">Posso cancelar um contrato antes do prazo?</AccordionTrigger>
                    <AccordionContent>
                        Sim, desde que respeitadas as cláusulas de aviso prévio e multa rescisória, previstas no contrato assinado por ambas as partes.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="como-falo-com-a-hostdoor">
                    <AccordionTrigger className="font-semibold py-6">Como falo com a equipe da Hostdoor?</AccordionTrigger>
                    <AccordionContent>
                        Você pode entrar em contato pelo nosso e-mail de suporte, ou diretamente pela <Link href="/help/support-center" target="_blank"><strong>Central de Ajuda</strong></Link> na plataforma.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </main>
    );
}
