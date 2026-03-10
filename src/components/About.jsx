import { useEffect, useRef } from "react";
import colors from "../theme/colors";
import { Link } from "react-router-dom";
import KeertiPrasad from '../assets/KeertiPrasad.jpeg'
import ManjunathJ from '../assets/ManjunathJ.png'
import Priyanshu from '../assets/Priyanshu.png'
import Arman from '../assets/Arman.png'
// Team member data (replace images with your own)
const teamMembers = [
  {
    name: "Keerthi Prasad",
    role: "Founder & CEO",
    bio: "Founder of Tring Tring with a vision to simplify food ordering by connecting customers directly with restaurants through a simple call.",
    image: KeertiPrasad,
  },
  {
    name: "Manjunath Jagadish",
    role: "Co-Founder",
    bio: "Tech entrepreneur with a love for building simple, elegant solutions.",
    image: ManjunathJ,
  },
  {
    name: "Arman Ali Khan",
    role: "Senior Software Engineer & CTO",
    bio: "Ensuring every call connects smoothly and every order is perfect.",
    image: Arman,
  },
  {
    name: "Priyanshu Dwivedi",
    role: "Software Engineer",
    bio: "Building relationships with restaurants and users alike.",
    image: Priyanshu,
  },
];

// Values data
const values = [
  {
    title: "Simplicity",
    description: "We cut the clutter. One call is all it takes.",
    icon: "📞",
  },
  {
    title: "Connection",
    description: "We bring people closer to the food they love.",
    icon: "❤️",
  },
  {
    title: "Community",
    description: "Supporting local restaurants and their stories.",
    icon: "🏘️",
  },
  {
    title: "Reliability",
    description: "Every order matters, every time.",
    icon: "✓",
  },
];

