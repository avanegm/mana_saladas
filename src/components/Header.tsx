import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";

const links = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#cardapio", label: "Cardápio" },
  { href: "#porque", label: "Por que a Maná" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#galeria", label: "Galeria" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border bg-canvas/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4">
        <a href="#topo" className="flex min-w-0 items-center gap-3" aria-label="Início">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full forest-gradient font-display text-[15px] text-canvas">
            M
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[19px] leading-none text-forest">
              Maná
            </span>
            <span className="block text-[9px] tracking-[0.34em] text-muted-foreground uppercase">
              Saladas
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] text-muted-foreground transition-colors hover:text-leaf"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-6 py-2.5 text-[13.5px] font-semibold whitespace-nowrap text-canvas transition-all duration-300 hover:bg-leaf"
          >
            Pedir agora
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="shrink-0 rounded-full border border-border px-5 py-2.5 text-[12px] tracking-[0.16em] text-forest uppercase lg:hidden"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-canvas lg:hidden">
          <nav className="container-page flex flex-col py-2" aria-label="Menu">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/70 py-4 font-display text-2xl text-forest last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 mb-3 rounded-full bg-forest px-6 py-4 text-center text-sm font-semibold text-canvas"
            >
              Pedir agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
