"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Microscope,
  HandHeart,
  Building2,
  BookOpen,
  GraduationCap,
  Users,
  LineChart,
  CheckCircle2,
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

const workstreams = [
  {
    icon: Microscope,
    title: "Research",
    description:
      "Rigorous inquiry across epidemiology, implementation science, and community health—grounded in ethical practice and local priorities in Ghana’s Upper East.",
    href: "/research",
  },
  {
    icon: HandHeart,
    title: "Interventions",
    description:
      "Evidence-based programmes that translate findings into practical care, prevention, and wellbeing support for households and frontline providers.",
    href: "/interventions",
  },
  {
    icon: Building2,
    title: "Health Systems Strengthening",
    description:
      "Targeted improvements to facilities, coordination, and service delivery so quality care reaches more people in Walewale and surrounding communities.",
    href: "/health-systems-strengthening",
  },
  {
    icon: BookOpen,
    title: "Policy & Advocacy",
    description:
      "Clear, actionable evidence for decision-makers—briefs, dialogues, and partnerships that align policy with what communities actually need.",
  },
  {
    icon: GraduationCap,
    title: "Capacity Building",
    description:
      "Mentorship, training, and research skills development for students, clinicians, and community health workers who will lead the next generation of impact.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "Participatory approaches that respect local knowledge, build trust, and ensure research and programmes reflect the lived experience of the people we serve.",
  },
  {
    icon: LineChart,
    title: "Monitoring, Evaluation & Learning",
    description:
      "Thoughtful metrics, reflection, and adaptive management so every project improves over time and contributes to a shared institutional memory.",
  },
] as const;

const WORKSTREAM_IMAGES = [
  "/images/partners/partner-health-institutions.jpg",
  "/images/projects/adolescent.jpg",
  "/images/projects/chw-training.jpg",
  "/images/news/policy-dialogue.jpg",
  "/images/partners/partner-academic.jpg",
  "/images/partners/partner-communities.jpg",
  "/images/projects/maternal-health.jpg",
] as const;

const methodologySteps = [
  {
    title: "Assess",
    body: "We map context, stakeholders, and evidence gaps alongside communities and partners before a single intervention is designed.",
  },
  {
    title: "Design",
    body: "Solutions are co-created with ethics, feasibility, and scale in mind—never copy-pasted from elsewhere without local adaptation.",
  },
  {
    title: "Implement",
    body: "Delivery is disciplined and human: clear protocols, supportive supervision, and space for frontline insight to shape day-to-day practice.",
  },
  {
    title: "Evaluate",
    body: "Mixed methods and participatory feedback tell us not only what changed, but why—and what must be adjusted.",
  },
  {
    title: "Scale",
    body: "Promising approaches are documented and positioned for wider adoption through policy dialogue, training, and sustainable partnerships.",
  },
] as const;

function SectionShell({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-20 lg:py-28", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">{children}</div>
    </section>
  );
}

