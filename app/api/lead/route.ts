import { NextRequest, NextResponse } from 'next/server';
import { buildWebhookPayload, type LeadData } from '../../../lib/lead-webhook';
import { LOCATIONS, type LocationKey } from '../../../lib/lead-config';

type RequestBody = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  location?: string;
  reason?: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  event_source_url?: string;
};

function validate(body: unknown): { ok: true; data: LeadData } | { ok: false; error: string } {
  if (!body || typeof body !== 'object') {
    return { ok: false, error: 'Request body must be a JSON object' };
  }

  const b = body as RequestBody;

  const firstName = (b.firstName || '').trim();
  const lastName = (b.lastName || '').trim();
  const email = (b.email || '').trim();
  const phone = (b.phone || '').trim();
  const location = (b.location || 'coppell').trim() as LocationKey;

  if (!firstName) return { ok: false, error: 'First name is required' };
  if (!email) return { ok: false, error: 'Email is required' };
  if (!phone) return { ok: false, error: 'Phone is required' };
  if (!LOCATIONS[location]) return { ok: false, error: 'Invalid location' };

  const name = lastName ? `${firstName} ${lastName}` : firstName;

  return {
    ok: true,
    data: {
      name,
      firstName,
      lastName,
      email,
      phone,
      location,
      reason: b.reason || undefined,
      message: b.message || undefined,
      utm_source: b.utm_source || undefined,
      utm_medium: b.utm_medium || undefined,
      utm_campaign: b.utm_campaign || undefined,
      utm_content: b.utm_content || undefined,
      utm_term: b.utm_term || undefined,
      event_source_url: b.event_source_url || undefined,
    },
  };
}

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const result = validate(body);
  if (!result.ok) {
    return NextResponse.json({ ok: false, error: result.error }, { status: 400 });
  }

  const { data } = result;
  const { submissionID, payload, webhookUrl } = buildWebhookPayload(data);

  // Add client IP and user agent
  const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
  const userAgent = request.headers.get('user-agent') || '';
  if (clientIp) {
    payload.client_ip = clientIp;
    payload.clientIpAddress = clientIp;
  }
  if (userAgent) {
    payload.user_agent = userAgent;
    payload.clientUserAgent = userAgent;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error(`[/api/lead] Webhook error: ${res.status}`, { submissionID, location: data.location });
      return NextResponse.json({ ok: false, error: 'Failed to process lead' }, { status: 502 });
    }

    console.log(`[/api/lead] Lead forwarded`, { submissionID, location: data.location, source: 'Website' });

    return NextResponse.json({
      ok: true,
      submissionID,
      redirectPath: `/schedule-appointment?firstName=${encodeURIComponent(data.firstName)}&lastName=${encodeURIComponent(data.lastName)}&email=${encodeURIComponent(data.email)}&phone=${encodeURIComponent(data.phone)}&location=${data.location}`,
    });
  } catch (err) {
    console.error(`[/api/lead] Webhook fetch failed`, err);
    return NextResponse.json({ ok: false, error: 'Failed to reach workflow service' }, { status: 502 });
  }
}
