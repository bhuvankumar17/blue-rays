'use client';

import React, { useState } from 'react';
import {
    ShieldCheck,
    ChevronDown,
    Info,
    CreditCard,
    ShoppingCart,
    Lock,
    ArrowLeft,
    CheckCircle2,
    RefreshCw,
    ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function PayPalPaymentPage() {
    const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal');
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handlePayment = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#f5f7fa] flex flex-col items-center justify-center p-4 font-sans text-[#2c2e2f]">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-100/20 border border-[#e5e7eb] max-w-md w-full text-center animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-100">
                        <CheckCircle2 className="text-emerald-500" size={48} />
                    </div>
                    <h1 className="text-2xl font-black mb-2 tracking-tight">Payment Successful!</h1>
                    <p className="text-slate-500 mb-8 leading-relaxed">
                        Thank you for choosing Blue Rays. Your site survey has been scheduled and your inquiry is now in our **Priority Queue**.
                    </p>
                    <div className="bg-slate-50 p-5 rounded-2xl mb-8 text-left border border-slate-100">
                        <div className="flex justify-between mb-3">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Transaction ID</span>
                            <span className="text-sm font-bold text-slate-700 uppercase">BR-SOL-7K920042</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Amount Paid</span>
                            <span className="text-sm font-bold text-blue-600">₹1,999.00 INR</span>
                        </div>
                    </div>
                    <Link href="/" className="inline-block w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-[0.98]">
                        Return to Dashboard
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 selection:bg-cyan-100">
            {/* Branded Header */}
            <header className="bg-white border-b border-slate-200 py-4 px-4 md:px-8 sticky top-0 z-50">
                <div className="max-w-5xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/logo.jpg"
                                alt="Blue Rays"
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
                            <ShoppingCart size={18} className="mr-2" />
                            <span>₹1,999.00</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-5xl mx-auto py-8 md:py-16 px-4 flex flex-col md:flex-row gap-10">
                {/* Left Column - Form */}
                <div className="flex-1 space-y-8">
                    <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                        {/* Payment Method Selector */}
                        <div className="flex border-b border-slate-100 bg-slate-50/50 p-2">
                            <button
                                onClick={() => setPaymentMethod('paypal')}
                                className={`flex-1 py-3 px-4 text-center rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 ${paymentMethod === 'paypal'
                                    ? 'bg-white text-blue-600 shadow-sm border border-slate-100'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                                    <span className="text-white text-[10px] font-bold">P</span>
                                </div>
                                <span>PayPal Express</span>
                            </button>
                            <button
                                onClick={() => setPaymentMethod('card')}
                                className={`flex-1 py-3 px-4 text-center rounded-xl text-sm font-bold transition-all flex items-center justify-center space-x-2 ${paymentMethod === 'card'
                                    ? 'bg-white text-blue-600 shadow-sm border border-slate-100'
                                    : 'text-slate-400 hover:text-slate-600'
                                    }`}
                            >
                                <CreditCard size={18} />
                                <span>Credit/Debit Card</span>
                            </button>
                        </div>

                        <div className="p-8 md:p-10">
                            {paymentMethod === 'paypal' ? (
                                <div className="space-y-8">
                                    <div className="text-center md:text-left space-y-1">
                                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Login to PayPal</h2>
                                        <p className="text-sm text-slate-500">Pay securely using your PayPal balance or linked accounts.</p>
                                    </div>

                                    <div className="space-y-5">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Account Identifier</label>
                                            <input
                                                type="email"
                                                placeholder="Email address or phone number"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all placeholder:text-slate-300"
                                            />
                                        </div>
                                        <button className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline transition-colors ml-1">Forgot login details?</button>
                                    </div>

                                    <button
                                        onClick={handlePayment}
                                        disabled={isProcessing}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-blue-200 transition-all flex items-center justify-center group active:scale-[0.98]"
                                    >
                                        {isProcessing ? (
                                            <RefreshCw className="animate-spin mr-2" size={20} />
                                        ) : (
                                            <>
                                                <span>Continue to PayPal</span>
                                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>

                                    <div className="relative py-2">
                                        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
                                        <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.2em]"><span className="px-4 bg-white text-slate-300">Fast Checkout</span></div>
                                    </div>

                                    <button
                                        onClick={() => setPaymentMethod('card')}
                                        className="w-full py-4 bg-white border-2 border-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-50 hover:border-slate-200 transition-all shadow-sm flex items-center justify-center space-x-2"
                                    >
                                        <CreditCard size={18} />
                                        <span>Pay with Credit or Debit Card</span>
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handlePayment} className="space-y-8">
                                    <div className="space-y-1">
                                        <h2 className="text-2xl font-black text-slate-800 tracking-tight">Card Details</h2>
                                        <p className="text-sm text-slate-500">All transactions are secure and encrypted.</p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Cardholder Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="As shown on card"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 transition-all"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Card Number</label>
                                            <div className="relative">
                                                <CreditCard className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="0000 0000 0000 0000"
                                                    className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Expiration</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="MM / YY"
                                                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Security Code</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="CVC"
                                                        className="w-full pl-14 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-cyan-500/10 focus:border-cyan-500 transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center space-x-3 p-1">
                                            <input type="checkbox" id="save" className="w-5 h-5 text-cyan-500 border-slate-300 rounded-lg focus:ring-cyan-500 transition-all cursor-pointer" />
                                            <label htmlFor="save" className="text-xs font-bold text-slate-400 uppercase tracking-widest cursor-pointer mt-0.5">Save card for 1-click checkout</label>
                                        </div>
                                    </div>

                                    <button
                                        disabled={isProcessing}
                                        type="submit"
                                        className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-blue-200 transition-all active:scale-[0.98] mt-4"
                                    >
                                        {isProcessing ? <RefreshCw className="animate-spin mx-auto" size={24} /> : 'Complete Secure Payment'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center justify-center space-x-6 text-[10px] font-black text-slate-300 uppercase tracking-[0.25em]">
                        <span className="hover:text-slate-500 cursor-pointer transition-colors">Safety</span>
                        <span className="hover:text-slate-500 cursor-pointer transition-colors">Policy</span>
                        <span className="hover:text-slate-500 cursor-pointer transition-colors">Legal</span>
                        <span className="hover:text-slate-500 cursor-pointer transition-colors">Support</span>
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
                                    <p className="font-black text-base text-slate-800 leading-tight">Site Audit & Project Design</p>
                                    <p className="text-xs text-slate-400 font-medium leading-relaxed">Technical feasibility study + Govt subsidy (PM-Surya Ghar) calculation.</p>
                                </div>
                                <span className="font-black text-lg text-slate-800 shrink-0">₹1,999</span>
                            </div>

                            <div className="border-t border-slate-50 pt-6 space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Net Fee</span>
                                    <span className="font-bold text-slate-700">₹1,999.00</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Processing</span>
                                    <span className="text-emerald-500 font-black italic">FREE</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">GST (0%)</span>
                                    <span className="font-bold text-slate-700">₹0.00</span>
                                </div>

                                <div className="flex justify-between items-center bg-blue-50/50 -mx-4 px-4 py-4 rounded-2xl mt-4 border border-blue-100/30">
                                    <span className="font-black text-slate-800 uppercase tracking-tighter text-lg">Total Due</span>
                                    <div className="text-right">
                                        <span className="block font-black text-3xl text-blue-600 tracking-tighter">₹1,999</span>
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
                                As an authorized government partner, we ensure your payment qualifies for the **₹30,000 - ₹78,000 subsidy bracket**.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center space-y-4 pt-4">
                        <div className="flex items-center space-x-3 opacity-30">
                            <div className="h-6 w-10 bg-slate-300 rounded mt-1"></div>
                            <div className="h-6 w-10 bg-slate-300 rounded mb-1"></div>
                            <div className="h-6 w-10 bg-slate-300 rounded mt-1"></div>
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
                        Blue Rays Green Energy uses military-grade encryption to protect your financial data.
                        All payments are processed through PCI-DSS compliant gateways. By clicking "Pay", you agree to our
                        service agreement including site audit terms.
                    </p>
                    <div className="flex space-x-6 font-black uppercase tracking-widest">
                        <Link href="#" className="hover:text-slate-600 transition-colors">Support Center</Link>
                        <Link href="#" className="hover:text-slate-600 transition-colors">Consumer Rights</Link>
                        <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Charter</Link>
                    </div>
                </div>
                <div className="md:text-right space-y-6">
                    <p className="font-bold">&copy; {new Date().getFullYear()} Blue Rays Green Energy India Pvt Ltd. <br /> Tamil Nadu&apos;s Trusted Solar Provider.</p>
                    <div className="flex items-center md:justify-end space-x-3 grayscale opacity-30 mt-2">
                        <div className="flex flex-col items-end">
                            <span className="font-black uppercase tracking-[0.3em] text-[8px]">Verified by</span>
                            <span className="text-sm font-black text-slate-900 tracking-tighter -mt-1 underline decoration-cyan-400">NortonSECURE</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
