
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />

      <footer className="bg-slate-950 px-6 py-12 text-white">
  <div className="mx-auto max-w-7xl">
    <div className="flex flex-col justify-between gap-8 md:flex-row">
      <div>
        <h2 className="text-3xl font-bold">
          NOVA<span className="text-blue-500">.</span>
        </h2>
        <p className="mt-3 max-w-sm text-sm leading-7 text-slate-400">
          Building meaningful brands through creative design
          and digital experiences.
        </p>
      </div>

      <div>
        <h3 className="mb-4 font-semibold">Quick Links</h3>
        <div className="flex flex-col gap-3 text-sm text-slate-400">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>

    <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
      © 2026 NOVA CREATIVE. All rights reserved.
    </div>
  </div>
</footer>
    </main>
  );
}
