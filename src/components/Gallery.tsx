import Image from "next/image";

const galleryItems = [
  {
    title: "Recepção acolhedora",
    description: "Ambiente preparado para receber pacientes com conforto.",
    image: "/images/recepcao.webp",
  },
  {
    title: "Consultórios equipados",
    description: "Estrutura organizada para atendimentos odontológicos.",
    image: "/images/equipados.png",
  },
  {
    title: "Atendimento humanizado",
    description: "Cuidado próximo desde a chegada até o fim da consulta.",
    image: "/images/atendimento.webp",
  },
  {
    title: "Ambiente seguro",
    description: "Local pensado para unir praticidade, cuidado e confiança.",
    image: "/images/cirurgia2.webp"
  },
];

export function Gallery() {
  return (
    <section className="bg-white px-6 py-20 text-[#111111]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-wide text-[#D4AF37]">
            Galeria
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Um espaço pensado para cuidar bem do seu sorriso
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-700">
            Em breve, esta área poderá receber fotos reais da clínica,
            consultórios e espaços de atendimento.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryItems.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-md border border-[#E5E7EB] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E7EB]">
              <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition duration-300 group-hover:scale-105"
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              </div>

              <div className="p-5">
                <h3 className="font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-gray-700">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}