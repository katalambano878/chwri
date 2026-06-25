"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Download,
  FileText,
  Filter,
  FolderOpen,
  Landmark,
  Lock,
  ScrollText,
  Search,
  ShieldCheck,
} from "lucide-react";
import {
  AnimateOnScroll,
  StaggerChildren,
  fadeInUp,
  motion,
} from "@/lib/motion";
import { SectionHeader } from "@/components/shared/section-header";
import { PublicationCard } from "@/components/shared/publication-card";
import { CTASection } from "@/components/shared/cta-section";
import { PageHero } from "@/components/shared/page-hero";
import { cn } from "@/lib/utils";

type PubType = "Research Paper" | "Policy Brief" | "Report" | "Case Study";

type TabId = "all" | "research" | "policy" | "reports" | "case-studies";

const tabs: { id: TabId; label: string; match?: PubType }[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research Papers", match: "Research Paper" },
  { id: "policy", label: "Policy Briefs", match: "Policy Brief" },
  { id: "reports", label: "Reports", match: "Report" },
  { id: "case-studies", label: "Case Studies", match: "Case Study" },
];

const publications: {
  title: string;
  authors?: string;
  type: PubType;
  date?: string;
  href?: string;
}[] = [
  {
    title:
      "Antenatal Care Uptake and Birth Preparedness Among Women in Rural North East Region: A Cross-Sectional Study",
    authors: "Adongo, M. et al.",
    type: "Research Paper",
    date: "2024",
    href: "/publications",
  },
  {
    title:
      "Community Health Volunteer Home Visits and Childhood Diarrhoea Management in Walewale Sub-District",
    authors: "CHWRI Maternal & Child Health Unit",
    type: "Research Paper",
    date: "2024",
    href: "/publications",
  },
  {
    title:
      "Who Reaches the Facility First? Geographic and Economic Barriers to Emergency Obstetric Care",
    authors: "Health Equity Working Group",
    type: "Research Paper",
    date: "2023",
    href: "/publications",
  },
  {
    title:
      "Strengthening District Health Information Systems: Options for North East Region",
    authors: "Policy & Systems Unit",
    type: "Policy Brief",
    date: "2024",
    href: "/publications",
  },
  {
    title:
      "Community Health Worker Recruitment, Retention, and Rural Posting Incentives — Evidence for Ghana’s CHW Policy",
    authors: "CHWRI & Partners",
    type: "Policy Brief",
    date: "2023",
    href: "/publications",
  },
  {
    title:
      "Integrated Community Case Management Pilot: Endline Evaluation Report (Walewale and Environs)",
    authors: "Programme Evaluation Team",
    type: "Report",
    date: "2024",
    href: "/publications",
  },
  {
    title:
      "Nutrition-Sensitive Agriculture and Household Food Security: Mid-Term Review of Partner Programme",
    authors: "CHWRI",
    type: "Report",
    date: "2023",
    href: "/publications",
  },
  {
    title:
      "Peer Support Groups for Postpartum Mothers: Outcomes and Lessons from a 12-Month Implementation",
    authors: "Community Interventions Team",
    type: "Case Study",
    date: "2024",
    href: "/publications",
  },
  {
    title:
      "Co-Designing Men’s Health Dialogues with Traditional Leaders: Process, Reach, and Early Signals",
    authors: "Participatory Research Collective",
    type: "Case Study",
    date: "2023",
    href: "/publications",
  },
  {
    title:
      "Water, Sanitation, and Acute Febrile Illness: Household Practices and Health Facility Referrals in the Upper East Corridor",
    authors: "Environmental Health & CHWRI",
    type: "Research Paper",
    date: "2022",
    href: "/publications",
  },
];

type GovernanceDoc = {
  title: string;
  description: string;
  icon: typeof FileText;
  label: string;
  file: string;
  available: boolean;
};

const governanceDocuments: GovernanceDoc[] = [
  {
    title: "CHWRI Constitution",
    description:
      "The founding constitution setting out the Centre's legal identity, governance structure, membership, and operating principles.",
    icon: ScrollText,
    label: "PDF · Constitution",
    file: "/documents/chwri-constitution.pdf",
    available: false,
  },
  {
    title: "Governance & Board Charter",
    description:
      "Roles, responsibilities, and decision-making framework for the Board of Directors and management of CHWRI.",
    icon: Landmark,
    label: "PDF · Governance charter",
    file: "/documents/chwri-governance-charter.pdf",
    available: false,
  },
  {
    title: "Code of Conduct & Ethics Policy",
    description:
      "Standards of integrity, safeguarding, and ethical conduct that guide CHWRI staff, partners, and research activities.",
    icon: ShieldCheck,
    label: "PDF · Policy",
    file: "/documents/chwri-code-of-conduct.pdf",
    available: false,
  },
];

