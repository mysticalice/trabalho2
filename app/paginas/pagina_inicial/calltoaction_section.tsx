import Link from "next/link";


export default function CallToActionSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-[32px] border border-blue-100 bg-blue-950 p-12 text-center shadow-2xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm text-blue-100">
            Comece gratuitamente
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
            Monte seu currículo profissional hoje mesmo.
          </h2>

          <p className="mt-6 text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Crie currículos modernos, organizados e prontos para enviar para
            empresas e recrutadores.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link
              href= '/paginas/curriculos/novo'
              className="rounded-2xl bg-white hover:bg-slate-100 transition px-8 py-4 font-bold text-blue-950"
            >
              Criar currículo agora
            </Link>


          </div>
        </div>
      </div>
    </section>
  );
}