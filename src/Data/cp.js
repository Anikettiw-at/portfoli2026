import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import { FaCode } from "react-icons/fa";

const handles = {
  codeforces: "At_tiwari078",
  leetcode: "At5602238",
  codechef: "a_tiwari087",
  atcoder: "At_tiwari078",
};

const codeforcesData = async () => {
  try {
    const res = await fetch(
      `https://codeforces.com/api/user.info?handles=${handles.codeforces}&checkHistoricHandles=false`
    );
    const data = await res.json();
    return data.status === "OK" ? data : null;
  } catch {
    return null;
  }
};

export const initStats = async () => {
  const cf = await codeforcesData();
  const cfUser = cf?.result?.[0];

  return [
    {
      Judge: "Codeforces",
      icon: SiCodeforces,
      handle: handles.codeforces,
      link: `https://codeforces.com/profile/${handles.codeforces}`,
      currRank: cfUser?.rank ?? "—",
      maxRank: cfUser?.maxRank ?? "—",
      currentRating: cfUser?.rating ?? 1391,
      maxRating: 1391,
    },
    {
      Judge: "CodeChef",
      icon: SiCodechef,
      handle: handles.codechef,
      link: `https://www.codechef.com/users/${handles.codechef}`,
      currRank: "3 ★",
      maxRank: "3 ★",
      currentRating: 1607,
      maxRating: 1607,
    },
    {
      Judge: "LeetCode",
      icon: SiLeetcode,
      handle: handles.leetcode,
      link: `https://leetcode.com/u/${handles.leetcode}/`,
      currRank: "Knight",
      maxRank: "Knight",
      currentRating: 1686,
      maxRating: 1686,
    },
    {
      Judge: "AtCoder",
      icon: FaCode,
      handle: handles.atcoder,
      link: `https://atcoder.jp/users/${handles.atcoder}`,
      currRank: "8 Kyu",
      maxRank: "8 Kyu",
      currentRating: 416,
      maxRating: 416,
    },
  ];
};
