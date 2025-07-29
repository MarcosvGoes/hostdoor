export default function OwnerGuide() {
    return (
        <main className="py-16">
            <div className="mt-10">
                Guia do Propietário
            </div>
            <section className="my-20 max-w-[90%] lg:w-[400px] mx-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-xl py-10">
                <h1 className="text-xl mb-5 font-bold text-darkText text-center mx-auto max-w-[90%]">Busca facilitar a gestão do seu imóvel ?<br />Conte com a Imobilli</h1>
                <ul className="text-darkText grid max-w-[90%] p-2 mx-auto font-bold rounded-lg gap-y-3">
                    <li className="flex items-center gap-x-2 text-md"> Cobranças automática</li>
                    <li className="flex items-center gap-x-2 text-md"> Geração de contrato digital</li>
                    <li className="flex items-center gap-x-2 text-md"> Assinatura digital</li>
                    <li className="flex items-center gap-x-2 text-md"> Variedade de pagamentos</li>
                    <li className="flex items-center gap-x-2 text-md"> Suporte completo</li>
                    <li className="flex items-center gap-x-2 text-md"> Maior visibilidade</li>
                    <li className="flex items-center gap-x-2 text-md"> Menor burocracia</li>
                    <li className="flex items-center gap-x-2 text-md"> Repasse instantanêo</li>
                </ul>
            </section>
            <section className="bg-background-blue text-whiteText py-14">
                <div className="max-w-[90%] mx-auto">
                    <h1 className="text-2xl mb-14 font-bold text-white text-center">Cobrança automatizada e repasse instantâneo</h1>
                    <ul className="text-center text-md grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 text-darkText">
                        <li className="bg-background-white p-5 rounded-lg h-full flex flex-col justify-center border border-border">Reduza a taxa de inadimplência com as cobranças automáticas. Venceu o aluguel ? O valor é cobrado imediatamente</li>
                        <li className="bg-background-white p-5 rounded-lg h-full flex flex-col justify-center border border-border">Escolha a data de vencimento padrão para as cobranças serem realizadas</li>
                        <li className="bg-background-white p-5 rounded-lg h-full flex flex-col justify-center border border-border">Tenha o repasse realizado para sua conta em poucos minutos</li>
                        <li className="bg-background-white p-5 rounded-lg h-full flex flex-col justify-center border border-border">Dê mais opções de pagamento para seu inquilino, diminuindo ainda mais a chance de inadimplência</li>
                        <li className="bg-background-white p-5 rounded-lg h-full flex flex-col justify-center border border-border">Suporte a pagamentos via PIX, Cartão de Crédito, Cartão de Débito, Carteiras Digitais, Boleto, dentre outros.</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}