function About() {
  // Simple scroll animation refs (optional)
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@400;500&display=swap');

        .about-hero {
          background: radial-gradient(circle at 30% 40%, ${colors.primary}20, transparent 40%),
                      linear-gradient(145deg, #0c0a0a 0%, #1a120d 30%, #24140c 70%, #0f0b08 100%);
        }

        .glass-card {
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .glass-card:hover {
          border-color: ${colors.primary}40;
          transform: translateY(-4px);
        }

        .section-title {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          color: black;
        }
            .section-about {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          color: white;
        }
        .section-sub {
          font-family: 'Outfit', sans-serif;
          color: grey;
        }

        .stat-number {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          color: ${colors.primary};
        }

       .team-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: top;
  border-radius: 50%;
  border: 3px solid ${colors.primary}30;
}
         
        .team-card:hover .team-img {
          border-color: ${colors.primary};
        }

        .zigzag-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          pointer-events: none;
        }
      `}</style>

      {/* Main container with dark background */}
      <div style={{ backgroundColor: colors.primaryBg, color: "white" }}>

        {/* ===== HERO SECTION ===== */}
        <section className="about-hero relative overflow-hidden px-6 md:px-12 lg:px-16 py-24 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center">

          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="section-about text-4xl md:text-5xl lg:text-6xl mb-4">
              About <span style={{ color: colors.primary }}>Tring Tring</span>
            </h1>

            <p className="section-sub text-lg md:text-xl max-w-2xl mx-auto">
              We believe ordering food should be simple, personal, and connected.
              No apps, no hassle — just you and your favourite restaurant.
            </p>
          </div>

          {/* Zigzag wave at bottom */}
          <div className="zigzag-bottom">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%", height: "auto" }}>
              <path
                d="M0,40 L80,10 L160,50 L240,20 L320,60 L400,30 L480,70 L560,40 L640,75 L720,45 L800,70 L880,35 L960,60 L1040,25 L1120,50 L1200,20 L1280,45 L1360,15 L1440,40 L1440,80 L0,80 Z"
                fill={colors.primaryBg}
                opacity="0.2"
              />
              <path
                d="M0,50 L80,20 L160,60 L240,30 L320,70 L400,40 L480,80 L560,50 L640,80 L720,50 L800,75 L880,40 L960,65 L1040,30 L1120,55 L1200,25 L1280,50 L1360,20 L1440,45 L1440,80 L0,80 Z"
                fill={colors.primaryBg}
                opacity="0.3"
              />
            </svg>
          </div>

        </section>

        {/* ===== OUR STORY ===== */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="px-6 md:px-12 lg:px-16 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-3xl md:text-4xl mb-6 text-center">
              Our Story
            </h2>
            <div className="space-y-4 text-lg section-sub leading-relaxed">
              <p>
                Tring Tring was born from a simple observation: ordering food had become
                overly complicated. Apps filled with endless menus, hidden fees, and
                impersonal transactions took away the simple joy of ordering from your
                favorite local restaurant. We missed the days when you could just call
                your neighborhood restaurant, speak to a real person, and get your meal
                without unnecessary steps.
              </p>

              <p>
                In 2025, entrepreneur Keerthi Prasad, along with co-founder Manjunath
                Jagadish, set out to build a different kind of platform. Their vision was
                simple — bring the human connection back to food ordering. Tring Tring
                (meaning "ring ring" in many languages) allows customers to call
                restaurants directly. No downloads, no accounts, and no middlemen —
                just a simple and reliable connection.
              </p>

              <p>
                Today, Tring Tring is growing into a community of restaurants and customers
                who value simplicity, trust, and genuine human interaction. We’re not just
                building a service — we’re bringing back the joy of real connections in
                the way people order food.
              </p>
            </div>
          </div>
        </section>

        {/* ===== OUR VALUES ===== */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-black/20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">
              What We Stand For
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-xl text-center hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'black' }}>
                    {value.title}
                  </h3>
                  <p className="section-sub text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== MEET THE TEAM ===== */}
        <section
          ref={(el) => (sectionRefs.current[2] = el)}
          className="px-6 md:px-12 lg:px-16 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-3xl md:text-4xl mb-4 text-center">
              Meet the Team
            </h2>
            <p className="section-sub text-center mb-12 max-w-2xl mx-auto">
              We’re a small but passionate group dedicated to making food ordering
              simple again.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="team-card glass-card p-6 rounded-xl text-center hover:shadow-xl transition-all"
                >
                  <div>

                  </div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="team-img mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold" style={{ color: colors.primary }}>
                    {member.name}
                  </h3>
                  <p className="text-sm uppercase tracking-wider mt-1 text-black/60">
                    {member.role}
                  </p>
                  <p className="section-sub text-sm mt-3">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== IMPACT STATS ===== */}
        {/* <section
          ref={(el) => (sectionRefs.current[3] = el)}
          className="px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-black/20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="stat-number text-4xl md:text-5xl">500+</div>
                <p className="section-sub mt-2">Restaurant Partners</p>
              </div>
              <div>
                <div className="stat-number text-4xl md:text-5xl">10K+</div>
                <p className="section-sub mt-2">Happy Users</p>
              </div>
              <div>
                <div className="stat-number text-4xl md:text-5xl">4.9★</div>
                <p className="section-sub mt-2">App Store Rating</p>
              </div>
              <div>
                <div className="stat-number text-4xl md:text-5xl">30+</div>
                <p className="section-sub mt-2">Cities Covered</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* ===== JOIN US CTA ===== */}
        <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="section-title text-3xl md:text-4xl mb-4">
              Be Part of the Story
            </h2>
            <p className="section-sub text-lg mb-8">
              Whether you're a restaurant owner or a food lover, we’d love to have
              you on this journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/restaurant">
                <button
                  className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                  style={{
                    backgroundColor: colors.primary,
                    color: "white",
                    boxShadow: `0 10px 20px -5px ${colors.primary}80`,
                  }}
                >
                  Join as Restaurant
                </button>
              </Link>
              <button
                className="px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105"
                style={{
                  backgroundColor: "transparent",
                  border: `2px solid ${colors.primary}`,
                  color: colors.primary,
                }}
              >
                Download the App
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;