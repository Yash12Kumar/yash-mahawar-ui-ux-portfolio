import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Dumbbell,
  ExternalLink,
  Figma,
  Gem,
  Layers,
  Lightbulb,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Quote,
  ShoppingBag,
  Smartphone,
  Star,
  Sun,
  Target,
  Users,
  X,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// ── Dark mode hook ─────────────────────────────────────────────────────────
function useThemeMode() {
  type Theme = "light" | "dark" | "black-gold";
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored === "dark" || stored === "black-gold") return stored;
    if (stored === "light") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "black-gold");
    if (theme === "dark") {
      root.classList.add("dark");
    } else if (theme === "black-gold") {
      root.classList.add("black-gold", "dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme((t) =>
      t === "light" ? "dark" : t === "dark" ? "black-gold" : "light",
    );
  };

  return [theme, cycleTheme] as const;
}

// ── Scroll fade-in hook ────────────────────────────────────────────────────
function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        }
      },
      { threshold: 0.1 },
    );
    const els = document.querySelectorAll(".fade-in-section");
    for (const el of els) {
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
}

// ── Smooth scroll helper ───────────────────────────────────────────────────
function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ── Data ──────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Process", id: "process" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
];

const PROJECTS = [
  {
    icon: Smartphone,
    title: "Food Delivery App Redesign",
    tags: ["Mobile UI", "UX Research"],
    accent: "indigo",
    image: "/assets/generated/project-food-delivery.dim_800x500.jpg",
    problem: "Users find food apps cluttered and slow while choosing meals.",
    target: "Students and working professionals (18–30)",
    research: [
      "Too many options create confusion",
      "Users prefer quick reordering",
      "Filters are often ignored due to complexity",
    ],
    process: [
      "Competitor analysis (Swiggy, Zomato)",
      "Defined user flow (search → select → order)",
      "Simplified navigation",
      "Created wireframes → UI → prototype",
    ],
    solution: [
      "Clean home screen with categories",
      '"Quick Order" section',
      "Simplified filters",
    ],
    learnings: [
      "Reducing choices improves usability",
      "Visual hierarchy matters more than decoration",
      "Real apps prioritize speed over creativity",
    ],
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Landing Page",
    tags: ["Web Design", "Conversion"],
    accent: "green",
    image: "/assets/generated/project-ecommerce.dim_800x500.jpg",
    problem: "Low conversion due to poor structure and unclear CTA.",
    target: "Online shoppers (20–40)",
    research: [
      "Users scan, not read",
      "Strong visuals influence buying decisions",
      "Trust elements increase conversion",
    ],
    process: [
      "Analyzed top Shopify stores",
      "Created layout hierarchy",
      "Designed sections: hero → products → testimonials → CTA",
    ],
    solution: [
      "Bold hero section",
      "Product cards with pricing clarity",
      "Sticky CTA button",
    ],
    learnings: [
      "CTA placement directly impacts conversion",
      "Spacing improves readability",
      "Trust badges are essential",
    ],
  },
  {
    icon: Dumbbell,
    title: "Fitness App Concept",
    tags: ["App Design", "Onboarding"],
    accent: "purple",
    image: "/assets/generated/project-fitness.dim_800x500.jpg",
    problem: "Beginners feel overwhelmed starting fitness routines.",
    target: "Beginner fitness users (18–35)",
    research: [
      "Users prefer guided plans",
      "Simple UI increases engagement",
      "Progress tracking motivates users",
    ],
    process: [
      "Defined user journey (signup → goal → plan)",
      "Built simple onboarding",
      "Created progress dashboard",
    ],
    solution: [
      "Personalized plans",
      "Daily progress tracker",
      "Clean card-based UI",
    ],
    learnings: [
      "Personalization increases retention",
      "Too much data discourages users",
      "Simplicity wins for beginners",
    ],
  },
];

const PROCESS_STEPS = [
  {
    icon: Users,
    step: "01",
    title: "Empathize",
    desc: "Understand user needs using basic research (Google Forms, reviews).",
  },
  {
    icon: Target,
    step: "02",
    title: "Define",
    desc: "Identify the core problem clearly. Avoid vague goals.",
  },
  {
    icon: Lightbulb,
    step: "03",
    title: "Ideate",
    desc: "Sketch multiple layout ideas before jumping into Figma.",
  },
  {
    icon: Layers,
    step: "04",
    title: "Prototype",
    desc: "Create clickable prototypes to test flows.",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Test",
    desc: "Get feedback from friends or users and iterate.",
  },
];

