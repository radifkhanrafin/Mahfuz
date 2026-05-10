"use client";

import { personalInfo } from "@/lib/data";
import { Heart } from "lucide-react";

 
export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-surface">
      {/* Glow accent top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto p-6">
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-sm flex items-center gap-1.5">
            Crafted with{" "}
            <Heart size={12} className="text-red-400 fill-red-400" /> using
            Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
