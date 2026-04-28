export async function GET() {
  const content = `# Erb Family Wellness
> Corrective chiropractic care, advanced healing technology, and whole-body wellness in Coppell and Southlake, TX since 1998.

## About
Erb Family Wellness is a MaxLiving Health Center founded in 1998 by Dr. David Erb, DC, DACNB (Board-Certified Chiropractic Neurologist) and Dr. Kimberly Erb, DC. Located at 255 S Denton Tap Rd, Suite 200, Coppell, TX 75019 with a second location in Southlake, TX. Dr. David Erb served as chiropractor for USA Wrestling, USA Judo, USA Weightlifting, and Paralympic USA Sitting Volleyball at the 2012 London Olympics. He treated gold medalists Kayla Harrison and Jordan Burroughs.

## Contact
- Coppell Phone: (972) 393-6262
- Southlake Phone: (817) 895-0075
- Email: derb@erbfamilywellness.com
- Website: https://erbfamilywellness.com
- New Patient Special: $67 ($47 prepay)

## Locations
- Coppell (Primary): 255 S Denton Tap Rd, Suite 200, Coppell, TX 75019
- Southlake: 1845 E Southlake Blvd, Suite 140, Southlake, TX 76092

## Services
- Corrective Chiropractic Care & Spinal Correction: https://erbfamilywellness.com/coppell/spinal-correction
- Hyperbaric Oxygen Therapy (HBOT): https://erbfamilywellness.com/coppell/hbot
- SoftWave Tissue Regeneration Therapy: https://erbfamilywellness.com/coppell/softwave
- Digital Thermography (AlfaSight 9000): https://erbfamilywellness.com/coppell/thermography
- Live Blood Microscopy: https://erbfamilywellness.com/coppell/blood-microscopy
- Spinal Decompression: https://erbfamilywellness.com/coppell/spinal-decompression
- Neuropathy Treatment: https://erbfamilywellness.com/coppell/neuropathy
- Pediatric Chiropractic: https://erbfamilywellness.com/coppell/pediatric
- Prenatal Chiropractic: https://erbfamilywellness.com/coppell/prenatal
- Nutrition Counseling: https://erbfamilywellness.com/coppell/nutrition
- Corrective Exercises: https://erbfamilywellness.com/coppell/corrective-exercises

## Conditions Treated
Back Pain, Neck Pain, Sciatica, Headaches, Neuropathy, Scoliosis, Herniated Discs, Sports Injuries, Pediatric Conditions, Prenatal Discomfort, Chronic Pain, Neurological Conditions, Stroke Recovery, Traumatic Brain Injury

## Credentials
- Dr. David Erb: DC, DACNB (Diplomate American Chiropractic Neurology Board), CCCN (Certified Clinical Chiropractic Nutritionist)
- Dr. Kimberly Erb: DC
- 2012 London Olympics Chiropractor
- Parker College of Chiropractic (Class of 1999)
- 28+ years of clinical experience
- 4.8 stars, 306+ Google reviews

## Service Area
Coppell, Southlake, Lewisville, Flower Mound, Carrollton, Grapevine, Irving, Valley Ranch, Las Colinas, Dallas, DFW Metroplex

## Coppell Hours
- Monday: 8:00 AM - 10:30 AM, 3:30 PM - 6:00 PM
- Tuesday: 12:00 PM - 3:00 PM
- Wednesday: 8:00 AM - 10:30 AM, 3:30 PM - 6:00 PM
- Thursday: 2:30 PM - 5:30 PM
- Friday: 7:30 AM - 10:30 AM
- Saturday & Sunday: Closed

## Southlake Hours
- Monday: 8:00 AM - 10:00 AM, 3:30 PM - 6:00 PM
- Tuesday: 11:00 AM - 1:00 PM
- Wednesday: 8:00 AM - 10:00 AM, 3:30 PM - 6:00 PM
- Thursday: 11:00 AM - 1:00 PM, 4:00 PM - 5:30 PM
- Friday: 7:30 AM - 10:00 AM
- Saturday & Sunday: Closed
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
