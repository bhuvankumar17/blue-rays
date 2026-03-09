import { NextRequest, NextResponse } from 'next/server';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'bluerays@2026';

function generateToken(): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 64; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

// Simple in-memory token store (works per serverless instance)
// For production, use a database or JWT
const validTokens = new Set<string>();

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { username, password } = body;

        if (!username || !password) {
            return NextResponse.json(
                { success: false, error: 'Username and password are required' },
                { status: 400 }
            );
        }

        if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
            return NextResponse.json(
                { success: false, error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const token = generateToken();
        validTokens.add(token);

        const response = NextResponse.json({ success: true, message: 'Login successful' });

        // Set an HTTP-only cookie with the token
        response.cookies.set('admin_token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 8, // 8 hours
            path: '/',
        });

        return response;
    } catch (error: any) {
        console.error('Auth error:', error);
        return NextResponse.json(
            { success: false, error: 'Authentication failed' },
            { status: 500 }
        );
    }
}

// Verify token endpoint
export async function GET(request: NextRequest) {
    const token = request.cookies.get('admin_token')?.value;

    if (!token || !validTokens.has(token)) {
        return NextResponse.json(
            { success: false, error: 'Not authenticated' },
            { status: 401 }
        );
    }

    return NextResponse.json({ success: true, message: 'Authenticated' });
}

// Logout endpoint
export async function DELETE(request: NextRequest) {
    const token = request.cookies.get('admin_token')?.value;

    if (token) {
        validTokens.delete(token);
    }

    const response = NextResponse.json({ success: true, message: 'Logged out' });
    response.cookies.delete('admin_token');

    return response;
}

// Export for use in other API routes
export { validTokens };
