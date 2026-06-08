import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "PEMBRIDGE TALENT <info@pembridgetalent.com>",
      to: process.env.CONTACT_EMAIL!,
      subject: "New Inquiry - PEMBRIDGE TALENT",
      html: `
        <h2>New Inquiry</h2>

        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Department:</strong> ${body.department}</p>

        <p><strong>Message:</strong></p>

        <p>${body.message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json({
      success: false,
    });
  }
}