const downloadResources = [
  {
    title: "CHWRI Annual Report 2023–2024",
    description:
      "Highlights from our research, partnerships, and community engagement in Walewale and the wider region.",
    icon: FileText,
    label: "PDF · Annual report",
    href: "/publications",
  },
  {
    title: "District Health Data Brief — North East Region",
    description:
      "Summary indicators on maternal health, immunisation, and primary care access (placeholder figures for planning).",
    icon: BookOpen,
    label: "PDF · Data brief",
    href: "/publications",
  },
  {
    title: "Community Research Ethics & Field Toolkit",
    description:
      "Templates, checklists, and guidance for ethical engagement with participants and local stakeholders.",
    icon: FolderOpen,
    label: "ZIP · Toolkit",
    href: "/publications",
  },
];

export default function PublicationsPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabId>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matchType = tabs.find((t) => t.id === activeTab)?.match;

    return publications.filter((p) => {
      if (matchType && p.type !== matchType) return false;
      if (!q) return true;
      const hay = `${p.title} ${p.authors ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [activeTab, query]);

  return (
    <main>
      <PageHero
        badge="Publications & Reports"
        title="Knowledge That Informs Policy and Practice"
        subtitle="Research papers, policy briefs, evaluations, and case studies from CHWRI — the Centre for Health & Wellbeing Research and Interventions in Walewale, Ghana."
        heroImage="/images/partners/partner-academic.jpg"
      />

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search by title or author…"
                    className="w-full rounded-2xl border border-slate-200 bg-warm-50/50 py-3.5 pl-12 pr-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-300 font-heading text-sm sm:text-base"
                    aria-label="Search publications"
                  />
                </div>
                <div className="flex items-center gap-2 text-slate-500 shrink-0">
                  <Filter className="w-5 h-5 text-teal-600" aria-hidden />
                  <span className="font-heading text-sm font-semibold text-slate-700 hidden sm:inline">
                    Filter by type
                  </span>
                </div>
              </div>
              <div
                className="mt-6 flex flex-wrap gap-2"
                role="tablist"
                aria-label="Publication categories"
              >
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={cn(
                      "font-heading rounded-full px-4 py-2 text-sm font-semibold transition-all border",
                      activeTab === tab.id
                        ? "bg-teal-700 text-white border-teal-700 shadow-sm"
                        : "bg-warm-50 text-slate-600 border-slate-200 hover:border-teal-200 hover:text-teal-800"
                    )}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Library"
            title="Publications & outputs"
            subtitle="Peer-reviewed work, concise briefs for decision-makers, evaluation reports, and implementation case studies — all grounded in northern Ghana."
          />
          {filtered.length === 0 ? (
            <AnimateOnScroll>
              <p className="text-center text-slate-600 font-heading max-w-lg mx-auto">
                No publications match your search. Try another keyword or clear the
                filters.
              </p>
            </AnimateOnScroll>
          ) : (
            <StaggerChildren className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {filtered.map((pub) => (
                <PublicationCard
                  key={pub.title}
                  title={pub.title}
                  authors={pub.authors}
                  type={pub.type}
                  date={pub.date}
                  href={pub.href}
                />
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>

      <section className="bg-teal-900/[0.03] py-20 lg:py-28 border-y border-teal-100/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Governance"
            title="Governance & institutional documents"
            subtitle="Official documents that define how CHWRI is constituted, governed, and held accountable. Click to view or download."
          />
          <StaggerChildren className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {governanceDocuments.map((doc) => {
              const Icon = doc.icon;

              const cardInner = (
                <>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                      <Icon className="w-6 h-6 text-teal-700" />
                    </div>
                    {!doc.available && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/70 px-3 py-1 text-xs font-semibold font-heading">
                        <Lock className="w-3 h-3" aria-hidden />
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                    {doc.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                    {doc.description}
                  </p>
                  <span
                    className={cn(
                      "inline-flex items-center gap-2 text-sm font-semibold font-heading",
                      doc.available ? "text-teal-700" : "text-slate-400"
                    )}
                  >
                    <Download className="w-4 h-4" aria-hidden />
                    {doc.available ? doc.label : "Available shortly"}
                  </span>
                </>
              );

              return (
                <motion.div key={doc.title} variants={fadeInUp}>
                  {doc.available ? (
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col h-full group p-6 lg:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300"
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <div className="flex flex-col h-full group p-6 lg:p-8 bg-white/70 rounded-2xl border border-dashed border-slate-200 shadow-sm cursor-default">
                      {cardInner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            badge="Downloads"
            title="Reports, data briefs & toolkits"
            subtitle="Placeholder resources you can swap for live PDFs and assets. Each card is styled for quick scanning and download cues."
          />
          <StaggerChildren className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {downloadResources.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeInUp}>
                  <Link
                    href={item.href}
                    className="flex flex-col h-full group p-6 lg:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-teal-200 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center mb-5 group-hover:bg-teal-100 transition-colors">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-6">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-teal-700 font-heading">
                      <Download className="w-4 h-4" aria-hidden />
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      <CTASection
        title="Contribute to Our Research"
        subtitle="We collaborate with universities, NGOs, district health teams, and communities. Share an idea, propose a study, or explore co-authorship and knowledge exchange."
        primaryCta={{ label: "Get in touch", href: "/contact" }}
        secondaryCta={{ label: "Partner with CHWRI", href: "/partnerships" }}
        variant="sage"
      />
    </main>
  );
}