function VisualPlaceholder({ label, image }: { label: string; image: string }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-teal-100/80 aspect-[4/3] shadow-sm">
      <Image
        src={image}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/65 via-teal-950/20 to-transparent" />
      <span className="absolute left-5 bottom-4 text-sm font-medium text-white/90 tracking-wide">
        {label}
      </span>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mt-6">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-600 leading-relaxed">
          <CheckCircle2
            className="w-5 h-5 text-teal-600 shrink-0 mt-0.5"
            aria-hidden
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        badge="Our Work"
        title="Comprehensive Health Solutions Through Research and Action"
        subtitle="From our base in Walewale to national partnerships, CHWRI unites rigorous science with community-grounded action—so evidence strengthens care, systems, and policy across Ghana."
        heroImage="/images/hero.jpg"
      />

      <SectionShell className="bg-warm-50">
        <SectionHeader
          badge="How We Work"
          title="One integrated approach to health improvement"
          subtitle="We do not treat research, service delivery, and policy as separate silos. Each workstream reinforces the others: questions emerge from communities, methods are transparent and ethical, and learning flows back into programmes and governance."
          align="center"
        />
        <AnimateOnScroll>
          <p className="max-w-3xl mx-auto text-center text-lg text-slate-600 leading-relaxed text-pretty">
            At the Centre for Health and Wellbeing Research Institute, teams in the Upper East Region collaborate across disciplines—medicine, public health, social science, and implementation—to strengthen prevention, treatment, and dignity for people who depend on resilient health systems. Our work is deliberately collaborative: we partner with facilities, districts, universities, and community leaders so improvements last beyond any single grant cycle.
          </p>
        </AnimateOnScroll>
      </SectionShell>

      <SectionShell className="bg-white">
        <SectionHeader
          badge="Workstreams"
          title="Where focus meets expertise"
          subtitle="Seven complementary pillars guide how CHWRI generates evidence, delivers interventions, and supports lasting change across Ghana."
          align="center"
        />
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workstreams.map((ws, index) => (
            <FeatureCard
              key={ws.title}
              icon={ws.icon}
              title={ws.title}
              description={ws.description}
              image={WORKSTREAM_IMAGES[index % WORKSTREAM_IMAGES.length]}
              {...("href" in ws && ws.href ? { href: ws.href } : {})}
            />
          ))}
        </StaggerChildren>
      </SectionShell>

      <SectionShell id="research-overview" className="bg-warm-50 scroll-mt-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll variants={slideInLeft}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
              Research
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight text-balance">
              Evidence that respects people and place
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-pretty">
              Our research agenda is built around questions that matter to patients, providers, and policymakers in northern Ghana and comparable settings. We prioritise transparent methods, community consent, and findings that can be acted on—not shelved.
            </p>
            <BulletList
              items={[
                "Quantitative and qualitative designs tailored to each question, from surveillance to in-depth lived-experience studies.",
                "Ethics and safeguarding woven into protocol design, fieldwork, and dissemination—not treated as an afterthought.",
                "Knowledge products formatted for both academic peers and district teams who need concise, practical guidance.",
              ]}
            />
            <Link
              href="/research"
              className="inline-flex mt-8 text-sm font-semibold text-teal-700 hover:text-teal-800 underline-offset-4 hover:underline"
            >
              Explore our research →
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll variants={slideInRight}>
            <VisualPlaceholder label="Research imagery" image="/images/partners/partner-health-institutions.jpg" />
          </AnimateOnScroll>
        </div>
      </SectionShell>

      <SectionShell className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll
            variants={slideInLeft}
            className="order-2 lg:order-1"
          >
            <VisualPlaceholder label="Community interventions" image="/images/partners/partner-communities.jpg" />
          </AnimateOnScroll>
          <AnimateOnScroll
            variants={slideInRight}
            className="order-1 lg:order-2"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
              Interventions
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight text-balance">
              From evidence to everyday care
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-pretty">
              Interventions at CHWRI are designed with the same rigour as our studies. We test approaches in real-world conditions, refine them with frontline workers, and document what it takes to implement well in resource-conscious environments.
            </p>
            <BulletList
              items={[
                "Community-led models for prevention, screening, and chronic care support aligned with Ministry of Health priorities.",
                "Packages, job aids, and training that make new practices feasible for busy facilities and volunteer networks.",
                "Continuous feedback loops so programmes adapt to seasonal, cultural, and logistical realities in Walewale and beyond.",
              ]}
            />
            <Link
              href="/interventions"
              className="inline-flex mt-8 text-sm font-semibold text-teal-700 hover:text-teal-800 underline-offset-4 hover:underline"
            >
              View interventions →
            </Link>
          </AnimateOnScroll>
        </div>
      </SectionShell>

      <SectionShell className="bg-warm-50">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll variants={slideInLeft}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
              Health systems
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight text-balance">
              Stronger systems, steadier outcomes
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-pretty">
              Lasting health gains depend on infrastructure, people, and information working together. CHWRI supports districts and facilities to strengthen governance, supervision, and data use—so services are coordinated, accountable, and responsive.
            </p>
            <BulletList
              items={[
                "Workforce development and mentorship for clinical and public health cadres serving rural populations.",
                "Improvements to workflows, supply visibility, and referral networks that reduce fragmentation between levels of care.",
                "Data quality, dashboards, and learning forums that turn routine information into decisions—not just reports.",
              ]}
            />
            <Link
              href="/health-systems-strengthening"
              className="inline-flex mt-8 text-sm font-semibold text-teal-700 hover:text-teal-800 underline-offset-4 hover:underline"
            >
              Health systems strengthening →
            </Link>
          </AnimateOnScroll>
          <AnimateOnScroll variants={slideInRight}>
            <VisualPlaceholder label="Systems & facilities" image="/images/projects/chw-training.jpg" />
          </AnimateOnScroll>
        </div>
      </SectionShell>

      <SectionShell className="bg-white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll variants={slideInLeft}>
            <VisualPlaceholder label="Policy dialogue" image="/images/news/policy-dialogue.jpg" />
          </AnimateOnScroll>
          <AnimateOnScroll variants={slideInRight}>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
              Policy & advocacy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight text-balance">
              Translating knowledge into policy momentum
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed text-pretty">
              Evidence only matters when it reaches the right rooms. We invest in accessible briefs, stakeholder convenings, and media-savvy storytelling so policymakers, traditional authorities, and civil society can engage with nuance—not slogans.
            </p>
            <BulletList
              items={[
                "Policy notes and scorecards grounded in CHWRI data and aligned with national health strategies.",
                "Structured dialogues that connect researchers, implementers, and decision-makers around shared problems.",
                "Advocacy that elevates community voice alongside epidemiological trends—because numbers and narratives belong together.",
              ]}
            />
          </AnimateOnScroll>
        </div>
      </SectionShell>

      <SectionShell className="bg-warm-50">
        <SectionHeader
          badge="Methodology"
          title="Assess, design, implement, evaluate, scale"
          subtitle="A disciplined cycle keeps our projects honest, adaptive, and oriented toward impact—not activity for its own sake."
          align="center"
        />
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mt-4">
          {methodologySteps.map((step, i) => (
            <motion.div
              key={step.title}
              variants={fadeInUp}
              className="rounded-2xl bg-white border border-teal-100/80 p-6 shadow-sm h-full flex flex-col"
            >
              <span className="font-heading text-2xl font-semibold text-teal-600/80 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-heading text-lg font-semibold text-slate-900 mt-3">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">
                {step.body}
              </p>
            </motion.div>
          ))}
        </StaggerChildren>
      </SectionShell>

      <CTASection
        title="Collaborate with CHWRI"
        subtitle="Whether you represent a district, a university, a funder, or a community organisation, we welcome partners who share our commitment to ethical, actionable health research—starting from Walewale and reaching across Ghana."
        primaryCta={{ label: "Start a conversation", href: "/partnerships" }}
        secondaryCta={{ label: "Contact us", href: "/contact" }}
        variant="teal"
      />
    </>
  );
}
