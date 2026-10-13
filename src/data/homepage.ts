export const homepageLinks = {
  contact: "/contact",
  team: "/therapists-newbury-park",
};

export const homepage = {
  hero: {
    eyebrow:
      "ONLINE & IN-PERSON COUNSELING IN NEWBURY PARK & ACROSS CA",
    heading: "Rebuild your foundation on solid ground and finally begin to",
    emphasis: "thrive",
    description:
      "Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.",
    action: "Book an Appointment",
    image: "/images/original/Jennifer-A-Images-2866-29.jpg",
    imageAlt: "family therapy",
    accentImage: "/images/original/Jennifer-A-Images-2867-29.jpg",
    accentImageAlt: "child therapy",
  },
  welcome: {
    heading:
      "You’re holding onto hope that life can be better than it is right now.",
    introduction:
      "At Conejo Valley Family Counseling we want to make that hope a reality.",
    firstParagraph:
      "Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.",
    secondParagraph:
      "First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.",
    image: "/images/original/Jennifer-A-Images-283-29.jpg",
    imageAlt: "Sandy beach with gentle ocean waves and a cloudy sky.",
  },
  quote: {
    firstSentence:
      "You deserve a place where your story is heard, valued, and understood.",
    secondSentence: "Nothing will be too heavy for us to carry together.",
    image: "/images/original/Jennifer-A-Images-282-29.png",
  },
  about: {
    eyebrow: "HOW WE WORK",
    heading: "We’re here to make a difference.",
    introduction:
      "The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.",
    firstParagraph:
      "Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.",
    secondParagraph:
      "Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.",
    action: "Learn more about us",
    image: "/images/original/Jennifer-A-Images-286-29.jpg",
    imageAlt:
      "A woman and a child in white dresses dancing on a sandy beach with tall grasses and a distant building in the background during sunset.",
  },
  honoring: {
    firstLine: "Honoring where you’ve been",
    secondLine: "helping shape where you’re headed.",
    image: "/images/original/Jennifer-A-Images-285-29.jpg",
    imageAlt:
      "Family of four standing on a beach, holding hands, facing the ocean at sunset.",
  },
  cta: {
    eyebrow: "SCHEDULE AN APPOINTMENT",
    heading: "Find a therapist who is the right fit for",
    emphasis: "you",
    description:
      "Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.",
    instruction: "Click the button below to schedule an appointment.",
    action: "Book now",
    accentImage: "/images/original/Jennifer-A-Images-2812-29.jpg",
    accentImageAlt: "A person picking up seashells on a sandy beach.",
    image: "/images/original/Jennifer-A-Images-2811-29.jpg",
    imageAlt:
      "A person in a striped dress pointing at shells on the sandy beach, with a child in blue shorts standing barefoot nearby.",
  },
};

type Audience = {
  id: string;
  title: string;
  titleSuffix?: string;
  href?: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
};

export const audiences: Audience[] = [
  {
    id: "adults",
    title: "Adults",
    description:
      "Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.",
    image: "/images/original/Jennifer-A-Images-288-29.jpg",
    imageAlt:
      "Two people sitting on a log at the beach, facing a lake with mountains in the background.",
    imagePosition: "51.187% 64.804%",
  },
  {
    id: "couples",
    title: "Couples",
    href: "/couples-therapy",
    description:
      "Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.",
    image: "/images/original/Jennifer-A-Images-289-29.jpg",
    imageAlt:
      "A couple embracing on the beach, with both wearing casual summer clothing and smiling at each other. The ocean is in the background.",
    imagePosition: "50% 50%",
  },
  {
    id: "children-and-teens",
    title: "Children",
    titleSuffix: " & Teens",
    href: "/children-and-teens",
    description:
      "Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.",
    image: "/images/original/Jennifer-A-Images-2810-29.jpg",
    imageAlt: "A boy carrying a girl on a beach with waves in the background.",
    imagePosition: "50% 50%",
  },
];

type Expertise = {
  label: string;
  href?: string;
};

export const expertiseColumns: Expertise[][] = [
  [
    {
      label: "Dissociation",
      href: "/dissociative-identity-disorder-therapist-newbury-park",
    },
    {
      label: "Trauma",
      href: "/trauma-counseling-newbury-park",
    },
    { label: "Family conflict" },
    {
      label: "Special needs parenting",
      href: "/counseling-special-needs-parents-newbury-park",
    },
    { label: "Depression", href: "/anxiety-depression" },
    { label: "marriage", href: "/couples-therapy" },
  ],
  [
    { label: "anxiety", href: "/anxiety-depression" },
    { label: "relationships" },
    { label: "children", href: "/children-and-teens" },
    { label: "teens", href: "/children-and-teens" },
    {
      label: "intimacy & connection",
      href: "/couples-therapy",
    },
    { label: "…and more." },
  ],
];

export const specialties = [
  {
    id: "trauma",
    title: "Trauma",
    description:
      "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
    href: "/trauma-counseling-newbury-park",
  },
  {
    id: "dissociation",
    title: "Dissociation",
    description:
      "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
    href: "/dissociative-identity-disorder-therapist-newbury-park",
  },
  {
    id: "emdr",
    title: "EMDR",
    description:
      "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
    href: "/emdr-therapy-newbury-park",
  },
  {
    id: "special-needs-parenting",
    title: "Special Needs Parenting",
    description:
      "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
    href: "/counseling-special-needs-parents-newbury-park",
  },
];
