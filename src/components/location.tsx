const mapsRouteUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Rua%20Coronel%20Correia%2C%201981%2C%20Caucaia%20-%20CE%2C%2061600-004";

export function Location() {
  return (
    <section id="localizacao" className="bg-[#111111] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wide text-[#FFC107]">
            Localização
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Estamos em Caucaia, prontos para cuidar do seu sorriso
          </h2>

          <div className="mt-6 space-y-2 text-lg leading-8 text-gray-300">
            <p>Rua Coronel Correia, 1981</p>
            <p>Caucaia - CE</p>
            <p>CEP 61600-004</p>
          </div>

          <a
            href={mapsRouteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-[#FFC107] px-6 py-3 font-semibold text-[#111111] transition hover:bg-[#D4AF37]"
          >
            Ver rota no Google Maps
          </a>
        </div>

        <div className="overflow-hidden rounded-md border border-white/10 bg-white shadow-sm">
  <iframe
    title="Mapa da clínica Dentista do Povo"
    src="https://www.google.com/maps?q=Rua%20Coronel%20Correia%2C%201981%2C%20Caucaia%20-%20CE%2C%2061600-004&output=embed"
    className="h-[360px] w-full border-0 sm:h-[420px] lg:h-[460px]"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
      </div>
    </section>
  );
}