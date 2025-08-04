export default function PrivacyPolicy() {
    return (
        <main className="py-10 max-w-[90%] mx-auto text-darkText">
            <section className="mb-6">
                <h1 className="font-bold text-2xl mb-2">Política de Privacidade</h1>
                <p className="text-sm text-gray-600">Última atualização: 03/08/2025</p>
            </section>

            <section className="space-y-4 text-sm">
                <h2 className="font-semibold">1. Quem somos</h2>
                <p>
                    A HostDoor (“nós”) é uma plataforma digital especializada na gestão de locação de imóveis. Levamos a sério a proteção dos seus dados pessoais conforme a
                    Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
                </p>

                <h2 className="font-semibold">2. Dados que coletamos</h2>
                <ul className="list-disc list-inside">
                    <li><strong>Dados fornecidos por você:</strong> nome, e‑mail, telefone, CPF, endereço, dados bancários para repasse ou caução.</li>
                    <li><strong>Dados de uso:</strong> logs de acesso, IP, cookies e interações na plataforma.</li>
                </ul>

                <h2 className="font-semibold">3. Finalidades do tratamento</h2>
                <p>
                    Utilizamos seus dados para:
                </p>
                <ul className="list-disc list-inside">
                    <li>Intermediar pagamentos e repasses de aluguéis;</li>
                    <li>Gerar contratos com assinatura digital;</li>
                    <li>Gerenciar cauções com segurança e transparência;</li>
                    <li>Enviar notificações, lembretes e informações sobre o serviço;</li>
                    <li>Melhorar nossa plataforma e prevenir fraudes.</li>
                </ul>

                <h2 className="font-semibold">4. Compartilhamento de dados</h2>
                <p>
                    Somente compartilhamos dados com:
                </p>
                <ul className="list-disc list-inside">
                    <li>Prestadores de serviços essenciais (ex: pagamento, CRM, verificação de crédito);</li>
                    <li>Parceiros, com seu consentimento prévio;</li>
                    <li>Autoridades legais, quando exigido por lei.</li>
                </ul>

                <h2 className="font-semibold">5. Segurança dos dados</h2>
                <p>
                    Utilizamos práticas como criptografia, controles de acesso, backups e auditorias internas para proteger os dados contra acesso não autorizado, perda ou alteração.
                </p>

                <h2 className="font-semibold">6. Retenção e eliminação</h2>
                <p>
                    Seus dados são mantidos apenas enquanto necessário para cumprir as finalidades informadas ou conforme exigido por lei. Após, são anonimizados ou apagados com segurança.
                </p>

                <h2 className="font-semibold">7. Seus direitos</h2>
                <p>
                    Nos termos da LGPD, você pode:
                </p>
                <ul className="list-disc list-inside">
                    <li>Solicitar acesso aos seus dados;</li>
                    <li>Corrigir, atualizar ou excluir suas informações;</li>
                    <li>Solicitar portabilidade dos seus dados;</li>
                    <li>Revogar consentimento e cessar marketing direto;</li>
                    <li>Obter informações sobre compartilhamentos de dados.</li>
                </ul>

                <h2 className="font-semibold">8. Alterações nesta política</h2>
                <p>
                    Podemos atualizar esta Política de Privacidade a qualquer momento. Na página, informamos a data da última versão. Recomendamos consultá-la periodicamente.
                </p>

                <h2 className="font-semibold">9. Contato</h2>
                <p>
                    Caso queira exercer seus direitos ou esclarecer dúvidas, entre em contato conosco:<br />
                    <strong>E‑mail:</strong> <a href="mailto:hostdoor@gmail.com">hostdoor@gmail.com</a><br />
                    <strong>Telefone:</strong>
                    <a href={`tel:27988567724`}>
                        (27) 98856-7724
                    </a>
                </p>
            </section>
        </main>
    )
}
