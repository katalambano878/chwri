"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Brain,
  Activity,
  ShieldCheck,
  Scale,
  Baby,
  Microscope,
  Stethoscope,
  Users,
  BookOpen,
  Building2,
  Globe2,
  LineChart,
  GraduationCap,
  HandHeart,
  TreePine,
  ClipboardCheck,
  Sparkles,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import {
  motion,
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  fadeInUpReveal,
  fadeIn,
  slideInLeft,
  slideInRight,
  staggerContainerReveal,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { FeatureCard } from "@/components/shared/feature-card";
import { ProjectCard } from "@/components/shared/project-card";
import { PublicationCard } from "@/components/shared/publication-card";
import { ArticleCard } from "@/components/shared/article-card";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { CTASection } from "@/components/shared/cta-section";
import { THEMATIC_AREAS, IMPACT_STATS } from "@/lib/constants";
import { FEATURED_PUBLICATIONS } from "@/lib/publications";

const thematicIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart,
  Baby,
  ShieldCheck,
  Scale,
  Brain,
  Activity,
};

const HERO_IMAGES = [
  "/images/hero.jpg",
  "/images/projects/maternal-health.jpg",
  "/images/partners/partner-health-institutions.jpg"
];

const ROTATED_FEATURE_IMAGES = [
  "/images/partners/partner-health-institutions.jpg",
  "/images/partners/partner-communities.jpg",
  "/images/projects/chw-training.jpg",
  "/images/news/policy-dialogue.jpg",
  "/images/projects/adolescent.jpg",
  "/images/projects/maternal-health.jpg",
];

