import { useState, useEffect, useRef } from "react";
import colors from "../theme/colors";
import logo from "../assets/trintrinlandingpagelogo-removebg-preview.png"; // adjust path if needed
// Single high-quality food image for parallax background
import dishes from "../assets/dishes.png"; // adjust path if needed
const FOOD_BG_IMAGE = {
  src: dishes,
  speed: 1,
};

function Hero() {
  const [mounted, setMounted] = useState(false);
  const bgRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrollY * FOOD_BG_IMAGE.speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial call

    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Outfit:wght@400;500&display=swap');

        /* Entrance animations (unchanged) */
        @keyframes slideFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0);     }
        }
        @keyframes slideFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0);    }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hero-text-wrap { opacity: 0; }
        .hero-text-wrap.mounted {
          animation: slideFromLeft 0.75s cubic-bezier(0.34, 1.2, 0.64, 1) 0.15s forwards;
        }
        .hero-img-wrap { opacity: 0; }
        .hero-img-wrap.mounted {
          animation: slideFromRight 0.75s cubic-bezier(0.34, 1.2, 0.64, 1) 0.25s forwards;
        }
        .hero-p { opacity: 0; }
        .hero-p.mounted {
          animation: fadeUp 0.6s ease 0.55s forwards;
        }
        .hero-btn { opacity: 0; }
        .hero-btn.mounted {
          animation: fadeUp 0.6s cubic-bezier(0.34, 1.5, 0.64, 1) 0.72s forwards;
        }

        /* Button shimmer */
        @keyframes shimmer {
          from { left: -70%; }
          to   { left: 130%; }
        }
        .order-btn {
          position: relative;
          overflow: hidden;
          transition: transform 0.25s cubic-bezier(0.34, 1.5, 0.64, 1),
                      box-shadow 0.25s ease;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          letter-spacing: 0.02em;
          background-color: ${colors.primary};
          color: white;
          border: none;
          padding: 14px 36px;
          border-radius: 10px;
          font-size: 1rem;
          cursor: pointer;
        }
        .order-btn::after {
          content: '';
          position: absolute;
          top: -20%;
          left: -70%;
          width: 45%;
          height: 140%;
          background: rgba(255,255,255,0.25);
          transform: skewX(-18deg);
          opacity: 0;
        }
        .order-btn:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 32px rgba(0,0,0,0.4);
          background-color: ${colors.primaryDark};
        }
        .order-btn:hover::after {
          opacity: 1;
          animation: shimmer 0.5s ease forwards;
        }
        .order-btn:active { transform: scale(0.97); }

        /* Image card glow */
        @keyframes glowPulse {
          0%,100% { box-shadow: 0 0 0px 0px ${colors.primary}30; }
          50%      { box-shadow: 0 0 40px 12px ${colors.primary}25; }
        }
        .hero-img-card {
          animation: glowPulse 4s ease-in-out infinite;
          transition: transform 0.4s cubic-bezier(0.34, 1.3, 0.64, 1);
        }
        .hero-img-card:hover {
          transform: scale(1.03) rotate(-1deg);
        }

        /* Headings */
        .hero-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: white;
        }
        .hero-sub {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          line-height: 1.65;
          color: rgba(255,255,255,0.75);
        }

        /* Badge animation */
        @keyframes badgeIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.9); }
          to   { opacity: 1; transform: translateY(0)     scale(1);   }
        }
        .hero-badge {
          opacity: 0;
        }
        .hero-badge.mounted {
          animation: badgeIn 0.5s cubic-bezier(0.34, 1.5, 0.64, 1) 0.4s forwards;
        }

        /* Stat chips */
        .stat-chip {
          opacity: 0;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 10px 20px;
          backdrop-filter: blur(8px);
        }
        .stat-chip.mounted {
          animation: fadeUp 0.5s ease forwards;
        }
        .stat-chip.mounted:nth-child(1) { animation-delay: 0.85s; }
        .stat-chip.mounted:nth-child(2) { animation-delay: 0.98s; }

        /* Parallax background */
        .parallax-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 120%;
          background-image: url(${FOOD_BG_IMAGE.src});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          will-change: transform;
          z-index: 1;
          opacity: 0.5;
          filter: brightness(0.7) saturate(1.2);
          pointer-events: none;
        }

        /* Dark overlay to ensure text readability */
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(145deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* Content should be above overlays */
        .hero-content {
          position: relative;
          z-index: 3;
        }

        /* Subtle noise overlay */
        .hero-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E");
          pointer-events: none;
          opacity: 0.3;
          mix-blend-mode: overlay;
          z-index: 4;
        }
      `}</style>

      <section
        id="home"
        className="hero-section"
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "clamp(5rem, 10vw, 7rem) clamp(1.5rem, 4vw, 4rem) clamp(4rem, 8vw, 6rem)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Parallax background image */}
        <div ref={bgRef} className="parallax-bg" />

        {/* Dark overlay */}
        <div className="hero-overlay" />

        {/* Content row */}
        <div
          className="hero-content"
          style={{
            maxWidth: "80rem",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            flexWrap: "wrap",
          }}
        >
          {/* Left: Text */}
          <div
            className={`hero-text-wrap${mounted ? " mounted" : ""}`}
            style={{ flex: "1 1 380px", maxWidth: "520px" }}
          >
            {/* Badge */}
            <div
              className={`hero-badge${mounted ? " mounted" : ""}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: `${colors.primary}15`,
                border: `1px solid ${colors.primary}30`,
                borderRadius: "999px",
                padding: "6px 16px",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  backgroundColor: colors.primary,
                  boxShadow: `0 0 10px ${colors.primary}`,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  color: colors.primary,
                  fontSize: "0.78rem",
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Now Available
              </span>
            </div>

            <h1
              className="hero-heading"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", margin: 0 }}
            >
              Real Food.{" "} <br />
              Real Price.
              <br />
              <span
                style={{
                  color: colors.primary,
                  display: "inline-block",
                  position: "relative",
                }}
              >
                Just Call.
                <svg
                  viewBox="0 0 140 10"
                  style={{
                    position: "absolute",
                    bottom: "-6px",
                    left: 0,
                    width: "100%",
                    height: "10px",
                    overflow: "visible",
                  }}
                >
                  <path
                    d="M2,6 Q20,1 38,6 Q56,11 74,6 Q92,1 110,6 Q128,11 138,6"
                    fill="none"
                    stroke={colors.primary}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                </svg>
              </span>
            </h1>

            <p
              className={`hero-p hero-sub${mounted ? " mounted" : ""}`}
              style={{
                marginTop: "1.5rem",
                maxWidth: "520px",
              }}
            >
              Tring Tring connects you directly with restaurants so you can order food and customize your meal exactly the way you like. Simply talk to the restaurant, confirm your order on the call, receive the final bill, pay securely through the app, and get your food delivered safely.
            </p>
            <button className={`order-btn hero-btn${mounted ? " mounted" : ""}`}>
              Order Now
            </button>

            {/* Stat chips */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "2rem",
                flexWrap: "wrap",
              }}
            >
              {[
                { val: "500+", label: "Restaurants" },
                { val: "4.9★", label: "App Rating" },
              ].map((s, i) => (
                <div
                  key={s.val}
                  className={`stat-chip${mounted ? " mounted" : ""}`}
                >
                  <div
                    style={{
                      color: colors.primary,
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                    }}
                  >
                    {s.val}
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: "0.75rem",
                      marginTop: "2px",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image card with logo */}
          <div
            className={`hero-img-wrap${mounted ? " mounted" : ""}`}
            style={{ flex: "1 1 320px", display: "flex", justifyContent: "center" }}
          >
            <div
              className="hero-img-card"
              style={{
                width: "clamp(280px, 38vw, 480px)",
                height: "clamp(280px, 38vw, 420px)",
                backgroundColor: "rgba(255,255,255,0.02)",
                border: `1px solid rgba(255,255,255,0.08)`,
                borderRadius: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Gradient corner accents */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "120px",
                  height: "120px",
                  background: `radial-gradient(circle at top right, ${colors.primary}30, transparent 70%)`,
                  borderRadius: "0 24px 0 0",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "120px",
                  height: "120px",
                  background: `radial-gradient(circle at bottom left, ${colors.primary}20, transparent 70%)`,
                  borderRadius: "0 0 0 24px",
                  pointerEvents: "none",
                }}
              />

              {/* Logo image with improved styling */}
              <img
                src={logo}
                alt="Trin Trin Logo"
                style={{
                  width: "70%",
                  height: "70%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
                  opacity: 0.9,
                  transition: "transform 0.3s ease, filter 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.filter =
                    "drop-shadow(0 0 30px rgba(255,255,255,0.5))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.filter =
                    "drop-shadow(0 0 20px rgba(255,255,255,0.3))";
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;