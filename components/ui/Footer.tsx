"use client";

import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#050505] border-t border-white/10">
      {/* Accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFD600]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="font-asah text-2xl text-white tracking-wide mb-4">
              VELOCITY
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Performance-driven infrastructure and campaign systems engineered
              for scale, speed, and precision.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Product
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white transition">Features</li>
                <li className="hover:text-white transition">Integrations</li>
                <li className="hover:text-white transition">Pricing</li>
                <li className="hover:text-white transition">Changelog</li>
              </ul>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Company
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-white transition">About</li>
                <li className="hover:text-white transition">Careers</li>
                <li className="hover:text-white transition">Contact</li>
                <li className="hover:text-white transition">Legal</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">
                Get Started
              </p>
              <p className="text-sm text-gray-400 mb-6 max-w-xs">
                Ready to move faster than your competitors?
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FFD600] text-black text-sm font-medium hover:scale-[0.97] transition">
                Launch Project
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Velocity. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500">
            <Github className="hover:text-white transition cursor-pointer" size={18} />
            <Twitter className="hover:text-white transition cursor-pointer" size={18} />
            <Linkedin className="hover:text-white transition cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}
