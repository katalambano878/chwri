"use client";

import Link from "next/link";
import {
  Activity,
  Baby,
  BarChart3,
  Building2,
  ChevronRight,
  ClipboardList,
  FileCheck,
  Handshake,
  HeartHandshake,
  Languages,
  Megaphone,
  PenLine,
  Scale,
  Search,
  Shield,
  Sparkles,
} from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeIn,
  fadeInUp,
  slideInLeft,
  slideInRight,
  motion,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { PublicationCard } from "@/components/shared/publication-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { cn } from "@/lib/utils";
import { FEATURED_PUBLICATIONS } from "@/lib/publications";

const researchDomains = [
  {
    title: "Community Health Research",
    description:
      "Studying how households, CHWs, and facilities interact so interventions fit real life in Ghana’s Upper East and beyond.",
    icon: HeartHandshake,
  },
  {
    title: "Maternal & Child Health",
    description:
      "Evidence on pregnancy, birth, nutrition, and early childhood outcomes to protect mothers and children in rural settings.",
    icon: Baby,
  },
  {
    title: "Health Equity & Social Determinants",
    description:
      "Understanding how income, education, gender, and geography shape who gets care—and who is left behind.",
    icon: Scale,
  },
  {
    title: "Mental Health & Psychosocial Wellbeing",
    description:
      "Community-sensitive research on stress, resilience, and support systems where formal mental health resources are scarce.",
    icon: Sparkles,
  },
  {
    title: "Health Systems & Policy Research",
    description:
      "Evaluating delivery models, financing, and governance so policy and practice improve together.",
    icon: Building2,
  },
  {
    title: "Preventive Health & Behavioural Science",
    description:
      "How people adopt healthy habits and preventive services—and how programmes can support lasting change.",
    icon: Activity,
  },
];

const RESEARCH_DOMAIN_IMAGES = [
  "/images/partners/partner-communities.jpg",
  "/images/projects/maternal-health.jpg",
  "/images/hero.jpg",
  "/images/projects/adolescent.jpg",
  "/images/news/policy-dialogue.jpg",
  "/images/partners/partner-health-institutions.jpg",
] as const;

const processSteps = [
  { label: "Identify", description: "Priorities from communities, partners, and data", icon: Search },
  { label: "Design", description: "Protocols that are ethical, feasible, and useful", icon: PenLine },
  { label: "Engage", description: "Ongoing dialogue with stakeholders", icon: Handshake },
  { label: "Collect", description: "Rigorous, respectful data gathering", icon: ClipboardList },
  { label: "Analyse", description: "Transparent methods and quality checks", icon: BarChart3 },
  { label: "Translate", description: "Findings shaped for policy and practice", icon: Languages },
  { label: "Disseminate", description: "Reports, briefings, and open knowledge", icon: Megaphone },
];

const featuredAreas = [
  {
    title: "Community health workers & last-mile care",
    description:
      "CHWRI examines how community health workers extend primary care in Walewale and surrounding districts—what works, what strains them, and how supervision and supplies can be strengthened.",
    icon: HeartHandshake,
  },
  {
    title: "Climate, livelihoods, and health",
    description:
      "Research that connects seasonal hardship, water and food security, and service use—so health programmes align with how families actually live through the year.",
    icon: Shield,
  },
  {
    title: "Participatory monitoring & learning",
    description:
      "We embed community voices in study design and feedback loops so evidence reflects lived experience and returns value to participants, not only to journals.",
    icon: FileCheck,
  },
];

const studies = [
  { title: "Feasibility of integrated maternal nutrition counselling via CHW networks (North East Region)", status: "Active" as const },
  { title: "Stigma, help-seeking, and informal support for common mental distress in rural households", status: "Active" as const },
  { title: "Primary care readiness and referral pathways: a district health facility assessment", status: "Active" as const },
  { title: "Community-led prioritisation for preventive services in Walewale sub-district", status: "Completed" as const },
  { title: "Household coping strategies and child illness care-seeking during the lean season", status: "Completed" as const },
  { title: "Rapid qualitative assessment of CHW medicine stock-outs and mitigation practices", status: "Completed" as const },
];

