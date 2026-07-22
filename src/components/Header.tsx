export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#E5E7EB] bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold text-[#111111]">
          Dentista do Povo
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#servicos" className="transition hover:text-[#D4AF37]">
            Serviços
          </a>
          <a href="#sobre" className="transition hover:text-[#D4AF37]">
            Sobre
          </a>
          <a href="#depoimentos" className="transition hover:text-[#D4AF37]">
            Depoimentos
          </a>
          <a href="#localizacao" className="transition hover:text-[#D4AF37]">
            Localização
          </a>
        </nav>

        <a
          href="https://wa.me/5585986890974"
          className="hidden rounded-md bg-[#FFC107] px-4 py-2 text-sm font-semibold text-[#111111] transition hover:bg-[#D4AF37] md:inline-block"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}