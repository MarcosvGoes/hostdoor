import Link from "next/link";

export default function AboutUs() {
    return (
        <div className="grid py-10 max-w-[90%] space-y-20 mx-auto">
            <div className="space-y-5">
                <h1 className="text-3xl font-semibold">Sobre a HostDoor</h1>
                <div className="text-base space-y-5">
                    <p>A HostDoor nasceu para atender pessoas que querem alugar um imóvel de forma prática, segura e sem pagar taxas abusivas às imobiliárias tradicionais.</p>
                    <p>Nosso modelo de negócio é simples: oferecer um serviço com preço justo, transparente e sem surpresas.</p>
                    <p>Mesmo com preços acessíveis, jamais abrimos mão da segurança jurídica e financeira para ambas as partes.</p>
                    <p>Seja para alugar um lar, uma loja, um terreno ou um galpão, estamos aqui para te ajudar.</p>
                </div>

            </div>

            <div className="space-y-5">
                <h1 className="text-3xl font-semibold">Para você, inquilino</h1>
                <div className="text-base space-y-5">
                    <p>Na HostDoor, você conta com suporte completo do início ao fim da sua estadia no imóvel escolhido.</p>
                    <p>O processo é simples: acesse nosso <Link href="/catalog" target="_blank" className="hover:cursor-pointer"><strong>catálogo</strong></Link>, escolha um imóvel e envie seu contato. O proprietário entrará em contato para agendar uma visita.</p>
                    <p>Gostou do imóvel? Você receberá um contrato digital, poderá assiná-lo online e realizar todos os pagamentos de forma segura pela plataforma.</p>
                    <p>Valores como caução ou seguros ficarão sob nossa custódia, garantindo o cumprimento fiel de tudo que for firmado em contrato.</p>
                </div>
            </div>

            <div className="space-y-5">
                <h1 className="text-3xl font-semibold">Para você, proprietário</h1>
                <div className="text-base space-y-5">
                    <p>A HostDoor oferece suporte completo para que você alugue seus imóveis com a segurança de uma imobiliária, mas com um custo muito mais acessível.</p>
                    <p>Cadastre-se em nosso <a href="https://app.hostdoor.com.br" target="_blank" className="hover:cursor-pointer"><strong>app para proprietários</strong></a>, preencha seus dados e registre seu imóvel. Ele será automaticamente exibido em nosso catálogo.</p>
                    <p>Quando um inquilino demonstrar interesse, basta gerar o contrato digital com um clique. Tudo é feito com segurança e respaldo jurídico.</p>
                    <p>Após o contrato ser assinado pelas partes, as cobranças mensais são geradas e o valor é repassado automaticamente para sua conta bancária cadastrada.</p>
                </div>
            </div>
        </div>
    )
}