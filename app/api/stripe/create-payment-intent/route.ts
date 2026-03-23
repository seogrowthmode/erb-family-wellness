import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { OFFER } from '../../../../lib/lead-config';

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SK_ERB;
  if (!secretKey) {
    console.error('[/api/stripe/create-payment-intent] STRIPE_SK_ERB not configured');
    return NextResponse.json({ ok: false, error: 'Payment not configured' }, { status: 500 });
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2026-02-25.clover' as Stripe.LatestApiVersion });

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
    const paymentIntent = await stripe.paymentIntents.create({
      amount: OFFER.prepayAmountCents,
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
      metadata: {
        slug: 'david-erb',
        location,
        email,
        name,
        source: 'Website',
        offer: `Prepay ${OFFER.prepayPrice} (saves ${OFFER.savings})`,
      },
    });

    return NextResponse.json({
      ok: true,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error('[/api/stripe/create-payment-intent] Stripe error:', msg);
    return NextResponse.json({ ok: false, error: 'Payment creation failed', detail: msg }, { status: 500 });
  }
}
