# LIGHTHOUSE ↔ ZANOVA — Institutional Entity Mapping

> Internal technical document. Not published on the public website.
> Purpose: identify every institutional entity currently represented on the
> Lighthouse Campus website so that each can later be modelled inside the
> ZANOVA Institutional Intelligence Platform.

Status: Draft v1.0 — aligned with Website v1.0 Production Baseline.
Scope: Public-website representation only. No operational data is stored on
the website today; all mappings describe the future integration surface.

---

## Legend

| Column | Meaning |
| --- | --- |
| Website Representation | How the entity currently appears on the public site (route, section, or content block). |
| Future ZANOVA Entity | The proposed domain model inside ZANOVA. |
| Future Owner | The institutional role that will own the record of truth. |
| Future Data Source | Where the authoritative data will live once ZANOVA is active. |
| Future CMS Source | Which CMS collection (if any) will drive public rendering. |
| Future Portal Relationship | Which portal(s) will read / write the entity. |

Portals referenced: Parent Portal, Student Portal, Teacher Portal,
Admissions Portal, Leadership Portal, Governance Portal, Community Portal.

---

## 1. People

### Learner
- Website Representation: Learner Profile (`/our-model/learner-profile`), Student Life section, Student Stories (`/news/student-stories`).
- Future ZANOVA Entity: `Learner`
- Future Owner: Academic Office
- Future Data Source: ZANOVA Student Information System (SIS)
- Future CMS Source: — (private record; only anonymised stories in CMS)
- Future Portal Relationship: Student Portal (self), Parent Portal (child), Teacher Portal (class), Leadership Portal (cohort).

### Teacher
- Website Representation: Teaching Framework (`/our-model/teaching-framework`), Teacher Stories (`/news/teacher-stories`), Careers (`/careers`).
- Future ZANOVA Entity: `Educator`
- Future Owner: Academic Office / HR
- Future Data Source: ZANOVA HR module
- Future CMS Source: `teacher_stories` (public profiles opt-in)
- Future Portal Relationship: Teacher Portal (self), Leadership Portal.

### Parent / Family
- Website Representation: Parents section (`/parents/*`), Parent Journey, Parent Partnership.
- Future ZANOVA Entity: `Family` (composed of `Guardian` records)
- Future Owner: Admissions & Family Relations
- Future Data Source: ZANOVA CRM / SIS
- Future CMS Source: —
- Future Portal Relationship: Parent Portal.

### Leadership
- Website Representation: `/about/leadership`.
- Future ZANOVA Entity: `LeadershipRole`
- Future Owner: Governance Office
- Future Data Source: ZANOVA HR
- Future CMS Source: `leadership_profiles`
- Future Portal Relationship: Leadership Portal.

### Governance
- Website Representation: `/about/governance`.
- Future ZANOVA Entity: `GovernanceBody`
- Future Owner: Board Secretariat
- Future Data Source: ZANOVA Governance module
- Future CMS Source: `governance_pages`
- Future Portal Relationship: Governance Portal.

### Alumni
- Website Representation: `/community/alumni` (planned).
- Future ZANOVA Entity: `Alumnus`
- Future Owner: Community Office
- Future Data Source: ZANOVA Alumni module
- Future CMS Source: `alumni_stories`
- Future Portal Relationship: Community Portal.

---

## 2. Places

### Campus
- Website Representation: `/campuses`, `/campuses/mohandessin`, Campus Experience section.
- Future ZANOVA Entity: `Campus`
- Future Owner: Operations
- Future Data Source: ZANOVA Facilities module
- Future CMS Source: `campuses`
- Future Portal Relationship: All portals (scoping dimension).

### Campus Facility (Library, Laboratories, Classrooms, Sports, Dining, Health, Innovation Spaces, Safety, Transportation)
- Website Representation: `/campus-experience/*`.
- Future ZANOVA Entity: `Facility` (typed enum)
- Future Owner: Operations
- Future Data Source: ZANOVA Facilities module
- Future CMS Source: `facilities`
- Future Portal Relationship: Leadership, Teacher, Parent (visibility only).

