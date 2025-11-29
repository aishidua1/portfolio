"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function BackButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
    >
      <Link
        href="/"
        className="inline-block rounded-full border border-slate-400 px-3 py-1 text-xs text-slate-700 hover:border-slate-800 hover:bg-slate-900 hover:text-[#FDF0D5] transition"
      >
        ← Back to home
      </Link>
    </motion.div>
  );
}
