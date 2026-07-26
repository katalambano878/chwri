"use client";

import Image from "next/image";
import Link from "next/link";
import {
  UsersRound,
  Building2,
  BrainCircuit,
  CheckCircle2,
  Baby,
  Apple,
  ShieldCheck,
  Brain,
  GraduationCap,
  Activity,
  MapPin,
  ClipboardList,
  LineChart,
  Handshake,
  Sparkles,
  ArrowRight,
  type LucideIcon,
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

const programExamples = [
  {
    title: "Maternal & Newborn Care Pathways",
    description:
      "Integrated antenatal education, birth preparedness, and postnatal follow-up with facility and community linkages—designed with women’s groups and local midwives in the North-East Region.",
    status: "Active" as const,
    location: "Walewale & surrounding communities",
  },
  {
    title: "School & Community Adolescent Wellbeing",
    description:
      "Peer-led sessions on mental health literacy, healthy relationships, and help-seeking, co-facilitated with teachers and youth leaders to reach adolescents where they already gather.",
    status: "Active" as const,
    location: "North-East Region",
  },
  {
    title: "NCD Risk Reduction & Healthy Living",
    description:
      "Community screening, lifestyle counselling, and follow-up for hypertension and diabetes risk, aligned with primary care teams to strengthen continuity and early detection.",
    status: "Upcoming" as const,
    location: "Walewale District",
  },
];

const statusStyles = {
  Active: "bg-sage-100 text-sage-700 border-sage-200",
  Upcoming: "bg-warm-100 text-warm-700 border-warm-200",
  Completed: "bg-teal-100 text-teal-700 border-teal-200",
};

export default function InterventionsPage() {
  return (
    <>
      <PageHero
        badge="Interventions"
        title="Evidence-Based Solutions for Community Health"
        heroImage="/images/projects/adolescent.jpg"
      />
      <div className="h-12 bg-gradient-to-b from-teal-950 to-warm-50" aria-hidden />

      {/* Intro */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <p className="text-lg text-slate-600 leading-relaxed text-pretty">
              At CHWRI in Walewale, we design and implement health interventions
              that are grounded in evidence, shaped with communities, and
              built for the realities of northern Ghana. We partner with
              households, health workers, and institutions to move from insight
              to action—so programmes are not only effective on paper, but
              trusted, feasible, and sustained where it matters most.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Intervention models */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="How We Work"
            title="Intervention Models"
            subtitle="Three complementary ways we translate research and local knowledge into health improvements—always with clarity on who benefits, how change happens, and what we measure."
          />
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={UsersRound}
              title="Community-Based Interventions"
              description="Outreach, peer support, and structured community activities that bring prevention, care navigation, and health literacy closer to people’s homes and daily lives."
              variant="filled"
              image="/images/partners/partner-communities.jpg"
            />
            <FeatureCard
              icon={Building2}
              title="Health Facility Strengthening"
              description="Workflows, training, supervision, and data use that help facilities deliver safer, more equitable care—linked to community programmes so no one falls through the gaps."
              variant="filled"
              image="/images/partners/partner-health-institutions.jpg"
            />
            <FeatureCard
              icon={BrainCircuit}
              title="Behavioural Change Programmes"
              description="Evidence-informed messaging, social norms work, and repeated touchpoints that support lasting habits—from immunisation uptake to chronic disease self-care."
              variant="filled"
              image="/images/projects/adolescent.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* Community implementation */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Implementation"
            title="Community Implementation Approach"
            subtitle="Implementation is a relationship, not a rollout checklist. We invest in trust, translation, and shared ownership so interventions fit context and outlast any single project cycle."
          />
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-4">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="space-y-5">
                <div className="relative rounded-3xl overflow-hidden border border-slate-100 shadow-sm aspect-[4/3]">
                  <Image
                    src="/images/partners/partner-communities.jpg"
                    alt="Community members and local health stakeholders collaborating in Walewale"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-950/65 via-teal-950/15 to-transparent" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/90">
                    Co-created interventions grounded in local realities
                  </p>
                </div>
                <p className="text-slate-600 leading-relaxed text-pretty">
                  CHWRI works alongside districts, facilities, and community
                  structures in Walewale and the North-East Region—so interventions
                  are co-owned, culturally grounded, and aligned with how people
                  already seek care and support one another.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <ul className="space-y-4">
                {[
                  {
                    title: "Co-design from the start",
                    body: "Communities help define problems, priorities, and acceptable solutions—so programmes reflect lived experience, not assumptions.",
                  },
                  {
                    title: "Cultural sensitivity",
                    body: "Language, norms, gender dynamics, and faith are woven into how we deliver messages, organise groups, and support care-seeking.",
                  },
                  {
                    title: "Local ownership",
                    body: "We strengthen community structures, volunteers, and facility teams who carry the work forward with clear roles and ongoing mentoring.",
                  },
                  {
                    title: "Sustainability by design",
                    body: "We align with district plans, routine services, and local resources to embed interventions into systems rather than parallel projects.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm"
                  >
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-heading font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-600 leading-relaxed mt-1">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Where We Focus"
            title="Intervention Focus Areas"
            subtitle="Our portfolio spans the life course—from pregnancy and early childhood to adolescence and adult NCD risk—with programmes tailored to burden, readiness, and partnership opportunities in Walewale and the wider North-East Region."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={Baby}
              title="Maternal & Newborn Health"
              description="Timely antenatal and postnatal support, danger-sign awareness, and care pathways that connect homes, volunteers, and facilities."
              href="/programs"
              image="/images/projects/maternal-health.jpg"
            />
            <FeatureCard
              icon={Apple}
              title="Child Health & Nutrition"
              description="Growth monitoring, feeding counselling, illness recognition, and referrals integrated with community and clinic touchpoints."
              href="/programs"
              image="/images/hero.jpg"
            />
            <FeatureCard
              icon={ShieldCheck}
              title="Preventive Health & Immunisation"
              description="Demand generation, reminder systems, and outreach that reinforce routine immunisation and essential preventive services."
              href="/programs"
              image="/images/news/chw-program-launch.jpg"
            />
            <FeatureCard
              icon={Brain}
              title="Mental Health & Psychosocial Support"
              description="Stigma-reduction, basic psychosocial skills, and referral pathways that make mental wellbeing part of everyday community and facility care."
              href="/programs"
              image="/images/projects/adolescent.jpg"
            />
            <FeatureCard
              icon={GraduationCap}
              title="Adolescent Health & Wellbeing"
              description="Safe spaces in schools and communities for health education, peer support, and confidential linkage to services when needed."
              href="/programs"
              image="/images/projects/adolescent.jpg"
            />
            <FeatureCard
              icon={Activity}
              title="Non-Communicable Disease Prevention"
              description="Screening, lifestyle counselling, and long-term follow-up aligned with primary care to reduce preventable NCD burden."
              href="/programs"
              image="/images/partners/partner-health-institutions.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* Program examples */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="On the Ground"
            title="Program Examples"
            subtitle="Illustrative programmes that show how our models and focus areas come together—each with transparent status and geography so partners know where we are active and what is next."
          />
          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {programExamples.map((program) => (
              <motion.div
                key={program.title}
                variants={fadeInUp}
                className={cn(
                  "rounded-3xl border border-slate-100 bg-white p-8 shadow-sm",
                  "hover:shadow-md hover:border-teal-200/80 transition-all duration-300 h-full flex flex-col"
                )}
              >
                <span
                  className={cn(
                    "inline-flex self-start px-3 py-1 rounded-full text-xs font-medium border mb-5",
                    statusStyles[program.status]
                  )}
                >
                  {program.status}
                </span>
                <h3 className="font-heading text-xl font-semibold text-slate-900 text-balance mb-3">
                  {program.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 text-pretty">
                  {program.description}
                </p>
                <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  {program.location}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
          <AnimateOnScroll className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors group"
            >
              Browse all programmes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Beneficiary-centred design */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="rounded-3xl bg-gradient-to-br from-teal-100 via-teal-50 to-sage-50 border border-teal-100/60 p-10 lg:p-12">
                <div className="w-14 h-14 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-sm">
                  <Handshake className="w-7 h-7 text-teal-700" />
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight text-balance mb-4">
                  Beneficiary-Centred Design
                </h2>
                <p className="text-slate-600 leading-relaxed text-pretty">
                  Beneficiaries are experts in their own lives. We treat community
                  voice as a design input—not a consultation checkbox—using
                  participatory methods to prototype messages, materials, and
                  service flows before scale-up.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <ul className="space-y-4">
                {[
                  "Human-centred problem framing with community reference groups",
                  "Iterative testing of tools and sessions in real settings",
                  "Accessible formats: local languages, visual aids, and low-literacy-friendly content",
                  "Feedback loops that adjust implementation mid-course based on what we hear",
                ].map((line) => (
                  <li key={line} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-slate-600 leading-relaxed">{line}</span>
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Impact measurement */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Accountability"
            title="Impact Measurement"
            subtitle="Rigorous measurement protects both communities and funders: we know what changed, why it mattered, and what to improve next—without reducing people to numbers alone."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ClipboardList,
                title: "Baseline assessments",
                text: "Clear starting points on coverage, behaviours, and service quality so targets and equity gaps are visible from day one.",
              },
              {
                icon: LineChart,
                title: "Ongoing monitoring",
                text: "Routine indicators and qualitative check-ins during implementation to catch bottlenecks early and correct course.",
              },
              {
                icon: Sparkles,
                title: "Endline evaluations",
                text: "Structured endline studies to assess outcomes, unintended effects, and cost-value insights for scale and policy dialogue.",
              },
              {
                icon: Brain,
                title: "Learning loops",
                text: "Structured debriefs with staff and communities to document tacit knowledge and feed the next research and intervention cycle.",
              },
            ].map((block) => {
              const Icon: LucideIcon = block.icon;
              return (
              <AnimateOnScroll key={block.title} className="h-full">
                <div className="h-full rounded-2xl bg-white border border-slate-100 p-7 shadow-sm">
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-teal-700" />
                  </div>
                  <h3 className="font-heading font-semibold text-slate-900 mb-2">
                    {block.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {block.text}
                  </p>
                </div>
              </AnimateOnScroll>
            );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Support Our Intervention Programmes"
        subtitle="Fund, co-implement, or share technical expertise—help us expand evidence-based programmes that communities trust and health systems can sustain."
        primaryCta={{ label: "Partner With Us", href: "/partnerships" }}
        secondaryCta={{ label: "Contact CHWRI", href: "/contact" }}
      />
    </>
  );
}
