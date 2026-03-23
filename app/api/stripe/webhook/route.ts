import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(request: NextRequest) {
  const secretKey = process.env.STRIPE_SK_ERB;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!secretKey) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }

  const stripe = new Stripe(secretKey, { apiVersion: '2026-02-25.clover' as Stripe.LatestApiVersion });
  const rawBody = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event: Stripe.Event;

  if (webhookSecret && sig) {
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
      console.error('[stripe/webhook] Signature verification failed', err);
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }
  } else {
    event = JSON.parse(rawBody) as Stripe.Event;
  }

  if (event.type === 'payment_intent.succeeded') {
    const pi = event.data.object as Stripe.PaymentIntent;
    console.log(`[stripe/webhook] Payment succeeded: ${pi.id}`, pi.metadata);
  }

  return NextResponse.json({ received: true });
}
