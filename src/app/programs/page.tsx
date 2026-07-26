"use client";

import { useState } from "react";
import Link from "next/link";
import { Quote, Sparkles, HeartHandshake } from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  slideInLeft,
  slideInRight,
  motion,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/shared/project-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { cn } from "@/lib/utils";

const featuredProjects = [
  {
    title: "Maternal and Newborn Health Improvement Initiative",
    description:
      "Integrated antenatal outreach, skilled birth attendance support, and postnatal follow-up to reduce preventable maternal and newborn complications in hard-to-reach communities.",
    status: "Active" as const,
    location: "North-East Region",
    theme: "Maternal & Child Health",
    date: "2024–Present",
    href: "/programs",
    image: "/images/projects/maternal-health.jpg",
  },
  {
    title: "Community Health Worker Training & Deployment",
    description:
      "Competency-based training, supportive supervision, and deployment models that expand trusted frontline coverage while strengthening referral pathways to facilities.",
    status: "Active" as const,
    location: "Walewale District",
    theme: "Capacity Building",
    date: "2023–Present",
    href: "/programs",
    image: "/images/projects/chw-training.jpg",
  },
  {
    title: "Behavioural Health Promotion for Adolescent Wellbeing",
    description:
      "School- and community-based sessions on coping skills, help-seeking, and peer support—co-designed with young people and local educators ahead of rollout.",
    status: "Upcoming" as const,
    location: "North-East Region",
    theme: "Mental Wellbeing",
    date: "2025",
    href: "/programs",
    image: "/images/projects/adolescent.jpg",
  },
  {
    title: "Strengthening Primary Healthcare Delivery in Rural Communities",
    description:
      "Quality improvement collaboratives, essential medicines visibility, and team-based care so rural facilities can deliver consistent first-contact services.",
    status: "Active" as const,
    location: "North-East Region",
    theme: "Health Systems",
    date: "2023–Present",
    href: "/programs",
    image: "/images/partners/partner-health-institutions.jpg",
  },
  {
    title: "Preventive Health Education and Immunisation Coverage Programme",
    description:
      "Household counselling, community durbars, and outreach schedules that lifted routine immunisation uptake and clarified vaccine safety concerns at the village level.",
    status: "Completed" as const,
    location: "Walewale",
    theme: "Preventive Health",
    date: "2022–2024",
    href: "/programs",
    image: "/images/hero.jpg",
  },
  {
    title: "Community-Based Mental Health and Psychosocial Support Pilot",
    description:
      "A structured pilot pairing volunteer listeners, basic psychosocial first aid, and warm handoffs to formal care—prioritising dignity, confidentiality, and family inclusion.",
    status: "Upcoming" as const,
    location: "North-East Region",
    theme: "Mental Health",
    date: "2025",
    href: "/programs",
    image: "/images/news/policy-dialogue.jpg",
  },
] as const;

const impactStories = [
  {
    icon: Quote,
    quote:
      "When the outreach team started visiting our compound, I attended every session. They explained danger signs in our language. I delivered at the facility without fear—and my baby is thriving.",
    attribution: "Participant",
    role: "Maternal health outreach, North-East Region",
  },
  {
    icon: Sparkles,
    quote:
      "The training changed how we triage and refer. We are not guessing anymore; we use the same checklists as the nurses, and families notice the difference in how we respond.",
    attribution: "Community Health Worker",
    role: "Walewale District",
  },
  {
    icon: HeartHandshake,
    quote:
      "Immunisation days used to be quiet. After the education programme, mothers brought questions—and answers spread neighbour to neighbour. Coverage improved because trust improved.",
    attribution: "Community leader",
    role: "Preventive health programme, 2022–2024",
  },
] as const;

const filterTabs = ["All", "Active", "Completed", "Upcoming"] as const;

export default function ProgramsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filterTabs)[number]>("All");

  return (
    <>
      <PageHero
        badge="Programs & Projects"
        title="Transforming Communities Through Evidence-Based Programmes"
        heroImage="/images/projects/maternal-health.jpg"
      />

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Featured"
            title="Programmes making a measurable difference"
            subtitle="A snapshot of current and recent CHWRI-led work across maternal and child health, workforce development, mental wellbeing, systems strengthening, and prevention."
            align="center"
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Impact"
            title="Stories from the communities we serve"
            subtitle="Voices from the field—shared with permission—illustrate how evidence-based programmes translate into everyday confidence, care, and connection."
            align="center"
          />
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
            {impactStories.map((story, index) => {
              const Icon = story.icon;
              const isLeft = index === 0;
              const isRight = index === 2;
              return (
                <AnimateOnScroll
                  key={story.quote}
                  variants={isLeft ? slideInLeft : isRight ? slideInRight : fadeInUp}
                >
                  <figure
                    className={cn(
                      "h-full rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-teal-50/40 p-8 shadow-sm flex flex-col"
                    )}
                  >
                    <Icon
                      className="w-10 h-10 text-teal-600/80 mb-6"
                      aria-hidden
                    />
                    <blockquote className="font-heading text-lg sm:text-xl text-slate-800 leading-relaxed text-pretty flex-1">
                      <span className="text-teal-600/90">&ldquo;</span>
                      {story.quote}
                      <span className="text-teal-600/90">&rdquo;</span>
                    </blockquote>
                    <figcaption className="mt-8 pt-6 border-t border-teal-100/80">
                      <p className="font-heading font-semibold text-slate-900">
                        {story.attribution}
                      </p>
                      <p className="text-sm text-slate-500 mt-1">{story.role}</p>
                    </figcaption>
                  </figure>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Browse"
            title="Find programmes by status"
            subtitle="Use the tabs below to explore how our portfolio is distributed across active delivery, completed learning, and upcoming launches. (Filtering is illustrative on this page.)"
            align="center"
          />
          <AnimateOnScroll className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab;
              return (
                <motion.button
                  key={tab}
                  type="button"
                  onClick={() => setActiveFilter(tab)}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "font-heading text-sm font-semibold px-5 py-2.5 rounded-full border transition-all duration-200",
                    isActive
                      ? "bg-teal-700 text-white border-teal-700 shadow-md shadow-teal-900/10"
                      : "bg-white text-slate-600 border-slate-200 hover:border-teal-200 hover:text-teal-800"
                  )}
                >
                  {tab}
                </motion.button>
              );
            })}
          </AnimateOnScroll>
          <AnimateOnScroll className="mt-10 max-w-2xl mx-auto text-center" delay={0.08}>
            <p className="text-sm text-slate-500 leading-relaxed">
              Full programme listings and downloadable summaries will appear here as
              pages are published. For now,{" "}
              <Link
                href="/contact"
                className="font-medium text-teal-700 hover:text-teal-800 underline-offset-4 hover:underline"
              >
                contact CHWRI
              </Link>{" "}
              for detailed briefs on any initiative.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Have a Programme Idea? Let's Collaborate"
        subtitle="We welcome districts, NGOs, universities, and community organisations who want to co-design ethical, actionable health programmes rooted in northern Ghana."
        primaryCta={{ label: "Partner With Us", href: "/partnerships" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
        variant="teal"
      />
    </>
  );
}
