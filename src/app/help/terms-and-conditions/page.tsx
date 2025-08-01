export default function TermsAndConditions() {
    return (
        <main>
            <section className="max-w-4xl mx-auto p-6 text-sm">
                <div className="mb-10 mt-4 grid gap-2">
                    <strong className="text-foreground text-base font-semibold">Termos e condições da plataforma e serviços Dommi</strong>
                    <span>Última alteração: {'22/03/2025'}</span>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">1. Introdução</h2>
                    <p className="mb-4">
                        Estes Termos de Uso (&quot;Termos&quot;) regulam o acesso e a utilização da plataforma <strong className="text-foreground">Dommi</strong> (&quot;Plataforma&quot;), que oferece uma solução digital para facilitar contratos de aluguel entre particulares. A Dommi não é uma imobiliária, e não atua como fiadora ou garantidora.
                    </p>
                    <p className="mb-4">
                        Ao acessar ou utilizar a Plataforma, você concorda expressamente com estes Termos. Caso não concorde, não poderá utilizar os serviços da Dommi. A Dommi reserva-se o direito de alterar estes Termos a qualquer momento, e o uso contínuo da Plataforma após tais alterações constitui aceitação dos Termos atualizados.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">2. Definições</h2>
                    <ul className="space-y-2 list-none">
                        <li><strong className="text-foreground font-semibold">Dommi</strong>: Plataforma digital que intermedeia aluguéis de imóveis.</li>
                        <li><strong className="text-foreground font-semibold">Proprietário</strong>: Pessoa física ou jurídica que cadastra um imóvel na Plataforma para locação.</li>
                        <li><strong className="text-foreground font-semibold">Inquilino</strong>: Pessoa física ou jurídica interessada em alugar um imóvel cadastrado na Plataforma.</li>
                        <li><strong className="text-foreground font-semibold">Contrato de Locação</strong>: Acordo firmado entre Proprietário e Inquilino, intermediado pela Dommi.</li>
                        <li><strong className="text-foreground font-semibold">Pagamento Automatizado</strong>: Sistema de cobrança e repasse de valores relacionados ao aluguel, gerenciado pela Dommi.</li>
                        <li><strong className="text-foreground font-semibold">Caução</strong>: Valor adicional pago pelo Inquilino como garantia, conforme estipulado pelo Proprietário.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">3. Funcionalidades da Plataforma</h2>
                    <p className="text-foreground mb-4">A Dommi oferece os seguintes serviços:</p>
                    <ol className="list-none">
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Cadastro de Imóveis</strong>:
                            <ul className="space-y-1 list-none ml-1">
                                <li>O Proprietário pode cadastrar imóveis na Plataforma, fornecendo informações detalhadas (localização, valor do aluguel, fotos, etc.).</li>
                                <li>O Proprietário é responsável pela veracidade das informações fornecidas.</li>
                                <li>A Dommi não realiza vistorias ou verificações presenciais dos imóveis.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Compartilhamento de Imóveis</strong>:
                            <ul className="space-y-2 list-none ml-1">
                                <li>O Proprietário pode compartilhar o anúncio do imóvel com potenciais Inquilinos.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Assinatura Digital</strong>:
                            <ul className="space-y-2 list-none ml-1">
                                <li>O Contrato de Locação pode ser assinado digitalmente por ambas as partes.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Pagamento Automatizado</strong>:
                            <ul className="space-y-2 list-none ml-1">
                                <li>A Dommi gerencia os pagamentos do aluguel, cobrando o Inquilino e repassando o valor ao Proprietário em até <strong className="text-foreground font-semibold">1 dia úil</strong>.</li>
                                <li>O Proprietário pode optar por cobrar até <strong className="text-foreground font-semibold">3 cauções</strong>, cada uma equivalente ao valor de um aluguel.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Personalização do Contrato</strong>:
                            <ul className="space-y-2 list-none ml-1">
                                <li>O Proprietário pode definir:
                                    <ul className="space-y-1 list-none">
                                        <li>Prazo mínimo de contrato.</li>
                                        <li>Repasse do IPTU ao Inquilino (opcional).</li>
                                        <li>Diferentes valores conforme forma de pagamento (ex.: desconto à vista).</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">4. Responsabilidades</h2>
                    <ol className="list-none">
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Do Proprietário</strong>:
                            <ul className="space-y-1 list-none ml-1">
                                <li>Garantir a veracidade das informações do imóvel cadastrado.</li>
                                <li>Cumprir as obrigações previstas no Contrato de Locação.</li>
                                <li>Autorizar a Dommi a intermediar pagamentos e repasses.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Do Inquilino</strong>:
                            <ul className="space-y-1 list-none ml-1">
                                <li>Pagar o aluguel e cauções dentro dos prazos estipulados.</li>
                                <li>Cumprir as cláusulas do Contrato de Locação.</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            <strong className="text-foreground font-semibold">Da Dommi</strong>:
                            <ul className="space-y-1 list-none ml-1">
                                <li>Intermediar a relação entre Proprietário e Inquilino.</li>
                                <li>Gerenciar pagamentos e repasses com segurança.</li>
                                <li>Não se responsabilizar por disputas entre as partes após assinatura contratual.</li>
                                <li>Não garantir a veracidade de informações fornecidas por terceiros.</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">5. Taxas e Comissões</h2>
                    <ul className="space-y-2 list-none">
                        <li>
                            <strong className="text-foreground font-semibold">Taxa de Intermediação</strong>:
                            <ul className="space-y-2 list-none ml-1">
                                <li>A Dommi cobra uma taxa fixa de 5% sobre o valor do aluguel mensal, aplicada automaticamente no momento do pagamento.</li>
                            </ul>
                        </li>
                        <li>
                            <strong className="text-foreground font-semibold">Repasses</strong>:
                            <ul className="space-y-2 list-none ml-1">
                                <li>Os valores recebidos dos Inquilinos são repassados aos Proprietários em até <strong className="text-foreground">1 dia úil</strong>, já descontadas as taxas aplicáveis.</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">6. Privacidade e Proteção de Dados</h2>
                    <p className="mb-4">
                        A Dommi trata os dados pessoais dos Usuários em conformidade com a <strong className="text-foreground">Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>. Os dados coletados são utilizados exclusivamente para viabilizar os serviços da Plataforma e não serão compartilhados com terceiros sem consentimento prévio. Para mais informações, consulte nossa <a href="/privacy-policy" className="underline text-primary">Política de Privacidade</a>.
                    </p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">7. Propriedade Intelectual</h2>
                    <ul className="space-y-2 list-none">
                        <li>A Plataforma Dommi, incluindo seu design, funcionalidades e conteúdo, é propriedade exclusiva da Dommi.</li>
                        <li>É proibida a reprodução, cópia ou uso indevido de qualquer elemento da Plataforma sem autorização prévia.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">8. Rescisão e Suspensão</h2>
                    <p className="mb-4">
                        A Dommi reserva-se o direito de suspender ou encerrar contas de Usuários que:
                    </p>
                    <ul className="space-y-2 list-none">
                        <li>Violarem estes Termos.</li>
                        <li>Praticarem fraudes ou condutas ilícitas.</li>
                        <li>Fornecerem informações falsas ou enganosas.</li>
                    </ul>
                    <p className="mt-4">O Usuário também pode solicitar a exclusão da conta e de seus dados pessoais a qualquer momento.</p>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">9. Disposições Gerais</h2>
                    <ul className="space-y-2 list-none">
                        <li>Estes Termos são regidos pelas leis brasileiras.</li>
                        <li>Eventuais disputas serão resolvidas no foro da comarca de São Paulo/SP, com exclusão de qualquer outro.</li>
                    </ul>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">10. Aceitação</h2>
                    <p className="mb-4">
                        Ao utilizar a Plataforma Dommi, você declara estar ciente e de acordo com todos os termos e condições aqui descritos.
                    </p>
                </div>
            </section>
        </main>
    )
}