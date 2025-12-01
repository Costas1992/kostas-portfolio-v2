// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data =
  | { ok: true }
  | { ok: false; error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ ok: false, error: "Missing name, email, or message" });
  }

  // Read environment variables from Vercel / .env.local
  const {
    SMTP_USER,
    SMTP_PASS,
    SMTP_HOST,
    SMTP_PORT,
    CONTACT_TO,
  } = process.env;

  if (!SMTP_USER || !SMTP_PASS || !SMTP_HOST || !SMTP_PORT || !CONTACT_TO) {
    console.error("Missing SMTP or CONTACT env vars");
    return res
      .status(500)
      .json({ ok: false, error: "Email service is not configured." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const mailOptions = {
      from: SMTP_USER, // must be your authenticated Gmail
      to: CONTACT_TO,  // where you want to receive messages
      subject: `New portfolio message from ${name}`,
      text: `
From: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
        <h2>New portfolio contact</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error sending email:", err);
    return res
      .status(500)
      .json({ ok: false, error: "Failed to send email. Please try again." });
  }
}