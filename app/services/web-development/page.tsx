
import Link from "next/link";

const webProjects = [
  {
    title: "Business Website",
    category: "Corporate Web Design",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000&auto=format&fit=crop&q=85",
  },
  {
    title: "E-commerce Platform",
    category: "Online Shopping Experience",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&auto=format&fit=crop&q=85",
  },
  {
    title: "Creative Web Experience",
    category: "Modern Website Design",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1000&auto=format&fit=crop&q=85",
  },
];

const services = [
  "Business Websites",
  "E-commerce Development",
  "Responsive Web Design",
  "Frontend Development",
  "Website Maintenance",
  "Performance Optimization",
];

export default function WebDevelopment() {
  return (
    <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-slate-100 px-6 py-6 dark:border-slate-800 md:px-20">
        <Link href="/" className="text-2xl font-extrabold tracking-wider">
          NOVA<span className="text-blue-600">.</span>
        </Link>

        <Link
          href="/"
          className="font-semibold text-blue-600 hover:text-blue-700"
        >
          ← Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="grid items-center gap-10 px-6 py-16 md:grid-cols-2 md:gap-16 md:px-20 md:py-24">

        <div className="min-w-0">
          <p className="mb-6 text-sm font-bold uppercase tracking-[3px] text-blue-600">
            Our Services / Web Development
          </p>

          <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-5xl">
            Building Digital
            <span className="block break-words text-blue-600">
              Experiences.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300 md:text-lg">
            We develop modern, responsive and high-performance websites
            that help businesses grow and connect with their customers.
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
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop&q=85"
            alt="Web developer working on a modern website"
            className="block h-[280px] w-full object-cover sm:h-[350px] md:h-[420px]"
          />
        </div>

      </section>

      {/* Selected Work */}
      <section className="bg-slate-50 px-6 py-20 dark:bg-slate-900 md:px-20">

        <div className="mb-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-blue-600">
            Our Portfolio
          </p>

          <h2 className="text-3xl font-extrabold md:text-5xl">
            Websites That Make
            <span className="text-blue-600"> An Impact.</span>
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {webProjects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:bg-slate-950"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <p className="mb-2 text-sm font-semibold text-blue-600">
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

      {/* What We Offer */}
      <section className="px-6 py-20 md:px-20">

        <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-blue-600">
          Our Expertise
        </p>

        <h2 className="mb-10 text-3xl font-bold md:text-5xl">
          What We <span className="text-blue-600">Offer.</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
            >
              <p className="mb-6 text-2xl font-bold text-blue-600">
                0{index + 1}
              </p>

              <h3 className="text-xl font-bold">
                {item}
              </h3>
            </div>
          ))}
        </div>

      </section>

      {/* Call to Action */}
      <section className="px-6 py-24 text-center md:px-20">

        <h2 className="text-4xl font-extrabold md:text-6xl">
          Ready to Build Your
          <span className="block text-blue-600">Website?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
          Let's create a powerful digital experience for your business.
        </p>

        <Link
          href="/#contact"
          className="mt-8 inline-block rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
        >
          Contact Us ↗
        </Link>

      </section>

    </main>
  );
}