---

## 3. Academic Structure

### Learning Stage (Early Years, Primary, Preparatory, Secondary)
- Website Representation: `/learning-journey/*`.
- Future ZANOVA Entity: `LearningStage`
- Future Owner: Academic Office
- Future Data Source: ZANOVA Academic module
- Future CMS Source: `learning_stages`
- Future Portal Relationship: All portals.

### Academic Pathway / Graduation Pathway
- Website Representation: `/learning-journey/graduation-pathways`.
- Future ZANOVA Entity: `AcademicPathway`
- Future Owner: Academic Office
- Future Data Source: ZANOVA Curriculum module
- Future CMS Source: `pathways`
- Future Portal Relationship: Student, Parent, Teacher, Leadership.

### Subject / Curriculum Area
- Website Representation: `/academic-experience` (Curriculum, Languages, STEM, Arts, Support).
- Future ZANOVA Entity: `Subject`
- Future Owner: Academic Office
- Future Data Source: ZANOVA Curriculum module
- Future CMS Source: `subjects`
- Future Portal Relationship: Teacher, Student, Parent.

### Assessment
- Website Representation: `/our-model/assessment-framework`.
- Future ZANOVA Entity: `AssessmentFramework` → `AssessmentEvent`
- Future Owner: Academic Office
- Future Data Source: ZANOVA Assessment module
- Future CMS Source: `assessment_framework` (public description only)
- Future Portal Relationship: Teacher (author), Student & Parent (view).

### Learner Profile / Graduate Profile
- Website Representation: `/our-model/learner-profile`, `/our-model/graduate-profile`.
- Future ZANOVA Entity: `CompetencyProfile`
- Future Owner: Academic Office
- Future Data Source: ZANOVA Competency module
- Future CMS Source: `competency_profiles`
- Future Portal Relationship: All portals (read).

---

## 4. Student Development & Wellbeing

### Wellbeing
- Website Representation: `/student-life/wellbeing`.
- Future ZANOVA Entity: `WellbeingProgramme` + `WellbeingRecord` (private).
- Future Owner: Wellbeing Office
- Future Data Source: ZANOVA Wellbeing module
- Future CMS Source: `wellbeing_programmes` (public info only)
- Future Portal Relationship: Student, Parent, Teacher (scoped), Leadership (aggregate).

### Leadership & Service, Clubs & Activities, Athletics, Arts & Performance
- Website Representation: `/student-life/*`.
- Future ZANOVA Entity: `Activity` (typed: club, sport, arts, service).
- Future Owner: Student Life Office
- Future Data Source: ZANOVA Activities module
- Future CMS Source: `activities`
- Future Portal Relationship: Student, Parent, Teacher.

---

## 5. Admissions

### Admissions Journey
- Website Representation: `/admissions/*` (Application Process, Requirements, Tuition & Fees, Scholarships, FAQ, Schedule a Visit, Apply Online).
- Future ZANOVA Entity: `AdmissionsApplication`
- Future Owner: Admissions Office
- Future Data Source: ZANOVA Admissions module
- Future CMS Source: `admissions_pages` (marketing) + private application store.
- Future Portal Relationship: Admissions Portal (staff), Family (applicant view).

### Scholarship
- Website Representation: `/admissions/scholarships`.
- Future ZANOVA Entity: `ScholarshipProgramme`
- Future Owner: Admissions / Finance
- Future Data Source: ZANOVA Finance module
- Future CMS Source: `scholarship_programmes`
- Future Portal Relationship: Admissions, Family.

---

## 6. Community

### Community Programme
- Website Representation: `/community/community-programmes`.
- Future ZANOVA Entity: `CommunityProgramme`
- Future Owner: Community Office
- Future Data Source: ZANOVA Community module
- Future CMS Source: `community_programmes`
- Future Portal Relationship: Community Portal.

