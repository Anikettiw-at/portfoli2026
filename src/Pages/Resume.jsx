import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import { RESUME_URL } from "../Data/social";
import { Page } from "../Components/ui";

export default function Resume() {
  return (
    <Page
      eyebrow="Resume"
      title="My resume"
      subtitle="AI Developer & Full-Stack Engineer — updated 2026."
    >
      <div className="mb-6 flex flex-wrap gap-3">
        <a
          href={RESUME_URL}
          download="Aniket_Tiwari_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-2.5 font-semibold text-zinc-950 transition hover:bg-amber-300"
        >
          <FaDownload /> Download PDF
        </a>
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 font-semibold text-white transition hover:bg-white/10"
        >
          <FaExternalLinkAlt className="text-sm" /> Open in new tab
        </a>
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/40">
        <object
          data={`${RESUME_URL}#view=FitH`}
          type="application/pdf"
          aria-label="Aniket Tiwari resume"
          className="h-[80vh] min-h-[520px] w-full"
        >
          <div className="flex h-64 flex-col items-center justify-center gap-3 p-6 text-center text-zinc-400">
            <p>Your browser can’t display the PDF inline.</p>
            <a href={RESUME_URL} download className="font-semibold text-amber-400 hover:underline">
              Download the resume instead
            </a>
          </div>
        </object>
      </div>
    </Page>
  );
}
