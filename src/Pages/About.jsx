import React from "react";
import { interest } from "../Data/interest";

function About() {
  return (
    <div className="px-10 md:px-20 mt-4 py-6">
      <h2 className="text-white text-xl tracking-widest font-semibold mb-6 border-b border-white/20 w-fit">
        ABOUT ME
      </h2>

      <div className="flex flex-col gap-8 items-start">
        <div className="text-md text-cyan-200 leading-relaxed">
          <p>
            I'm{" "}
            <span className="text-green-400 font-semibold">Aniket Tiwari</span>,
            a third-year B.Tech student at the{" "}
            <span className="text-green-400 font-semibold">
              Institute of Engineering and Technology, Lucknow (2023–2027)
            </span>
            , specializing in Computer Science. I have a strong foundation in
            Competitive Programming and a growing passion for Full Stack Web
            Development.
          </p>

          <br />

          <p>
            In the world of Competitive Programming, I’ve solved 1000+ problems
            and participated in 80+ contests across major platforms. I hold a
            3-star rating on{" "}
            <a
              className="text-blue-400 font-semibold"
              href="https://www.codechef.com/users/a_tiwari087"
              target="_blank"
              rel="noopener noreferrer"
            >
              CodeChef
            </a>
            , a peak rating of 1686 on{" "}
            <a
              className="text-blue-400 font-semibold"
              href="https://leetcode.com/u/At5602238/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LeetCode
            </a>
            , and a{" "}
            <a
              className="text-blue-400 font-semibold"
              href="https://codeforces.com/profile/At_tiwari078"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codeforces
            </a>{" "}
            rating of 1391 (Pupil).
          </p>

          <br />

          <p>
            On the development side, I work with the MERN stack—MongoDB,
            Express.js, React.js, and Node.js. Recently, I've started using
            Next.js to build SEO-friendly and performant web applications.
          </p>

          <br />

          <p>
            I enjoy learning by doing—whether it's optimizing an algorithm or
            building a user-centric UI. I’m preparing for software development
            roles and seeking opportunities to grow, collaborate, and contribute
            to meaningful tech solutions.
          </p>
        </div>
      </div>

      <h2 className="text-white text-xl tracking-widest font-semibold mt-12 mb-6 border-b border-white/20 w-fit">
        INTERESTS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {interest.map((data, index) => (
          <div
            key={index}
            className="bg-zinc-700 flex gap-3 items-center p-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300"
          >
            <data.icon className="text-4xl text-green-300" />
            <h1 className="text-lg text-cyan-300 font-medium">
              {data.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
