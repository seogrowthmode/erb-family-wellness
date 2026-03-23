import { NextRequest, NextResponse } from 'next/server';
import { OFFER } from '../../../../lib/lead-config';

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SK_ERB;
  if (!secretKey) {
    console.error('[/api/stripe/create-payment-intent] STRIPE_SK_ERB not configured');
    return NextResponse.json({ ok: false, error: 'Payment not configured' }, { status: 500 });
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const email = (body.email as string) || '';
  const name = (body.name as string) || '';
  const location = (body.location as string) || 'coppell';

  try {
    const params = new URLSearchParams({
      amount: String(OFFER.prepayAmountCents),
      currency: 'usd',
      'automatic_payment_methods[enabled]': 'true',
      'metadata[slug]': 'david-erb',
      'metadata[location]': location,
      'metadata[email]': email,
      'metadata[name]': name,
      'metadata[source]': 'Website',
      'metadata[offer]': `Prepay ${OFFER.prepayPrice} (saves ${OFFER.savings})`,
    });

    const res = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${secretKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('[/api/stripe/create-payment-intent] Stripe API error:', data.error?.message || res.status);
      return NextResponse.json({ ok: false, error: 'Payment creation failed', detail: data.error?.message }, { status: 500 });
    }

    return NextResponse.json({
      ok: true,
      clientSecret: data.client_secret,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[/api/stripe/create-payment-intent] Fetch error:', msg);
    return NextResponse.json({ ok: false, error: 'Payment creation failed', detail: msg }, { status: 500 });
  }
}
