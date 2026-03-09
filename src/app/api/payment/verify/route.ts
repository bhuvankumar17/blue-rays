import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import dbConnect from '@/lib/mongodb';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            customer_name,
            customer_email,
            customer_phone,
            service_name,
            amount,
        } = body;

        // Validate required fields
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return NextResponse.json(
                { success: false, error: 'Missing payment verification details.' },
                { status: 400 }
            );
        }

        // Verify signature
        const expectedSignature = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest('hex');

        const isAuthentic = expectedSignature === razorpay_signature;

        if (!isAuthentic) {
            return NextResponse.json(
                { success: false, error: 'Payment verification failed. Signature mismatch.' },
                { status: 400 }
            );
        }

        // Payment is verified — optionally save to database
        try {
            await dbConnect();
            const mongoose = (await import('mongoose')).default;

            // Create a Payment model if it doesn't exist
            const PaymentSchema = new mongoose.Schema({
                orderId: String,
                paymentId: String,
                signature: String,
                customerName: String,
                customerEmail: String,
                customerPhone: String,
                serviceName: String,
                amount: Number,
                status: { type: String, default: 'completed' },
                createdAt: { type: Date, default: Date.now },
            });

            const Payment = mongoose.models.Payment || mongoose.model('Payment', PaymentSchema);

            await Payment.create({
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                signature: razorpay_signature,
                customerName: customer_name,
                customerEmail: customer_email,
                customerPhone: customer_phone,
                serviceName: service_name,
                amount: amount,
            });
        } catch (dbError) {
            console.error('Database save error (continuing):', dbError);
            // Don't fail the verification just because DB save failed
        }

        return NextResponse.json({
            success: true,
            message: 'Payment verified successfully!',
            data: {
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
            },
        });
    } catch (error: any) {
        console.error('Payment verification error:', error);
        return NextResponse.json(
            {
                success: false,
                error: error.message || 'Payment verification failed.',
            },
            { status: 500 }
        );
    }
}
