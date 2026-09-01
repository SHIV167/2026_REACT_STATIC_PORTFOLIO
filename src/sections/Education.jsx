import { FiBookOpen } from "react-icons/fi";
const education = [
  { year: "2013 — 2014", degree: "Post Graduate Diploma in Advanced Computing (PG DAC)", school: "CDAC, Noida", focus: "Computer Engineering" },
  { year: "2008 — 2012", degree: "Bachelor of Science Engineering", school: "R.P.S Institute of Technology, Patna", focus: "Computer Science" },
  { year: "2006", degree: "Higher Secondary (12th)", school: "R.P.M Inter College, Madhepura", focus: "Science" },
];
const Education = () => <section id="education" className="section-wrap pt-8"><p className="section-kicker">Foundation</p><h2 className="section-title">Education</h2><div className="mt-10 grid gap-4 md:grid-cols-3">{education.map((item, index) => <article key={item.degree} className="glass-card group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30"><div className="flex items-center justify-between"><span className="text-sm text-violet-300">{item.year}</span><FiBookOpen className="text-neutral-600 transition group-hover:text-violet-300" /></div><h3 className="mt-7 text-xl font-medium leading-snug text-white">{item.degree}</h3><p className="mt-3 text-neutral-400">{item.school}</p><p className="mt-1 text-sm text-neutral-600">{item.focus}</p><span className="mt-7 block text-xs text-neutral-700">0{index + 1}</span></article>)}</div></section>;
export default Education;
