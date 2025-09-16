export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="w-full border-b border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Paper Planes, Legos & Everything</span>
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="#work" className="hover:underline">Work</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--brand-1)" }}>
              Paper Planes, Legos & Everything in Between
            </h1>
            <p className="mt-4 text-base md:text-lg" style={{ color: "var(--brand-5)" }}>
              Starting from your mockup and Figma assets, implemented with Next.js + Tailwind.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#work" className="px-4 py-2 rounded-md text-white" style={{ background: "var(--brand-2)" }}>View Work</a>
              <a href="#contact" className="px-4 py-2 rounded-md border" style={{ borderColor: "var(--brand-2)" }}>Contact</a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/hero.png" alt="Hero" className="w-full h-full object-cover rounded-lg border border-black/10 dark:border-white/10" />
          </div>
        </section>

        <section id="work" className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-6">Featured Project A</div>
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-6">Featured Project B</div>
          <div className="rounded-lg border border-black/10 dark:border-white/10 p-6">Featured Project C</div>
        </section>

        <section id="about" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Short bio and mission statement.</p>
        </section>

        <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-black/70 dark:text-white/70">Email and socials go here.</p>
        </section>
      </main>

      <footer className="border-t border-black/10 dark:border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-black/60 dark:text-white/60">
          © {new Date().getFullYear()} Paper Planes, Legos & Everything in Between
        </div>
      </footer>
    </div>
  );
}
