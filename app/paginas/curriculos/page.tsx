"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";

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
      "Ciência da Computação - Unisul",
    habilidades:
      "SQL, Java, Scrum, Engenharia de Software",
  },

  {
    id: 4,
    nome: "Lucas Martins",
    cargo: "Desenvolvedor Back-end",
    cidade: "Florianópolis",
    turno: "Integral",
    email: "lucas@email.com",
    telefone: "(48) 96666-4444",
    resumo:
      "Especialista em APIs e arquitetura de sistemas escaláveis.",
    experiencia:
      "Experiência em Node.js, bancos de dados e microsserviços.",
    formacao:
      "Sistemas de Informação - Estácio",
    habilidades:
      "Node.js, PostgreSQL, Docker, Express",
  },

  {
    id: 5,
    nome: "Juliana Costa",
    cargo: "Product Designer",
    cidade: "Blumenau",
    turno: "Vespertino",
    email: "juliana@email.com",
    telefone: "(48) 95555-5555",
    resumo:
      "Designer focada em produtos digitais e experiência do usuário.",
    experiencia:
      "Participação em startups e plataformas SaaS.",
    formacao:
      "Design Gráfico - Uniasselvi",
    habilidades:
      "UI Design, UX Design, Figma, Design Systems",
  },

  {
    id: 6,
    nome: "Matheus Oliveira",
    cargo: "Desenvolvedor Mobile",
    cidade: "Blumenau",
    turno: "Integral",
    email: "matheus@email.com",
    telefone: "(48) 94444-6666",
    resumo:
      "Desenvolvedor mobile com foco em aplicativos Android e iOS.",
    experiencia:
      "Criação de aplicativos híbridos e integração com APIs.",
    formacao:
      "Engenharia de Software - IFSC",
    habilidades:
      "React Native, Flutter, Firebase, APIs REST",
  },

  {
    id: 7,
    nome: "Beatriz Almeida",
    cargo: "Analista de Dados",
    cidade: "Florianópolis",
    turno: "Matutino",
    email: "beatriz@email.com",
    telefone: "(48) 93333-7777",
    resumo:
      "Analista focada em visualização de dados e métricas empresariais.",
    experiencia:
      "Experiência em dashboards e relatórios estratégicos.",
    formacao:
      "Ciência de Dados - UFSC",
    habilidades:
      "Power BI, Python, SQL, Excel",
  },

  {
    id: 8,
    nome: "Rafael Souza",
    cargo: "DevOps Engineer",
    cidade: "Pomerode",
    turno: "Integral",
    email: "rafael@email.com",
    telefone: "(48) 92222-8888",
    resumo:
      "Profissional especializado em infraestrutura e automação.",
    experiencia:
      "Atuação em pipelines CI/CD e cloud computing.",
    formacao:
      "Redes de Computadores - SENAI",
    habilidades:
      "AWS, Docker, Kubernetes, Linux",
  },

  {
    id: 9,
    nome: "Camila Ferreira",
    cargo: "Social Media",
    cidade: "Blumenau",
    turno: "Vespertino",
    email: "camila@email.com",
    telefone: "(48) 91111-9999",
    resumo:
      "Criadora de conteúdo digital e estratégias para redes sociais.",
    experiencia:
      "Gerenciamento de marcas e campanhas online.",
    formacao:
      "Marketing Digital - Uniasselvi",
    habilidades:
      "Instagram Ads, Canva, Copywriting, Meta Business",
  },

  {
    id: 10,
    nome: "Eduardo Mendes",
    cargo: "Cyber Security Analyst",
    cidade: "Florianópolis",
    turno: "Noturno",
    email: "eduardo@email.com",
    telefone: "(48) 90000-1010",
    resumo:
      "Especialista em segurança da informação e proteção de sistemas.",
    experiencia:
      "Monitoramento de redes e análise de vulnerabilidades.",
    formacao:
      "Segurança da Informação - IFSC",
    habilidades:
      "Cyber Security, Pentest, Firewall, Redes",
  },
];

