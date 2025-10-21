// app/guide/page.tsx
import Link from "next/link";

export default function GuideLobby() {
    return (
        <main className="max-w-4xl mx-auto py-10 px-4 space-y-10">
            <h1 className="text-3xl font-bold">Guias da Hostdoor</h1>
            <p className="text-muted-foreground text-base">
                Aqui você encontra todos os nossos guias para tornar o processo de locação mais simples, seguro e justo para todos.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
                {[
                    {
                        href: "/guide/tenant-guide",
                        title: "Para Inquilinos",
                        desc: "Saiba como alugar, o que esperar, quais direitos e deveres você tem.",
                    },
                    {
                        href: "/guide/owner-guide",
                        title: "Para Proprietários",
                        desc: "Passo a passo para cadastrar, gerenciar e alugar seu imóvel com segurança.",
                    },
                    {
                        href: "/guide/price-guide",
                        title: "Guia de Preço",
                        desc: "Descubra como calcular e avaliar um valor justo de aluguel para ambos.",
                    },
                ].map(({ href, title, desc }) => (
                    <Link
                        key={href}
                        href={href}
                        className="block bg-white p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    >
                        <h2 className="text-xl font-semibold mb-2">{title}</h2>
                        <p className="text-sm text-muted-foreground">{desc}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
