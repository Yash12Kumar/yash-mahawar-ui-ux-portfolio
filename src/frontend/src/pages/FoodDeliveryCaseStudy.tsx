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
  Smartphone,
  Target,
  Users,
} from "lucide-react";

const PROCESS_STEPS = [
  {
    icon: Users,
    step: "01",
    title: "Empathize",
    desc: "Conducted informal interviews with 12 students and working professionals aged 18-30. Collected feedback via Google Forms about food app pain points.",
  },
  {
    icon: Target,
    step: "02",
    title: "Define",
    desc: "Core problem: Users abandon sessions due to decision fatigue — too many options with no smart defaults or quick reorder functionality.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Ideate",
    desc: "Sketched 8 layout variations in a single session. Ran a quick dot-voting exercise with peers to prioritize screen structures.",
  },
  {
    icon: Layers,
    step: "04",
    title: "Prototype",
    desc: "Built a 14-screen Figma prototype covering home, search, item detail, cart, and checkout. Added interactive transitions for flow testing.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Test",
    desc: "Shared prototype with 6 users. Iterated based on 3 rounds of feedback — simplified category bar and reorganized cart summary.",
  },
];

const RESEARCH_INSIGHTS = [
  {
    title: "Decision Fatigue",
    desc: "Too many options cause users to abandon the app. Users want curated or smart defaults.",
  },
  {
    title: "Quick Reorder",
    desc: "72% of users reported they reorder the same meals weekly. No app made this fast enough.",
  },
  {
    title: "Filter Overload",
    desc: "Complex filter panels are ignored by 80% of casual users. Simpler tabs work better.",
  },
  {
    title: "Speed is UX",
    desc: "Users rated 'speed to first item viewed' as the #1 priority over aesthetics or animations.",
  },
];

const SOLUTIONS = [
  {
    title: "Clean Home Screen",
    desc: "Curated categories at top, trending items visible immediately without scroll. Minimal chrome.",
  },
  {
    title: "Quick Order Section",
    desc: "Dedicated 'Reorder' strip showing the user's 3 most-ordered items — one tap to cart.",
  },
  {
    title: "Smart Filters",
    desc: "Replaced filter panel with 4 visible toggle chips (Veg, Fast Delivery, Offers, Rating) — always visible, never hidden.",
  },
  {
    title: "Progressive Disclosure",
    desc: "Item details expand inline rather than opening a new screen, reducing navigation depth by 40%.",
  },
];

const KEY_LEARNINGS = [
  "Reducing choices is as impactful as adding features — sometimes more so",
  "Visual hierarchy matters more than decoration for functional apps",
  "Speed perception is influenced by layout, not just load time",
  "Real apps prioritize repeatability over novelty",
  "Testing with 5-6 users reveals 80% of usability issues",
];

export default function FoodDeliveryCaseStudy() {
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
            data-ocid="case_study.back.button"
            onClick={() => router.history.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
              <Smartphone className="w-7 h-7 text-primary" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                Mobile UI
              </Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                UX Research
              </Badge>
              <Badge className="bg-muted text-muted-foreground border-border">
                Figma
              </Badge>
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            Food Delivery App
            <span className="block text-primary">Redesign</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            A full UX case study — from frustrated users to a clean, fast, and
            intuitive food ordering experience.
          </p>

          <a
            href="https://www.figma.com/design/DQ5C4TCYq6gZwD6wreo4Ek/Create-Food-Ordering-App-UI-design?node-id=18-58&t=RybUHnV4d3mqzERp-1"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="case_study.figma.primary_button"
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
              src="/assets/generated/project-food-delivery.dim_800x500.jpg"
              alt="Food Delivery App Redesign screens"
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
              A self-initiated UX redesign of a food delivery app, aimed at
              improving usability and reducing drop-off during the ordering
              flow.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Type", value: "Self-initiated" },
                { label: "Duration", value: "3 weeks" },
                { label: "Tool", value: "Figma" },
                { label: "Platform", value: "Mobile (Android)" },
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
              Existing food delivery apps overwhelm users with too many choices,
              slow navigation, and hidden features — leading to session
              abandonment before order completion.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-1">
              <p className="text-sm font-medium text-foreground italic">
                "How might we help users discover and reorder meals faster, with
                less cognitive load?"
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
                emoji: "🎓",
                title: "College Students",
                age: "18-22",
                desc: "Order frequently, price-sensitive, want speed over curation.",
              },
              {
                emoji: "💼",
                title: "Working Professionals",
                age: "23-30",
                desc: "Repeat orderers, short lunch breaks, loyalty to familiar options.",
              },
              {
                emoji: "🏠",
                title: "Work-from-Home Users",
                age: "24-35",
                desc: "Order 3-5x/week, appreciate variety but need a simple interface.",
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
                data-ocid={`case_study.insight.item.${i + 1}`}
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
                data-ocid={`case_study.process.item.${i + 1}`}
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
              <CheckCircle className="w-5 h-5 text-secondary" />
            </div>
            <h2 className="font-heading font-bold text-2xl text-foreground">
              Solution Highlights
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {SOLUTIONS.map((solution, i) => (
              <div
                key={solution.title}
                data-ocid={`case_study.solution.item.${i + 1}`}
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
                  data-ocid={`case_study.learning.item.${i + 1}`}
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
              href="https://www.figma.com/design/DQ5C4TCYq6gZwD6wreo4Ek/Create-Food-Ordering-App-UI-design?node-id=18-58&t=RybUHnV4d3mqzERp-1"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="case_study.figma_bottom.primary_button"
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
              data-ocid="case_study.back_bottom.button"
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
