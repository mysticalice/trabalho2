import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-14 border-t border-slate-800">
      
      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div className="space-y-5">
          <span className="text-3xl font-black text-white tracking-tight">
            Currículo<span className="text-blue-500">Pro</span>
          </span>

          <p className="text-sm leading-relaxed text-slate-400 max-w-md">
            Plataforma moderna para criação e gerenciamento de currículos
            profissionais. Desenvolva seu perfil, organize experiências e
            encontre novas oportunidades de trabalho de forma simples e rápida.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">
            Navegação
          </h4>

          <Link
            href="/"
            className="hover:text-white hover:translate-x-1 transition-transform w-fit"
          >
            Início
          </Link>

          <Link
            href="/paginas/pagina_sobre"
            className="hover:text-white hover:translate-x-1 transition-transform w-fit"
          >
            Sobre Nós
          </Link>

          <Link
            href="/paginas/curriculos"
            className="hover:text-white hover:translate-x-1 transition-transform w-fit"
          >
            Currículos
          </Link>

          <Link
            href="/paginas/pagina_contato"
            className="hover:text-white hover:translate-x-1 transition-transform w-fit"
          >
            Contato
          </Link>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-2">
            Redes Sociais
          </h4>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors w-fit"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors w-fit"
          >
            GitHub
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition-colors w-fit"
          >
            Instagram
          </a>

          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors w-fit"
          >
            Facebook
          </a>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 pt-8 border-t border-slate-800 flex flex-col items-center text-center">
        
        <p className="text-sm text-slate-400 max-w-2xl leading-relaxed">
          Desenvolvido utilizando Next.js, React e Tailwind CSS com foco em
          performance, design moderno e experiência do usuário.
        </p>

        <p className="mt-5 text-xs text-slate-500">
          © {new Date().getFullYear()} CurrículoPro — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}