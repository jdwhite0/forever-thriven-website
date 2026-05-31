"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    yourName: "",
    role: "",
    participantName: "",
    email: "",
    phone: "",
    diagnosis: "",
    notes: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1920&q=85"
            alt="Professional behavioral health staff member"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/93 via-navy/85 to-navy/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
            Get Started
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white max-w-xl leading-tight mb-4">
            Starting is Simple.
          </h1>
          <p className="font-sans text-white/60 max-w-lg text-base leading-relaxed">
            Every journey begins with one conversation. Fill out the form and we'll be in touch within 1–2 business days.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-navy py-10 md:py-14 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { step: "01", label: "Inquiry", desc: "Submit the form or contact us directly." },
              { step: "02", label: "Consultation", desc: "We call to learn about the participant's needs." },
              { step: "03", label: "Program Tour", desc: "Visit the program and meet the team." },
              { step: "04", label: "Welcome In", desc: "We build their ISP and begin the program." },
            ].map((s) => (
              <div key={s.step} className="text-center md:text-left">
                <span className="font-black font-sans text-3xl text-cyan/20 block mb-2">
                  {s.step}
                </span>
                <h3 className="font-sans font-bold text-white text-sm mb-1">{s.label}</h3>
                <p className="font-sans text-white/40 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white border border-light-gray rounded-sm p-8 md:p-10 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue to-cyan flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl text-navy mb-4">
                    We received your inquiry.
                  </h2>
                  <p className="font-sans text-navy/60 leading-relaxed mb-6">
                    Thank you for reaching out to Thrive Ability, LLC. We'll review your information and follow up within 1–2 business days to schedule your consultation.
                  </p>
                  <p className="font-sans text-sm text-navy/40">
                    Questions in the meantime?{" "}
                    <a
                      href="mailto:whitedarlene294@gmail.com"
                      className="text-cyan hover:text-cyan-dark transition-colors underline"
                    >
                      Email us directly.
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-white border border-light-gray rounded-sm p-6 md:p-8 shadow-sm">
                    <h2 className="font-serif text-2xl text-navy mb-1">
                      Tell us about who you're inquiring for.
                    </h2>
                    <p className="font-sans text-navy/40 text-sm mb-6">
                      All fields marked * are required.
                    </p>

                    <div className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="yourName"
                            required
                            value={form.yourName}
                            onChange={handleChange}
                            className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors"
                            placeholder="First and last name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                            Your Role *
                          </label>
                          <select
                            name="role"
                            required
                            value={form.role}
                            onChange={handleChange}
                            className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy focus:outline-none focus:border-cyan transition-colors"
                          >
                            <option value="">Select your role</option>
                            <option value="parent">Parent</option>
                            <option value="guardian">Legal Guardian</option>
                            <option value="sibling">Sibling / Family Member</option>
                            <option value="support-coordinator">APD Support Coordinator</option>
                            <option value="case-manager">Case Manager / Social Worker</option>
                            <option value="healthcare">Healthcare Provider</option>
                            <option value="self">I am the participant</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                          Participant Name *
                        </label>
                        <input
                          type="text"
                          name="participantName"
                          required
                          value={form.participantName}
                          onChange={handleChange}
                          className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors"
                          placeholder="Name of the person who would attend"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={form.email}
                            onChange={handleChange}
                            className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors"
                            placeholder="(000) 000-0000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                          Primary Diagnosis / Behavioral Health Need
                        </label>
                        <input
                          type="text"
                          name="diagnosis"
                          value={form.diagnosis}
                          onChange={handleChange}
                          className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors"
                          placeholder="e.g. Depression, Bipolar disorder, Developmental disability, etc."
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                          Tell Us More About Their Situation
                        </label>
                        <textarea
                          name="notes"
                          rows={5}
                          value={form.notes}
                          onChange={handleChange}
                          className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors resize-none"
                          placeholder="Current living situation, level of support needed, any specific goals, relevant history, APD waiver status — anything that helps us understand how to best serve them..."
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-glow w-full bg-cyan text-navy font-bold font-sans text-sm py-4 rounded-sm hover:bg-cyan-light transition-colors tracking-wide"
                  >
                    Submit Inquiry
                  </button>
                  <p className="text-xs text-navy/30 font-sans text-center">
                    Your information is private and used only to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-navy rounded-sm p-6">
                <h3 className="font-sans font-bold text-cyan text-xs uppercase tracking-widest mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "Response within 1–2 business days",
                    "Free initial consultation — no obligation",
                    "We work with APD support coordinators",
                    "Medicaid waiver and private pay accepted",
                    "Program tours available by appointment",
                    "ISP developed collaboratively before start",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 font-sans text-xs text-white/50">
                      <span className="text-cyan mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-light-gray rounded-sm p-6">
                <h3 className="font-serif text-lg text-navy mb-4">Prefer to Reach Out Directly?</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-navy/30 font-sans block mb-1">Email</span>
                    <a
                      href="mailto:whitedarlene294@gmail.com"
                      className="font-sans text-sm text-navy hover:text-cyan transition-colors"
                    >
                      whitedarlene294@gmail.com
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-navy/30 font-sans block mb-1">Location</span>
                    <span className="font-sans text-sm text-navy/60">
                      3601 27th Ave S<br />St. Petersburg, FL 33711
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue to-cyan-dark rounded-sm p-6">
                <p className="font-serif text-white text-sm leading-relaxed italic mb-3">
                  "We built this program for adults who have more potential than the system has given them credit for."
                </p>
                <cite className="font-sans text-white/60 text-xs not-italic">
                  — Jerry & Darlene White, Founders
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
