export default function PriceGuide() {
    return (
        <main className="max-w-[90%] mx-auto py-10 space-y-5">
            <h1 className="text-2xl font-bold">Guia de Preço</h1>

            <div className="space-y-5">
                <p className="font-semibold">
                    Definir o valor de aluguel ideal é essencial para atrair bons inquilinos e garantir retorno justo ao proprietário.
                </p>

                <ul className="list-disc list-inside space-y-1">
                    <li>Pesquise valores de imóveis semelhantes na sua região</li>
                    <li>Considere metragem, localização e estado de conservação</li>
                    <li>Use o preço médio do m² como base</li>
                    <li>Ofereça descontos para contratos mais longos</li>
                    <li>Compare o preço do aluguel com a média da sua cidade</li>
                    <li>Verifique se há cobranças abusivas de taxa extra</li>
                    <li>Considere benefícios como segurança, garagem e mobília</li>
                </ul>
            </div>
        </main>
    );
}
