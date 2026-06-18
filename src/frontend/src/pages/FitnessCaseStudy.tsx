import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useRouter } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Dumbbell,
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
    desc: "Conducted informal interviews with 10 beginner fitness enthusiasts aged 18-35. Collected feedback via Google Forms about fitness app pain points and onboarding experiences.",
  },
  {
    icon: Target,
    step: "02",
    title: "Define",
    desc: "Core problem: Beginners abandon fitness apps due to overwhelming routines, complex jargon, and lack of guidance — leading to low retention and frustration.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Ideate",
    desc: "Sketched 6 layout variations focusing on simplicity. Ran a quick dot-voting exercise with peers to prioritize onboarding and progress tracking screens.",
  },
  {
    icon: Layers,
    step: "04",
    title: "Prototype",
    desc: "Built a 12-screen Figma prototype covering onboarding, goal setting, workout plans, progress dashboard, and profile. Added interactive transitions for flow testing.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Test",
    desc: "Shared prototype with 5 users. Iterated based on 3 rounds of feedback — simplified onboarding steps and made progress tracking more visual.",
  },
];

const RESEARCH_INSIGHTS = [
  {
    title: "Guided Plans Preferred",
    desc: "85% of beginners want pre-built workout plans rather than creating their own routines from scratch.",
  },
  {
    title: "Simplicity Drives Engagement",
    desc: "Users rated simple, clean interfaces as the #1 factor for continued app usage over feature richness.",
  },
  {
    title: "Progress Tracking Motivates",
    desc: "Visual progress indicators (streaks, charts) increased user motivation by 60% in feedback sessions.",
  },
  {
    title: "Onboarding is Critical",
    desc: "Users who completed a guided onboarding were 3x more likely to return to the app within a week.",
  },
];

const SOLUTIONS = [
  {
    title: "Personalized Onboarding",
    desc: "3-step onboarding flow that asks about fitness goals, experience level, and preferred workout times to create a tailored plan.",
  },
  {
    title: "Beginner-Friendly Plans",
    desc: "Pre-built workout plans with video demonstrations, clear instructions, and difficulty badges (Beginner, Intermediate, Advanced).",
  },
  {
    title: "Visual Progress Dashboard",
    desc: "Clean card-based dashboard showing weekly streaks, workout completion rate, and personal records with encouraging milestones.",
  },
  {
    title: "Smart Reminders",
    desc: "Gentle, customizable push reminders based on user-defined workout schedules — never pushy, always encouraging.",
  },
];

const KEY_LEARNINGS = [
  "Personalization significantly increases user retention for fitness apps",
  "Too much data and complex metrics discourage beginners",
  "Simplicity and clarity win over feature richness for new users",
  "Visual progress tracking is a powerful motivational tool",
  "A smooth onboarding experience is the foundation of user loyalty",
];

const FIGMA_LINK =
  "https://www.figma.com/design/T95CSeNCbUU3AAvZNmGG7Q/FITMID-FITNESS-APP-UI-UX-DESIGN?node-id=0-1&t=7yS8cSeXG1KHsWJ1-1";

export default function FitnessCaseStudy() {
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
            data-ocid="fitness_case_study.back.button"
            onClick={() => router.history.back()}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </button>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
              <Dumbbell className="w-7 h-7 text-primary" />
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                App Design
              </Badge>
              <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                Onboarding
              </Badge>
              <Badge className="bg-muted text-muted-foreground border-border">
                Figma
              </Badge>
            </div>
          </div>

          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
            Fitness App
            <span className="block text-primary">Concept</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            A full UX case study — from overwhelmed beginners to a guided,
            motivating, and intuitive fitness experience.
          </p>

          <a
            href={FIGMA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="fitness_case_study.figma.primary_button"
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
              src="/assets/generated/project-fitness.dim_800x500.jpg"
              alt="Fitness App Concept screens"
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
              A self-initiated UX concept for a fitness app, aimed at helping
              beginners start their fitness journey with confidence through
              guided onboarding and personalized workout plans.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Type", value: "Self-initiated" },
                { label: "Duration", value: "2.5 weeks" },
                { label: "Tool", value: "Figma" },
                { label: "Platform", value: "Mobile (iOS & Android)" },
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
              Beginner fitness users feel overwhelmed by complex routines,
              unfamiliar terminology, and apps that assume prior knowledge —
              leading to high abandonment rates before forming a habit.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 py-1">
              <p className="text-sm font-medium text-foreground italic">
                "How might we help beginners start and stick to a fitness
                routine with confidence and clarity?"
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
                emoji: "🏃",
                title: "Complete Beginners",
                age: "18-25",
                desc: "Never followed a workout plan. Need guidance, encouragement, and simple routines.",
              },
              {
                emoji: "🧘",
                title: "Casual Exercisers",
                age: "25-35",
                desc: "Exercise occasionally but want consistency. Prefer short, achievable sessions.",
              },
              {
                emoji: "📱",
                title: "Tech-Savvy Health Seekers",
                age: "20-30",
                desc: "Use apps for everything. Expect clean UI, progress tracking, and smart reminders.",
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
                data-ocid={`fitness_case_study.insight.item.${i + 1}`}
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
                data-ocid={`fitness_case_study.process.item.${i + 1}`}
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
                data-ocid={`fitness_case_study.solution.item.${i + 1}`}
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
                  data-ocid={`fitness_case_study.learning.item.${i + 1}`}
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
              href={FIGMA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="fitness_case_study.figma_bottom.primary_button"
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
              data-ocid="fitness_case_study.back_bottom.button"
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
