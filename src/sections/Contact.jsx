import { useState } from "react";
import toast from "react-hot-toast";
import { FiArrowUpRight, FiCheck, FiMail, FiMapPin } from "react-icons/fi";

const initialForm = { name: "", email: "", subject: "Project enquiry", message: "" };
const validate = (values) => {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.subject.trim()) errors.subject = "Please choose or enter a subject.";
  if (values.message.trim().length < 20) errors.message = "Tell me a little more (at least 20 characters).";
  return errors;
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const updateField = ({ target: { name, value } }) => {
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); toast.error("Please fix the highlighted fields."); return; }
    setIsSending(true);
    const toastId = toast.loading("Sending your message…");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const contentType = response.headers.get("content-type") || "";
      const data = contentType.includes("application/json")
        ? await response.json()
        : { message: response.ok ? "Your message was received." : "The contact service is temporarily unavailable." };
      if (!response.ok) throw new Error(data.message);
      toast.success(data.message, { id: toastId, duration: 6000 });
      setForm(initialForm); setErrors({});
    } catch (error) {
      toast.error(error.message || "Something went wrong. Please try again.", { id: toastId, duration: 6000 });
    } finally { setIsSending(false); }
  };
  return <section id="contact" className="section-wrap"><div className="glass-card overflow-hidden rounded-[2rem]"><div className="grid lg:grid-cols-[.85fr_1.15fr]">
    <div className="relative overflow-hidden border-b border-white/10 p-8 md:p-12 lg:border-b-0 lg:border-r"><div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-600/20 blur-3xl" /><p className="section-kicker">Start a conversation</p><h2 className="section-title gradient-text">Have a project in mind?</h2><p className="section-lead">Let’s build a fast, thoughtful digital experience that works as beautifully as it looks.</p><div className="mt-10 space-y-5 text-sm text-neutral-300"><a href="mailto:jhashiv5@gmail.com" className="flex items-center gap-3 transition hover:text-white"><span className="rounded-xl bg-white/5 p-3 text-violet-300"><FiMail /></span>jhashiv5@gmail.com</a><p className="flex items-center gap-3"><span className="rounded-xl bg-white/5 p-3 text-cyan-300"><FiMapPin /></span>New Delhi, India · Available worldwide</p></div><div className="mt-10 rounded-2xl border border-emerald-400/15 bg-emerald-400/[.06] p-4 text-sm text-emerald-100"><FiCheck className="mr-2 inline" />Typically replies within 1–2 business days.</div></div>
    <form className="p-8 md:p-12" onSubmit={handleSubmit} noValidate><div className="grid gap-6 sm:grid-cols-2"><Field label="Your name" name="name" value={form.name} error={errors.name} onChange={updateField} placeholder="Shiv Kumar" autoComplete="name" /><Field label="Email address" name="email" type="email" value={form.email} error={errors.email} onChange={updateField} placeholder="you@company.com" autoComplete="email" /></div><label className="mt-6 block field-label" htmlFor="subject">What can I help with?</label><select id="subject" name="subject" value={form.subject} onChange={updateField} className={`field-input ${errors.subject ? "field-input-error" : ""}`}><option className="bg-[#11152a]">Project enquiry</option><option className="bg-[#11152a]">Full-time opportunity</option><option className="bg-[#11152a]">Consulting</option><option className="bg-[#11152a]">Just saying hello</option></select>{errors.subject && <p className="field-error">{errors.subject}</p>}<label className="mt-6 block field-label" htmlFor="message">Tell me about it</label><textarea id="message" name="message" maxLength="1000" rows="6" value={form.message} onChange={updateField} aria-invalid={Boolean(errors.message)} className={`field-input resize-none ${errors.message ? "field-input-error" : ""}`} placeholder="A few details about your goals, scope, and timeline…" /><div className="flex justify-between"><span>{errors.message && <span className="field-error">{errors.message}</span>}</span><span className="mt-1.5 text-xs text-neutral-600">{form.message.length}/1000</span></div><button disabled={isSending} className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-semibold text-[#080a17] transition hover:bg-violet-100 disabled:cursor-wait disabled:opacity-60">{isSending ? "Sending…" : "Send message"}<FiArrowUpRight /></button><p className="mt-4 text-center text-xs text-neutral-600">Your details are only used to reply to this enquiry.</p></form>
  </div></div></section>;
};
const Field = ({ label, error, ...props }) => <div><label className="field-label" htmlFor={props.name}>{label}</label><input id={props.name} aria-invalid={Boolean(error)} className={`field-input ${error ? "field-input-error" : ""}`} {...props} />{error && <p className="field-error">{error}</p>}</div>;
export default Contact;
