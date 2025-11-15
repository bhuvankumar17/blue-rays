import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  let contactId = null;
  
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide name, email, and message' },
        { status: 400 }
      );
    }

    // Try to save to database, but don't fail if it doesn't work
    try {
      await dbConnect();
      const contact = await Contact.create({
        name,
        email,
        phone,
        message,
        status: 'new',
      });
      contactId = contact._id;
    } catch (dbError) {
      console.error('Database error (continuing anyway):', dbError);
      // Continue to send email even if DB fails
    }

    // Send email notification (this is the critical part)
    try {
      const emailResult = await resend.emails.send({
        from: 'Blue Rays Solar <onboarding@resend.dev>',
        to: 'blueraysdata@gmail.com',
        replyTo: email,
        subject: `🔔 New Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e40af;">🌟 New Contact Form Submission</h2>
            <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            </div>
            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="background-color: #f9fafb; padding: 15px; border-left: 4px solid #06b6d4; border-radius: 4px; white-space: pre-wrap;">
                ${message}
              </p>
            </div>
            <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
            <p style="color: #6b7280; font-size: 12px;">
              This email was sent from your Blue Rays Solar contact form at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            </p>
          </div>
        `,
      });
      
      console.log('✅ Email sent successfully!', emailResult);
      console.log('📬 Sent to: blueraysdata@gmail.com');
    } catch (emailError: any) {
      console.error('❌ Email sending error:', emailError);
      console.error('Error details:', emailError.message);
      // If email also fails, this is a critical error
      throw new Error(`Failed to send notification email: ${emailError.message}`);
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contactId,
        name: name,
        email: email,
      },
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit contact form. Please try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '50');

    const query = status ? { status } : {};
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .limit(limit);

    return NextResponse.json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error: any) {
    console.error('Fetch contacts error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to fetch contacts',
      },
      { status: 500 }
    );
  }
}