export default function CurriculoPage() {
  const [cidadeFiltro, setCidadeFiltro] = useState("");
  const [turnoFiltro, setTurnoFiltro] = useState("");
  const [pesquisa, setPesquisa] = useState("");

  const candidatosFiltrados = useMemo(() => {
    return candidatos.filter((candidato) => {
      const matchPesquisa =
        candidato.nome
          .toLowerCase()
          .includes(pesquisa.toLowerCase()) ||
        candidato.cargo
          .toLowerCase()
          .includes(pesquisa.toLowerCase());

      const matchCidade =
        cidadeFiltro === "" ||
        candidato.cidade === cidadeFiltro;

      const matchTurno =
        turnoFiltro === "" ||
        candidato.turno === turnoFiltro;

      return matchPesquisa && matchCidade && matchTurno;
    });
  }, [cidadeFiltro, turnoFiltro, pesquisa]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-20">

        {/* Cabeçalho */}
        <div className="mb-12 border-l-4 border-blue-900 pl-4">
          <h1 className="text-4xl font-black text-blue-950">
            Banco de Candidatos
          </h1>

          <p className="mt-3 text-slate-600 text-lg">
            Pesquise candidatos e filtre por cidade e turno de trabalho.
          </p>
        </div>

        {/* Filtros */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-sm mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Pesquisar
              </label>

              <input
                type="text"
                placeholder="Nome ou cargo..."
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Cidade
              </label>

              <select
                value={cidadeFiltro}
                onChange={(e) => setCidadeFiltro(e.target.value)}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
              >
                <option value="">Todas</option>
                <option value="Florianópolis">Florianópolis</option>
                <option value="Blumenau">Blumenau</option>
                <option value="Pomerode">Pomerode</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Turno
              </label>

              <select
                value={turnoFiltro}
                onChange={(e) => setTurnoFiltro(e.target.value)}
                className="w-full rounded-xl border border-slate-300 py-3 px-4 text-slate-800 placeholder:text-slate-600 focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 outline-none"
              >
                <option value="">Todos</option>
                <option value="Matutino">Matutino</option>
                <option value="Vespertino">Vespertino</option>
                <option value="Noturno">Noturno</option>
                <option value="Integral">Integral</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8">
          {candidatosFiltrados.map((candidato, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
            >
              {/* Topo */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 border-b border-slate-200 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-blue-900 text-white flex items-center justify-center text-2xl font-black">
                    {candidato.nome.charAt(0)}
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-blue-950">
                      {candidato.nome}
                    </h2>

                    <p className="text-slate-500">
                      {candidato.cargo}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <span className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-2 text-sm font-semibold text-blue-950">
                    {candidato.cidade}
                  </span>

                  <span className="rounded-xl bg-slate-100 border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700">
                    {candidato.turno}
                  </span>
                </div>
              </div>

              {/* Informações */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-bold text-blue-950 mb-1">
                      Email
                    </h3>

                    <p className="text-slate-600">
                      {candidato.email}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-blue-950 mb-1">
                      Telefone
                    </h3>

                    <p className="text-slate-600">
                      {candidato.telefone}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-blue-950 mb-1">
                      Formação
                    </h3>

                    <p className="text-slate-600">
                      {candidato.formacao}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-bold text-blue-950 mb-1">
                      Resumo Profissional
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {candidato.resumo}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-blue-950 mb-1">
                      Experiências
                    </h3>

                    <p className="text-slate-600 leading-relaxed">
                      {candidato.experiencia}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-blue-950 mb-1">
                      Habilidades
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-2">
                      {candidato.habilidades
                        .split(",")
                        .map((habilidade, i) => (
                          <span
                            key={i}
                            className="rounded-lg bg-blue-50 border border-blue-100 px-3 py-1 text-sm text-blue-950"
                          >
                            {habilidade.trim()}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            <div className="mt-8 flex gap-4">
              <Link href={`/paginas/contato/${candidato.id}`}
                 className="mt-8 rounded-2xl bg-blue-900 hover:bg-blue-800 transition py-3 px-8 font-bold text-white inline-flex items-center justify-center"
              >
                 Entrar em Contato
              </Link>
             
            <Link
              href={`/paginas/curriculos/${candidato.id}`}
              className="mt-8 rounded-2xl bg-blue-900 hover:bg-blue-800 transition py-3 px-8 font-bold text-white inline-flex items-center justify-center"
>                   Ver currículo
            </Link>

            </div>
            </div>
          ))}
        </div>

        {/* Sem resultados */}
        {candidatosFiltrados.length === 0 && (
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-blue-950">
              Nenhum candidato encontrado
            </h2>

            <p className="mt-2 text-slate-500">
              Tente alterar os filtros da pesquisa.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}