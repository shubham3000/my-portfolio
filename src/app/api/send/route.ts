import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import EmailTemplate from '@/Components/EmailTeamplate/emailTemplate'; 

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'My-Portfolio <onboarding@resend.dev>',
      to: 'santysadhu02@gmail.com',
      subject: `New contact form submission from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
