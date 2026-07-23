"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-teal-950 text-white" role="contentinfo">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl font-semibold text-white mb-1">
                Stay Connected
              </h3>
              <p className="text-teal-200/70 text-sm max-w-md">
                Subscribe to receive updates on our research, programmes, and
                opportunities to collaborate.
              </p>
            </div>
            <form
              className="flex w-full lg:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 lg:w-80 px-5 py-3 rounded-full bg-white/10 border border-white/15 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all"
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-teal-500 hover:bg-teal-400 text-teal-950 font-semibold text-sm rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="relative w-[220px] h-[70px] mb-5">
              <Image
                src="/images/chwri-logo.png"
                alt="CHWRI logo"
                fill
                className="object-contain object-left"
                sizes="220px"
              />
            </div>
            <p className="text-teal-200/60 text-sm leading-relaxed mb-6 max-w-sm">
              A multidisciplinary hub dedicated to improving health outcomes and
              quality of life through innovative research and practical
              interventions. Based in Walewale, Ghana.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-teal-200/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-teal-400/60" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <a
                href={`tel:${CONTACT_INFO.phones[0].replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-sm text-teal-200/60 hover:text-teal-300 transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0 text-teal-400/60" />
                {CONTACT_INFO.phones.join(" / ")}
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-3 text-sm text-teal-200/60 hover:text-teal-300 transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0 text-teal-400/60" />
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300/80 mb-4">
              About
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-200/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300/80 mb-4">
              Our Work
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.work.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-200/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300/80 mb-4">
              Engage
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.engage.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-teal-200/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-teal-300/80 mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com" },
                { icon: Twitter, label: "Twitter", href: "https://x.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
                { icon: Youtube, label: "YouTube", href: "https://www.youtube.com" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-teal-200/60 hover:text-white transition-all"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <Link
              href="/get-involved"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-teal-950 font-semibold text-sm rounded-full transition-colors group"
            >
              Get Involved
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Partner resources */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <p className="text-xs text-teal-200/40 text-center sm:text-left">
            Resources:{" "}
            <a
              href="https://www.investorlist.com"
              target="_blank"
              rel="noopener"
              className="underline underline-offset-2 hover:text-teal-200/70 transition-colors"
            >
              Investorlist.com — downloadable, curated lists of active startup
              investors, angels, VCs, and family offices
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-teal-200/40">
            &copy; {new Date().getFullYear()} Centre for Health & Wellbeing
            Research and Interventions. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {FOOTER_LINKS.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-teal-200/40 hover:text-teal-200/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="text-xs text-teal-200/30">
            Powered By Doctor Barns Tech "Built withfor community health"
          </p>
        </div>
      </div>
    </footer>
  );
}
