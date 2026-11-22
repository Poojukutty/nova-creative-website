
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b border-slate-100 bg-white/95 px-6 py-5 shadow-sm backdrop-blur-md md:px-16">
      <h1 className="text-2xl font-extrabold tracking-wider text-slate-950">
        NOVA<span className="text-blue-600">.</span>
      </h1>

      <div className="hidden items-center gap-9 text-sm font-medium text-slate-700 md:flex">
        <a href="#home" className="hover:text-blue-600">Home</a>
        <a href="#services" className="hover:text-blue-600">Services</a>
        <a href="#portfolio" className="hover:text-blue-600">Portfolio</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>

      <a
        href="#contact"
        className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        Let's Talk ↗
      </a>
    </nav>
  );
}
