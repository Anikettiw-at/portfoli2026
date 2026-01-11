import React, { useEffect, useState } from "react";
import { initStats } from "../Data/cp";

function CompetitiveProgramming() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    initStats().then(setStats);
  }, []);

  return (
    <section className="py-10 px-6 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-10">
        Competitive Programming Profiles
      </h1>

      {stats.length === 0 ? (
        <p className="text-center text-gray-400">
          Loading profiles...
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-700 p-6 rounded-xl border border-zinc-600 hover:scale-105 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="text-3xl text-cyan-400" />
                <h2 className="text-xl font-semibold">
                  {item.Judge}
                </h2>
              </div>

              <p>
                <span className="text-orange-400">Handle:</span>{" "}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {item.handle}
                </a>
              </p>

              <p>
                <span className="text-orange-400">Current Rating:</span>{" "}
                {item.currentRating}
              </p>

              <p>
                <span className="text-orange-400">Max Rating:</span>{" "}
                {item.maxRating}
              </p>

              <p>
                <span className="text-orange-400">Current Rank:</span>{" "}
                {item.currRank}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CompetitiveProgramming;
