"use client";

import { useParams } from "next/navigation";

type ProcessStep = {
  title: string;
  description: string;
};

type Project = {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  timeframe: string;
  tools: string[];
  overview: string;
  problem: string;
  goal: string;
  myContribution: string;
  process: ProcessStep[];
  outcomes: string[];
};

const PROJECTS: Project[] = [
  {
    slug: "calmillini",
    title: "Calmillini",
    subtitle:
      "A central hub of mental health resources designed for UIUC students struggling with stress, anxiety, and mental fatigue.",
    role: "UX Design • Research",
    timeframe: "2024",
    tools: ["Figma", "Miro", "Notion"],
    overview:
      "Calmillini is a digital experience that curates campus mental health resources into one clear, student-friendly place. It helps students quickly find the right kind of support without feeling overwhelmed.",
    problem:
      "Students knew resources existed, but didn’t know where to start, which options were right for them, or how to compare services.",
    goal:
      "Create a centralized, approachable starting point that clarifies available resources and matches students with what they actually need.",
    myContribution:
      "Led interviews, synthesized findings, mapped the service ecosystem, and designed the main navigation and resource detail layouts.",
    process: [
      {
        title: "Research",
        description:
          "Interviewed students and campus staff to understand awareness, trust, and access barriers around mental health resources."
      },
      {
        title: "Synthesis",
        description:
          "Mapped the current journey of seeking support and highlighted drop-off points where students tended to give up."
      },
      {
        title: "Concepting",
        description:
          "Explored multiple structures for organizing resources and landed on a hub-and-path model centered on student needs."
      },
      {
        title: "Prototyping",
        description:
          "Created mid- and high-fidelity screens in Figma, focusing on clear copy, destigmatizing language, and visual hierarchy."
      },
      {
        title: "Testing",
        description:
          "Ran usability tests with students and iterated on navigation labels, filtering, and the first-time experience."
      }
    ],
    outcomes: [
      "Students reported feeling less overwhelmed when viewing resources in one place.",
      "Helped surface gaps in existing campus communication around where to start.",
      "Provided a concrete prototype for future partnership conversations with campus services."
    ]
  },
  {
    slug: "chordify",
    title: "Chordify",
    subtitle:
      "A learning management platform allowing users to easily navigate through and communicate with each other.",
    role: "Product • Interaction Design",
    timeframe: "2024",
    tools: ["Figma", "FigJam"],
    overview:
      "Chordify reimagines how learners navigate courses, assignments, and communication by simplifying the core actions students use every day.",
    problem:
      "Existing LMS tools are cluttered and inconsistent, forcing students to dig for basic information like deadlines, messages, and resources.",
    goal:
      "Design a more intuitive LMS home experience that surfaces what matters today and reduces the cognitive load of managing classes.",
    myContribution:
      "Owned the interaction design for the dashboard and course overview, and created flows to unify announcements, tasks, and messages.",
    process: [
      {
        title: "Current State Analysis",
        description:
          "Audited existing LMS platforms and captured pain points around navigation, information density, and notifications."
      },
      {
        title: "Task Flows",
        description:
          "Mapped essential flows (checking today’s work, messaging instructors, finding materials) and removed unnecessary steps."
      },
      {
        title: "Wireframes",
        description:
          "Sketched and prototyped low-fidelity layouts to quickly validate structure and hierarchy with peers."
      },
      {
        title: "Visual Design",
        description:
          "Refined the interface with clear typography, color roles, and consistent components for cards and lists."
      },
      {
        title: "Feedback & Iteration",
        description:
          "Gathered feedback from students and adjusted how information was grouped so that 'today' always felt manageable."
      }
    ],
    outcomes: [
      "Helped clarify how a simplified dashboard could reduce context-switching for students.",
      "Created a reusable component system for future screens.",
      "Set up a strong foundation for future usability testing and development."
    ]
  },
  {
    slug: "tulip",
    title: "Tulip",
    subtitle:
      "A platform offering investment opportunities in real estate of boroughs instead of individual properties.",
    role: "UX Design • Product",
    timeframe: "2024",
    tools: ["Figma", "Miro"],
    overview:
      "Tulip explores how to make real estate investment more accessible by letting users invest in baskets of properties at the borough level.",
    problem:
      "Traditional real estate investing often demands large amounts of capital and deep expertise, which excludes many first-time investors.",
    goal:
      "Design an experience that explains complex financial products in simple terms and helps users feel confident making their first investment.",
    myContribution:
      "Framed the product concept, mapped key user journeys, and designed core screens for onboarding, exploring boroughs, and reviewing risk.",
    process: [
      {
        title: "Exploratory Research",
        description:
          "Spoke with potential first-time investors to understand their goals, fears, and questions about real estate."
      },
      {
        title: "Experience Mapping",
        description:
          "Outlined the end-to-end journey from initial curiosity to making a first investment and monitoring performance."
      },
      {
        title: "Information Design",
        description:
          "Focused on explaining risk, diversification, and expected returns through approachable visuals and plain language."
      },
      {
        title: "Prototype",
        description:
          "Created a clickable Figma prototype showing borough discovery, comparison, and investment confirmation."
      },
      {
        title: "Feedback",
        description:
          "Gathered reactions from peers and iterated on clarity of terminology and visual hierarchy."
      }
    ],
    outcomes: [
      "Improved understanding of how everyday investors think about risk and trust in financial products.",
      "Produced a prototype suitable for future concept testing with target users.",
      "Highlighted opportunities for education-first design in fintech."
    ]
  },
  {
    slug: "flora-and-fauna",
    title: "Flora & Fauna",
    subtitle:
      "A flower delivery app to make it easy for the user to order flowers for their loved ones.",
    role: "UX Design • Product",
    timeframe: "2023",
    tools: ["Figma", "Miro"],
    overview:
      "Flora & Fauna simplifies the process of choosing and sending flowers by focusing on intention, occasion, and guidance instead of endless catalog scrolling.",
    problem:
      "People often feel unsure what to pick, how much to spend, or whether their order will arrive as expected.",
    goal:
      "Design a clearer, warmer experience for selecting bouquets and scheduling deliveries that feels trustworthy and personal.",
    myContribution:
      "Defined key flows, designed mobile screens, and crafted copy around occasions, card messages, and delivery details.",
    process: [
      {
        title: "User Interviews",
        description:
          "Interviewed people about past experiences sending flowers and frustrations with existing services."
      },
      {
        title: "Journey Mapping",
        description:
          "Mapped the emotional journey from deciding to send flowers through to receiving confirmation of delivery."
      },
      {
        title: "Concept Development",
        description:
          "Explored concepts centered on occasion-based starting points and curated recommendations."
      },
      {
        title: "UI Design",
        description:
          "Designed an end-to-end mobile flow focusing on clarity of options, delivery details, and message personalization."
      },
      {
        title: "Prototype Review",
        description:
          "Walked potential users through the prototype and adjusted copy and layout to reduce friction."
      }
    ],
    outcomes: [
      "Participants felt more confident selecting bouquets and understanding delivery timelines.",
      "Revealed opportunities to build stronger trust signals into the purchase flow.",
      "Resulted in a polished mobile case study to showcase e-commerce and flows work."
    ]
  }
];

