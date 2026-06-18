import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  Figma,
  Layers,
  Lightbulb,
  ShoppingBag,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: Users,
    step: "01",
    title: "Empathize",
    desc: "Analyzed user behavior on 8 popular e-commerce sites. Surveyed 15 online shoppers (20-40) about purchase friction points via Google Forms.",
  },
  {
    icon: Target,
    step: "02",
    title: "Define",
    desc: "Core problem: Users abandon carts because landing pages lack trust signals, clear pricing, and a visible path to purchase.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Ideate",
    desc: "Sketched 6 layout variations focusing on hero clarity, product visibility, and CTA prominence. Ran peer feedback sessions.",
  },
  {
    icon: Layers,
    step: "04",
    title: "Prototype",
    desc: "Built a 10-screen Figma prototype covering hero, product grid, testimonials, and checkout CTA with interactive hover states.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Test",
    desc: "Tested with 5 users. Iterated based on feedback — increased hero contrast, simplified product card info, and added trust badges.",
  },
];

const RESEARCH_INSIGHTS = [
  {
    title: "Users Scan, Not Read",
    desc: "80% of shoppers scan headlines and images first. Dense text blocks are ignored entirely within 3 seconds.",
  },
  {
    title: "Visuals Drive Decisions",
    desc: "High-quality product images with clear pricing increased perceived trust by 60% in informal A/B preference tests.",
  },
  {
    title: "Trust Badges Matter",
    desc: "Security icons, return policies, and customer review counts near the CTA reduced hesitation significantly.",
  },
  {
    title: "CTA Placement is Critical",
    desc: "Sticky or repeated CTA buttons outperformed single hero CTAs by 35% in simulated task completion tests.",
  },
];

const SOLUTIONS = [
  {
    title: "Bold Hero Section",
    desc: "Large headline, subheadline, and a high-contrast primary CTA above the fold. No clutter, immediate action path.",
  },
  {
    title: "Product Cards with Clarity",
    desc: "Each card shows image, name, price, and rating. No hidden fees. Hover state reveals quick-add button.",
  },
  {
    title: "Sticky CTA Button",
    desc: "A persistent 'Shop Now' bar appears after scrolling past the hero, keeping the conversion path always visible.",
  },
  {
    title: "Social Proof Section",
    desc: "Testimonials + star ratings + 'Trusted by' logos placed before the final CTA to reduce last-mile friction.",
  },
];

const KEY_LEARNINGS = [
  "CTA placement directly impacts conversion more than color or copy alone",
  "Generous spacing improves readability and guides the eye naturally",
  "Trust badges and social proof are essential for first-time buyers",
  "Product imagery quality is a conversion driver, not just decoration",
  "Testing with 5 users reveals most usability issues before launch",
];

