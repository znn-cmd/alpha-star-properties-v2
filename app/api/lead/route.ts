import { NextRequest, NextResponse } from 'next/server';
import { amoCRM } from '@/lib/crm/amoClient';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message, source, page_url, utm_params } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send to AmoCRM
    const result = await amoCRM.createLead({
      name,
      email,
      phone,
      message,
      source: source || 'Alpha Star Website',
      page_url,
      utm_params,
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit lead' },
      { status: 500 }
    );
  }
}

