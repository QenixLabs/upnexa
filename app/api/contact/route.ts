import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await request.json()
    const { name, email, company, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "UPNexa Contact Form <noreply@upnexa.com>",
      to: ["info@upnexa.com"],
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #0F2557 0%, #1E3A7B 100%); color: white; padding: 30px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; border-radius: 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #0F2557; margin-bottom: 5px; }
              .value { background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #B8860B; }
              .message { background: white; padding: 15px; border-radius: 4px; border-left: 3px solid #B8860B; white-space: pre-wrap; }
              .footer { text-align: center; margin-top: 30px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${escapeHtml(name)}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value">
                    <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>
                  </div>
                </div>
                ${company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${escapeHtml(company)}</div>
                </div>
                ` : ""}
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message">${escapeHtml(message)}</div>
                </div>
              </div>
              <div class="footer">
                <p>This email was sent from the UPNexa contact form</p>
                <p>${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      data,
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

// Helper function to escape HTML and prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}
