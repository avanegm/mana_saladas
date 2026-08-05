import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import heroSalad from "@/assets/hero-salad.jpg";
import aboutKitchen from "@/assets/about-kitchen.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import {
  ADDRESS,
  EMAIL,
  HOURS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_LABEL,
  WHATSAPP_URL,
} from "@/lib/contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Maná Saladas | Saladas frescas e artesanais com entrega" },
      {
        name: "description",
        content:
          "Saladas e bowls montados no dia com ingredientes frescos e selecionados. Sabor, leveza e cuidado em cada detalhe — peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Maná Saladas | Saladas frescas e artesanais" },
      {
        property: "og:description",
        content:
          "Ingredientes frescos, montagem no dia e entrega cuidadosa. Descubra o cardápio da Maná.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Maná Saladas",
          servesCuisine: "Saladas, bowls e alimentação saudável",
          email: EMAIL,
          telephone: "+5515998249546",
          areaServed: ["Sorocaba", "Votorantim"],
          openingHours: "Mo-Sa 09:00-19:00",
          sameAs: [INSTAGRAM_URL],
        }),
      },
    ],
  }),
});

const menu = [
  {
    name: "Verde Maná",
    note: "Nossa assinatura",
    desc: "Mix de folhas orgânicas, abacate, pepino, ervas frescas, sementes tostadas e molho de limão siciliano.",
    price: "R$ 34",
  },
  {
    name: "Raiz & Grãos",
    note: "Mais sustância",
    desc: "Quinoa, grão-de-bico assado, cenoura caramelizada, rúcula e tahine cítrico.",
    price: "R$ 38",
  },
  {
    name: "Horta Cítrica",
    note: "Leve e refrescante",
    desc: "Folhas tenras, laranja-bahia, erva-doce, hortelã, castanhas e vinagrete de mel.",
    price: "R$ 36",
  },
  {
    name: "Campo Proteico",
    note: "Pós-treino",
    desc: "Frango grelhado em ervas, ovo caipira, brócolis, tomate confit e molho de iogurte.",
    price: "R$ 42",
  },
  {
    name: "Bowl da Estação",
    note: "Muda toda semana",
    desc: "Combinação criada com o que estiver no ponto perfeito na feira da semana.",
    price: "R$ 39",
  },
  {
    name: "Maná Kids",
    note: "Para os pequenos",
    desc: "Porção suave de folhas doces, milho, cenoura ralada e molho leve de laranja.",
    price: "R$ 26",
  },
];

const reasons = [
  {
    title: "Colheita recente",
    desc: "Trabalhamos com pequenos produtores da região. O que chega hoje é servido hoje.",
  },
  {
    title: "Montagem no dia",
    desc: "Nada é preparado com antecedência. Cada pote é montado na hora do seu pedido.",
  },
  {
    title: "Receitas próprias",
    desc: "Molhos autorais, temperos equilibrados e combinações pensadas por nutrição e sabor.",
  },
  {
    title: "Embalagem consciente",
    desc: "Materiais recicláveis, transporte refrigerado e apresentação impecável.",
  },
  {
    title: "Cuidado no atendimento",
    desc: "Atendimento humano pelo WhatsApp, do pedido até a entrega na sua porta.",
  },
  {
    title: "Assinatura semanal",
    desc: "Planos flexíveis para quem quer comer bem todos os dias, sem pensar duas vezes.",
  },
];

const steps = [
  {
    n: "01",
    title: "Escolha o seu",
    desc: "Explore o cardápio e monte sua combinação — ou deixe a escolha da estação com a gente.",
  },
  {
    n: "02",
    title: "Peça em um toque",
    desc: "Envie o pedido pelo WhatsApp. Sem aplicativo, sem cadastro, sem burocracia.",
  },
  {
    n: "03",
    title: "Preparamos fresco",
    desc: "Sua salada é lavada, cortada e montada no momento, com molho servido separadamente.",
  },
  {
    n: "04",
    title: "Recebe no ponto",
    desc: "Entrega refrigerada no horário combinado, pronta para comer sem perder o frescor.",
  },
];

const gallery = [
  { src: gallery1, alt: "Folhas verdes frescas com gotas de água" },
  { src: gallery2, alt: "Saladas em potes de vidro prontas para entrega" },
  { src: gallery3, alt: "Bowl de grãos e legumes recebendo molho cítrico" },
  { src: gallery4, alt: "Pessoa almoçando uma salada Maná no escritório" },
];

