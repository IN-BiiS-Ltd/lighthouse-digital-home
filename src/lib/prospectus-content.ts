/**
 * Bilingual copy for the /prospectus route (School Guide 2026 / 2027).
 * Arabic text mirrors the approved Arabic prospectus (v2); English mirrors
 * the approved English prospectus. Presentation only — no logic here.
 */

export const PROSPECTUS_PDF = {
  en: "/docs/lighthouse-campus-prospectus-2026-2027-en.pdf",
  ar: "/docs/lighthouse-campus-prospectus-2026-2027-ar.pdf",
} as const;

export interface ProspectusCopy {
  hero: { eyebrow: string; title: string; intro: string; breadcrumbHome: string; breadcrumbAdmissions: string; breadcrumbCurrent: string };
  sections: { label: string; to: string }[];
  actions: {
    download: string;
    downloadAria: string;
    apply: string;
    applyAria: string;
    langLabel: string;
    langEn: string;
    langAr: string;
  };
  welcome: {
    eyebrow: string;
    title: string;
    description: string;
    body: string;
    stats: { value: string; label: string }[];
    note: string;
  };
  programmes: {
    eyebrow: string;
    title: string;
    stagesLabel: string;
    tableCaption: string;
    th: [string, string, string];
    items: { eyebrow: string; title: string; body: string; stages: string[]; language: string }[];
    extras: { title: string; body: string }[];
  };
  faculty: { eyebrow: string; title: string; description: string; cards: { title: string; body: string }[] };
  environment: { eyebrow: string; title: string; description: string; cards: { title: string; body: string }[] };
  wellbeing: {
    eyebrow: string;
    title: string;
    description: string;
    roleLabel: string;
    role: string[];
    cards: { title: string; body: string }[];
    note: string;
  };
  activities: {
    eyebrow: string;
    title: string;
    description: string;
    groups: { title: string; body: string; items: string[] }[];
    note: string;
  };
  eeios: {
    eyebrow: string;
    title: string;
    description: string;
    connectsLabel: string;
    roles: string[];
    platformNote: string;
    cards: { title: string; body: string }[];
    disclaimer: string;
  };
  philosophy: { eyebrow: string; title: string; traits: string[]; cards: { title: string; body: string }[] };
  why: { eyebrow: string; title: string; cards: { title: string; body: string }[] };
  admissions: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { n: string; label: string }[];
    cards: { title: string; body: string }[];
    limitedEyebrow: string;
    limitedBody: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    addressLabel: string;
    address: string;
    contactLabel: string;
    websiteLabel: string;
  };
  share: string;
  cta: { title: string; body: string; primary: string; secondary: string };
}

