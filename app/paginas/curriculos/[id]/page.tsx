"use client";

import React from "react";
import { useParams } from "next/navigation";

const candidatos = [
  {
    id: 1,
    nome: "Amanda Rocha",
    cargo: "Desenvolvedora Front-end",
    cidade: "Florianópolis",
    turno: "Integral",
    email: "amanda@email.com",
    telefone: "(48) 99999-1111",
    resumo:
      "Desenvolvedora focada em React, Next.js e interfaces modernas.",
    experiencia:
      "2 anos atuando em desenvolvimento front-end e aplicações web.",
    formacao:
      "Análise e Desenvolvimento de Sistemas - UFSC",
    habilidades:
      "React, Next.js, Tailwind CSS, TypeScript",
  },
  {
    id: 2,
    nome: "Carlos Henrique",
    cargo: "UI/UX Designer",
    cidade: "Blumenau",
    turno: "Matutino",
    email: "carlos@email.com",
    telefone: "(48) 98888-2222",
    resumo:
      "Designer especializado em experiência do usuário e interfaces modernas.",
    experiencia:
      "Atuação em projetos mobile e sistemas empresariais.",
    formacao:
      "Design Digital - SENAI",
    habilidades:
      "Figma, Adobe XD, UX Research, Prototipagem",
  },
  {
    id: 3,
    nome: "Fernanda Lima",
    cargo: "Analista de Sistemas",
    cidade: "Pomerode",
    turno: "Noturno",
    email: "fernanda@email.com",
    telefone: "(48) 97777-3333",
    resumo:
      "Profissional com experiência em análise e documentação de sistemas.",
    experiencia:
      "4 anos trabalhando com sistemas corporativos.",
    formacao:
      "Engenharia de Software - UNIVALI",
    habilidades:
      "Análise de Sistemas, Documentação, SQL, .NET",
  },
];

export default function CurriculoDetalhes() {
  const params = useParams();
  const id = Number(params.id);

  const candidato = candidatos.find((c) => c.id === id);

  if (!candidato) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Currículo não encontrado
          </h1>
          <p className="text-gray-600 mb-8">
            Desculpe, o currículo que você está procurando não existe.
          </p>
          <link
            href="/paginas/curriculos"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Voltar para currículos
          </link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <link
            href="/paginas/curriculos"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Voltar
          </link>
        </div>

        <div className="border-b-2 border-gray-200 pb-6 mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {candidato.nome}
          </h1>
          <p className="text-xl text-blue-600 font-semibold mb-4">
            {candidato.cargo}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <span className="flex items-center">
              <span className="font-semibold mr-2">📍</span>
              {candidato.cidade}
            </span>
            <span className="flex items-center">
              <span className="font-semibold mr-2">🕐</span>
              {candidato.turno}
            </span>
            <span className="flex items-center">
              <span className="font-semibold mr-2">📧</span>
              <a
                href={`mailto:${candidato.email}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {candidato.email}
              </a>
            </span>
            <span className="flex items-center">
              <span className="font-semibold mr-2">📱</span>
              <a
                href={`tel:${candidato.telefone}`}
                className="text-blue-600 hover:text-blue-800"
              >
                {candidato.telefone}
              </a>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Resumo</h2>
            <p className="text-gray-700 leading-relaxed">{candidato.resumo}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Formação</h2>
            <p className="text-gray-700 leading-relaxed">{candidato.formacao}</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Experiência</h2>
          <p className="text-gray-700 leading-relaxed">{candidato.experiencia}</p>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            {candidato.habilidades.split(", ").map((habilidade, index) => (
              <span
                key={index}
                className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold text-sm"
              >
                {habilidade}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t-2 border-gray-200">
          <link 
            href="/paginas/curriculos"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
          >
            Voltar para currículos
          </link>
        </div>
      </div>
    </div>
  );
}
