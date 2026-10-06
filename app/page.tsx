import Navbar from "./components/Navbar";
import EnquiryForm from "./components/EnquiryForm";

const courses = [
  { icon: "FS", title: "Full Stack Development", level: "Beginner", duration: "6 months", points: ["React and Next.js", "Node.js and APIs", "Database and deployment"] },
  { icon: "PY", title: "Python and Data Structures", level: "Beginner", duration: "4 months", points: ["Python fundamentals", "DSA for interviews", "100+ practice problems"] },
  { icon: "AI", title: "Data Science with AI", level: "Intermediate", duration: "8 months", points: ["Pandas and visualization", "Machine learning", "Real AI projects"] },
];

const features = [
  { icon: "01", title: "Project-based learning", text: "Build real apps and add them to your portfolio." },
  { icon: "02", title: "Expert mentors", text: "Weekly code reviews and doubt-solving sessions." },
  { icon: "03", title: "Career support", text: "Resume reviews and mock interviews." },
];

const testimonials = [
  { name: "Aarav S.", role: "Frontend Developer", text: "The projects felt like real work. I built a portfolio that actually got me interviews." },
  { name: "Priya M.", role: "Software Engineer", text: "Mentors explained concepts clearly and reviewed my code every week." },
  { name: "Rohan K.", role: "Data Analyst", text: "I moved from Excel to Python and ML within months. Very practical course." },
];

const faqs = [
  { q: "Do I need coding experience?", a: "No. Beginner courses start from the basics and build up step by step." },
  { q: "Are classes live or recorded?", a: "Live mentor-led sessions, with recordings available for revision." },
  { q: "Will I build real projects?", a: "Yes. Every course includes projects you can add to your portfolio." },
  { q: "How do I get started?", a: "Fill the form below and our team will call you to guide you." },
];

const codeLines = [
  "const developer = {",
  '  skills: ["React", "Node", "AI"],',
  '  mentor: "Codecrest",',
  "  goal: () => climbToTheTop(),",
  "};",
];

const stats = [
  { num: "10K+", label: "Learners" },
  { num: "50+", label: "Expert Mentors" },
  { num: "100+", label: "Hiring Partners" },
  { num: "4.8/5", label: "Average Rating" },
];

