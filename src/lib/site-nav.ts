// Central navigation + site map for Lighthouse Campus.
// Shared by the header, footer, and sitemap so the architecture stays
// consistent and is trivial to extend (e.g. future campuses).

export interface NavChild {
  label: string;
  to: string;
  description?: string;
}

export interface NavSection {
  label: string;
  to: string;
  summary?: string;
  children?: NavChild[];
}

export const primaryNav: NavSection[] = [
  {
    label: "About",
    to: "/about",
    summary: "Our story, philosophy and the people who guide the campus.",
    children: [
      { label: "Our Story", to: "/about", description: "How Lighthouse Campus came to be." },
      { label: "Vision & Mission", to: "/about#vision", description: "The future we are building toward." },
      { label: "Core Values", to: "/about#values", description: "The principles that shape daily life." },
      { label: "Educational Philosophy", to: "/about#philosophy", description: "How we believe children learn best." },
      { label: "Leadership & Governance", to: "/about#leadership", description: "The team stewarding the community." },
    ],
  },
  {
    label: "Learning Journey",
    to: "/learning-journey",
    summary: "A continuous path from early years to graduation.",
    children: [
      { label: "Early Years", to: "/learning-journey#early-years", description: "Wonder, play and first discoveries." },
      { label: "Primary", to: "/learning-journey#primary", description: "Foundations of knowledge and character." },
      { label: "Preparatory", to: "/learning-journey#preparatory", description: "Independence and deeper thinking." },
      { label: "Secondary", to: "/learning-journey#secondary", description: "Scholarship, identity and direction." },
      { label: "Graduation Pathways", to: "/learning-journey#pathways", description: "Ready for university and life." },
    ],
  },
  {
    label: "Academics",
    to: "/academic-experience",
    summary: "A rigorous, human curriculum for a changing world.",
    children: [
      { label: "Curriculum", to: "/academic-experience#curriculum", description: "A coherent, ambitious programme." },
      { label: "Teaching Approach", to: "/academic-experience#teaching", description: "Mentors, not lecturers." },
      { label: "Languages", to: "/academic-experience#languages", description: "Confident, multilingual learners." },
      { label: "STEM & Innovation", to: "/academic-experience#stem", description: "Curiosity turned into capability." },
      { label: "Arts & Sports", to: "/academic-experience#arts", description: "Expression, discipline and joy." },
      { label: "Learning Support", to: "/academic-experience#support", description: "Every learner known and guided." },
    ],
  },
  {
    label: "Student Life",
    to: "/student-life",
    summary: "Community, wellbeing and belonging beyond the classroom.",
    children: [
      { label: "Community & Belonging", to: "/student-life#community" },
      { label: "Clubs & Activities", to: "/student-life#clubs" },
      { label: "Athletics", to: "/student-life#athletics" },
      { label: "Arts & Performance", to: "/student-life#arts" },
      { label: "Leadership & Service", to: "/student-life#leadership" },
      { label: "Wellbeing", to: "/student-life#wellbeing" },
    ],
  },
  {
    label: "Campus",
    to: "/campus-experience",
    summary: "Purposeful spaces designed for learning and care.",
    children: [
      { label: "Classrooms", to: "/campus-experience#classrooms" },
      { label: "Library", to: "/campus-experience#library" },
      { label: "Laboratories", to: "/campus-experience#labs" },
      { label: "Innovation & Creative Spaces", to: "/campus-experience#innovation" },
      { label: "Sports Facilities", to: "/campus-experience#sports" },
      { label: "Health, Safety & Transport", to: "/campus-experience#care" },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    summary: "A considered, welcoming path into the community.",
    children: [
      { label: "Overview", to: "/admissions#overview" },
      { label: "Application Process", to: "/admissions#process" },
      { label: "Requirements", to: "/admissions#requirements" },
      { label: "Tuition & Scholarships", to: "/admissions#tuition" },
      { label: "Frequently Asked Questions", to: "/admissions#faq" },
      { label: "Schedule a Visit", to: "/contact#visit" },
    ],
  },
];

// Secondary sections grouped under an "Explore" menu and in the footer.
export const secondaryNav: NavSection[] = [
  {
    label: "Parents",
    to: "/parents",
    summary: "Partnership, communication and resources for families.",
    children: [
      { label: "Parent Partnership", to: "/parents#partnership" },
      { label: "Communication", to: "/parents#communication" },
      { label: "School Calendar", to: "/parents#calendar" },
      { label: "Resources & Policies", to: "/parents#resources" },
    ],
  },
  {
    label: "News & Insights",
    to: "/news",
    summary: "Stories, articles and educational thinking.",
    children: [
      { label: "News", to: "/news#news" },
      { label: "Educational Insights", to: "/news#insights" },
      { label: "Student Stories", to: "/news#stories" },
      { label: "Campus Events", to: "/news#events" },
    ],
  },
  {
    label: "Campuses",
    to: "/campuses",
    summary: "One community, growing across locations.",
    children: [
      { label: "All Campuses", to: "/campuses" },
      { label: "Mohandessin Campus", to: "/campuses/mohandessin" },
    ],
  },
  {
    label: "Community & Careers",
    to: "/community",
    summary: "Partnerships, alumni and working with us.",
    children: [
      { label: "Community & Partnerships", to: "/community" },
      { label: "Alumni Network", to: "/community#alumni" },
      { label: "Working at Lighthouse", to: "/careers" },
      { label: "Professional Growth", to: "/careers#growth" },
    ],
  },
];

export const allNav: NavSection[] = [...primaryNav, ...secondaryNav];
