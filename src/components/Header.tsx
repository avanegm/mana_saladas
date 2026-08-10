import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/contact";
import oliveBranch from "@/assets/olive-branch.png";

const links = [
  { href: "#quem-somos", label: "Quem somos" },
  { href: "#como-funciona", label: "Por que a Maná" },
  { href: "#instagram", label: "Instagram" },
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open
        ? "border-b border-border bg-canvas/65 backdrop-blur-2xl"
        : "border-b border-transparent"
        }`}
    >
      <div className="container-page flex items-center justify-end py-4">
      
        <nav className="hidden items-center gap-10 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-muted-foreground transition-colors hover:text-leaf"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#556E3C] px-7 py-3 text-[14px] font-semibold whitespace-nowrap text-canvas transition-all duration-300 hover:bg-[#486134]"
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
