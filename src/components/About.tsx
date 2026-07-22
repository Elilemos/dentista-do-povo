import Image from "next/image";

export function About() {
  return (
    <section id="sobre" className="bg-[#F8F8F8] px-6 py-20 text-[#111111]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="rounded-md border border-[#E5E7EB] bg-white p-6 shadow-sm">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-[#E5E7EB]">
            <Image
              src="/images/frente.png"
              alt="Fachada da clínica Dentista do Povo"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">
            Sobre a clínica
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Odontologia acessível com atendimento humano em Caucaia
          </h2>

          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-700">
            <p>
              A Dentista do Povo nasceu com o propósito de aproximar o cuidado
              odontológico de mais pessoas, oferecendo atendimento de qualidade,
              comunicação clara e acolhimento em cada etapa do tratamento.
            </p>

            <p>
              Localizada em Caucaia - CE, a clínica busca unir estrutura,
              profissionalismo e preço justo para que cada paciente se sinta
              seguro ao cuidar do próprio sorriso.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-md border border-[#E5E7EB] bg-white p-4">
              <strong className="block text-2xl text-[#D4AF37]">01</strong>
              <span className="mt-1 block text-sm font-medium text-gray-700">
                Atendimento próximo
              </span>
            </div>

            <div className="rounded-md border border-[#E5E7EB] bg-white p-4">
              <strong className="block text-2xl text-[#D4AF37]">02</strong>
              <span className="mt-1 block text-sm font-medium text-gray-700">
                Comunicação clara
              </span>
            </div>

            <div className="rounded-md border border-[#E5E7EB] bg-white p-4">
              <strong className="block text-2xl text-[#D4AF37]">03</strong>
              <span className="mt-1 block text-sm font-medium text-gray-700">
                Preço acessível
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}