import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import RevealOnScroll from "@/components/RevealOnScroll";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";

type ConditionData = {
  slug: string;
  name: string;
  heroLight: string;
  heroHeavy: string;
  heroSub: string;
  metaTitle: string;
  metaDesc: string;
  stats: string[];
  understandingLabel: string;
  understandingHeadlineLight: string;
  understandingHeadlineHeavy: string;
  understandingText: string;
  empathyCards: string[];
  approachLabel: string;
  approachHeadlineLight: string;
  approachHeadlineHeavy: string;
  approachHeadlineAccent?: string;
  approachParagraphs: string[];
  formSubtitle: string;
  treatments: { name: string; title: string; description: string; href: string; imagePlaceholder: string; badge?: string }[];
  symptoms: string[];
  testimonials: { quote: string; author: string }[];
  faq: { question: string; answer: string }[];
};

const conditionsData: ConditionData[] = [
  {
    slug: "back-pain",
    name: "Back Pain",
    heroLight: "Back Pain Treatment",
    heroHeavy: "in Coppell & Southlake.",
    heroSub: "28 years of corrective care for chronic and acute back pain — with technology no other DFW chiropractor offers.",
    metaTitle: "Back Pain Treatment — Chiropractor in Coppell & Southlake, TX",
    metaDesc: "Back pain treatment in Coppell and Southlake, TX. 28 years of corrective chiropractic care, HBOT, SoftWave, spinal decompression — technology no other DFW chiropractor offers.",
    stats: ["28 Years Treating Back Pain", "Multiple Treatment Options", "2 DFW Locations"],
    understandingLabel: "UNDERSTANDING BACK PAIN",
    understandingHeadlineLight: "You've been told",
    understandingHeadlineHeavy: "to live with it.",
    understandingText: "Back pain is the #1 reason Americans miss work. And most treatments — painkillers, injections, even surgery — only address symptoms. At Erb Family Wellness, we find and correct the ROOT CAUSE of your back pain using advanced diagnostics and the most comprehensive treatment options in DFW.",
    empathyCards: [
      "Chronic pain that returns no matter what you try",
      "Told you need surgery but want alternatives",
      "Pain medications masking the real problem",
    ],
    approachLabel: "OUR APPROACH",
    approachHeadlineLight: "We don't mask",
    approachHeadlineHeavy: "back pain.",
    approachHeadlineAccent: "We correct it.",
    approachParagraphs: [
      "Dr. Erb uses advanced diagnostics — X-rays, thermography, and blood microscopy — to identify the structural, neurological, and metabolic root causes of your back pain. As a Board-Certified Chiropractic Neurologist, he finds what other providers miss.",
      "Your treatment plan is built on the 5 Essentials framework, combining corrective chiropractic with nutrition, exercise, mindset, and toxin reduction for complete healing.",
    ],
    formSubtitle: "Start your back pain recovery today.",
    treatments: [
      { name: "Chiropractic", title: "Spinal Correction", description: "Advanced corrective adjustments targeting the root cause, not just symptoms.", href: "/services/spinal-correction", imagePlaceholder: "Spinal Correction Photo" },
      { name: "Non-Surgical", title: "Spinal Decompression", description: "Non-surgical motorized traction for herniated discs, bulging discs, and stenosis.", href: "/services/spinal-decompression", imagePlaceholder: "Spinal Decompression Photo" },
      { name: "Regenerative", title: "SoftWave Therapy", description: "Targeted shockwaves for tissue regeneration and inflammation reduction.", href: "/services/softwave", imagePlaceholder: "SoftWave Therapy Photo" },
      { name: "Hyperbaric", title: "HBOT", description: "800% stem cell growth. Accelerates healing at the cellular level.", href: "/services/hbot", imagePlaceholder: "HBOT Chamber Photo", badge: "FLAGSHIP" },
      { name: "Rehabilitation", title: "Corrective Exercises", description: "Custom exercise protocols to reinforce structural corrections.", href: "/services/corrective-exercises", imagePlaceholder: "Corrective Exercise Photo" },
    ],
    symptoms: [
      "Lower back pain that radiates down the leg",
      "Upper back stiffness and tension",
      "Pain that worsens with sitting or standing",
      "Numbness or tingling in the back or extremities",
      "Morning stiffness that improves through the day",
      "Pain after auto accidents or injuries",
      "Chronic pain unresolved by other treatments",
      "Difficulty sleeping due to back pain",
    ],
    testimonials: [
      { quote: "Dr. Erb's a great chiropractor. It's been over 20 years! When I first met him he found my issue within minutes.", author: "Long-term patient" },
      { quote: "The staff is incredible and has really helped my family with our health goals.", author: "Family patient" },
    ],
    faq: [
      { question: "What causes chronic back pain?", answer: "Multiple factors including spinal misalignment, disc degeneration, poor posture, muscle imbalances, and neurological dysfunction. Dr. Erb's advanced diagnostics identify your specific cause." },
      { question: "How is Erb's approach different from other chiropractors?", answer: "Most chiropractors treat symptoms. Dr. Erb is a Board-Certified Chiropractic Neurologist with 28 years of experience and technology no one else in DFW offers — HBOT, SoftWave, thermography, blood microscopy." },
      { question: "Do I need surgery for my back pain?", answer: "Most back pain responds to non-surgical corrective care. Erb offers spinal decompression, SoftWave, HBOT, and advanced chiropractic correction as alternatives to surgery." },
      { question: "How many visits will I need?", answer: "Every patient is different. Dr. Erb will create a custom corrective care plan based on your specific condition, goals, and diagnostic findings." },
    ],
  },
  {
    slug: "neck-pain",
    name: "Neck Pain",
    heroLight: "Neck Pain Treatment",
    heroHeavy: "in Coppell & Southlake.",
    heroSub: "Corrective chiropractic care for chronic neck pain, tech neck, and cervical spine injuries — backed by 28 years of results.",
    metaTitle: "Neck Pain Treatment Coppell TX | Erb Family Wellness",
    metaDesc: "Neck pain treatment in Coppell & Southlake TX. Corrective chiropractic, SoftWave, spinal decompression. Call (972) 393-6262.",
    stats: ["28 Years of Corrective Care", "306+ Five-Star Reviews", "2 DFW Locations"],
    understandingLabel: "UNDERSTANDING NECK PAIN",
    understandingHeadlineLight: "It's not just",
    understandingHeadlineHeavy: "a stiff neck.",
    understandingText: "Neck pain affects over 30% of adults every year, and most people push through it with painkillers or hope it resolves on its own. But persistent neck pain is a signal — often pointing to cervical misalignment, disc issues, or nerve compression. At Erb Family Wellness in Coppell, we use advanced diagnostics to find the structural cause and correct it, not cover it up.",
    empathyCards: [
      "Constant stiffness that never fully goes away",
      "Headaches that start at the base of your skull",
      "Shooting pain into your shoulders or arms",
      "Difficulty turning your head while driving",
      "Tech neck from years at a desk or screen",
    ],
    approachLabel: "OUR APPROACH",
    approachHeadlineLight: "We don't chase",
    approachHeadlineHeavy: "neck pain symptoms.",
    approachHeadlineAccent: "We fix the structure.",
    approachParagraphs: [
      "Dr. David Erb uses detailed X-rays, thermography, and neurological testing to map exactly where your cervical spine has shifted and which nerves are compromised. As a Board-Certified Chiropractic Neurologist (DACNB), he identifies problems other providers miss entirely.",
      "Your corrective care plan may combine precise chiropractic adjustments, SoftWave tissue regeneration, spinal decompression, and rehabilitative exercises — all designed to restore the natural curve of your cervical spine and relieve pressure at the source.",
      "Patients travel from across DFW and beyond for this level of care. With two locations in Coppell and Southlake, advanced corrective neck care is closer than you think.",
    ],
    formSubtitle: "Start your neck pain recovery today.",
    treatments: [
      { name: "Chiropractic", title: "Spinal Correction", description: "Precise cervical adjustments to restore alignment and relieve nerve pressure.", href: "/services/spinal-correction", imagePlaceholder: "Spinal Correction Photo" },
      { name: "Regenerative", title: "SoftWave Therapy", description: "Acoustic wave technology to reduce inflammation and accelerate tissue repair.", href: "/services/softwave", imagePlaceholder: "SoftWave Therapy Photo" },
      { name: "Non-Surgical", title: "Spinal Decompression", description: "Gentle motorized traction to decompress cervical discs and relieve nerve roots.", href: "/services/spinal-decompression", imagePlaceholder: "Spinal Decompression Photo" },
      { name: "Hyperbaric", title: "HBOT", description: "Pressurized oxygen therapy to boost healing and reduce neurological inflammation.", href: "/services/hbot", imagePlaceholder: "HBOT Chamber Photo", badge: "FLAGSHIP" },
      { name: "Rehabilitation", title: "Corrective Exercises", description: "Targeted exercises to rebuild cervical strength and maintain correction.", href: "/services/corrective-exercises", imagePlaceholder: "Corrective Exercise Photo" },
    ],
    symptoms: [
      "Chronic stiffness or soreness in the neck",
      "Pain radiating into the shoulder or arm",
      "Headaches originating at the base of the skull",
      "Limited range of motion when turning your head",
      "Tingling or numbness in the hands or fingers",
      "Grinding or popping sounds with neck movement",
      "Pain that worsens after long periods at a computer",
      "Muscle spasms in the neck or upper back",
      "Neck pain after a car accident or whiplash event",
      "Difficulty finding a comfortable sleeping position",
    ],
    testimonials: [
      { quote: "I had neck pain for years that no one could figure out. Dr. Erb found the misalignment on the first visit and my headaches are finally gone after three months of corrective care.", author: "Coppell patient" },
      { quote: "After my car accident I couldn't turn my head. The team at Erb Family Wellness got me back to normal — no surgery, no drugs. I'm so grateful.", author: "Auto injury patient" },
    ],
    faq: [
      { question: "What causes chronic neck pain?", answer: "Common causes include cervical misalignment, herniated or bulging discs, degenerative disc disease, whiplash injuries, poor posture, and nerve compression. Dr. Erb uses X-rays and neurological testing to identify your specific cause." },
      { question: "Can neck pain cause headaches?", answer: "Yes. Cervicogenic headaches originate from structural problems in the cervical spine. When vertebrae are misaligned or nerves are compressed, pain often radiates into the head. Correcting the cervical structure frequently eliminates these headaches." },
      { question: "Is chiropractic safe for neck pain?", answer: "Corrective chiropractic care is one of the safest and most effective treatments for neck pain. Dr. Erb has 28 years of experience and uses precise, gentle techniques guided by diagnostic imaging." },
      { question: "How long does neck pain treatment take?", answer: "It depends on the severity and underlying cause. Some patients experience significant relief within weeks, while structural correction of the cervical curve typically takes several months. Dr. Erb will outline a clear plan after your evaluation." },
      { question: "Do you treat tech neck and posture-related pain?", answer: "Absolutely. Forward head posture and tech neck are among the most common conditions we see. Dr. Erb's corrective approach restores the natural cervical curve rather than simply treating pain." },
    ],
  },
  {
    slug: "sciatica",
    name: "Sciatica",
    heroLight: "Sciatica Treatment",
    heroHeavy: "in Coppell & Southlake.",
    heroSub: "Stop the shooting leg pain at its source — not with injections, but with corrective care that addresses why your sciatic nerve is compressed.",
    metaTitle: "Sciatica Treatment Coppell TX | Erb Family Wellness",
    metaDesc: "Sciatica treatment in Coppell & Southlake TX. Non-surgical corrective care, spinal decompression, SoftWave. Call (972) 393-6262.",
    stats: ["28 Years Treating Sciatica", "Non-Surgical Solutions", "2 DFW Locations"],
    understandingLabel: "UNDERSTANDING SCIATICA",
    understandingHeadlineLight: "That shooting leg pain",
    understandingHeadlineHeavy: "has a source.",
    understandingText: "Sciatica is not a diagnosis — it is a symptom of something pressing on your sciatic nerve. Whether it is a herniated disc, spinal stenosis, or pelvic misalignment, the burning, tingling, or numbness running down your leg will not stop until the underlying compression is resolved. At Erb Family Wellness in Coppell, we find exactly where and why the nerve is compromised.",
    empathyCards: [
      "Burning or shooting pain from the low back into your leg",
      "Numbness or tingling in your foot or toes",
      "Pain so severe you cannot sit, stand, or sleep",
      "Told you need injections or surgery",
      "Temporary relief that never lasts",
    ],
    approachLabel: "OUR APPROACH",
    approachHeadlineLight: "We trace sciatica",
    approachHeadlineHeavy: "to its origin.",
    approachHeadlineAccent: "Then we correct it.",
    approachParagraphs: [
      "Dr. David Erb uses advanced imaging and neurological assessment to pinpoint whether your sciatica stems from a disc herniation, spinal stenosis, degenerative changes, or pelvic misalignment. As a Board-Certified Chiropractic Neurologist, he evaluates nerve function at a level most providers simply do not.",
      "Treatment may include spinal decompression to relieve disc pressure, corrective adjustments to realign the lumbar spine, SoftWave therapy to reduce inflammation around the nerve root, and targeted exercises to stabilize the correction. HBOT can accelerate nerve healing at the cellular level.",
    ],
    formSubtitle: "Get relief from sciatica — without surgery.",
    treatments: [
      { name: "Non-Surgical", title: "Spinal Decompression", description: "Motorized traction to reduce disc bulge and relieve sciatic nerve compression.", href: "/services/spinal-decompression", imagePlaceholder: "Spinal Decompression Photo" },
      { name: "Chiropractic", title: "Spinal Correction", description: "Precise lumbar and pelvic adjustments to remove pressure from the sciatic nerve.", href: "/services/spinal-correction", imagePlaceholder: "Spinal Correction Photo" },
      { name: "Regenerative", title: "SoftWave Therapy", description: "Shockwave technology to reduce nerve root inflammation and promote tissue repair.", href: "/services/softwave", imagePlaceholder: "SoftWave Therapy Photo" },
      { name: "Hyperbaric", title: "HBOT", description: "800% stem cell growth to accelerate nerve healing and reduce inflammation.", href: "/services/hbot", imagePlaceholder: "HBOT Chamber Photo", badge: "FLAGSHIP" },
      { name: "Rehabilitation", title: "Corrective Exercises", description: "Custom protocols to stabilize the lumbar spine and prevent recurrence.", href: "/services/corrective-exercises", imagePlaceholder: "Corrective Exercise Photo" },
    ],
    symptoms: [
      "Shooting pain from the lower back into one or both legs",
      "Burning or electric sensations down the back of the thigh",
      "Numbness or tingling in the foot or toes",
      "Weakness in the leg or difficulty walking",
      "Pain that worsens when sitting for extended periods",
      "Sharp pain when standing up from a seated position",
      "Low back pain accompanied by leg symptoms",
      "Pain that intensifies with coughing or sneezing",
      "Difficulty sleeping due to leg pain",
      "Hip pain on one side that radiates downward",
    ],
    testimonials: [
      { quote: "I could barely walk when I came in. The sciatica was constant. After spinal decompression and adjustments with Dr. Erb, I am pain-free for the first time in two years.", author: "Sciatica recovery patient" },
      { quote: "Two other doctors told me I needed surgery. Dr. Erb and his team got me better without it. I wish I had come here first.", author: "DFW patient" },
    ],
    faq: [
      { question: "What is the most common cause of sciatica?", answer: "The most common cause is a herniated or bulging disc in the lumbar spine pressing on the sciatic nerve root. Other causes include spinal stenosis, degenerative disc disease, spondylolisthesis, and piriformis syndrome. Dr. Erb uses imaging and neurological testing to determine your specific cause." },
      { question: "Can sciatica be treated without surgery?", answer: "Yes. The majority of sciatica cases respond well to non-surgical corrective care. Erb Family Wellness offers spinal decompression, corrective adjustments, SoftWave therapy, and HBOT — all designed to relieve nerve compression and promote healing without surgical intervention." },
      { question: "How long does sciatica treatment take?", answer: "Many patients begin experiencing relief within the first few weeks. Full correction of the underlying structural problem typically takes two to four months depending on severity. Dr. Erb creates a personalized plan after your initial evaluation." },
      { question: "Will sciatica come back after treatment?", answer: "When the underlying cause is corrected — not just managed — the recurrence rate is much lower. Dr. Erb's corrective approach addresses the structural problem, and maintenance exercises help you maintain the correction long-term." },
      { question: "Is sciatica the same as back pain?", answer: "No. Sciatica specifically involves pain, numbness, or tingling that travels along the sciatic nerve into the buttock and leg. While it often accompanies back pain, the leg symptoms distinguish it and point to nerve involvement that requires targeted treatment." },
      { question: "Do you treat sciatica from car accidents?", answer: "Yes. Auto accidents frequently cause disc herniations and spinal misalignments that compress the sciatic nerve. We see many post-accident sciatica patients at both our Coppell and Southlake locations." },
    ],
  },
  {
    slug: "headaches",
    name: "Headaches & Migraines",
    heroLight: "Headache & Migraine Treatment",
    heroHeavy: "in Coppell & Southlake.",
    heroSub: "Most headaches have a structural cause that medication will never fix. We find it and correct it.",
    metaTitle: "Headache Treatment Coppell TX | Erb Family Wellness",
    metaDesc: "Headache & migraine treatment in Coppell TX. Corrective chiropractic for cervicogenic headaches & migraines. Call (972) 393-6262.",
    stats: ["28 Years of Results", "Root-Cause Approach", "2 DFW Locations"],
    understandingLabel: "UNDERSTANDING HEADACHES",
    understandingHeadlineLight: "Painkillers don't fix",
    understandingHeadlineHeavy: "headaches.",
    understandingText: "Over 45 million Americans suffer from chronic headaches, and most rely on medication that only numbs the pain temporarily. But headaches — including migraines, tension headaches, and cluster headaches — often originate from structural problems in the cervical spine. Misaligned vertebrae, compressed nerves, and restricted blood flow are root causes that medication cannot address. At Erb Family Wellness in Coppell, we correct the structure so the headaches stop.",
    empathyCards: [
      "Headaches multiple times per week",
      "Migraines with aura, nausea, or light sensitivity",
      "Tension that starts in the neck and wraps around your head",
      "Medication that barely takes the edge off anymore",
      "Missed work and missed life because of headache days",
    ],
    approachLabel: "OUR APPROACH",
    approachHeadlineLight: "We treat the cause,",
    approachHeadlineHeavy: "not the headache.",
    approachHeadlineAccent: "That's the difference.",
    approachParagraphs: [
      "Dr. David Erb begins with a thorough neurological examination, cervical X-rays, and thermographic imaging to identify misalignments, nerve interference, and vascular restrictions in the upper cervical spine. As a DACNB-certified chiropractic neurologist, he evaluates brain-body communication that most headache providers never assess.",
      "Your plan may combine corrective cervical adjustments, SoftWave therapy to reduce inflammation, nutritional support for migraine triggers, and targeted exercises to restore proper cervical curvature. Patients with severe or long-standing migraines may also benefit from HBOT to reduce neurological inflammation.",
      "This is why patients across the DFW metroplex — and beyond — trust Erb Family Wellness for headache and migraine care that actually works.",
    ],
    formSubtitle: "Ready to break the headache cycle? Start here.",
    treatments: [
      { name: "Chiropractic", title: "Spinal Correction", description: "Precise cervical adjustments to restore alignment and relieve nerve interference causing headaches.", href: "/services/spinal-correction", imagePlaceholder: "Spinal Correction Photo" },
      { name: "Regenerative", title: "SoftWave Therapy", description: "Acoustic wave therapy to reduce cervical inflammation and promote tissue healing.", href: "/services/softwave", imagePlaceholder: "SoftWave Therapy Photo" },
      { name: "Hyperbaric", title: "HBOT", description: "Pressurized oxygen to reduce neurological inflammation and support brain health.", href: "/services/hbot", imagePlaceholder: "HBOT Chamber Photo", badge: "FLAGSHIP" },
      { name: "Diagnostics", title: "Thermography", description: "Non-invasive thermal imaging to detect nerve dysfunction and inflammation patterns.", href: "/services/thermography", imagePlaceholder: "Thermography Photo" },
      { name: "Nutritional", title: "Nutrition Counseling", description: "Identify dietary triggers and nutritional deficiencies that contribute to migraines.", href: "/services/nutrition", imagePlaceholder: "Nutrition Photo" },
    ],
    symptoms: [
      "Frequent tension headaches at the base of the skull",
      "Migraines with visual aura or light sensitivity",
      "Headaches accompanied by nausea or dizziness",
      "Pain that starts in the neck and radiates over the head",
      "Headaches triggered by stress, weather, or certain foods",
      "Chronic daily headaches unresponsive to medication",
      "Cluster headaches with severe one-sided pain",
      "Jaw tension or TMJ-related headaches",
      "Headaches after concussion or head injury",
      "Brain fog or difficulty concentrating alongside headaches",
      "Headaches that worsen with screen time or reading",
    ],
    testimonials: [
      { quote: "I had migraines three to four times a week for over a decade. After Dr. Erb corrected my cervical curve, I get maybe one a month. It changed my life.", author: "Long-term migraine patient" },
      { quote: "My daughter was missing school constantly because of headaches. Dr. Erb found the problem in her neck that nobody else caught. She is back to being a normal kid.", author: "Parent of pediatric patient" },
      { quote: "I tried every medication, every specialist. Dr. Erb was the first person who actually looked at WHY I was getting headaches instead of just prescribing another pill.", author: "Coppell patient" },
    ],
    faq: [
      { question: "Can a chiropractor really help with migraines?", answer: "Yes. Research shows that cervical spinal misalignment and nerve interference are common contributors to migraines. Corrective chiropractic care addresses these structural causes. Dr. Erb has helped hundreds of migraine patients reduce or eliminate their headaches over 28 years of practice." },
      { question: "What is a cervicogenic headache?", answer: "A cervicogenic headache originates from problems in the cervical spine — misaligned vertebrae, compressed nerves, or tight muscles in the neck. The pain is referred into the head but the source is the neck. Corrective chiropractic care is the most effective treatment for this type of headache." },
      { question: "How quickly will I see results for my headaches?", answer: "Many patients notice a reduction in headache frequency and intensity within the first few weeks. Long-term resolution typically requires correcting the underlying cervical structure, which may take several months depending on the severity of misalignment." },
      { question: "Do you treat children with headaches?", answer: "Yes. Headaches in children are often related to spinal misalignment from birth trauma, sports, or poor posture. Dr. Erb uses gentle, age-appropriate techniques and has extensive experience with pediatric patients at the Coppell and Southlake offices." },
      { question: "What if I have tried everything for my headaches?", answer: "Many of our patients come to us after years of failed treatments — medications, Botox, nerve blocks, even surgery. The difference is that we look for structural and neurological causes that other providers do not assess. Our diagnostic tools include thermography, X-rays, and neurological testing." },
    ],
  },
  {
    slug: "neuropathy",
    name: "Neuropathy",
    heroLight: "Neuropathy Treatment",
    heroHeavy: "in Coppell & Southlake.",
    heroSub: "Numbness, tingling, and burning in your hands or feet does not have to be permanent. We treat neuropathy at the nerve — not just the symptom.",
    metaTitle: "Neuropathy Treatment Coppell TX | Erb Family Wellness",
    metaDesc: "Neuropathy treatment in Coppell TX. HBOT, SoftWave, corrective chiropractic for nerve damage & peripheral neuropathy. Call (972) 393-6262.",
    stats: ["Advanced Nerve Therapies", "HBOT + SoftWave Available", "2 DFW Locations"],
    understandingLabel: "UNDERSTANDING NEUROPATHY",
    understandingHeadlineLight: "Your nerves are damaged.",
    understandingHeadlineHeavy: "But they can heal.",
    understandingText: "Peripheral neuropathy affects over 20 million Americans, causing numbness, tingling, burning, and weakness — most often in the hands and feet. Conventional medicine typically manages symptoms with medications like Gabapentin or Lyrica, but these drugs do nothing to repair the damaged nerves. At Erb Family Wellness in Coppell, we use advanced therapies that stimulate actual nerve regeneration and restore function.",
    empathyCards: [
      "Numbness or tingling in your hands or feet",
      "Burning pain that medications barely control",
      "Difficulty walking or maintaining balance",
      "Told there is nothing more that can be done",
      "Worsening symptoms despite current treatment",
      "Fear of losing more feeling or function",
    ],
    approachLabel: "OUR APPROACH",
    approachHeadlineLight: "We regenerate nerves.",
    approachHeadlineHeavy: "Not just manage symptoms.",
    approachParagraphs: [
      "Dr. David Erb combines multiple advanced therapies to address neuropathy at the nerve level. Hyperbaric Oxygen Therapy (HBOT) delivers concentrated oxygen to damaged nerve tissue, triggering up to 800% stem cell growth and promoting actual nerve regeneration. SoftWave therapy uses acoustic waves to stimulate blood flow and reduce inflammation around affected nerves.",
      "As a Board-Certified Chiropractic Neurologist (DACNB), Dr. Erb also evaluates spinal alignment and neurological function to determine whether nerve compression in the spine is contributing to your peripheral symptoms. Many patients with neuropathy have an undetected spinal component that must be addressed for complete recovery.",
      "Our Coppell and Southlake offices offer a combination of therapies unavailable anywhere else in the DFW area — giving neuropathy patients real hope for improvement.",
    ],
    formSubtitle: "Take the first step toward nerve recovery.",
    treatments: [
      { name: "Hyperbaric", title: "HBOT", description: "800% stem cell growth. Pressurized oxygen to regenerate damaged nerve tissue.", href: "/services/hbot", imagePlaceholder: "HBOT Chamber Photo", badge: "FLAGSHIP" },
      { name: "Regenerative", title: "SoftWave Therapy", description: "Acoustic waves to restore blood flow and reduce nerve inflammation.", href: "/services/softwave", imagePlaceholder: "SoftWave Therapy Photo" },
      { name: "Chiropractic", title: "Spinal Correction", description: "Correct spinal misalignments that may be compressing nerves contributing to neuropathy.", href: "/services/spinal-correction", imagePlaceholder: "Spinal Correction Photo" },
      { name: "Diagnostics", title: "Blood Microscopy", description: "Live blood analysis to identify metabolic and nutritional factors affecting nerve health.", href: "/services/blood-microscopy", imagePlaceholder: "Blood Microscopy Photo" },
      { name: "Nutritional", title: "Nutrition Counseling", description: "Address nutritional deficiencies and blood sugar imbalances that damage nerves.", href: "/services/nutrition", imagePlaceholder: "Nutrition Photo" },
    ],
    symptoms: [
      "Numbness or reduced sensation in the hands or feet",
      "Tingling or pins-and-needles sensations",
      "Burning pain in the extremities",
      "Sharp or stabbing nerve pain",
      "Difficulty with balance or coordination",
      "Muscle weakness in the hands or feet",
      "Sensitivity to touch or temperature changes",
      "Dropping objects or difficulty gripping",
      "Pain that worsens at night",
      "Cramping or twitching in affected areas",
      "Cold hands or feet with poor circulation",
      "Loss of reflexes in the ankles or wrists",
    ],
    testimonials: [
      { quote: "I was told my neuropathy was permanent and I would just have to live with the numbness. After HBOT and SoftWave at Erb Family Wellness, the feeling in my feet is coming back. I am amazed.", author: "Neuropathy recovery patient" },
      { quote: "The burning in my hands was constant. Gabapentin made me foggy but did not fix anything. Dr. Erb's approach actually treats the nerves. I finally have hope.", author: "Coppell patient" },
      { quote: "As a diabetic with neuropathy, I was losing sensation fast. The combination of HBOT, nutrition changes, and chiropractic care here has made a significant difference.", author: "Diabetic neuropathy patient" },
    ],
    faq: [
      { question: "Can neuropathy be reversed?", answer: "In many cases, yes — especially when treated early with therapies that promote nerve regeneration. HBOT delivers concentrated oxygen to damaged nerves, stimulating stem cell production and actual tissue repair. Combined with SoftWave and nutritional support, many patients experience significant improvement in sensation and function." },
      { question: "What causes peripheral neuropathy?", answer: "Common causes include diabetes, chemotherapy, autoimmune conditions, spinal nerve compression, nutritional deficiencies (especially B12), alcohol use, and idiopathic (unknown) causes. Dr. Erb uses blood microscopy and comprehensive evaluation to identify contributing factors." },
      { question: "How does HBOT help neuropathy?", answer: "Hyperbaric Oxygen Therapy saturates your body with pure oxygen under pressure, promoting up to 800% increase in stem cell production. This stimulates nerve regeneration, reduces inflammation, and restores blood flow to oxygen-deprived nerve tissue. It is one of the most powerful tools available for neuropathy." },
      { question: "How many HBOT sessions are needed for neuropathy?", answer: "Most neuropathy patients benefit from 20 to 40 HBOT sessions, typically scheduled five days per week. Dr. Erb will assess your condition and recommend a specific protocol. Many patients begin noticing improvement within the first 10 to 15 sessions." },
      { question: "Do you treat chemotherapy-induced neuropathy?", answer: "Yes. Chemotherapy-induced peripheral neuropathy (CIPN) is one of the conditions we see frequently. HBOT and SoftWave therapy can help restore nerve function damaged during cancer treatment." },
      { question: "Is neuropathy treatment covered by insurance?", answer: "Coverage varies by plan and therapy. Our team will help you understand your options. Many patients find that the long-term value of nerve regeneration far exceeds the cost of ongoing symptom management with medications." },
    ],
  },
  {
    slug: "scoliosis",
    name: "Scoliosis",
    heroLight: "Scoliosis Treatment",
    heroHeavy: "in Coppell & Southlake.",
    heroSub: "Corrective chiropractic care for scoliosis in children and adults — with technology and expertise found nowhere else in the DFW metroplex.",
    metaTitle: "Scoliosis Treatment Coppell TX | Erb Family Wellness",
    metaDesc: "Scoliosis treatment in Coppell TX. Corrective chiropractic for children & adults. MaxLiving spinal correction. Call (972) 393-6262.",
    stats: ["28 Years of Spinal Correction", "Children & Adults", "2 DFW Locations"],
    understandingLabel: "UNDERSTANDING SCOLIOSIS",
    understandingHeadlineLight: "Watch and wait",
    understandingHeadlineHeavy: "is not a plan.",
    understandingText: "Scoliosis — an abnormal lateral curvature of the spine — affects roughly 6 to 9 million Americans. For decades, the conventional approach has been to monitor mild curves and recommend bracing or surgery for severe ones. But at Erb Family Wellness in Coppell, we take a corrective approach from day one: identify the curve, understand its cause, and begin actively correcting it before it progresses.",
    empathyCards: [
      "Your child was diagnosed and you were told to just watch it",
      "Uneven shoulders, hips, or a visible spinal curve",
      "Back pain that worsens with age or activity",
      "Told surgery is the only option for correction",
      "Adult scoliosis causing increasing pain and stiffness",
    ],
    approachLabel: "OUR APPROACH",
    approachHeadlineLight: "We correct curves.",
    approachHeadlineHeavy: "Not just observe them.",
    approachHeadlineAccent: "That changes outcomes.",
    approachParagraphs: [
      "Dr. David Erb uses detailed full-spine X-rays and postural analysis to measure the exact degree and pattern of scoliotic curvature. As a MaxLiving-affiliated chiropractor with DACNB board certification, he applies evidence-based spinal correction protocols specifically designed for scoliosis — including mirror-image adjustments, traction, and rehabilitative exercises.",
      "For pediatric patients, early intervention is critical. Curves caught and treated during growth phases respond significantly better to correction. For adult scoliosis patients, our goal is to reduce the curve, relieve pain, improve posture, and prevent further degeneration.",
      "Patients come from across Texas and beyond for Dr. Erb's scoliosis expertise. With the combination of corrective chiropractic, SoftWave, and HBOT at our Coppell and Southlake offices, we offer options that no one else in DFW provides.",
    ],
    formSubtitle: "Start your scoliosis correction plan today.",
    treatments: [
      { name: "Chiropractic", title: "Spinal Correction", description: "Mirror-image adjustments and corrective protocols designed specifically for scoliotic curves.", href: "/services/spinal-correction", imagePlaceholder: "Spinal Correction Photo" },
      { name: "Rehabilitation", title: "Corrective Exercises", description: "Targeted exercise protocols to support spinal correction and prevent curve progression.", href: "/services/corrective-exercises", imagePlaceholder: "Corrective Exercise Photo" },
      { name: "Regenerative", title: "SoftWave Therapy", description: "Acoustic wave therapy to address soft tissue tension and inflammation around the curve.", href: "/services/softwave", imagePlaceholder: "SoftWave Therapy Photo" },
      { name: "Hyperbaric", title: "HBOT", description: "Accelerated cellular healing to support tissue adaptation during structural correction.", href: "/services/hbot", imagePlaceholder: "HBOT Chamber Photo", badge: "FLAGSHIP" },
    ],
    symptoms: [
      "Visibly uneven shoulders or hips",
      "One shoulder blade more prominent than the other",
      "Clothes hanging unevenly on the body",
      "Back pain that worsens with prolonged standing or sitting",
      "Fatigue in the back after physical activity",
      "Difficulty standing up straight",
      "Ribcage appearing uneven or rotated",
      "Pain or stiffness in the mid-back or lower back",
      "Reduced range of motion in the torso",
      "Muscle imbalances or one-sided tightness",
    ],
    testimonials: [
      { quote: "Our daughter was diagnosed with a 22-degree curve at age 12. Her pediatrician said to wait and see. Dr. Erb started corrective care immediately and reduced it to 11 degrees in 10 months. We are so glad we did not wait.", author: "Parent of scoliosis patient" },
      { quote: "I have had scoliosis since I was a teenager and the pain got worse every year. At 48, Dr. Erb's corrective care reduced my curve and eliminated most of my daily pain. I did not know this was possible.", author: "Adult scoliosis patient" },
    ],
    faq: [
      { question: "Can chiropractic care really correct scoliosis?", answer: "Yes. Corrective chiropractic care using mirror-image adjustments, spinal traction, and rehabilitative exercises has been shown to reduce scoliotic curves. Results depend on the patient's age, curve severity, and commitment to the care plan. Dr. Erb has 28 years of experience with scoliosis correction." },
      { question: "At what age should scoliosis treatment begin?", answer: "As early as possible. Children and adolescents whose spines are still growing respond best to corrective care. However, adult scoliosis patients also benefit significantly from treatment — reducing pain, improving posture, and preventing further progression." },
      { question: "Is scoliosis surgery the only option for severe curves?", answer: "Not necessarily. While surgery may be appropriate for very severe cases, many patients with moderate to severe curves respond well to intensive corrective care. Dr. Erb will evaluate your specific situation and give you an honest assessment of what is achievable without surgery." },
      { question: "How is your scoliosis treatment different from bracing?", answer: "Traditional bracing is passive — it attempts to prevent worsening but does not actively correct the curve. Our approach uses corrective adjustments, traction, and exercises to actively reduce the curve. Many patients achieve results with corrective care that bracing alone cannot provide." },
      { question: "Do you treat both children and adults with scoliosis?", answer: "Yes. We treat scoliosis patients of all ages at both our Coppell and Southlake locations. Pediatric scoliosis and adult degenerative scoliosis require different approaches, and Dr. Erb customizes care plans for each." },
      { question: "How often will I need to come in for scoliosis correction?", answer: "Initial corrective phases typically involve two to three visits per week. As the curve improves, visit frequency decreases. Dr. Erb monitors progress with periodic X-rays and adjusts your plan accordingly." },
    ],
  },
  {
    slug: "herniated-disc",
    name: "Herniated Disc",
    heroLight: "Herniated Disc Treatment",
    heroHeavy: "in Coppell & Southlake.",
    heroSub: "Non-surgical treatment for herniated and bulging discs — with spinal decompression, SoftWave, and corrective care that gets to the root of the problem.",
    metaTitle: "Herniated Disc Treatment Coppell TX | Erb Family Wellness",
    metaDesc: "Herniated disc treatment in Coppell TX. Non-surgical spinal decompression, SoftWave, corrective chiropractic. Call (972) 393-6262.",
    stats: ["Non-Surgical Disc Treatment", "Spinal Decompression Available", "2 DFW Locations"],
    understandingLabel: "UNDERSTANDING HERNIATED DISCS",
    understandingHeadlineLight: "A herniated disc",
    understandingHeadlineHeavy: "does not mean surgery.",
    understandingText: "A herniated disc occurs when the soft inner material of a spinal disc pushes through a tear in the outer wall, often pressing on nearby nerves and causing pain, numbness, or weakness. While surgery is sometimes presented as the primary option, the vast majority of herniated discs respond to non-surgical corrective care. At Erb Family Wellness in Coppell, we specialize in treating disc injuries without surgery — using technology no other DFW chiropractor offers.",
    empathyCards: [
      "Severe back or neck pain that came on suddenly",
      "Pain radiating into your arm or leg from a disc",
      "MRI confirmed a herniation and surgery was recommended",
      "Numbness or tingling from nerve compression",
      "Afraid to move because of the pain",
      "Steroid injections that only provided temporary relief",
    ],
    approachLabel: "OUR APPROACH",
    approachHeadlineLight: "We decompress, repair,",
    approachHeadlineHeavy: "and correct.",
    approachHeadlineAccent: "No scalpel required.",
    approachParagraphs: [
      "Dr. David Erb begins with diagnostic imaging and a thorough neurological evaluation to determine the exact location, severity, and nerve involvement of your disc herniation. His DACNB board certification means he evaluates neurological function at a level beyond standard chiropractic assessment.",
      "Spinal decompression therapy uses precise, computer-controlled traction to create negative intradiscal pressure — gently retracting the herniated material and allowing nutrients and oxygen to flow back into the disc for healing. Combined with corrective adjustments, SoftWave tissue regeneration, and HBOT for accelerated cellular repair, this multi-therapy approach gives herniated disc patients the best possible outcome without surgery.",
    ],
    formSubtitle: "Explore non-surgical herniated disc treatment.",
    treatments: [
      { name: "Non-Surgical", title: "Spinal Decompression", description: "Computer-controlled traction to retract disc material and relieve nerve compression.", href: "/services/spinal-decompression", imagePlaceholder: "Spinal Decompression Photo" },
      { name: "Chiropractic", title: "Spinal Correction", description: "Gentle corrective adjustments to restore alignment and reduce stress on damaged discs.", href: "/services/spinal-correction", imagePlaceholder: "Spinal Correction Photo" },
      { name: "Regenerative", title: "SoftWave Therapy", description: "Acoustic waves to reduce disc inflammation and accelerate tissue repair.", href: "/services/softwave", imagePlaceholder: "SoftWave Therapy Photo" },
      { name: "Hyperbaric", title: "HBOT", description: "Concentrated oxygen therapy for accelerated disc and nerve healing at the cellular level.", href: "/services/hbot", imagePlaceholder: "HBOT Chamber Photo", badge: "FLAGSHIP" },
      { name: "Rehabilitation", title: "Corrective Exercises", description: "Stabilization exercises to support the disc and prevent re-herniation.", href: "/services/corrective-exercises", imagePlaceholder: "Corrective Exercise Photo" },
    ],
    symptoms: [
      "Sudden severe pain in the lower back or neck",
      "Pain radiating into the arm (cervical disc) or leg (lumbar disc)",
      "Numbness or tingling in the extremities",
      "Muscle weakness in the affected arm or leg",
      "Pain that worsens with bending, lifting, or twisting",
      "Difficulty standing up straight after bending over",
      "Sciatica symptoms from a lumbar disc herniation",
      "Pain that increases with coughing, sneezing, or straining",
      "Reduced grip strength or difficulty walking",
      "Stiffness and limited range of motion in the spine",
    ],
    testimonials: [
      { quote: "My MRI showed two herniated discs and I was scheduled for surgery. A friend recommended Dr. Erb. After spinal decompression and corrective care, my pain is gone and I canceled the surgery.", author: "Herniated disc recovery patient" },
      { quote: "I herniated a disc at work and could not stand for more than five minutes. The decompression table at Erb Family Wellness was a game changer. I am back to full function.", author: "Coppell patient" },
      { quote: "Dr. Erb and his team treated my herniated disc with a combination of therapies I could not find anywhere else. The HBOT and SoftWave made a real difference in my recovery time.", author: "DFW patient" },
    ],
    faq: [
      { question: "Can a herniated disc heal without surgery?", answer: "Yes. The majority of herniated discs can be successfully treated without surgery. Spinal decompression creates negative pressure that helps retract the herniated material, while corrective chiropractic restores proper alignment. SoftWave and HBOT accelerate the healing process. Dr. Erb has helped many patients avoid surgery over 28 years of practice." },
      { question: "What is spinal decompression and how does it work?", answer: "Spinal decompression uses a computer-controlled traction table to apply precise, gentle pulling force to the spine. This creates negative pressure within the disc, which helps retract herniated material, relieve nerve compression, and draw nutrients and oxygen into the disc for repair." },
      { question: "How long does herniated disc treatment take?", answer: "Most patients undergo 20 to 30 spinal decompression sessions over six to eight weeks, combined with corrective adjustments and supportive therapies. Many patients experience significant pain relief within the first two to three weeks. Full healing and structural correction may take three to six months." },
      { question: "What is the difference between a herniated disc and a bulging disc?", answer: "A bulging disc extends outward evenly, like a hamburger too big for its bun. A herniated disc has a localized tear where inner disc material pushes through. Both can cause pain and nerve compression, and both respond well to spinal decompression and corrective care." },
      { question: "Can I exercise with a herniated disc?", answer: "Specific exercises can actually help a herniated disc heal, but the wrong exercises can make it worse. Dr. Erb prescribes targeted corrective exercises that support healing and stabilize the spine. He will tell you exactly what to do and what to avoid." },
      { question: "Do you treat herniated discs in the neck and lower back?", answer: "Yes. We treat cervical (neck) and lumbar (lower back) disc herniations at both our Coppell and Southlake locations. The treatment approach is tailored to the location and severity of your specific herniation." },
    ],
  },
];

