import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-6 bottom-0 w-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Coluna 1 - Sobre */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Dommi</h3>
          <p className="text-sm text-gray-400">
            Somos líderes em soluções tecnológicas para o mercado imobiliário, conectando pessoas e imóveis com inovação e eficiência.
          </p>
        </div>

        {/* Coluna 2 - Navegação */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegação</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Início</Link></li>
            <li><Link href="/guide" className="hover:text-white">Guias</Link></li>
            <li><Link href="/" className="hover:text-white">Serviços</Link></li>
            <li><Link href="/" className="hover:text-white">Central de Suporte</Link></li>
          </ul>
        </div>

        {/* Coluna 3 - Suporte */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suporte</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-white">Central de Ajuda</Link></li>
            <li><Link href="/" className="hover:text-white">Termos de Uso</Link></li>
            <li><Link href="/" className="hover:text-white">Política de Privacidade</Link></li>
            <li><Link href="/" className="hover:text-white">FAQs</Link></li>
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
        © {new Date().getFullYear()} Dommi. Todos os direitos reservados.
      </div>
    </footer>
  );
}
