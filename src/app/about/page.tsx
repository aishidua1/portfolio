"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main
      className="min-h-screen text-slate-900"
      style={{ backgroundColor: "#FDF0D5" }}
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-12 px-4 py-12 md:px-6 md:py-16">
        {/* Top: intro + back link */}
        <div className="flex items-start justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              About
            </p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-3xl font-medium tracking-tight sm:text-4xl"
            >
              A bit more <span className="text-pink-400">about</span> {" "} me!
            </motion.h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              I am a first-year grad student at Duke University, pursuing a Master&apos;s of 
              Engineering in Design and Technology Innovation! I just graduated from the University 
              of Illinois Urbana Champaign with a B.S. in Information Sciences (HCI/UX pathway) and 
              a minor in Psychology!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="hidden text-xs md:block"
          >
            <Link
              href="/"
              className="rounded-full border border-slate-400 px-3 py-1 text-slate-700 hover:border-slate-800 hover:bg-slate-900 hover:text-[#FDF0D5] transition"
            >
              ← Back to home
            </Link>
          </motion.div>
        </div>

        {/* Main layout: left bio, right quick facts */}
        <section className="grid gap-10 md:grid-cols-[1.8fr,1.2fr]">
          {/* Left: longer bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="space-y-4 text-sm leading-relaxed text-slate-800 sm:text-base"
          >
            <p>
              From an early age, I&apos;ve been captivated by the world of art and creativity, 
              expressing myself through doodles, drawings, and paintings. I knew that I wanted 
              to continue this passion and find the cross between design and technology, which led me 
              to UX Design. I&apos;m driven by the passion to transform intricate design concepts into {" "}
              <span className="font-bold">
              intuitive, user-friendly platforms. {" "}
              </span>
              My journey as a {" "}
              <span className="font-bold">
              Google Certified UX Designer {" "}
              </span>
              has given me cutting-edge insights and expertise in creating seamless digital 
              experiences. My mission is clear: to bridge the gap between art and technology, 
              ensuring that digital solutions are accessible to all.
            </p>
            {/* <p>
              Recently, I&apos;ve been working on projects around{" "}
              <span className="font-medium">
                social media and wellbeing, weather experiences, and
                productivity tools
              </span>
              . I like designing not just for single screens, but for the
              services and ecosystems around them.
            </p>
            <p>
              Outside of class and studio work, I explore{" "}
              <span className="font-medium">entrepreneurship</span> and{" "}
              <span className="font-medium">data-driven decision making</span> —
              building experiments, dashboards, and small tools that help
              people see patterns in their own behavior.
            </p> */}
          </motion.div>

          {/* Right: quick facts */}
          <motion.aside
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="space-y-6 rounded-2xl border border-slate-300/70 bg-white/60 p-4 text-xs shadow-sm backdrop-blur-sm sm:text-sm"
          >
            <div>
              <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Currently
              </h2>
              <ul className="space-y-1 text-slate-700">
                <li>🎓 Grad student at Duke (DTI)</li>
                <li>🧠 Exploring UX, product strategy &amp; systems design</li>
                <li>💻 Building a portfolio of digital experiences</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                I enjoy working on
              </h2>
              <ul className="space-y-1 text-slate-700">
                <li>• Research-driven case studies</li>
                <li>• Dashboards &amp; data storytelling</li>
                <li>• Service &amp; journey design</li>
                <li>• Tools that reduce friction and anxiety</li>
              </ul>
            </div>

            <div>
              <h2 className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Tools &amp; languages
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {[
                  "Figma",
                  "FigJam",
                  "Notion",
                  "Miro",
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Python",
                  "Tableau",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-300 bg-white/70 px-2 py-0.5 text-[11px] text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.aside>
        </section>

        {/* Bottom: how I like to work & contact */}
        <section className="space-y-6 text-sm text-slate-800 sm:text-base">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="space-y-3"
          >
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              How I like to work
            </h2>
            <p>
              I&apos;m happiest when I can collaborate closely with teammates,
              ask a lot of questions, and prototype early. I care about making
              things understandable for non-designers and making sure decisions
              are grounded in both{" "}
              <span className="font-medium">people&apos;s stories</span> and{" "}
              <span className="font-medium">evidence from data</span>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-300 pt-6 text-sm"
          >
            <p className="text-slate-700">
              Open to internships, collaborations, and thoughtful conversations
              about design, tech, and futures.
            </p>
            <Link
              href="mailto:your.email@duke.edu"
              className="rounded-full border border-slate-800 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-900 hover:bg-slate-900 hover:text-[#FDF0D5] transition"
            >
              Say hello
            </Link>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