const researchPublications = FEATURED_PUBLICATIONS.slice(0, 4);

export default function ResearchPage() {
  return (
    <main>
      <PageHero badge="Research" title="Generating Evidence for Health Impact" heroImage="/images/partners/partner-health-institutions.jpg" />

      {/* Research Philosophy */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Our approach"
            title="Research philosophy"
            subtitle="CHWRI is committed to rigorous, ethical, and community-informed inquiry. We work in Walewale and partner communities as guests and learners—not as outsiders who extract data and leave."
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="rounded-3xl bg-white border border-slate-100/80 p-8 lg:p-10 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  Ethics and respect first
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Every study is reviewed for social and clinical risk, proportionate consent, and clear
                  benefit-sharing. We train field teams in cultural humility and safeguarding, and we
                  document decisions so partners and communities can see how choices were made.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll variants={slideInRight}>
              <div className="rounded-3xl bg-white border border-slate-100/80 p-8 lg:p-10 shadow-sm">
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  Participatory from question to dissemination
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Participatory research means communities help define priorities, interpret early findings,
                  and shape how results are shared—locally and nationally. Advisory groups, dialogue sessions,
                  and plain-language outputs keep evidence tethered to the people it is meant to serve.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  That approach strengthens validity: when measures and messages make sense locally, uptake
                  by policymakers and practitioners improves—and trust endures beyond any single project.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Key Research Domains */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Focus areas"
            title="Key research domains"
            subtitle="Six pillars guide our portfolio—each connected to primary care, equity, and sustainable health improvement in northern Ghana."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {researchDomains.map((d, index) => (
              <FeatureCard
                key={d.title}
                icon={d.icon}
                title={d.title}
                description={d.description}
                variant="default"
                image={RESEARCH_DOMAIN_IMAGES[index % RESEARCH_DOMAIN_IMAGES.length]}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Research Process */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="How we work"
            title="Research process"
            subtitle="A clear path from local priorities to trusted evidence—from first question to policy-ready outputs."
          />

          <div className="lg:hidden space-y-4">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <AnimateOnScroll key={step.label} delay={i * 0.05}>
                  <div className="flex gap-4 rounded-2xl bg-white border border-slate-100 p-5 shadow-sm">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-sage-100">
                      <Icon className="h-5 w-5 text-teal-700" />
                    </div>
                    <div>
                      <p className="font-heading text-sm font-semibold text-teal-800">
                        {i + 1}. {step.label}
                      </p>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          <div className="hidden lg:block">
            <div className="flex flex-wrap items-stretch justify-center gap-2 xl:gap-3">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.label} className="flex items-stretch">
                    <AnimateOnScroll
                      className="flex-1 min-w-[7.5rem] max-w-[9.5rem]"
                      variants={i % 2 === 0 ? slideInLeft : slideInRight}
                      delay={i * 0.06}
                    >
                      <div className="flex h-full flex-col rounded-3xl bg-white border border-slate-100 p-5 text-center shadow-sm">
                        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-100 to-sage-100">
                          <Icon className="h-5 w-5 text-teal-700" />
                        </div>
                        <span className="font-heading text-xs font-semibold text-teal-700">
                          {i + 1}
                        </span>
                        <p className="font-heading mt-1 text-sm font-semibold text-slate-900">{step.label}</p>
                        <p className="mt-2 text-xs text-slate-600 leading-snug">{step.description}</p>
                      </div>
                    </AnimateOnScroll>
                    {i < processSteps.length - 1 && (
                      <div className="flex items-center px-1 text-teal-300">
                        <ChevronRight className="h-5 w-5 shrink-0" aria-hidden />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Evidence Quality */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Governance"
            title="Ethics & evidence quality"
            subtitle="Institutional oversight, transparent methods, and community engagement in ethics—not as a checkbox, but as a shared responsibility."
          />
          <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Institutional review & proportionate oversight",
                body: "Studies undergo ethical review aligned with national guidance and partner requirements. Risk is assessed carefully; consent processes match literacy, language, and context.",
                icon: FileCheck,
              },
              {
                title: "Informed consent & ongoing choice",
                body: "Participants receive clear information on purpose, risks, benefits, and data use. They can withdraw without penalty, and we revisit understanding at longer studies’ milestones.",
                icon: Handshake,
              },
              {
                title: "Data integrity & secure handling",
                body: "Standard operating procedures cover collection, storage, de-identification, and audit trails. Quality checks and duplicate monitoring reduce error and bias where feasible.",
                icon: Shield,
              },
              {
                title: "Community voice in research ethics",
                body: "Advisors help interpret sensitive topics, flag unintended harm, and co-shape dissemination so findings do not stigmatise or misrepresent Walewale and neighbouring communities.",
                icon: HeartHandshake,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="rounded-3xl border border-slate-100 bg-warm-50/60 p-8 lg:p-9"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-teal-100 shadow-sm">
                    <Icon className="h-5 w-5 text-teal-700" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.body}</p>
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Featured Research Areas */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Depth"
            title="Featured research areas"
            subtitle="Three strands where CHWRI is building depth—always with partners who share implementation risk and learning."
          />
          <div className="grid gap-8 lg:grid-cols-3">
            {featuredAreas.map((area, i) => {
              const Icon = area.icon;
              const areaVariants = i === 0 ? slideInLeft : i === 1 ? fadeIn : slideInRight;
              return (
                <AnimateOnScroll key={area.title} variants={areaVariants}>
                  <div className="h-full rounded-3xl bg-white border border-slate-100 p-8 lg:p-10 shadow-sm transition-shadow hover:shadow-md">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-100 to-sage-100">
                      <Icon className="h-6 w-6 text-teal-700" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4 text-balance">
                      {area.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-sm lg:text-base">{area.description}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Ongoing / Past Studies */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Portfolio"
            title="Ongoing & past studies"
            subtitle="Representative lines of inquiry—titles are illustrative of themes CHWRI pursues with funders and district health teams."
          />
          <StaggerChildren className="grid gap-4 sm:grid-cols-2">
            {studies.map((study) => (
              <motion.div
                key={study.title}
                variants={fadeInUp}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-slate-100 bg-warm-50/40 px-6 py-5"
              >
                <p className="font-medium text-slate-800 text-sm lg:text-base leading-snug pr-4">
                  {study.title}
                </p>
                <span
                  className={cn(
                    "shrink-0 self-start sm:self-center inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                    study.status === "Active"
                      ? "bg-teal-100 text-teal-800"
                      : "bg-slate-200/80 text-slate-700"
                  )}
                >
                  {study.status}
                </span>
              </motion.div>
            ))}
          </StaggerChildren>
          <AnimateOnScroll className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800"
            >
              Request the full studies catalogue
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Publications Preview */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Knowledge"
            title="Publications preview"
            subtitle="Selected outputs—papers, briefs, and learning products—from CHWRI and collaborating authors."
          />
          <StaggerChildren className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {researchPublications.map((pub) => (
              <PublicationCard
                key={pub.id}
                title={pub.title}
                authors={pub.authors}
                journal={pub.journal}
                type={pub.type}
                date={pub.year}
                href={pub.href}
                doi={pub.doi}
                summary={pub.summary}
                contributors={pub.contributors}
                featured={pub.featured}
              />
            ))}
          </StaggerChildren>
          <AnimateOnScroll className="mt-12 text-center">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-teal-800 shadow-sm hover:bg-teal-50 transition-colors"
            >
              View all publications
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Collaborate With Us on Research"
        subtitle="We welcome researchers, universities, NGOs, and government institutions who want co-produced evidence with strong field presence in northern Ghana. Share a concept note or explore joint ethics, data, and dissemination plans with our team."
        primaryCta={{ label: "Start a conversation", href: "/contact" }}
        secondaryCta={{ label: "Explore partnerships", href: "/partnerships" }}
        variant="teal"
      />
    </main>
  );
}
