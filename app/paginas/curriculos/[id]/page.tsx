"use client";

import Link from "next/link";
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

export default function CurriculoDetalhes() {
  const params = useParams();

  const candidato = candidatos.find(
    (c) => c.id === Number(params.id)
  );

  if (!candidato) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Currículo não encontrado
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 p-10">

        <Link
          href="/paginas/curriculos"
          className="text-blue-900 font-semibold"
        >
          ← Voltar
        </Link>

        <h1 className="mt-8 text-5xl font-black text-blue-950">
          {candidato.nome}
        </h1>

        <p className="mt-2 text-2xl text-slate-600">
          {candidato.cargo}
        </p>

        <div className="mt-10 space-y-5 text-slate-700">
          <p><strong>Cidade:</strong> {candidato.cidade}</p>
          <p><strong>Turno:</strong> {candidato.turno}</p>
          <p><strong>Email:</strong> {candidato.email}</p>
          <p><strong>Telefone:</strong> {candidato.telefone}</p>
          <p><strong>Formação:</strong> {candidato.formacao}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-950">
            Resumo
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            {candidato.resumo}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-950">
            Experiência
          </h2>

          <p className="mt-3 text-slate-700 leading-relaxed">
            {candidato.experiencia}
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-blue-950">
            Habilidades
          </h2>

          <div className="flex flex-wrap gap-3 mt-4">
            {candidato.habilidades
              .split(",")
              .map((habilidade, index) => (
                <span
                  key={index}
                  className="rounded-xl bg-blue-50 border border-blue-100 px-4 py-2 text-blue-950"
                >
                  {habilidade.trim()}
                </span>
              ))}
          </div>
        </div>

        {/* Botões */}
        <div className="mt-12 flex flex-wrap gap-4">

          <Link
            href="/paginas/curriculos/contato/"
            className="rounded-2xl bg-green-600 hover:bg-green-700 transition py-4 px-8 font-bold text-white"
          >
            Entrar em Contato
          </Link>

          <Link
            href="/paginas/curriculos"
            className="rounded-2xl border border-slate-300 hover:bg-slate-100 transition py-4 px-8 font-bold text-slate-700"
          >
            Voltar
          </Link>

        </div>

      </div>
    </main>
  );
}