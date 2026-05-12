const features = [
  {
    title: "Modelos Modernos",
    description:
      "Layouts profissionais e elegantes prontos para utilizar.",
  },
  {
    title: "Exportação em PDF",
    description:
      "Baixe seu currículo em alta qualidade rapidamente.",
  },
  {
    title: "Editor Inteligente",
    description:
      "Preenchimento simplificado e intuitivo.",
  },
  {
    title: "Responsivo",
    description:
      "Edite seu currículo em qualquer dispositivo.",
  },
  {
    title: "Organização Completa",
    description:
      "Gerencie experiências, cursos e certificados.",
  },
  {
    title: "Compartilhamento Fácil",
    description:
      "Compartilhe seu currículo através de links.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-slate-50 py-24 text-blue-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-black">
            Recursos da Plataforma
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Tudo que você precisa para criar um currículo profissional.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-white p-8 hover:border-blue-300 transition shadow-sm hover:shadow-xl"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-100 text-blue-950 font-bold text-xl border border-blue-200">
                {index + 1}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}