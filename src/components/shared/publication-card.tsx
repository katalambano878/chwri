"use client";

import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  ExternalLink,
  FileText,
} from "lucide-react";
import { fadeInUp, motion } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  CONTRIBUTORS,
  type ContributorId,
  type PubType,
} from "@/lib/publications";

interface PublicationCardProps {
  title: string;
  authors?: string;
  journal?: string;
  type: PubType;
  date?: string;
  href?: string;
  doi?: string;
  summary?: string;
  contributors?: ContributorId[];
  featured?: boolean;
  className?: string;
}

export function PublicationCard({
  title,
  authors,
  journal,
  type,
  date,
  href = "#",
  doi,
  summary,
  contributors = [],
  featured = false,
  className,
}: PublicationCardProps) {
  const typeColors: Record<PubType, string> = {
    "Research Paper": "bg-teal-100 text-teal-800",
    "Policy Brief": "bg-sage-100 text-sage-800",
    Report: "bg-slate-100 text-slate-700",
    "Case Study": "bg-amber-50 text-amber-800",
  };

  const isExternal = href.startsWith("http");

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={cn(
          "group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md",
          featured
            ? "border-teal-200/80 ring-1 ring-teal-100"
            : "border-slate-100 hover:border-teal-200",
          className
        )}
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
                typeColors[type]
              )}
            >
              {type}
            </span>
            {featured && (
              <span className="inline-flex items-center rounded-full bg-teal-700 px-2.5 py-0.5 text-xs font-semibold text-white">
                Featured
              </span>
            )}
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 transition-colors group-hover:bg-teal-100">
            <FileText className="h-5 w-5" />
          </div>
        </div>

        <h3 className="font-heading mb-2 text-base font-semibold leading-snug text-slate-900 transition-colors group-hover:text-teal-800 sm:text-lg">
          {title}
        </h3>

        {authors && (
          <p className="mb-3 text-sm leading-relaxed text-slate-500">
            {authors}
          </p>
        )}

        {summary && (
          <p className="mb-4 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-600">
            {summary}
          </p>
        )}

        <div className="mt-auto space-y-3 border-t border-slate-100 pt-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            {journal && (
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                <BookOpen className="h-3.5 w-3.5 text-teal-600" />
                {journal}
              </span>
            )}
            {date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                {date}
              </span>
            )}
          </div>

          {contributors.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {contributors.map((id) => (
                <span
                  key={id}
                  className="rounded-full border border-teal-100 bg-teal-50/70 px-2 py-0.5 text-[11px] font-medium text-teal-800"
                >
                  {CONTRIBUTORS[id].shortLabel}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between gap-3">
            {doi ? (
              <span className="truncate text-[11px] text-slate-400">
                DOI: {doi}
              </span>
            ) : (
              <span />
            )}
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700">
              {isExternal ? "View publication" : "Read more"}
              {isExternal ? (
                <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              ) : (
                <ArrowUpRight className="h-3.5 w-3.5" />
              )}
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
