// src/pages/index.tsx
import Head from "next/head";
import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import Navbar from "../components/Navbar";
import Particles from "../components/Particles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kostas | Machine Learning Developer</title>
        <meta
          name="description"
          content="Portfolio of Kostas, a machine learning developer in training working with Python, TensorFlow, and modern web technologies like Next.js."
        />
      </Head>

      <main className="relative z-10 min-h-screen bg-black text-white overflow-x-hidden">
        {/* Animated binary + dot background */}
        <Particles />

        {/* Glow background */}
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_black_70%)]" />

        {/* Navbar */}
        <Navbar />

        {/* HERO SECTION */}
        <HeroSection />

        {/* ABOUT */}
        <AboutSection />

        {/* PROJECTS */}
        <ProjectsSection />

        {/* SKILLS */}
        <SkillsSection />

        {/* CONTACT */}
        <ContactSection />
      </main>
    </>
  );
}

/* -------------------------------------------------
   HERO SECTION
--------------------------------------------------*/
function HeroSection() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center"
    >
      {/* Glowing background circle */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Profile image */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-6 h-32 w-32 overflow-hidden rounded-full border border-blue-400/70 bg-blue-950/40 shadow-[0_0_40px_rgba(59,130,246,0.5)]"
      >
        <img
          src="https://chsbelztyy3vixll.public.blob.vercel-storage.com/profile.jpg"
          alt="Kostas profile"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.85, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/80"
      >
        Machine Learning Developer
      </motion.p>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.7 }}
        className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
      >
        Hi, I&apos;m <span className="text-blue-400">Kostas</span>
      </motion.h1>

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="max-w-xl text-sm text-gray-300 sm:text-base"
      >
        I&apos;m applying machine learning and developing modern web apps,
        combining Python, deep learning, and clean UI to build tools that
        actually solve problems.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="mt-8 flex flex-wrap justify-center gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.5)] transition hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.8)]"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="rounded-full border border-white/20 bg-white/5 px-6 py-2 text-sm font-semibold text-gray-100 transition hover:border-blue-400 hover:bg-blue-500/10"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------
   ABOUT SECTION
--------------------------------------------------*/
function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-4 px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-4 text-2xl font-semibold sm:text-3xl"
      >
        About <span className="text-blue-400">Me</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-sm leading-relaxed text-gray-300 sm:text-base"
      >
        I&apos;m studying an Applied Machine Learning professional degree and
        learning by building real projects — from YouTube sentiment analysis
        with TensorFlow to full-stack ideas with TypeScript and Next.js.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-sm leading-relaxed text-gray-300 sm:text-base"
      >
        My goal is to go from idea → model → API → UI, and ship genuinely useful
        tools.
      </motion.p>
    </section>
  );
}

/* -------------------------------------------------
   PROJECTS SECTION
--------------------------------------------------*/
function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold sm:text-3xl"
      >
        Selected <span className="text-blue-400">Projects</span>
      </motion.h2>

      <div className="grid gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-md shadow-blue-900/40"
        >
          <h3 className="mb-2 text-lg font-semibold text-blue-300">
            YouTube Sentiment Analyzer
          </h3>

          <p className="mb-3 text-sm text-gray-300">
            A Flask + TensorFlow project that pulls YouTube comments via the API
            and classifies them using an LSTM model.
          </p>

          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Tech
          </p>

          <div className="mb-3 flex flex-wrap gap-2 text-xs">
            <Tag>Python</Tag>
            <Tag>TensorFlow</Tag>
            <Tag>Flask</Tag>
            <Tag>YouTube API</Tag>
          </div>

          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://github.com/Costas1992/youtube_sentiment"
              target="_blank"
              className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
            >
              🔗 View on GitHub
            </a>

            <a
              href="/blog/youtube-sentiment"
              className="text-gray-300 underline underline-offset-4 hover:text-blue-300"
            >
              📝 Read project write-up
            </a>
          </div>
        </motion.div>

        {/* Placeholder */}
        {/* Project 2 – Portfolio Website */}
<motion.div
  initial={{ opacity: 0, y: 16 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-md shadow-blue-900/40"
>
  <h3 className="mb-2 text-lg font-semibold text-blue-300">
    Personal Portfolio Website
  </h3>

  <p className="mb-3 text-sm text-gray-300">
    A custom-built portfolio using Next.js, Tailwind CSS v4, Framer Motion, and
    fully deterministic animated particles. Designed to be clean, fast, and visually
    expressive while staying lightweight and developer-friendly.
  </p>

  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
    Tech
  </p>

  <div className="mb-3 flex flex-wrap gap-2 text-xs">
    <Tag>Next.js</Tag>
    <Tag>Tailwind v3</Tag>
    <Tag>Framer Motion</Tag>
    <Tag>Particles</Tag>
  </div>

  <div className="flex flex-wrap gap-4 text-sm">
    <a
      href="https://github.com/Costas1992/kostas-portfolio-v2"
      target="_blank"
      className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
    >
      🔗 View on GitHub
    </a>

    <a
      href="/blog/portfolio-site"
      className="text-gray-300 underline underline-offset-4 hover:text-blue-300"
    >
      📝 Read project write-up
    </a>
  </div>
</motion.div>
      </div>
    </section>
  );
}

function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200 text-xs">
      {children}
    </span>
  );
}

/* -------------------------------------------------
   SKILLS SECTION
--------------------------------------------------*/
function SkillsSection() {
  return (
    <section
      id="skills"
      className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-6 px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold sm:text-3xl"
      >
        Skills & <span className="text-blue-400">Tools</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3 md:grid-cols-4"
      >
        {[
          "Python",
          "Pandas",
          "NumPy",
          "TensorFlow",
          "Scikit-learn",
          "Flask",
          "FastAPI (learning)",
          "TypeScript",
          "React",
          "Next.js",
          "Git & GitHub",
          "Docker (learning)",
        ].map((skill) => (
          <div
            key={skill}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-center text-xs text-gray-200"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </section>
  );
}

/* -------------------------------------------------
   CONTACT SECTION + FORM
--------------------------------------------------*/
function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-8 px-6 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold sm:text-3xl"
      >
        Let&apos;s <span className="text-blue-400">Connect</span>
      </motion.h2>

      <ContactForm />
    </section>
  );
}

/* -------------------------------------------------
   CONTACT FORM COMPONENT
--------------------------------------------------*/
function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message, honeypot }),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setHoneypot("");
    } else {
      setStatus(data.message || "error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 shadow-md"
    >
      {/* Honeypot (hidden) */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        className="hidden"
      />

      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="rounded-md bg-black/20 px-4 py-2 text-sm outline-none border border-white/10 focus:border-blue-400"
      />

      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="rounded-md bg-black/20 px-4 py-2 text-sm outline-none border border-white/10 focus:border-blue-400"
      />

      <textarea
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        rows={5}
        className="rounded-md bg-black/20 px-4 py-2 text-sm outline-none border border-white/10 focus:border-blue-400"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400 transition disabled:opacity-50"
      >
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm">Message sent successfully.</p>
      )}

      {status && status !== "success" && status !== "loading" && (
        <p className="text-red-400 text-sm">{status}</p>
      )}
    </form>
  );
}