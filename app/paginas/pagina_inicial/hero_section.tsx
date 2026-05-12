export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white text-blue-950">
      <div className="absolute inset-0 bg-blue-100/40 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm text-blue-900 font-medium">
            Plataforma moderna para currículos
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-black leading-tight">
            Crie currículos profissionais que impressionam.
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            Desenvolva currículos modernos, organizados e prontos para enviar
            para empresas utilizando modelos profissionais.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="rounded-2xl bg-blue-900 hover:bg-blue-800 transition px-8 py-4 font-bold text-white shadow-lg">
              Criar Currículo
            </button>

            <button className="rounded-2xl border border-blue-200 hover:border-blue-900 hover:text-blue-900 transition px-8 py-4 font-semibold text-blue-950">
              Ver Demonstração
            </button>
          </div>

          <div className="mt-12 flex gap-10">
            <div>
              <h2 className="text-3xl font-bold text-blue-950">
                +12k
              </h2>

              <p className="text-slate-600 text-sm">
                Currículos criados
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-950">
                98%
              </h2>

              <p className="text-slate-600 text-sm">
                Aprovação dos usuários
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-950">
                24h
              </h2>

              <p className="text-slate-600 text-sm">
                Suporte disponível
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-2xl">
            <div className="border-b border-slate-200 pb-6 flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-blue-900 flex items-center justify-center text-2xl font-black text-white">
                K
              </div>

              <div>
                <h3 className="text-xl font-bold text-blue-950">
                  Kate Bush
                </h3>

                <p className="text-slate-500">
                  Front-end Developer
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-500 mb-2">
                  Habilidades
                </p>

                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "Tailwind", "TypeScript"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-lg bg-blue-50 text-blue-950 px-3 py-1 text-sm border border-blue-100"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h4 className="font-semibold text-blue-950">
                  TechNova Solutions
                </h4>

                <p className="mt-1 text-sm text-slate-500">
                  Desenvolvedora Front-end • 2024 - Atual
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}