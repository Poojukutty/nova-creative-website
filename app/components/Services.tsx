
const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description: "We create beautiful and user-friendly digital experiences that connect brands with people.",
    icon: "✦",
  },
  {
    number: "02",
    title: "Web Development",
    description: "We build modern, responsive and high-performance websites using the latest technologies.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Branding",
    description: "We build unique brand identities that help businesses stand out from the competition.",
    icon: "◈",
  },
  {
    number: "04",
    title: "Digital Marketing",
    description: "We help brands grow their online presence through creative digital strategies.",
    icon: "↗",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 px-6 py-24 md:px-20"
    >
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        What We Do
      </p>

      <h2 className="mt-4 mb-14 text-4xl font-extrabold text-slate-950 md:text-6xl">
        Our Services<span className="text-blue-600">.</span>
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.number}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl"
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-3xl text-blue-600">
                {service.icon}
              </span>
              <span className="text-sm font-semibold text-slate-400">
                {service.number}
              </span>
            </div>

            <h3 className="mb-4 text-2xl font-bold text-slate-950">
              {service.title}
            </h3>

            <p className="leading-relaxed text-slate-600">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
