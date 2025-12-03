import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-300/70 bg-[#FFC5D3] text-xs text-slate-700">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-6">
        {/* Left: name + note */}
        <div className="space-y-1">
          <p className="font-medium">
            © 2025 Aishi Dua
          </p>
          <p className="text-[11px] text-slate-600">
            Fueled by iced coffee, sweet treats, and hours listening to music on Spotify.
          </p>
        </div>

        {/* Middle: quick links */}
        <nav className="flex flex-wrap gap-3 text-[11px] md:text-xs">
          <Link href="/" className="hover:text-slate-900">
            Home
          </Link>
          <Link href="/about" className="hover:text-slate-900">
            About
          </Link>
        </nav>

        {/* Right: contact */}
        <div className="flex flex-wrap gap-3 text-[11px] md:text-xs">
          <a
            href="mailto:aduxjobs@gmail.com"
            className="hover:text-slate-900"
          >
            Email
          </a>
          {/* Replace with your real LinkedIn later */}
          <a
            href="https://www.linkedin.com/in/aishi-dua/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-slate-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
