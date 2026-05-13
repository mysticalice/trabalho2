import React from 'react';
import Link from 'next/link';

// Definição estrita de tipagem para as propriedades do componente
interface NavProps {
  isMobile?: boolean;
  onItemClick?: () => void; // Callback para fechar o menu mobile após a navegação
}

// Estrutura de dados que desacopla as rotas da interface
const NAVIGATION_ROUTES = [
  { label: 'Início', href: '/paginas/pagina_inicial' },
  { label: 'Sobre Nós', href: '/paginas/pagina_sobre' },
  { label: 'Contato', href: '/paginas/pagina_contato' },
  { label: 'Candidatos', href: '/paginas/curriculos' },
  { label: 'Criar currriculo', href: '/paginas/curriculos/novo' },
];

export default function Nav({ isMobile = false, onItemClick }: NavProps) {
  // O uso de template literals permite a composição dinâmica de classes baseada no estado
  const baseNavClasses = isMobile 
    ? "flex flex-col space-y-1 px-2 pt-2 pb-4" // Eixo Y (coluna) para dispositivos móveis
    : "hidden md:flex space-x-8";              // Eixo X (linha) para deskop, oculto no mobile

  const baseLinkClasses = isMobile
    ? "block px-3 py-2 rounded-md text-base font-medium textgray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
    : "text-gray-600 hover:text-blue-600 font-medium transition-colors relative group";

  return (
    <nav className={baseNavClasses}>
      {NAVIGATION_ROUTES.map((route) => (
        <Link 
          key={route.href} 
          href={route.href} 
          className={baseLinkClasses}
          onClick={onItemClick}
        >
          {route.label}
          
          {/* Animação de sublinhado condicional: renderizada apenas na versão Desktop */}
          {!isMobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          )}
        </Link>
      ))}
    </nav>
  );
}