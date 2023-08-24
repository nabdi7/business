import { NextResponse } from "next/server"
import { Resend } from "resend";
import { QualityDesignsEmail } from "../../emails/welcome";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const userFirstname = "Zeno"; // Set the user's first name here
  await resend.sendEmail({
    from: 'onboarding@resend.dev',
    to: 'abdinajka@gmail.com',
    subject: 'hello world',
    react: QualityDesignsEmail({ userFirstname }), // Pass the userFirstname argument here
  });

  return NextResponse.json({
    status: 'OK'
  });
}
