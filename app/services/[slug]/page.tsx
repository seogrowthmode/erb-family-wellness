import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import StatsBar from "@/components/StatsBar";
import FormCard from "@/components/FormCard";
import FAQ from "@/components/FAQ";
import RevealOnScroll from "@/components/RevealOnScroll";
import ServiceCard from "@/components/ServiceCard";

type ServiceData = {
  slug: string;
  name: string;
  heroLight: string;
  heroHeavy: string;
  heroSub: string;
  metaTitle: string;
  metaDesc: string;
  stats: string[];
  label: string;
  headlineLight: string;
  headlineHeavy: string;
  paragraphs: string[];
  imagePlaceholder: string;
  formSubtitle: string;
  formSubmitText: string;
  scienceLabel: string;
  scienceHeadlineLight: string;
  scienceHeadlineHeavy: string;
  scienceCards: { title: string; desc: string }[];
  comparisonLeft?: { number: string; label: string };
  comparisonRight?: { number: string; label: string };
  steps: { title: string; desc: string }[];
  conditions: string[];
  differentiators: { title: string; desc: string }[];
  faq: { question: string; answer: string }[];
  relatedServices: { name: string; title: string; description: string; href: string; imagePlaceholder: string }[];
};

const servicesData: ServiceData[] = [
  {
    slug: "hbot",
    name: "Hyperbaric Oxygen Therapy",
    heroLight: "Hyperbaric Oxygen",
    heroHeavy: "Therapy",
    heroSub: "800% stem cell growth. Neurological recovery. Cellular regeneration. The most advanced healing technology in DFW.",
    metaTitle: "Hyperbaric Oxygen Therapy (HBOT) — Coppell & Southlake, TX",
    metaDesc: "800% stem cell growth. Neurological recovery. Cellular regeneration. Experience Hyperbaric Oxygen Therapy at Erb Family Wellness — the most advanced healing technology in DFW.",
    stats: ["800% Stem Cell Growth", "~100% Oxygen", "Non-Invasive"],
    label: "ABOUT HBOT",
    headlineLight: "Welcome to",
    headlineHeavy: "the future of healing.",
    paragraphs: [
      "Hyperbaric Oxygen Therapy delivers ~100% pure oxygen in a pressurized chamber, dramatically increasing the oxygen concentration in your blood and tissues.",
      "Research shows HBOT can stimulate up to 800% stem cell growth, accelerating your body's natural healing processes at the cellular level.",
      "At Erb Family Wellness, HBOT is a cornerstone of our advanced healing approach — used for neurological recovery, stroke rehabilitation, traumatic brain injury, sports injuries, and chronic conditions.",
    ],
    imagePlaceholder: "Patient inside clear HBOT chamber. Futuristic medical setting.",
    formSubtitle: "Experience HBOT at Erb Family Wellness.",
    formSubmitText: "Book My HBOT Consultation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "Why oxygen",
    scienceHeadlineHeavy: "changes everything.",
    scienceCards: [
      { title: "Cellular Regeneration", desc: "800% increase in stem cell production. Your body's own repair mechanisms, supercharged." },
      { title: "Neurological Recovery", desc: "Increased oxygen delivery to the brain supports recovery from stroke, TBI, and neurological conditions." },
      { title: "Anti-Inflammatory", desc: "Pressurized oxygen reduces inflammation at the cellular level, addressing root causes of chronic conditions." },
    ],
    comparisonLeft: { number: "21%", label: "Normal Air Oxygen" },
    comparisonRight: { number: "~100%", label: "HBOT Pure Oxygen" },
    steps: [
      { title: "Consultation", desc: "Dr. Erb evaluates your condition and determines if HBOT is right for your healing plan." },
      { title: "Enter the Chamber", desc: "You relax in our comfortable, clear hyperbaric chamber. Read, rest, or simply breathe." },
      { title: "Pressurization", desc: "The chamber gradually pressurizes, delivering ~100% oxygen to every cell in your body." },
      { title: "Recovery & Results", desc: "Sessions typically last 60-90 minutes. Many patients report feeling energized immediately." },
    ],
    conditions: ["Stroke Recovery", "Traumatic Brain Injury", "Concussion", "Sports Injuries", "Chronic Pain", "Neuropathy", "Post-Surgical Healing", "Wound Healing", "Lyme Disease", "Fibromyalgia", "Autism Spectrum", "Anti-Aging", "Neurological Conditions"],
    differentiators: [
      { title: "2012 London Olympics", desc: "Dr. Erb's Olympic credentials mean you're treated by a world-class provider, not just a technician." },
      { title: "28 Years Experience", desc: "HBOT is part of a comprehensive corrective care plan — not offered in isolation." },
      { title: "Advanced Tech Stack", desc: "HBOT combined with SoftWave, Thermography, Blood Microscopy, and spinal correction for total healing." },
    ],
    faq: [
      { question: "How many HBOT sessions will I need?", answer: "Treatment plans vary by condition. Some patients see results in 10-20 sessions, while chronic conditions may require 40+. Dr. Erb will create a custom plan." },
      { question: "Is HBOT safe?", answer: "Yes. HBOT is FDA-recognized and has been used safely for decades. Side effects are minimal — most patients report only mild ear pressure." },
      { question: "Can HBOT help with neurological conditions?", answer: "Yes. Increased oxygen delivery to the brain supports recovery from stroke, TBI, concussion, and other neurological conditions. This is one of Dr. Erb's specialties as a Board-Certified Chiropractic Neurologist." },
      { question: "What does an HBOT session feel like?", answer: "Most patients describe it as relaxing. You lie comfortably in the chamber, breathing normally. You may feel mild ear pressure during pressurization, similar to an airplane." },
    ],
    relatedServices: [
      { name: "Service", title: "SoftWave Therapy", description: "Targeted shockwaves for tissue regeneration.", href: "/services/softwave", imagePlaceholder: "SoftWave therapy device" },
      { name: "Service", title: "Thermography", description: "AlfaSight 120-point body mapping.", href: "/services/thermography", imagePlaceholder: "AlfaSight thermal scan" },
      { name: "Service", title: "Blood Microscopy", description: "Cellular health analysis from a single drop.", href: "/services/blood-microscopy", imagePlaceholder: "Blood analysis microscope" },
      { name: "Service", title: "Spinal Correction", description: "Advanced corrective chiropractic care.", href: "/services/spinal-correction", imagePlaceholder: "Spinal adjustment technique" },
    ],
  },
  {
    slug: "softwave",
    name: "SoftWave Therapy",
    heroLight: "SoftWave Tissue",
    heroHeavy: "Regeneration Therapy",
    heroSub: "FDA-cleared shockwave technology that activates your body's stem cells, reduces inflammation, and accelerates healing — without surgery or injections.",
    metaTitle: "SoftWave Therapy Coppell TX | Erb Family Wellness",
    metaDesc: "SoftWave tissue regeneration therapy in Coppell TX. Activate stem cells, reduce pain without surgery. Call (972) 393-6262.",
    stats: ["Stem Cell Activation", "FDA-Cleared", "No Downtime"],
    label: "ABOUT SOFTWAVE",
    headlineLight: "Heal at the",
    headlineHeavy: "cellular level.",
    paragraphs: [
      "SoftWave Tissue Regeneration Therapy uses patented electrohydraulic spark gap technology to deliver unfocused shockwaves deep into damaged tissue, activating your body's own stem cells and triggering a powerful healing response.",
      "Unlike cortisone shots that mask pain or surgery that requires lengthy recovery, SoftWave addresses the root cause of pain by increasing blood flow, reducing inflammation, and stimulating tissue repair at the cellular level.",
      "At Erb Family Wellness in Coppell, Dr. David Erb integrates SoftWave into comprehensive corrective care plans — combining it with spinal correction, HBOT, and advanced diagnostics for results that DFW patients travel from across the country to experience.",
    ],
    imagePlaceholder: "SoftWave device being applied to patient's shoulder. Clinical setting with Dr. Erb.",
    formSubtitle: "See if SoftWave can help your condition.",
    formSubmitText: "Book My SoftWave Consultation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "How shockwaves",
    scienceHeadlineHeavy: "trigger healing.",
    scienceCards: [
      { title: "Stem Cell Activation", desc: "Unfocused shockwaves signal your body to send stem cells to the treatment area, jumpstarting tissue regeneration." },
      { title: "Angiogenesis", desc: "SoftWave stimulates the formation of new blood vessels, increasing oxygen and nutrient delivery to damaged tissue." },
      { title: "Inflammation Reduction", desc: "Shockwave energy modulates the inflammatory response, reducing chronic inflammation that drives pain and degeneration." },
      { title: "Mechanotransduction", desc: "Acoustic waves convert mechanical energy into biological signals that activate cellular repair pathways." },
    ],
    comparisonLeft: { number: "0%", label: "Downtime Required" },
    comparisonRight: { number: "72%+", label: "Patients Report Improvement" },
    steps: [
      { title: "Assessment", desc: "Dr. Erb examines your condition, reviews imaging, and determines whether SoftWave is right for your treatment plan." },
      { title: "Gel Application", desc: "Ultrasound gel is applied to the target area to ensure efficient transmission of shockwave energy." },
      { title: "SoftWave Treatment", desc: "The handheld device delivers unfocused shockwaves to the affected area. Sessions last 10-15 minutes." },
      { title: "Immediate Activity", desc: "No downtime — you can return to normal activities right away. Most patients feel improvement within 1-3 sessions." },
    ],
    conditions: ["Plantar Fasciitis", "Shoulder Pain", "Knee Pain", "Tennis Elbow", "Hip Pain", "Back Pain", "Neuropathy", "Carpal Tunnel", "Joint Pain", "Soft Tissue Injuries", "Tendonitis", "Bursitis"],
    differentiators: [
      { title: "Olympic-Level Provider", desc: "Dr. Erb served as chiropractor for USA Wrestling, Judo, and Weightlifting at the 2012 London Olympics — elite athletes trust his judgment." },
      { title: "Integrated Approach", desc: "SoftWave is paired with spinal correction, HBOT, and diagnostics — not offered as a standalone gimmick." },
      { title: "28 Years of Corrective Care", desc: "Since 1998, Erb Family Wellness has focused on fixing root causes, not masking symptoms." },
      { title: "Advanced Diagnostics First", desc: "Thermography and blood microscopy identify the true source of your problem before treatment begins." },
    ],
    faq: [
      { question: "How many SoftWave sessions will I need?", answer: "Most patients see significant improvement in 6-12 sessions. Dr. Erb will design a custom treatment plan based on your specific condition and diagnostic findings." },
      { question: "Does SoftWave therapy hurt?", answer: "Most patients describe a mild tapping sensation. Some areas may be briefly uncomfortable, which actually helps identify the source of your problem. The treatment is well-tolerated." },
      { question: "Is SoftWave covered by insurance?", answer: "SoftWave is not typically covered by insurance, but our team can discuss flexible payment options. Many patients find the cost far less than surgery or ongoing injections." },
      { question: "How is SoftWave different from ultrasound therapy?", answer: "SoftWave uses electrohydraulic shockwaves that penetrate much deeper than ultrasound and trigger a biological healing response including stem cell activation — ultrasound primarily provides surface-level heat therapy." },
      { question: "Can SoftWave replace surgery?", answer: "In many cases, yes. SoftWave has helped patients avoid knee replacements, shoulder surgery, and other invasive procedures. Dr. Erb will evaluate whether it's appropriate for your condition." },
    ],
    relatedServices: [
      { name: "Service", title: "Hyperbaric Oxygen Therapy", description: "800% stem cell growth in a pressurized chamber.", href: "/services/hbot", imagePlaceholder: "HBOT chamber" },
      { name: "Service", title: "Spinal Decompression", description: "Non-surgical disc and nerve relief.", href: "/services/spinal-decompression", imagePlaceholder: "Decompression table" },
      { name: "Service", title: "Neuropathy Treatment", description: "Restore nerve function without drugs.", href: "/services/neuropathy", imagePlaceholder: "Neuropathy exam" },
    ],
  },
  {
    slug: "thermography",
    name: "Digital Thermography",
    heroLight: "Digital",
    heroHeavy: "Thermography",
    heroSub: "AlfaSight 9000 120-point body mapping. See inflammation, nerve dysfunction, and hidden health patterns before symptoms appear.",
    metaTitle: "Thermography Coppell TX | Erb Family Wellness",
    metaDesc: "AlfaSight 9000 digital thermography in Coppell TX. 120-point body mapping reveals hidden dysfunction. Call (972) 393-6262.",
    stats: ["120 Data Points", "Non-Invasive", "Zero Radiation"],
    label: "ABOUT THERMOGRAPHY",
    headlineLight: "See what X-rays",
    headlineHeavy: "can't show you.",
    paragraphs: [
      "The AlfaSight 9000 is one of the most advanced digital thermography systems available, measuring temperature differentials across 120 points on your body to create a detailed map of your nervous system function.",
      "Unlike X-rays or MRIs that show structure, thermography reveals function — identifying areas of inflammation, autonomic nervous system dysfunction, and organ stress patterns that other tests completely miss.",
      "At Erb Family Wellness in Coppell, thermography is a cornerstone diagnostic tool. Dr. David Erb, a Board-Certified Chiropractic Neurologist (DACNB), uses thermographic data to guide treatment decisions and objectively track your healing progress over time.",
    ],
    imagePlaceholder: "AlfaSight 9000 thermal scan display showing color-coded body map. Patient in background.",
    formSubtitle: "Get your 120-point body map today.",
    formSubmitText: "Schedule My Thermography Scan",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "How temperature reveals",
    scienceHeadlineHeavy: "hidden dysfunction.",
    scienceCards: [
      { title: "Autonomic Mapping", desc: "Temperature patterns reveal autonomic nervous system imbalances that correlate with organ dysfunction and chronic disease." },
      { title: "Inflammation Detection", desc: "Thermal differentials identify areas of active inflammation invisible to standard imaging, catching problems early." },
      { title: "Objective Tracking", desc: "Repeated scans provide quantitative data showing exactly how your nervous system is responding to care over time." },
    ],
    comparisonLeft: { number: "0", label: "Radiation Exposure" },
    comparisonRight: { number: "120", label: "Data Points Mapped" },
    steps: [
      { title: "Preparation", desc: "You acclimate in a temperature-controlled room for 10 minutes to establish baseline skin temperatures." },
      { title: "120-Point Scan", desc: "The AlfaSight 9000 measures precise temperature readings at 120 anatomical points across your body." },
      { title: "Analysis", desc: "Dr. Erb interprets the thermal patterns, identifying areas of nervous system dysfunction, inflammation, and organ stress." },
      { title: "Care Plan", desc: "Findings are integrated into your corrective care plan. Follow-up scans track your progress objectively." },
    ],
    conditions: ["Chronic Pain Patterns", "Autonomic Dysfunction", "Hidden Inflammation", "Organ Stress", "Nerve Interference", "Pre-Clinical Detection", "Post-Injury Assessment", "Immune Dysfunction", "Digestive Issues", "Hormonal Imbalances"],
    differentiators: [
      { title: "Board-Certified Neurologist", desc: "Dr. Erb holds DACNB credentials — he reads thermographic data with neurological expertise most chiropractors lack." },
      { title: "AlfaSight 9000", desc: "This is not a handheld infrared camera. The AlfaSight 9000 is a medical-grade 120-point system used in clinical research." },
      { title: "Diagnostic-Driven Care", desc: "Thermography findings directly guide your treatment plan — not a sales tool, but a clinical decision-making instrument." },
      { title: "Objective Progress Tracking", desc: "Repeated scans show measurable changes in nervous system function, so you see proof your care is working." },
    ],
    faq: [
      { question: "Is thermography a replacement for X-rays or MRI?", answer: "No — thermography measures function, while X-rays and MRI show structure. They are complementary. Thermography often reveals problems that structural imaging misses entirely." },
      { question: "Does the scan hurt?", answer: "Not at all. Thermography is completely non-invasive and painless. There is no radiation, no contact, and no discomfort. The device simply reads surface temperature." },
      { question: "How long does a thermography session take?", answer: "The full process takes about 30 minutes — 10 minutes of acclimation plus the scan itself. Dr. Erb will review your results and explain the findings in detail." },
      { question: "How often should I get scanned?", answer: "Dr. Erb typically recommends an initial baseline scan, then follow-up scans at key milestones in your care plan to track nervous system improvements objectively." },
      { question: "Can thermography detect cancer?", answer: "Thermography is not a cancer screening tool. It detects thermal patterns associated with inflammation and dysfunction. Any abnormal findings are referred to the appropriate specialist." },
    ],
    relatedServices: [
      { name: "Service", title: "Blood Microscopy", description: "Cellular health analysis from a single drop.", href: "/services/blood-microscopy", imagePlaceholder: "Blood analysis microscope" },
      { name: "Service", title: "Spinal Correction", description: "Advanced corrective chiropractic care.", href: "/services/spinal-correction", imagePlaceholder: "Spinal adjustment technique" },
      { name: "Service", title: "Nutrition Counseling", description: "MaxLiving 5 Essentials nutrition.", href: "/services/nutrition", imagePlaceholder: "Nutrition consultation" },
    ],
  },
  {
    slug: "blood-microscopy",
    name: "Live Blood Microscopy",
    heroLight: "Live Blood",
    heroHeavy: "Microscopy",
    heroSub: "One drop of blood. Thousands of answers. See your cellular health in real time under a darkfield microscope.",
    metaTitle: "Blood Microscopy Coppell TX | Erb Family Wellness",
    metaDesc: "Live blood microscopy & cellular health analysis in Coppell TX. See your blood cells in real time. Call (972) 393-6262.",
    stats: ["Real-Time Analysis", "Single Drop", "Darkfield Microscope"],
    label: "ABOUT BLOOD MICROSCOPY",
    headlineLight: "Your blood tells",
    headlineHeavy: "the whole story.",
    paragraphs: [
      "Live blood microscopy uses a high-powered darkfield microscope to analyze a single drop of your blood in real time, revealing the size, shape, and behavior of your red blood cells, white blood cells, plasma, and more.",
      "This analysis can uncover nutritional deficiencies, oxidative stress, immune dysfunction, digestive issues, and toxicity patterns that standard blood panels completely overlook — because standard labs destroy the living blood before analysis.",
      "At Erb Family Wellness in Coppell, Dr. David Erb uses live blood analysis alongside thermography and comprehensive health assessments to build a complete picture of your internal health, guiding targeted corrective care for patients across DFW and beyond.",
    ],
    imagePlaceholder: "Darkfield microscope view of live blood cells on screen. Dr. Erb pointing at cellular formations.",
    formSubtitle: "See your cellular health in real time.",
    formSubmitText: "Book My Blood Analysis",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "What your blood",
    scienceHeadlineHeavy: "reveals about you.",
    scienceCards: [
      { title: "Red Blood Cell Morphology", desc: "Shape, size, and aggregation patterns of red blood cells reveal iron status, oxidative stress, and circulation quality." },
      { title: "White Blood Cell Activity", desc: "Observe immune cell behavior in real time — activity levels, morphology, and response patterns indicate immune function." },
      { title: "Plasma Quality", desc: "The fluid environment of your blood reveals toxicity burden, liver stress, and the presence of undigested proteins or crystals." },
    ],
    comparisonLeft: { number: "1", label: "Drop of Blood" },
    comparisonRight: { number: "1000s", label: "Cellular Insights" },
    steps: [
      { title: "Finger Prick", desc: "A single drop of blood is taken from your fingertip — quick and virtually painless." },
      { title: "Slide Preparation", desc: "Your blood is placed on a glass slide and immediately viewed under the darkfield microscope." },
      { title: "Live Analysis", desc: "You watch your own blood cells on a high-definition monitor while Dr. Erb explains what he observes in real time." },
      { title: "Targeted Recommendations", desc: "Findings guide specific nutritional, lifestyle, and treatment recommendations tailored to your cellular health." },
    ],
    conditions: ["Nutritional Deficiencies", "Oxidative Stress", "Immune Dysfunction", "Digestive Issues", "Liver Stress", "Toxicity Burden", "Chronic Fatigue", "Inflammation Markers", "Circulation Problems", "Hormonal Imbalances"],
    differentiators: [
      { title: "Real-Time Viewing", desc: "You see your own living blood cells on screen — this is not a lab report you read days later. It is immediate, visual, and educational." },
      { title: "Paired with Thermography", desc: "Blood microscopy combined with AlfaSight thermography gives Dr. Erb a functional health picture no single test can provide." },
      { title: "28 Years of Pattern Recognition", desc: "Dr. Erb has analyzed thousands of blood samples since 1998, giving him pattern recognition skills that newer practitioners lack." },
      { title: "Root-Cause Focus", desc: "Findings drive actionable changes — nutrition protocols, detox support, and care plan adjustments — not just interesting images." },
    ],
    faq: [
      { question: "Is live blood microscopy the same as a regular blood test?", answer: "No. Standard blood tests measure chemical markers in dead, processed blood. Live blood microscopy observes living cells in real time under a darkfield microscope, revealing information about cellular health that lab panels cannot." },
      { question: "Does the finger prick hurt?", answer: "It is a quick prick similar to a blood sugar test. Most patients describe it as a brief pinch. Only a single drop of blood is needed." },
      { question: "What can live blood analysis detect?", answer: "It can reveal red blood cell irregularities, immune activity, oxidative stress, nutritional deficiencies, liver congestion, and toxicity patterns. It is a functional assessment, not a diagnostic test for specific diseases." },
      { question: "How often should I have my blood analyzed?", answer: "Dr. Erb typically recommends an initial analysis, then follow-up sessions at key points in your care plan to track improvements in cellular health and nutritional status." },
      { question: "Is this covered by insurance?", answer: "Live blood microscopy is typically not covered by insurance. Our team can discuss affordable payment options and the value of integrating this analysis into your corrective care plan." },
    ],
    relatedServices: [
      { name: "Service", title: "Digital Thermography", description: "AlfaSight 120-point body mapping.", href: "/services/thermography", imagePlaceholder: "AlfaSight thermal scan" },
      { name: "Service", title: "Nutrition Counseling", description: "MaxLiving 5 Essentials nutrition.", href: "/services/nutrition", imagePlaceholder: "Nutrition consultation" },
      { name: "Service", title: "Hyperbaric Oxygen Therapy", description: "800% stem cell growth in a pressurized chamber.", href: "/services/hbot", imagePlaceholder: "HBOT chamber" },
    ],
  },
  {
    slug: "spinal-correction",
    name: "Spinal Correction",
    heroLight: "Advanced Corrective",
    heroHeavy: "Chiropractic",
    heroSub: "Not just pain relief. Structural correction that restores your spine to its optimal alignment — the foundation of everything we do.",
    metaTitle: "Spinal Correction Coppell TX | Erb Family Wellness",
    metaDesc: "Advanced corrective chiropractic in Coppell TX. Structural spinal correction, not just pain relief. Call (972) 393-6262.",
    stats: ["28 Years Experience", "4.8 Stars (306+ Reviews)", "Structural Correction"],
    label: "OUR CORE SERVICE",
    headlineLight: "This is not",
    headlineHeavy: "your average adjustment.",
    paragraphs: [
      "At Erb Family Wellness, spinal correction is the foundation of everything we do. Unlike traditional chiropractic that focuses on temporary pain relief, Dr. David Erb and Dr. Kimberly Erb practice advanced corrective chiropractic — a systematic approach to restoring your spine's optimal structural alignment.",
      "Using detailed X-ray analysis, postural assessments, and neurological testing, we identify the specific misalignments causing your symptoms. Then we design a phased correction plan that progressively reshapes your spinal structure over time — not just cracks and pops that feel good for a day.",
      "Patients travel from across the country and even internationally to our Coppell and Southlake offices for intensive spinal correction programs. As a MaxLiving affiliate, we integrate spinal correction with the 5 Essentials approach for whole-body transformation.",
    ],
    imagePlaceholder: "Dr. David Erb performing a precise spinal adjustment. Professional clinical setting.",
    formSubtitle: "Start your spinal correction journey today.",
    formSubmitText: "Book My Spinal Evaluation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "Why structure",
    scienceHeadlineHeavy: "determines function.",
    scienceCards: [
      { title: "Structural Alignment", desc: "Misaligned vertebrae create nerve interference that disrupts organ function, immune response, and the body's ability to heal itself." },
      { title: "Neurological Impact", desc: "The spine houses your spinal cord — even millimeters of misalignment can alter nerve signals to every system in your body." },
      { title: "Progressive Correction", desc: "Like braces straighten teeth, corrective chiropractic reshapes spinal structure over time through precise, repeated adjustments." },
      { title: "Whole-Body Health", desc: "Proper spinal alignment improves not just pain, but immune function, energy, sleep, digestion, and overall quality of life." },
    ],
    steps: [
      { title: "Comprehensive Evaluation", desc: "Detailed X-rays, postural analysis, neurological testing, and thermography establish your structural baseline." },
      { title: "Custom Correction Plan", desc: "Dr. Erb designs a phased care plan targeting your specific misalignments with measurable correction goals." },
      { title: "Corrective Adjustments", desc: "Precise, targeted adjustments progressively restore your spine's optimal alignment over weeks and months." },
      { title: "Stabilization & Maintenance", desc: "Once correction is achieved, a maintenance schedule preserves your results and supports long-term health." },
      { title: "Progress Verification", desc: "Follow-up X-rays and thermography scans objectively verify structural changes — you see the proof." },
    ],
    conditions: ["Back Pain", "Neck Pain", "Sciatica", "Herniated Discs", "Scoliosis", "Forward Head Posture", "Headaches & Migraines", "Numbness & Tingling", "Degenerative Disc Disease", "Pinched Nerves", "Poor Posture", "Whiplash", "Sports Injuries", "Joint Dysfunction"],
    differentiators: [
      { title: "2012 London Olympics", desc: "Dr. Erb served as chiropractor for USA Wrestling, Judo, and Weightlifting at the 2012 London Olympics — world-class athletes trust his hands." },
      { title: "Board-Certified Neurologist", desc: "Dr. Erb holds DACNB and CCCN credentials, bringing neurological expertise to every spinal evaluation and adjustment." },
      { title: "Correction, Not Relief", desc: "We measure structural changes with X-rays and thermography. If your spine is not changing, we adjust the plan until it does." },
      { title: "MaxLiving 5 Essentials", desc: "Spinal correction is integrated with nutrition, mindset, oxygen, and exercise for whole-body transformation." },
      { title: "Patients Fly In for Care", desc: "Patients travel from across the US and internationally for Dr. Erb's intensive correction programs — that reputation speaks volumes." },
      { title: "28 Years in Coppell", desc: "Since 1998, Erb Family Wellness has been the DFW leader in corrective chiropractic care with 306+ five-star reviews." },
    ],
    faq: [
      { question: "How is corrective chiropractic different from regular chiropractic?", answer: "Traditional chiropractic focuses on pain relief through general adjustments. Corrective chiropractic uses X-ray analysis to identify specific structural misalignments and designs a phased plan to permanently reshape your spinal structure — like braces for your spine." },
      { question: "How long does spinal correction take?", answer: "Correction timelines vary based on the severity of misalignment, patient age, and compliance. Most patients see measurable structural changes within 3-6 months, with full correction programs lasting 12-24 months." },
      { question: "Will I need to come in frequently?", answer: "Initial correction phases typically require 2-3 visits per week. As your spine stabilizes, visit frequency decreases. Maintenance patients typically come 1-4 times per month." },
      { question: "Can you help with scoliosis?", answer: "Yes. Dr. Erb has extensive experience with scoliotic spines. While the approach depends on the type and severity of the curve, corrective chiropractic can reduce curvature and improve function in many cases." },
      { question: "Do you take X-rays?", answer: "Yes. Detailed X-rays are essential for corrective chiropractic. They reveal the exact misalignments that need correction and serve as objective proof of structural changes throughout your care." },
      { question: "Is corrective chiropractic safe for older adults?", answer: "Absolutely. Dr. Erb adjusts his techniques based on age, bone density, and individual health factors. Corrective care improves quality of life at every age." },
    ],
    relatedServices: [
      { name: "Service", title: "Spinal Decompression", description: "Non-surgical disc and nerve relief.", href: "/services/spinal-decompression", imagePlaceholder: "Decompression table" },
      { name: "Service", title: "Corrective Exercises", description: "Home rehab to support spinal correction.", href: "/services/corrective-exercises", imagePlaceholder: "Exercise demonstration" },
      { name: "Service", title: "Digital Thermography", description: "AlfaSight 120-point body mapping.", href: "/services/thermography", imagePlaceholder: "AlfaSight thermal scan" },
      { name: "Service", title: "Hyperbaric Oxygen Therapy", description: "800% stem cell growth in a pressurized chamber.", href: "/services/hbot", imagePlaceholder: "HBOT chamber" },
    ],
  },
  {
    slug: "spinal-decompression",
    name: "Spinal Decompression",
    heroLight: "Non-Surgical Spinal",
    heroHeavy: "Decompression",
    heroSub: "Targeted traction therapy that relieves disc pressure, reduces nerve compression, and promotes disc healing — without surgery.",
    metaTitle: "Spinal Decompression Coppell TX | Erb Family Wellness",
    metaDesc: "Non-surgical spinal decompression in Coppell TX. Disc herniation & sciatica relief without surgery. Call (972) 393-6262.",
    stats: ["Non-Surgical", "FDA-Cleared", "86%+ Success Rate"],
    label: "ABOUT DECOMPRESSION",
    headlineLight: "Give your discs",
    headlineHeavy: "room to heal.",
    paragraphs: [
      "Spinal decompression therapy uses a computerized traction table to gently stretch your spine, creating negative pressure within the disc. This negative pressure draws herniated or bulging disc material back into place and promotes the flow of nutrients, oxygen, and water into the disc for healing.",
      "For patients with herniated discs, bulging discs, sciatica, degenerative disc disease, or spinal stenosis, decompression offers a proven non-surgical alternative with an 86%+ reported success rate in clinical studies.",
      "At Erb Family Wellness in Coppell, Dr. David Erb integrates spinal decompression with corrective chiropractic adjustments, SoftWave therapy, and targeted exercises for comprehensive disc recovery that addresses the root cause — not just symptoms.",
    ],
    imagePlaceholder: "Patient on spinal decompression table. Modern clinical environment.",
    formSubtitle: "Find out if decompression is right for you.",
    formSubmitText: "Book My Decompression Consultation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "How negative pressure",
    scienceHeadlineHeavy: "heals your discs.",
    scienceCards: [
      { title: "Negative Intradiscal Pressure", desc: "Controlled traction creates a vacuum effect inside the disc, pulling herniated material back toward the center and away from compressed nerves." },
      { title: "Nutrient Diffusion", desc: "Decompression cycles promote the flow of water, oxygen, and nutrients into the disc — which has limited blood supply and heals slowly without assistance." },
      { title: "Nerve Decompression", desc: "As disc material retracts and pressure decreases, compressed spinal nerves regain normal function, reducing pain, numbness, and tingling." },
    ],
    comparisonLeft: { number: "$50K+", label: "Average Spinal Surgery Cost" },
    comparisonRight: { number: "86%+", label: "Decompression Success Rate" },
    steps: [
      { title: "Diagnostic Evaluation", desc: "X-rays and exam findings determine the specific discs and nerve roots involved, and whether decompression is appropriate for you." },
      { title: "Table Setup", desc: "You are positioned comfortably on the decompression table with a harness system that targets the affected spinal segment." },
      { title: "Decompression Cycles", desc: "The computerized table applies precise traction forces in cycles — alternating between stretch and relaxation over 20-30 minutes." },
      { title: "Complementary Care", desc: "Decompression sessions are combined with corrective adjustments, SoftWave, and exercises for comprehensive disc healing." },
    ],
    conditions: ["Herniated Discs", "Bulging Discs", "Sciatica", "Degenerative Disc Disease", "Spinal Stenosis", "Pinched Nerves", "Chronic Low Back Pain", "Chronic Neck Pain", "Radiating Leg Pain", "Radiating Arm Pain", "Failed Back Surgery Syndrome"],
    differentiators: [
      { title: "Integrated Protocol", desc: "Decompression is combined with corrective chiropractic, SoftWave, and exercises — not offered as a standalone treatment." },
      { title: "Olympic-Level Provider", desc: "Dr. Erb's experience treating elite athletes at the 2012 London Olympics means you receive world-class spinal care." },
      { title: "Advanced Diagnostics", desc: "Thermography and X-ray analysis ensure decompression targets the exact segments causing your symptoms." },
      { title: "Non-Surgical Alternative", desc: "Most patients who complete their decompression program avoid surgery entirely — saving thousands of dollars and months of recovery." },
    ],
    faq: [
      { question: "How many decompression sessions will I need?", answer: "Most treatment plans include 20-30 sessions over 6-8 weeks. Dr. Erb will design a specific plan based on the severity of your disc condition and your response to initial sessions." },
      { question: "Does spinal decompression hurt?", answer: "No. Most patients find it comfortable and relaxing. The table applies gentle, controlled traction. Some patients even fall asleep during sessions." },
      { question: "Can decompression help after failed back surgery?", answer: "In many cases, yes. Decompression can address residual disc problems and nerve compression that surgery did not fully resolve. Dr. Erb will evaluate your specific situation." },
      { question: "Is spinal decompression the same as inversion therapy?", answer: "No. Inversion tables apply general traction to the entire spine. Spinal decompression uses a computerized system to target specific disc levels with precisely controlled forces and cycling patterns." },
      { question: "How soon will I feel results?", answer: "Many patients notice improvement within the first few sessions. Significant relief typically develops over 2-4 weeks as the disc begins to heal and nerve pressure decreases." },
    ],
    relatedServices: [
      { name: "Service", title: "Spinal Correction", description: "Advanced corrective chiropractic care.", href: "/services/spinal-correction", imagePlaceholder: "Spinal adjustment technique" },
      { name: "Service", title: "SoftWave Therapy", description: "Targeted shockwaves for tissue regeneration.", href: "/services/softwave", imagePlaceholder: "SoftWave therapy device" },
      { name: "Service", title: "Corrective Exercises", description: "Home rehab to support spinal correction.", href: "/services/corrective-exercises", imagePlaceholder: "Exercise demonstration" },
    ],
  },
  {
    slug: "corrective-exercises",
    name: "Corrective Exercises",
    heroLight: "Corrective",
    heroHeavy: "Exercises",
    heroSub: "Targeted rehab exercises that reinforce your spinal corrections and build lasting structural stability — your homework for a healthier spine.",
    metaTitle: "Corrective Exercises Coppell TX | Erb Family Wellness",
    metaDesc: "Corrective exercise programs in Coppell TX. Custom rehab to reinforce spinal correction. Call (972) 393-6262.",
    stats: ["Custom Programs", "At-Home Rehab", "Structural Stability"],
    label: "ABOUT CORRECTIVE EXERCISES",
    headlineLight: "Your spine needs",
    headlineHeavy: "strength to hold correction.",
    paragraphs: [
      "Spinal adjustments move your vertebrae into better alignment — but without targeted exercises to strengthen the muscles, ligaments, and connective tissues that hold that alignment, your spine will drift back to its old patterns.",
      "Corrective exercises at Erb Family Wellness are not generic stretches or gym routines. Each exercise is specifically chosen based on your X-ray findings, postural analysis, and correction goals to reinforce the structural changes Dr. Erb is making with your adjustments.",
      "These targeted movements retrain your muscles and nervous system to support your corrected spinal alignment. Patients in our Coppell and Southlake offices who commit to their exercise program consistently achieve faster, more lasting correction results.",
    ],
    imagePlaceholder: "Patient performing corrective exercise with guidance. Clinical rehab setting.",
    formSubtitle: "Get your custom corrective exercise plan.",
    formSubmitText: "Start My Exercise Program",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "Why muscles must",
    scienceHeadlineHeavy: "support your correction.",
    scienceCards: [
      { title: "Neuromuscular Retraining", desc: "Targeted exercises reprogram muscle firing patterns, teaching your body to maintain corrected spinal alignment automatically." },
      { title: "Ligament Remodeling", desc: "Consistent, specific loading stimulates connective tissue adaptation, gradually reshaping ligaments to support your new spinal structure." },
      { title: "Postural Endurance", desc: "Corrective exercises build the endurance your postural muscles need to maintain alignment throughout your daily activities." },
    ],
    steps: [
      { title: "Assessment", desc: "Dr. Erb analyzes your X-rays, posture, and correction goals to identify exactly which muscle groups need strengthening and which need release." },
      { title: "Custom Program Design", desc: "Your exercise program is designed specifically for your spinal correction phase — initial, corrective, and stabilization exercises differ." },
      { title: "In-Office Training", desc: "Our team demonstrates each exercise and ensures you perform them correctly before you do them at home." },
      { title: "At-Home Execution", desc: "You perform your exercises daily at home — typically 10-15 minutes. Consistency is the key to faster correction." },
      { title: "Progressive Updates", desc: "As your spine corrects, your exercise program evolves to match your current correction phase and stability needs." },
    ],
    conditions: ["Poor Posture", "Forward Head Posture", "Spinal Misalignment", "Muscle Imbalances", "Core Weakness", "Post-Adjustment Instability", "Chronic Back Pain", "Neck Stiffness", "Scoliosis Support", "Post-Injury Rehabilitation"],
    differentiators: [
      { title: "X-Ray Guided", desc: "Exercises are prescribed based on X-ray analysis of your specific misalignments — not generic routines pulled from a chart." },
      { title: "Phase-Specific Programming", desc: "Your exercises change as your spine corrects. Initial-phase exercises differ completely from stabilization-phase exercises." },
      { title: "MaxLiving Integration", desc: "Part of the MaxLiving 5 Essentials approach — exercise, nutrition, mindset, spine, and oxygen work together for total transformation." },
      { title: "Accelerates Correction", desc: "Patients who do their exercises consistently achieve correction milestones 30-50% faster than those who skip them." },
    ],
    faq: [
      { question: "How long do I need to do corrective exercises each day?", answer: "Most programs require 10-15 minutes daily. Consistency matters more than duration — doing your exercises every day is more important than doing them for a long time." },
      { question: "Are these like regular gym exercises?", answer: "No. Corrective exercises are specifically designed to support your spinal correction. They target particular muscle groups and movement patterns based on your X-ray findings. A gym routine cannot replicate this precision." },
      { question: "What if I miss a few days?", answer: "Missing occasional days is not catastrophic, but consistency directly impacts your correction speed. Think of it like wearing braces — the more consistently you follow the plan, the faster your results." },
      { question: "Do I need special equipment?", answer: "Most corrective exercises require minimal equipment — a foam roller, resistance bands, or a wobble disc. Our team will specify exactly what you need, and most items are inexpensive." },
      { question: "Will the exercises change over time?", answer: "Yes. As your spine corrects and stabilizes, Dr. Erb will update your exercise program to match your current correction phase and support the next stage of your healing." },
    ],
    relatedServices: [
      { name: "Service", title: "Spinal Correction", description: "Advanced corrective chiropractic care.", href: "/services/spinal-correction", imagePlaceholder: "Spinal adjustment technique" },
      { name: "Service", title: "Nutrition Counseling", description: "MaxLiving 5 Essentials nutrition.", href: "/services/nutrition", imagePlaceholder: "Nutrition consultation" },
      { name: "Service", title: "Spinal Decompression", description: "Non-surgical disc and nerve relief.", href: "/services/spinal-decompression", imagePlaceholder: "Decompression table" },
    ],
  },
  {
    slug: "nutrition",
    name: "Nutrition Counseling",
    heroLight: "Nutrition",
    heroHeavy: "Counseling",
    heroSub: "MaxLiving 5 Essentials nutrition. Fuel your body for healing, reduce inflammation, and support spinal correction from the inside out.",
    metaTitle: "Nutrition Counseling Coppell TX | Erb Family Wellness",
    metaDesc: "MaxLiving nutrition counseling in Coppell TX. Anti-inflammatory protocols to fuel healing. Call (972) 393-6262.",
    stats: ["MaxLiving Certified", "5 Essentials", "Anti-Inflammatory"],
    label: "ABOUT NUTRITION",
    headlineLight: "You cannot out-adjust",
    headlineHeavy: "a bad diet.",
    paragraphs: [
      "Nutrition is one of the 5 Essentials of the MaxLiving approach practiced at Erb Family Wellness. No amount of spinal adjustments can fully correct a body that is chronically inflamed, nutritionally depleted, or toxic from poor dietary choices.",
      "Dr. David Erb and Dr. Kimberly Erb provide personalized nutrition counseling that addresses inflammation, gut health, hormone balance, and cellular nutrition — guided by findings from live blood microscopy and thermography, not guesswork.",
      "Whether you are healing from a chronic condition, supporting spinal correction, or simply want to optimize your health, our Coppell-based nutrition programs are designed to work synergistically with your corrective care plan for lasting whole-body transformation.",
    ],
    imagePlaceholder: "Dr. Kimberly Erb discussing nutrition plan with patient. Healthy foods and supplements visible.",
    formSubtitle: "Get your personalized nutrition plan.",
    formSubmitText: "Book My Nutrition Consultation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "How nutrition fuels",
    scienceHeadlineHeavy: "healing and correction.",
    scienceCards: [
      { title: "Anti-Inflammatory Nutrition", desc: "Chronic inflammation sabotages spinal correction and healing. Targeted nutrition protocols reduce systemic inflammation at the source." },
      { title: "Cellular Nutrition", desc: "Your cells need specific nutrients to repair tissue, build bone, and support nervous system function during corrective care." },
      { title: "Gut-Brain Connection", desc: "70% of your immune system lives in your gut. Nutritional protocols optimize gut health, improving immune function and neurological health." },
    ],
    steps: [
      { title: "Assessment", desc: "Blood microscopy, thermography findings, and a detailed health history identify your specific nutritional needs and deficiencies." },
      { title: "Custom Protocol", desc: "Dr. Erb designs a nutrition plan tailored to your condition — anti-inflammatory foods, targeted supplementation, and elimination of inflammatory triggers." },
      { title: "Implementation Support", desc: "Our team provides meal planning guidance, supplement recommendations, and practical strategies for making lasting dietary changes." },
      { title: "Progress Monitoring", desc: "Follow-up blood microscopy and thermography track how your cellular health improves as you follow the nutrition protocol." },
    ],
    conditions: ["Chronic Inflammation", "Nutritional Deficiencies", "Weight Management", "Gut Health Issues", "Autoimmune Support", "Hormone Imbalances", "Fatigue & Low Energy", "Blood Sugar Dysregulation", "Toxicity & Detox", "Post-Surgical Healing Support"],
    differentiators: [
      { title: "MaxLiving 5 Essentials", desc: "Nutrition is part of a proven 5-pillar approach — not an afterthought. It integrates with spinal correction, exercise, mindset, and oxygen." },
      { title: "Diagnostic-Driven Nutrition", desc: "Blood microscopy and thermography guide your nutrition plan — we see what your body actually needs, not what a generic diet recommends." },
      { title: "Both Drs. Erb", desc: "Dr. David Erb and Dr. Kimberly Erb both provide nutrition counseling, bringing decades of combined clinical experience." },
      { title: "Sustainable Approach", desc: "We teach you how to eat for life — not a crash diet. Patients maintain their nutritional gains long after their care plan concludes." },
    ],
    faq: [
      { question: "Is this a specific diet program?", answer: "We follow MaxLiving nutritional principles, which emphasize anti-inflammatory, whole-food nutrition. Your specific plan is customized based on your health findings, but the core philosophy is reducing inflammation and supporting cellular health." },
      { question: "Do I need to buy supplements?", answer: "Dr. Erb may recommend specific supplements based on your blood microscopy and thermography findings. We only recommend what your body demonstrably needs — not a standard supplement stack." },
      { question: "Can nutrition counseling help with weight loss?", answer: "Yes. When you reduce inflammation and optimize cellular nutrition, weight loss often follows naturally. However, our primary focus is healing and function, not calorie counting." },
      { question: "How does nutrition affect spinal correction?", answer: "Your discs, ligaments, and bones require specific nutrients to remodel during correction. Chronic inflammation also weakens connective tissue. Proper nutrition directly supports faster, more lasting structural correction." },
      { question: "Will I have to give up everything I enjoy eating?", answer: "The goal is not deprivation — it is replacing inflammatory foods with nutrient-dense alternatives. Most patients discover they feel so much better that they naturally prefer healthier choices." },
    ],
    relatedServices: [
      { name: "Service", title: "Blood Microscopy", description: "Cellular health analysis from a single drop.", href: "/services/blood-microscopy", imagePlaceholder: "Blood analysis microscope" },
      { name: "Service", title: "Corrective Exercises", description: "Home rehab to support spinal correction.", href: "/services/corrective-exercises", imagePlaceholder: "Exercise demonstration" },
      { name: "Service", title: "Digital Thermography", description: "AlfaSight 120-point body mapping.", href: "/services/thermography", imagePlaceholder: "AlfaSight thermal scan" },
    ],
  },
  {
    slug: "neuropathy",
    name: "Neuropathy Treatment",
    heroLight: "Neuropathy",
    heroHeavy: "Treatment",
    heroSub: "Restore nerve function without drugs or surgery. Advanced protocols that address the root cause of numbness, tingling, and burning pain.",
    metaTitle: "Neuropathy Treatment Coppell TX | Erb Family Wellness",
    metaDesc: "Advanced neuropathy treatment in Coppell TX. Restore nerve function without drugs or surgery. Call (972) 393-6262.",
    stats: ["Drug-Free Protocol", "Nerve Regeneration", "Board-Certified Neurologist"],
    label: "ABOUT NEUROPATHY TREATMENT",
    headlineLight: "Neuropathy is not",
    headlineHeavy: "a life sentence.",
    paragraphs: [
      "Peripheral neuropathy — numbness, tingling, burning pain, and loss of sensation in the hands and feet — affects millions of Americans. Most doctors manage it with medications that mask symptoms while the nerves continue to deteriorate.",
      "At Erb Family Wellness, Dr. David Erb takes a fundamentally different approach. As a Board-Certified Chiropractic Neurologist (DACNB), he identifies the root causes of nerve damage and designs protocols that actually restore nerve function using advanced therapies.",
      "Our Coppell-based neuropathy program combines spinal correction to remove nerve interference, SoftWave therapy for nerve regeneration, HBOT for oxygenation, targeted nutrition, and corrective exercises — a multi-modal approach that delivers results drugs cannot match.",
    ],
    imagePlaceholder: "Dr. Erb examining patient's foot sensation. Neurological testing equipment visible.",
    formSubtitle: "Take the first step toward nerve recovery.",
    formSubmitText: "Book My Neuropathy Evaluation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "How nerves",
    scienceHeadlineHeavy: "regenerate and heal.",
    scienceCards: [
      { title: "Nerve Regeneration", desc: "Peripheral nerves can regenerate when given the right conditions — increased blood flow, reduced inflammation, and proper nutrient supply." },
      { title: "Spinal Nerve Root Health", desc: "Many neuropathy cases involve compressed or irritated nerve roots in the spine. Correcting spinal alignment restores proper nerve signal transmission." },
      { title: "Oxygen & Healing", desc: "HBOT delivers concentrated oxygen to damaged nerve tissue, supporting cellular repair and reducing oxidative damage that accelerates nerve degeneration." },
      { title: "Inflammation Reduction", desc: "Chronic inflammation is a primary driver of nerve damage. SoftWave and nutrition protocols address inflammation at the cellular level." },
    ],
    steps: [
      { title: "Neurological Evaluation", desc: "Comprehensive nerve function testing, thermography, and spinal examination identify the type, location, and severity of your neuropathy." },
      { title: "Root Cause Identification", desc: "Dr. Erb determines whether your neuropathy stems from spinal compression, diabetic damage, toxicity, autoimmune factors, or other causes." },
      { title: "Multi-Modal Treatment", desc: "Your custom protocol may include spinal correction, SoftWave, HBOT, nutrition therapy, and targeted exercises — all working together." },
      { title: "Progressive Monitoring", desc: "Regular nerve function testing and thermography scans objectively track your nerve recovery throughout the program." },
    ],
    conditions: ["Peripheral Neuropathy", "Diabetic Neuropathy", "Numbness & Tingling", "Burning Pain", "Balance Problems", "Loss of Sensation", "Chemotherapy-Induced Neuropathy", "Idiopathic Neuropathy", "Carpal Tunnel Syndrome", "Sciatica", "Restless Leg Syndrome"],
    differentiators: [
      { title: "Board-Certified Neurologist", desc: "Dr. Erb holds DACNB credentials — he understands nerve function at a level most chiropractors and even many medical doctors do not." },
      { title: "Multi-Modal Protocol", desc: "We combine 5+ therapies targeting different aspects of nerve healing — not a single-treatment approach that addresses only one factor." },
      { title: "Root Cause, Not Medication", desc: "We identify and address WHY your nerves are damaged. Gabapentin and Lyrica mask symptoms while nerves continue to deteriorate." },
      { title: "Advanced Technology", desc: "HBOT, SoftWave, AlfaSight thermography, and blood microscopy give us tools that most neuropathy clinics do not have." },
      { title: "Objective Measurement", desc: "We track nerve function improvements with quantitative testing — you see measurable progress, not just subjective feelings." },
    ],
    faq: [
      { question: "Can neuropathy actually be reversed?", answer: "In many cases, yes — especially when caught before severe nerve degeneration occurs. Peripheral nerves have the ability to regenerate when given the right conditions. Dr. Erb will assess your specific situation and provide an honest prognosis." },
      { question: "I have been told I just have to live with neuropathy. Is that true?", answer: "That is the standard medical response because medication is the only tool most doctors have. Our multi-modal approach addresses the root causes of nerve damage, and many patients experience significant improvement that their previous doctors said was impossible." },
      { question: "How long does the neuropathy program take?", answer: "Most programs run 12-24 weeks depending on severity. Some patients notice improvement within the first few weeks, while others require more time for nerve regeneration to progress." },
      { question: "Will I need to stop my neuropathy medications?", answer: "We never advise stopping medications without consulting your prescribing physician. As your nerve function improves, your doctor may choose to reduce or eliminate medications. We work alongside your medical team." },
      { question: "Does insurance cover neuropathy treatment?", answer: "Some components of the program may be covered by insurance. Our team will review your coverage and discuss all financial options. Many patients find the program far less expensive than ongoing medication costs." },
    ],
    relatedServices: [
      { name: "Service", title: "SoftWave Therapy", description: "Targeted shockwaves for tissue regeneration.", href: "/services/softwave", imagePlaceholder: "SoftWave therapy device" },
      { name: "Service", title: "Hyperbaric Oxygen Therapy", description: "800% stem cell growth in a pressurized chamber.", href: "/services/hbot", imagePlaceholder: "HBOT chamber" },
      { name: "Service", title: "Spinal Correction", description: "Advanced corrective chiropractic care.", href: "/services/spinal-correction", imagePlaceholder: "Spinal adjustment technique" },
    ],
  },
  {
    slug: "pediatric",
    name: "Pediatric Chiropractic",
    heroLight: "Pediatric",
    heroHeavy: "Chiropractic",
    heroSub: "Gentle, safe chiropractic care for infants, children, and teens. Building healthy spines from the very beginning.",
    metaTitle: "Pediatric Chiropractic Coppell TX | Erb Family Wellness",
    metaDesc: "Gentle pediatric chiropractic in Coppell TX. Safe care for infants, kids & teens. Call (972) 393-6262.",
    stats: ["Gentle Techniques", "All Ages", "Family-Friendly"],
    label: "ABOUT PEDIATRIC CARE",
    headlineLight: "Healthy spines start",
    headlineHeavy: "in childhood.",
    paragraphs: [
      "The birth process itself can create spinal misalignments in newborns. As children grow — learning to crawl, walk, run, and play sports — falls and impacts accumulate. By the time spinal problems cause obvious symptoms, years of damage may have already occurred.",
      "Dr. David Erb and Dr. Kimberly Erb have been caring for children at Erb Family Wellness since 1998. Pediatric chiropractic uses extremely gentle, age-appropriate techniques to detect and correct spinal misalignments before they become chronic adult problems.",
      "Families across Coppell, Southlake, and the DFW metroplex bring their children to Erb Family Wellness because they understand that proactive spinal care during childhood sets the foundation for a lifetime of better health and nervous system function.",
    ],
    imagePlaceholder: "Dr. Kimberly Erb gently adjusting a child's spine. Warm, family-friendly office environment.",
    formSubtitle: "Give your child the gift of a healthy spine.",
    formSubmitText: "Schedule My Child's Evaluation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "Why children need",
    scienceHeadlineHeavy: "spinal checkups.",
    scienceCards: [
      { title: "Developmental Windows", desc: "Children's spines grow rapidly. Misalignments during growth periods can become permanent structural problems if not detected and corrected early." },
      { title: "Nervous System Development", desc: "The spine protects the developing nervous system. Subluxations during childhood can interfere with neurological development, immune function, and organ health." },
      { title: "Prevention Over Treatment", desc: "Correcting small misalignments in childhood is far simpler, faster, and less expensive than addressing decades of accumulated spinal damage as an adult." },
    ],
    steps: [
      { title: "Family Consultation", desc: "We discuss your child's health history, birth experience, developmental milestones, and any concerns you have noticed." },
      { title: "Gentle Examination", desc: "Dr. Erb performs an age-appropriate spinal evaluation using techniques suited to your child's size and developmental stage." },
      { title: "Findings Review", desc: "We explain any findings in clear, parent-friendly language and discuss whether corrective care would benefit your child." },
      { title: "Gentle Adjustments", desc: "Pediatric adjustments use extremely light pressure — often no more than you would use to test the ripeness of a tomato." },
      { title: "Growth Monitoring", desc: "Regular checkups during growth spurts ensure your child's spine develops with proper alignment and optimal nervous system function." },
    ],
    conditions: ["Colic", "Ear Infections", "Torticollis", "Nursing Difficulties", "Sleep Issues", "Growing Pains", "Sports Injuries", "Scoliosis Screening", "ADHD Support", "Immune Support", "Bedwetting", "Posture Problems", "Tech Neck"],
    differentiators: [
      { title: "28 Years with Families", desc: "Dr. David and Dr. Kimberly Erb have been caring for children and families in Coppell since 1998 — they have adjusted thousands of children." },
      { title: "Board-Certified Neurologist", desc: "Dr. Erb's DACNB credentials mean he understands pediatric neurological development at a level most chiropractors do not." },
      { title: "Family Practice", desc: "We care for the whole family — parents and children together. Many families have brought multiple generations to our office." },
      { title: "Extremely Gentle Techniques", desc: "Pediatric adjustments are nothing like adult adjustments. We use fingertip pressure and instrument-assisted techniques designed specifically for growing bodies." },
    ],
    faq: [
      { question: "Is chiropractic safe for babies and children?", answer: "Yes. Pediatric chiropractic is extremely gentle and safe. Adjustments for infants use no more pressure than you would use to test a ripe tomato. Dr. Erb and Dr. Kimberly Erb have been adjusting children safely for 28 years." },
      { question: "At what age can a child be adjusted?", answer: "Newborns can be gently checked and adjusted. In fact, the birth process itself — especially difficult deliveries, forceps, or vacuum extraction — is a common cause of spinal misalignment in infants." },
      { question: "How do I know if my child needs chiropractic care?", answer: "Common signs include frequent ear infections, colic, difficulty nursing on one side, uneven crawling, head tilting, frequent illness, and postural asymmetry. However, many subluxations are asymptomatic — regular checkups catch problems early." },
      { question: "Will my child need to come in as often as adults?", answer: "Children typically respond much faster than adults because their spines are more flexible and have less accumulated damage. Most pediatric patients require fewer visits and shorter care plans." },
      { question: "Do you take X-rays of children?", answer: "X-rays are only taken when clinically necessary and after discussing risks and benefits with parents. Many pediatric evaluations rely on physical examination and postural assessment rather than imaging." },
    ],
    relatedServices: [
      { name: "Service", title: "Prenatal Chiropractic", description: "Safe care for expecting mothers.", href: "/services/prenatal", imagePlaceholder: "Prenatal adjustment" },
      { name: "Service", title: "Spinal Correction", description: "Advanced corrective chiropractic care.", href: "/services/spinal-correction", imagePlaceholder: "Spinal adjustment technique" },
      { name: "Service", title: "Corrective Exercises", description: "Home rehab to support spinal correction.", href: "/services/corrective-exercises", imagePlaceholder: "Exercise demonstration" },
    ],
  },
  {
    slug: "prenatal",
    name: "Prenatal Chiropractic",
    heroLight: "Prenatal",
    heroHeavy: "Chiropractic",
    heroSub: "Safe, gentle chiropractic care for expecting mothers. Support your body through pregnancy, reduce discomfort, and prepare for an easier delivery.",
    metaTitle: "Prenatal Chiropractic Coppell TX | Erb Family Wellness",
    metaDesc: "Prenatal chiropractic care in Coppell TX. Safe pregnancy adjustments for comfort & easier delivery. Call (972) 393-6262.",
    stats: ["Pregnancy-Safe", "Webster Technique", "Natural Birth Support"],
    label: "ABOUT PRENATAL CARE",
    headlineLight: "Your body is building",
    headlineHeavy: "a human. Let us help.",
    paragraphs: [
      "Pregnancy places extraordinary demands on your spine and pelvis. As your baby grows, shifting weight distribution, hormonal changes that loosen ligaments, and postural adaptations create spinal misalignments and pelvic imbalances that cause pain and can even affect your baby's positioning.",
      "Dr. Kimberly Erb specializes in prenatal chiropractic care, using the Webster Technique and other pregnancy-safe methods to maintain pelvic alignment, reduce pregnancy discomfort, and support optimal fetal positioning for a smoother labor and delivery.",
      "Expecting mothers across Coppell, Southlake, and DFW choose Erb Family Wellness because of our 28-year track record of safe, gentle prenatal care and our commitment to supporting natural, healthy pregnancies without medications.",
    ],
    imagePlaceholder: "Dr. Kimberly Erb adjusting pregnant patient on pregnancy pillow. Warm, comfortable setting.",
    formSubtitle: "Support your pregnancy naturally.",
    formSubmitText: "Book My Prenatal Consultation",
    scienceLabel: "THE SCIENCE",
    scienceHeadlineLight: "How alignment supports",
    scienceHeadlineHeavy: "a healthier pregnancy.",
    scienceCards: [
      { title: "Pelvic Balance", desc: "Proper pelvic alignment gives your baby maximum room to develop and move into the optimal head-down position for delivery." },
      { title: "Nervous System Function", desc: "A properly aligned spine ensures clear nerve communication between your brain and reproductive organs throughout pregnancy." },
      { title: "Reduced Labor Time", desc: "Studies show that women receiving chiropractic care during pregnancy experience shorter labor times and reduced need for interventions." },
    ],
    steps: [
      { title: "Prenatal Evaluation", desc: "Dr. Kimberly Erb evaluates your spinal and pelvic alignment, discusses your pregnancy history, and identifies areas of concern." },
      { title: "Pregnancy-Safe Adjustments", desc: "Using the Webster Technique and specialized pregnancy pillows, gentle adjustments restore pelvic balance without any risk to you or your baby." },
      { title: "Progressive Care", desc: "As your pregnancy progresses, care adapts to your changing body — adjustments are modified for each trimester." },
      { title: "Birth Preparation", desc: "Third-trimester care focuses on optimal pelvic alignment and fetal positioning to support your desired birth experience." },
    ],
    conditions: ["Low Back Pain", "Sciatica During Pregnancy", "Pelvic Pain", "Round Ligament Pain", "Breech Baby Positioning", "Hip Pain", "Pubic Symphysis Pain", "Headaches During Pregnancy", "Rib Pain", "Postpartum Recovery"],
    differentiators: [
      { title: "Dr. Kimberly Erb", desc: "A female chiropractor with 28 years of experience who understands pregnancy personally and professionally — many expecting mothers prefer this." },
      { title: "Webster Technique Certified", desc: "The Webster Technique is a specific chiropractic analysis and adjustment for pregnant women that optimizes pelvic function and fetal positioning." },
      { title: "Family Continuity", desc: "After delivery, your newborn can be gently checked and your family can continue care together — prenatal, pediatric, and adult care under one roof." },
      { title: "Drug-Free Comfort", desc: "Chiropractic provides pregnancy pain relief without medications that could affect your developing baby — a safe, natural alternative." },
    ],
    faq: [
      { question: "Is chiropractic safe during pregnancy?", answer: "Yes. Prenatal chiropractic is widely recognized as safe throughout all stages of pregnancy. Dr. Kimberly Erb uses pregnancy-specific techniques and specialized equipment designed for expecting mothers." },
      { question: "Can chiropractic help turn a breech baby?", answer: "The Webster Technique is designed to optimize pelvic alignment and reduce tension in the surrounding ligaments, which can allow a breech baby to turn naturally. It has a high success rate when applied appropriately." },
      { question: "When should I start prenatal chiropractic?", answer: "Ideally, before or early in pregnancy. However, women benefit from chiropractic care at any stage. Many patients begin in the second or third trimester when discomfort increases." },
      { question: "How often should I be adjusted during pregnancy?", answer: "Frequency depends on your specific needs. Many pregnant patients benefit from weekly or bi-weekly visits, with increased frequency in the third trimester as the body prepares for delivery." },
      { question: "Can I continue chiropractic care after delivery?", answer: "Absolutely. Postpartum care helps your body recover from the physical demands of pregnancy and delivery. We also gently check your newborn — many families continue care for years." },
      { question: "Do you have special tables for pregnant patients?", answer: "Yes. We use specialized pregnancy pillows and adjustable tables that comfortably accommodate your growing belly at every stage of pregnancy." },
    ],
    relatedServices: [
      { name: "Service", title: "Pediatric Chiropractic", description: "Gentle care for infants and children.", href: "/services/pediatric", imagePlaceholder: "Child being adjusted" },
      { name: "Service", title: "Spinal Correction", description: "Advanced corrective chiropractic care.", href: "/services/spinal-correction", imagePlaceholder: "Spinal adjustment technique" },
      { name: "Service", title: "Nutrition Counseling", description: "MaxLiving 5 Essentials nutrition.", href: "/services/nutrition", imagePlaceholder: "Nutrition consultation" },
    ],
  },
];

