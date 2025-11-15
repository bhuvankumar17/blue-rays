import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    await dbConnect();

    const body = await request.json();
    const { email, phone, message } = body;

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please provide email and message' },
        { status: 400 }
      );
    }

    // Create new contact
    const contact = await Contact.create({
      email,
      phone,
      message,
      status: 'new',
    });

    // Send email notification
    try {
      await resend.emails.send({
        from: 'Blue Rays Solar <onboarding@resend.dev>',
        to: process.env.NOTIFICATION_EMAIL || 'blueraysenergy@gmail.com',
        subject: '🌞 New Contact Form Submission - Blue Rays Solar',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0369a1; border-bottom: 3px solid #22d3ee; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p style="margin: 10px 0;"><strong>Message:</strong></p>
              <p style="background-color: white; padding: 15px; border-left: 4px solid #22d3ee; margin: 10px 0;">
                ${message}
              </p>
            </div>
            <p style="color: #64748b; font-size: 14px; margin-top: 20px;">
              Submitted from: Blue Rays Solar Website
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Continue even if email fails - data is still saved in database
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: {
        id: contact._id,
        email: contact.email,
      },
    });
  } catch (error: any) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Failed to submit contact form',
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
