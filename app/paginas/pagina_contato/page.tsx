"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false);

  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-blue-50 border border-blue-100 px-4 py-1 text-sm font-semibold text-blue-900">
            Entre em contato
          </span>

          <h1 className="mt-6 text-5xl font-black text-blue-950 leading-tight">
            Fale com a equipe da CurrículoPro
          </h1>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Tire dúvidas, envie sugestões ou entre em contato para conhecer
            melhor nossa plataforma de criação e gerenciamento de currículos.
          </p>
        </div>

        {/* Conteúdo */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Informações */}
          <div className="space-y-8">

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-2xl font-bold">
                ✉
              </div>

              <h2 className="mt-6 text-2xl font-bold text-blue-950">
                Atendimento Personalizado
              </h2>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Nossa equipe está pronta para ajudar você a criar currículos
                modernos, profissionais e alinhados ao mercado de trabalho.
              </p>
            </div>

            <div className="grid gap-5">

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-blue-900">
                  Email
                </h3>

                <p className="mt-2 text-slate-600">
                  contato@curriculopro.com
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-blue-900">
                  Telefone
                </h3>

                <p className="mt-2 text-slate-600">
                  (48) 99999-0000
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-blue-900">
                  Horário de Atendimento
                </h3>

                <p className="mt-2 text-slate-600">
                  Segunda à Sexta • 08h às 18h | Sábado • 09h às 12h
                </p>
              </div>

            </div>
          </div>

          {/* Formulário */}
          <form
            onSubmit={(e) => {
              e.preventDefault();

              setEnviado(true);

              setTimeout(() => {
                router.push("/");
              }, 3000);
            }}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-8 shadow-sm space-y-7"
          >

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Nome */}
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Nome Completo
                </label>

                <input
                  type="text"
                  id="nome"
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  placeholder="exemplo@email.com"
                  className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
                />
              </div>

            </div>

            {/* Assunto */}
            <div>
              <label
                htmlFor="assunto"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Assunto
              </label>

              <input
                type="text"
                id="assunto"
                placeholder="Digite o assunto"
                className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition"
              />
            </div>

            {/* Mensagem */}
            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Mensagem
              </label>

              <textarea
                id="mensagem"
                rows={6}
                placeholder="Escreva sua mensagem..."
                className="w-full rounded-xl border border-slate-300 bg-white py-3 px-4 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition resize-none"
              />
            </div>

            {/* Botão */}
            <button
              type="submit"
              className={`w-full rounded-2xl transition-all py-4 px-8 text-white font-bold shadow-lg active:scale-[0.98]
              ${
                enviado
                  ? "bg-green-600 hover:bg-green-600 -translate-y-1"
                  : "bg-blue-900 hover:bg-blue-800"
              }`}
            >
              {enviado
                ? "Mensagem Enviada ✓"
                : "Enviar Mensagem"}
            </button>

          </form>
        </div>
      </main>
    </div>
  );
}