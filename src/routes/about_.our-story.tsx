import { createFileRoute } from "@tanstack/react-router";
import { EditorialPage } from "@/components/editorial-page";

export const Route = createFileRoute("/about_/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Lighthouse Campus" },
      {
        name: "description",
        content:
          "Discover how Lighthouse Campus began and the long-term educational purpose guiding the institution from its founding campus in Mohandessin.",
      },
      { property: "og:title", content: "Our Story | Lighthouse Campus" },
      {
        property: "og:description",
        content: "How Lighthouse Campus began and the long-term educational purpose guiding the institution.",
      },
      { property: "og:url", content: "https://lighthousecampus.lovable.app/about/our-story" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "https://lighthousecampus.lovable.app/about/our-story" }],
  }),
  component: OurStory,
});

function OurStory() {
  return (
    <EditorialPage
      config={{
        breadcrumb: [
          { label: "Home", to: "/" },
          { label: "About", to: "/about" },
          { label: "Our Story" },
        ],
        eyebrow: "About / Our Story",
        title: "An institution built to last, and to matter.",
        intro:
          "Lighthouse Campus began with a clear conviction: a school should feel like a living learning community rather than an institution that simply processes children through stages and examinations.",
        focus: [
          "learning at the centre",
          "students at the heart",
          "teachers as mentors",
          "families as partners",
          "growth without loss of identity",
        ],
        chapters: [
          {
            numeral: "I",
            eyebrow: "The Beginning",
            title: "A campus conceived as a place where ambition and human development belong together.",
            body: [
              "Our first operational campus in Mohandessin represents the beginning of a long-term educational journey. It was not designed to open as a finished institution; it was designed to open as a community that would continue to learn — about its students, its craft, and itself.",
              "Learning remains central. Students remain visible. Teachers build meaningful relationships. Families participate in the educational journey. These are not slogans printed on a wall; they are the daily practice by which the campus becomes what it says it is.",
            ],
            quote: {
              text: "A school becomes meaningful through the quality of its relationships, not the scale of its facilities.",
            },
          },
          {
            numeral: "II",
            eyebrow: "A Living Learning Community",
            title: "The community precedes the buildings.",
            body: [
              "Students learn through interaction with teachers, peers, ideas, experiences and the wider community. Teachers guide, question, encourage and model lifelong learning. Families bring knowledge of their children and become trusted partners in their development.",
              "The campus becomes a community before it becomes a collection of buildings or systems. This ordering matters: it decides what the institution will remain even as it grows.",
            ],
          },
          {
            numeral: "III",
            eyebrow: "Built to Grow Thoughtfully",
            title: "Growth as an educational ecosystem, not as reproduction of buildings.",
            body: [
              "Lighthouse Campus is designed to grow. Future campuses will become integrated destinations within the same educational ecosystem — connected by philosophy and culture, not by identical corridors.",
              "Growth will not mean reproducing buildings alone. It will mean extending a shared educational philosophy, a coherent institutional culture and a commitment to quality across every location. What travels between campuses is not architecture; it is a way of holding children in mind.",
            ],
          },
          {
            numeral: "IV",
            eyebrow: "What Remains Constant",
            title: "As the institution develops, the central commitments remain unchanged.",
            body: [
              "Learning at the centre. Students at the heart. Teachers as mentors. Families as partners. Character alongside knowledge. Leadership through responsibility. Continuous institutional learning. Growth without loss of identity.",
              "These are the anchors. Everything else — programmes, facilities, technologies, campuses — can and will evolve. These do not.",
            ],
          },
          {
            numeral: "V",
            eyebrow: "The Founding Campus",
            title: "Mohandessin — the founding expression of the Lighthouse vision.",
            body: [
              "Mohandessin establishes the first living community from which the institution will learn, develop and grow. Its experience will contribute to the continuing development of the Lighthouse educational model and future campuses.",
              "The Lighthouse Campus story is still being written. Its direction is clear: to build an educational institution that remains human, ambitious, thoughtful and valuable across generations.",
            ],
          },
        ],
        manifesto: {
          eyebrow: "The Story, in a Sentence",
          statement:
            "To build an educational institution that remains human, ambitious, thoughtful and valuable across generations.",
        },
        cta: {
          title: "Continue the Story",
          body: "Explore the philosophy behind our name and the ideas that guide daily life on campus.",
          primary: { to: "/about/why-lighthouse", label: "Why Lighthouse?" },
          secondary: { to: "/about/educational-philosophy", label: "Explore Our Educational Philosophy" },
        },
      }}
    />
  );
}
