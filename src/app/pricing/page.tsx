
export default function About() {
    return (
        <main className="py-16 pb-10  mx-auto max-w-[90%] lg:max-w-[400px]">
            <div className="mt-10">
                <div className="text-center font-bold text-darkText">
                    <h1 className="text-xl">Um único valor</h1>
                    <p className="text-xs">Sem pegadinhas</p>
                </div>
                <div className="bg-background-white gap-y-5 grid border-background-black border rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-6 mt-5 text-darkText">
                    <div className="grid leading-none">
                        <span>Outras imobiliárias</span>
                        <s className="text-lg font-bold">10% sobre transação</s>
                    </div>
                    <div className="font-bold">
                        <span className="text-darkText">Na Keyflow</span>
                        <h2 className="text-2xl">R$ 19,90/mês </h2>
                        <p className="text-sm">+ 5% sobre transação </p>
                    </div>
                    <ul className="text-darkText grid font-bold rounded-lg gap-y-3">
                        <li className="flex items-center gap-x-2 text-md">Cobranças automática</li>
                        <li className="flex items-center gap-x-2 text-md">Geração de contrato digital</li>
                        <li className="flex items-center gap-x-2 text-md">Assinatura digital</li>
                        <li className="flex items-center gap-x-2 text-md">Variedade de pagamentos</li>
                        <li className="flex items-center gap-x-2 text-md">Suporte completo</li>
                        <li className="flex items-center gap-x-2 text-md">Maior visibilidade</li>
                        <li className="flex items-center gap-x-2 text-md">Menor burocracia</li>
                        <li className="flex items-center gap-x-2 text-md">Repasse instantanêo</li>
                    </ul>
                    <p className="text-xs mt-5">Automatize seus aluguéis sem burocracia e sem taxas ocultas.</p>
                </div>
            </div>
        </main>
    )
}