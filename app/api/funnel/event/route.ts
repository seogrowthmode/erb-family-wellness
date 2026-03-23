import { NextRequest, NextResponse } from 'next/server';

const WORKFLOW_MANAGER_URL =
  process.env.WORKFLOW_MANAGER_URL || 'https://hooks.chiroflow.ai';

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json() as Record<string, unknown>;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid JSON' }, { status: 400 });
  }

  const type = body.type as string;
  if (!type) {
    return NextResponse.json({ ok: false, error: 'type is required' }, { status: 400 });
  }

  if (type === 'appointment') {
    try {
      const res = await fetch(
        `${WORKFLOW_MANAGER_URL}/api/funnel-stats/appointment-booked`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...body,
            funnelId: (body.slug as string) || 'david-erb',
            source: 'Website',
            slug: body.slug || 'david-erb',
          }),
        }
      );

      if (!res.ok) {
        console.error(`[/api/funnel/event] Appointment tracker error: ${res.status}`);
        return NextResponse.json({ ok: false, error: 'Failed to track appointment' }, { status: 502 });
      }

      console.log(`[/api/funnel/event] Appointment tracked`, { source: 'Website' });
      return NextResponse.json({ ok: true });
    } catch (err) {
      console.error(`[/api/funnel/event] Appointment tracker failed`, err);
      return NextResponse.json({ ok: false, error: 'Service unavailable' }, { status: 502 });
    }
  }

  // Generic event passthrough
  return NextResponse.json({ ok: true, type });
}
