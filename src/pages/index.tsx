// src/pages/index.tsx
import Head from "next/head";
import { motion } from "framer-motion";
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

        {/* Glow background BEHIND particles */}
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(15,23,42,0.9),_black_70%)]" />

        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section
          id="home"
          className="relative mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center"
        >
          {/* Subtle blurred circle behind profile */}
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
            {/* Make sure you have /public/images/profile.jpg */}
            <img
              src="/images/profile.jpg"
              alt="Kostas profile"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-blue-300/80"
          >
            Machine Learning Developer
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
            className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl"
          >
            Hi, I&apos;m <span className="text-blue-400">Kostas</span>
          </motion.h1>

          {/* Intro text */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="max-w-xl text-sm text-gray-300 sm:text-base"
          >
            I&apos;m applying machine learning and developing modern web apps,
            combining Python, deep learning, and clean UI to build tools that
            actually solve problems.
          </motion.p>

          {/* Hero buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
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

        {/* About Section */}
        <section
          id="about"
          className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-4 px-6 py-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-4 text-2xl font-semibold sm:text-3xl"
          >
            About <span className="text-blue-400">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-sm leading-relaxed text-gray-300 sm:text-base"
          >
            I&apos;m currently studying an Applied Machine Learning professional
            degree and learning by building real projects — from YouTube
            sentiment analysis with TensorFlow to full-stack ideas with
            TypeScript and Next.js.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="text-sm leading-relaxed text-gray-300 sm:text-base"
          >
            My goal is to become a developer who can go from a vague idea to a
            working system — designing the model, building the API, and shipping
            a smooth UI that people actually enjoy using.
          </motion.p>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center gap-8 px-6 py-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-semibold sm:text-3xl"
          >
            Selected <span className="text-blue-400">Projects</span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Project 1 – YouTube Sentiment Analyzer */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-md shadow-blue-900/40"
            >
              <h3 className="mb-2 text-lg font-semibold text-blue-300">
                YouTube Sentiment Analyzer
              </h3>
              <p className="mb-3 text-sm text-gray-300">
                A Flask + TensorFlow project that pulls YouTube comments via the
                YouTube Data API and classifies them as positive or negative
                using a trained neural network. I trained an LSTM-based model
                and built a small web UI to paste a comment or analyze a video.
              </p>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
                Tech
              </p>
              <div className="mb-3 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">
                  Python
                </span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">
                  TensorFlow
                </span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">
                  Flask
                </span>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-blue-200">
                  YouTube API
                </span>
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <a
                  href="https://github.com/Costas1992/youtube_sentiment"
                  target="_blank"
                  rel="noreferrer"
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

            {/* Placeholder for upcoming projects */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-xl border border-dashed border-white/15 bg-white/5 p-5 text-sm text-gray-300"
            >
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-100">
                  Next ML project incoming
                </h3>
                <p>
                  I&apos;m currently exploring ideas for my next project —
                  probably something with time series forecasting, a small
                  recommendation system, or an ML API built with FastAPI.
                </p>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                This card will be updated as I ship more things.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center gap-6 px-6 py-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-semibold sm:text-3xl"
          >
            Skills & <span className="text-blue-400">Tools</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
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

        {/* Contact Section */}
        <section
          id="contact"
          className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-6 px-6 py-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-2xl font-semibold sm:text-3xl"
          >
            Let&apos;s <span className="text-blue-400">Connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
            className="text-sm text-gray-300 sm:text-base"
          >
            I&apos;m actively looking for opportunities such as internships,
            junior roles, or collaborative projects in machine learning and
            data-heavy web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col gap-3 text-sm"
          >
            <p>
              Email:{" "}
              <a
                href="mailto:YOUR_EMAIL_HERE"
                className="text-blue-400 underline underline-offset-4"
              >
                YOUR_EMAIL_HERE
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                href="https://github.com/Costas1992"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline underline-offset-4"
              >
                github.com/Costas1992
              </a>
            </p>
            <p>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/YOUR_PROFILE"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 underline underline-offset-4"
              >
                linkedin.com/in/YOUR_PROFILE
              </a>
            </p>
          </motion.div>
        </section>
      </main>
    </>
  );
}