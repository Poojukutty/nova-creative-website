
export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[85vh] flex-col justify-center bg-white px-6 py-20 transition-colors duration-300 dark:bg-slate-950 md:px-20"
    >
      <p className="mb-6 text-sm font-bold uppercase tracking-[5px] text-blue-600">
        Creative Digital Agency
      </p>

      <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-slate-950 dark:text-white md:text-8xl">
        We Create
        <br />
        Digital
        <span className="text-blue-600"> Experiences.</span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        We help brands grow through creative design,
        innovative technology and powerful digital experiences.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#portfolio"
          className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
        >
          Explore Our Work ↗
        </a>

        <a
          href="#contact"
          className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:bg-blue-50 dark:border-slate-700 dark:text-white dark:hover:bg-slate-800"
        >
          Contact Us
        </a>
      </div>

      <p className="mt-16 text-sm font-medium tracking-widest text-slate-400 dark:text-slate-500">
        DESIGN · DEVELOPMENT · DIGITAL INNOVATION
      </p>
    </section>
  );
}