const en: ProspectusCopy = {
  hero: {
    eyebrow: "School Guide 2026 / 2027",
    title:
      "An education that balances academic excellence, character formation, and readiness for the future.",
    intro:
      "A school guide to our academic programmes, teaching faculty, learning environment, and the education operating system we run on. Admissions are open now.",
    breadcrumbHome: "Home",
    breadcrumbAdmissions: "Admissions",
    breadcrumbCurrent: "School Guide 2026 / 2027",
  },
  sections: [
    { label: "Welcome", to: "#welcome" },
    { label: "Programmes", to: "#programmes" },
    { label: "Faculty", to: "#faculty" },
    { label: "Environment", to: "#environment" },
    { label: "EEIOS", to: "#eeios" },
    { label: "Philosophy", to: "#philosophy" },
    { label: "Why Lighthouse", to: "#why" },
    { label: "Admissions", to: "#admissions" },
    { label: "Contact", to: "#contact" },
  ],
  actions: {
    download: "Download PDF",
    downloadAria: "Download the school guide 2026 / 2027 as a PDF",
    apply: "Start application →",
    applyAria: "Start an application for the 2026 / 2027 academic year",
    langLabel: "Guide language",
    langEn: "English",
    langAr: "العربية",
  },
  welcome: {
    eyebrow: "Welcome",
    title: "Welcome to Lighthouse Campus",
    description:
      "We offer an integrated educational experience that places the student at the centre of learning — accredited curricula, qualified teachers, a supportive learning environment, and modern technology — to develop a confident, responsible learner who can succeed in a fast-changing world.",
    body:
      "We believe real education is not limited to transferring knowledge. It shapes character, develops thinking, instils values, and prepares students for life, for university, and for the world of work.",
    stats: [
      { value: "3", label: "Academic programmes" },
      { value: "AR / EN", label: "Languages of instruction" },
      { value: "EEIOS", label: "One unified operating system" },
      { value: "2026 / 2027", label: "Admissions open now" },
    ],
    note:
      "This guide describes what is actually in place at the school, without exaggeration. Families are welcome to visit the campus, see the classrooms and facilities, and meet the administration before making a registration decision.",
  },
  programmes: {
    eyebrow: "Academic programmes",
    title: "Three academic programmes — families choose the pathway that fits their child's future.",
    stagesLabel: "Available stages",
    tableCaption: "Available stages by academic programme",
    th: ["Programme", "Language of instruction", "Available stages"],
    items: [
      {
        eyebrow: "International",
        title: "Cambridge International",
        body:
          "An international programme focused on deep understanding, critical thinking, creativity and problem solving, with academic preparation that qualifies students to continue at respected universities worldwide.",
        stages: ["Grade 1 – Grade 8"],
        language: "English",
      },
      {
        eyebrow: "National — Arabic",
        title: "Sudanese National (Arabic)",
        body:
          "A complete academic programme delivering the Sudanese national curriculum in a modern learning environment, with emphasis on teaching quality, skills development and academic achievement.",
        stages: ["Grade 6 (Primary)", "Middle school (Years 1–3)", "Secondary school (Years 1–3)"],
        language: "Arabic",
      },
      {
        eyebrow: "National — Translated",
        title: "Sudanese National (Translated)",
        body:
          "A programme that combines the content of the Sudanese national curriculum with English-language delivery, building a strong academic base while developing language skills and readiness for higher education.",
        stages: ["Sudanese national content delivered in English"],
        language: "Arabic & English",
      },
    ],
    extras: [
      {
        title: "Choosing the right programme",
        body:
          "The admissions office helps each family select the appropriate programme and grade based on the student's previous academic record and the placement assessment, with a clear explanation of the differences between the three programmes.",
      },
      {
        title: "Language and assessment",
        body:
          "Continuous assessment runs alongside formal examinations in all programmes. Arabic is taught to every student, and language-support programmes are available for those who need them at the start of the year.",
      },
    ],
  },
  faculty: {
    eyebrow: "Our teachers",
    title: "Teachers who make a difference",
    description:
      "Learning is led by a team of qualified teachers who combine academic expertise, continuous professional development, and up-to-date teaching strategies that encourage participation, inquiry and active learning.",
    cards: [
      {
        title: "Selection criteria",
        body:
          "A subject-specific qualification, documented classroom experience, a demonstration lesson before a panel, and an educational interview.",
      },
      {
        title: "Continuous development",
        body:
          "A periodic in-house training programme, classroom visits, and review of lesson plans and student outcomes.",
      },
    ],
  },
  environment: {
    eyebrow: "Learning environment",
    title: "An inspiring learning environment",
    description:
      "We provide a safe, motivating environment that helps students learn with confidence.",
    cards: [
      { title: "Modern classrooms", body: "Controlled class sizes and equipment that supports group work and interactive presentation." },
      { title: "Labs and applied activity", body: "Science and computer labs with practical work tied directly to curriculum content." },
      { title: "Sport, culture and arts", body: "A weekly activity programme and student clubs built into the school timetable." },
      { title: "Continuous academic follow-up", body: "Regular performance tracking and early identification of students who need subject support." },
      { title: "Integrated student care", body: "A published behaviour policy, health care provision, and individual follow-up where support is needed." },
      { title: "Participation and inquiry", body: "Research tasks and classroom projects that build thinking and independent learning." },
    ],
  },
  eeios: {
    eyebrow: "Education Enterprise Intelligence Operating System",
    title: "Education supported by institutional intelligence",
    description:
      "The school runs on a modern education operating system built on the Education Enterprise Intelligence Operating System (EEIOS), providing an integrated digital environment on a single platform that supports communication, follow-up, and management of the educational process with efficiency and transparency.",
    connectsLabel: "Who the system connects",
    roles: ["Student", "Family", "Teachers", "Academic body", "School administration"],
    platformNote:
      "All on one platform that supports communication, follow-up, and efficient, transparent management of the educational process.",
    cards: [
      {
        title: "An integrated experience for parents",
        body:
          "Follow academic performance, track attendance and discipline, review periodic reports, follow homework and activities, communicate directly with the school, and receive important notifications in good time.",
      },
      {
        title: "A learning experience for the student",
        body:
          "Interactive learning, individual follow-up, digital learning resources, continuous assessment, activities that build creativity, leadership and teamwork, and support to reach their full potential.",
      },
    ],
    disclaimer:
      "The system supports — it does not replace — the educational judgement of teachers and administration. Every user has permissions defined by their role, and data is used for educational and administrative purposes only.",
  },
  philosophy: {
    eyebrow: "Our educational philosophy",
    title: "We focus on developing a student who possesses",
    traits: [
      "A strong academic foundation",
      "Firmly held values",
      "A confident character",
      "An authentic identity",
      "Thinking and creative skills",
      "Communication and collaboration",
    ],
    cards: [
      {
        title: "From philosophy to daily practice",
        body:
          "A written scheme of work for every subject, continuous assessment that measures understanding rather than memorisation, classroom activities that build thinking and cooperation, and individual follow-up for any student who needs support.",
      },
      {
        title: "Values and identity",
        body:
          "We safeguard the student's identity, Arabic language and values alongside academic openness to international standards — so they graduate confident both in themselves and in where they belong.",
      },
      {
        title: "Partnership with the family",
        body:
          "Parents are given an up-to-date picture of their child's performance and a direct channel to the teacher and administration throughout the year.",
      },
    ],
  },
  why: {
    eyebrow: "Why Lighthouse Campus",
    title: "Why Lighthouse Campus?",
    cards: [
      { title: "Diverse academic programmes", body: "Three programmes serving different family needs within one school." },
      { title: "Qualified teachers", body: "Selected against written criteria, with continuous professional development." },
      { title: "Safe, motivating environment", body: "Structure, supervision, and integrated pastoral and health care." },
      { title: "Modern learning technology", body: "Digital resources and one unified education operating system." },
      { title: "Active family partnership", body: "Documented communication, periodic reports and scheduled meetings." },
      { title: "Continuous growth tracking", body: "Academic and personal follow-up throughout the school year." },
    ],
  },
  admissions: {
    eyebrow: "Admissions 2026 / 2027",
    title: "Admissions are open now",
    description:
      "Lighthouse Campus is pleased to receive applications for the 2026 / 2027 academic year. Begin an educational journey that brings together academic quality, values, innovation and care.",
    steps: [
      { n: "01", label: "Submit application" },
      { n: "02", label: "Complete documents" },
      { n: "03", label: "Interview & placement" },
      { n: "04", label: "Programme & grade set" },
      { n: "05", label: "Enrolment confirmed" },
    ],
    cards: [
      {
        title: "Required documents",
        body:
          "Student's birth certificate or equivalent; the most recent school certificate or transcript; passport or national ID copy for student and parent; recent personal photographs; and a health record where available.",
      },
      {
        title: "Placement assessment",
        body:
          "A short assessment in language and mathematics to place the student in the appropriate grade and programme, and to establish whether language or academic support is needed at the start of the year. The result is explained to the parent.",
      },
      {
        title: "Tuition fees",
        body:
          "Fee schedules are issued in writing for each stage and programme, setting out what is and is not included, with instalment payment options.",
      },
      {
        title: "Campus visit",
        body:
          "Families are welcome to visit and view the classrooms and facilities and meet the administration before registering. Visits are arranged by phone or email.",
      },
    ],
    limitedEyebrow: "Limited places per class",
    limitedBody:
      "We hold to a defined number of students per class to protect the quality of follow-up, and registration for a grade closes once it is full. Applying early gives families wider choice of programme and grade.",
  },
  contact: {
    eyebrow: "Contact us",
    title: "Begin the registration process for the 2026 / 2027 year",
    description:
      "Contact us to arrange a campus visit, or to request the fee schedule and details of the programme best suited to your child.",
    addressLabel: "Address",
    address: "58 El-Zahraa St., Dokki, Cairo",
    contactLabel: "Phone & email",
    websiteLabel: "Website",
  },
  share: "Lighthouse Campus — School Guide 2026 / 2027",
  cta: {
    title: "Admissions are open now for 2026 / 2027",
    body: "Read the full guide, or start your application today — places per class are limited.",
    primary: "Start application",
    secondary: "Schedule a visit",
  },
};

