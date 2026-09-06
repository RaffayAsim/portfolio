export const site = {
  name: "Raffay Asim",
  role: "AI Automation Architect | Full-Stack Vibe Coder",
  email: "raffay.asim6@gmail.com",
  phone: "+92 333 2877852",
  phoneHref: "tel:+923332877852",
  location: "Pakistan · Open to remote",
  github: "https://github.com/RaffayAsim",
  linkedin: "https://www.linkedin.com/in/raffay-asim-52bb92247/",
  tagline:
    "I ship production AI automation and vibe-coded full-stack systems — n8n agents, CRMs, outbound engines, and SaaS — that replace repetitive sales/ops work.",
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  live?: string;
  repo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Paper-Plane",
    blurb:
      "Outbound / messaging product shipped to production on Vercel — full-stack vibe-coded delivery.",
    tags: ["Full-stack", "Vercel", "Product"],
    live: "https://paper-plane-umber.vercel.app/",
    repo: "https://github.com/RaffayAsim/Paper-Plane",
    featured: true,
  },
  {
    title: "THE-QHQ",
    blurb:
      "Live QuantumArc product surface — production site with repo-backed development.",
    tags: ["SaaS", "Production", "Web"],
    live: "https://qhq.quantumarc.us",
    repo: "https://github.com/RaffayAsim/THE-QHQ",
    featured: true,
  },
  {
    title: "HireForce AI",
    blurb:
      "AI screening workflows for hiring — automation that cuts repetitive candidate review work.",
    tags: ["AI", "Hiring", "Automation"],
    repo: "https://github.com/RaffayAsim/HireForce-AI-Screening",
  },
  {
    title: "Connect CRM",
    blurb: "CRM built for sales/ops — live at connect.quantumarc.us.",
    tags: ["CRM", "Sales", "Ops"],
    live: "https://connect.quantumarc.us",
    featured: true,
  },
  {
    title: "yelp-scraper-automation",
    blurb:
      "Lead-gen scraping automation for outbound pipelines — less manual list building.",
    tags: ["Automation", "Lead-gen", "Scraping"],
    repo: "https://github.com/RaffayAsim/yelp-scraper-automation",
  },
  {
    title: "Solo-No-More",
    blurb:
      "Product/experiment repo focused on helping solo operators ship with systems.",
    tags: ["Product", "Systems"],
    repo: "https://github.com/RaffayAsim/Solo-No-More",
  },
  {
    title: "Saad-Website",
    blurb:
      "Client website shipped live — clean full-stack delivery with public repo.",
    tags: ["Client work", "Web"],
    live: "https://saadzain.net/",
    repo: "https://github.com/RaffayAsim/Saad-Website",
  },
  {
    title: "Ebook-Brand",
    blurb:
      "Brand / ebook project — packaging content into a shippable digital product.",
    tags: ["Brand", "Content"],
    repo: "https://github.com/RaffayAsim/Ebook-Brand",
  },
  {
    title: "TTS",
    blurb:
      "Text-to-speech tooling — practical AI audio utility for product workflows.",
    tags: ["AI", "Audio", "Utility"],
    repo: "https://github.com/RaffayAsim/TTS",
  },
];

export const capabilities = [
  {
    title: "n8n agents & workflows",
    body: "Production automation agents that watch inboxes, CRMs, and leads — then act without babysitting.",
  },
  {
    title: "CRMs & outbound engines",
    body: "Custom CRM surfaces and outbound systems that replace spreadsheet chaos with shippable ops.",
  },
  {
    title: "Full-stack vibe coding",
    body: "Next.js / TypeScript products from idea to Vercel — fast loops, clean UI, real deploys.",
  },
  {
    title: "Sales / ops replacement",
    body: "I design systems that cut repetitive lead-gen, screening, and follow-up work — not dashboards for vanity.",
  },
  {
    title: "Scrapers & data pipelines",
    body: "Targeted scraping and enrichment wired into outreach — useful lists, not noise.",
  },
  {
    title: "AI product features",
    body: "Screening, TTS, and agentic helpers embedded where they save hours — proof over hype.",
  },
];

export const techStack = [
  "Next.js",
  "TypeScript",
  "n8n",
  "OpenAI",
  "Vercel",
  "React",
  "Tailwind",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Python",
  "Framer Motion",
  "CRM Systems",
  "Outbound Engines",
  "Web Scraping",
  "AI Agents",
];

export const skills = [
  { name: "AI Automation / n8n", level: 92 },
  { name: "Full-Stack (Next.js)", level: 90 },
  { name: "CRM & Outbound", level: 88 },
  { name: "TypeScript / React", level: 91 },
  { name: "Scrapers & Pipelines", level: 85 },
  { name: "Product Shipping", level: 93 },
];

export const timeline = [
  {
    year: "Now",
    title: "AI Automation Architect",
    body: "Freelance building n8n agents, CRMs, outbound engines, and SaaS — shipped to production, not parked in demos.",
  },
  {
    year: "Ops",
    title: "Sales floors → systems",
    body: "Ammrys, Rana & Sons — learned how pipelines break: messy lists, slow follow-up, work that should be automated.",
  },
  {
    year: "Remote",
    title: "Pakistan · open worldwide",
    body: "Prefer clear scopes, fast feedback loops, and proof you can click.",
  },
];
