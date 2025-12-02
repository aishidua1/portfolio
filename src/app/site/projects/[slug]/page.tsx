"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/app/components/backbutton";

export default function ProjectPage() {
  const params = useParams();
  const slug = params?.slug as string;

  if (slug === "calmillini") {
    return <CalmIlliniPage />;
  }

  if (slug === "chordify") {
    return <ChordifyPage />;
  }

  // Fallback for other projects
  return (
    
    <main className="mx-auto max-w-4xl px-4 py-12" style={{ backgroundColor: "#FAF0E6" }}>
        {/* Back Button */}
        <div className="mb-5">
          <BackButton />
        </div>
      <p className="text-slate-700">Project coming soon!</p>
    </main>
    
  );
}

function CalmIlliniPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FAF0E6" }}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16 lg:px-12">
        {/* Back Button */}
        <div className="mb-5">
          <BackButton />
        </div>

        {/* Hero Section with Title */}
        <section className="mb-12">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">CalmIllini</h4>
          
          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/projects/mindfulness.png"
              alt="CalmIllini mockup"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-16">
          <h3 className="mb-4 text-2xl font-semibold text-slate-900">Overview:</h3>
          <p className="mb-8 text-lg leading-relaxed text-slate-700">
            CalmIllini is a digital platform designed for UIUC students struggling with stress, 
            anxiety, and mental fatigue. Our goal was to create a central hub for mental health 
            resources, combining journaling, meditation, and peer-based support into a single 
            accessible experience.
          </p>

          {/* Info Grid */}
          <div className="grid gap-8 rounded-2xl bg-white/60 p-8 shadow-sm md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Problem:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                College students face academic and career pressure, inconsistent access to mental 
                health resources, and difficulty sustaining healthy coping strategies.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Solution:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                Create a one-stop digital hub that makes resources visible, accessible, and 
                personalized — supporting students' mental health journeys more effectively.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">My Role:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                UX Designer + Researcher
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Team:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                1 Project Lead, 2 Researchers, 1 UX Designer
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Tools:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                Miro, Figma, Canva, Google Slides, Google Forms
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Timeline:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                Aug 2024 – Dec 2024
              </p>
            </div>
          </div>
        </section>

        {/* Understanding the User */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">Understanding the user</h4>
          <div className="space-y-4 text-slate-700">
            <p className="leading-relaxed">
              As college students, we understood that many of our peers struggled with mental health 
              problems. We decided that it would be best to focus this product on students that went 
              to the University of Illinois Urbana Champaign and were in the ages between 17 to 22.
            </p>
            <p className="leading-relaxed">
              We decided to go through the process of <strong>segmentation</strong>, starting from 
              college students and narrowing it to{" "}
              <strong>"UIUC students dealing with academic anxiety, stress who have an interest in 
              journaling and meditation."</strong>
            </p>
          </div>
          <a href="/projects/calmillini/understanding user.png" target="_blank" rel="noopener noreferrer" className="relative mt-6 block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
            <Image
              src="/projects/calmillini/understanding user.png"
              alt="Understanding the User"
              fill
              className="object-contain"
            />
          </a>
        </section>

        {/* Interview Insights */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">Interview Insights</h4>
          <div className="mb-8 space-y-3 text-slate-700">
            <p className="font-medium">Key themes from user interviews:</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Coping techniques people use bring them delight</li>
              <li>Aspects of academia bring people pain points</li>
              <li>Inconsistent resource visibility (saturated, but not easily visible)</li>
              <li>Lots of Googling required to find resources</li>
              <li>Techniques people want to learn vary</li>
              <li>Academic stress impacts student mental health</li>
              <li>Students tend to engage in familiar activities to combat mental fatigue</li>
              <li>Students found campus resources satisfactory, but not sustainable</li>
              <li>Most people found resources through same means</li>
            </ul>
          </div>

          {/* Quote */}
          <blockquote className="border-l-4 border-pink-400 bg-slate-50 p-6 italic">
            <p className="mb-2 text-lg text-slate-800">
              "It's frustrating trying to find the resources that UIUC offers. A lot of the 
              time I get stressed from school work, especially around finals season"
            </p>
            <footer className="text-sm font-normal not-italic text-slate-600">
              — Interview "S"
            </footer>
          </blockquote>
        </section>

        {/* Journey & Empathy Mapping */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">
            Journey & Empathy Mapping
          </h4>
          <p className="mb-6 text-lg leading-relaxed text-slate-700">
            We created a journey and empathy map to get a better understanding of our overall 
            goal for the platform, as well as how the user would feel through the flow of CalmIllini.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <a href="/projects/calmillini/journey map.png" target="_blank" rel="noopener noreferrer" className="relative aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/journey map.png"
                alt="Journey Map"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/empathy map.png" target="_blank" rel="noopener noreferrer" className="relative aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/empathy map.png"
                alt="Empathy Map"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </section>

        {/* Persona */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">Persona</h4>
          <a href="/projects/calmillini/persona.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
            <Image
              src="/projects/calmillini/persona.png"
              alt="User Persona"
              fill
              className="object-contain"
            />
          </a>
        </section>

        {/* Interest Survey Data */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">
            Interest Survey Data
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <a href="/projects/calmillini/survey data1.png" target="_blank" rel="noopener noreferrer" className="relative aspect-square w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey data1.png"
                alt="Interest Survey Data 1"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey data2.png" target="_blank" rel="noopener noreferrer" className="relative aspect-square w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey data2.png"
                alt="Interest Survey Data 2"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey data3.png" target="_blank" rel="noopener noreferrer" className="relative aspect-square w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey data3.png"
                alt="Interest Survey Data 3"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </section>

        {/* Problem Space Survey Data */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">
            Problem Space Survey Data
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <a href="/projects/calmillini/survey 4.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey 4.png"
                alt="Problem Space Survey 1"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey5.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey5.png"
                alt="Problem Space Survey 2"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey6.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey6.png"
                alt="Problem Space Survey 3"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey7.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey7.png"
                alt="Problem Space Survey 4"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </section>

        {/* Competitive Analysis */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">
            Competitive Analysis
          </h4>
          <p className="mb-4 text-slate-700">
            New segmented core audience: students experiencing academic stress
          </p>
          <div className="mb-6 space-y-2 text-slate-700">
            <p className="font-medium">SWOT Analysis:</p>
            <ul className="list-inside list-disc space-y-1 pl-6">
              <li>MANUAL</li>
              <li>Mantra Health</li>
              <li>Koru Mindfulness</li>
              <li>CAPS</li>
            </ul>
          </div>
          <div className="space-y-3 text-slate-700">
            <p className="font-medium">Summary/Results:</p>
            <ul className="list-inside list-disc space-y-2 pl-6">
              <li>2 out of the 4 competitors <strong>incorporated 1:1 care</strong></li>
              <li>
                If a platform had journaling, they did not have meditation
                <ul className="ml-6 mt-1 list-inside list-circle">
                  <li>We could incorporate both meditation and journaling</li>
                </ul>
              </li>
              <li>
                Direct competitor - <strong>Mantra Health</strong>
                <ul className="ml-6 mt-1 list-inside list-circle space-y-1">
                  <li>There is already an "all-in-one solution" (Shows our solution is viable)</li>
                  <li>We need to find what we can add to our platform to <strong>make our solution better</strong></li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Sketches */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">Sketches</h4>
          <h6 className="mb-6 text-1xl font text-slate-900">click the image to see a more detailed view of the sketches!</h6>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <a href="/projects/calmillini/sketch1.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch1.png"
                alt="Sketch 1"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/sketch2.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch2.png"
                alt="Sketch 2"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/sketch3.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch3.png"
                alt="Sketch 3"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/sketch4.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch4.png"
                alt="Sketch 4"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </section>


        {/* Reflection */}
        <section className="mb-16">
          <h3 className="mb-6 text-3xl font-semibold text-slate-900">Reflection</h3>
          <p className="leading-relaxed text-slate-700">
            Through this project, I was able to develop my communication skills within a team as 
            well as learn more about the entire design thinking process. Overall, I learned how to 
            approach problems with empathy while also embracing failure as part of the process. As 
            a team, we realized the importance of understanding users' needs deeply before jumping 
            to solutions. While the above prototypes were initial designs, the next steps would be 
            to refine the prototype to create a fully functional application and then to move on to 
            the development phase of the design process.
          </p>
        </section>

        {/* Embedded Case Study */}
        <section className="mb-16">
          <div className="overflow-hidden rounded-lg border bg-white p-4">
            <div className="relative aspect-[16/9] w-full">
              <iframe
                src="https://www.canva.com/design/DAGrqq2bxX4/iUNDAUDMaPXAumCMp5tv-g/view?embed"
                className="h-full w-full"
                allowFullScreen
                title="CalmIllini Case Study"
              ></iframe>
            </div>
            <p className="mt-4 text-center text-sm text-slate-600">
              Click to view the case study!
            </p>
          </div>
        </section>

        {/* CTA Button */}
        <section className="mb-16 text-center">
          <Link
            href="/"
            className="inline-block rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-[#FAF0E6] transition hover:bg-slate-800"
          >
            home page
          </Link>
        </section>
      </div>
    </main>
  );
}

function ChordifyPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#FAF0E6" }}>
      <div className="mx-auto max-w-4xl px-6 py-12 md:px-8 md:py-16 lg:px-12">
        {/* Back Button */}
        <div className="mb-5">
          <BackButton />
        </div>

        {/* Hero Section with Title */}
        <section className="mb-12">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">Chordify / Iris Tutor</h4>
          
          {/* Hero Image */}
          <div className="relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/projects/chordify.png"
              alt="Chordify mockup"
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Overview Section */}
        <section className="mb-16">
          <h3 className="mb-4 text-2xl font-semibold text-slate-900">Overview:</h3>
          <p className="mb-8 text-lg leading-relaxed text-slate-700">
          Iris Tutor is a learning management system that allows users to 
          easily access and learn material from professional teachers. Instructors 
          and students will be able to easily connect with each other and gain from 
          the overall experience as well!
          </p>

          {/* Info Grid */}
          <div className="grid gap-8 rounded-2xl bg-white/60 p-8 shadow-sm md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Problem:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                Current LMS platforms do not allow students and teachers to interact. 
                There also isn’t a simple and easy way for people to learn and have the 
                motivation to continue learning. 
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Solution:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                Create a platform that has an incentive for people to learn and easy access 
                to all users of the application. 
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">My Role:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                UX Designer
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Team:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                1 Product Manager, 2 UX Designers, 4 Developers
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Tools:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                Figma, Canva
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-semibold text-slate-900">Timeline:</h4>
              <p className="text-sm leading-relaxed text-slate-700">
                Jun 2024 – Aug 2024
              </p>
            </div>
          </div>
        </section>


        {/* Persona */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">Persona</h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <a href="/projects/chordify/persona1.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
            <Image
              src="/projects/chordify/persona1.png"
              alt="persona1"
              fill
              className="w-full rounded-xl mb-8"
            />
          </a>
          <a href="/projects/chordify/persona2.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
            <Image
              src="/projects/chordify/persona2.png"
              alt="persona 2"
              fill
              className="w-full rounded-xl mb-8"
            />
          </a>
          </div>
        </section>
        
        <section className="mb-16">
          <h3 className="mb-6 text-3xl font-semibold text-slate-900">Sketches</h3>
          <a href="/projects/chordify/persona2.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-[4/3] w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
            <Image
              src="/projects/chordify/persona2.png"
              alt="persona 2"
              fill
              className="object-contain"
            />
          </a>
          <p className="leading-relaxed text-slate-700">
            While the sketches of the website were very basic, they helped build 
            a solid foundation of what the idea of the platform was supposed to 
            look like. Shown on the right are some examples of what the basic first 
            screen when clicked on would look like. There were some changes made 
            overall but this is what the designs began with.
          </p>
        </section>


        {/* Interest Survey Data */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">
            Interest Survey Data
          </h4>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <a href="/projects/calmillini/survey data1.png" target="_blank" rel="noopener noreferrer" className="relative aspect-square w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey data1.png"
                alt="Interest Survey Data 1"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey data2.png" target="_blank" rel="noopener noreferrer" className="relative aspect-square w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey data2.png"
                alt="Interest Survey Data 2"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey data3.png" target="_blank" rel="noopener noreferrer" className="relative aspect-square w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey data3.png"
                alt="Interest Survey Data 3"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </section>

        {/* Problem Space Survey Data */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">
            Problem Space Survey Data
          </h4>
          <div className="space-y-6">
            <a href="/projects/calmillini/survey 4.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey 4.png"
                alt="Problem Space Survey 1"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey5.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey5.png"
                alt="Problem Space Survey 2"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey6.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey6.png"
                alt="Problem Space Survey 3"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/survey7.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/survey7.png"
                alt="Problem Space Survey 4"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </section>


        {/* Sketches */}
        <section className="mb-16">
          <h4 className="mb-6 text-3xl font-semibold text-slate-900">Sketches</h4>
          <div className="space-y-6">
            <a href="/projects/calmillini/sketch1.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch1.png"
                alt="Sketch 1"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/sketch2.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch2.png"
                alt="Sketch 2"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/sketch3.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch3.png"
                alt="Sketch 3"
                fill
                className="object-contain"
              />
            </a>
            <a href="/projects/calmillini/sketch4.png" target="_blank" rel="noopener noreferrer" className="relative block aspect-video w-full overflow-hidden rounded-lg border cursor-pointer transition hover:opacity-90">
              <Image
                src="/projects/calmillini/sketch4.png"
                alt="Sketch 4"
                fill
                className="object-contain"
              />
            </a>
          </div>
        </section>


        {/* Reflection */}
        <section className="mb-16">
          <h3 className="mb-6 text-3xl font-semibold text-slate-900">Reflection</h3>
          <p className="leading-relaxed text-slate-700">
            Through my internship with Chordify, I truly feel that I developed my design 
            and communication skills. Under the guidance of my mentor, I learned how to 
            improve my skills as a designer. I hope that my contribution was beneficial to 
            the company as I truly feel that this was beneficial to me and my learning experience.
          </p>
        </section>


        {/* CTA Button */}
        <section className="mb-16 text-center">
          <Link
            href="/"
            className="inline-block rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-[#FAF0E6] transition hover:bg-slate-800"
          >
            home page
          </Link>
        </section>
      </div>
    </main>
  );
}


