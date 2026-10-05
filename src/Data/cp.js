import { SiCodeforces, SiLeetcode, SiCodechef, SiMeta } from "react-icons/si";
import { FaCode, FaTrophy } from "react-icons/fa";

const handles = {
  codeforces: "At_tiwari078",
  leetcode: "At5602238",
  codechef: "a_tiwari087",
  atcoder: "At_tiw098",
};

const capitalize = (s) => s.replace(/\b\w/g, (c) => c.toUpperCase());

// Official Codeforces rank colours
const cfRankColor = {
  newbie: "text-zinc-400",
  pupil: "text-green-400",
  specialist: "text-cyan-400",
  expert: "text-blue-400",
  "candidate master": "text-violet-400",
  master: "text-orange-400",
  "international master": "text-orange-400",
  grandmaster: "text-red-400",
};

export async function fetchCodeforcesUser(signal) {
  try {
    const res = await fetch(
      `https://codeforces.com/api/user.info?handles=${handles.codeforces}`,
      { signal }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.status === "OK" ? data.result[0] : null;
  } catch {
    return null;
  }
}

// Static values come from the resume; Codeforces is refreshed live when the API responds.
export function buildProfiles(cfUser) {
  const cfMaxRank = cfUser?.maxRank ?? "specialist";
  return [
    {
      judge: "Codeforces",
      icon: SiCodeforces,
      handle: handles.codeforces,
      link: `https://codeforces.com/profile/${handles.codeforces}`,
      // Rank shown under "Max rating" must be the max rank, not the current one
      rank: capitalize(cfMaxRank),
      rankColor: cfRankColor[cfMaxRank] ?? "text-zinc-300",
      currentRating: cfUser?.rating,
      maxRating: Math.max(cfUser?.maxRating ?? 0, 1400),
      live: Boolean(cfUser),
    },
    {
      judge: "LeetCode",
      icon: SiLeetcode,
      handle: handles.leetcode,
      link: `https://leetcode.com/u/${handles.leetcode}/`,
      rank: "Knight",
      rankColor: "text-amber-400",
      maxRating: 1790,
    },
    {
      judge: "CodeChef",
      icon: SiCodechef,
      handle: handles.codechef,
      link: `https://www.codechef.com/users/${handles.codechef}`,
      rank: "3 ★",
      rankColor: "text-blue-400",
      maxRating: 1607,
    },
    {
      judge: "AtCoder",
      icon: FaCode,
      handle: handles.atcoder,
      link: `https://atcoder.jp/users/${handles.atcoder}`,
      rank: "8 Kyu",
      rankColor: "text-zinc-400",
      maxRating: 416,
    },
  ];
}

export const contestHighlights = [
  {
    event: "CodeChef Starters 157",
    result: "Global Rank 62",
    field: "190,000+ participants",
    icon: SiCodechef,
    link: "https://www.codechef.com/rankings/START157D",
  },
  {
    event: "Codeforces Round 987 (Div. 2)",
    result: "Global Rank 4268",
    field: "10,000+ participants",
    icon: SiCodeforces,
    link: "https://codeforces.com/contest/2031/standings/participant/196966472#p196966472",
  },
  {
    event: "Codeforces Round 988 (Div. 3)",
    result: "Global Rank 7183",
    field: "17,000+ participants",
    icon: SiCodeforces,
    link: "https://codeforces.com/contest/2037/standings/participant/197134002#p197134002",
  },
  {
    event: "LeetCode Weekly Contest 424",
    result: "Global Rank 3279",
    field: "80,000+ participants",
    icon: SiLeetcode,
    link: "https://leetcode.com/contest/weekly-contest-424/ranking/122/",
  },
  {
    event: "Meta Hacker Cup 2024",
    result: "Global Rank 5307 · AIR 1580",
    field: "20,000+ participants",
    icon: SiMeta,
    link: "https://www.facebook.com/codingcompetitions/hacker-cup/2024/certificate/1002725358270523",
  },
  {
    event: "TCS CodeVita 2024–25",
    result: "Global Rank 4728 · AIR 1249",
    field: "22,000+ participants",
    icon: FaTrophy,
    link: "https://drive.google.com/file/d/1VtYs6sjgQZPYgy7H-5Zteu1SDV2eJGi4/view?usp=sharing",
  },
  {
    event: "AtCoder Beginner Contest 386",
    result: "Global Rank 2390",
    field: "AtCoder ABC",
    icon: FaCode,
    link: "https://atcoder.jp/users/At_tiw098",
  },
];