const allSlugs = ["hbot", "softwave", "thermography", "blood-microscopy", "spinal-correction", "spinal-decompression", "corrective-exercises", "nutrition", "neuropathy", "pediatric", "prenatal"];

export async function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (service) {
    return { title: service.metaTitle, description: service.metaDesc };
  }
  const titleMap: Record<string, string> = {
    softwave: "SoftWave Therapy",
    thermography: "Thermography",
    "blood-microscopy": "Blood Microscopy",
    "spinal-correction": "Spinal Correction",
    "spinal-decompression": "Spinal Decompression",
    "corrective-exercises": "Corrective Exercises",
    nutrition: "Nutrition Counseling",
    neuropathy: "Neuropathy Treatment",
    pediatric: "Pediatric Chiropractic",
    prenatal: "Prenatal Chiropractic",
  };
  const name = titleMap[slug] || "Service";
  return {
    title: `${name} — Erb Family Wellness | Coppell & Southlake, TX`,
    description: `${name} at Erb Family Wellness in Coppell and Southlake, TX. 28 years of corrective care. Call (972) 393-6262.`,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    if (!allSlugs.includes(slug)) notFound();
    // Placeholder for services without full data yet
    const titleMap: Record<string, string> = {
      softwave: "SoftWave Therapy",
      thermography: "Thermography",
      "blood-microscopy": "Blood Microscopy",
      "spinal-correction": "Spinal Correction",
      "spinal-decompression": "Spinal Decompression",
      "corrective-exercises": "Corrective Exercises",
      nutrition: "Nutrition Counseling",
      neuropathy: "Neuropathy Treatment",
      pediatric: "Pediatric Chiropractic",
      prenatal: "Prenatal Chiropractic",
    };
    return (
      <>
        <PageHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: titleMap[slug] || slug }]}
          titleLight={titleMap[slug] || slug}
          titleHeavy="at Erb Family Wellness."
          subtitle="28 years of corrective care. The most advanced chiropractic wellness center in DFW."
        />
        <section className="page-section page-section--cream">
          <div className="container-erb" style={{ textAlign: "center", padding: "80px 0" }}>
            <p style={{ fontSize: 17, color: "var(--color-text-secondary)", marginBottom: 32 }}>
              Full service page coming soon. Call us to learn more about {titleMap[slug] || "this service"}.
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
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
        titleLight={service.heroLight}
        titleHeavy={service.heroHeavy}
        subtitle={service.heroSub}
      />

      <StatsBar items={service.stats} />

      {/* OVERVIEW */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <div className="split split--45-55">
            <RevealOnScroll>
              <FormCard subtitle={service.formSubtitle} submitText={service.formSubmitText} />
            </RevealOnScroll>
            <RevealOnScroll delay={150}>
              <span className="label">{service.label}</span>
              <h2 className="section-headline">
                <span className="light">{service.headlineLight}</span>
                <span className="heavy">{service.headlineHeavy}</span>
              </h2>
              <div style={{ marginTop: 24 }}>
                {service.paragraphs.map((p, i) => (
                  <p key={i} style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: 24 }}>{p}</p>
                ))}
              </div>
              <div className="img-placeholder img-placeholder--tall">{service.imagePlaceholder}</div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SCIENCE */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">{service.scienceLabel}</span>
              <h2 className="section-headline">
                <span className="light">{service.scienceHeadlineLight}</span>
                <span className="heavy">{service.scienceHeadlineHeavy}</span>
              </h2>
            </div>
          </RevealOnScroll>
          {service.comparisonLeft && service.comparisonRight && (
            <RevealOnScroll delay={100}>
              <div className="comparison">
                <div className="comparison__side comparison__side--left">
                  <div className="comparison__number">{service.comparisonLeft.number}</div>
                  <div className="comparison__label">{service.comparisonLeft.label}</div>
                </div>
                <div className="comparison__vs">VS</div>
                <div className="comparison__side comparison__side--right">
                  <div className="comparison__number">{service.comparisonRight.number}</div>
                  <div className="comparison__label">{service.comparisonRight.label}</div>
                </div>
              </div>
            </RevealOnScroll>
          )}
          <RevealOnScroll delay={200}>
            <div className="cards-grid cards-grid--3" style={{ marginTop: 64 }}>
              {service.scienceCards.map((card) => (
                <div key={card.title} style={{ background: "var(--color-cream)", borderRadius: "var(--r-md)", padding: "36px 28px" }}>
                  <h4 style={{ fontSize: 18, fontWeight: 700, color: "var(--color-text-primary)", marginBottom: 10 }}>{card.title}</h4>
                  <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{card.desc}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head">
              <span className="label">HOW IT WORKS</span>
              <h2 className="section-headline">
                <span className="light">Your {service.name}</span>
                <span className="heavy">session.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="steps">
              {service.steps.map((step, i) => (
                <div key={i} className="step">
                  <div className="step__num">{String(i + 1).padStart(2, "0")}</div>
                  <div className="step__content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="page-section page-section--white">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head">
              <span className="label">CONDITIONS</span>
              <h2 className="section-headline">
                <span className="light">{service.name} can help</span>
                <span className="heavy">with all of this.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="tags">
              {service.conditions.map((c) => (
                <span key={c} className="tag tag--teal">{c}</span>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHY ERB */}
      <section className="page-section page-section--navy">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label label--light">WHY ERB FOR {service.name.toUpperCase()}</span>
              <h2 className="section-headline section-headline--light">
                <span className="light">Not just any</span>
                <span className="heavy">{service.name} provider.</span>
              </h2>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={150}>
            <div className="diff-row">
              {service.differentiators.map((d) => (
                <div key={d.title} className="diff-item">
                  <div className="diff-item__icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="var(--color-teal)" fill="none" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" /><path d="M8 12l3 3 5-5" />
                    </svg>
                  </div>
                  <h4 className="diff-item__title">{d.title}</h4>
                  <p className="diff-item__desc">{d.desc}</p>
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
              <div className="section-head">
                <span className="label">{service.name.toUpperCase()} QUESTIONS</span>
                <h2 className="section-headline">
                  <span className="light">Your {service.name} questions,</span>
                  <span className="heavy">answered.</span>
                </h2>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={100}>
              <FAQ items={service.faq} />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="page-section page-section--cream">
        <div className="container-erb">
          <RevealOnScroll>
            <div className="section-head section-head--center">
              <span className="label">RELATED SERVICES</span>
            </div>
          </RevealOnScroll>
          <RevealOnScroll delay={100}>
            <div className="cards-grid cards-grid--4">
              {service.relatedServices.map((rs) => (
                <ServiceCard key={rs.title} {...rs} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
