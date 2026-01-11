import React, { useEffect, useState } from "react";
import { initStats } from "../Data/cp";
import Aniket from "../Components/ani";

function CompetitiveProgramming() {
  const [stats, setStats] = useState([]);

  const loadStats = async () => {
    const data = await initStats();
    setStats(data);
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <section className="py-10 px-6 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center mb-10">
        Competitive Programming Profiles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mx-auto max-w-6xl">
        {stats?.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden border border-zinc-700 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center gap-4 bg-zinc-800 py-3 px-4 border border-cyan-200 rounded-t-xl">
              <item.icon className="text-blue-500 text-3xl" />
              <h2 className="text-2xl font-semibold text-white">
                {item.Judge}
              </h2>
            </div>

            {/* PROFILE IMAGE REMOVED */}

            <div className="p-6">
              <div className="flex flex-col justify-between text-lg text-cyan-400 font-medium">
                <div>
                  <h3 className="mb-2">
                    <span className="text-orange-400 font-normal">
                      Handle:
                    </span>{" "}
                    <a
                      className="text-blue-400 underline"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.handle}
                    </a>
                  </h3>

                  <p>
                    <span className="text-white font-normal">
                      Current Rank:
                    </span>{" "}
                    {item.currRank}
                  </p>

                  <p>
                    <span className="text-white font-normal">
                      Maximum Rank:
                    </span>{" "}
                    {item.maxRank}
                  </p>
                </div>

                <div className="mt-4">
                  <p>
                    <span className="text-white font-normal">
                      Current Rating:
                    </span>{" "}
                    {item.currentRating}
                  </p>

                  <p>
                    <span className="text-white font-normal">
                      Maximum Rating:
                    </span>{" "}
                    {item.maxRating}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompetitiveProgramming;
