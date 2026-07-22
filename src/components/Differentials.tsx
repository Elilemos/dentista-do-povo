const differentials = [
  {
    title: "Atendimento humanizado",
    description:
      "Cuidamos de cada paciente com escuta, respeito e atenção aos detalhes.",
  },
  {
    title: "Preços acessíveis",
    description:
      "Tratamentos pensados para aproximar a odontologia de quem mais precisa.",
  },
  {
    title: "Localização estratégica",
    description:
      "Estamos em Caucaia - CE, em uma região de fácil acesso para os pacientes.",
  },
  {
    title: "Agendamento prático",
    description:
      "Você pode falar com a clínica diretamente pelo WhatsApp e marcar sua consulta.",
  },
  {
    title: "Ambiente acolhedor",
    description: "Um espaço preparado para receber pacientes com conforto, cuidado e tranquilidade.",
  }
];

export function Differentials() {
  return (
    <section className="bg-white px-6 py-20 text-[#111111]">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">
            Diferenciais
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Cuidado acessível, próximo e feito para pessoas reais
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            A Dentista do Povo une atendimento acolhedor, comunicação simples e
            soluções odontológicas para quem busca qualidade sem complicação.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {differentials.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-[#E5E7EB] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 h-2 w-12 rounded-full bg-[#FFC107]" />

              <h3 className="text-lg font-bold">{item.title}</h3>

              <p className="mt-3 leading-7 text-gray-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}