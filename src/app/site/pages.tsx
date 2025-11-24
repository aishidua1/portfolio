import { notFound } from "next/navigation";

const PROJECTS = [
  {
    slug: "calmillini",
    title: "CalmIllini",
    description: "A central hub of mental health resources designed for UIUC students struggling with stress, anxiety, and mental fatigue.",
  },
  {
    slug: "chordify",
    title: "Chordify",
    description: "A learning management platform allowing users to easily navigate through and communicate with each other.",
  },
  {
    slug: "tulip",
    title: "tulip",
    description: "A platform offering investment opportunities in real estate of boroughs instead of individual properties.",
  },
  {
    slug: "flora-and-fauna",
    title: "Flora & Fauna",
    description: "A flower delivery app to make it easy for the user to order flowers for their loved ones.",
  },
];

// This function matches the slug in the URL
export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="text-4xl font-semibold mb-4">{project.title}</h1>
      <p className="text-lg text-slate-700 max-w-2xl">{project.description}</p>

      {/* Add your case study content here */}
      <div className="mt-10">
        <p>More content coming soon...</p>
      </div>
    </main>
  );
}
