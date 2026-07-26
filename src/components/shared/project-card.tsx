"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Calendar, Tag } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  status: "Active" | "Completed" | "Upcoming";
  location?: string;
  theme?: string;
  date?: string;
  href?: string;
  image?: string;
  className?: string;
}

export function ProjectCard({
  title,
  description,
  status,
  location,
  theme,
  date,
  href = "#",
  image,
  className,
}: ProjectCardProps) {
  const statusColors = {
    Active: "bg-sage-100 text-sage-700 border-sage-200",
    Completed: "bg-teal-100 text-teal-700 border-teal-200",
    Upcoming: "bg-warm-100 text-warm-700 border-warm-200",
  };

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <Link
        href={href}
        className={cn(
          "block group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-teal-900/5 hover:border-teal-200 transition-all duration-300 overflow-hidden h-full flex flex-col",
          className
        )}
      >
        <div className="aspect-[16/10] bg-gradient-to-br from-teal-100 via-teal-50 to-sage-50 relative overflow-hidden">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/60 backdrop-blur-sm flex items-center justify-center">
                <Tag className="w-7 h-7 text-teal-600/60" />
              </div>
            </div>
          )}
          <div className="absolute top-4 left-4 z-10">
            <span
              className={cn(
                "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
                statusColors[status]
              )}
            >
              {status}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-4">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            {location && (
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                {location}
              </span>
            )}
            {theme && (
              <span className="flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {theme}
              </span>
            )}
            {date && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {date}
              </span>
            )}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-50 flex items-center gap-1.5 text-sm font-medium text-teal-600 group-hover:text-teal-700">
            View project
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
