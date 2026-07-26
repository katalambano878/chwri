"use client";

import Link from "next/link";
import {
  Users,
  Building2,
  BookOpen,
  Globe2,
  Handshake,
  Heart,
  CheckCircle2,
  ArrowRight,
  Landmark,
} from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  slideInLeft,
  slideInRight,
  motion,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { cn } from "@/lib/utils";

const PARTNER_TYPES = [
  {
    icon: Users,
    title: "Communities",
    description:
      "We co-create priorities with residents, leaders, and local groups—ensuring research and programmes reflect lived experience and strengthen community agency.",
    image: "/images/partners/partner-communities.jpg",
  },
  {
    icon: Building2,
    title: "Health Institutions",
    description:
      "From facilities to district teams, we align studies and implementation support with service delivery realities, data needs, and quality improvement goals.",
    image: "/images/partners/partner-health-institutions.jpg",
  },
  {
    icon: Landmark,
    title: "Policymakers",
    description:
      "We translate evidence into briefings and dialogue that support regulation, financing, and planning decisions grounded in northern Ghana’s context.",
    image: "/images/news/policy-dialogue.jpg",
  },
  {
    icon: BookOpen,
    title: "Academic Institutions",
    description:
      "Joint protocols, student mentorship, and shared publications deepen methodological rigour and expand the research ecosystem beyond a single site.",
    image: "/images/partners/partner-academic.jpg",
  },
  {
    icon: Heart,
    title: "NGOs",
    description:
      "Civil-society partners help bridge implementation, advocacy, and reach—especially where community trust and programme continuity are decisive.",
    image: "/images/about-community.jpg",
  },
  {
    icon: Globe2,
    title: "Development Agencies",
    description:
      "We align monitoring, evaluation, and learning with donor standards while keeping focus on ethical practice and measurable community benefit.",
    image: "/images/hero.jpg",
  },
  {
    icon: Handshake,
    title: "International Partners",
    description:
      "Global collaborators bring comparative insight, technical depth, and fair knowledge exchange—without displacing local leadership or priorities.",
    image: "/images/partners/partner-international.jpg",
  },
] as const;

const PARTNERSHIP_STEPS = [
  {
    title: "Engage",
    description: "Shared scoping, relationship-building, and clarity on mutual goals, timelines, and ethics.",
  },
  {
    title: "Align",
    description: "Map institutional mandates, community priorities, and evidence gaps to a feasible joint agenda.",
  },
  {
    title: "Design",
    description: "Co-develop protocols, implementation plans, and learning questions with transparent roles.",
  },
  {
    title: "Implement",
    description: "Deliver fieldwork, programmes, or pilots with adaptive management and regular partner touchpoints.",
  },
  {
    title: "Evaluate",
    description: "Rigorous analysis, honest interpretation, and accessible reporting for decision-makers.",
  },
  {
    title: "Scale",
    description: "Pathways to sustain, spread, or institutionalise what works—with equity and capacity in view.",
  },
] as const;

