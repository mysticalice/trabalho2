'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Nav from './menu_nav'; // Importação do novo componente isolado

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Função encapsulada para garantir o fechamento do menu ao navegar
  const handleCloseMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo da Aplicação */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold text-gray-700 tracking-tighter">
              Currículo<span className="text-blue-600">Pro</span>
            </Link>
          </div>

          {/* Delegação da Renderização: Nav Desktop */}
          <Nav isMobile={false} />

          {/* Controle do Menu Mobile (Botão Hambúrguer) */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md p-2 transition-colors"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">{isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Delegação da Renderização: Nav Mobile com Controle de Estado Visual */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100 shadow-lg ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <Nav isMobile={true} onItemClick={handleCloseMenu} />
      </div>
    </header>
  );
}