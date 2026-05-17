# CurrículoPro

Sistema web desenvolvido com Next.js para cadastro, visualização e gerenciamento de currículos profissionais.

---

## Sobre o Projeto

O CurrículoPro é uma plataforma criada para ajudar usuários a montarem currículos modernos, organizados e profissionais de forma simples e intuitiva.

O projeto foi desenvolvido utilizando o ecossistema do Next.js com foco em:

- Componentização
- Responsividade
- Navegação dinâmica
- Interface moderna
- Experiência do usuário

---

## Funcionalidades

- Cadastro de currículos
- Banco de candidatos
- Filtros por cidade e turno
- Pesquisa por nome e cargo
- Página dinâmica de detalhes do currículo `[id]`
- Página fictícia de contato simulando WhatsApp
- Interface responsiva para desktop e mobile
- Navegação utilizando App Router do Next.js

---

## Tecnologias Utilizadas

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- App Router
- Turbopack

---

## Estrutura do Projeto

```bash
app/
 ├── paginas/
 │    ├── pagina_inicial/
 │    │     ├── calltoaction_section.tsx
 │    │     ├── features_section.tsx
 │    │     ├── hero_section.tsx
 │    │     └── page.tsx
 │    │
 │    ├── pagina_sobre/
 │    │     └── page.tsx
 │    │
 │    ├── pagina_contato/
 │    │     └── page.tsx
 │    │
 │    ├── curriculos/
 │    │     ├── page.tsx
 │    │     ├── novo/
 │    │     │     └── page.tsx
 │    │     └── [id]/
 │    │           └── page.tsx
```

---

## Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
```

Entre na pasta do projeto:

```bash
cd trabalho2
```

Instale as dependências:

```bash
npm install
```

Execute o servidor:

```bash
npm run dev
```

Abra no navegador:

```bash
http://localhost:3000
```

---

## Páginas do Sistema

### Banco de Candidatos

Visualização de candidatos cadastrados com filtros e pesquisa dinâmica.

### Página Dinâmica `[id]`

Cada candidato possui uma página individual exibindo:

- Informações pessoais
- Formação
- Experiência
- Habilidades
- Botão de contato

### Página de Contato

Página fictícia simulando uma conversa via WhatsApp pelo navegador.

### Cadastro de Currículo

Formulário moderno para criação de novos currículos.

### Sobre Nós

Página institucional apresentando missão, valores e informações da plataforma.

---

## Design

O projeto utiliza:

- Tailwind CSS
- Layout responsivo
- Paleta em azul e slate
- Componentes modernos
- Bordas arredondadas
- Sombras suaves
- Tipografia destacada

---

## Melhorias Futuras

- Integração com banco de dados
- Upload real de imagens
- Sistema de autenticação
- Exportação de currículo em PDF
- Backend com API
- Cadastro persistente

---

## Aprendizados

Durante o desenvolvimento foram praticados conceitos de:

- Rotas dinâmicas no Next.js
- Componentização React
- Estados com useState e useMemo
- Navegação com Link
- Estrutura App Router
- Estilização com Tailwind CSS

---

## Autor

Desenvolvido por Alice Eduarda Batista.

---

## Licença

Este projeto foi desenvolvido para fins acadêmicos e de estudo.