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
      { label: "About Overview", to: "/about", description: "The story, philosophy and people behind Lighthouse Campus." },
      { label: "Our Story", to: "/about/our-story", description: "How Lighthouse Campus came to be." },
      { label: "Why Lighthouse?", to: "/about/why-lighthouse", description: "The meaning behind our name and identity." },
      { label: "Vision", to: "/about/vision", description: "The future we are building toward." },
      { label: "Mission", to: "/about/mission", description: "The work that guides us every day." },
      { label: "Core Values", to: "/about/core-values", description: "The principles that shape daily life." },
      { label: "Educational Philosophy", to: "/about/educational-philosophy", description: "How we believe children learn best." },
      { label: "Leadership", to: "/about/leadership", description: "Responsibility, service and thoughtful action." },
      { label: "Governance", to: "/about/governance", description: "Long-term stewardship of educational purpose." },
      { label: "Campus Culture", to: "/about/campus-culture", description: "Belonging, curiosity and shared responsibility." },
    ],
  },
  {
    label: "Our Model",
    to: "/our-model",
    summary: "How education, relationships, leadership and intelligence work together at Lighthouse Campus.",
    children: [
      { label: "Educational Model", to: "/our-model/educational-model", description: "One coherent approach to learning, growth and contribution." },
      { label: "Learning Ecosystem", to: "/our-model/learning-ecosystem", description: "People, knowledge and intelligence connected around every learner." },
      { label: "Learner Profile", to: "/our-model/learner-profile", description: "The qualities we develop through every stage." },
      { label: "Graduate Profile", to: "/our-model/graduate-profile", description: "Prepared for university. Ready for life." },
      { label: "Teaching Framework", to: "/our-model/teaching-framework", description: "Mentorship, expertise and thoughtful design." },
      { label: "Assessment Framework", to: "/our-model/assessment-framework", description: "Assessment that supports learning and growth." },
      { label: "Student Development", to: "/our-model/student-development", description: "Character, confidence, wellbeing and contribution." },
      { label: "Parent Partnership", to: "/our-model/parent-partnership", description: "Families as educational partners." },
      { label: "Institutional Intelligence", to: "/our-model/institutional-intelligence", description: "An institution that learns from its own experience." },
      { label: "Innovation", to: "/our-model/innovation", description: "New possibilities guided by educational value." },
    ],
  },
  {
    label: "Learning Journey",
    to: "/learning-journey",
    summary: "A continuous path from early years to graduation.",
    children: [
      { label: "Learning Journey Overview", to: "/learning-journey", description: "One continuous path from Early Years to graduation." },
      { label: "Early Years", to: "/learning-journey/early-years", description: "Wonder, play and first discoveries." },
      { label: "Primary", to: "/learning-journey/primary", description: "Foundations of knowledge and character." },
      { label: "Preparatory", to: "/learning-journey/preparatory", description: "Independence and deeper thinking." },
      { label: "Secondary", to: "/learning-journey/secondary", description: "Scholarship, identity and direction." },
      { label: "Graduation Pathways", to: "/learning-journey/graduation-pathways", description: "Ready for university and life." },
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
      { label: "Student Life Overview", to: "/student-life", description: "Life beyond lessons at Lighthouse Campus." },
      { label: "Community & Belonging", to: "/student-life/community-belonging", description: "Relationships and shared responsibility." },
      { label: "Clubs & Activities", to: "/student-life/clubs-activities", description: "Interests explored beyond the timetable." },
      { label: "Athletics", to: "/student-life/athletics", description: "Discipline, teamwork and joy through movement." },
      { label: "Arts & Performance", to: "/student-life/arts-performance", description: "Voice, craft and expression." },
      { label: "Leadership & Service", to: "/student-life/leadership-service", description: "Responsibility in service of others." },
      { label: "Wellbeing", to: "/student-life/wellbeing", description: "Care for the whole learner." },
      { label: "Events", to: "/student-life/events", description: "Moments that mark the school year." },
    ],
  },
  {
    label: "Campus",
    to: "/campus-experience",
    summary: "Purposeful spaces designed for learning and care.",
    children: [
      { label: "Campus Experience Overview", to: "/campus-experience", description: "Every space serves the learner." },
      { label: "Campus Overview", to: "/campus-experience/overview", description: "How the campus is organised around learning." },
      { label: "Classrooms", to: "/campus-experience/classrooms", description: "Where daily learning happens." },
      { label: "Library", to: "/campus-experience/library", description: "A place for reading, thinking and quiet." },
      { label: "Laboratories", to: "/campus-experience/laboratories", description: "Where inquiry becomes practice." },
      { label: "Innovation & Creative Spaces", to: "/campus-experience/innovation-creative-spaces", description: "Where ideas are made." },
      { label: "Sports Facilities", to: "/campus-experience/sports-facilities", description: "Spaces for healthy movement." },
      { label: "Dining", to: "/campus-experience/dining", description: "Shared meals and daily rhythm." },
      { label: "Health Services", to: "/campus-experience/health-services", description: "Care available on campus." },
      { label: "Safety", to: "/campus-experience/safety", description: "A safe, orderly campus." },
      { label: "Transportation", to: "/campus-experience/transportation", description: "Safe, considered journeys." },
    ],
  },
  {
    label: "Admissions",
    to: "/admissions",
    summary: "A considered, welcoming path into the community.",
    children: [
      { label: "Admissions Overview", to: "/admissions", description: "The Lighthouse admissions journey." },
      { label: "Application Process", to: "/admissions/application-process", description: "The five-step journey." },
      { label: "Requirements", to: "/admissions/requirements", description: "What we invite families to prepare." },
      { label: "Tuition & Fees", to: "/admissions/tuition-fees", description: "Clear, transparent fee information." },
      { label: "Scholarships", to: "/admissions/scholarships", description: "Support under a considered policy." },
      { label: "Frequently Asked Questions", to: "/admissions/faq", description: "Common questions from families." },
      { label: "Schedule a Visit", to: "/admissions/schedule-a-visit", description: "See the campus in person." },
      { label: "Apply Online", to: "/admissions/apply-online", description: "Online application, in development." },
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
      { label: "Parents Overview", to: "/parents", description: "Families as educational partners." },
      { label: "Parent Partnership", to: "/parents/parent-partnership", description: "Families as educational partners." },
      { label: "Parent Journey", to: "/parents/parent-journey", description: "How the relationship begins and grows." },
      { label: "Communication", to: "/parents/communication", description: "How families and school stay in touch." },
      { label: "Parent Portal", to: "/parents/parent-portal", description: "A family-facing portal, in development." },
      { label: "School Calendar", to: "/parents/school-calendar", description: "A shared rhythm across the year." },
      { label: "Family Resources", to: "/parents/family-resources", description: "Useful information for families." },
      { label: "School Policies", to: "/parents/school-policies", description: "The framework that supports daily life." },
      { label: "Family Engagement", to: "/parents/family-engagement", description: "Ways to be part of school life." },
    ],
  },
  {
    label: "News & Insights",
    to: "/news",
    summary: "Stories, articles and educational thinking.",
    children: [
      { label: "News & Insights Overview", to: "/news", description: "Editorial home for stories and reflection." },
      { label: "School News", to: "/news/school-news", description: "Institutional announcements." },
      { label: "Educational Insights", to: "/news/educational-insights", description: "Reflections on learning." },
      { label: "Student Stories", to: "/news/student-stories", description: "Voices from the campus." },
      { label: "Teacher Stories", to: "/news/teacher-stories", description: "The people who teach on campus." },
      { label: "Parent Guides", to: "/news/parent-guides", description: "Practical guides for families." },
      { label: "Research & Reflection", to: "/news/research-reflection", description: "Longer-form thinking." },
      { label: "Campus Events", to: "/news/campus-events", description: "Public updates on campus moments." },
      { label: "Community Stories", to: "/news/community-stories", description: "The campus in its community." },
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
    label: "Community",
    to: "/community",
    summary: "Partnerships, alumni, programmes and careers.",
    children: [
      { label: "Community Overview", to: "/community", description: "One considered community." },
      { label: "Partnerships", to: "/community/partnerships", description: "Values-aligned relationships." },
      { label: "Alumni", to: "/community/alumni", description: "The future Lighthouse alumni community." },
      { label: "Community Programmes", to: "/community/community-programmes", description: "Contribution beyond the walls." },
      { label: "Events", to: "/community/events", description: "Public community moments." },
      { label: "Careers", to: "/community/careers", description: "Working at Lighthouse Campus." },
      { label: "Working at Lighthouse", to: "/careers", description: "Full careers area." },
    ],
  },
  {
    label: "Digital Ecosystem",
    to: "/explore/digital-ecosystem",
    summary: "Connected services designed around the learner and the community.",
    children: [
      { label: "Digital Ecosystem Overview", to: "/explore/digital-ecosystem" },
    ],
  },
];

export const allNav: NavSection[] = [...primaryNav, ...secondaryNav];