function FooterLogo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="48" height="48" viewBox="0 0 40 40" aria-hidden="true"><rect width="48" height="48" rx="10" fill="#3B9BFF" /><polyline points="7,31 16,11 22,22 26,16 33,31" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <span className="bg-linear-to-r from-brand-ink to-brand bg-clip-text text-3xl font-extrabold tracking-tight">Code<span className="text-[#3B9BFF]">crest</span></span>
    </span>
  );
}

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="relative overflow-hidden bg-linear-to-b from-white via-brand-soft to-brand-light px-6 py-20 md:py-28">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
          <div>
            <span className="inline-block rounded-full border border-brand-light bg-white px-4 py-1.5 text-sm font-medium text-brand-dark shadow-sm">
              New batches starting soon
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-6xl">
              Climb to the top of your <span className="text-brand">coding career</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-brand-muted">
              Learn Full Stack, Python and AI with hands-on projects and expert mentors.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#courses" className="rounded-full bg-brand px-8 py-3.5 font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark">
                Explore Courses
              </a>
              <a href="#enquiry" className="rounded-full border border-brand/40 bg-white px-8 py-3.5 font-semibold text-brand-dark transition hover:bg-brand-light">
                Talk to Expert
              </a>
            </div>
            <p className="mt-6 text-sm text-brand-muted">Rated 4.8/5 by 10K+ learners (sample data)</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-brand-light bg-white shadow-2xl shadow-brand/20">
              <div className="flex items-center gap-2 border-b border-brand-light bg-brand-soft px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-brand/40" />
                <span className="h-3 w-3 rounded-full bg-brand/60" />
                <span className="h-3 w-3 rounded-full bg-brand" />
                <span className="ml-3 text-xs text-brand-muted">codecrest.js</span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-brand-dark">
                {codeLines.map((l) => (
                  <div key={l}>{l}</div>
                ))}
              </pre>
            </div>
            <div className="absolute -bottom-5 -left-4 rounded-xl border border-brand-light bg-white px-4 py-3 text-sm font-semibold shadow-lg">
              Job-ready projects
            </div>
            <div className="absolute -right-3 -top-5 rounded-xl border border-brand-light bg-white px-4 py-3 text-sm font-semibold shadow-lg">
              Live mentors
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="bg-white px-6 py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">Courses</p>
        <h2 className="mt-2 text-center text-3xl font-bold md:text-4xl">Our Popular Courses</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-brand-muted">
          Industry-ready programs designed to take you from beginner to job-ready.
        </p>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {courses.map((c) => (
            <div key={c.title} className="flex flex-col rounded-2xl border border-brand-light bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-sm font-bold text-brand-dark">{c.icon}</span>
                <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand-dark">{c.level}</span>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{c.title}</h3>
              <ul className="mt-4 flex-1 space-y-2 text-brand-muted">
                {c.points.map((p) => (
                  <li key={p}><span className="mr-2 text-brand">&#10003;</span>{p}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t border-brand-light pt-5">
                <span className="text-sm text-brand-muted">{c.duration}</span>
                <a href="#enquiry" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark">
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light px-6 py-14">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-brand-dark">{s.num}</p>
              <p className="mt-1 text-brand-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="bg-white px-6 py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">Why Codecrest</p>
        <h2 className="mt-2 text-center text-3xl font-bold md:text-4xl">Learn the way developers actually work</h2>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl bg-brand-soft p-7 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-bold text-brand-dark shadow-sm">{f.icon}</span>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-brand-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="bg-brand-soft px-6 py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">Reviews</p>
        <h2 className="mt-2 text-center text-3xl font-bold md:text-4xl">What Learners Say</h2>
        <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-brand-light bg-white p-7 shadow-sm">
              <p className="text-brand">&#9733;&#9733;&#9733;&#9733;&#9733;</p>
              <p className="mt-3 text-brand-muted">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-light font-semibold text-brand-dark">{t.name[0]}</span>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-brand-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-brand-muted">Sample testimonials for demo purposes.</p>
      </section>

      <section id="faq" className="bg-white px-6 py-20">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-brand">FAQ</p>
        <h2 className="mt-2 text-center text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        <div className="mx-auto mt-10 max-w-2xl space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-xl border border-brand-light bg-brand-soft p-5">
              <summary className="cursor-pointer list-none font-semibold">
                <span className="mr-2 text-brand">+</span>{f.q}
              </summary>
              <p className="mt-3 pl-5 text-brand-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="enquiry" className="bg-linear-to-b from-brand-soft to-brand-light px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Get in touch</p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">Talk to our expert</h2>
            <p className="mt-4 max-w-md text-brand-muted">
              Not sure which course fits you? Share your details and we will call you back to guide you.
            </p>
            <ul className="mt-8 space-y-3 text-brand-muted">
              <li><span className="mr-2 text-brand">&#10003;</span>Free career counselling</li>
              <li><span className="mr-2 text-brand">&#10003;</span>Personalised learning roadmap</li>
              <li><span className="mr-2 text-brand">&#10003;</span>Response within 24 hours</li>
            </ul>
          </div>
          <EnquiryForm />
        </div>
      </section>

      <footer className="border-t border-brand/20 bg-white px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <FooterLogo />
            <p className="mt-2 text-sm text-brand-muted">Climb to the top of your coding career.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-brand-muted">
            <a href="#courses" className="hover:text-brand-dark">Courses</a>
            <a href="#reviews" className="hover:text-brand-dark">Reviews</a>
            <a href="#faq" className="hover:text-brand-dark">FAQ</a>
            <a href="#enquiry" className="hover:text-brand-dark">Contact</a>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-brand-muted">
          &copy; 2026 Codecrest. Demo project for portfolio purposes.
        </p>
      </footer>
    </main>
  );
}


