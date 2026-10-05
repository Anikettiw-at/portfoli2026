export const projectCategories = ["All", "AI", "Work", "Full-Stack"];

export const projects = [
  {
    name: "Unified AI Communication Platform",
    subtitle: "Enterprise VoIP & AI Voice Agent System",
    badge: "Work · EcoSave Home Solutions",
    categories: ["AI", "Work"],
    date: "Aug 2026",
    description:
      "An AI-powered business phone system: AI voice agents answer, qualify and book calls, every employee gets a direct line, and every call is recorded, transcribed, summarised and filed to the right customer or project.",
    points: [
      {
        title: "Telephony Architecture",
        text: "End-to-end VoIP platform for internal calling, outbound customer calls and real-time bidirectional audio streaming using WebRTC, WebSockets and Telnyx.",
      },
      {
        title: "AI Routing & Escalation",
        text: "Vapi + ElevenLabs voice agents powered by OpenRouter LLMs answer inbound calls, book appointments and escalate complex queries to humans.",
      },
      {
        title: "CRM Integration & Reliability",
        text: "CRM customer records, automated SMS confirmations and follow-ups, voicemail handling — secured with webhook validation, rate limiting and a global kill switch.",
      },
    ],
    images: [
      {
        src: "/voiceos/architecture.png",
        caption:
          "Call lifecycle: operator console → Telnyx carrier → signed webhooks → queued workers (archive, transcribe, summarise, match) → project / dispatch timeline or review queue.",
      },
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Telnyx",
      "Vapi",
      "WebRTC",
      "WebSockets",
      "ElevenLabs",
      "OpenRouter",
      "Webhooks",
    ],
    note: "Private internal company system — source code and live app are not public.",
  },
  {
    name: "Moodline",
    subtitle: "Emotion Detection & Sentiment Analysis",
    categories: ["AI"],
    date: "Jul 2026",
    description:
      "A deep learning NLP text classifier that detects one of six emotions in a sentence, served through a FastAPI REST API and deployed on Render.",
    points: [
      {
        title: "Model Development",
        text: "Stacked Bidirectional GRU classifying text into 6 emotions with 92.1% test accuracy.",
      },
      {
        title: "NLP Pipeline",
        text: "Tokenized 16K sentences; beat RNN, LSTM and GRU baselines using class weights and early stopping.",
      },
      {
        title: "Deployment",
        text: "Served via a FastAPI REST API with tf.function for 9x faster inference; deployed on Render.",
      },
    ],
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "FastAPI",
      "Scikit-learn",
      "Pandas",
      "Render",
    ],
    github:
      "https://github.com/Anikettiw-at/Deep-Learning-based-Sentiment-Analysis-Emotion-Detection-System",
    live: "https://deep-learning-based-sentiment-analysis.onrender.com/",
  },
  {
    name: "Connectify",
    subtitle: "AI-Powered Social Media Platform",
    categories: ["AI", "Full-Stack"],
    date: "Jun 2025",
    description:
      "A full-stack social platform with AI-generated captions, real-time one-to-one chat, user profiles and cloud-only media uploads.",
    points: [
      {
        title: "Generative AI Captions",
        text: "Google Gemini API turns short user prompts into structured, engaging social media captions.",
      },
      {
        title: "Real-Time Messaging",
        text: "Low-latency one-to-one chat with Socket.io WebSockets and JWT authentication.",
      },
      {
        title: "Storage Pipeline",
        text: "Media uploads with no local server storage — Multer (memory storage) + datauri/parser + Cloudinary for direct cloud delivery.",
      },
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Gemini AI",
      "Socket.io",
      "JWT",
      "Bcrypt",
      "Multer",
      "Cloudinary",
    ],
    github: "https://github.com/Anikettiw-at/socialmediahm",
    live: "https://socialmediahm.vercel.app/",
  },
  {
    name: "AlgoVerse",
    subtitle: "AI-Integrated Competitive Programming Platform",
    categories: ["AI", "Full-Stack"],
    date: "Dec 2024",
    description:
      "A DSA practice platform with sandboxed multi-language code execution, AI debugging hints and an admin panel for managing problems.",
    points: [
      {
        title: "Code Execution Engine",
        text: "Secure, sandboxed multi-language code evaluation using the Judge0 API.",
      },
      {
        title: "AI Feedback Layer",
        text: "Google Gemini API gives contextual debugging tips, optimization advice and hints.",
      },
      {
        title: "Caching & Performance",
        text: "Redis caching for high-frequency queries, cutting API latency by 30%.",
      },
    ],
    techStack: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Redis",
      "Gemini AI",
      "Judge0",
      "JWT",
      "Tailwind CSS",
      "RBAC",
    ],
    github: "https://github.com/Anikettiw-at/AlgoVerse",
    live: "https://frontend-coding-roan.vercel.app/",
  },
];
