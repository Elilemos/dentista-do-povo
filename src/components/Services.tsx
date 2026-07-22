const services = [
    {
        title: "Clínica Geral",
        description: "Atendimento completo para avaliação, prevenção e cuidado da saúde bucal.",
    },
    {
        title: "Limpeza e prevenção",
        description: "procedimentos para manter seu sorriso saudável e evitar problema futuros.",
    },
    {
        title: "Clareamento dental",
        description: "Tratamento para deixar os dentes mais claros com segurança e acompanhamento profissional.",
    },
    {
        title: "Ortodontia",
        description: "Correção do alinhamento dos dentes para melhorar estética, mordida e qualidade de vida.",
    },
    {
        title: "Implantes dentários",
        description: "Solução moderna para reposição de dentes perdidos com conforto e naturalidade.",
    },
    {
        title: "Prótese dentária",
        description: "Reabilitação do sorriso para recuperar função, estética e confiança ao sorrir.",
    },
    {
        title: "Atendimento de urgência",
        description:
            "Suporte para casos de dor, desconforto ou situações que precisam de avaliação rápida.",
    },
];

export function Services() {
  return (
    <section id="servicos" className="bg-[#111111] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <span className="text-sm font-semibold uppercase tracking-wide text-[#FFC107]">
          Nossos serviços
        </span>

        <div className="mt-4 max-w-3xl">
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Tratamentos odontológicos para cuidar do seu sorriso
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-300">
            Oferecemos atendimento completo, acessível e humanizado para
            diferentes necessidades odontológicas.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
            key={service.title}
            className="group rounded-md border border-white/10 bg-white p-6 text-[#111111] shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-[#FFC107] text-sm font-bold text-[#111111] transition group-hover:bg-[#D4AF37]">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="text-xl font-bold">{service.title}</h3>

            <p className="mt-3 leading-7 text-gray-700">
              {service.description}
            </p>
          </article>
          ))}
        </div>
      </div>
    </section>
  );
}