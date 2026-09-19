import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function stripNewlines(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const cleanName = stripNewlines(name);
  const cleanEmail = stripNewlines(email);
  const cleanPhone = typeof phone === "string" ? stripNewlines(phone) : "";

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${cleanName}" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: cleanEmail,
      subject: `Portfolio contact from ${cleanName}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Phone: ${cleanPhone || "—"}`,
        "",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
