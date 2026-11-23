
const projects = [
  {
    title: "Brand Identity Design",
    category: "Branding & Visual Identity",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1000&auto=format&fit=crop&q=85",
  },
  {
    title: "Creative Website Design",
    category: "Web Design & Development",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=85",
  },
  {
    title: "Digital Brand Experience",
    category: "Creative & Digital Design",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000&auto=format&fit=crop&q=85",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-white px-6 py-24 transition-colors duration-300 dark:bg-slate-950 md:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Our Portfolio
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 dark:text-white md:text-5xl">
            Creativity That Builds
            <span className="text-blue-600"> Powerful Brands.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-500 dark:text-slate-300">
            We create meaningful brand identities and digital
            experiences that help businesses stand out.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="relative h-72 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-blue-950/0 transition duration-500 group-hover:bg-blue-950/10" />
              </div>

              <div className="p-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600">
                  {project.category}
                </p>

                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-400">
                  {project.title}
                </h3>

                <div className="mt-5 h-1 w-10 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
