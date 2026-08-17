import Logo from "./Logo";

const CTA_HREF =
  "mailto:contato@msinteligencia.com?subject=Solicitar%20diagn%C3%B3stico%20%E2%80%94%20MS%20Intelig%C3%AAncia";

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full px-6 md:px-8 ${className}`} style={{ maxWidth: "var(--maxw)" }}>
      {children}
    </div>
  );
}

function PrimaryCTA({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={CTA_HREF}
      className={`group inline-flex items-center gap-2 rounded-full px-6 h-[46px] text-[13px] font-medium text-white transition-colors ${className}`}
      style={{ background: "var(--signal)", fontFamily: "var(--font-body)" }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--signal-hover)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--signal)")}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
    </a>
  );
}

/* Visual controlado: representa a conexão de fontes dispersas numa única visão.
   Sem dashboard, sem métricas inventadas — apenas o conceito. */
function ConnectionVisual() {
  const sources = ["ERP", "PDV", "ADQUIRENTE", "BANCO", "PIX"];
  return (
    <div
      className="relative w-full rounded-[16px] border bg-white p-6 md:p-8"
      style={{ borderColor: "var(--line)" }}
    >
      <div className="eyebrow mb-6">Fontes dispersas → visão única</div>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
        {/* sources */}
        <div className="space-y-2.5">
          {sources.map((s) => (
            <div
              key={s}
              className="flex items-center gap-2.5 rounded-full border px-4 h-10 font-mono text-[11px] tracking-widest"
              style={{ borderColor: "var(--line)", background: "var(--paper)", color: "var(--n-700)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--n-400)" }} />
              {s}
            </div>
          ))}
        </div>

        {/* connector */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-px h-16 md:h-20" style={{ background: "var(--line)" }} />
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white"
            style={{ background: "var(--ink)" }}
            aria-hidden="true"
          >
            <Logo variant="light" showWordmark={false} className="scale-[0.42] -ml-1" />
          </div>
          <div className="w-px h-16 md:h-20" style={{ background: "var(--line)" }} />
        </div>

        {/* unified output */}
        <div className="space-y-2.5">
          <div
            className="rounded-[12px] p-4"
            style={{ background: "var(--g-100)", border: "1px solid var(--g-200)" }}
          >
            <div className="eyebrow" style={{ color: "var(--g-800)" }}>
              Sinal
            </div>
            <div className="font-display font-bold text-[15px] mt-1" style={{ color: "var(--ink)" }}>
              Divergência identificada
            </div>
          </div>
          <div
            className="rounded-[12px] p-4"
            style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
          >
            <div className="eyebrow">Ação</div>
            <div className="font-display font-bold text-[15px] mt-1">Revisar taxa contratada</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div>
      {/* ================= HEADER ================= */}
      <header
        className="sticky top-0 z-30 border-b backdrop-blur"
        style={{ borderColor: "var(--line)", background: "rgba(244,244,241,0.82)" }}
      >
        <Container className="h-16 flex items-center justify-between">
          <a href="#top" aria-label="Início">
            <Logo />
          </a>
          <PrimaryCTA className="hidden sm:inline-flex">Solicitar diagnóstico</PrimaryCTA>
        </Container>
      </header>

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="pt-16 md:pt-24 pb-16 md:pb-24">
          <Container>
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
              <div>
                <div className="eyebrow">Camada de inteligência operacional</div>
                <h1 className="mt-5 font-display font-[800] text-[38px] leading-[1.02] sm:text-[52px] lg:text-[58px]">
                  Você não precisa de mais dados. Precisa enxergar o que eles dizem.
                </h1>
                <p
                  className="mt-6 text-[17px] leading-[1.55] max-w-[46ch]"
                  style={{ color: "var(--n-700)" }}
                >
                  A MS Inteligência conecta os sistemas da sua operação e transforma dados dispersos
                  em problemas visíveis e decisões claras.
                </p>
                <div className="mt-9">
                  <PrimaryCTA className="h-[50px] px-7 text-[14px]">Solicitar diagnóstico</PrimaryCTA>
                </div>
              </div>

              <div className="relative">
                <ConnectionVisual />
              </div>
            </div>
          </Container>
        </section>

        {/* ================= PROBLEMA ================= */}
        <section className="py-20 md:py-28" style={{ background: "var(--ink)", color: "var(--paper)" }}>
          <Container>
            <div className="max-w-[24ch]">
              <div className="eyebrow" style={{ color: "var(--n-500)" }}>
                O problema
              </div>
            </div>
            <h2 className="mt-6 font-display font-[800] text-[30px] sm:text-[42px] lg:text-[48px] leading-[1.03] max-w-[18ch]">
              Cada sistema mostra uma parte. Nenhum mostra o todo.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.6] max-w-[52ch]" style={{ color: "var(--n-500)" }}>
              ERP, PDV, adquirentes e bancos produzem dados o dia inteiro. Isolados, eles escondem
              divergências, perdas e oportunidades que ninguém está olhando.
            </p>
          </Container>
        </section>

        {/* ================= PROPOSTA DE VALOR ================= */}
        <section className="py-20 md:py-28">
          <Container>
            <div className="eyebrow">O que muda</div>
            <h2 className="mt-5 font-display font-[800] text-[28px] sm:text-[38px] leading-[1.05] max-w-[20ch]">
              Você passa a enxergar o que antes precisava procurar.
            </h2>

            <div className="mt-14 grid md:grid-cols-3 gap-x-10 gap-y-12">
              {[
                {
                  n: "01",
                  title: "Conecta",
                  desc: "Reúne informações de vendas, pagamentos e gestão em uma única visão da operação.",
                },
                {
                  n: "02",
                  title: "Identifica",
                  desc: "Cruza os dados e aponta divergências, perdas e oportunidades automaticamente.",
                },
                {
                  n: "03",
                  title: "Direciona",
                  desc: "Transforma cada sinal em prioridade e ação, com acompanhamento do resultado.",
                },
              ].map((item) => (
                <div key={item.n} className="border-t pt-6" style={{ borderColor: "var(--line)" }}>
                  <div className="font-mono text-[12px]" style={{ color: "var(--signal)" }}>
                    {item.n}
                  </div>
                  <h3 className="mt-4 font-display font-bold text-[22px]">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.6]" style={{ color: "var(--n-700)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ================= CTA FINAL ================= */}
        <section className="pb-24">
          <Container>
            <div
              className="rounded-[20px] border px-8 py-14 md:px-14 md:py-20 text-center"
              style={{ borderColor: "var(--line)", background: "var(--white)" }}
            >
              <div className="eyebrow">Próximo passo</div>
              <h2 className="mt-5 font-display font-[800] text-[30px] sm:text-[44px] leading-[1.03] max-w-[20ch] mx-auto">
                Descubra o que sua operação não está enxergando.
              </h2>
              <p
                className="mt-5 text-[16px] leading-[1.6] max-w-[46ch] mx-auto"
                style={{ color: "var(--n-700)" }}
              >
                Um diagnóstico inicial para mapear onde sua operação perde visibilidade.
              </p>
              <div className="mt-9 flex justify-center">
                <PrimaryCTA className="h-[52px] px-8 text-[14px]">Solicitar diagnóstico</PrimaryCTA>
              </div>
            </div>
          </Container>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t py-10" style={{ borderColor: "var(--line)" }}>
        <Container className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <Logo />
          <div className="flex flex-col sm:items-end gap-1">
            <a
              href={CTA_HREF}
              className="text-[14px]"
              style={{ color: "var(--n-700)" }}
            >
              contato@msinteligencia.com
            </a>
            <span className="font-mono text-[11px]" style={{ color: "var(--n-500)" }}>
              © 2026 MS Inteligência
            </span>
          </div>
        </Container>
      </footer>
    </div>
  );
}
