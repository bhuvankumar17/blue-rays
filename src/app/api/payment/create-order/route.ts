import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

function getRazorpayInstance() {
    return new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID || '',
        key_secret: process.env.RAZORPAY_KEY_SECRET || '',
    });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, service } = body;

        // Validate required fields
        if (!name || !email || !phone) {
            return NextResponse.json(
                { success: false, error: 'Name, email, and phone are required.' },
                { status: 400 }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid email address.' },
                { status: 400 }
            );
        }

        // Validate phone format (Indian)
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phone.replace(/[\s\-+91]/g, '');
        if (!phoneRegex.test(cleanPhone)) {
            return NextResponse.json(
                { success: false, error: 'Please provide a valid 10-digit Indian phone number.' },
                { status: 400 }
            );
        }

        // Service pricing map
        const serviceMap: Record<string, { name: string; amount: number; description: string }> = {
            'site-audit': {
                name: 'Site Audit & Project Design',
                amount: 199900, // Amount in paise (₹1,999)
                description: 'Technical feasibility study + Govt subsidy (PM-Surya Ghar) calculation.',
            },
            'consultation': {
                name: 'Expert Consultation',
                amount: 99900, // ₹999
                description: 'One-on-one solar consultation with our expert engineers.',
            },
        };

        const selectedService = serviceMap[service] || serviceMap['site-audit'];

        // Create Razorpay order
        const order = await getRazorpayInstance().orders.create({
            amount: selectedService.amount,
            currency: 'INR',
            receipt: `BR-${Date.now()}`,
            notes: {
                customer_name: name,
                customer_email: email,
                customer_phone: cleanPhone,
                service: selectedService.name,
            },
        });

        return NextResponse.json({
            success: true,
            order: {
                id: order.id,
                amount: order.amount,
                currency: order.currency,
            },
            service: selectedService,
            key: process.env.RAZORPAY_KEY_ID,
        });
    } catch (error: any) {
        console.error('Razorpay order creation error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Failed to create payment order. Please try again.',
            },
            { status: 500 }
        );
    }
}
