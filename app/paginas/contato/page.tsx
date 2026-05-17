"use client";

import Link from "next/link";

export default function ContatoPage() {
  return (
    <main className="min-h-screen bg-[#e5ddd5] flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

        {/* Topo */}
        <div className="bg-green-600 px-6 py-4 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white text-green-600 flex items-center justify-center font-black text-2xl">
            C
          </div>

          <div>
            <h1 className="text-white text-xl font-bold">
              Contato Profissional
            </h1>

            <p className="text-green-100 text-sm">
              Online agora
            </p>
          </div>
        </div>

        {/* Conversa */}
        <div className="bg-[#efeae2] p-6 min-h-[500px] flex flex-col gap-4">

          <div className="bg-white max-w-md rounded-2xl px-5 py-4 shadow text-slate-700">
            Olá! Vi seu currículo na plataforma CVConnect.
          </div>

          <div className="bg-[#d9fdd3] self-end max-w-md rounded-2xl px-5 py-4 shadow text-slate-700">
            Olá! Obrigado pelo contato 🙂
          </div>

          <div className="bg-white max-w-md rounded-2xl px-5 py-4 shadow text-slate-700">
            Gostaria de conversar sobre uma oportunidade profissional.
          </div>

          <div className="bg-[#d9fdd3] self-end max-w-md rounded-2xl px-5 py-4 shadow text-slate-700">
            Claro! Podemos conversar.
          </div>
        </div>

        {/* Rodapé */}
        <div className="border-t border-slate-200 p-4 flex gap-3">
          <input
            type="text"
            placeholder="Digite uma mensagem..."
            className="flex-1 rounded-full border border-slate-300 px-5 py-3 outline-none focus:border-green-500"
          />

          <button className="rounded-full bg-green-600 hover:bg-green-700 transition px-6 py-3 font-bold text-white">
            Enviar
          </button>
        </div>

        {/* Voltar */}
        <div className="p-4 border-t border-slate-100">
          <Link
            href="/paginas/curriculos"
            className="text-green-700 font-semibold hover:underline"
          >
            ← Voltar para currículos
          </Link>
        </div>
      </div>
    </main>
  );
}