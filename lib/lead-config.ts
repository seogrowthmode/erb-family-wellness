export const WORKFLOW_MANAGER_URL =
  process.env.WORKFLOW_MANAGER_URL || 'https://hooks.chiroflow.ai';

export const LOCATIONS = {
  coppell: {
    label: 'Coppell',
    workflowId: 'bb1632c3-80be-4cd2-b812-3b4fafc894e8',
    rwEmbedId: '34125506d94d4fb549979c58e562dd83988d',
    address: '255 S Denton Tap Rd, Suite 200, Coppell, TX 75019',
    phone: '(972) 393-6262',
  },
  southlake: {
    label: 'Southlake',
    workflowId: 'f03712a7-bc3e-467c-8e16-e86cefef65f6',
    rwEmbedId: '3410a5516c468b63432c9a2b74b389abd297',
    address: '1845 E Southlake Blvd, Suite 140, Southlake, TX 76092',
    phone: '(817) 895-0075',
  },
} as const;

export type LocationKey = keyof typeof LOCATIONS;

export const OFFER = {
  price: '$67',
  prepayPrice: '$47',
  savings: '$20',
  prepayAmountCents: 4700,
  includes: [
    'Comprehensive chiropractic examination',
    'X-rays (if clinically necessary)',
    'Corrective chiropractic adjustment',
    'Follow-up visit included',
    'Complete report of findings & treatment plan',
  ],
  whatToExpect: [
    'Arrive 10 minutes early',
    'Wear comfortable clothing',
    'Bring insurance card (if applicable)',
    'Visit is approximately 45-60 minutes',
  ],
} as const;
