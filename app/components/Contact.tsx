
"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="bg-slate-50 px-6 py-24 md:px-20"
    >
      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Get In Touch
      </p>

      <h2 className="mt-4 mb-6 text-4xl font-extrabold text-slate-950 md:text-6xl">
        Let's Work Together<span className="text-blue-600">.</span>
      </h2>

      <p className="mb-12 max-w-xl text-slate-600">
        Have a project in mind? Tell us about it.
        We would love to hear from you.
      </p>

      <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
        <div>
          <label className="mb-2 block font-semibold text-slate-800">
            Your Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-800">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-blue-600"
          />
        </div>

        <div>
          <label className="mb-2 block font-semibold text-slate-800">
            Your Message
          </label>
          <textarea
            placeholder="Tell us about your project..."
            rows={5}
            required
            className="w-full rounded-xl border border-slate-200 bg-white p-4 text-slate-900 outline-none focus:border-blue-600"
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
        >
          Send Message ↗
        </button>

        {submitted && (
          <p className="text-green-700">
            Thank you! Your form was submitted successfully.
          </p>
        )}
      </form>
    </section>
  );
}
