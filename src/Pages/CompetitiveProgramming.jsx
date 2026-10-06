import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { buildProfiles, contestHighlights, fetchCodeforcesUser } from "../Data/cp";
import { Page, Card, SubHeading } from "../Components/ui";

function CompetitiveProgramming() {
  const [cfUser, setCfUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    fetchCodeforcesUser(controller.signal).then((user) => {
      if (!controller.signal.aborted && user) setCfUser(user);
    });
    return () => controller.abort();
  }, []);

  const profiles = buildProfiles(cfUser);

  return (
    <Page
      eyebrow="Competitive Programming"
      title="Ratings & contest results"
      subtitle="Regular contests on Codeforces, LeetCode, CodeChef and AtCoder — the habit behind my problem-solving."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map(({ judge, icon: Icon, handle, link, rank, rankColor, currentRating, maxRating, live }) => (
          <Card
            key={judge}
            as="a"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block transition hover:-translate-y-0.5 hover:border-amber-400/30"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2.5 font-semibold text-white">
                <Icon className="text-2xl text-zinc-300" /> {judge}
              </span>
              <FaExternalLinkAlt className="text-xs text-zinc-600 transition group-hover:text-amber-400" />
            </div>

            <p className="mt-5 text-xs uppercase tracking-wider text-zinc-500">Max rating</p>
            <p className="text-4xl font-extrabold text-white">{maxRating}</p>

            {rank && <p className={`mt-1 font-semibold ${rankColor}`}>{rank}</p>}

            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-zinc-500">
              <span className="truncate">@{handle}</span>
              {currentRating !== undefined && (
                <span className="inline-flex items-center gap-1.5">
                  {live && <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" title="Live from Codeforces API" />}
                  Now {currentRating}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>

      <SubHeading className="mt-14">Contest highlights</SubHeading>
      <div className="grid gap-3 md:grid-cols-2">
        {contestHighlights.map(({ event, result, field, icon: Icon, link }) => (
          <a
            key={event}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-zinc-900/60 p-4 transition hover:border-amber-400/30"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-400/10 text-xl text-amber-400">
              <Icon />
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-semibold text-white">{event}</p>
              <p className="text-sm text-zinc-400">
                <span className="text-amber-300">{result}</span> · {field}
              </p>
            </div>
            <FaExternalLinkAlt className="shrink-0 text-xs text-zinc-600 transition group-hover:text-amber-400" />
          </a>
        ))}
      </div>
    </Page>
  );
}

export default CompetitiveProgramming;
