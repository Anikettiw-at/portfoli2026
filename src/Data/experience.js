export const experiences = [
  {
    role: "AI Developer Intern",
    company: "EcoSave Home Solutions",
    location: "USA (Remote)",
    startDate: "2026-06-22T00:00:00",
    endDate: "2026-09-30T00:00:00", // null = currently working
    classification: "1099 Independent Contractor",
    summary:
      "Built AI, voice and automation systems for a US home-energy services company (HVAC, Solar, Roofing, Insulation) — turning manual operations into reliable, documented software.",
    highlights: [
      {
        title: "LLM Integration & Automation",
        text: "Developed custom LLM API integrations using OpenRouter and built server-side automation workflows with webhooks and data pipelines to automate decision-making across internal business operations.",
      },
      {
        title: "Backend & API Development",
        text: "Designed multi-tier REST APIs and backend microservices connecting real-time client applications with cloud data services and AI models.",
      },
      {
        title: "AI Voice & Communication Systems",
        text: "Built an AI-powered VoIP platform with WebRTC, Telnyx and Vapi voice agents for call handling, appointment scheduling and human escalation.",
      },
    ],
    responsibilities: [
      "Researching, configuring and deploying AI tools to reduce manual work across business processes.",
      "Designing ClickUp spaces, templates and team-tracking workflows.",
      "Connecting email, forms and CRMs into automation streams with reliable data sync.",
      "Writing SOPs, workflow diagrams and technical guides for automations and system configs.",
      "Auditing live automations, finding bottlenecks and fixing broken integrations.",
      "Training the team on new workflows and internal AI systems.",
      "Keeping CRM data, tags and fields clean and standardized.",
      "Following company security policy for customer data, credentials and API keys.",
    ],
    featured: {
      name: "Unified AI Communication Platform",
      alias: "EcoSave Voice OS",
      tagline: "Enterprise VoIP & AI voice agent system",
      date: "Aug 2026",
      image: {
        src: "/voiceos/architecture.png",
        caption:
          "Call lifecycle: operator console → Telnyx carrier → signed webhooks → queued workers (archive, transcribe, summarise, match) → project / dispatch timeline or human review queue.",
      },
      contributions: [
        "Architected an end-to-end VoIP platform for internal employee calling, outbound customer calls and real-time bidirectional audio streaming using WebRTC, WebSockets and Telnyx.",
        "Deployed AI voice agents (Vapi, ElevenLabs, OpenRouter LLMs) that answer inbound calls, book appointments and escalate complex queries to human agents.",
        "Integrated CRM customer records, automated SMS confirmations and follow-ups, and voicemail handling — secured with webhook validation, rate limiting and a global kill switch.",
        "Traced missing recordings and transcripts to auth middleware redirecting the carrier's signed webhook callbacks to the login page, and fixed the routing.",
        "Designed one idempotent record per call with webhook → background-worker processing for archiving, per-channel transcription, AI summaries and action items.",
        "Designed confidence-based call-to-project linking and a 4-role permission model (Super Admin, Admin, Supervisor, Employee) with deny-by-default access checks.",
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
        "Vercel",
        "RBAC",
      ],
    },
  },
];
