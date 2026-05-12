export default function PaginaSobre() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <span className="inline-flex rounded-full border border-blue-900/20 bg-blue-900/5 px-4 py-1 text-sm text-blue-900 font-medium">
            Sobre a Plataforma
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight max-w-4xl text-blue-950">
            Facilitando a criação de currículos modernos e profissionais.
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-3xl">
            O CVConnect é uma plataforma desenvolvida para ajudar estudantes,
            profissionais e freelancers a criarem currículos modernos,
            organizados e preparados para o mercado de trabalho.
          </p>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-blue-950">
              Nossa missão
            </h2>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Nosso objetivo é simplificar o processo de criação de currículos,
              oferecendo ferramentas modernas, intuitivas e acessíveis para
              qualquer pessoa que deseja conquistar novas oportunidades.
            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">
              Acreditamos que um currículo bem estruturado pode abrir portas,
              destacar talentos e aumentar as chances de contratação.
            </p>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-10 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="text-4xl font-black text-blue-950">
                  +12k
                </h3>

                <p className="mt-2 text-slate-600">
                  Currículos criados
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="text-4xl font-black text-blue-950">
                  98%
                </h3>

                <p className="mt-2 text-slate-600">
                  Satisfação dos usuários
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="text-4xl font-black text-blue-950">
                  +50
                </h3>

                <p className="mt-2 text-slate-600">
                  Modelos disponíveis
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-slate-200 p-6">
                <h3 className="text-4xl font-black text-blue-950">
                  24h
                </h3>

                <p className="mt-2 text-slate-600">
                  Suporte online
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-slate-50 border-y border-slate-200 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-black text-blue-950">
              Nossos valores
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Desenvolvemos uma plataforma focada em qualidade, simplicidade e
              inovação.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Simplicidade",
                description:
                  "Interface intuitiva e fácil de utilizar.",
              },
              {
                title: "Modernidade",
                description:
                  "Designs atualizados e profissionais.",
              },
              {
                title: "Acessibilidade",
                description:
                  "Ferramentas disponíveis para todos os usuários.",
              },
              {
                title: "Organização",
                description:
                  "Estruture experiências e habilidades facilmente.",
              },
              {
                title: "Performance",
                description:
                  "Plataforma rápida e responsiva.",
              },
              {
                title: "Inovação",
                description:
                  "Recursos modernos para destacar currículos.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-900/30 transition shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-900/10 border border-blue-900/20 flex items-center justify-center text-blue-950 font-bold text-xl">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-blue-950">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-[32px] border border-slate-200 bg-blue-950 p-12 text-center shadow-xl">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-white">
              Comece agora a criar seu currículo.
            </h2>

            <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Utilize ferramentas modernas para construir currículos
              profissionais e aumentar suas oportunidades.
            </p>

            <button className="mt-10 rounded-2xl bg-white hover:bg-slate-100 transition px-8 py-4 font-bold text-blue-950">
              Criar Currículo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}