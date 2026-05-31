import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs — Comprehensive Behavioral Health Day Programming",
  description:
    "Thrive Ability offers group therapy, skills training, medication monitoring, transportation, and community integration — all in a structured adult day program.",
};

export default function ProgramsPage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=85"
            alt="Active group wellness program"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/94 via-navy/82 to-navy/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
            Our Programs
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl leading-tight mb-5">
            Structured Support. Real Progress.
          </h1>
          <p className="font-sans text-white/60 max-w-xl text-base md:text-lg leading-relaxed">
            Every participant receives an Individualized Support Plan. Every program is designed to move them forward — not just maintain them.
          </p>
        </div>
      </section>

      {/* ISP Overview */}
      <section className="bg-white py-14 md:py-20 border-b border-light-gray">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue to-cyan flex items-center justify-center shrink-0">
              <span className="font-black text-white text-sm" style={{ fontFamily: "var(--font-inter)" }}>ISP</span>
            </div>
            <div className="max-w-3xl">
              <h2 className="font-serif text-xl md:text-2xl text-navy mb-2">
                Individualized Support Plans — Built Around Each Person
              </h2>
              <p className="font-sans text-navy/60 text-sm md:text-base leading-relaxed">
                Before any participant begins the program, we build their ISP — a detailed, personalized plan that documents their specific needs, diagnoses, goals, strengths, and capabilities. Every staff member follows it. It's reviewed and updated regularly as the participant grows. This is how we ensure every person gets what they actually need — not what the program happens to offer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs — Clinical */}
      <section className="bg-off-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-10">
            Clinical & Behavioral Support
          </span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured photo card */}
            <div className="photo-card rounded-sm overflow-hidden aspect-[4/3] relative shadow-lg lg:row-span-2">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1200&q=85"
                alt="Group therapy session in a supportive setting"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-serif text-2xl text-white mb-2">Group Therapy & Skills</h3>
                <p className="font-sans text-white/60 text-sm leading-relaxed">
                  Evidence-based group sessions focused on emotional regulation, communication, coping strategies, and behavioral health skills.
                </p>
              </div>
            </div>

            {[
              {
                title: "Behavioral Health Support",
                desc: "Individualized behavioral intervention in collaboration with certified behavioral specialists. Positive, proactive, and tailored to each participant.",
              },
              {
                title: "Medication Monitoring",
                desc: "Certified staff manage medication administration with careful documentation and coordination with healthcare providers.",
              },
              {
                title: "24/7 Coordination",
                desc: "While the program operates during day hours, our care team coordinates with family and support systems to ensure continuity after participants return home.",
              },
            ].map((item) => (
              <div key={item.title} className="card-lift bg-white border border-light-gray rounded-sm p-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue to-cyan mb-4" />
                <h3 className="font-serif text-xl text-navy mb-3">{item.title}</h3>
                <p className="font-sans text-navy/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — Daily Living */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-10">
            Daily Living & Skill Building
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                photo: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=85",
                alt: "Mindfulness and wellness activity",
                title: "Life Skills Training",
                desc: "Hygiene, meal preparation, money management, time management, and other practical skills for independent living.",
              },
              {
                photo: "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?auto=format&fit=crop&w=800&q=85",
                alt: "Hands-on vocational activity",
                title: "Job Readiness",
                desc: "Resume building, interview preparation, workplace behavior, and supported employment opportunities for participants ready to work.",
              },
              {
                photo: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=85",
                alt: "Wellness and self-care activity",
                title: "Wellness & Recreational Therapy",
                desc: "Therapeutic recreational activities including mindfulness, exercise, art therapy, and stress management programs.",
              },
            ].map((card) => (
              <div key={card.title} className="photo-card group rounded-sm overflow-hidden relative aspect-[3/4] shadow-xl">
                <Image
                  src={card.photo}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-mid/95 via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white mb-2">{card.title}</h3>
                  <p className="font-sans text-white/55 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs — Community */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-10">
            Community & Integration
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-navy mb-6 leading-tight">
                Thriving happens in community, not isolation.
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Transportation Services",
                    desc: "Reliable transportation to the program, medical appointments, community activities, and other approved destinations.",
                  },
                  {
                    title: "Community Outings",
                    desc: "Organized outings and activities that integrate participants into the broader Tampa community.",
                  },
                  {
                    title: "Peer Support",
                    desc: "Structured peer interaction within the program — building social skills, friendships, and a sense of belonging.",
                  },
                  {
                    title: "Case Management",
                    desc: "Coordination with APD support coordinators, healthcare providers, family members, and other support systems to ensure a complete care network.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue to-cyan flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-navy text-sm mb-1">{item.title}</h4>
                      <p className="font-sans text-navy/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-card rounded-sm overflow-hidden aspect-[4/3] relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=85"
                alt="Adults engaged in community activity"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance bar */}
      <section className="bg-off-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
              Fully Licensed & Compliant
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-navy mb-8">
              Every certification. Every standard. Every time.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "APD Licensure — Day Program Services",
                "AHCA Medicaid Compliance",
                "Florida Level 2 Background Checks — All Staff",
                "CPR, First Aid & Medication Certification",
                "HIPAA Compliant Operations",
                "Zero Tolerance Training (APD Requirements)",
                "Behavioral Health Core Competencies",
                "Individualized Support Plan Documentation",
              ].map((cert) => (
                <div key={cert} className="flex items-start gap-3 bg-white border border-light-gray rounded-sm px-4 py-3">
                  <span className="w-4 h-4 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-cyan text-[9px]">✓</span>
                  </span>
                  <span className="font-sans text-xs text-navy/60 leading-snug">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-navy to-navy-mid py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 max-w-xl mx-auto">
            Ready to discuss which programs fit your loved one?
          </h2>
          <p className="font-sans text-white/50 mb-8 max-w-md mx-auto text-sm">
            Every participant is different. We'll build a plan around them specifically.
          </p>
          <Link
            href="/get-started"
            className="btn-glow inline-block bg-cyan text-navy font-bold font-sans text-sm px-10 py-4 rounded-sm hover:bg-cyan-light transition-colors tracking-wide"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
