/* lista geral de currículos */

import React from 'react';

const curriculos = [
  {
    nome: 'Ana Souza',
    cargo: 'Desenvolvedora Front-end',
    email: 'ana.souza@email.com',
    telefone: '(48) 99999-1111',
    resumo: 'Desenvolvedora com experiência em React e interfaces modernas.',
    habilidades: ['React', 'JavaScript', 'CSS']
  },
  {
    nome: 'Carlos Pereira',
    cargo: 'Analista de Sistemas',
    email: 'carlos.p@email.com',
    telefone: '(48) 98888-2222',
    resumo: 'Atuação em análise de requisitos e modelagem de sistemas.',
    habilidades: ['SQL', 'UML', 'Java']
  },
  {
    nome: 'Mariana Lima',
    cargo: 'UX/UI Designer',
    email: 'mariana.lima@email.com',
    telefone: '(48) 97777-3333',
    resumo: 'Foco em experiência do usuário e design centrado no cliente.',
    habilidades: ['Figma', 'Design Thinking', 'Prototipação']
  }
];

export default function ListaCurriculosPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-10 border-l-4 border-blue-600 pl-4">
          Currículos Cadastrados
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {curriculos.map((c, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">{c.nome}</h2>
                <p className="text-blue-600 font-semibold">{c.cargo}</p>
              </div>

              <div className="text-sm text-gray-600 space-y-1 mb-4">
                <p>📧 {c.email}</p>
                <p>📞 {c.telefone}</p>
              </div>

              <p className="text-gray-700 text-sm mb-4">
                {c.resumo}
              </p>

              <div className="flex flex-wrap gap-2">
                {c.habilidades.map((h, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
