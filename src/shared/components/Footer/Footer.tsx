import { AppDomain } from "@/utils/routes";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 bottom-0 w-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Coluna 1 - Sobre */}
        <div>
          <h3 className="text-lg font-semibold mb-4">HostDoor</h3>
          <p className="text-sm text-gray-400">
Acreditamos que alugar um imóvel deve ser simples, seguro e justo. Oferecemos uma alternativa digital às imobiliárias tradicionais, sem taxas abusivas e com total transparência para inquilinos e proprietários.          </p>
        </div>

        {/* Coluna 2 - Navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Início</Link></li>
            <li><Link href="/guide" className="hover:text-white">Guias</Link></li>
            <li><Link href="/catalog" className="hover:text-white">Alugar</Link></li>
            <li><a href={AppDomain} target="_blank" className="hover:text-white">Anunciar</a></li>
          </ul>
        </div>

        {/* Coluna 3 - Suporte */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suporte</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/help/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link href="/help/about-us" className="hover:text-white">Sobre Nós</Link></li>
            <li><Link href="/help/terms-and-conditions" className="hover:text-white">Termos de Uso</Link></li>
            <li><Link href="/help/support-center" className="hover:text-white">Central de Ajuda</Link></li>
          </ul>
        </div>

        {/* Coluna 4 - Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-300">HostDoor</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
}