function Index() {
  return (
    <div id="topo" className="min-h-screen bg-canvas">
      <Header />
      <FloatingWhatsApp />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden soft-gradient pt-32 pb-20 md:pt-44 md:pb-28">
          <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow">Saladas frescas · Sorocaba e Votorantim</span>
              </Reveal>
              <Reveal delay={90}>
                <h1 className="mt-6 text-[clamp(2.6rem,6.2vw,4.6rem)] text-forest">
                  O frescor da terra,
                  <br />
                  servido com <em className="not-italic text-leaf">cuidado</em>.
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted-foreground">
                  A Maná nasceu de uma ideia simples: comer bem não precisa ser complicado nem
                  sem graça. Saladas e bowls montados no dia, com ingredientes escolhidos um por
                  um e receitas que você sente na primeira garfada.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-forest px-8 py-4 text-sm font-semibold whitespace-nowrap text-canvas transition-all duration-300 hover:bg-leaf"
                  >
                    Fazer meu pedido
                  </a>
                  <a
                    href="#cardapio"
                    className="rounded-full border border-forest/25 px-8 py-4 text-sm font-semibold whitespace-nowrap text-forest transition-colors duration-300 hover:border-leaf hover:text-leaf"
                  >
                    Ver o cardápio
                  </a>
                </div>
              </Reveal>
              <Reveal delay={340}>
                <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                  {[
                    ["100%", "montado no dia"],
                    ["+12", "produtores parceiros"],
                    ["6 dias", "de entrega por semana"],
                  ].map(([k, v]) => (
                    <div key={v}>
                      <dt className="font-display text-2xl text-forest">{k}</dt>
                      <dd className="mt-1 text-[12.5px] leading-snug text-muted-foreground">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={140}>
                <div className="relative">
                  <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-sprout/20 blur-2xl" />
                  <img
                    src={heroSalad}
                    alt="Salada fresca da Maná em bowl de cerâmica"
                    width={1600}
                    height={1200}
                    className="w-full rounded-[2rem] object-cover shadow-[0_40px_80px_-40px_rgba(22,38,30,0.45)]"
                  />
                  <div className="absolute -bottom-6 left-6 rounded-2xl bg-card/95 px-6 py-4 shadow-[0_24px_48px_-28px_rgba(22,38,30,0.4)] backdrop-blur md:left-10">
                    <p className="font-display text-lg text-forest">Verde Maná</p>
                    <p className="text-[12.5px] text-muted-foreground">
                      folhas orgânicas · abacate · limão siciliano
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* QUEM SOMOS */}
        <section id="quem-somos" className="bg-linen py-24 md:py-36">
          <div className="container-page grid items-center gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <img
                  src={aboutKitchen}
                  alt="Preparo artesanal de ervas frescas na cozinha da Maná"
                  loading="lazy"
                  width={1408}
                  height={1600}
                  className="w-full rounded-[2rem] object-cover"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal>
                <span className="eyebrow">Quem somos</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] text-forest">
                  Uma cozinha pequena, obcecada por frescor.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <div className="mt-8 space-y-5 text-[16.5px] leading-relaxed text-muted-foreground">
                  <p>
                    Maná é o alimento que chega no tempo certo. Começamos servindo amigos que
                    queriam almoçar melhor durante a semana e crescemos mantendo o mesmo
                    princípio: escolher bem, preparar na hora e entregar com carinho.
                  </p>
                  <p>
                    Nossa equipe visita a feira nas primeiras horas da manhã, conversa com quem
                    plantou e leva só o que está no ponto. Depois vem o trabalho silencioso da
                    cozinha — lavar, cortar, temperar e montar com a atenção que a comida merece.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10 grid gap-x-10 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
                  {[
                    ["Origem", "Produtores da região, colheita da semana"],
                    ["Preparo", "Artesanal, sem conservantes ou pré-prontos"],
                    ["Nutrição", "Receitas revisadas por nutricionista"],
                    ["Entrega", "Refrigerada, em horário combinado"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <p className="eyebrow">{k}</p>
                      <p className="mt-2 text-[15px] leading-snug text-forest">{v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CARDÁPIO */}
        <section id="cardapio" className="py-24 md:py-36">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="eyebrow">Cardápio</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] text-forest">
                  Combinações que mudam com a estação
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-[16.5px] leading-relaxed text-muted-foreground">
                  Seis criações fixas e um bowl que se reinventa toda semana. Todos com molho
                  servido à parte e opção de porção maior.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {menu.map((item, i) => (
                <Reveal key={item.name} delay={i * 70}>
                  <article className="lift h-full rounded-[1.75rem] border border-border bg-card p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-2xl text-forest">{item.name}</h3>
                      <span className="shrink-0 font-display text-lg text-leaf">{item.price}</span>
                    </div>
                    <p className="mt-2 text-[11px] tracking-[0.18em] text-clay uppercase">
                      {item.note}
                    </p>
                    <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-14 text-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-forest px-8 py-4 text-sm font-semibold whitespace-nowrap text-canvas transition-all duration-300 hover:bg-leaf"
                >
                  Montar meu pedido
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* POR QUE ESCOLHER */}
        <section id="porque" className="forest-gradient py-24 text-canvas md:py-36">
          <div className="container-page">
            <div className="max-w-2xl">
              <Reveal>
                <span className="text-[0.7rem] font-medium tracking-[0.22em] text-sprout uppercase">
                  Por que escolher a Maná
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)]">
                  Frescor não é promessa. É método.
                </h2>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-[1.75rem] bg-canvas/15 md:grid-cols-2 xl:grid-cols-3">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={i * 60}>
                  <div className="h-full bg-forest/60 p-9 transition-colors duration-500 hover:bg-forest/30">
                    <h3 className="text-xl text-canvas">{r.title}</h3>
                    <p className="mt-4 text-[15px] leading-relaxed text-canvas/70">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section id="como-funciona" className="bg-linen py-24 md:py-36">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="eyebrow">Como funciona</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] text-forest">
                  Quatro passos, nenhuma complicação
                </h2>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <div className="border-t border-forest/15 pt-7">
                    <span className="font-display text-4xl text-sprout">{s.n}</span>
                    <h3 className="mt-4 text-xl text-forest">{s.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA */}
        <section id="galeria" className="py-24 md:py-36">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="eyebrow">Galeria</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] text-forest">
                  O dia a dia da nossa cozinha
                </h2>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((g, i) => (
                <Reveal key={g.alt} delay={i * 70}>
                  <figure
                    className={`overflow-hidden rounded-[1.5rem] ${
                      i % 3 === 0 ? "sm:mt-0" : "sm:mt-8"
                    }`}
                  >
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      width={1200}
                      height={1200}
                      className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.06]"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section id="instagram" className="bg-linen py-24 md:py-32">
          <div className="container-page grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <Reveal>
                <span className="eyebrow">Instagram</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3rem)] text-forest">
                  Acompanhe {INSTAGRAM_HANDLE}
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-muted-foreground">
                  Novidades do cardápio, bastidores da feira, receitas rápidas e o bowl da
                  estação toda semana. É por lá que contamos tudo primeiro.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-block rounded-full border border-forest/25 px-8 py-4 text-sm font-semibold whitespace-nowrap text-forest transition-colors duration-300 hover:border-leaf hover:text-leaf"
                >
                  Seguir no Instagram
                </a>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <div className="grid grid-cols-3 gap-3">
                {[gallery3, gallery1, gallery2, gallery4, gallery2, gallery1].map((src, i) => (
                  <Reveal key={i} delay={i * 50}>
                    <img
                      src={src}
                      alt="Publicação da Maná Saladas no Instagram"
                      loading="lazy"
                      width={1200}
                      height={1200}
                      className="aspect-square w-full rounded-xl object-cover transition-opacity duration-500 hover:opacity-85"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="soft-gradient py-24 md:py-36">
          <div className="container-page grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <span className="eyebrow">Contato</span>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-6 text-[clamp(2rem,4vw,3.2rem)] text-forest">
                  Vamos combinar o seu almoço?
                </h2>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 max-w-md text-[16.5px] leading-relaxed text-muted-foreground">
                  Fale com a gente pelo WhatsApp para pedidos do dia, planos semanais ou
                  encomendas para eventos e empresas.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-9 inline-block rounded-full bg-forest px-8 py-4 text-sm font-semibold whitespace-nowrap text-canvas transition-all duration-300 hover:bg-leaf"
                >
                  Falar pelo WhatsApp
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <Reveal delay={120}>
                <div className="rounded-[1.75rem] border border-border bg-card p-9">
                  <dl className="divide-y divide-border">
                    {[
                      ["WhatsApp", WHATSAPP_LABEL],
                      ["E-mail", EMAIL],
                      ["Atendimento", HOURS],
                      ["Região", ADDRESS],
                      ["Instagram", INSTAGRAM_HANDLE],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="grid gap-1 py-5 first:pt-0 last:pb-0 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6"
                      >
                        <dt className="eyebrow self-center">{k}</dt>
                        <dd className="text-[15.5px] leading-snug text-forest">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-forest py-16 text-canvas">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-canvas/10 font-display text-[15px] text-canvas">
                M
              </span>
              <span>
                <span className="block font-display text-[19px] leading-none">Maná</span>
                <span className="block text-[9px] tracking-[0.34em] text-canvas/60 uppercase">
                  Saladas
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-xs text-[14.5px] leading-relaxed text-canvas/65">
              Saladas e bowls frescos, montados no dia e entregues com cuidado em Sorocaba e
              Votorantim.
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <p className="text-[0.7rem] font-medium tracking-[0.22em] text-sprout uppercase">
              Navegar
            </p>
            <ul className="mt-5 space-y-3 text-[14.5px] text-canvas/70">
              {[
                ["#quem-somos", "Quem somos"],
                ["#cardapio", "Cardápio"],
                ["#como-funciona", "Como funciona"],
                ["#galeria", "Galeria"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="transition-colors hover:text-sprout">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-[0.7rem] font-medium tracking-[0.22em] text-sprout uppercase">
              Contato
            </p>
            <ul className="mt-5 space-y-3 text-[14.5px] text-canvas/70">
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sprout">
                  {WHATSAPP_LABEL}
                </a>
              </li>
              <li>{EMAIL}</li>
              <li>{HOURS}</li>
              <li>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-sprout">
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-page mt-14 border-t border-canvas/15 pt-7">
          <p className="text-[12.5px] text-canvas/50">
            © {new Date().getFullYear()} Maná Saladas. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
