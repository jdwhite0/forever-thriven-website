import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Built by Family, For People Who Need More",
  description:
    "Darlene and Jerry White founded Thrive Ability, LLC after 20+ years of social services experience. Learn the story behind Florida's family-owned behavioral health day program.",
};

export default function AboutPage() {
  return (
    <>
      {/* Header with photo */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=1920&q=85"
            alt="Diverse adults in a welcoming community setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/80 to-navy/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl leading-tight">
            Built by Family.<br />For People Who Need More.
          </h1>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6">
                Twenty Years. One Decision. Everything Changed.
              </h2>
              <div className="font-sans text-navy/60 leading-relaxed space-y-5 text-base md:text-lg">
                <p>
                  Darlene White spent over 20 years working inside Florida's social services landscape — watching adults with behavioral health needs navigate a system that often shuffled them from one inadequate placement to the next. Group settings with no structure. Facilities with no programming. People showing up every day, going through the motions, and leaving no different than they came.
                </p>
                <p>
                  She knew what good support looked like. She'd delivered it. And the gap between what the system offered and what people genuinely needed had been bothering her for years.
                </p>
                <p>
                  So she and her son Jerry built the answer.
                </p>
                <p>
                  Thrive Ability, LLC is a licensed adult day program for behavioral health in Tampa — built specifically for adults who have the potential to grow but need the right environment to do it. Structured. Therapeutic. Community-rooted. Human.
                </p>
                <p>
                  Not a holding space. A program with a purpose.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-navy rounded-sm p-8 sticky top-28">
                <h3 className="font-sans font-bold text-cyan text-xs uppercase tracking-widest mb-6">
                  At a Glance
                </h3>
                <ul className="space-y-5">
                  {[
                    { label: "Type", value: "Adult Day Program — Behavioral Health" },
                    { label: "Founded By", value: "Jerry & Darlene White" },
                    { label: "Location", value: "Tampa, Florida" },
                    { label: "Experience", value: "20+ years in social services" },
                    { label: "Structure", value: "Family-owned LLC" },
                    { label: "Regulatory", value: "Florida APD / AHCA" },
                    { label: "Population", value: "Adults 18+ with behavioral health needs" },
                  ].map((item) => (
                    <li key={item.label} className="border-b border-white/10 pb-4">
                      <span className="text-[10px] uppercase tracking-wider text-white/30 font-sans block mb-0.5">
                        {item.label}
                      </span>
                      <span className="font-sans text-sm text-white font-medium">
                        {item.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1543269664-647163eb4ee9?auto=format&fit=crop&w=1920&q=85"
          alt="Group support session with engaged participants"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-navy/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <blockquote className="font-serif text-xl md:text-2xl text-white text-center max-w-2xl px-8 leading-relaxed italic">
            "We built this because every adult deserves a program that actually believes in them."
          </blockquote>
        </div>
      </section>

      {/* Founders */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-12">
            The Founders
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Darlene */}
            <div className="card-lift bg-white border border-light-gray rounded-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-cyan flex items-center justify-center shrink-0">
                  <span className="font-black text-white text-xl" style={{ fontFamily: "var(--font-inter)" }}>DW</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-navy">Darlene White</h3>
                  <span className="font-sans text-xs text-navy/40 uppercase tracking-wider">
                    Co-Founder · Operations & Care Lead
                  </span>
                </div>
              </div>
              <p className="font-sans text-navy/60 leading-relaxed text-sm md:text-base">
                With over 20 years in Florida's social services field, Darlene is the core of everything Thrive Ability does. Her career has been built on direct work with adults with behavioral health and developmental needs — building the expertise, standards, and human approach that now shapes every aspect of the program. Her experience isn't just a credential. It's the curriculum.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["20+ Years Social Services", "Behavioral Health", "APD Expert", "Direct Care"].map((tag) => (
                  <span key={tag} className="bg-off-white border border-light-gray text-navy/50 font-sans text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Jerry */}
            <div className="card-lift bg-white border border-light-gray rounded-sm p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-navy to-blue flex items-center justify-center shrink-0">
                  <span className="font-black text-white text-xl" style={{ fontFamily: "var(--font-inter)" }}>JW</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-navy">Jerry White</h3>
                  <span className="font-sans text-xs text-navy/40 uppercase tracking-wider">
                    Co-Founder · Business Development
                  </span>
                </div>
              </div>
              <p className="font-sans text-navy/60 leading-relaxed text-sm md:text-base">
                Jerry brings the operational and entrepreneurial infrastructure that transforms Darlene's expertise into a scalable, sustainable program. His role is to ensure that the quality of care Darlene has spent decades developing is backed by the systems, compliance, and business structure necessary to grow and endure. He built this to last.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Operations", "Business Development", "Systems Building", "Growth Strategy"].map((tag) => (
                  <span key={tag} className="bg-off-white border border-light-gray text-navy/50 font-sans text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
            What Guides Us
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-12 max-w-xl">
            Five values drive every decision we make.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { value: "Dignity", desc: "Every participant is honored as a full, capable human being — never reduced to a diagnosis." },
              { value: "Growth", desc: "We believe in every person's capacity to develop skills, build confidence, and achieve more." },
              { value: "Community", desc: "Real thriving happens in connection. We integrate participants into the world around them." },
              { value: "Family", desc: "We treat every participant the way we'd want our own family treated. That's not a policy — it's a commitment." },
              { value: "Excellence", desc: "Full certification, trained staff, proper documentation, and constant improvement in everything we do." },
            ].map((v) => (
              <div key={v.value} className="border-t-2 border-cyan/30 pt-6 hover:border-cyan transition-colors group">
                <h3 className="font-serif text-xl text-white mb-3 group-hover:text-cyan transition-colors">{v.value}</h3>
                <p className="font-sans text-xs text-white/40 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-navy to-navy-mid rounded-sm p-10 md:p-14 flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">
                Come see what we're building.
              </h2>
              <p className="font-sans text-white/50 text-sm">
                We welcome families, APD coordinators, and healthcare professionals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/get-started"
                className="btn-glow bg-cyan text-navy font-bold font-sans text-sm px-8 py-4 rounded-sm hover:bg-cyan-light transition-colors tracking-wide text-center"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="border border-white/20 text-white font-sans text-sm px-8 py-4 rounded-sm hover:bg-white/10 transition-all tracking-wide text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