const SKILLS_GROUPS = [
  {
    label: "UX Skills",
    color: "indigo",
    skills: [
      "User Research",
      "User Flows",
      "Wireframing",
      "Usability Thinking",
    ],
  },
  {
    label: "UI Skills",
    color: "green",
    skills: ["Layout Design", "Typography", "Color Usage", "Responsive Design"],
  },
  {
    label: "Tools",
    color: "purple",
    skills: ["Figma ⭐", "Adobe XD", "Canva", "Notion"],
  },
  {
    label: "Soft Skills",
    color: "slate",
    skills: [
      "Communication",
      "Problem-solving",
      "Adaptability",
      "Time management",
    ],
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Yash shows strong attention to detail and is quick to improve based on feedback.",
    name: "Internship Mentor",
    role: "Senior Designer",
    initials: "IM",
    color: "indigo",
  },
  {
    quote: "Delivered clean and usable designs even with limited requirements.",
    name: "Freelance Client",
    role: "Product Owner",
    initials: "FC",
    color: "green",
  },
];

// ── Accent color maps ──────────────────────────────────────────────────────
const accentBarClass: Record<string, string> = {
  indigo: "bg-primary",
  green: "bg-secondary",
  purple: "bg-purple-500",
};

const skillChipClass: Record<string, string> = {
  indigo: "bg-primary/10 text-primary border-primary/20",
  green: "bg-secondary/10 text-secondary border-secondary/20",
  purple:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
  slate: "bg-muted text-muted-foreground border-border",
};

const avatarClass: Record<string, string> = {
  indigo: "bg-primary/20 text-primary",
  green: "bg-secondary/20 text-secondary",
};

