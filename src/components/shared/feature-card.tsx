"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  variant?: "default" | "outlined" | "filled";
  className?: string;
  animationVariants?: Variants;
  image?: string;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  href,
  variant = "default",
  className,
  animationVariants = fadeInUp,
  image,
}: FeatureCardProps) {
  const cardClasses = cn(
    "block group p-7 rounded-2xl h-full flex flex-col",
    "transition-all duration-300 ease-out",
    variant === "default" &&
      "bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-teal-200 hover:-translate-y-1.5 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
    variant === "outlined" &&
      "border border-teal-100 hover:bg-teal-50/50 hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5",
    variant === "filled" &&
      "bg-teal-50/50 border border-teal-100/50 hover:bg-teal-50 hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5",
    className
  );

  const inner = (
    <>
      {image && (
        <div className="relative -mt-7 -mx-7 mb-10">
          <div className="relative h-48 rounded-t-2xl overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-7 w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-md border border-slate-100 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-5 h-5 text-teal-700" />
          </div>
        </div>
      )}
      {!image && (
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-sage-100 flex items-center justify-center mb-5 transition-all duration-300 group-hover:from-teal-200 group-hover:to-sage-200 group-hover:scale-110 group-hover:shadow-inner">
          <Icon className="w-5 h-5 text-teal-700 transition-transform duration-300 group-hover:scale-105" />
        </div>
      )}
      <div className="flex-1 flex flex-col">
        <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2 group-hover:text-teal-800 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-600 leading-relaxed flex-1">{description}</p>
        {href && (
          <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-teal-600 opacity-0 group-hover:opacity-100 transition-all duration-300">
            Learn more
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.div variants={animationVariants} className="h-full">
      {href ? (
        <Link href={href} className={cardClasses}>
          {inner}
        </Link>
      ) : (
        <div className={cardClasses}>{inner}</div>
      )}
    </motion.div>
  );
}