export default function EcommerceCaseStudy() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/5 pt-16 pb-20 px-6">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <button
            type="button"
            data-ocid="ecommerce_case_study.back.button"
            onClick={() => router.history.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
              <ShoppingBag className="w-7 h-7 text-primary" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Web Design
              </Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                Conversion
              </Badge>
              <Badge className="bg-muted text-muted-foreground border-border">
                Figma
              </Badge>
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            E-Commerce Landing
            <span className="block text-primary">Page Redesign</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            A conversion-focused UX case study — transforming a cluttered
            landing page into a clear, trust-building shopping experience.
          </p>

          <a
            href="https://www.figma.com/design/AQxf5uQQdsiqawUaHk9kNh/Untitled?node-id=0-1&t=80fBZ9Mzqva1ia8n-1"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="ecommerce_case_study.figma.primary_button"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold rounded-xl px-7 shadow-md gap-2"
            >
              <Figma className="w-5 h-5" />
              Open in Figma
              <ExternalLink className="w-4 h-4 opacity-70" />
            </Button>
          </a>
        </div>
      </section>

      {/* PROJECT IMAGE */}
      <section className="px-6 -mt-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-border shadow-xl">
            <img
              src="/assets/generated/project-ecommerce.dim_800x500.jpg"
              alt="E-Commerce Landing Page screens"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* OVERVIEW + PROBLEM */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-xl bg-primary/10">
                <BookOpen className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground">
                Overview
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A self-initiated redesign of an e-commerce landing page, focused
              on improving conversion rates through clearer structure, stronger
              CTAs, and trust-building elements.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Type", value: "Self-initiated" },
                { label: "Duration", value: "2.5 weeks" },
                { label: "Tool", value: "Figma" },
                { label: "Platform", value: "Web (Desktop + Mobile)" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-3 rounded-xl bg-accent/50 border border-border"
                >
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-xs">
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 rounded-xl bg-destructive/10">
                <Target className="w-5 h-5 text-destructive" />
              </div>
              <h2 className="font-heading font-bold text-xl text-foreground">
                Problem Statement
              </h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              The existing landing page suffered from low conversion due to poor
              visual hierarchy, hidden pricing, weak CTAs, and a lack of trust
              signals — causing users to bounce before purchasing.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-1">
              <p className="text-sm font-medium text-foreground italic">
                "How might we redesign the landing page to build trust and guide
                shoppers to purchase with minimal friction?"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* TARGET USERS */}
      <section className="py-8 px-6 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-secondary/10">
              <Users className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground">
              Target Users
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                emoji: "🛍️",
                title: "Casual Shoppers",
                age: "20-28",
                desc: "Browse frequently, impulse buyers, influenced by visuals and discounts.",
              },
              {
                emoji: "💼",
                title: "Working Professionals",
                age: "25-35",
                desc: "Value speed and clarity. Prefer one-click purchases and clear return policies.",
              },
              {
                emoji: "🏠",
                title: "Home Buyers",
                age: "28-40",
                desc: "Research-heavy, read reviews, need trust signals before committing.",
              },
            ].map((user) => (
              <div
                key={user.title}
                className="bg-card rounded-2xl p-6 border border-border shadow-xs"
              >
                <div className="text-3xl mb-3">{user.emoji}</div>
                <p className="font-heading font-bold text-foreground">
                  {user.title}
                </p>
                <Badge className="my-2 bg-secondary/10 text-secondary border-secondary/20 text-xs">
                  {user.age}
                </Badge>
                <p className="text-sm text-muted-foreground">{user.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESEARCH INSIGHTS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary/10">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground">
              Research Insights
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {RESEARCH_INSIGHTS.map((insight, i) => (
              <div
                key={insight.title}
                data-ocid={`ecommerce_case_study.insight.item.${i + 1}`}
                className="bg-card rounded-2xl p-6 border border-border shadow-xs hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground mb-1">
                      {insight.title}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {insight.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className="py-16 px-6 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-2 rounded-xl bg-primary/10">
              <Layers className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground">
              Design Process
            </h2>
          </div>
          <div className="space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.title}
                data-ocid={`ecommerce_case_study.process.item.${i + 1}`}
                className="bg-card rounded-2xl p-6 border border-border shadow-xs flex gap-5 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-primary/40 font-heading">
                      {step.step}
                    </span>
                    <h3 className="font-heading font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {i < PROCESS_STEPS.length - 1 && (
                  <ChevronRight className="hidden md:block w-4 h-4 text-primary/30 flex-shrink-0 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION HIGHLIGHTS */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-secondary/10">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground">
              Solution Highlights
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {SOLUTIONS.map((solution, i) => (
              <div
                key={solution.title}
                data-ocid={`ecommerce_case_study.solution.item.${i + 1}`}
                className="bg-card rounded-2xl p-6 border border-border shadow-xs border-l-4 border-l-secondary"
              >
                <p className="font-heading font-bold text-foreground mb-2">
                  {solution.title}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY LEARNINGS */}
      <section className="py-16 px-6 bg-muted/40">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-xl bg-primary/10">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground">
              Key Learnings
            </h2>
          </div>
          <div className="bg-card rounded-2xl p-8 border border-border shadow-xs">
            <ul className="space-y-3">
              {KEY_LEARNINGS.map((learning, i) => (
                <li
                  key={learning}
                  data-ocid={`ecommerce_case_study.learning.item.${i + 1}`}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                  </span>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {learning}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            See the Design
          </p>
          <h2 className="font-heading font-bold text-3xl text-foreground mb-4">
            Ready to explore the prototype?
          </h2>
          <p className="text-muted-foreground mb-8">
            View the full Figma file including wireframes, UI screens, and
            interactive prototype flows.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.figma.com/design/AQxf5uQQdsiqawUaHk9kNh/Untitled?node-id=0-1&t=80fBZ9Mzqva1ia8n-1"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="ecommerce_case_study.figma_bottom.primary_button"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold rounded-xl px-7 shadow-md gap-2"
              >
                <Figma className="w-5 h-5" />
                Open in Figma
                <ExternalLink className="w-4 h-4 opacity-70" />
              </Button>
            </a>
            <button
              type="button"
              data-ocid="ecommerce_case_study.back_bottom.button"
              onClick={() => router.history.back()}
              className="inline-flex items-center gap-2 px-7 py-2.5 rounded-xl border border-border text-sm font-heading font-semibold text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-heading font-bold text-foreground">
            Yash Mahawar • UI/UX Designer
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {"© "}
            {new Date().getFullYear()}
            {" All rights reserved. · "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Built with love using caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
