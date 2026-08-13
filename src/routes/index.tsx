import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import heroSalad from "@/assets/hero-salad.jpg";
import heroSalade from "@/assets/hero-salad_1.jpg";
import aboutKitchen from "@/assets/about-kitchen.jpg";
import caesar from "@/assets/caesar.jpg";
import tropical from "@/assets/tropical.jpg";
import mediterranea from "@/assets/mediterranea.jpg";
import mediterranear from "@/assets/mediterranea1.jpg";
import oliveBranch from "@/assets/olive-branch.png";
import logoMana from "@/assets/logo-mana.png";
import { Instagram, MessageCircle } from "lucide-react";
import { Leaf, Heart, AlarmClock, Salad, } from "lucide-react";
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
    name: "Caesar",
    price: "R$ 36",
    note: "Mais pedida",
    desc: "Alface americana, frango grelhado, parmesão ralado, croutons e molho Caesar.",
    image: caesar,
  },
  {
    name: "Tropical",
    price: "R$ 34",
    note: "Refrescante",
    desc: "Mix de folhas, manga, tomate-cereja, castanhas e molho cítrico.",
    image: tropical,
  },
  {
    name: "Mediterrânea",
    price: "R$ 35",
    note: "Leve e saborosa",
    desc: "Mix de folhas, grão-de-bico, pepino, tomate seco, azeitonas e molho mediterrâneo.",
    image: mediterranea,
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
    icon: <Leaf className="mx-auto h-10 w-10 text-[#9FC079]" />,
    title: "Ingredientes frescos",
    text: "Selecionamos o melhor todos os dias.",
  },
  {
    icon: <Heart className="mx-auto h-10 w-10 text-[#9FC079]" />,
    title: "Feito com carinho",
    text: "Cada salada é preparada com muito cuidado.",
  },
  {
    icon: <AlarmClock className="mx-auto h-10 w-10 text-[#9FC079]" />,
    title: "Entrega no horário",
    text: "Receba sua salada no horário combinado.",
  },
  {
    icon: <Salad className="mx-auto h-10 w-10 text-[#9FC079]" />,
    title: "Preparação diária",
    text: "Nada é preparado antes. Tudo sempre fresco.",
  },
];

const diferenciais = [
  {
    icon: <Leaf className="mx-auto h-9 w-9 text-[#8FA56C] stroke-[1.5]" />,
    title: "Ingredientes frescos",
    text: "Selecionamos o melhor todos os dias."
  },
  {
    icon: <Heart className="mx-auto h-9 w-9 text-[#8FA56C] stroke-[1.5]" />,
    title: "Feito com carinho",
    text: "Cada salada é preparada com muito cuidado."
  },
  {
    icon: <AlarmClock className="mx-auto h-9 w-9 text-[#8FA56C] stroke-[1.5]" />,
    title: "Entrega no horário",
    text: "Receba sua salada no horário combinado."
  },
  {
    icon: <Salad className="mx-auto h-9 w-9 text-[#8FA56C] stroke-[1.5]" />,
    title: "Preparação diária",
    text: "Nada é preparado antes. Tudo sempre fresco."
  }
];

