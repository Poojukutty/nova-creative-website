
import Link from "next/link";

const designProjects = [
  {
    title: "Mobile App Design",
    category: "UI DESIGN",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1000&auto=format&fit=crop&q=85",
  },
  {
    title: "Website Experience",
    category: "WEB DESIGN",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=85",
  },
  {
    title: "Creative Brand Design",
    category: "VISUAL DESIGN",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1000&auto=format&fit=crop&q=85",
  },
];

export default function UIUXDesign() {
  return (
    <main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">

      <nav className="flex items-center justify-between border-b border-slate-100 px-6 py-6 dark:border-slate-800 md:px-20">
        <Link href="/" className="text-2xl font-extrabold tracking-wider">
          NOVA<span className="text-blue-600">.</span>
        </Link>

        <Link href="/" className="font-semibold text-blue-600 hover:text-blue-700">
          ← Back to Home
        </Link>
      </nav>

     
{/* Hero Section */}
<section className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-20 md:py-24">

  <div className="min-w-0">
    <p className="mb-6 text-sm font-bold uppercase tracking-[3px] text-blue-600">
      Our Services / UI/UX Design
    </p>

    <h1 className="min-w-0 text-4xl font-extrabold leading-tight md:text-5xl lg:text-5xl">
  Designing Digital
  <span className="block break-words text-blue-600">
    Experiences.
  </span>
</h1>

    <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
      We design intuitive, beautiful and user-friendly digital
      experiences that make every interaction meaningful.
    </p>

    <Link
      href="/#contact"
      className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
    >
      Start Your Project ↗
    </Link>
  </div>

  <div className="w-full min-w-0 overflow-hidden rounded-3xl shadow-xl">
    <img
      src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&auto=format&fit=crop&q=85"
      alt="Creative UI and UX design workspace"
      className="block h-[280px] w-full object-cover sm:h-[350px] md:h-[420px]"
    />
  </div>

</section>

      {/* Design Showcase */}
      <section className="bg-slate-50 px-6 py-24 dark:bg-slate-900 md:px-20">

        <div className="mb-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-blue-600">
            Selected Work
          </p>

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Design That Makes
            <span className="text-blue-600"> An Impact.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-slate-600 dark:text-slate-300">
            From mobile applications to modern websites, we create
            digital experiences with purpose and creativity.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {designProjects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <p className="mb-3 text-xs font-bold tracking-widest text-blue-600">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Services */}
      <section className="px-6 py-24 md:px-20">

        <h2 className="mb-10 text-3xl font-bold md:text-5xl">
          What We <span className="text-blue-600">Offer.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            "User Research",
            "Wireframing & Prototyping",
            "Website & App Design",
            "Responsive Design",
            "Visual Design",
            "User Experience Strategy",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="mb-6 text-2xl font-bold text-blue-600">
                0{index + 1}
              </p>

              <h3 className="text-xl font-bold">{item}</h3>
            </div>
          ))}
        </div>

      </section>

      {/* Contact CTA */}
      <section className="bg-slate-50 px-6 py-24 text-center dark:bg-slate-900 md:px-20">

        <h2 className="text-4xl font-extrabold md:text-6xl">
          Let's Create Something
          <span className="text-blue-600"> Amazing.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-slate-600 dark:text-slate-300">
          Have an idea? Let's transform it into a beautiful digital experience.
        </p>

        <Link
          href="/#contact"
          className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"
        >
          Contact Us ↗
        </Link>

      </section>

    </main>
  );
}
