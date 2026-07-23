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
  Users,
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
import {
  CONTRIBUTORS,
  PUBLICATIONS,
  type ContributorId,
  type PubType,
} from "@/lib/publications";

type TabId = "all" | "research" | "policy" | "reports" | "case-studies";
type ContributorFilter = "all" | ContributorId;

const tabs: { id: TabId; label: string; match?: PubType }[] = [
  { id: "all", label: "All" },
  { id: "research", label: "Research Papers", match: "Research Paper" },
  { id: "policy", label: "Policy Briefs", match: "Policy Brief" },
  { id: "reports", label: "Reports", match: "Report" },
  { id: "case-studies", label: "Case Studies", match: "Case Study" },
];

const contributorFilters: { id: ContributorFilter; label: string }[] = [
  { id: "all", label: "All contributors" },
  { id: "aziato", label: CONTRIBUTORS.aziato.label },
  { id: "aborigo", label: CONTRIBUTORS.aborigo.label },
  { id: "ali", label: CONTRIBUTORS.ali.label },
  { id: "jaliu", label: CONTRIBUTORS.jaliu.label },
  { id: "network", label: CONTRIBUTORS.network.label },
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
  const [contributor, setContributor] = useState<ContributorFilter>("all");

  const matchesFilters = (
    p: (typeof PUBLICATIONS)[number],
    q: string,
    matchType: PubType | undefined,
    contributorFilter: ContributorFilter
  ) => {
    if (matchType && p.type !== matchType) return false;
    if (
      contributorFilter !== "all" &&
      !p.contributors.includes(contributorFilter)
    ) {
      return false;
    }
    if (!q) return true;
    const hay =
      `${p.title} ${p.authors} ${p.journal} ${p.theme} ${p.summary} ${p.doi}`.toLowerCase();
    return hay.includes(q);
  };

  const featured = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matchType = tabs.find((t) => t.id === activeTab)?.match;

    return PUBLICATIONS.filter(
      (p) =>
        p.featured && matchesFilters(p, q, matchType, contributor)
    ).sort((a, b) => Number(b.year) - Number(a.year));
  }, [activeTab, contributor, query]);

  // Everything else — non-featured publications after the featured block
  const subsequent = useMemo(() => {
    const q = query.trim().toLowerCase();
    const matchType = tabs.find((t) => t.id === activeTab)?.match;

    return PUBLICATIONS.filter(
      (p) =>
        !p.featured && matchesFilters(p, q, matchType, contributor)
    ).sort((a, b) => Number(b.year) - Number(a.year));
  }, [activeTab, contributor, query]);

  const filteredCount = featured.length + subsequent.length;

  const counts = useMemo(() => {
    return {
      total: PUBLICATIONS.length,
      aziato: PUBLICATIONS.filter((p) => p.contributors.includes("aziato"))
        .length,
      aborigo: PUBLICATIONS.filter((p) => p.contributors.includes("aborigo"))
        .length,
      ali: PUBLICATIONS.filter((p) => p.contributors.includes("ali")).length,
    };
  }, []);

  return (
    <main>
      <PageHero
        badge="Publications & Reports"
        title="Evidence From Research That Informs Policy and Practice"
        subtitle="A curated library of peer-reviewed research, evaluations, and knowledge products linked to CHWRI leadership and partners — spanning maternal and newborn health, oncology nursing, community systems, mental health, and health systems strengthening in Ghana and across Africa."
        heroImage="/images/partners/partner-academic.jpg"
      />

      {/* Trust / attribution strip */}
      <section className="border-b border-teal-100/70 bg-white py-10">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {[
            {
              label: "Publications catalogued",
              value: String(counts.total),
              detail: "Peer-reviewed and linked research outputs",
            },
            {
              label: "Prof. Lydia Aziato",
              value: String(counts.aziato),
              detail: "Oncology nursing, pain & maternal health",
            },
            {
              label: "Dr. Raymond Aborigo",
              value: String(counts.aborigo),
              detail: "Maternal, newborn & respectful care",
            },
            {
              label: "Dr. Mohammed Ali",
              value: String(counts.ali),
              detail: "Evaluation, RMNCAH & systems research",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-100 bg-warm-50/60 p-5"
            >
              <p className="font-heading text-3xl font-semibold text-teal-800">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-6 max-w-7xl px-4 sm:px-6">
          <p className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
            <Users className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
            <span>
              Publications listed here are drawn from the approved scholarly
              records of CHWRI Board Directors and affiliated research partners.
              Each card links to the publisher DOI or open-access page.
            </span>
          </p>
        </div>
      </section>

      {/* Filters + library: Featured first, then everything else */}
      <section id="publications-library" className="bg-warm-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            badge="Library"
            title="Publications catalogue"
            subtitle="Featured research appears first. Search by title, author, journal, theme, or DOI — and filter by type or CHWRI board contributor."
          />

          <AnimateOnScroll>
            <div className="mb-12 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm sm:p-7">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search title, author, journal, theme, or DOI…"
                    className="font-heading w-full rounded-2xl border border-slate-200 bg-warm-50/50 py-3.5 pl-12 pr-4 text-sm text-slate-900 placeholder:text-slate-400 focus:border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-500/30 sm:text-base"
                    aria-label="Search publications"
                  />
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Filter className="h-5 w-5 text-teal-600" aria-hidden />
                  <span className="font-heading hidden text-sm font-semibold text-slate-700 sm:inline">
                    Refine results
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Type
                  </p>
                  <div
                    className="flex flex-wrap gap-2"
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
                          "font-heading rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                          activeTab === tab.id
                            ? "border-teal-700 bg-teal-700 text-white shadow-sm"
                            : "border-slate-200 bg-warm-50 text-slate-600 hover:border-teal-200 hover:text-teal-800"
                        )}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Contributor
                  </p>
                  <div
                    className="flex flex-wrap gap-2"
                    role="tablist"
                    aria-label="Contributor filters"
                  >
                    {contributorFilters.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={contributor === item.id}
                        onClick={() => setContributor(item.id)}
                        className={cn(
                          "font-heading rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                          contributor === item.id
                            ? "border-teal-800 bg-teal-900 text-white shadow-sm"
                            : "border-slate-200 bg-warm-50 text-slate-600 hover:border-teal-200 hover:text-teal-800"
                        )}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <div className="mb-8 flex items-center justify-between gap-3">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-800">
                {filteredCount}
              </span>{" "}
              of {PUBLICATIONS.length} publications
            </p>
          </div>

          {filteredCount === 0 ? (
            <AnimateOnScroll>
              <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center">
                <p className="font-heading mx-auto max-w-lg text-slate-600">
                  No publications match your search. Try another keyword or clear
                  the filters.
                </p>
              </div>
            </AnimateOnScroll>
          ) : (
            <div className="space-y-14">
              {featured.length > 0 && (
                <div>
                  <div className="mb-6 flex items-end justify-between gap-4">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-teal-700">
                        Featured
                      </p>
                      <h3 className="font-heading text-2xl font-semibold text-slate-900">
                        Highlighted research
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500">
                      {featured.length} featured
                    </p>
                  </div>
                  <StaggerChildren className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 lg:gap-8">
                    {featured.map((pub) => (
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
                        featured
                      />
                    ))}
                  </StaggerChildren>
                </div>
              )}

              {subsequent.length > 0 && (
                <div>
                  <div className="mb-6 flex items-end justify-between gap-4 border-t border-slate-200/80 pt-10">
                    <div>
                      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        All other publications
                      </p>
                      <h3 className="font-heading text-2xl font-semibold text-slate-900">
                        Complete catalogue
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500">
                      {subsequent.length} publications
                    </p>
                  </div>
                  <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                    {subsequent.map((pub) => (
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
              )}
            </div>
          )}
        </div>
      </section>

      {/* Contributor spotlight */}
      <section className="border-y border-teal-100/60 bg-teal-900/[0.03] py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            badge="Board scholarship"
            title="Research leadership connected to CHWRI"
            subtitle="These profiles anchor the publications library in the Centre’s governance and scientific community."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: CONTRIBUTORS.aziato.label,
                focus:
                  "Oncology nursing, women’s health, pain management, and nursing education leadership.",
                count: counts.aziato,
                filter: "aziato" as ContributorFilter,
              },
              {
                name: CONTRIBUTORS.aborigo.label,
                focus:
                  "Maternal and newborn health, respectful maternity care, bioethics, and community health systems research.",
                count: counts.aborigo,
                filter: "aborigo" as ContributorFilter,
              },
              {
                name: CONTRIBUTORS.ali.label,
                focus:
                  "Development management, RMNCAH evaluation, community systems, and mixed-methods implementation research.",
                count: counts.ali,
                filter: "ali" as ContributorFilter,
              },
            ].map((person) => (
              <button
                key={person.name}
                type="button"
                onClick={() => {
                  setContributor(person.filter);
                  setActiveTab("all");
                  setQuery("");
                  document
                    .getElementById("publications-library")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
              >
                <p className="font-heading text-lg font-semibold text-slate-900">
                  {person.name}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {person.focus}
                </p>
                <p className="mt-4 text-sm font-semibold text-teal-700">
                  View {person.count} publications →
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Governance docs */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            badge="Governance"
            title="Governance & institutional documents"
            subtitle="Official documents that define how CHWRI is constituted, governed, and held accountable. Click to view or download."
          />
          <StaggerChildren className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {governanceDocuments.map((doc) => {
              const Icon = doc.icon;

              const cardInner = (
                <>
                  <div className="mb-5 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 transition-colors group-hover:bg-teal-100">
                      <Icon className="h-6 w-6 text-teal-700" />
                    </div>
                    {!doc.available && (
                      <span className="font-heading inline-flex items-center gap-1.5 rounded-full border border-amber-200/70 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                        <Lock className="h-3 w-3" aria-hidden />
                        Coming soon
                      </span>
                    )}
                  </div>
                  <h3 className="font-heading mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-teal-700">
                    {doc.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                    {doc.description}
                  </p>
                  <span
                    className={cn(
                      "font-heading inline-flex items-center gap-2 text-sm font-semibold",
                      doc.available ? "text-teal-700" : "text-slate-400"
                    )}
                  >
                    <Download className="h-4 w-4" aria-hidden />
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
                      className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md lg:p-8"
                    >
                      {cardInner}
                    </a>
                  ) : (
                    <div className="group flex h-full cursor-default flex-col rounded-2xl border border-dashed border-slate-200 bg-white/70 p-6 shadow-sm lg:p-8">
                      {cardInner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Downloads placeholders */}
      <section className="bg-warm-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeader
            badge="Downloads"
            title="Reports, data briefs & toolkits"
            subtitle="Institutional download resources. Live PDFs can replace these placeholders as documents are cleared for public release."
          />
          <StaggerChildren className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {downloadResources.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeInUp}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md lg:p-8"
                  >
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 transition-colors group-hover:bg-teal-100">
                      <Icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <h3 className="font-heading mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-teal-700">
                      {item.title}
                    </h3>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
                    <span className="font-heading inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
                      <Download className="h-4 w-4" aria-hidden />
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