function Index() {
  return (
    <div id="topo" className="min-h-screen bg-canvas">
      <Header />
      <FloatingWhatsApp />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden soft-gradient bg-canvas">
          <div className="container-page grid items-center gap-10 py-20 lg:grid-cols-[42%_58%]">

            {/* TEXTO */}
            <div className="relative z-10 max-w-[420px]">

              <Reveal>
                <span className="eyebrow">
                  Saladas frescas • Sorocaba e Votorantim
                </span>
              </Reveal>

              <Reveal delay={100}>
                <h1 className="mt-6 font-display text-[clamp(3rem,10vw,5.8rem)] leading-[0.98] tracking-[-0.025em] text-forest">
                  Alimentar
                  <br />
                  também é
                  <br />
                  uma forma
                  <br />
                  de{" "}
                  <span
                    className="text-[#7A8F5C]"
                    style={{ fontStyle: "italic" }}
                  >
                    cuidar.
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-8 text-lg leading-8 text-muted-foreground">
                  Saladas artesanais preparadas diariamente com ingredientes
                  frescos, muito sabor e carinho.
                </p>
              </Reveal>

              {/* BOTÕES DESKTOP */}
              <Reveal delay={300}>
                <div className="mt-10 flex flex-wrap gap-4">

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#556E3C] px-8 py-4 font-semibold text-canvas transition hover:bg-[#486134]"
                  >
                    Pedir pelo WhatsApp
                  </a>

                  <a
                    href="/cardapio-mana.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-forest/20 px-8 py-4 font-semibold text-[#556E3C] transition hover:border-leaf hover:text-leaf"
                  >
                    Ver cardápio
                  </a>

                </div>
              </Reveal>

            </div>

            {/* FOTO */}
            <div className="relative flex items-center justify-center lg:justify-end">

              <Reveal delay={250}>

                <img
                  src={heroSalad}
                  alt="Salada Maná"
                  width={1800}
                  height={1800}
                  className="
            w-[92%]
            max-w-[620px]
            mx-auto
            object-contain
            lg:w-[760px]
            lg:max-w-none
          "
                />

              </Reveal>

            </div>

            {/* BOTÕES MOBILE */}
            <Reveal delay={300}>
              <div className="flex flex-col gap-4 lg:hidden">

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#556E3C] px-8 py-4 text-center font-semibold text-canvas transition hover:bg-[#486134]"
                >
                  Pedir pelo WhatsApp
                </a>

                <a
                  href="/cardapio-mana.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-forest/20 px-8 py-4 text-center font-semibold text-[#556E3C] transition hover:border-leaf hover:text-leaf"
                >
                  Ver cardápio
                </a>

              </div>
            </Reveal>

          </div>


        </section>


        {/* TRANSIÇÃO */}
        <section className="bg-canvas pt-10 pb-8 md:pt-12 md:pb-10">
          <div className="container-page flex flex-col items-center text-center">

            <div className="mb-6 h-px w-24 bg-clay/60" />

            <Reveal>
              <h2 className="font-display text-[clamp(2.3rem,4vw,3.8rem)] leading-[1.15] text-forest">
                Não é sobre dieta.
                <br />
                É sobre{" "}
                <span className="italic text-[#93a56b]">
                  cuidado.
                </span>
              </h2>
            </Reveal>

            <div className="my-5 text-[34px] leading-none text-[#e58b2b]">
              ♥
            </div>

            <div className="h-px w-24 bg-clay/60" />

          </div>
        </section>

        {/* QUEM SOMOS */}
        <section
          id="quem-somos"
          className="relative overflow-hidden bg-linen py-20 md:py-28"
        >
          <div className="container-page">

            <div className="mx-auto max-w-4xl">

              <Reveal>
                <span className="eyebrow">Quem somos</span>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-6 font-display text-[clamp(2.6rem,4vw,4rem)] leading-[1.05] text-forest">
                  Mais que uma salada.
                  <br />
                  Um{" "}
                  <span className="italic text-[#93A56B]">
                    propósito.
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <div className="mt-8 max-w-3xl space-y-5 text-[16.5px] leading-relaxed text-muted-foreground">
                  <p>
                    O nome Maná nasceu inspirado no alimento que Deus enviou para
                    sustentar Seu povo no deserto.
                  </p>

                  <p>
                    Para nós, ele representa cuidado, provisão e amor.
                  </p>

                  <p>
                    Cada salada é preparada com ingredientes frescos e muito carinho,
                    porque acreditamos que alimentar alguém também é uma forma de cuidar.
                  </p>

                  <p>
                    Estamos começando nossa história, mas colocamos em cada entrega o
                    mesmo compromisso que desejamos manter por muitos anos.
                  </p>
                </div>
              </Reveal>

            </div>

          </div>

          {/* Oliveira decorativa */}
          <img
            src={oliveBranch}
            alt=""
            aria-hidden="true"
            className="
      pointer-events-none
      absolute
      bottom-4
      right-[-20px]
      w-32
      select-none
      opacity-10
      md:right-0
      md:w-40
    "
          />
        </section>


        {/* POR QUE ESCOLHER A MANÁ */}
        <section
          id="como-funciona"
          className="bg-[#F7F4EC] py-8 md:py-10"
        >
          <div className="container-page">

            <div className="grid sm:grid-cols-2 lg:grid-cols-4">

              {diferenciais.map((item) => (
                <div
                  key={item.title}
                  className="px-6 py-3 text-center lg:border-l lg:first:border-l-0 lg:border-[#DDD4C3]"
                >
                  <div className="flex justify-center">
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-display text-[1.75rem] text-forest">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[15px] leading-6 text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>

          </div>
        </section>

        {/* INSTAGRAM */}

        <section id="instagram" className="bg-[#FBF9F5] py-20 md:py-24">

          <div className="container-page grid items-center gap-16 lg:grid-cols-12">

            {/* Texto */}

            <div className="lg:col-span-5">

              <Reveal>
                <span className="eyebrow">
                  Instagram
                </span>
              </Reveal>

              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-[clamp(2.3rem,4vw,3.8rem)] text-forest">
                  Acompanhe nosso Instagram
                  <br />
                  {INSTAGRAM_HANDLE}
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-md leading-8 text-muted-foreground">
                  Bastidores da cozinha, ingredientes frescos,
                  novas combinações e tudo o que acontece
                  por aqui durante a semana.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex rounded-full border border-[#D8D1C4] px-8 py-4 font-semibold text-forest transition hover:border-[#556E3C] hover:text-[#556E3C]"
                >
                  Seguir no Instagram
                </a>
              </Reveal>

            </div>

            {/* Feed */}

            <div className="lg:col-span-7">

              <div className="grid grid-cols-3 gap-4">

                {[
                  aboutKitchen,
                  heroSalade,
                  mediterranea,
                  caesar,
                  tropical,
                  mediterranear,
                ].map((img, i) => (

                  <Reveal key={i} delay={i * 60}>

                    <div className="overflow-hidden rounded-3xl">

                      <img
                        src={img}
                        alt="Instagram Maná"
                        className="aspect-square w-full object-cover transition duration-700 hover:scale-110"
                      />

                    </div>

                  </Reveal>

                ))}

              </div>

            </div>

          </div>

        </section>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden bg-[#5D6F3D] py-24">

          <img
            src={oliveBranch}
            alt=""
            aria-hidden="true"
            className="
      absolute
      left-0
      top-0
      h-full
      opacity-20
      pointer-events-none
      select-none
    "
          />

          <div className="container-page relative z-10 text-center">

            <Reveal>
              <h2 className="font-display text-[clamp(2.4rem,4vw,4rem)] text-white">
                Hoje também tem Maná.
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-4 text-xl text-white/90">
                Sua próxima refeição está a um clique de distância.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
          mt-10
          inline-flex
          items-center
          gap-3
          rounded-full
          bg-white
          px-8
          py-4
          font-semibold
          text-[#556E3C]
          transition
          hover:scale-105
        "
              >
                <MessageCircle className="h-5 w-5" />
                Pedir pelo WhatsApp
              </a>
            </Reveal>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="bg-canvas py-12 md:py-14">

          <div className="container-page">

            {/* CONTEÚDO PRINCIPAL */}
            <div className="grid items-start gap-10 text-center md:grid-cols-3 md:gap-8">

              {/* ATENDIMENTO */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-forest">
                  Atendimento
                </h3>

                <div className="mt-4 space-y-3 text-sm text-muted-foreground">

                  <div>
                    <strong className="font-semibold text-forest">
                      Segunda a Sexta
                    </strong>
                    <p>10h às 15h</p>
                  </div>

                  <div>
                    <strong className="font-semibold text-forest">
                      Sábado
                    </strong>
                    <p>10h às 15h</p>
                  </div>

                </div>
              </div>


              {/* LOGO */}
              <div className="flex flex-col items-center">

                <img
                  src={logoMana}
                  alt="Maná Saladas"
                  className="h-20 w-auto object-contain"
                />

                <p className="mt-4 max-w-xs text-sm leading-6 text-muted-foreground">
                  Alimentar também é uma forma de cuidar.
                </p>

                <div className="mt-4 flex items-center justify-center gap-4">

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram da Maná"
                    className="text-muted-foreground transition hover:text-leaf"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp da Maná"
                    className="text-muted-foreground transition hover:text-leaf"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>

                </div>

              </div>

            </div>


            {/* COPYRIGHT */}
            <div className="mt-10 border-t border-border pt-5 text-center text-xs text-muted-foreground">
              © 2026 Maná Saladas. Todos os direitos reservados.
            </div>

          </div>

        </footer>

      </main>

    </div>
  );
}