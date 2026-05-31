"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (!isMobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileOpen]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-teal-900 text-white/90 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          <p className="text-white/70 text-xs tracking-wide">
            Centre for Health & Wellbeing Research and Interventions — Walewale,
            Ghana
          </p>
          <div className="flex items-center gap-6">
            <a
              href="tel:+233553311101"
              className="flex items-center gap-1.5 hover:text-white transition-colors text-xs"
            >
              <Phone className="w-3 h-3" />
              +233 553 311 101
            </a>
            <a
              href="mailto:contact@chwri.org"
              className="flex items-center gap-1.5 hover:text-white transition-colors text-xs"
            >
              <Mail className="w-3 h-3" />
              contact@chwri.org
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-teal-100/50"
            : "bg-white/80 backdrop-blur-md"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group" aria-label="CHWRI Home">
              <div className="relative w-[176px] h-12 sm:w-[220px] sm:h-14 lg:w-[270px] lg:h-16">
                <Image
                  src="/images/chwri-logo.png"
                  alt="CHWRI logo"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 220px, 270px"
                  priority
                />
              </div>
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                const hasChildren = "children" in link && link.children;

                if (hasChildren) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          "flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                          isActive
                            ? "text-teal-700 bg-teal-50"
                            : "text-slate-700 hover:text-teal-700 hover:bg-teal-50/50"
                        )}
                      >
                        {link.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                      </Link>

                      <AnimatePresence>
                        {openDropdown === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-teal-100/50 overflow-hidden p-2"
                          >
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-3 py-2.5 text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 rounded-lg transition-colors"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "text-teal-700 bg-teal-50"
                        : "text-slate-700 hover:text-teal-700 hover:bg-teal-50/50"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                href="/get-involved"
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all group"
              >
                Get Involved
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-teal-50 transition-colors"
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu drawer */}
        <AnimatePresence>
          {isMobileOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close mobile menu backdrop"
                onClick={() => setIsMobileOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden fixed inset-0 z-40 bg-slate-950/45 backdrop-blur-[1px]"
              />

              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="lg:hidden fixed right-0 top-0 z-50 h-dvh w-[88vw] max-w-sm bg-white border-l border-teal-100 shadow-2xl"
                aria-label="Mobile navigation menu"
              >
                <div className="flex items-center justify-between px-5 py-4 border-b border-teal-100/70">
                  <p className="text-sm font-semibold text-slate-700">Menu</p>
                  <button
                    onClick={() => setIsMobileOpen(false)}
                    className="p-2 rounded-lg text-slate-600 hover:bg-teal-50 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="h-[calc(100dvh-73px)] overflow-y-auto px-4 py-4">
                  <div className="space-y-1">
                    {NAV_LINKS.map((link) => {
                      const hasChildren = "children" in link && link.children;

                      return (
                        <div key={link.label}>
                          <Link
                            href={link.href}
                            className="block rounded-xl px-4 py-3.5 text-base font-medium text-slate-700 hover:text-teal-700 hover:bg-teal-50 transition-colors"
                          >
                            {link.label}
                          </Link>
                          {hasChildren && (
                            <div className="ml-3 mt-0.5 mb-1 space-y-0.5 border-l border-teal-100 pl-3">
                              {link.children.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="block rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50/60 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 pb-6">
                    <Link
                      href="/get-involved"
                      className="flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-teal-700 text-white font-semibold rounded-full shadow-md hover:bg-teal-800 transition-colors"
                    >
                      Get Involved
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
