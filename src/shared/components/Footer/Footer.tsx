import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 bottom-0 block w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Coluna 1 - Sobre */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Hostdoor</h3>
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
            <li><a href={process.env.NEXT_PUBLIC_URL} target="_blank" className="hover:text-white">Anunciar</a></li>
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
            <li><Link href="/help/rules" className="hover:text-white">Regras de Locação</Link></li>
            <li><Link href="/help/privacy-policy" className="hover:text-white">Política De Privacidade</Link></li>
          </ul>
        </div>

        {/* Coluna 4 - Redes Sociais */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com/hostdoor/" aria-label="Facebook" className="hover:text-white" target="_blank" >
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/hostdoor/" aria-label="Instagram" className="hover:text-white" target="_blank" >
              <Instagram size={20} />
            </a>
            <a href="https://x.com/hostdoor_br" aria-label="Twitter" className="hover:text-white" target="_blank" >
              <Image width={20} height={20} alt="X icon" src="/assets/icons/x-icon-light.svg" />
            </a>
            <a href="https://www.linkedin.com/company/hostdoor" aria-label="LinkedIn" className="hover:text-white" target="_blank" >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Rodapé inferior */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} <span className="font-semibold text-gray-300">Hostdoor</span>. Todos os direitos reservados.
      </div>
    </footer>
  );
}