export default function ProjectCaseStudyPage() {
  const params = useParams();
  const slug = params?.slug as string | undefined;

  if (!slug) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-sm text-slate-700">
          No project selected. (Slug was missing in the URL.)
        </p>
      </main>
    );
  }

  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-12">
        <p className="text-sm text-slate-700">
          No case study found for: <span className="font-mono">{slug}</span>
        </p>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      {/* Header / Hero */}
      <section className="mb-10 border-b pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
          Case Study
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-slate-900">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-slate-700">
          {project.subtitle}
        </p>

        <div className="mt-6 grid gap-4 text-sm md:grid-cols-3">
          <div>
            <h3 className="font-medium text-slate-900">Role</h3>
            <p className="text-slate-700">{project.role}</p>
          </div>
          <div>
            <h3 className="font-medium text-slate-900">Timeframe</h3>
            <p className="text-slate-700">{project.timeframe}</p>
          </div>
          <div>
            <h3 className="font-medium text-slate-900">Tools</h3>
            <p className="text-slate-700">{project.tools.join(", ")}</p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Overview</h2>
        <p className="text-slate-700">{project.overview}</p>
      </section>

      {/* Problem & Goal */}
      <section className="mb-10 grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Problem</h2>
          <p className="mt-2 text-slate-700">{project.problem}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Goal</h2>
          <p className="mt-2 text-slate-700">{project.goal}</p>
        </div>
      </section>

      {/* My Contribution */}
      <section className="mb-10 space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">
          My Contribution
        </h2>
        <p className="text-slate-700">{project.myContribution}</p>
      </section>

      {/* Process */}
      <section className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Process</h2>
        <div className="space-y-4">
          {project.process.map((step, index) => (
            <div key={index} className="rounded-lg border bg-white p-4">
              <h3 className="font-medium text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-700">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Outcomes */}
      <section className="mb-16">
        <h2 className="mb-4 text-xl font-semibold text-slate-900">Outcomes</h2>
        <ul className="list-disc space-y-2 pl-5 text-slate-700">
          {project.outcomes.map((item, index) => (
            <li key={index} className="text-sm">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
