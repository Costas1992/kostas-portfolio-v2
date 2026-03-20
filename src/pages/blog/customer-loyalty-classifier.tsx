// src/pages/blog/customer-loyalty-classifier.tsx

import Head from "next/head";
import Link from "next/link";

export default function CustomerLoyaltyWriteup() {
  return (
    <>
      <Head>
        <title>Customer Loyalty Classifier – Project Write-Up</title>
        <meta
          name="description"
          content="Project write-up for the Customer Loyalty Classifier built with Python, Scikit-learn, FastAPI, and Docker."
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
          Customer Loyalty Classifier
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          MLOps · RFM Analysis · KMeans Clustering · FastAPI · Docker
        </p>

        <section className="mt-8 space-y-5 text-sm leading-relaxed sm:text-base">
          <p>
            This project came from a real problem I faced running my own
            barbershop. Some clients come every three weeks without fail, others
            slowly drift away and never come back. The challenge is knowing
            which clients are slipping before it is too late to act.
          </p>

          <p>
            I used real anonymized visit data from my barbershop — 200 clients
            across 12 months — and built a machine learning system that
            automatically segments every client into one of three categories:
            Loyal, At Risk, or Lost.
          </p>

          <p>
            The model is based on RFM analysis, a classic technique that scores
            customers on Recency (how recently they visited), Frequency (how
            often they come), and Monetary (total visits as a proxy for spend).
            I calculated these three scores for every client using Pandas, then
            used KMeans clustering from Scikit-learn to find natural groupings
            in the data.
          </p>

          <p>
            One key lesson was that KMeans measures distance between points, so
            features need to be on the same scale. Without StandardScaler, a
            feature like total visits would dominate recency just because the
            numbers are larger. Scaling the features first made the clusters
            meaningful.
          </p>

          <p>
            The trained model is served through a FastAPI backend with a
            /predict endpoint and a /customers endpoint that returns the full
            segmented dataset. I built a clean HTML and CSS frontend dashboard
            that displays live stats and lets you classify new customers by
            entering their monthly visit data.
          </p>

          <p>
            The app is fully containerized with Docker and deployed to
            HuggingFace Spaces. I also set up a CI/CD pipeline with GitHub
            Actions that runs automated tests on every push, which was my first
            time building a real deployment pipeline from scratch.
          </p>

          <p>
            This project taught me how to take an ML model all the way from raw
            data to a live production app — and how to frame a technical
            solution around a real business problem I actually understood.
          </p>
        </section>

        <div className="mt-10 flex gap-4 text-sm">
          <a
            href="https://github.com/Costas1992/customer-loyalty-classifier"
            target="_blank"
            className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            🔗 View on GitHub
          </a>

          <a
            href="https://costas92-customer-loyalty-classifier.hf.space"
            target="_blank"
            className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            🚀 Live Demo
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