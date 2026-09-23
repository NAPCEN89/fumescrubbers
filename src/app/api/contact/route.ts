import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, product, category } = await req.json();

    // 1. Validate Input
    if (!name || !email) {
      return NextResponse.json({ error: "Name and Email are required" }, { status: 400 });
    }

    // 2. Configure Transporter (Use Gmail, Outlook, or SMTP)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use an "App Password" for Gmail
      },
    });

    // 3. Email Content for Sales Team
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'sales@napcen.com', // Your sales team email
      subject: `New Brochure Request: ${product}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #00E5FF;">
          <h2 style="color: #006064;">Industrial Lead: Brochure Request</h2>
          <p><strong>Customer Name:</strong> ${name}</p>
          <p><strong>Business Email:</strong> ${email}</p>
          <hr />
          <p><strong>Interested In:</strong> ${product}</p>
          <p><strong>Category:</strong> ${category}</p>
          <p style="font-size: 12px; color: #666;">This request was sent from the Napcen Product Catalog.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Request sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ error: "Failed to send request" }, { status: 500 });
  }
}