const allSlugs = ["back-pain", "neck-pain", "sciatica", "headaches", "neuropathy", "scoliosis", "herniated-disc"];

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const condition = conditionsData.find((c) => c.slug === slug);
  if (condition) {
    return { title: condition.metaTitle, description: condition.metaDesc };
  }
  const nameMap: Record<string, string> = {
    "neck-pain": "Neck Pain Treatment",
    sciatica: "Sciatica Treatment",
    headaches: "Headache & Migraine Treatment",
    neuropathy: "Neuropathy Treatment",
    scoliosis: "Scoliosis Treatment",
    "herniated-disc": "Herniated Disc Treatment",
  };
  const name = nameMap[slug] || "Condition Treatment";
  return {
    title: `${name} — Erb Family Wellness | Coppell & Southlake, TX`,
    description: `${name} at Erb Family Wellness in Coppell and Southlake, TX. 28 years of corrective care. Call (972) 393-6262.`,
  };
}

export default async function ConditionPage({ params }: Props) {
  const { slug } = await params;
  const condition = conditionsData.find((c) => c.slug === slug);

  if (!condition) {
    if (!allSlugs.includes(slug)) notFound();
    const nameMap: Record<string, string> = {
      "neck-pain": "Neck Pain",
      sciatica: "Sciatica",
      headaches: "Headaches & Migraines",
      neuropathy: "Neuropathy",
      scoliosis: "Scoliosis",
      "herniated-disc": "Herniated Disc",
    };
    return (
      <>
        <PageHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Conditions" }, { label: nameMap[slug] || slug }]}
          titleLight={`${nameMap[slug] || slug} Treatment`}
          titleHeavy="in Coppell & Southlake."
          subtitle="28 years of corrective care with technology no other DFW chiropractor offers."
        />
        <section className="page-section page-section--cream">
          <div className="container-erb" style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 32 }}>
              Full condition page coming soon. Call us to learn more about {nameMap[slug] || "this condition"} treatment.
            </p>
            <a href="tel:9723936262" className="btn btn--teal">(972) 393-6262</a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Conditions" }, { label: condition.name }]}
        titleLight={condition.heroLight}
        titleHeavy={condition.heroHeavy}
        subtitle={condition.heroSub}
      />

      <StatsBar items={condition.stats} />

      {/* UNDERSTANDING */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">{condition.understandingLabel}</span>
              <h2 className="section-headline">
                <span className="light">{condition.understandingHeadlineLight}</span>
                <span className="heavy">{condition.understandingHeadlineHeavy}</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <p style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: 700, margin: "0 auto 56px", textAlign: "center" }}>
              {condition.understandingText}
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={200}>
            <div className="cards-grid cards-grid--3">
              {condition.empathyCards.map((card) => (
                <div key={card} style={{ background: "var(--color-white)", borderRadius: "var(--r-md)", padding: "28px 28px 28px 32px", borderLeft: "4px solid var(--color-olive)", fontSize: 16, fontWeight: 500, color: "var(--color-text-primary)", lineHeight: 1.55, boxShadow: "0 4px 20px rgba(14,24,44,.05)" }}>
                  {card}
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* APPROACH */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <div className="split split--55-45">
            <RevealOnScroll>
              <span className="label">{condition.approachLabel}</span>
              <h2 className="section-headline" style={{ marginBottom: 28 }}>
                <span className="light">{condition.approachHeadlineLight}</span>
                <span className="heavy">{condition.approachHeadlineHeavy}</span>
                {condition.approachHeadlineAccent && (
                  <span className="heavy heavy--teal">{condition.approachHeadlineAccent}</span>
                )}
              </h2>
              <div>
                {condition.approachParagraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.75, marginBottom: 20 }}>{p}</p>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <FormCard subtitle={condition.formSubtitle} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">TREATMENT OPTIONS</span>
              <h2 className="section-headline">
                <span className="light">More options</span>
                <span className="heavy">than anyone in DFW.</span>
              </h2>
              <p className="section-sub">This is why patients travel from around the world.</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="cards-grid cards-grid--3">
              {condition.treatments.slice(0, 3).map((t) => (
                <ServiceCard key={t.title} {...t} />
              ))}
            </div>
          </RevealOnScroll>
          {condition.treatments.length > 3 && (
            <RevealOnScroll delay={200}>
              <div className="cards-grid cards-grid--2" style={{ marginTop: 24, maxWidth: 820, marginLeft: "auto", marginRight: "auto" }}>
                {condition.treatments.slice(3).map((t) => (
                  <ServiceCard key={t.title} {...t} />
                ))}
              </div>
            </RevealOnScroll>
          )}
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <div className="split split--50-50">
            <RevealOnScroll>
              <span className="label">SYMPTOMS WE TREAT</span>
              <h2 className="section-headline">
                <span className="light">Do any of these</span>
                <span className="heavy">sound familiar?</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <div className="checklist">
                {condition.symptoms.map((s) => (
                  <div key={s} className="checklist__item">
                    <span className="checklist__icon">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="var(--color-teal)" fill="none" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {s}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* PATIENT RESULTS */}
      <section className="page-section page-section--navy">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label label--light">PATIENT RESULTS</span>
              <h2 className="section-headline section-headline--light">
                <span className="light">20-year patients.</span>
                <span className="heavy">Life-changing results.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="split split--50-50">
              {condition.testimonials.map((t, i) => (
                <TestimonialCard key={i} quote={t.quote} author={t.author} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">FIND US</span>
              <h2 className="section-headline">
                <span className="light">Two locations.</span>
                <span className="heavy">One level of care.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="split split--50-50">
              {[
                { badge: "Primary Location", name: "Coppell", addr: "255 S Denton Tap Rd Suite 200, Coppell TX 75019", hours: "Mon & Wed: 8:00am - 10:30am, 3:30pm - 6:00pm\nTue: 12:00pm - 3:00pm\nThu: 2:30pm - 5:30pm\nFri: 7:30am - 10:30am\nSat & Sun: Closed" },
                { badge: "Second Location", name: "Southlake", addr: "1845 E Southlake Blvd Suite 140, Southlake TX 76092", hours: "Mon & Wed: 8:00am - 10:30am, 3:30pm - 6:00pm\nTue: 12:00pm - 3:00pm\nThu: 2:30pm - 5:30pm\nFri: 7:30am - 10:30am\nSat & Sun: Closed" },
              ].map((loc) => (
                <div key={loc.name} className="loc-card">
                  <p className="loc-card__badge">{loc.badge}</p>
                  <h3 className="loc-card__name">{loc.name}</h3>
                  <div className="loc-card__detail">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                    </svg>
                    {loc.addr}
                  </div>
                  <div className="loc-card__detail">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="var(--color-teal)" strokeWidth="1.5">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <a href="tel:9723936262">(972) 393-6262</a>
                  </div>
                  <div className="loc-card__hours">
                    <h4>Hours</h4>
                    <p style={{ whiteSpace: "pre-line" }}>{loc.hours}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <div className="split split--40-60">
            <RevealOnScroll>
              <span className="label">COMMON QUESTIONS</span>
              <h2 className="section-headline">
                <span className="light">{condition.name}</span>
                <span className="heavy">questions.</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <FAQ items={condition.faq} />
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