export default function HomePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center bg-teal-950">
        {/* Hero image slider - full bleed background */}
        <div className="absolute inset-0">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={HERO_IMAGES[currentImageIndex]}
                alt="CHWRI Impact"
                fill
                className="object-cover object-center"
                priority={currentImageIndex === 0}
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>
          {/* Gradient overlay: dark teal on left for text readability, lighter toward right to show the scene */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-teal-950/85 via-teal-900/65 to-teal-800/30 z-10"
            aria-hidden
          />
        </div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 py-24 lg:py-32">
          <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-teal-200 text-sm mb-8"
              >
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">Advancing Health in Ghana & Beyond</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-[3.5rem] font-semibold text-white tracking-tight leading-[1.1] text-balance"
              >
                Where Evidence{" "}
                <span className="text-teal-300">Meets Action</span> for Better
                Health and Wellbeing
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-6 text-lg lg:text-xl text-teal-100/90 leading-relaxed max-w-xl text-pretty"
              >
                CHWRI is a multidisciplinary research hub dedicated to transforming
                lives through innovative health research, evidence-based
                interventions, and collaborative partnerships that strengthen
                communities across Ghana.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/our-work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-teal-900 font-semibold rounded-full shadow-xl hover:shadow-2xl hover:bg-teal-50 transition-all group"
                >
                  Explore Our Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/partnerships"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  Partner With CHWRI
                </Link>
              </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-warm-50 to-transparent z-20" />

        {/* Slider Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentImageIndex(idx)}
              className={`transition-all duration-500 rounded-full ${
                idx === currentImageIndex
                  ? "w-8 h-2 bg-teal-400"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ============================================ */}
      {/* IMPACT STRIP — Editorial band */}
      {/* ============================================ */}
      <section className="relative -mt-10 z-10" aria-label="Impact at a glance">
        <div className="relative overflow-hidden bg-teal-900 border-y border-teal-800/80">
          {/* Subtle pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,.03)_0%,transparent_50%)] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-[2.125rem] lg:py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-teal-700/60">
              {[
                { value: IMPACT_STATS[0].value, label: IMPACT_STATS[0].label, icon: Microscope },
                { value: IMPACT_STATS[1].value, label: IMPACT_STATS[1].label, icon: Heart },
                { value: IMPACT_STATS[2].value, label: IMPACT_STATS[2].label, icon: Users },
                { value: IMPACT_STATS[3].value, label: IMPACT_STATS[3].label, icon: Activity },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center justify-center text-center px-5 py-4 lg:py-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-teal-700/50 flex items-center justify-center mb-2">
                    <item.icon className="w-4 h-4 text-teal-200" />
                  </div>
                  <span className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="mt-0.5 text-xs sm:text-[0.8125rem] font-medium text-teal-200/80 leading-snug">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* INTRO TO CHWRI */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-warm-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll variants={slideInLeft}>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-6">
                About CHWRI
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6 text-balance">
                Bridging the Gap Between Research and Practice
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6 text-pretty">
                The Centre for Health & Wellbeing Research and Interventions is a
                multidisciplinary hub based in Walewale, in Ghana&apos;s North-East
                Region. We are dedicated to improving health outcomes and quality of
                life through rigorous research and practical, community-centred
                interventions.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8 text-pretty">
                Working at the intersection of evidence generation, health systems
                strengthening, and community engagement, CHWRI collaborates with
                local communities, health institutions, policymakers, and
                international partners to create solutions that are sustainable,
                equitable, and grounded in the realities of the communities we serve.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Evidence-based research and interventions",
                  "Community-centred health solutions",
                  "Policy-relevant knowledge generation",
                  "Collaborative, partnership-driven approach",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors group"
              >
                Learn more about us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight}>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-3xl border border-teal-100/50 overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/about-community.jpg"
                    alt="Community members painting a mural, maintaining village infrastructure, and tending a vegetable garden — community-led development in the North-East Region."
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-teal-950/30" aria-hidden />
                  <div className="relative z-10 text-center p-8">
                    <div className="w-20 h-20 rounded-2xl bg-white/90 backdrop-blur-sm mx-auto mb-4 flex items-center justify-center shadow-sm">
                      <Globe2 className="w-9 h-9 text-teal-600/80" />
                    </div>
                    <p className="text-white/95 text-sm font-medium drop-shadow-sm">
                      Community Health Research
                    </p>
                    <p className="text-teal-100/90 text-xs mt-1 drop-shadow-sm">
                      Walewale, North-East Region, Ghana
                    </p>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-teal-700 p-5 shadow-xl flex flex-col justify-center">
                  <div className="text-2xl font-heading font-bold text-white">
                    Ghana
                  </div>
                  <div className="text-xs text-teal-200/70 mt-1">North-East Region</div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHAT WE DO – FEATURE GRID */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="What We Do"
            title="Driving Health Innovation Through Research and Action"
            subtitle="Our multidisciplinary approach integrates research, community engagement, and systems strengthening to create lasting health improvements for the populations we serve."
          />

          <StaggerChildren
            variants={staggerContainerReveal}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <FeatureCard
              icon={Microscope}
              title="Research & Evidence Generation"
              description="Conducting rigorous, community-informed research that produces actionable evidence to improve health outcomes and guide policy decisions."
              href="/research"
              animationVariants={fadeInUpReveal}
              image="/images/partners/partner-health-institutions.jpg"
            />
            <FeatureCard
              icon={HandHeart}
              title="Community Interventions"
              description="Designing and implementing evidence-based health interventions that are culturally sensitive, community-driven, and focused on measurable impact."
              href="/interventions"
              animationVariants={fadeInUpReveal}
              image="/images/partners/partner-communities.jpg"
            />
            <FeatureCard
              icon={Building2}
              title="Health Systems Strengthening"
              description="Supporting the development of resilient, equitable health systems through workforce training, service improvement, and data-driven management."
              href="/health-systems-strengthening"
              animationVariants={fadeInUpReveal}
              image="/images/projects/chw-training.jpg"
            />
            <FeatureCard
              icon={BookOpen}
              title="Policy & Advocacy"
              description="Translating research findings into policy recommendations that influence health practice and governance at local, regional, and national levels."
              href="/our-work"
              animationVariants={fadeInUpReveal}
              image="/images/news/policy-dialogue.jpg"
            />
            <FeatureCard
              icon={GraduationCap}
              title="Capacity Building"
              description="Investing in the skills and knowledge of health professionals, community workers, and researchers through structured training and mentorship."
              href="/our-work"
              animationVariants={fadeInUpReveal}
              image="/images/projects/adolescent.jpg"
            />
            <FeatureCard
              icon={LineChart}
              title="Monitoring, Evaluation & Learning"
              description="Embedding robust M&E frameworks in all our programmes to ensure accountability, drive continuous learning, and demonstrate impact."
              href="/our-work"
              animationVariants={fadeInUpReveal}
              image="/images/projects/maternal-health.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* ============================================ */}
      {/* CORE THEMATIC AREAS */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Focus Areas"
            title="Our Core Thematic Areas"
            subtitle="We address the most pressing health challenges facing communities in Ghana and across sub-Saharan Africa through focused, evidence-driven thematic programmes."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {THEMATIC_AREAS.map((area, index) => {
              const Icon =
                thematicIcons[area.icon] || Heart;
              return (
                <FeatureCard
                  key={area.title}
                  icon={Icon}
                  title={area.title}
                  description={area.description}
                  href={area.href}
                  variant="filled"
                  image={ROTATED_FEATURE_IMAGES[index % ROTATED_FEATURE_IMAGES.length]}
                />
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ============================================ */}
      {/* FEATURED PROGRAMS */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 lg:mb-16">
            <div>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-4">
                Featured Programs
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
                Programs & Projects
              </h2>
              <p className="mt-3 text-slate-600 max-w-2xl text-pretty">
                Explore our portfolio of impactful health research and intervention
                programmes transforming communities.
              </p>
            </div>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-800 transition-colors group whitespace-nowrap"
            >
              View all programs
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Maternal and Newborn Health Improvement Initiative"
              description="A community-based programme aimed at reducing maternal and neonatal mortality through improved antenatal care, skilled birth attendance, and postnatal follow-up in rural communities."
              status="Active"
              location="North-East Region"
              theme="Maternal & Child Health"
              date="2024 – Present"
              image="/images/projects/maternal-health.jpg"
            />
            <ProjectCard
              title="Community Health Worker Training & Deployment Programme"
              description="Building the capacity of community health volunteers to deliver essential primary health services, health education, and referrals in underserved areas."
              status="Active"
              location="Walewale District"
              theme="Capacity Building"
              date="2023 – Present"
              image="/images/projects/chw-training.jpg"
            />
            <ProjectCard
              title="Behavioural Health Promotion for Adolescent Wellbeing"
              description="An intervention programme promoting mental health awareness, healthy behaviours, and psychosocial support for young people in schools and community settings."
              status="Upcoming"
              location="North-East Region"
              theme="Mental Wellbeing"
              date="2025"
              image="/images/projects/adolescent.jpg"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* ============================================ */}
      {/* RESEARCH + INTERVENTION DUAL SECTION */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-teal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Our Approach"
            title="Research-Driven, Community-Centred"
            subtitle="At CHWRI, every intervention is informed by evidence, and every research effort is guided by the real-world needs of the communities we serve."
            dark
          />

          <div className="grid lg:grid-cols-2 gap-8">
            <AnimateOnScroll variants={slideInLeft}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-teal-500/20 flex items-center justify-center mb-6">
                  <Microscope className="w-7 h-7 text-teal-300" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                  Rigorous Research
                </h3>
                <p className="text-teal-200/70 leading-relaxed mb-6">
                  Our research programme generates high-quality evidence across
                  community health, health equity, maternal and child health, mental
                  wellbeing, and health systems. We employ mixed-methods
                  approaches, community-based participatory research, and
                  innovative study designs to ensure our findings are robust,
                  relevant, and translatable.
                </p>
                <div className="space-y-3">
                  {[
                    "Community-based participatory research",
                    "Mixed-methods and innovative study designs",
                    "Ethical, rigorous, and transparent processes",
                    "Policy-relevant evidence generation",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-teal-200/70">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/research"
                  className="inline-flex items-center gap-2 mt-6 text-teal-300 font-semibold hover:text-teal-200 transition-colors group"
                >
                  Explore our research
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll variants={slideInRight}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm h-full">
                <div className="w-14 h-14 rounded-2xl bg-sage-500/20 flex items-center justify-center mb-6">
                  <HandHeart className="w-7 h-7 text-sage-300" />
                </div>
                <h3 className="font-heading text-2xl font-semibold text-white mb-4">
                  Impactful Interventions
                </h3>
                <p className="text-teal-200/70 leading-relaxed mb-6">
                  Our interventions are designed collaboratively with communities
                  and stakeholders, ensuring cultural relevance, sustainability, and
                  measurable impact. From health service delivery improvements to
                  behavioural change programmes, we implement solutions that
                  address the root causes of poor health outcomes.
                </p>
                <div className="space-y-3">
                  {[
                    "Evidence-based intervention design",
                    "Community co-creation and ownership",
                    "Culturally sensitive implementation",
                    "Robust impact measurement",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-sage-400 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-teal-200/70">{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/interventions"
                  className="inline-flex items-center gap-2 mt-6 text-sage-300 font-semibold hover:text-sage-200 transition-colors group"
                >
                  View our interventions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* IMPACT SNAPSHOT */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Our Impact"
            title="Creating Measurable Change"
            subtitle="CHWRI measures success not just in research outputs, but in real improvements to people's lives, health systems, and community wellbeing."
          />

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            <AnimateOnScroll variants={slideInLeft} className="lg:col-span-1">
              <motion.div
                className="relative rounded-3xl p-8 text-white h-full min-h-[280px] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-teal-700 via-teal-700 to-teal-800 border border-teal-600/30 shadow-lg shadow-teal-900/10 cursor-default"
                whileHover={{
                  y: -6,
                  transition: { type: "spring", stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: 0.99 }}
              >
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_0%_0%,rgba(255,255,255,.12)_0%,transparent_55%)] opacity-80"
                  aria-hidden
                />
                <div className="relative z-10">
                  <h3 className="font-heading text-3xl font-semibold mb-4">
                    Our Commitment to Impact
                  </h3>
                  <p className="text-teal-100/85 leading-relaxed">
                    Every programme we undertake is designed with measurable
                    outcomes in mind. We embed monitoring and evaluation from day
                    one, ensuring accountability to the communities we serve,
                    the partners who support us, and the mission that drives us.
                  </p>
                  <Link
                    href="/programs"
                    className="inline-flex items-center gap-2 mt-6 text-teal-100 font-semibold hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-700 rounded-lg"
                  >
                    See our programs
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </AnimateOnScroll>

            <StaggerChildren
              variants={staggerContainerReveal}
              className="lg:col-span-2 grid sm:grid-cols-2 gap-4"
            >
              {[
                {
                  value: "25,000+",
                  label: "Community members reached through health interventions and outreach programmes",
                },
                {
                  value: "15+",
                  label: "Active research projects and studies across key health domains",
                },
                {
                  value: "12",
                  label: "Community and institutional partnerships driving collaborative impact",
                },
                {
                  value: "8",
                  label: "Core thematic areas spanning public health, equity, and systems",
                },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUpReveal}
                  whileHover={{
                    y: -5,
                    transition: { type: "spring", stiffness: 450, damping: 28 },
                  }}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-teal-900/[0.06] hover:border-teal-200/80 focus-within:ring-2 focus-within:ring-teal-400/40 focus-within:ring-offset-2"
                >
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden
                  />
                  <div className="font-heading text-3xl font-bold text-teal-700 mb-2 transition-transform duration-300 group-hover:translate-x-0.5">
                    {stat.value}
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTNERSHIPS */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Partnerships"
            title="Collaborating for Greater Impact"
            subtitle="CHWRI believes in the power of partnerships. We work with a diverse ecosystem of stakeholders to amplify our impact and advance health equity."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Users,
                title: "Communities",
                description:
                  "Local communities are at the heart of everything we do — as participants, partners, and beneficiaries.",
                image: "/images/partners/partner-communities.jpg"
              },
              {
                icon: Building2,
                title: "Health Institutions",
                description:
                  "We partner with hospitals, clinics, and health directorates to strengthen service delivery.",
                image: "/images/partners/partner-health-institutions.jpg"
              },
              {
                icon: BookOpen,
                title: "Academic Partners",
                description:
                  "Collaborating with universities and research institutions to advance knowledge and train the next generation.",
                image: "/images/partners/partner-academic.jpg"
              },
              {
                icon: Globe2,
                title: "International Partners",
                description:
                  "Working with global health organisations and development agencies for broader impact and shared learning.",
                image: "/images/partners/partner-international.jpg"
              },
            ].map((partner) => (
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

          <AnimateOnScroll className="text-center">
            <Link
              href="/partnerships"
              className="inline-flex items-center gap-2 px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all group"
            >
              Explore Partnerships
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ============================================ */}
      {/* NEWS / PUBLICATIONS PREVIEW */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-warm-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:items-start">
            {/* Publications — sticky so it stays in view while Recent Stories scrolls */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-teal-50 text-teal-700 border border-teal-100 mb-3">
                    Publications
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-slate-900">
                    Latest Research
                  </h3>
                </div>
                <Link
                  href="/publications"
                  className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1 transition-colors"
                >
                  View all
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <StaggerChildren className="space-y-4">
                {FEATURED_PUBLICATIONS
                  .slice(0, 3)
                  .map((pub) => (
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
                    />
                  ))}
              </StaggerChildren>
            </div>

            {/* News */}
            <div>
              <div className="flex items-end justify-between gap-4 mb-8">
                <div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-sage-50 text-sage-700 border border-sage-100 mb-3">
                    News & Insights
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-slate-900">
                    Recent Stories
                  </h3>
                </div>
                <Link
                  href="/news"
                  className="text-sm text-teal-600 font-medium hover:text-teal-700 flex items-center gap-1 transition-colors"
                >
                  View all
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <StaggerChildren className="space-y-6">
                <ArticleCard
                  title="CHWRI Launches New Community Health Worker Programme in Walewale District"
                  excerpt="A new initiative to train and deploy community health volunteers in underserved areas of the North-East Region, expanding primary care access."
                  category="Programme Update"
                  date="March 2025"
                  readTime="4 min read"
                  image="/images/news/chw-program-launch.jpg"
                />
                <ArticleCard
                  title="Bridging Research and Policy: Insights from CHWRI's Health Systems Dialogue"
                  excerpt="Key takeaways from CHWRI's recent policy engagement session with regional health authorities on evidence-informed health governance."
                  category="Insights"
                  date="February 2025"
                  readTime="6 min read"
                  image="/images/news/policy-dialogue.jpg"
                />
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COMMUNITY STORY / TESTIMONIAL */}
      {/* ============================================ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Voices from the Field"
            title="Stories of Impact"
            subtitle="The true measure of our work is found in the lives and communities we touch. Here are some of the voices that inspire our mission."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard
              quote="The training I received through CHWRI has given me the skills and confidence to serve my community better. I can now identify danger signs in pregnant women and refer them for timely care."
              name="Amina M."
              role="Community Health Volunteer"
              location="Walewale"
            />
            <TestimonialCard
              quote="CHWRI's research on our community's health challenges was the first time someone really listened to our experiences. They didn't just study us — they worked alongside us to find solutions."
              name="Ibrahim A."
              role="Community Leader"
              location="North-East Region"
            />
            <TestimonialCard
              quote="The partnership with CHWRI has enhanced our ability to make evidence-informed decisions. Their research contributes directly to improvements in how we plan and deliver health services."
              name="Dr. Fatima S."
              role="District Health Director"
              location="North-East Region"
            />
          </StaggerChildren>
        </div>
      </section>

      {/* ============================================ */}
      {/* CTA BLOCK */}
      {/* ============================================ */}
      <CTASection
        title="Together, We Can Transform Health Outcomes"
        subtitle="Whether you're a researcher, policymaker, health institution, or community organisation, there's a place for you in our mission. Let's build healthier communities together."
        primaryCta={{ label: "Partner With Us", href: "/partnerships" }}
        secondaryCta={{ label: "Contact CHWRI", href: "/contact" }}
      />
    </>
  );
}
