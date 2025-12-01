// src/pages/blog/portfolio-site.tsx

import Head from "next/head";
import Link from "next/link";

export default function PortfolioSiteWriteup() {
  return (
    <>
      <Head>
        <title>Portfolio Website – Project Write-Up</title>
        <meta
          name="description"
          content="Write-up of my personal portfolio site built with Next.js, Tailwind CSS v4, Framer Motion animations, and custom particle effects."
        />
      </Head>

      <main className="min-h-screen bg-black text-gray-200 px-6 py-24 max-w-3xl mx-auto">
        <Link
          href="/#projects"
          className="text-xs text-blue-400 underline underline-offset-4"
        >
          ← Back to Portfolio
        </Link>

        <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-blue-400">
          My Portfolio Website
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Next.js · Tailwind CSS v3 · Framer Motion · Custom Particle System
        </p>

        <section className="mt-8 space-y-5 text-sm leading-relaxed sm:text-base">
          <p>
            This website is the result of me learning modern web development
            while transitioning into machine learning. I wanted a portfolio that
            feels clean, fast, and unique — something that communicates both my
            technical skills and design taste.
          </p>

          <p>
            The site is built using <strong>Next.js</strong> with
            server-side rendering for fast performance and SEO. For styling, I
            upgraded the whole setup to <strong>Tailwind CSS v4</strong>, which
            gives me complete control over design tokens and utilities.
          </p>

          <p>
            One of the signature features is the{" "}
            <strong>custom particle background</strong>. It includes animated
            binary digits and glowing dots that subtly move and scale as the user
            scrolls. I implemented this using <strong>Framer Motion</strong> with
            fully deterministic animations so they work with SSR.
          </p>

          <p>
            I also added smooth scroll-based section reveals, a glassy navbar,
            and a hero section inspired by premium interactive websites such as
            Alchemist. My goal was to create something simple but modern, and to
            build everything myself instead of using templates.
          </p>

          <p>
            The portfolio now acts as a hub for my ML projects, GitHub links,
            and future write-ups. It’s still evolving, but the foundations are
            strong and easy to expand.
          </p>
        </section>

        <div className="mt-10 flex gap-4 text-sm">
          <a
            href="https://github.com/Costas1992/kostas-portfolio-v2"
            target="_blank"
            className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            🔗 View Repository
          </a>

          <Link
            href="/#projects"
            className="text-gray-300 underline underline-offset-4 hover:text-blue-300"
          >
            ← Back to Projects
          </Link>
        </div>
      </main>
    </>
  );
}