// ── ProjectCard component ─────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const Icon = project.icon;
  const isFoodDelivery = index === 0;

  return (
    <div
      data-ocid={`projects.item.${index + 1}`}
      className="group relative bg-card rounded-2xl shadow-card card-hover overflow-hidden flex flex-col border border-border"
    >
      {/* Accent top bar */}
      <div className={`h-1.5 w-full ${accentBarClass[project.accent]}`} />

      {/* Project image */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Header */}
        <div className="flex items-start gap-3">
          <div className="p-2.5 rounded-xl bg-accent">
            <Icon className="w-5 h-5 text-accent-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="font-heading font-bold text-lg text-foreground leading-snug">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Problem */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Problem
          </p>
          <p className="text-sm text-foreground/80">{project.problem}</p>
        </div>

        {/* Target */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Target Users
          </p>
          <p className="text-sm text-foreground/80">{project.target}</p>
        </div>

        {/* Expanded details */}
        {expanded && (
          <div className="space-y-4 border-t border-border pt-4">
            <DetailList
              title="Research Insights"
              items={project.research}
              color={project.accent}
            />
            <DetailList
              title="Design Process"
              items={project.process}
              color={project.accent}
            />
            <DetailList
              title="Solution"
              items={project.solution}
              color={project.accent}
            />
            <DetailList
              title="Key Learnings"
              items={project.learnings}
              color={project.accent}
            />
          </div>
        )}

        {/* CTA */}
        <div className="mt-auto pt-2 flex flex-col gap-2">
          <button
            type="button"
            data-ocid={`projects.item.${index + 1}.toggle`}
            onClick={() => setExpanded((v) => !v)}
            className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-3 transition-all duration-200"
          >
            {expanded ? "Hide Case Study" : "View Case Study"}
            <ChevronRight
              className={`w-4 h-4 transition-transform duration-200 ${
                expanded ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>

          {(isFoodDelivery || index === 1 || index === 2) && (
            <div className="flex flex-wrap gap-2 pt-1 border-t border-border">
              <button
                type="button"
                data-ocid={`projects.${isFoodDelivery ? "food_delivery" : index === 1 ? "ecommerce" : "fitness"}.case_study.link`}
                onClick={() =>
                  navigate({
                    to: isFoodDelivery
                      ? "/food-delivery-case-study"
                      : index === 1
                        ? "/ecommerce-case-study"
                        : "/fitness-case-study",
                  })
                }
                className="flex items-center gap-1.5 text-xs font-semibold text-secondary hover:gap-2.5 transition-all duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View Full Case Study
              </button>
              <span className="text-border">·</span>
              <a
                href={
                  isFoodDelivery
                    ? "https://www.figma.com/design/DQ5C4TCYq6gZwD6wreo4Ek/Create-Food-Ordering-App-UI-design?node-id=18-58&t=RybUHnV4d3mqzERp-1"
                    : index === 1
                      ? "https://www.figma.com/design/AQxf5uQQdsiqawUaHk9kNh/Untitled?node-id=0-1&t=80fBZ9Mzqva1ia8n-1"
                      : "https://www.figma.com/design/T95CSeNCbUU3AAvZNmGG7Q/FITMID-FITNESS-APP-UI-UX-DESIGN?node-id=0-1&t=7yS8cSeXG1KHsWJ1-1"
                }
                target="_blank"
                rel="noopener noreferrer"
                data-ocid={`projects.${isFoodDelivery ? "food_delivery" : index === 1 ? "ecommerce" : "fitness"}.figma.link`}
                className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Figma className="w-3.5 h-3.5" />
                View in Figma
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function DetailList({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  const dotClass: Record<string, string> = {
    indigo: "bg-primary",
    green: "bg-secondary",
    purple: "bg-purple-500",
  };
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-2 text-sm text-foreground/80"
          >
            <span
              className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClass[color] ?? "bg-primary"}`}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────
export default function App() {
  const [theme, cycleTheme] = useThemeMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useFadeIn();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((id: string) => {
    scrollToSection(id);
    setMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── NAV ─────────────────────────────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-xs border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <button
            type="button"
            data-ocid="nav.link"
            onClick={() => scrollToSection("hero")}
            className="font-heading font-bold text-lg text-foreground tracking-tight hover:text-primary transition-colors"
          >
            Yash Mahawar
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                data-ocid={`nav.${link.id}.link`}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="nav.theme.toggle"
              onClick={cycleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : theme === "dark"
                    ? "Switch to Black & Gold theme"
                    : "Switch to light mode"
              }
              title={
                theme === "light"
                  ? "Dark mode"
                  : theme === "dark"
                    ? "Black & Gold"
                    : "Light mode"
              }
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-muted-foreground" />
              ) : theme === "dark" ? (
                <Gem className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400" />
              )}
            </button>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              data-ocid="nav.theme.toggle.mobile"
              onClick={cycleTheme}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : theme === "dark"
                    ? "Switch to Black & Gold theme"
                    : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-muted-foreground" />
              ) : theme === "dark" ? (
                <Gem className="w-4 h-4 text-muted-foreground" />
              ) : (
                <Sun className="w-4 h-4 text-yellow-400" />
              )}
            </button>
            <button
              type="button"
              data-ocid="nav.menu.toggle"
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-1"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* ── HERO ──────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28 px-6"
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div className="space-y-6">
              <div>
                <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                  Hi, I'm
                </span>
                <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                  Yash Mahawar
                </h1>
                <p className="font-heading font-semibold text-xl md:text-2xl text-primary mt-2">
                  UI/UX Designer | Product Design Enthusiast
                </p>
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md">
                I design simple, user-focused digital experiences by combining
                structured thinking with clean visual design.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  data-ocid="hero.view_work.primary_button"
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold rounded-xl px-7 shadow-md"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button
                  data-ocid="hero.contact.secondary_button"
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary/5 font-heading font-semibold rounded-xl px-7"
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Right */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl" />
                <img
                  src="/assets/generated/hero-illustration-transparent.dim_600x500.png"
                  alt="UI/UX Designer illustration"
                  className="relative w-full h-auto drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── ABOUT ─────────────────────────────────────────────────── */}
        <section id="about" className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left: avatar card */}
            <div className="fade-in-section flex flex-col items-center justify-center gap-8">
              <div className="relative">
                <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                  <span className="font-heading font-extrabold text-5xl text-white">
                    YM
                  </span>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-xl rotate-12 flex items-center justify-center">
                  <Figma className="w-6 h-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-secondary/20 rounded-xl -rotate-12 flex items-center justify-center">
                  <Layers className="w-5 h-5 text-secondary" />
                </div>
              </div>
              <div className="text-center space-y-2">
                <Badge className="bg-primary/10 text-primary border-primary/20 font-semibold">
                  1 Year Experience
                </Badge>
                <p className="text-sm text-muted-foreground">
                  Freelance + Self Projects + Internships
                </p>
              </div>
            </div>

            {/* Right: bio */}
            <div className="fade-in-section space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">
                  About Me
                </p>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                  Designing with clarity & purpose
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I started learning UI/UX design out of curiosity for how apps
                actually work behind the screens. Over the past year, I've
                worked on small freelance projects, redesign concepts, and
                self-initiated case studies to improve my design thinking and
                execution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I focus on clarity, usability, and clean layouts rather than
                complex visuals. My goal is to design products that are easy to
                use and solve real user problems.
              </p>

              {/* Skill highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  {
                    label: "UX Research",
                    sub: "Basic surveys, competitor analysis",
                  },
                  { label: "Wireframing", sub: "Low to mid fidelity" },
                  { label: "Prototyping", sub: "Figma interactive" },
                  { label: "UI Design", sub: "Mobile + web" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-3 rounded-xl bg-accent border border-border"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {["Figma", "Adobe XD", "Canva", "Notion"].map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PROJECTS ──────────────────────────────────────────────── */}
        <section id="projects" className="py-20 md:py-28 px-6 bg-muted/40">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                Case Studies
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Featured Projects
              </h2>
              <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
                Each project follows a structured design process — from research
                to final solution.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PROJECTS.map((project, i) => (
                <div key={project.title} className="fade-in-section">
                  <ProjectCard project={project} index={i} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DESIGN PROCESS ────────────────────────────────────────── */}
        <section id="process" className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                How I Work
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Design Process
              </h2>
            </div>

            <div className="fade-in-section flex flex-col md:flex-row items-start gap-0 md:gap-0">
              {PROCESS_STEPS.map((step, i) => (
                <div
                  key={step.title}
                  className="flex flex-col md:flex-row items-center flex-1"
                >
                  {/* Step card */}
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border shadow-xs flex-1 w-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="font-heading font-bold text-2xl text-primary/30 mb-1">
                      {step.step}
                    </span>
                    <h3 className="font-heading font-bold text-base text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {/* Arrow between steps */}
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="hidden md:flex items-center px-2">
                      <ArrowRight className="w-5 h-5 text-primary/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SKILLS ────────────────────────────────────────────────── */}
        <section id="skills" className="py-20 md:py-28 px-6 bg-muted/40">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                What I Know
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Skills & Tools
              </h2>
            </div>

            <div className="fade-in-section grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILLS_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="bg-card rounded-2xl p-6 border border-border shadow-xs"
                >
                  <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-muted-foreground mb-4">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-sm font-medium px-3 py-1.5 rounded-full border ${
                          skillChipClass[group.color]
                        } ${skill.includes("⭐") ? "font-semibold" : ""}`}
                      >
                        {skill.includes("⭐") && (
                          <Star className="inline w-3 h-3 mr-1 fill-current" />
                        )}
                        {skill.replace(" ⭐", "")}
                        {skill.includes("⭐") && (
                          <span className="ml-1 text-xs">Primary</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
        <section className="py-20 md:py-28 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="fade-in-section text-center mb-14">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
                Kind Words
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                Testimonials
              </h2>
            </div>

            <div className="fade-in-section grid md:grid-cols-2 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div
                  key={t.name}
                  data-ocid={`testimonials.item.${i + 1}`}
                  className="bg-card rounded-2xl p-8 border border-border shadow-xs relative overflow-hidden"
                >
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                  <p className="text-foreground/80 leading-relaxed text-base italic mb-6">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm ${
                        avatarClass[t.color]
                      }`}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ───────────────────────────────────────────────── */}
        <section
          id="contact"
          className="py-20 md:py-28 px-6 bg-gradient-to-br from-primary/5 via-background to-secondary/5"
        >
          <div className="max-w-2xl mx-auto text-center fade-in-section">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
              Get In Touch
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              I'm currently open to internships and junior UI/UX roles. Feel
              free to reach out for collaboration or opportunities.
            </p>

            {/* Contact cards */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                data-ocid="contact.email.link"
                href="mailto:yashmahawar12909@gmail.com"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-xs hover:shadow-card transition-shadow group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    yashmahawar12909@gmail.com
                  </p>
                </div>
              </a>

              <a
                data-ocid="contact.linkedin.link"
                href="https://www.linkedin.com/in/iamyashkumar575/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card border border-border shadow-xs hover:shadow-card transition-shadow group"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-secondary transition-colors">
                    linkedin.com/in/iamyashkumar575
                  </p>
                </div>
              </a>
            </div>

            <Button
              data-ocid="contact.email.primary_button"
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold rounded-xl px-8 shadow-md"
            >
              <a href="mailto:yashmahawar12909@gmail.com">
                <Mail className="mr-2 w-4 h-4" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* ── FOOTER ──────────────────────────────────────────────────── */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-heading font-bold text-foreground">
              Yash Mahawar • UI/UX Designer
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:yashmahawar12909@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5" /> Email
            </a>
            <a
              href="https://www.linkedin.com/in/iamyashkumar575/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
