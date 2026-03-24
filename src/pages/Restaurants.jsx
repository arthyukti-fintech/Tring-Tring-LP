import { useEffect, useRef } from "react";
import colors from "../theme/colors";
import GenuineHygienic from "../components/Restaurants/GenuineHygienic";
import HowitWorksSucessStory from "../components/Restaurants/HowitWorksSucessStory";
import Readytojoinform from "../components/Restaurants/Readytojoinform";
import FAQ from "../components/FAQ";

// Benefits data (existing)
const benefits = [
  {
    title: "Zero Commission",
    description: "Keep 100% of your earnings. No hidden fees, no middlemen.",
    icon: "💰",
  },
  {
    title: "Direct Calls",
    description: "Customers call you directly – you build the relationship.",
    icon: "📞",
  },
  {
    title: "More Customers",
    description: "Reach hungry customers who prefer a simple, personal touch.",
    icon: "📈",
  },
  {
    title: "No App Needed",
    description: "You don't need to manage any tablet or device – just your phone.",
    icon: "📱",
  },
];




// NEW: Frequently Asked Questions
const faqs = [
  {
    question: "Is it really free to join?",
    answer:
      "Absolutely! There are no setup fees, monthly charges, or commissions. You only pay a small, transparent fee per successful call if you choose our premium listing – but the basic listing is completely free.",
  },
  {
    question: "How do customers find my restaurant?",
    answer:
      "Your restaurant will be listed on the Tring Tring platform, which is growing rapidly among diners who prefer direct, personal connections. You'll also get a unique page you can share on your own social media.",
  },
  {
    question: "Do I need any special equipment?",
    answer:
      "No. Just use your existing phone. When a customer finds you on Tring Tring, they call your restaurant's phone number directly. No extra devices or apps required.",
  },
  {
    question: "How do you verify hygiene practices?",
    answer:
      "We encourage all partner restaurants to share their hygiene certifications and practices. We also collect customer feedback and may conduct spot checks to maintain high standards.",
  },
  {
    question: "What if I need help or have questions?",
    answer:
      "Our support team is available via email and chat. We're here to help you succeed and will guide you through every step.",
  },
];

function Restaurants() {
  // Increase the number of refs to cover all sections
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

  const scrollToForm = () => {
  const formSection = sectionRefs.current[4]; 
  if (formSection) {
    formSection.scrollIntoView({
      behavior: "smooth",
      block: "start", 
    });
  }
};

  // Helper to assign refs sequentially
  const setRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@400;500&display=swap');

        .restaurants-hero {
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
        .section-partner {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          color: white;
        }
        .section-sub {
          font-family: 'Outfit', sans-serif;
          color: grey;
        }

        .form-input {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid black;
          border-radius: 8px;
          color: black;
          font-family: 'Outfit', sans-serif;
          transition: border-color 0.3s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: ${colors.primary};
        }
        .form-input::placeholder {
          color: grey;
        }

        .submit-btn {
          background-color: ${colors.primary};
          color: white;
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
        }
        .submit-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 20px -5px ${colors.primary}80;
        }

        .zigzag-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          line-height: 0;
          pointer-events: none;
        }

        /* Step indicator for How It Works */
        .step-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          background-color: ${colors.primary}20;
          color: ${colors.primary};
          border-radius: 9999px;
          font-weight: bold;
          font-size: 1.25rem;
          margin-bottom: 0.75rem;
        }

        /* Testimonial card tweak */
        .testimonial-card {
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.05);
          transition: transform 0.3s ease;
        }
        .testimonial-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div style={{ backgroundColor: colors.primaryBg, color: "white" }}>

        {/* ===== HERO SECTION ===== (existing, unchanged) */}
        <section className="restaurants-hero relative overflow-hidden px-6 md:px-12 lg:px-16 py-24 md:py-32 min-h-[75vh] flex items-center">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">

            {/* LEFT CONTENT */}
            <div>

              <h1 className="section-partner text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                More Orders. <br />
                Less <span style={{ color: colors.primary }}>Complexity.</span>
              </h1>

              <p className="section-sub text-lg md:text-xl mb-8 max-w-xl">
                Join <span style={{ color: colors.primary }}>Tring Tring</span> and connect
                directly with nearby customers who prefer to talk before ordering.
              </p>

              {/* BENEFITS */}
              <div className="space-y-4 mb-10">

                <div className="flex items-start gap-3">
                  <span style={{ color: colors.primary }} className="text-xl">✔</span>
                  <p className="section-sub">No complicated menu setup</p>
                </div>

                <div className="flex items-start gap-3">
                  <span style={{ color: colors.primary }} className="text-xl">✔</span>
                  <p className="section-sub">Direct communication with customers</p>
                </div>

                <div className="flex items-start gap-3">
                  <span style={{ color: colors.primary }} className="text-xl">✔</span>
                  <p className="section-sub">Faster order confirmation</p>
                </div>

                <div className="flex items-start gap-3">
                  <span style={{ color: colors.primary }} className="text-xl">✔</span>
                  <p className="section-sub">More local visibility</p>
                </div>

              </div>

              {/* CTA BUTTON */}
              <button className="submit-btn" onClick={scrollToForm}>
                Join as a Restaurant
              </button>

            </div>

            {/* RIGHT SIDE VISUAL */}
            <div className="hidden lg:flex justify-center">
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "20px",
                  padding: "40px",
                  textAlign: "center"
                }}
              >
                <div style={{ fontSize: "70px" }}>📞</div>
                <p className="section-sub mt-4">
                  Customers call you directly to place orders.
                </p>
              </div>
            </div>

          </div>

          {/* ZIGZAG BOTTOM */}
          <div className="zigzag-bottom">
            <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: "100%" }}>
              <path
                d="M0,40 L80,10 L160,50 L240,20 L320,60 L400,30 L480,70 L560,40 L640,75 L720,45 L800,70 L880,35 L960,60 L1040,25 L1120,50 L1200,20 L1280,45 L1360,15 L1440,40 L1440,80 L0,80 Z"
                fill={colors.primaryBg}
                opacity="0.25"
              />
            </svg>
          </div>

        </section>

        {/* ===== WHY JOIN US? ===== (existing, now ref index 0) */}
        <section
          ref={setRef(0)}
          className="px-6 md:px-12 lg:px-16 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-3xl md:text-4xl mb-12 text-center">
              Why Restaurants ❤️ Tring Tring
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-xl text-center hover:shadow-xl transition-all"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: colors.primary }}>
                    {benefit.title}
                  </h3>
                  <p className="section-sub text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== GENUINE & HYGIENE ===== (existing, now ref index 1) */}
        <GenuineHygienic ref={setRef(1)} />

        {/* ===== NEW: HOW IT WORKS ===== (ref index 2) */}
        <HowitWorksSucessStory
          howRef={setRef(2)}
          storyRef={setRef(3)}
        />

        {/* ===== JOIN FORM ===== (existing, now ref index 4) */}
        <Readytojoinform ref={setRef(4)} />

        {/* ===== NEW: FREQUENTLY ASKED QUESTIONS ===== (ref index 5) */}
        <FAQ ref={setRef(5)} faq={faqs} />
      </div>
    </>
  );
}

export default Restaurants;