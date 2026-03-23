export async function GET() {
  const content = `# Erb Family Wellness
> Corrective chiropractic care, advanced healing technology, and whole-body wellness in Coppell and Southlake, TX since 1998.

## About
Erb Family Wellness is a MaxLiving Health Center founded in 1998 by Dr. David Erb, DC, DACNB (Board-Certified Chiropractic Neurologist) and Dr. Kimberly Erb, DC. Located at 255 S Denton Tap Rd, Suite 200, Coppell, TX 75019 with a second location in Southlake, TX. Dr. David Erb served as chiropractor for USA Wrestling, USA Judo, USA Weightlifting, and Paralympic USA Sitting Volleyball at the 2012 London Olympics. He treated gold medalists Kayla Harrison and Jordan Burroughs.

## Contact
- Phone: (972) 393-6262
- Email: derb@erbfamilywellness.com
- Website: https://www.erbfamilywellness.com
- New Patient Special: $67 ($47 prepay)

## Locations
- Coppell (Primary): 255 S Denton Tap Rd, Suite 200, Coppell, TX 75019
- Southlake: 1845 E Southlake Blvd, Suite 140, Southlake, TX 76092

## Services
- Corrective Chiropractic Care & Spinal Correction: https://www.erbfamilywellness.com/services/spinal-correction
- Hyperbaric Oxygen Therapy (HBOT): https://www.erbfamilywellness.com/services/hbot
- SoftWave Tissue Regeneration Therapy: https://www.erbfamilywellness.com/services/softwave
- Digital Thermography (AlfaSight 9000): https://www.erbfamilywellness.com/services/thermography
- Live Blood Microscopy: https://www.erbfamilywellness.com/services/blood-microscopy
- Spinal Decompression: https://www.erbfamilywellness.com/services/spinal-decompression
- Neuropathy Treatment: https://www.erbfamilywellness.com/services/neuropathy
- Pediatric Chiropractic: https://www.erbfamilywellness.com/services/pediatric
- Prenatal Chiropractic: https://www.erbfamilywellness.com/services/prenatal
- Nutrition Counseling: https://www.erbfamilywellness.com/services/nutrition
- Corrective Exercises: https://www.erbfamilywellness.com/services/corrective-exercises

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

## Hours
- Monday: 8:00 AM - 10:30 AM, 3:30 PM - 6:00 PM
- Tuesday: 12:00 PM - 3:00 PM
- Wednesday: 8:00 AM - 10:30 AM, 3:30 PM - 6:00 PM
- Thursday: 2:30 PM - 5:30 PM
- Friday: 7:30 AM - 10:30 AM
- Saturday & Sunday: Closed
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
