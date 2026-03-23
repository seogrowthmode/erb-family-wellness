import { WORKFLOW_MANAGER_URL, LOCATIONS, type LocationKey } from './lead-config';

export type LeadData = {
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: LocationKey;
  painLocation?: string;
  reason?: string;
  message?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  event_source_url?: string;
};

function generateSubmissionId(): string {
  return `web-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

export function buildWebhookPayload(data: LeadData) {
  const submissionID = generateSubmissionId();
  const loc = LOCATIONS[data.location] || LOCATIONS.coppell;

  const payload: Record<string, string> = {
    submissionID,
    // Native fields
    name: data.name,
    fullName: data.name,
    full_name: data.name,
    firstName: data.firstName,
    first_name: data.firstName,
    lastName: data.lastName,
    last_name: data.lastName,
    email: data.email,
    phone: data.phone,
    phone_number: data.phone,
    painLocation: data.painLocation || '',
    pain: data.painLocation || '',
    seenChiropractor: '',
    location: data.location,
    // Legacy aliases the workflow manager expects
    q5_name: data.name,
    q6_whatsYour: data.email,
    q7_bestCell: data.phone,
    q3_whereIs: data.painLocation || '',
    q23_haveYou23: '',
    // Source identification
    source: 'Website',
    offerType: 'Chiro',
    offer_type: 'Chiro',
  };

  if (data.reason) payload.reason = data.reason;
  if (data.message) payload.message = data.message;

  const utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'] as const;
  for (const field of utmFields) {
    if (data[field]) payload[field] = data[field]!;
  }

  if (data.event_source_url) {
    payload.event_source_url = data.event_source_url;
  }

  const webhookUrl = `${WORKFLOW_MANAGER_URL}/workflow-webhook/trigger/${loc.workflowId}`;

  return { submissionID, payload, webhookUrl };
}
