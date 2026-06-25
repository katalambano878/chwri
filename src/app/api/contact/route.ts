import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  organisation?: string;
  subject?: string;
  message?: string;
  // Honeypot field — should always be empty for real users.
  company?: string;
};

const SUBJECT_LABELS: Record<string, string> = {
  partnership: "Partnership Inquiry",
  research: "Research Collaboration",
  volunteer: "Volunteering",
  media: "Media Inquiry",
  general: "General Inquiry",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email service is not configured. Please try again later." },
      { status: 500 }
    );
  }

  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept bot submissions without sending.
  if (data.company && data.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const firstName = data.firstName?.trim() ?? "";
  const lastName = data.lastName?.trim() ?? "";
  const email = data.email?.trim() ?? "";
  const organisation = data.organisation?.trim() ?? "";
  const subjectKey = data.subject?.trim() ?? "";
  const message = data.message?.trim() ?? "";

  if (!firstName || !email || !message) {
    return NextResponse.json(
      { error: "Please provide your name, email, and a message." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const toEmail = process.env.CONTACT_TO_EMAIL || "contact@chwri.org";
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "CHWRI Website <onboarding@resend.dev>";

  const subjectLabel = SUBJECT_LABELS[subjectKey] || "General Inquiry";
  const fullName = `${firstName} ${lastName}`.trim();

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `New website enquiry: ${subjectLabel} — ${fullName}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New contact form submission</h2>
          <table style="border-collapse: collapse; width: 100%; max-width: 560px;">
            <tr><td style="padding: 6px 12px 6px 0; color: #64748b;">Name</td><td style="padding: 6px 0;">${escapeHtml(fullName)}</td></tr>
            <tr><td style="padding: 6px 12px 6px 0; color: #64748b;">Email</td><td style="padding: 6px 0;">${escapeHtml(email)}</td></tr>
            ${organisation ? `<tr><td style="padding: 6px 12px 6px 0; color: #64748b;">Organisation</td><td style="padding: 6px 0;">${escapeHtml(organisation)}</td></tr>` : ""}
            <tr><td style="padding: 6px 12px 6px 0; color: #64748b;">Topic</td><td style="padding: 6px 0;">${escapeHtml(subjectLabel)}</td></tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
            <p style="margin: 0 0 8px; color: #64748b; font-size: 13px;">Message</p>
            <p style="margin: 0; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
      `,
      text: `New contact form submission

Name: ${fullName}
Email: ${email}${organisation ? `\nOrganisation: ${organisation}` : ""}
Topic: ${subjectLabel}

Message:
${message}`,
    });

    if (error) {
      console.error("Contact form: Resend error", error);
      return NextResponse.json(
        { error: "We couldn't send your message. Please try again later." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: unexpected error", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
