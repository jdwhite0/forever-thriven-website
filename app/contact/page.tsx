"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1920&q=85"
            alt="Welcoming professional environment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/93 via-navy/82 to-navy/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
            Contact
          </span>
          <h1 className="font-serif text-4xl md:text-5xl text-white max-w-xl leading-tight">
            We're here. Let's talk.
          </h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-navy mb-3">
                  Reach the right people, quickly.
                </h2>
                <p className="font-sans text-navy/60 text-sm md:text-base leading-relaxed">
                  Whether you're a family exploring options, a support coordinator making a referral, or a healthcare provider with questions — we respond promptly and personally.
                </p>
              </div>

              <div className="space-y-5">
                {[
                  { label: "Email", value: "whitedarlene294@gmail.com", href: "mailto:whitedarlene294@gmail.com" },
                  { label: "Address", value: "3601 27th Ave S\nTampa, FL 33711", href: null },
                  { label: "APD Region", value: "Tampa Bay — Hillsborough County", href: null },
                  { label: "Website", value: "forever-thriven.com", href: null },
                ].map((item) => (
                  <div key={item.label} className="border-l-2 border-cyan pl-5">
                    <span className="text-[10px] uppercase tracking-wider text-navy/30 font-sans block mb-1">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a href={item.href} className="font-sans text-sm text-navy hover:text-cyan transition-colors whitespace-pre-line">
                        {item.value}
                      </a>
                    ) : (
                      <span className="font-sans text-sm text-navy/60 whitespace-pre-line">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-navy rounded-sm p-6">
                <h3 className="font-sans font-bold text-cyan text-xs uppercase tracking-widest mb-3">
                  APD Support Coordinators
                </h3>
                <p className="font-sans text-white/50 text-xs leading-relaxed">
                  We maintain active referral relationships with APD coordinators throughout Hillsborough County. We understand your documentation requirements and make the referral process straightforward.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-cyan/10 border border-cyan/20 rounded-sm px-4 py-3">
                <span className="w-2 h-2 rounded-full bg-cyan animate-pulse shrink-0" />
                <span className="font-sans text-xs text-cyan font-semibold">
                  Now accepting new participants
                </span>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white border border-light-gray rounded-sm p-8 shadow-sm">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue to-cyan flex items-center justify-center mb-6">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h2 className="font-serif text-2xl text-navy mb-3">Message received.</h2>
                  <p className="font-sans text-navy/60 leading-relaxed text-sm">
                    Thank you for reaching out to Thrive Ability, LLC. We'll get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-light-gray rounded-sm p-6 md:p-8 shadow-sm space-y-5">
                  <h2 className="font-serif text-2xl text-navy mb-2">Send us a message.</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                        Email *
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                        Phone
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
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy focus:outline-none focus:border-cyan transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="participant-inquiry">Participant Inquiry</option>
                        <option value="apc-referral">APD / Support Coordinator Referral</option>
                        <option value="tour">Schedule a Program Tour</option>
                        <option value="provider">Healthcare Provider Inquiry</option>
                        <option value="general">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-navy/40 font-sans mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full border border-light-gray bg-off-white rounded-sm px-4 py-3 font-sans text-sm text-navy placeholder:text-navy/25 focus:outline-none focus:border-cyan transition-colors resize-none"
                      placeholder="How can we help?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-glow w-full bg-cyan text-navy font-bold font-sans text-sm py-4 rounded-sm hover:bg-cyan-light transition-colors tracking-wide"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
