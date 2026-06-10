import { Resend } from 'resend';

const TO_EMAIL = 'courtney@maverickchiropracticcare.com';
const FROM_EMAIL = 'Maverick Chiropractic <no-reply@maverickchiropracticcare.com>';

export async function POST(request: Request) {
  const body = await request.json();
  const { firstName, lastName, email, phone, subject, message } = body;

  if (!firstName || !lastName || !email || !subject || !message) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const subjectLabels: Record<string, string> = {
    'general': 'General Inquiry',
    'new-patient': 'New Patient',
    'existing-patient': 'Existing Patient',
    'other': 'Other',
  };

  const subjectLine = `New Contact: ${subjectLabels[subject] || subject} — ${firstName} ${lastName}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject: subjectLine,
      text: [
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : null,
        `Subject: ${subjectLabels[subject] || subject}`,
        '',
        'Message:',
        message,
      ].filter(Boolean).join('\n'),
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return Response.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
