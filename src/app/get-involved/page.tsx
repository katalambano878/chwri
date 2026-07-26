"use client";

import Link from "next/link";
import {
  Handshake,
  Heart,
  Users,
  Microscope,
  GraduationCap,
  DollarSign,
  ArrowRight,
  CheckCircle2,
  Building2,
  Sparkles,
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
import { ContactForm } from "@/components/shared/contact-form";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { cn } from "@/lib/utils";

const DONATION_TIERS = [
  {
    name: "Champion",
    amount: "Custom",
    description: "Sustained support for core operations, ethics review, and field coordination in Walewale.",
    highlight: false,
  },
  {
    name: "Partner",
    amount: "From GHS —",
    description: "Fund a defined activity—training, community dialogue, or data collection—with transparent reporting.",
    highlight: true,
  },
  {
    name: "Friend",
    amount: "Any amount",
    description: "One-time or recurring gifts that keep outreach, learning materials, and participant care responsive.",
    highlight: false,
  },
] as const;

const VOLUNTEER_SKILLS = [
  "Qualitative or quantitative research support",
  "Community engagement, facilitation, or translation",
  "Data management, visualisation, or IT assistance",
  "Communications, design, or event logistics",
  "Clinical or public-health practice (where aligned with ethics and scope)",
] as const;

const PARTNER_BULLETS = [
  "MoUs, joint protocols, and shared governance with clear roles",
  "Ethical review pathways and data agreements suited to northern Ghana",
  "Co-branded dissemination, learning events, and capacity exchanges",
] as const;

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero badge="Get Involved" title="Be Part of the Change" heroImage="/images/partners/partner-communities.jpg" />

      {/* Ways to Engage */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Engage"
            title="Ways to Engage With CHWRI"
            subtitle="Whether you represent an institution, want to give, or bring skills to the field—there is a meaningful way to support health and wellbeing research in Walewale and the wider North-East Region."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <FeatureCard
              icon={Handshake}
              title="Partner With Us"
              description="Formal collaboration with universities, health facilities, NGOs, and agencies—aligned to community priorities and ethical standards."
              href="/partnerships"
              image="/images/partners/partner-international.jpg"
            />
            <FeatureCard
              icon={Heart}
              title="Support Our Work"
              description="Philanthropic and institutional giving that strengthens programmes, research logistics, and participant support."
              variant="outlined"
              image="/images/partners/partner-communities.jpg"
            />
            <FeatureCard
              icon={Users}
              title="Volunteer & Collaborate"
              description="Share time and expertise through supervised placements, technical assistance, or community-facing activities."
              variant="filled"
              image="/images/about-community.jpg"
            />
            <FeatureCard
              icon={Microscope}
              title="Join Research Initiatives"
              description="Explore studies, implementation trials, and learning partnerships grounded in local context and rigorous methods."
              href="/research"
              image="/images/partners/partner-academic.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* Partner With Us */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnScroll variants={slideInLeft}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                <Building2 className="w-3.5 h-3.5" aria-hidden />
                Institutional partnerships
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight text-balance">
                Partner With Us
              </h2>
              <p className="mt-5 text-slate-600 text-lg leading-relaxed text-pretty">
                CHWRI—the Centre for Health &amp; Wellbeing Research and Interventions—welcomes institutions that
                want to co-produce evidence, strengthen health systems, and invest in ethical engagement across
                Walewale and northern Ghana.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed text-pretty">
                We prioritise agreements that protect communities, recognise local leadership, and make roles,
                timelines, and learning outcomes explicit from the outset.
              </p>
              <ul className="mt-8 space-y-3">
                {PARTNER_BULLETS.map((item) => (
                  <li key={item} className="flex gap-3 text-slate-600 leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/partnerships"
                className="inline-flex items-center gap-2 mt-10 text-teal-700 font-semibold hover:text-teal-800 group"
              >
                Explore partnership pathways
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <div
                className={cn(
                  "relative rounded-3xl border border-slate-100 bg-gradient-to-br from-teal-50/80 via-white to-sage-50/60",
                  "p-8 sm:p-10 shadow-sm"
                )}
              >
                <div className="absolute -top-3 -right-3 w-24 h-24 bg-teal-200/40 rounded-full blur-2xl" />
                <GraduationCap className="w-10 h-10 text-teal-700 mb-4" aria-hidden />
                <h3 className="font-heading text-xl font-semibold text-slate-900">What we look for in partners</h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-pretty">
                  Alignment with community benefit, respect for Ghanaian regulatory and ethics processes, and
                  willingness to resource implementation—not only publications.
                </p>
                <div className="mt-8 grid gap-4">
                  {["Research & learning", "Service delivery & quality", "Policy & financing dialogue"].map(
                    (label) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-2xl bg-white/80 border border-teal-100/60 px-4 py-3"
                      >
                        <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0" aria-hidden />
                        <span className="text-sm font-medium text-slate-800">{label}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Support Our Work */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Give"
            title="Support Our Work"
            subtitle="Giving options below are illustrative—CHWRI can tailor packages with you. This section is a visual layout only; no payments are processed on this page."
          />
          <AnimateOnScroll variants={fadeInUp}>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {DONATION_TIERS.map((tier) => (
                <div
                  key={tier.name}
                  className={cn(
                    "relative rounded-3xl p-8 border transition-shadow",
                    tier.highlight
                      ? "bg-white border-teal-200 shadow-md ring-2 ring-teal-100"
                      : "bg-white/90 border-slate-100 shadow-sm"
                  )}
                >
                  {tier.highlight && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-teal-700 text-white text-xs font-semibold">
                      Popular
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-100 to-sage-100 flex items-center justify-center mb-5">
                    <DollarSign className="w-5 h-5 text-teal-700" aria-hidden />
                  </div>
                  <p className="font-heading text-sm font-semibold text-teal-700 uppercase tracking-wide">
                    {tier.name}
                  </p>
                  <p className="mt-2 font-heading text-2xl font-semibold text-slate-900">{tier.amount}</p>
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">{tier.description}</p>
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <span className="text-xs text-slate-500 uppercase tracking-wider">Placeholder</span>
                    <p className="mt-1 text-sm text-slate-500">Contact us to discuss giving mechanics and reporting.</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Volunteer / Collaborate */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimateOnScroll variants={slideInLeft}>
              <SectionHeader
                align="left"
                badge="Volunteer"
                title="Volunteer & Collaborate"
                subtitle="We periodically welcome collaborators who can strengthen ethical fieldwork, learning, and implementation—always under appropriate supervision and consent."
                className="mb-0 lg:mb-0"
              />
              <p className="mt-6 text-slate-600 leading-relaxed text-pretty">
                Opportunities depend on active projects, safeguarding requirements, and institutional approvals.
                Remote support may be possible for specific technical or communications tasks.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <div className="rounded-3xl bg-warm-50 border border-slate-100 p-8 lg:p-10">
                <h3 className="font-heading text-lg font-semibold text-slate-900">Skills & backgrounds we often need</h3>
                <ul className="mt-6 space-y-3">
                  {VOLUNTEER_SKILLS.map((skill) => (
                    <li key={skill} className="flex gap-3 text-slate-600 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" aria-hidden />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-sm text-slate-500 leading-relaxed">
                  Use the inquiry form below to describe your availability, affiliation, and how you would like to
                  contribute. Our team will respond when a suitable opening exists.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Contact / Inquiry */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimateOnScroll variants={slideInLeft}>
              <SectionHeader
                align="left"
                badge="Contact"
                title="Start a Conversation"
                subtitle="Partnerships, giving, volunteering, or research participation—tell us what you have in mind and we will route your message to the right lead at CHWRI."
                className="mb-0 lg:mb-0"
              />
              <p className="mt-6 text-slate-600 leading-relaxed text-pretty">
                Please avoid sharing sensitive personal health information in this form; we will follow up through
                appropriate channels if clinical or safeguarding topics arise.
              </p>
              <div className="mt-8 rounded-2xl bg-white border border-teal-100 p-6">
                <p className="font-heading text-sm font-semibold text-slate-900">Centre location</p>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Centre for Health &amp; Wellbeing Research and Interventions (CHWRI)
                  <br />
                  Walewale, North-East Region, Ghana
                </p>
              </div>
            </AnimateOnScroll>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 lg:p-10"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection
        title="Every Contribution Matters"
        subtitle="From institutional partnership to a single hour of skilled volunteer time—your contribution helps CHWRI keep research and interventions accountable to the people we serve."
        primaryCta={{ label: "Partner With Us", href: "/partnerships" }}
        secondaryCta={{ label: "Our Research", href: "/research" }}
      />
    </>
  );
}
