import React from "react";
import { motion } from "motion/react";

export const TimeLine = ({ themeClasses }) => {
  return (
    <motion.section className="mt-10">
      <h2
        className={`text-sm font-medium tracking-tight ${themeClasses.textMuted}`}
      >
        Timeline & Achievements
      </h2>

      <div className="mt-4 space-y-10">
        {/* 10th Grade */}
        <div
          className={`shadow-acternity rounded-xl border p-5 ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3 className={`text-sm font-semibold ${themeClasses.text}`}>
            Secondary School (10th Grade){" "}
            <span className={`text-xs ${themeClasses.textMuted}`}>82.80%</span>
          </h3>
          <p className={`mt-1 text-xs ${themeClasses.textMuted}`}>2018</p>
          <p className={`mt-3 text-sm ${themeClasses.textSecondary}`}>
            Built a strong foundation in mathematics and logical thinking, which
            later helped in understanding programming concepts and
            problem-solving approaches.
          </p>
        </div>

        {/* 12th Grade */}
        <div
          className={`shadow-acternity rounded-xl border p-5 ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3 className={`text-sm font-semibold ${themeClasses.text}`}>
            Higher Secondary (12th Grade){" "}
            <span className={`text-xs ${themeClasses.textMuted}`}>72%</span>
          </h3>
          <p className={`mt-1 text-xs ${themeClasses.textMuted}`}>
            2019 – 2020
          </p>
          <p className={`mt-3 text-sm ${themeClasses.textSecondary}`}>
            Studied Physics, Chemistry, and Mathematics, developing analytical
            thinking.
          </p>
          <p className={`mt-3 text-sm ${themeClasses.textSecondary}`}>
            Started learning programming languages like C, HTML, CSS.
          </p>
        </div>

        {/* BTech */}
        <div
          className={`shadow-acternity rounded-xl border p-5 ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3 className={`text-sm font-semibold ${themeClasses.text}`}>
            Bachelor of Technology (B.Tech){" "}
            <span className={`text-xs ${themeClasses.textMuted}`}>8.20/10</span>
          </h3>
          <p className={`mt-1 text-xs ${themeClasses.textMuted}`}>
            2021 – 2025
          </p>

          <ul
            className={`mt-3 list-disc space-y-4 pl-5 text-sm ${themeClasses.textSecondary}`}
          >
            <li>Completed core and elective subjects with strong academics.</li>
            <li>
              Specialized in{" "}
              <span className={`font-medium ${themeClasses.text}`}>
                React, Next, Tailwind, Motion
              </span>
            </li>
            <li>
              Qualified{" "}
              <span className={`font-medium ${themeClasses.text}`}>
                GATE 2024
              </span>{" "}
              in Electronics and Communication Domain
            </li>
            <li>
              <span className={`font-medium ${themeClasses.text}`}>
                Received 2 job offers
              </span>
            </li>
            <li>Built AI Photo Editor, Job Portals, Portfolio.</li>
            <li>
              Practiced{" "}
              <span className={`font-medium ${themeClasses.text}`}>
                DSA in C++
              </span>
            </li>
            <li>Explored React, Next, Vue ecosystems.</li>
          </ul>
        </div>

        {/* Present */}
        <div
          className={`shadow-acternity rounded-xl border p-5 ${themeClasses.cardBg} ${themeClasses.border}`}
        >
          <h3 className={`text-sm font-semibold ${themeClasses.text}`}>
            Present Focus
          </h3>
          <p className={`mt-3 text-sm ${themeClasses.textSecondary}`}>
            Preparing for backend and software engineering roles by improving
            problem-solving and building production-ready applications.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
