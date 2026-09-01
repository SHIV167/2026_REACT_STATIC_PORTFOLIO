import nodemailer from "nodemailer";

const clean = (value = "") => String(value).trim().replace(/[<>]/g, "");
const validEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ message: "Method not allowed." });
  }

  const name = clean(req.body?.name);
  const email = clean(req.body?.email);
  const subject = clean(req.body?.subject || "Portfolio enquiry");
  const message = clean(req.body?.message);

  if (name.length < 2 || !validEmail(email) || message.length < 20) {
    return res.status(400).json({ message: "Please provide a valid name, email, and a message of at least 20 characters." });
  }

  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  if (required.some((key) => !process.env[key])) {
    return res.status(503).json({ message: "Email service is not configured. Please email jhashiv5@gmail.com directly." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: String(process.env.SMTP_SECURE) === "true",
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.MAIL_TO || process.env.SUPPORT_EMAIL || "jhashiv5@gmail.com",
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<h2>New portfolio enquiry</h2><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return res.status(200).json({ message: `Thank you, ${name}! Your message has been sent. I'll get back to you soon.` });
  } catch (error) {
    console.error("Contact email failed:", error.message);
    return res.status(500).json({ message: "Your message could not be sent right now. Please try again shortly." });
  }
}
