// src/pages/blog/youtube-sentiment.tsx

import Head from "next/head";
import Link from "next/link";

export default function YoutubeSentimentWriteup() {
  return (
    <>
      <Head>
        <title>YouTube Sentiment Analyzer – Project Write-Up</title>
        <meta
          name="description"
          content="Project write-up for the YouTube Sentiment Analyzer built with Python, TensorFlow, Flask, and the YouTube API."
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
          YouTube Sentiment Analyzer
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Machine Learning · LSTM Model · TensorFlow · Flask API
        </p>

        <section className="mt-8 space-y-5 text-sm leading-relaxed sm:text-base">
          <p>
            This project analyzes YouTube comments and classifies them as
            positive or negative using a TensorFlow deep learning model. I built
            a dataset of real YouTube comments, cleaned and tokenized the text,
            and trained an LSTM-based neural network.
          </p>

          <p>
            The backend is built using Flask. It exposes a simple API endpoint
            where you can paste a comment or submit a YouTube video URL. The
            app fetches the comments through the YouTube Data API, processes
            them, and returns sentiment predictions.
          </p>

          <p>
            The project helped me understand data preprocessing, sequence
            models, embeddings, and deploying ML models in lightweight APIs.
          </p>

          <p>
            This is one of my first ML projects and it taught me how to connect
            ML models with real applications people can use.
          </p>
        </section>

        <div className="mt-10 flex gap-4 text-sm">
          <a
            href="https://github.com/Costas1992/youtube_sentiment"
            target="_blank"
            className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
          >
            🔗 View on GitHub
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