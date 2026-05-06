import React from 'react';

export default function CurriculoPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Cabeçalho */}
        <div className="mb-12 border-l-4 border-green-600 pl-4">
          <h1 className="text-3xl font-bold text-gray-900">Cadastro de Currículo</h1>
          <p className="mt-2 text-gray-600">
            Preencha suas informações profissionais para criar seu currículo completo.
          </p>
        </div>

        {/* Formulário */}
        <form className="space-y-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">

          {/* Upload de Foto */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Foto de Perfil
            </label>
            <input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-700 
              file:mr-4 file:py-2 file:px-4 
              file:rounded-lg file:border-0 
              file:text-sm file:font-semibold 
              file:bg-green-600 file:text-white 
              hover:file:bg-green-700 cursor-pointer"
            />
          </div>

          {/* Dados básicos */}
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Nome</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Cargo Desejado</label>
              <input
                type="text"
                placeholder="Ex: Desenvolvedor Front-end"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="exemplo@email.com"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border invalid:border-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Telefone</label>
              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">CPF</label>
              <input
                type="text"
                placeholder="000.000.000-00"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border"
              />
            </div>

          </div>

          {/* Resumo profissional */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Resumo Profissional
            </label>
            <textarea
              rows={4}
              placeholder="Resumo sobre sua carreira..."
              className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border resize-y"
            />
          </div>

          {/* Experiências */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Experiências Profissionais
            </label>
            <textarea
              rows={5}
              placeholder="Descreva suas experiências..."
              className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border resize-y"
            />
          </div>

          {/* Formação */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Formações Acadêmicas
            </label>
            <textarea
              rows={4}
              placeholder="Cursos, faculdade, certificações..."
              className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border resize-y"
            />
          </div>

          {/* Habilidades */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Habilidades
            </label>
            <textarea
              rows={3}
              placeholder="Ex: React, Comunicação, Liderança..."
              className="block w-full rounded-lg border-gray-300 py-3 px-4 shadow-sm focus:ring-2 focus:ring-green-500/50 focus:border-green-500 border resize-y"
            />
          </div>

          {/* Botão */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              className="w-full sm:w-auto flex justify-center items-center py-4 px-10 rounded-xl shadow-md text-white font-bold bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500 active:scale-[0.98] transition-all"
            >
              Salvar Currículo
            </button>
          </div>

        </form>
      </main>
    </div>
  );
}