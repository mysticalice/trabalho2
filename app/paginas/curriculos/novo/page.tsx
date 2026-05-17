"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CurriculoPage() {
  const router = useRouter();

  const [enviado, setEnviado] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setEnviado(true);

    setTimeout(() => {
      router.push("/");
    }, 3000);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Cabeçalho */}
        <div className="mb-12 border-l-4 border-blue-600 pl-4">
          <h1 className="text-3xl font-bold text-gray-900">
            Cadastro de Currículo
          </h1>

          <p className="mt-2 text-gray-600">
            Preencha suas informações profissionais para criar seu currículo completo.
          </p>
        </div>

        {/* Mensagem */}
        {enviado && (
          <div className="mb-8 rounded-2xl border border-green-200 bg-green-50 p-5 text-green-700 font-semibold shadow-sm">
            ✅ Currículo enviado com sucesso!  
            Você será redirecionado para a página inicial em 3 segundos...
          </div>
        )}

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
        >
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
              file:bg-blue-600 file:text-white 
              hover:file:bg-blue-700 cursor-pointer"
            />
          </div>

          {/* Dados básicos */}
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nome
              </label>

              <input
                type="text"
                placeholder="Seu nome completo"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Cargo Desejado
              </label>

              <input
                type="text"
                placeholder="Ex: Desenvolvedor Front-end"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="exemplo@email.com"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Telefone
              </label>

              <input
                type="tel"
                placeholder="(00) 00000-0000"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                CPF
              </label>

              <input
                type="text"
                placeholder="000.000.000-00"
                className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border"
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
              className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border resize-y"
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
              className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border resize-y"
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
              className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border resize-y"
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
              className="block w-full rounded-lg border-gray-300 py-3 px-4 text-slate-700 shadow-sm focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 border resize-y"
            />
          </div>

          {/* Botão */}
          <div className="pt-4 border-t border-gray-200">
            <button
              type="submit"
              disabled={enviado}
              className={`w-full sm:w-auto flex justify-center items-center py-4 px-10 rounded-xl shadow-md text-white font-bold transition-all active:scale-[0.98]
              ${
                enviado
                  ? "bg-green-600 hover:bg-green-600"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {enviado ? "Currículo Enviado ✅" : "Salvar Currículo"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}