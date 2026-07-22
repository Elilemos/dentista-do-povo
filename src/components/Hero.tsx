import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[620px] overflow-hidden bg-white text-[#111111] sm:min-h-[680px] lg:min-h-[720px]">
      <Image
        src="/images/logo.jpg"
        alt="Logo Dentista do Povo"
        fill
        priority
        className="object-cover object-center opacity-70"
        sizes="100vw"
      />

      <div className="relative z-10 mx-auto flex min-h-[620px] max-w-6xl flex-col justify-center px-6 py-24 sm:min-h-[680px] lg:min-h-[720px]">
        <span className="mb-4 text-sm font-semibold uppercase tracking-wide text-[#111110]">
          Clínica odontológica em Caucaia - CE
        </span>

        <h1 className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Odontologia acessível para cuidar do seu sorriso
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-800">
          Atendimento odontológico de qualidade para todos, com preços acessíveis
          e cuidado de verdade.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="https://wa.me/5585986890974"
            className="inline-flex items-center justify-center rounded-md bg-[#FFC107] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#D4AF37]"
          >
            Agendar consulta
          </a>

          <a
            href="#servicos"
            className="inline-flex items-center justify-center rounded-md border border-[#111111] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
          >
            Ver serviços
          </a>
        </div>
      </div>
    </section>
  );
}
