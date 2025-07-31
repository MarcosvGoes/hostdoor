export default function OwnerGuide() {
    return (
        <main className="max-w-[90%] mx-auto py-10 space-y-5">
            <h1 className="text-2xl font-bold">Guia do Proprietário</h1>

            <div className="space-y-5">
                <p className="font-semibold">Cadastre, gerencie e alugue seus imóveis de forma prática e segura com a Dommi.</p>

                <ul className="list-disc list-inside space-y-2">
                    <li>Como criar sua conta de proprietário</li>
                    <li>Cadastro de imóveis (fotos, descrição, valores)</li>
                    <li>Publicação no catálogo automaticamente</li>
                    <li>Recebimento de contatos de inquilinos</li>
                    <li>Geração e assinatura de contrato</li>
                    <li>Recebimento automático do aluguel</li>
                </ul>

                <p className="italic text-sm text-gray-500">
                    Lembre-se: a Dommi está aqui para garantir que todo o processo seja seguro e justo para ambas as partes.
                </p>
            </div>
        </main>
    );
}
