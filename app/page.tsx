import Image from "next/image";
import Link from "next/link";
import { ThriveAbilityLogoLarge } from "@/components/ThriveAbilityLogo";

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1920&q=85"
            alt="Diverse adults in a welcoming program environment"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/78 to-navy/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
        </div>

        {/* Animated background glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue/10 rounded-full blur-3xl animate-float" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cyan/10 border border-cyan/30 rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              <span className="text-cyan text-xs font-sans font-semibold tracking-widest uppercase">
                Now Accepting Participants · St. Petersburg, FL
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.1] mb-6 text-balance animate-fade-in-up-delay-1">
              Where{" "}
              <span className="text-gradient-cyan">Ability</span>{" "}
              Meets Opportunity
            </h1>

            <p className="font-sans text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-lg animate-fade-in-up-delay-2">
              Florida's behavioral health adult day program — structured support, skill building, and community integration for adults ready to thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-3">
              <Link
                href="/get-started"
                className="btn-glow bg-cyan text-navy font-bold font-sans text-sm px-8 py-4 rounded-sm hover:bg-cyan-light transition-colors tracking-wide text-center"
              >
                Start the Process
              </Link>
              <Link
                href="/services"
                className="border border-white/30 text-white font-sans text-sm px-8 py-4 rounded-sm hover:bg-white/10 hover:border-white/50 transition-all tracking-wide text-center"
              >
                View Our Programs
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ─── MISSION STRIP ────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3 mb-5 leading-tight">
              Building the capacity to live fully, independently, and with purpose.
            </h2>
            <p className="font-sans text-navy/60 text-base md:text-lg leading-relaxed">
              Thrive Ability, LLC provides a structured, therapeutic, and empowering day program for adults navigating behavioral health challenges. We are not a waiting room. We are a launchpad.
            </p>
          </div>
        </div>
      </section>

      {/* ─── THREE PILLARS ────────────────────────────────────────────────────── */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                title: "Clinical Support",
                body: "Evidence-based group therapy, behavioral health interventions, and medication monitoring — delivered by trained professionals.",
              },
              {
                num: "02",
                title: "Skill Building",
                body: "Life skills, social skills, job readiness, and daily living support that create real-world independence.",
              },
              {
                num: "03",
                title: "Community Integration",
                body: "Activities, outings, and programs that reconnect participants to the community and build meaningful relationships.",
              },
            ].map((p) => (
              <div key={p.num} className="card-lift bg-white border border-light-gray rounded-sm p-8">
                <span className="font-sans text-3xl font-black text-cyan/20 block mb-4">
                  {p.num}
                </span>
                <h3 className="font-serif text-xl text-navy mb-3">{p.title}</h3>
                <p className="font-sans text-navy/50 text-sm leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTO + STORY SPLIT ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo */}
            <div className="photo-card rounded-sm overflow-hidden aspect-[4/3] relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
                alt="Diverse adults in a supportive community setting"
                fill
                className="object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 bg-navy/90 backdrop-blur-sm border border-cyan/20 rounded-sm px-4 py-3">
                <span className="text-cyan font-black font-sans text-2xl block leading-none">20+</span>
                <span className="text-white/60 font-sans text-xs">Years of Social Services Experience</span>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold">
                Built by People Who Care
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-4 mb-5 leading-tight">
                A program born from twenty years of watching the system fall short.
              </h2>
              <div className="font-sans text-navy/60 leading-relaxed space-y-4 text-base">
                <p>
                  Darlene White spent two decades in Florida's social services field, witnessing adults with behavioral health needs cycle through the system without gaining real stability. No structure. No skills. No community.
                </p>
                <p>
                  She and her son Jerry built Thrive Ability, LLC to be the alternative — a day program where adults show up, engage, grow, and return home each evening with more than they came in with.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-sm font-sans font-semibold text-cyan hover:text-cyan-dark transition-colors"
              >
                Meet the Founders
                <span className="text-xs">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS PREVIEW (PHOTO CARDS) ──────────────────────────────────── */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold">
                What We Offer
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mt-3">
                Programs Designed to Move People Forward
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-sans text-cyan hover:text-cyan-light transition-colors tracking-wide shrink-0"
            >
              All Programs →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                photo: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=800&q=85",
                alt: "Group therapy session with diverse adults",
                label: "Group Therapy & Skills",
                desc: "Evidence-based group sessions focused on coping, communication, and emotional regulation.",
              },
              {
                photo: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=85",
                alt: "Mindfulness and wellness activity",
                label: "Wellness & Mindfulness",
                desc: "Therapeutic activities including mindfulness, recreational therapy, and stress management.",
              },
              {
                photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=85",
                alt: "Active community group activity",
                label: "Life Skills Training",
                desc: "Practical skills for independent living — hygiene, cooking, money management, job readiness.",
              },
            ].map((card) => (
              <div key={card.label} className="photo-card group rounded-sm overflow-hidden relative aspect-[3/4] shadow-xl">
                <Image
                  src={card.photo}
                  alt={card.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/40 to-navy/10" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white mb-2">{card.label}</h3>
                  <p className="font-sans text-white/60 text-xs leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS BAR ────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-blue to-cyan-dark py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "34,000+", label: "Adults in FL APD System" },
              { stat: "20+", label: "Years of Experience" },
              { stat: "9", label: "Core Program Services" },
              { stat: "100%", label: "Family-Owned & Operated" },
            ].map((item) => (
              <div key={item.stat}>
                <span className="font-sans font-black text-3xl md:text-4xl text-white block mb-1">
                  {item.stat}
                </span>
                <span className="font-sans text-xs text-white/70 uppercase tracking-wider">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO WE SERVE TEASER ──────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold">
                Who We Serve
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-navy mt-4 mb-6 leading-tight">
                Adults ready for structure, support, and a real path forward.
              </h2>
              <ul className="space-y-3 mb-8">
                {[
                  "Adults 18+ with mental health diagnoses",
                  "Adults with developmental/intellectual disabilities and behavioral health needs",
                  "Individuals transitioning from inpatient or crisis settings",
                  "Adults in recovery seeking structured day support",
                  "People who need daily programming while living in the community",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-navy/70">
                    <span className="w-5 h-5 rounded-full bg-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-cyan text-xs">✓</span>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/why-us"
                className="inline-block border-b border-cyan/30 text-sm font-sans text-navy hover:text-cyan hover:border-cyan transition-colors pb-0.5"
              >
                Learn more about who we serve →
              </Link>
            </div>

            {/* Photo */}
            <div className="photo-card rounded-sm overflow-hidden aspect-[4/3] relative shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85"
                alt="Professional behavioral health staff member"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BLOCK ──────────────────────────────────────────────────────── */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold">
              Why Families Choose Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mt-3">
              A day program built on trust, expertise, and genuine care.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🏠",
                title: "Family-Founded",
                desc: "Jerry and Darlene White built this. They are present, accountable, and personally invested in every participant's success.",
              },
              {
                icon: "📋",
                title: "Individualized Plans",
                desc: "Every participant receives a custom support plan tailored to their specific diagnosis, goals, and capabilities.",
              },
              {
                icon: "🎓",
                title: "Certified Staff",
                desc: "All care staff are trained, certified, and meet Florida APD requirements — including background checks, CPR, and behavioral health training.",
              },
              {
                icon: "🌍",
                title: "Community-Rooted",
                desc: "Based in St. Petersburg with deep ties to Pinellas County's APD network, healthcare providers, and community organizations.",
              },
            ].map((item) => (
              <div key={item.title} className="card-lift bg-white border border-light-gray rounded-sm p-6">
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="font-sans font-bold text-navy text-base mb-2">{item.title}</h3>
                <p className="font-sans text-navy/50 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FULL-WIDTH PHOTO CTA ─────────────────────────────────────────────── */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=85"
            alt="Modern, welcoming program space"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/82" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ThriveAbilityLogoLarge className="mx-auto mb-10" />
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-5 max-w-2xl mx-auto leading-tight">
            Ready to take the first step toward thriving?
          </h2>
          <p className="font-sans text-white/60 mb-10 max-w-lg mx-auto text-base md:text-lg">
            We're accepting new participants now. Reach out today and we'll walk you through the process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="btn-glow bg-cyan text-navy font-bold font-sans text-sm px-10 py-4 rounded-sm hover:bg-cyan-light transition-colors tracking-wide"
            >
              Get Started Today
            </Link>
            <Link
              href="/contact"
              className="border border-white/30 text-white font-sans text-sm px-10 py-4 rounded-sm hover:bg-white/10 hover:border-white/50 transition-all tracking-wide"
            >
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
