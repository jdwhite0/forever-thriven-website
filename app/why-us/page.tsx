import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Serve — Adults Ready for Structure, Support & Growth",
  description:
    "Thrive Ability serves adults 18+ with mental health diagnoses, behavioral health needs, developmental disabilities, and those transitioning from inpatient care.",
};

export default function WhoWeServePage() {
  return (
    <>
      {/* Header */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1920&q=85"
            alt="Adult in a peaceful, therapeutic setting"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/93 via-navy/80 to-navy/45" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
            Who We Serve
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white max-w-2xl leading-tight">
            For Adults Who Are Ready to Do More Than Just Get By.
          </h1>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
              The Gap We Fill
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-navy mb-6 leading-tight">
              Too many adults fall into the space between crisis and independence.
            </h2>
            <div className="font-sans text-navy/60 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                They're not in active crisis — they don't need inpatient care. But they're not yet fully independent either. They need structure during the day. They need a place to go that isn't just a holding space. They need programming that builds real skills, addresses real challenges, and connects them to real community.
              </p>
              <p>
                That's exactly what Thrive Ability was built for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve — populations */}
      <section className="bg-off-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-12">
            Who This Program Is For
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                number: "01",
                title: "Adults with Mental Health Diagnoses",
                desc: "Adults 18+ diagnosed with depression, anxiety disorders, bipolar disorder, schizophrenia spectrum disorders, PTSD, or other behavioral health conditions who need structured daily support.",
              },
              {
                number: "02",
                title: "Adults with Developmental Disabilities + Behavioral Health Needs",
                desc: "Individuals with intellectual or developmental disabilities who also have behavioral health components requiring targeted intervention and skill development.",
              },
              {
                number: "03",
                title: "Post-Inpatient Transition",
                desc: "Adults stepping down from inpatient psychiatric hospitalization or crisis stabilization who need a structured day program to support their transition back into community life.",
              },
              {
                number: "04",
                title: "Adults in Recovery",
                desc: "Individuals navigating recovery from substance use disorders who benefit from structured programming, peer support, and skill building during the day.",
              },
              {
                number: "05",
                title: "Adults Needing Daily Structure",
                desc: "People who are living in the community — with family or in supported housing — who need a meaningful, therapeutic, structured program during the day.",
              },
              {
                number: "06",
                title: "APD-Referred Adults",
                desc: "Individuals referred through the Florida Agency for Persons with Disabilities and their support coordinators, seeking behavioral health day programming in Hillsborough County.",
              },
            ].map((item) => (
              <div key={item.number} className="card-lift bg-white border border-light-gray rounded-sm p-7">
                <span className="font-sans font-black text-3xl text-cyan/15 block mb-3">
                  {item.number}
                </span>
                <h3 className="font-serif text-lg text-navy mb-3 leading-tight">{item.title}</h3>
                <p className="font-sans text-navy/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What a Day Looks Like */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-cyan font-sans font-semibold block mb-4">
                A Day in the Program
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-8 leading-tight">
                Structured, therapeutic, and human — every single day.
              </h2>
              <div className="space-y-5">
                {[
                  { time: "Morning", activity: "Arrival, check-in, and morning group orientation" },
                  { time: "Mid-Morning", activity: "Group therapy, skills training, or behavioral health sessions" },
                  { time: "Midday", activity: "Nutritious lunch and peer social time" },
                  { time: "Afternoon", activity: "Life skills, recreational therapy, or vocational programming" },
                  { time: "Late Afternoon", activity: "Wrap-up group, individual check-ins, departure" },
                ].map((item) => (
                  <div key={item.time} className="flex gap-5 items-start">
                    <div className="shrink-0 w-24">
                      <span className="font-sans text-xs text-cyan font-semibold uppercase tracking-wider">
                        {item.time}
                      </span>
                    </div>
                    <div className="flex-1 border-l border-white/10 pl-5">
                      <span className="font-sans text-sm text-white/70">{item.activity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="photo-card rounded-sm overflow-hidden aspect-[4/3] relative shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1200&q=85"
                alt="Participants engaged in a group program session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-sans text-white/60 text-sm italic">
                  "Every day is an opportunity to build something new."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Families & Coordinators */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-lift bg-gradient-to-br from-navy to-navy-mid rounded-sm p-8 md:p-10">
              <h3 className="font-serif text-2xl text-white mb-4">For Families</h3>
              <p className="font-sans text-white/60 text-sm leading-relaxed mb-6">
                You want your loved one in a safe, structured, and caring environment during the day. You want to know they're not just sitting somewhere — they're actively engaged, growing, and being treated with dignity. That's exactly what Thrive Ability provides.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Transparent communication with families",
                  "Regular progress updates on ISP goals",
                  "Welcoming open-door visit policy",
                  "Coordination with your loved one's full care team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-xs text-white/50">
                    <span className="text-cyan mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/get-started" className="text-sm font-sans text-cyan hover:text-cyan-light transition-colors">
                Start the intake process →
              </Link>
            </div>

            <div className="card-lift bg-off-white border border-light-gray rounded-sm p-8 md:p-10">
              <h3 className="font-serif text-2xl text-navy mb-4">For Support Coordinators</h3>
              <p className="font-sans text-navy/60 text-sm leading-relaxed mb-6">
                We actively build and maintain referral relationships with APD support coordinators throughout Hillsborough County and the greater Tampa Bay region. We understand your documentation needs, waiver requirements, and expectations for quality care.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Medicaid waiver and private pay accepted",
                  "Full APD compliance documentation provided",
                  "ISP development collaboration",
                  "Responsive communication with coordinators",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 font-sans text-xs text-navy/50">
                    <span className="text-cyan mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="text-sm font-sans text-navy hover:text-cyan transition-colors">
                Connect with us directly →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue to-cyan-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4 max-w-xl mx-auto">
            Think this might be the right fit?
          </h2>
          <p className="font-sans text-white/70 mb-8 max-w-md mx-auto text-sm">
            Let's have a conversation. No pressure — just an honest talk about whether Thrive Ability is right for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/get-started"
              className="btn-glow bg-white text-navy font-bold font-sans text-sm px-10 py-4 rounded-sm hover:bg-off-white transition-colors tracking-wide"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="border border-white/40 text-white font-sans text-sm px-10 py-4 rounded-sm hover:bg-white/10 transition-all tracking-wide"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
