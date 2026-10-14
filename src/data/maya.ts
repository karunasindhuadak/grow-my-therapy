export const mayaLinks = {
  home: "#top",
  about: "#about",
  services: "#services",
  approach: "#approach",
  office: "#office",
  faqs: "#faqs",
  contact: "#contact",
} as const;

export const mayaHomepage = {
  hero: {
    eyebrow: "ANXIETY THERAPIST IN SANTA MONICA & SECURE TELEHEALTH ACROSS CALIFORNIA",
    heading: "A grounded place to slow down and find your way",
    emphasis: "forward",
    description:
      "Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist offering warm, collaborative therapy for adults in Santa Monica and across California.",
    action: "Explore therapy",
    image: "/images/maya/dr-maya-reynolds.webp",
    imageAlt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist",
    accentImage: "/images/maya/office-1.webp",
    accentImageAlt: "Quiet therapy office with natural light in Santa Monica",
  },
  welcome: {
    heading: "You can be high-achieving and still feel overwhelmed, exhausted, or on edge.",
    introduction: "THERAPY FOR ADULTS IN SANTA MONICA & ACROSS CALIFORNIA",
    firstParagraph:
      "Dr. Maya works with adults, especially high-achieving people, entrepreneurs, creatives, and professionals, who feel overwhelmed by anxiety, panic, or the lingering effects of past experiences.",
    secondParagraph:
      "Therapy can be a place to understand what you are carrying, reconnect with yourself, and develop more sustainable ways of living and working. Her warm, collaborative, grounded approach leaves room for reflection, depth, and practical tools.",
    image: "/images/maya/office-1.webp",
    imageAlt: "Comfortable, uncluttered therapy office with natural light",
  },
  quote: {
    firstSentence: "You do not have to keep pushing through.",
    secondSentence: "Therapy can make room to slow down and feel supported.",
    image: "/images/maya/office-2.webp",
  },
  about: {
    eyebrow: "ABOUT DR. MAYA REYNOLDS, PSYD",
    heading: "Therapy that meets you with warmth, depth, and steadiness.",
    introduction: "A collaborative relationship is at the center of our work.",
    firstParagraph:
      "Dr. Maya is a Licensed Clinical Psychologist based in Santa Monica. She supports adults navigating anxiety, panic, trauma, burnout, and perfectionism.",
    secondParagraph:
      "She integrates CBT, EMDR, mindfulness, and body-oriented techniques. Sessions are paced with an emphasis on safety and stabilization, while helping you understand both the emotional and physiological sides of what you are experiencing.",
    action: "Explore Dr. Maya's approach",
    image: "/images/maya/dr-maya-reynolds.webp",
    imageAlt: "Dr. Maya Reynolds, PsyD, in a bright professional portrait",
  },
  honoring: {
    firstLine: "A paced approach for",
    secondLine: "safety, stabilization, and deeper understanding.",
    image: "/images/maya/office-2.webp",
    imageAlt: "Grounding therapy office with comfortable seating and soft light",
  },
  cta: {
    eyebrow: "FIND YOUR NEXT STEP",
    heading: "Take the next step at a pace that feels",
    emphasis: "right for you",
    description:
      "Whether you are looking for an anxiety therapist in Santa Monica, trauma counseling in Santa Monica, or secure telehealth across California, therapy can offer a grounded place to slow down, reflect, and feel understood.",
    instruction:
      "Explore the areas of support and common questions below to learn whether this approach feels like a good fit.",
    action: "View common questions",
    accentImage: "/images/maya/office-1.webp",
    accentImageAlt: "Sunlight through the windows of a calm therapy office",
    image: "/images/maya/dr-maya-reynolds.webp",
    imageAlt: "Dr. Maya Reynolds, PsyD, Licensed Clinical Psychologist",
  },
} as const;

export type MayaService = {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
};

export const mayaServices: MayaService[] = [
  {
    id: "anxiety-panic",
    title: "Anxiety & Panic Therapy",
    description:
      "Support for adults navigating anxiety, panic, or feeling emotionally on edge, with space to understand what is happening and feel more regulated in daily life.",
    image: "/images/maya/dr-maya-reynolds.webp",
    imageAlt: "Dr. Maya Reynolds, PsyD, in a professional portrait",
    imagePosition: "50% 26%",
  },
  {
    id: "trauma-emdr",
    title: "Trauma & EMDR Therapy",
    description:
      "Trauma work that is paced carefully, with an emphasis on safety and stabilization as you process the effects of past experiences.",
    image: "/images/maya/office-1.webp",
    imageAlt: "Natural light filling a quiet therapy office",
    imagePosition: "50% 52%",
  },
  {
    id: "burnout-perfectionism",
    title: "Burnout & Perfectionism Counseling",
    description:
      "For high-achieving adults, entrepreneurs, creatives, and professionals who feel exhausted, disconnected from themselves, or under high internal pressure.",
    image: "/images/maya/office-2.webp",
    imageAlt: "Comfortable seating in a calm, uncluttered therapy office",
    imagePosition: "50% 53%",
  },
];

export const mayaExpertiseColumns = [
  ["Anxiety and panic", "Trauma and EMDR", "Burnout and perfectionism"],
  ["CBT", "Mindfulness", "Body-oriented techniques"],
] as const;

export const mayaMethods = [
  {
    id: "cbt",
    title: "Cognitive-behavioral therapy",
    description:
      "A structured, evidence-based method Dr. Maya integrates to help you understand the thoughts, feelings, and patterns connected to what you are experiencing.",
  },
  {
    id: "emdr",
    title: "EMDR",
    description:
      "An approach Dr. Maya may integrate in paced trauma work, with safety and stabilization at the center.",
  },
  {
    id: "mindfulness",
    title: "Mindfulness",
    description:
      "Mindfulness-based practices that make room for reflection and a more grounded awareness of your experience.",
  },
  {
    id: "somatic",
    title: "Body-oriented techniques",
    description:
      "Techniques that help explore the physiological side of anxiety and trauma alongside emotional experiences.",
  },
] as const;

export const mayaFaqs = [
  {
    id: "clients",
    question: "Who does Dr. Maya work with?",
    answer:
      "She works with adults, especially high-achieving people, entrepreneurs, creatives, and professionals.",
  },
  {
    id: "focus",
    question: "What can therapy with Dr. Maya focus on?",
    answer:
      "Her work often focuses on anxiety, panic, trauma, burnout, and perfectionism.",
  },
  {
    id: "approaches",
    question: "What approaches does Dr. Maya use?",
    answer:
      "She integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    id: "format",
    question: "Are sessions in person or online?",
    answer:
      "She offers in-person therapy from her Santa Monica office and secure telehealth for clients located in California.",
  },
  {
    id: "office",
    question: "Where is the Santa Monica office?",
    answer: "The office is at 123th Street 45 W, Santa Monica, CA 90401.",
  },
  {
    id: "trauma",
    question: "How is trauma work paced?",
    answer:
      "Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives.",
  },
] as const;