### Partnership
- Website Representation: `/community/partnerships`.
- Future ZANOVA Entity: `Partnership`
- Future Owner: Community Office
- Future Data Source: ZANOVA CRM
- Future CMS Source: `partnerships`
- Future Portal Relationship: Leadership, Community.

### Career (Employment Opportunity)
- Website Representation: `/careers`, `/community/careers`.
- Future ZANOVA Entity: `JobPosting`
- Future Owner: HR
- Future Data Source: ZANOVA HR module
- Future CMS Source: `job_postings`
- Future Portal Relationship: Public + HR portal.

---

## 7. Editorial

### Article / Story / Insight (School News, Educational Insights, Student Stories, Teacher Stories, Parent Guides, Research & Reflection, Campus Events, Community Stories)
- Website Representation: `/news/*`.
- Future ZANOVA Entity: `Article` (typed by category).
- Future Owner: Communications Office
- Future Data Source: CMS
- Future CMS Source: `articles`
- Future Portal Relationship: Public + Communications editorial workspace.

### Event
- Website Representation: `/student-life/events`, `/community/events`, `/news/campus-events`.
- Future ZANOVA Entity: `Event`
- Future Owner: Events Office
- Future Data Source: ZANOVA Events module
- Future CMS Source: `events`
- Future Portal Relationship: All portals (calendar).

### Policy / Resource / Calendar Item
- Website Representation: `/parents/school-policies`, `/parents/family-resources`, `/parents/school-calendar`.
- Future ZANOVA Entity: `Policy`, `Resource`, `CalendarEntry`
- Future Owner: Operations / Academic
- Future Data Source: ZANOVA Operations module
- Future CMS Source: `policies`, `resources`, `calendar_entries`
- Future Portal Relationship: Parent, Teacher, Student.

---

## 8. Institutional Meta-Entities

### Digital Service
- Website Representation: `/explore/digital-ecosystem`, Parent Portal placeholder, Apply Online placeholder.
- Future ZANOVA Entity: `DigitalService` (registry with status: Available / In Development / Planned).
- Future Owner: Technology Office
- Future Data Source: ZANOVA Service Registry
- Future CMS Source: `digital_services`
- Future Portal Relationship: All.

### Institutional Intelligence (Model, Ecosystem, Innovation, Parent Partnership as Model)
- Website Representation: `/our-model/*`.
- Future ZANOVA Entity: `InstitutionalModel` (narrative + linked policies, frameworks, competency profiles).
- Future Owner: Leadership
- Future Data Source: CMS + ZANOVA Governance module
- Future CMS Source: `institutional_model_pages`
- Future Portal Relationship: Leadership, Governance (edit); all others (read).

### Value / Principle / Vision / Mission
- Website Representation: `/about/vision`, `/about/mission`, `/about/core-values`, `/about/educational-philosophy`, `/about/campus-culture`, `/about/why-lighthouse`, `/about/our-story`.
- Future ZANOVA Entity: `InstitutionalStatement`
- Future Owner: Leadership
- Future Data Source: CMS (managed by Communications with Leadership approval).
- Future CMS Source: `institutional_statements`
- Future Portal Relationship: Read-only across portals.

---

## Cross-Cutting Concerns

1. **Identity & Access** — ZANOVA will own the single sign-on identity for
   all portals. The website itself will remain unauthenticated; only future
   portal links will require identity.
2. **Content vs. Data separation** — Marketing narrative stays in CMS; live
   operational data (grades, attendance, applications) never surfaces on
   the public site.
3. **Localisation** — All entities above must support Arabic and English
   translations from day one in ZANOVA.
4. **Audit trail** — Every ZANOVA entity is expected to carry
   `created_by`, `updated_by`, `updated_at`, and a soft-delete flag.

---

## Change Log

- v1.0 — Initial mapping produced during Website v1.0 Production Baseline.
