import Head from "next/head";
import Link from "next/link";

export default function SecureExpenseApiWriteup() {
  return (
    <>
      <Head>
        <title>Secure Expense API – Project Write-Up</title>
        <meta
          name="description"
          content="Write-up of my Secure Expense API project built with FastAPI, JWT authentication, PostgreSQL, SQLAlchemy, Alembic, and Docker."
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
          Secure Expense API
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Python · FastAPI · JWT · PostgreSQL · SQLAlchemy · Alembic · Docker
        </p>

        <section className="mt-8 space-y-5 text-sm leading-relaxed sm:text-base">
          <p>
            Secure Expense API is a backend portfolio project I built to practice
            real-world API development with a strong focus on security,
            authentication, and clean project structure.
          </p>

          <p>
            The project was developed using <strong>FastAPI</strong> and{" "}
            <strong>Python</strong>, with <strong>PostgreSQL</strong> as the
            database and <strong>SQLAlchemy</strong> for ORM-based database
            interaction. I also used <strong>Alembic</strong> to manage database
            migrations and <strong>Docker</strong> to support a cleaner local
            development setup.
          </p>

          <p>
            One of the main goals of this project was to understand how secure
            authentication works in backend systems. I implemented{" "}
            <strong>JWT-based authentication</strong>, password hashing, and
            protected routes so that user data and expense records can be managed
            more safely.
          </p>

          <p>
            This project goes beyond basic CRUD functionality. It helped me learn
            how to structure a backend application properly, separate concerns
            across files and folders, and build something that feels closer to a
            production-style API rather than a simple tutorial project.
          </p>

          <p>
            Through this project, I improved my understanding of API design,
            authentication flows, data validation, database migrations, and
            backend architecture. It is an important step in my journey toward
            becoming a machine learning and software developer who can build
            practical and secure systems.
          </p>

          <p>
            In the future, I would like to expand this project with automated
            testing, deployment, role-based permissions, and possibly a frontend
            client for a complete full-stack expense tracking solution.
          </p>
        </section>

        <div className="mt-10 flex gap-4 text-sm flex-wrap">
          <a
            href="https://github.com/Costas1992/secure-expense-api"
            target="_blank"
            rel="noreferrer"
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