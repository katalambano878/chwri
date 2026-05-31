"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Eye,
  Compass,
  HeartHandshake,
  Microscope,
  Handshake,
  Leaf,
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
import { ValueCard } from "@/components/shared/value-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { CORE_VALUES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const APPROACH_PILLARS = [
  {
    icon: HeartHandshake,
    title: "Community-Centred",
    description:
      "We begin with community priorities, lived experience, and local leadership—designing research and programmes that reflect what people need, not only what is convenient to measure.",
  },
  {
    icon: Microscope,
    title: "Evidence-Driven",
    description:
      "Rigorous methods, transparent reporting, and careful interpretation guide every study and intervention, so decisions rest on dependable evidence rather than assumption.",
  },
  {
    icon: Handshake,
    title: "Collaborative",
    description:
      "We work across disciplines, institutions, and borders—linking clinicians, academics, policymakers, and communities in shared learning and shared accountability.",
  },
  {
    icon: Leaf,
    title: "Sustainable",
    description:
      "We invest in capacity, systems, and relationships that outlast individual projects, aiming for durable improvements in health services and community wellbeing.",
  },
] as const;

const TEAM_PLACEHOLDERS = [
  {
    role: "Chief Executive Officer (CEO)",
    unit: "Centre for Health & Wellbeing Research and Interventions (CHWRI)",
    name: "Abubakari Jaliu",
    image: "/images/team/abubakari-jaliu.png",
    bio: "Public health leader with over a decade of experience in implementation research, health systems strengthening, nutrition, MEL, and social and behaviour change communication. He leads CHWRI's evidence-driven strategy and currently pursues a PhD in Public Health with a focus on non-communicable diseases.",
  },
  {
    role: "Board Director",
    unit: "Vice Chancellor, University of Health and Allied Sciences (UHAS)",
    name: "Prof. Lydia Aziato",
    image: "/images/team/lydia-aziato.png",
    bio: "Distinguished nurse leader, oncology expert, and academic with a PhD in Nursing. Vice Chancellor of UHAS and author of over 90 peer-reviewed publications, she provides strategic leadership and academic guidance across CHWRI's research, capacity building, and cancer prevention initiatives.",
  },
  {
    role: "Board Director",
    unit: "Chief Health Research Officer, Navrongo Health Research Centre (Ghana Health Service)",
    name: "Dr. Raymond Akawire Aborigo",
    image: "/images/team/raymond-aborigo.png",
    bio: "Global public health researcher (PhD, Monash University) with over two decades of experience across health systems research, maternal and newborn health, non-communicable diseases, mental health, and bioethics. Author of 80+ peer-reviewed publications, he has consulted for WHO, UNICEF, USAID, and CDC, strengthening evidence-informed policy and research capacity.",
  },
  {
    role: "Head, Internal Audit Department",
    unit: "Nursing and Midwifery Training College, Nalerigu (Ministry of Health, Ghana)",
    name: "Jamal Mohammed Abubakari",
    image: "/images/team/jamal-mohammed-abubakari.png",
    bio: "Public sector Internal Auditor and governance professional with extensive experience in risk management, internal controls, and regulatory compliance. Jamal holds an MBA in Auditing (UPSA), is a member of the Institute of Internal Auditors Ghana, and contributes to both institutional accountability and community leadership.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About CHWRI"
        title="Dedicated to Health, Driven by Evidence"
        subtitle="The Centre for Health and Wellbeing Research and Interventions (CHWRI) is an independent health research institution rooted in Walewale, Ghana. We generate knowledge, test what works, and partner with communities and systems to turn evidence into better care and healthier lives."
        heroImage="/images/about-community.png"
      />

      {/* Organisation overview */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Who We Are"
            title="A Multidisciplinary Hub for Health and Wellbeing"
            subtitle="CHWRI brings together researchers, practitioners, and community partners to address complex health challenges with seriousness, care, and intellectual honesty."
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <AnimateOnScroll variants={slideInLeft} className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed text-pretty">
                Based in{" "}
                <span className="text-slate-900 font-medium">Walewale, in Ghana&apos;s North-East Region</span>
                , CHWRI operates as a multidisciplinary centre where public health, clinical insight, social
                science, and community practice meet. We were established to narrow the distance between
                research and everyday care—so findings inform frontline decisions, and real-world questions
                shape the research agenda.
              </p>
              <p className="text-slate-600 leading-relaxed text-pretty">
                Our work spans studies, pilots, and implementation support: from maternal and child health to
                preventive care, mental wellbeing, and health systems strengthening. Across themes, we hold
                the same standard—work that is ethically conducted, clearly communicated, and oriented toward
                measurable benefit for people and institutions.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Locally rooted priorities with internationally recognised methods",
                  "Strong ethics, data stewardship, and respect for participants",
                  "Knowledge shared in forms useful to policymakers and practitioners",
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
              <div className="rounded-3xl bg-white border border-slate-100 shadow-sm p-8 lg:p-10">
                <h3 className="font-heading text-xl font-semibold text-slate-900 mb-4">
                  Research that reaches practice
                </h3>
                <p className="text-slate-600 leading-relaxed text-pretty mb-6">
                  Too often, excellent research stops at publication. CHWRI was founded to keep the thread
                  intact—from question to evidence to action—working alongside district health teams,
                  facilities, and communities so insights translate into protocols, programmes, and policy
                  dialogue where they are needed most.
                </p>
                <p className="text-slate-600 leading-relaxed text-pretty">
                  Whether we are evaluating an intervention, co-designing a training curriculum, or
                  supporting data use for planning, we treat{" "}
                  <span className="text-teal-800 font-medium">partnership and rigour</span> as inseparable.
                  That is how research earns trust—and how trust sustains impact over time.
                </p>
              </div>
              <Link
                href="/our-work"
                className={cn(
                  "inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
                )}
              >
                Explore our work
                <span aria-hidden>→</span>
              </Link>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section
        id="vision-mission"
        className="py-20 lg:py-28 bg-white scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Direction"
            title="Vision & Mission"
            subtitle="Our vision describes the institution we are building; our mission defines how we pursue it, every day."
          />

          <div className="grid md:grid-cols-2 gap-8">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="h-full rounded-3xl bg-gradient-to-br from-teal-50 to-sage-50 border border-teal-100/80 p-8 lg:p-10">
                <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-6 shadow-sm">
                  <Eye className="w-6 h-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-4">Vision</h3>
                <p className="text-slate-700 leading-relaxed text-pretty text-lg">
                  To be a leading centre of excellence in health and well-being research and interventions,
                  driving innovations that transform lives and strengthen communities.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight}>
              <div className="h-full rounded-3xl bg-slate-50 border border-slate-100 p-8 lg:p-10">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <Compass className="w-6 h-6 text-teal-700" aria-hidden />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-slate-900 mb-4">Mission</h3>
                <p className="text-slate-700 leading-relaxed text-pretty text-lg">
                  To advance health and well-being through high-quality research, evidence-based
                  interventions, and collaborative partnerships. CHWRI is committed to improving access to
                  care, promoting healthier lifestyles, and generating knowledge that informs policy and
                  practice for sustainable impact.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Core values */}
      <section id="values" className="py-20 lg:py-28 bg-warm-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Principles"
            title="Our Core Values"
            subtitle="These principles guide how we design studies, engage communities, and steward the trust placed in us."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((value, index) => (
              <ValueCard
                key={value.title}
                title={value.title}
                description={value.description}
                icon={value.icon}
                index={index}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why CHWRI exists */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-slate-100 shadow-lg">
                <Image
                  src="/images/partners/partner-communities.jpg"
                  alt="Community members gathered under a tree, representing the rural and underserved populations CHWRI serves"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-teal-950/10" aria-hidden />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight} className="space-y-6">
              <SectionHeader
                align="left"
                badge="Purpose"
                title="Why CHWRI Exists"
                subtitle="Northern Ghana carries a disproportionate share of preventable morbidity and mortality. Closing that gap requires more than good intentions—it requires evidence that fits context."
                className="mb-0 lg:mb-0"
              />
              <p className="text-slate-600 leading-relaxed text-pretty">
                Rural and underserved communities are frequently under-represented in research and in the
                evidence base that shapes guidelines. When data are sparse or drawn from distant settings,
                programmes risk missing cultural realities, access barriers, and the strengths communities
                already bring to care.
              </p>
              <ul className="space-y-3">
                {[
                  "Persistent burdens from infectious disease, maternal and child health risks, and rising non-communicable conditions",
                  "Pressure on primary care, transport, and health workforce capacity across dispersed populations",
                  "A need for implementation research that speaks to district realities—not only global averages",
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
              <p className="text-slate-600 leading-relaxed text-pretty">
                CHWRI exists to anchor{" "}
                <span className="text-slate-900 font-medium">
                  high-quality, locally rooted, globally connected
                </span>{" "}
                health research in the north—partnering with people who live the challenges and with
                institutions positioned to act on what we learn together.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-teal-50/80 to-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="How We Work"
            title="Our Approach"
            subtitle="Four pillars shape how we plan projects, engage partners, and measure progress."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {APPROACH_PILLARS.map((pillar) => (
              <motion.div key={pillar.title} variants={fadeInUp}>
                <div className="h-full rounded-2xl bg-white border border-slate-100 shadow-sm p-7 hover:shadow-md hover:border-teal-200/80 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-100 to-sage-100 flex items-center justify-center mb-5">
                    <pillar.icon className="w-5 h-5 text-teal-700" aria-hidden />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Geographic context */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-stretch">
            <AnimateOnScroll variants={slideInLeft} className="h-full">
              <div className="relative rounded-3xl overflow-hidden border border-slate-100 h-full min-h-[320px] shadow-sm">
                <Image
                  src="/images/partners/partner-communities.jpg"
                  alt="Community members gathered in a rural setting in northern Ghana"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="font-heading text-xl lg:text-2xl font-semibold text-white mb-1">
                    Walewale, North-East Region
                  </p>
                  <p className="text-teal-100/90 text-sm lg:text-base leading-relaxed">
                    A strategic base for reaching surrounding districts and supporting community-centred health action.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight} className="space-y-5 py-2 lg:py-6">
              <SectionHeader
                align="left"
                badge="Place"
                title="Geographic & Community Context"
                subtitle="Location is not incidental to our mission—it shapes the questions we ask and the partnerships we prioritise."
                className="mb-0"
              />
              <p className="text-slate-600 leading-relaxed text-pretty">
                The North-East Region combines agricultural livelihoods, growing towns, and dispersed
                settlements. Seasonal patterns, mobility, and infrastructure interact with care-seeking,
                supply chains, and workforce deployment in ways that national aggregates can obscure.
              </p>
              <p className="text-slate-600 leading-relaxed text-pretty">
                Anchoring CHWRI in Walewale signals a deliberate choice: to build institutional depth where
                context-rich inquiry is most needed, and to strengthen the research ecosystem in northern
                Ghana through training, mentorship, and sustained collaboration with the health sector.
              </p>
              <ul className="space-y-2.5 pt-2">
                {[
                  "Attention to access, seasonality, and primary-care realities",
                  "Engagement with traditional and formal structures that influence health",
                  "Commitment to ethical, respectful research practice in every community",
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
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section id="team" className="py-20 lg:py-28 bg-warm-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Leadership"
            title="Our Team"
            subtitle="Core staff profiles are being added progressively. Verified institutional biographies and photos are published as they are approved."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_PLACEHOLDERS.map((member) => (
              <motion.div key={member.name} variants={fadeInUp}>
                <div className="group relative rounded-2xl bg-white border border-slate-100 shadow-sm h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-teal-200/80">
                  <div className="aspect-[4/5] relative overflow-hidden bg-slate-100">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-heading text-xl font-semibold text-white mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-teal-200 font-medium">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      {member.unit}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>

          <AnimateOnScroll className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors"
            >
              Contact CHWRI
              <span aria-hidden>→</span>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      <CTASection
        title="Ready to Make a Difference?"
        subtitle="Partner with CHWRI on research, implementation, or capacity building—or start a conversation about how we can work together for healthier communities."
        primaryCta={{ label: "Explore Partnerships", href: "/partnerships" }}
        secondaryCta={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  );
}