const ar: ProspectusCopy = {
  hero: {
    eyebrow: "دليل المدرسة 2026 / 2027",
    title: "تعليم يوازن بين التميّز الأكاديمي وبناء الشخصية والاستعداد للمستقبل.",
    intro:
      "دليل يعرّفك ببرامجنا الأكاديمية، وهيئة التدريس، وبيئة الدراسة، ونظام التشغيل التعليمي الذي نعمل به. التسجيل مفتوح الآن.",
    breadcrumbHome: "الرئيسية",
    breadcrumbAdmissions: "القبول والتسجيل",
    breadcrumbCurrent: "دليل المدرسة 2026 / 2027",
  },
  sections: [
    { label: "ترحيب", to: "#welcome" },
    { label: "البرامج", to: "#programmes" },
    { label: "هيئة التدريس", to: "#faculty" },
    { label: "بيئة الدراسة", to: "#environment" },
    { label: "نظام التشغيل", to: "#eeios" },
    { label: "فلسفتنا", to: "#philosophy" },
    { label: "لماذا لايت هاوس", to: "#why" },
    { label: "القبول", to: "#admissions" },
    { label: "تواصل معنا", to: "#contact" },
  ],
  actions: {
    download: "تحميل الدليل PDF",
    downloadAria: "تحميل دليل المدرسة 2026 / 2027 بصيغة PDF",
    apply: "ابدأ التسجيل ←",
    applyAria: "ابدأ طلب التسجيل للعام الدراسي 2026 / 2027",
    langLabel: "لغة الدليل",
    langEn: "English",
    langAr: "العربية",
  },
  welcome: {
    eyebrow: "ترحيب",
    title: "مرحبًا بكم في لايت هاوس كامبس",
    description:
      "نقدّم تجربة تعليمية متكاملة تضع الطالب في مركز عملية التعلّم — مناهج معتمدة، ومعلّمون مؤهّلون، وبيئة دراسية داعمة، وتقنية حديثة — لبناء متعلّم واثق ومسؤول قادر على النجاح في عالم سريع التغيّر.",
    body:
      "نؤمن أن التعليم الحقيقي لا يقتصر على نقل المعرفة، بل يبني الشخصية، ويطوّر التفكير، ويغرس القيم، ويُعِدّ الطالب للحياة والجامعة وسوق العمل.",
    stats: [
      { value: "3", label: "برامج أكاديمية" },
      { value: "عربي / إنجليزي", label: "لغات التدريس" },
      { value: "EEIOS", label: "نظام تشغيل موحّد" },
      { value: "2026 / 2027", label: "التسجيل مفتوح الآن" },
    ],
    note:
      "يوصف هذا الدليل ما هو قائم فعليًا في المدرسة دون تضخيم. ونرحّب بزيارة الأسر للحرم المدرسي لمعاينة الفصول والمرافق ولقاء الإدارة قبل اتخاذ قرار التسجيل.",
  },
  programmes: {
    eyebrow: "البرامج الأكاديمية",
    title: "ثلاثة برامج أكاديمية — تختار الأسرة المسار الأنسب لمستقبل ابنها.",
    stagesLabel: "المراحل المتاحة",
    tableCaption: "المراحل المتاحة في كل برنامج أكاديمي",
    th: ["البرنامج", "لغة التدريس", "المراحل المتاحة"],
    items: [
      {
        eyebrow: "دولي",
        title: "كامبريدج الدولي",
        body:
          "برنامج دولي يركّز على الفهم العميق والتفكير النقدي والإبداع وحلّ المشكلات، مع إعداد أكاديمي يؤهّل الطالب لمواصلة دراسته في جامعات مرموقة حول العالم.",
        stages: ["الصف الأول – الصف الثامن"],
        language: "الإنجليزية",
      },
      {
        eyebrow: "وطني — عربي",
        title: "المنهج السوداني (عربي)",
        body:
          "برنامج أكاديمي كامل يقدّم المنهج الوطني السوداني في بيئة تعليمية حديثة، مع التركيز على جودة التدريس وتنمية المهارات والتحصيل الأكاديمي.",
        stages: ["الصف السادس (الأساس)", "المرحلة المتوسطة (الأعوام 1–3)", "المرحلة الثانوية (الأعوام 1–3)"],
        language: "العربية",
      },
      {
        eyebrow: "وطني — مترجم",
        title: "المنهج السوداني (المترجم)",
        body:
          "برنامج يجمع محتوى المنهج الوطني السوداني مع التدريس باللغة الإنجليزية، لبناء أساس أكاديمي متين مع تطوير المهارات اللغوية والاستعداد للتعليم الجامعي.",
        stages: ["محتوى المنهج السوداني يُدرَّس بالإنجليزية"],
        language: "العربية والإنجليزية",
      },
    ],
    extras: [
      {
        title: "اختيار البرنامج المناسب",
        body:
          "يساعد مكتب القبول كل أسرة في اختيار البرنامج والصف المناسبين وفق السجل الأكاديمي السابق للطالب واختبار تحديد المستوى، مع توضيح الفروق بين البرامج الثلاثة.",
      },
      {
        title: "اللغة والتقويم",
        body:
          "يسير التقويم المستمر جنبًا إلى جنب مع الاختبارات الرسمية في جميع البرامج. واللغة العربية تُدرَّس لكل طالب، وتتوفّر برامج دعم لغوي لمن يحتاجها في بداية العام.",
      },
    ],
  },
  faculty: {
    eyebrow: "هيئة التدريس",
    title: "معلّمون يصنعون الفرق",
    description:
      "يقود عملية التعلّم فريق من المعلّمين المؤهّلين يجمع بين التخصّص الأكاديمي والتطوير المهني المستمر واستراتيجيات تدريس حديثة تشجّع المشاركة والاستقصاء والتعلّم النشط.",
    cards: [
      {
        title: "معايير الاختيار",
        body: "مؤهّل في التخصّص، وخبرة صفّية موثّقة، ودرس تطبيقي أمام لجنة، ومقابلة تربوية.",
      },
      {
        title: "التطوير المستمر",
        body: "برنامج تدريب داخلي دوري، وزيارات صفّية، ومراجعة لخطط الدروس ونتائج الطلاب.",
      },
    ],
  },
  environment: {
    eyebrow: "بيئة الدراسة",
    title: "بيئة تعليمية مُلهمة",
    description: "نوفّر بيئة آمنة ومحفّزة تساعد الطالب على التعلّم بثقة.",
    cards: [
      { title: "فصول حديثة", body: "كثافة صفّية منضبطة وتجهيزات تدعم العمل الجماعي والعرض التفاعلي." },
      { title: "مختبرات ونشاط تطبيقي", body: "مختبرات للعلوم والحاسوب بأعمال عملية مرتبطة مباشرة بمحتوى المنهج." },
      { title: "رياضة وثقافة وفنون", body: "برنامج نشاط أسبوعي وأندية طلابية مدرجة في الجدول المدرسي." },
      { title: "متابعة أكاديمية مستمرة", body: "رصد منتظم للأداء وتحديد مبكر للطلاب المحتاجين إلى دعم في المواد." },
      { title: "رعاية طلابية متكاملة", body: "لائحة سلوك معلنة، ورعاية صحية، ومتابعة فردية عند الحاجة إلى الدعم." },
      { title: "مشاركة واستقصاء", body: "مهام بحثية ومشروعات صفّية تبني التفكير والتعلّم المستقل." },
    ],
  },
  eeios: {
    eyebrow: "هندسة الذكاء التعليمي المؤسسي",
    title: "تعليم مدعوم بالذكاء المؤسسي",
    description:
      "تعمل المدرسة بنظام تشغيل تعليمي حديث مبني على Education Enterprise Intelligence Operating System (EEIOS)، يوفّر بيئة رقمية متكاملة على منصّة واحدة تدعم التواصل والمتابعة وإدارة العملية التعليمية بكفاءة وشفافية.",
    connectsLabel: "من يربط النظام",
    roles: ["الطالب", "الأسرة", "المعلّمون", "الهيئة الأكاديمية", "إدارة المدرسة"],
    platformNote:
      "الجميع على منصّة واحدة تدعم التواصل والمتابعة وإدارة العملية التعليمية بكفاءة وشفافية.",
    cards: [
      {
        title: "تجربة متكاملة لأولياء الأمور",
        body:
          "متابعة الأداء الأكاديمي، ورصد الحضور والسلوك، ومراجعة التقارير الدورية، ومتابعة الواجبات والأنشطة، والتواصل المباشر مع المدرسة، واستلام الإشعارات المهمّة في وقتها.",
      },
      {
        title: "تجربة تعلّم للطالب",
        body:
          "تعلّم تفاعلي، ومتابعة فردية، ومصادر تعلّم رقمية، وتقويم مستمر، وأنشطة تبني الإبداع والقيادة والعمل الجماعي، ودعم للوصول إلى كامل إمكاناته.",
      },
    ],
    disclaimer:
      "النظام يدعم ولا يُلغي الحكم التربوي للمعلّم والإدارة. ولكل مستخدم صلاحيات محدّدة وفق دوره، وتُستخدم البيانات لأغراض تعليمية وإدارية فقط.",
  },
  philosophy: {
    eyebrow: "فلسفتنا التربوية",
    title: "نركّز على بناء طالب يمتلك",
    traits: [
      "أساسًا أكاديميًا متينًا",
      "قيمًا راسخة",
      "شخصية واثقة",
      "هوية أصيلة",
      "مهارات تفكير وإبداع",
      "تواصلًا وعملًا جماعيًا",
    ],
    cards: [
      {
        title: "من الفلسفة إلى الممارسة اليومية",
        body:
          "خطة دراسية مكتوبة لكل مادة، وتقويم مستمر يقيس الفهم لا الحفظ، وأنشطة صفّية تبني التفكير والتعاون، ومتابعة فردية لكل طالب يحتاج دعمًا.",
      },
      {
        title: "القيم والهوية",
        body:
          "نحفظ هوية الطالب ولغته العربية وقيمه إلى جانب الانفتاح الأكاديمي على المعايير الدولية — ليتخرّج واثقًا من نفسه ومن انتمائه.",
      },
      {
        title: "شراكة مع الأسرة",
        body:
          "يحصل ولي الأمر على صورة محدَّثة عن أداء ابنه وقناة مباشرة مع المعلّم والإدارة على مدار العام.",
      },
    ],
  },
  why: {
    eyebrow: "لماذا لايت هاوس كامبس",
    title: "لماذا لايت هاوس كامبس؟",
    cards: [
      { title: "برامج أكاديمية متنوّعة", body: "ثلاثة برامج تخدم احتياجات مختلفة للأسر داخل مدرسة واحدة." },
      { title: "معلّمون مؤهّلون", body: "يُختارون وفق معايير مكتوبة مع تطوير مهني مستمر." },
      { title: "بيئة آمنة ومحفّزة", body: "تنظيم وإشراف ورعاية سلوكية وصحية متكاملة." },
      { title: "تقنية تعليمية حديثة", body: "مصادر رقمية ونظام تشغيل تعليمي موحّد." },
      { title: "شراكة فاعلة مع الأسرة", body: "تواصل موثّق وتقارير دورية ولقاءات مجدولة." },
      { title: "متابعة نموّ مستمرة", body: "متابعة أكاديمية وشخصية على مدار العام الدراسي." },
    ],
  },
  admissions: {
    eyebrow: "القبول والتسجيل 2026 / 2027",
    title: "التسجيل مفتوح الآن",
    description:
      "يسرّ لايت هاوس كامبس استقبال طلبات التسجيل للعام الدراسي 2026 / 2027. ابدأ رحلة تعليمية تجمع الجودة الأكاديمية والقيم والابتكار والرعاية.",
    steps: [
      { n: "01", label: "تقديم الطلب" },
      { n: "02", label: "استكمال المستندات" },
      { n: "03", label: "المقابلة وتحديد المستوى" },
      { n: "04", label: "تحديد البرنامج والصف" },
      { n: "05", label: "تأكيد التسجيل" },
    ],
    cards: [
      {
        title: "المستندات المطلوبة",
        body:
          "شهادة ميلاد الطالب أو ما يعادلها، وآخر شهادة أو كشف درجات مدرسي، وصورة جواز أو رقم وطني للطالب وولي الأمر، وصور شخصية حديثة، وسجل صحي إن توفّر.",
      },
      {
        title: "اختبار تحديد المستوى",
        body:
          "اختبار قصير في اللغة والرياضيات لتحديد الصف والبرنامج المناسبين، ولمعرفة ما إذا كان الطالب يحتاج دعمًا لغويًا أو أكاديميًا في بداية العام، وتُشرح النتيجة لولي الأمر.",
      },
      {
        title: "المصروفات الدراسية",
        body:
          "تُصدر جداول المصروفات كتابيًا لكل مرحلة وبرنامج، موضّحة ما يشمله وما لا يشمله السعر، مع خيارات السداد بالأقساط.",
      },
      {
        title: "زيارة الحرم المدرسي",
        body:
          "نرحّب بزيارة الأسر لمعاينة الفصول والمرافق ولقاء الإدارة قبل التسجيل، وتُنظّم الزيارات هاتفيًا أو بالبريد الإلكتروني.",
      },
    ],
    limitedEyebrow: "الأماكن محدودة في كل فصل",
    limitedBody:
      "نلتزم بعدد محدّد من الطلاب في كل فصل حفاظًا على جودة المتابعة، ويُغلق التسجيل في الصف عند استكمال العدد. والتقديم المبكر يمنح الأسرة خيارات أوسع في البرنامج والصف.",
  },
  contact: {
    eyebrow: "تواصل معنا",
    title: "ابدأ إجراءات التسجيل للعام 2026 / 2027",
    description:
      "تواصل معنا لتحديد موعد زيارة للحرم المدرسي، أو لطلب جدول المصروفات وتفاصيل البرنامج الأنسب لابنك.",
    addressLabel: "العنوان",
    address: "58 شارع الزهراء، الدقي، القاهرة",
    contactLabel: "الهاتف والبريد",
    websiteLabel: "الموقع الإلكتروني",
  },
  share: "لايت هاوس كامبس — دليل المدرسة 2026 / 2027",
  cta: {
    title: "التسجيل مفتوح الآن للعام 2026 / 2027",
    body: "اقرأ الدليل كاملًا، أو ابدأ طلب التسجيل اليوم — الأماكن محدودة في كل فصل.",
    primary: "ابدأ التسجيل",
    secondary: "حدّد موعد زيارة",
  },
};

export const PROSPECTUS_COPY = { en, ar } as const;
