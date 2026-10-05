import { useEffect, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaCopy, FaCheck, FaDownload } from "react-icons/fa";
import { profile } from "../Data/profile";
import { socials, EMAIL, RESUME_URL } from "../Data/social";
import { Page, Card } from "../Components/ui";

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
    >
      {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
      {copied ? "Copied!" : "Copy email"}
    </button>
  );
}

export default function Contact() {
  const items = [
    {
      icon: FaEnvelope,
      title: "Email",
      lines: profile.emails.map((e) => ({ text: e, href: `mailto:${e}` })),
    },
    {
      icon: FaPhoneAlt,
      title: "Phone",
      lines: [{ text: profile.phone, href: `tel:${profile.phone.replace(/-/g, "")}` }],
    },
    { icon: FaMapMarkerAlt, title: "Location", lines: [{ text: profile.location }] },
  ];

  return (
    <Page
      eyebrow="Contact"
      title="Let’s work together"
      subtitle="Open to software development and AI engineering roles. The fastest way to reach me is email."
    >
      <Card className="mb-8 flex flex-col items-start justify-between gap-5 border-amber-400/20 bg-gradient-to-br from-amber-400/10 to-transparent md:flex-row md:items-center">
        <div>
          <p className="text-xl font-bold text-white">Have a role or project in mind?</p>
          <p className="mt-1 text-zinc-400">I usually reply within a day.</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-amber-300"
          >
            <FaEnvelope /> Email me
          </a>
          <CopyEmailButton />
          <a
            href={RESUME_URL}
            download="Aniket_Tiwari_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
          >
            <FaDownload /> Resume
          </a>
        </div>
      </Card>

      <div className="grid gap-5 md:grid-cols-2">
        {items.map(({ icon: Icon, title, lines }) => (
          <Card key={title} className="flex gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-lg text-amber-400">
              <Icon />
            </span>
            <div className="min-w-0">
              <h2 className="text-sm uppercase tracking-wider text-zinc-500">{title}</h2>
              {lines.map(({ text, href }) =>
                href ? (
                  <a key={text} href={href} className="block break-all text-zinc-200 transition hover:text-amber-400">
                    {text}
                  </a>
                ) : (
                  <p key={text} className="text-zinc-200">{text}</p>
                )
              )}
            </div>
          </Card>
        ))}

        <Card className="flex gap-4">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-zinc-500">Find me online</h2>
            <div className="mt-2 flex flex-wrap gap-2">
              {socials.map(({ name, icon: Icon, href }) => (
                <a
                  key={name}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-amber-400/40 hover:text-amber-400"
                >
                  <Icon /> {name}
                </a>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </Page>
  );
}
