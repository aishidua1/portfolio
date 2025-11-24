"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600"],
  style: ["italic"],
});

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  category: string;
  accent: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    slug: "calmillini",
    title: "CalmIllini",
    subtitle: "A central hub of mental health resources designed for UIUC students struggling with stress, anxiety, and mental fatigue.",
    role: "UX Design • Research",
    year: "2024",
    category: "UX / Product / Design Thinking",
    accent: "from-sky-500 to-cyan-400",
    image: "/projects/mindfulness.png",
  },
  {
    slug: "Chordify",
    title: "Chordify",
    subtitle: "A learning management platform allowing users to easily navigate through and communicate with each other.",
    role: "Product • Interaction Design",
    year: "2024",
    category: "UX / Product",
    accent: "from-emerald-500 to-lime-400",
    image: "/projects/chordify.png",
  },
  {
    slug: "tulip",
    title: "tulip",
    subtitle: "A platform offering investment opportunities in real estate of boroughs instead of individual properties.",
    role: "UX Design • Product",
    year: "2024",
    category: "UX / Product",
    accent: "from-fuchsia-500 to-rose-400",
    image: "/projects/tulip.png",
  },
  {
    slug: "Flora & Fauna",
    title: "Flora & Fauna",
    subtitle: "A flower delivery app to make it easy for the user to order flowers for their loved ones.",
    role: "UX Design • Product",
    year: "2023",
    category: "UX / Product",
    accent: "from-indigo-500 to-purple-500",
    image: "/projects/flora.png",
  },
];

// const CATEGORIES = ["All", "UX / Product"];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const visibleProjects = PROJECTS.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FDF0D5" }}>
       <div className="relative mx-auto flex max-w-5xl flex-col gap-16 px-4 py-12 md:px-6 md:py-16">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-[2fr,1.2fr] md:items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/60 px-3 py-1 text-xs text-slate-800"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Currently @ Duke University studying Design & Tech Innovation
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl"
            >
              <span className="block text-base font-normal text-slate-500 sm:text-lg mb-1">
                Hi! My name is
              </span>
              <span
                className={`${playfair.className} block text-[clamp(3rem,5vw,4.5rem)] leading-tight text-blue-500`}
              >
                Aishi!
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base"
            >
              A UI/UX/product designer focused on creating innovative, user-centric solutions by focusing on using empathy to truly understand the user.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-3 text-sm"
            >
              <a
                href="#work"
                className="rounded-full bg-slate-50 px-4 py-2 font-medium text-slate-950 hover:bg-slate-200"
              >
                View selected work
              </a>
              <a
                href="/about"
                className="rounded-full border border-slate-600 px-4 py-2 text-slate-500 hover:border-slate-300"
              >
                About &amp; CV
              </a>
            </motion.div>
          </div>

          {/* Bubble-style quick nav */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="grid gap-4 text-sm md:justify-items-end"
          >
            <div className="rounded-2xl border border-slate-800 bg-white-900/60 p-4 shadow-lg shadow-emerald-500/10">
              <p className="text-xs uppercase tracking-wide text-slate-500">
                Choose a bubble
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Bubble href="#work" label="Case Studies" />
                <Bubble href="/playground" label="Playground" />
                <Bubble href="/about" label="About" />
              </div>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 text-slate-800">
              <p className="text-xs uppercase tracking-wide text-white-500">
                Focus areas
              </p>
              <p className="mt-2">
                UX Research • Interaction Design •
                Service design • Product strategy
              </p>
            </div>
          </motion.div>
        </section>

        {/* Work section */}
        <section id="work" className="space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold sm:text-2xl">Selected work</h2>
              <p className="text-sm text-slate-500">
                A few projects that represent how I think and build.
              </p>
            </div>
{/* 
            Category filter
            <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full border px-3 py-1 transition ${
                    activeCategory === cat
                      ? "border-emerald-400 bg-emerald-400/10 text-emerald-200"
                      : "border-slate-700 text-slate-700 hover:border-slate-400"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div> */}
          </div>

          <motion.div
            layout
            className="grid gap-4 md:grid-cols-2"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </motion.div>
        </section>

        {/* Tiny personal line */}
        <section className="border-t border-slate-800 pt-6 text-xs text-slate-500">
          <p>
            Fueled by iced cofee, many iterations, and hours listening to music on Spotify.
          </p>
        </section>
      </div>
    </main>
  );
}

type BubbleProps = {
  href: string;
  label: string;
};

function Bubble({ href, label }: BubbleProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-100 shadow-sm hover:border-emerald-400"
    >
      {label}
    </motion.a>
  );
}

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      href={`/work/${project.slug}`}
      layout
      whileHover={{ y: -4, scale: 1.01 }}
      className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.75)]"
    >
      {/* Colored glow */}
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-32 translate-y-[-40%] bg-gradient-to-br ${project.accent} opacity-30 blur-3xl`}
      />

      {/* Hover image overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="100%"
        />
        {/* Dark overlay so text is still readable */}
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      {/* Content stays on top */}
      <div className="relative z-10 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-300">
          <span className="rounded-full border border-slate-700 bg-slate-900/60 px-2 py-0.5">
            {project.category}
          </span>
          <span className="text-slate-400">{project.year}</span>
        </div>
        <h3 className="text-base font-semibold text-slate-50 group-hover:text-emerald-200">
          {project.title}
        </h3>
        <p className="text-xs text-slate-300">{project.subtitle}</p>
        <p className="text-xs font-medium text-slate-400">{project.role}</p>
        <p className="text-xs text-emerald-300 opacity-0 transition-opacity group-hover:opacity-100">
          Open case study →
        </p>
      </div>
    </motion.a>
  );
}