const PARTNER_LOGO_PLACEHOLDERS = [
  { label: "Partner", gradient: "from-teal-500 to-sage-600" },
  { label: "Partner", gradient: "from-sage-500 to-teal-700" },
  { label: "Partner", gradient: "from-teal-600 to-teal-800" },
  { label: "Partner", gradient: "from-sage-600 to-sage-800" },
  { label: "Partner", gradient: "from-teal-700 to-sage-500" },
  { label: "Partner", gradient: "from-sage-700 to-teal-600" },
] as const;

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        badge="Partnerships"
        title="Collaborating for Lasting Health Impact"
        subtitle="CHWRI works with communities, health systems, academia, and funders in Walewale and beyond—combining local leadership with rigorous methods to improve health and wellbeing."
        heroImage="/images/partners/partner-international.jpg"
      />

      {/* Why Partner With CHWRI */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Together"
            title="Why Partner With CHWRI"
            subtitle="Partnership is how we turn evidence into practice—and how practice sharpens the questions we ask next."
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimateOnScroll variants={slideInLeft} className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed text-pretty">
                The Centre for Health &amp; Wellbeing Research and Interventions is rooted in{" "}
                <span className="text-slate-900 font-medium">Walewale, North-East Region, Ghana</span>
                —a hub for context-rich inquiry, ethical engagement, and implementation that respects both
                community agency and health-system constraints.
              </p>
              <p className="text-slate-600 leading-relaxed text-pretty">
                When you partner with CHWRI, you gain a team that treats collaboration as operational—not
                decorative. We invest in shared governance, clear data agreements, and communication that
                keeps partners informed from design through dissemination.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Local legitimacy paired with internationally recognised research standards",
                  "Pragmatic pathways from pilots to policy dialogue and service improvement",
                  "Capacity building woven into delivery—not added as an afterthought",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600 leading-relaxed">
                    <CheckCircle2
                      className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight} className="space-y-6">
              <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-8 lg:p-10">
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  What partners can expect
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "Shared learning agenda",
                      body: "Regular reflection on what is working, what is not, and how to adjust without compromising rigour.",
                    },
                    {
                      title: "Ethical stewardship",
                      body: "Respectful consent processes, careful data handling, and accountability to participants and institutions.",
                    },
                    {
                      title: "Outputs that travel",
                      body: "Briefs, workshops, and tools designed for busy clinicians, administrators, and community leaders—not only journals.",
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <CheckCircle2
                        className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5"
                        aria-hidden
                      />
                      <div>
                        <p className="font-heading font-semibold text-slate-900">{item.title}</p>
                        <p className="text-slate-600 text-sm leading-relaxed mt-1">{item.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                )}
              >
                Start a conversation
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Types of Partners */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Ecosystem"
            title="Types of Partners"
            subtitle="Meaningful health impact draws on many actors. CHWRI is structured to collaborate across sectors while keeping community benefit at the centre."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {PARTNER_TYPES.map((partner) => (
              <FeatureCard
                key={partner.title}
                icon={partner.icon}
                title={partner.title}
                description={partner.description}
                variant="outlined"
                image={partner.image}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="How It Works"
            title="Partnership Model"
            subtitle="A clear sequence from first conversation to sustained impact—flexible in detail, consistent in principle."
          />

          <div className="hidden xl:block overflow-x-auto pb-2">
            <StaggerChildren className="flex flex-nowrap items-stretch justify-center gap-2 min-w-min px-1">
              {PARTNERSHIP_STEPS.map((step, index) => (
                <motion.div
                  key={step.title}
                  variants={fadeInUp}
                  className="flex items-stretch gap-2 lg:gap-3"
                >
                  <div className="w-[150px] lg:w-[168px] flex-shrink-0">
                    <div className="h-full rounded-2xl bg-white border border-teal-100 p-5 shadow-sm hover:border-teal-200 transition-colors">
                      <p className="text-xs font-semibold uppercase tracking-wider text-teal-600 mb-2">
                        Step {index + 1}
                      </p>
                      <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                  {index < PARTNERSHIP_STEPS.length - 1 && (
                    <div className="flex items-center text-teal-400 self-center" aria-hidden>
                      <ArrowRight className="w-5 h-5 flex-shrink-0" />
                    </div>
                  )}
                </motion.div>
              ))}
            </StaggerChildren>
          </div>

          <div className="xl:hidden space-y-4">
            <StaggerChildren className="space-y-4">
              {PARTNERSHIP_STEPS.map((step, index) => (
                <motion.div key={step.title} variants={fadeInUp} className="relative">
                  <div className="rounded-2xl bg-white border border-teal-100 p-6 shadow-sm">
                    <div className="flex items-start gap-4">
                      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-50 font-heading text-sm font-bold text-teal-800">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                  {index < PARTNERSHIP_STEPS.length - 1 && (
                    <div className="flex justify-center py-2 text-teal-400" aria-hidden>
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Current Partners Placeholder */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Our Network"
            title="Current Partners"
            subtitle="Organisation logos will appear here as partnerships are formalised. The strip below illustrates layout only."
          />

          <AnimateOnScroll>
            <div
              className="rounded-2xl border border-slate-100 bg-slate-50/80 p-8 lg:p-10"
              role="region"
              aria-label="Partner logos placeholder"
            >
              <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
                {PARTNER_LOGO_PLACEHOLDERS.map((item, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex h-16 w-36 sm:h-20 sm:w-40 items-center justify-center rounded-xl bg-gradient-to-br shadow-inner text-white text-xs font-heading font-semibold tracking-wide opacity-90",
                      item.gradient
                    )}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Let's Build Healthier Communities Together"
        subtitle="Whether you represent a community, a hospital, a university, or a funder—we would welcome exploring how CHWRI can collaborate with integrity and impact."
        primaryCta={{ label: "Contact CHWRI", href: "/contact" }}
        secondaryCta={{ label: "Explore Our Work", href: "/our-work" }}
      />
    </>
  );
}
