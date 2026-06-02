"use server"

import nodemailer from "nodemailer"

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message: string
}

function buildEmailHtml(name: string, email: string, message: string): string {
  const submittedAt = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  })

  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br>")

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>New Contact Request — Metro Coolaire</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background-color:#f4f4f5;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:560px;background:#ffffff;border-radius:10px;overflow:hidden;
                      box-shadow:0 1px 4px rgba(0,0,0,0.08),0 4px 16px rgba(0,0,0,0.04);">

          <!-- Brand header -->
          <tr>
            <td style="background-color:#0675ca;padding:24px 32px;">
              <p style="margin:0;font-size:19px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;">
                Metro Coolaire
              </p>
              <p style="margin:4px 0 0;font-size:12px;color:#cce8f8;font-style:italic;">
                Your air is our care.
              </p>
            </td>
          </tr>

          <!-- Main content -->
          <tr>
            <td style="padding:32px 32px 24px;">

              <h1 style="margin:0 0 4px;font-size:22px;font-weight:700;color:#09090b;letter-spacing:-0.4px;line-height:1.3;">
                New contact request
              </h1>
              <p style="margin:0 0 28px;font-size:13px;color:#71717a;">
                ${submittedAt}
              </p>

              <!-- Sender card -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                     style="background:#f9f9f9;border:1px solid #e4e4e7;border-radius:8px;margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;">
                    <p style="margin:0 0 10px;font-size:11px;font-weight:600;
                               text-transform:uppercase;letter-spacing:0.9px;color:#a1a1aa;">
                      Sender
                    </p>
                    <p style="margin:0 0 2px;font-size:16px;font-weight:600;color:#09090b;">
                      ${name}
                    </p>
                    <a href="mailto:${email}"
                       style="font-size:14px;color:#2563eb;text-decoration:none;">
                      ${email}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 10px;font-size:11px;font-weight:600;
                         text-transform:uppercase;letter-spacing:0.9px;color:#a1a1aa;">
                Message
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                     style="border-left:3px solid #e4e4e7;margin-bottom:28px;">
                <tr>
                  <td style="padding:4px 0 4px 18px;">
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#18181b;">
                      ${escapedMessage}
                    </p>
                  </td>
                </tr>
              </table>

              <!-- Reply CTA -->
              <a href="mailto:${email}?subject=Re%3A%20Your%20enquiry"
                 style="display:inline-block;background:#0675ca;color:#ffffff;
                        padding:11px 22px;border-radius:7px;font-size:14px;
                        font-weight:600;text-decoration:none;letter-spacing:-0.1px;">
                Reply to ${name} &rarr;
              </a>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="border-top:1px solid #f0f0f0;padding:20px 32px;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;line-height:1.6;">
                Submitted via Metro Coolaire's website contact form.
                You are receiving this because you are listed as a contact recipient.<br><br>
                <strong style="color:#71717a;">Metro Coolaire</strong> &mdash;
                Block 2 Lot 2 Westfield Subd., Iponan, Cagayan de Oro, 9000<br>
                &#128222; 0969 078 1466 &nbsp;&middot;&nbsp;
                <a href="https://www.facebook.com/metrocoolaire"
                   style="color:#2563eb;text-decoration:none;">facebook.com/metrocoolaire</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim()
  const email = formData.get("email")?.toString().trim()
  const message = formData.get("message")?.toString().trim()

  if (!name || !email || !message) {
    return { status: "error", message: "All fields are required." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  const destinationEmail = process.env.DESTINATION_EMAIL
  if (!destinationEmail) {
    console.error("DESTINATION_EMAIL is not set in environment variables.")
    return { status: "error", message: "Server configuration error. Please try again later." }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Metro Coolaire Website" <${process.env.SMTP_USER}>`,
      replyTo: `"${name}" <${email}>`,
      to: destinationEmail,
      subject: `New contact request from ${name}`,
      text: [
        `New contact request — Metro Coolaire`,
        ``,
        `From:    ${name}`,
        `Email:   ${email}`,
        ``,
        `Message`,
        `-------`,
        message,
      ].join("\n"),
      html: buildEmailHtml(name, email, message),
    })

    return { status: "success", message: "Message sent! We'll be in touch soon." }
  } catch (err) {
    console.error("Failed to send contact email:", err)
    return { status: "error", message: "Failed to send your message. Please try again." }
  }
}
