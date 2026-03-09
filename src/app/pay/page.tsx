'use client';

import React, { useState, useCallback } from 'react';
import {
    ShieldCheck,
    Info,
    CreditCard,
    ShoppingCart,
    ArrowLeft,
    CheckCircle2,
    RefreshCw,
    ArrowRight,
    User,
    Mail,
    Phone,
    Zap,
    Sun,
    AlertCircle,
    Loader2,
    IndianRupee,
    FileCheck
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

declare global {
    interface Window {
        Razorpay: any;
    }
}

interface CustomerInfo {
    name: string;
    email: string;
    phone: string;
}

interface PaymentResult {
    orderId: string;
    paymentId: string;
    amount: number;
    serviceName: string;
}

export default function PaymentPage() {
    const [step, setStep] = useState<'details' | 'processing' | 'success' | 'failed'>('details');
    const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({ name: '', email: '', phone: '' });
    const [selectedService, setSelectedService] = useState('site-audit');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null);
    const [errorMessage, setErrorMessage] = useState('');

    const services = [
        {
            id: 'site-audit',
            name: 'Site Audit & Project Design',
            price: 1999,
            description: 'Technical feasibility study + Govt subsidy (PM-Surya Ghar) calculation.',
            features: ['On-site technical survey', 'Shadow analysis & panel placement', 'Subsidy eligibility report', 'Custom design blueprint'],
            popular: true,
        },
        {
            id: 'consultation',
            name: 'Expert Consultation',
            price: 999,
            description: 'One-on-one solar consultation with our expert engineers.',
            features: ['30-min video/phone call', 'ROI calculation', 'Brand & panel recommendations', 'Installation timeline'],
            popular: false,
        },
    ];

    const currentService = services.find(s => s.id === selectedService) || services[0];

    // Validation
    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!customerInfo.name.trim() || customerInfo.name.trim().length < 2) {
            newErrors.name = 'Please enter your full name (at least 2 characters).';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(customerInfo.email)) {
            newErrors.email = 'Please enter a valid email address.';
        }

        const cleanPhone = customerInfo.phone.replace(/[\s\-+91]/g, '');
        const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(cleanPhone)) {
            newErrors.phone = 'Please enter a valid 10-digit Indian mobile number.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Load Razorpay script
    const loadRazorpayScript = (): Promise<boolean> => {
        return new Promise((resolve) => {
            if (window.Razorpay) {
                resolve(true);
                return;
            }
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Handle Payment
    const handlePayment = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        setErrorMessage('');

        try {
            // Load Razorpay
            const isLoaded = await loadRazorpayScript();
            if (!isLoaded) {
                setErrorMessage('Failed to load payment gateway. Please check your internet connection and try again.');
                setIsLoading(false);
                return;
            }

            // Create order
            const orderRes = await fetch('/api/payment/create-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: customerInfo.name,
                    email: customerInfo.email,
                    phone: customerInfo.phone,
                    service: selectedService,
                }),
            });

            const orderData = await orderRes.json();

            if (!orderData.success) {
                setErrorMessage(orderData.error || 'Failed to create order. Please try again.');
                setIsLoading(false);
                return;
            }

            setIsLoading(false);

            // Open Razorpay Checkout
            const options = {
                key: orderData.key,
                amount: orderData.order.amount,
                currency: orderData.order.currency,
                name: 'Blue Rays Green Energy',
                description: orderData.service.name,
                image: '/images/logo.jpg',
                order_id: orderData.order.id,
                prefill: {
                    name: customerInfo.name,
                    email: customerInfo.email,
                    contact: customerInfo.phone,
                },
                notes: {
                    service: orderData.service.name,
                },
                theme: {
                    color: '#0284c7',
                    backdrop_color: 'rgba(15, 23, 42, 0.85)',
                },
                handler: async function (response: any) {
                    setStep('processing');

                    try {
                        // Verify payment on server
                        const verifyRes = await fetch('/api/payment/verify', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                razorpay_order_id: response.razorpay_order_id,
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_signature: response.razorpay_signature,
                                customer_name: customerInfo.name,
                                customer_email: customerInfo.email,
                                customer_phone: customerInfo.phone,
                                service_name: orderData.service.name,
                                amount: orderData.order.amount / 100,
                            }),
                        });

                        const verifyData = await verifyRes.json();

                        if (verifyData.success) {
                            setPaymentResult({
                                orderId: response.razorpay_order_id,
                                paymentId: response.razorpay_payment_id,
                                amount: orderData.order.amount / 100,
                                serviceName: orderData.service.name,
                            });
                            setStep('success');
                        } else {
                            setErrorMessage(verifyData.error || 'Payment verification failed.');
                            setStep('failed');
                        }
                    } catch (err) {
                        setErrorMessage('Payment verification failed. Please contact support with your payment ID.');
                        setStep('failed');
                    }
                },
                modal: {
                    ondismiss: function () {
                        // User closed the payment modal
                    },
                },
            };

            const razorpay = new window.Razorpay(options);
            razorpay.on('payment.failed', function (response: any) {
                setErrorMessage(response.error.description || 'Payment failed. Please try again.');
                setStep('failed');
            });
            razorpay.open();
        } catch (err: any) {
            setErrorMessage(err.message || 'Something went wrong. Please try again.');
            setIsLoading(false);
        }
    };

    // Processing Screen
    if (step === 'processing') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center p-4 font-sans">
                <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl shadow-blue-100/30 border border-slate-200 max-w-md w-full text-center">
                    <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                        <Loader2 className="animate-spin text-blue-500" size={48} />
                    </div>
                    <h1 className="text-2xl font-black mb-2 tracking-tight text-slate-800">Verifying Payment</h1>
                    <p className="text-slate-500 leading-relaxed">Please wait while we verify your payment with our secure servers...</p>
                </div>
            </div>
        );
    }

    // Success Screen
    if (step === 'success' && paymentResult) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-emerald-100/30 border border-slate-200 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                        <CheckCircle2 className="text-emerald-500" size={48} />
                    </div>
                    <h1 className="text-2xl font-black mb-2 tracking-tight">Payment Successful!</h1>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Thank you for choosing Blue Rays. Your <strong>{paymentResult.serviceName}</strong> has been scheduled and your inquiry is now in our <strong>Priority Queue</strong>.
                    </p>
                    <div className="bg-slate-50 p-5 rounded-2xl mb-8 text-left border border-slate-100 space-y-3">
                        <div className="flex justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Order ID</span>
                            <span className="text-xs font-bold text-slate-700 font-mono">{paymentResult.orderId.slice(-14).toUpperCase()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Payment ID</span>
                            <span className="text-xs font-bold text-slate-700 font-mono">{paymentResult.paymentId.slice(-14).toUpperCase()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Amount Paid</span>
                            <span className="text-sm font-bold text-blue-600">₹{paymentResult.amount.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                    <Link href="/" className="inline-block w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]">
                        Return to Home
                    </Link>
                    <p className="text-xs text-slate-400 mt-4">A confirmation email has been sent to your registered email address.</p>
                </div>
            </div>
        );
    }

    // Failed Screen
    if (step === 'failed') {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50 flex flex-col items-center justify-center p-4 font-sans text-slate-800">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-red-100/30 border border-slate-200 max-w-md w-full text-center">
                    <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-red-100">
                        <AlertCircle className="text-red-500" size={48} />
                    </div>
                    <h1 className="text-2xl font-black mb-2 tracking-tight">Payment Failed</h1>
                    <p className="text-slate-500 mb-6 leading-relaxed">{errorMessage}</p>
                    <div className="space-y-3">
                        <button
                            onClick={() => { setStep('details'); setErrorMessage(''); }}
                            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]"
                        >
                            Try Again
                        </button>
                        <Link href="/contact" className="inline-block w-full py-4 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Main Payment Form
    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 selection:bg-cyan-100">
            {/* Branded Header */}
            <header className="bg-white border-b border-slate-200 py-4 px-4 md:px-8 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/logo.jpg"
                                alt="Blue Rays Green Energy"
                                fill
                                className="object-contain rounded-lg shadow-sm"
                            />
                        </div>
                        <div className="hidden sm:flex flex-col">
                            <span className="text-lg font-black tracking-tight text-slate-800 leading-none">Blue Rays</span>
                            <span className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest mt-1">Secure Checkout</span>
                        </div>
                    </Link>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-2 text-slate-400">
                            <ShieldCheck size={16} />
                            <span className="text-[10px] font-bold uppercase tracking-widest">256-bit SSL Encrypted</span>
                        </div>
                        <div className="h-10 w-px bg-slate-200 hidden md:block"></div>
                        <div className="flex items-center text-blue-600 font-black text-sm">
                            <IndianRupee size={16} className="mr-1" />
                            <span>{currentService.price.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto py-8 md:py-16 px-4 flex flex-col md:flex-row gap-10">
                {/* Left Column - Form */}
                <div className="flex-1 space-y-8">
                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                        {/* Service Selector */}
                        <div className="flex border-b border-slate-100 bg-slate-50/50 p-2">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedService(service.id)}
                                    className={`flex-1 py-3 px-4 text-center rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 relative ${selectedService === service.id
                                        ? 'bg-white text-blue-600 shadow-sm border border-slate-100'
                                        : 'text-slate-400 hover:text-slate-600'
                                        }`}
                                >
                                    {service.id === 'site-audit' ? <Sun size={18} /> : <Zap size={18} />}
                                    <span className="hidden sm:inline">{service.name}</span>
                                    <span className="sm:hidden">{service.id === 'site-audit' ? 'Audit' : 'Consult'}</span>
                                    {service.popular && (
                                        <span className="absolute -top-2 -right-1 bg-amber-400 text-amber-900 text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider">Popular</span>
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="p-8 md:p-10">
                            <div className="space-y-8">
                                <div className="space-y-1">
                                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">Your Details</h2>
                                    <p className="text-sm text-slate-500">Fill in your information to proceed with secure payment.</p>
                                </div>

                                {/* Error Banner */}
                                {errorMessage && (
                                    <div className="flex items-start space-x-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                                        <AlertCircle size={18} className="shrink-0 mt-0.5" />
                                        <span>{errorMessage}</span>
                                    </div>
                                )}

                                <div className="space-y-6">
                                    {/* Name */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                                        <div className="relative">
                                            <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input
                                                type="text"
                                                required
                                                placeholder="Enter your full name"
                                                value={customerInfo.name}
                                                onChange={(e) => { setCustomerInfo({ ...customerInfo, name: e.target.value }); setErrors({ ...errors, name: '' }); }}
                                                className={`w-full pl-14 pr-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-300 ${errors.name ? 'border-red-300 bg-red-50/50' : 'border-slate-200'}`}
                                            />
                                        </div>
                                        {errors.name && <p className="text-red-500 text-xs font-medium ml-1">{errors.name}</p>}
                                    </div>

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address *</label>
                                        <div className="relative">
                                            <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <input
                                                type="email"
                                                required
                                                placeholder="your@email.com"
                                                value={customerInfo.email}
                                                onChange={(e) => { setCustomerInfo({ ...customerInfo, email: e.target.value }); setErrors({ ...errors, email: '' }); }}
                                                className={`w-full pl-14 pr-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-300 ${errors.email ? 'border-red-300 bg-red-50/50' : 'border-slate-200'}`}
                                            />
                                        </div>
                                        {errors.email && <p className="text-red-500 text-xs font-medium ml-1">{errors.email}</p>}
                                    </div>

                                    {/* Phone */}
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number *</label>
                                        <div className="relative">
                                            <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                            <span className="absolute left-12 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">+91</span>
                                            <input
                                                type="tel"
                                                required
                                                inputMode="numeric"
                                                maxLength={10}
                                                placeholder="9876543210"
                                                value={customerInfo.phone}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                                                    setCustomerInfo({ ...customerInfo, phone: val });
                                                    setErrors({ ...errors, phone: '' });
                                                }}
                                                className={`w-full pl-[5.5rem] pr-5 py-4 bg-slate-50 border rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-300 ${errors.phone ? 'border-red-300 bg-red-50/50' : 'border-slate-200'}`}
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-xs font-medium ml-1">{errors.phone}</p>}
                                    </div>
                                </div>

                                {/* Pay Button */}
                                <button
                                    onClick={handlePayment}
                                    disabled={isLoading}
                                    className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center group mt-2"
                                >
                                    {isLoading ? (
                                        <Loader2 className="animate-spin" size={24} />
                                    ) : (
                                        <>
                                            <CreditCard size={20} className="mr-3" />
                                            <span>Pay ₹{currentService.price.toLocaleString('en-IN')} Securely</span>
                                            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>

                                <p className="text-xs text-center text-slate-400 leading-relaxed">
                                    By clicking &quot;Pay&quot;, you agree to our service terms including site audit/consultation terms.
                                    Powered by <strong>Razorpay</strong> — India&apos;s trusted payment gateway.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.25em]">
                        <Link href="/contact" className="hover:text-slate-500 transition-colors">Support</Link>
                        <Link href="/about" className="hover:text-slate-500 transition-colors">About Us</Link>
                        <Link href="/faq" className="hover:text-slate-500 transition-colors">FAQ</Link>
                    </div>
                </div>

                {/* Right Column - Order Summary */}
                <div className="w-full md:w-96 space-y-8">
                    <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/40 border border-slate-100 p-8">
                        <h3 className="font-black text-xl text-slate-800 mb-8 flex items-center tracking-tight">
                            <ShoppingCart size={22} className="mr-3 text-cyan-500" />
                            Summary
                        </h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-start gap-4">
                                <div className="space-y-1">
                                    <p className="font-black text-base text-slate-800 leading-tight">{currentService.name}</p>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">{currentService.description}</p>
                                </div>
                                <span className="font-black text-lg text-slate-800 shrink-0">₹{currentService.price.toLocaleString('en-IN')}</span>
                            </div>

                            {/* Features List */}
                            <div className="space-y-2.5 py-4 border-t border-b border-slate-50">
                                {currentService.features.map((feature, i) => (
                                    <div key={i} className="flex items-center text-sm text-slate-600">
                                        <CheckCircle2 size={14} className="text-emerald-500 mr-2.5 shrink-0" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Net Fee</span>
                                    <span className="font-bold text-slate-700">₹{currentService.price.toLocaleString('en-IN')}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Processing</span>
                                    <span className="text-emerald-500 font-black italic">FREE</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">GST (Inclusive)</span>
                                    <span className="font-bold text-slate-700">Included</span>
                                </div>

                                <div className="flex justify-between items-center bg-blue-50/50 -mx-4 px-4 py-4 rounded-2xl mt-4 border border-blue-100/30">
                                    <span className="font-black text-slate-800 uppercase tracking-tighter text-lg">Total Due</span>
                                    <div className="text-right">
                                        <span className="block font-black text-3xl text-blue-600 tracking-tighter">₹{currentService.price.toLocaleString('en-IN')}</span>
                                        <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Indian Rupees</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[2rem] p-7 flex items-start space-x-4 shadow-2xl shadow-slate-900/20 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-cyan-500/20 transition-all duration-500"></div>
                        <ShieldCheck className="text-cyan-400 shrink-0 relative z-10" size={24} />
                        <div className="relative z-10">
                            <p className="font-black text-white text-sm uppercase tracking-widest mb-2">Subsidy Assured</p>
                            <p className="text-xs text-slate-400 leading-relaxed font-medium">
                                As an authorized government partner, we ensure your payment qualifies for the <strong className="text-slate-300">₹30,000 - ₹78,000</strong> subsidy bracket under PM-Surya Ghar Yojana.
                            </p>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-col items-center space-y-4 pt-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                                <ShieldCheck size={14} className="text-emerald-500" />
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">SSL Secure</span>
                            </div>
                            <div className="flex items-center space-x-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                                <FileCheck size={14} className="text-blue-500" />
                                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">PCI Compliant</span>
                            </div>
                        </div>
                        <p className="text-[9px] text-center text-slate-300 font-black uppercase tracking-[0.2em] leading-relaxed">
                            Authorized Payment Portal <br /> Managed by Blue Rays Green Energy TN
                        </p>
                    </div>
                </div>
            </main>

            <footer className="max-w-5xl mx-auto py-16 px-4 border-t border-slate-100 mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] text-slate-400 leading-relaxed font-medium">
                <div className="space-y-4">
                    <p className="max-w-md">
                        Blue Rays Green Energy uses industry-standard encryption to protect your financial data.
                        All payments are processed through Razorpay&apos;s PCI-DSS Level 1 compliant gateway. By clicking &quot;Pay&quot;, you agree to our
                        service agreement including site audit terms.
                    </p>
                    <div className="flex space-x-6 font-black uppercase tracking-widest">
                        <Link href="/contact" className="hover:text-slate-600 transition-colors">Support Center</Link>
                        <Link href="/about" className="hover:text-slate-600 transition-colors">About Us</Link>
                        <Link href="/faq" className="hover:text-slate-600 transition-colors">FAQ</Link>
                    </div>
                </div>
                <div className="md:text-right space-y-6">
                    <p className="font-bold">&copy; {new Date().getFullYear()} Blue Rays Green Energy India Pvt Ltd. <br /> Tamil Nadu&apos;s Trusted Solar Provider.</p>
                    <div className="flex items-center md:justify-end space-x-3 mt-2">
                        <div className="flex items-center space-x-1.5 bg-slate-100 px-3 py-1.5 rounded-lg">
                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider">Powered by Razorpay</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
