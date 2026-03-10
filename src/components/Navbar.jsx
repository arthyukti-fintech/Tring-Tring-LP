import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TrinLogo from "../assets/TringTringWithouttext.png"
// ── colour tokens ─────────────────────────────────────────────────────────────
const C = {
  primary: "#E8603C",   // warm amber-orange
  primaryBg: "rgba(15,11,9,0.96)",
  textDark: "#1a1209",
  gold: "#f0a050",
};

// ── RollLink ──────────────────────────────────────────────────────────────────
function RollLink({ label, onClick, color, mounted }) {
  return (
    <button
      onClick={onClick}
      className={`rl ${mounted ? "in" : ""}`}
      style={{ color }}
    >
      <span className="rl-inner">
        <span className="rl-a">{label}</span>
        <span className="rl-b">{label}</span>
      </span>
      <span className="rl-dot" />
    </button>
  );
}

// ── Navbar ────────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const go = (id) => {
    setMenuOpen(false);
    if (id === "about") { navigate("/about-us"); return; }
    if (id === "restaurants") { navigate("/restaurant"); return; }
    if (id === "home") { navigate("/"); return; }
    if (id === "contact") { navigate("/contact-us"); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = ["home", "about", "restaurants", "contact"];

  /* pill geometry */
  const pillBg = scrolled
    ? "linear-gradient(135deg,rgba(20,13,8,0.72) 0%,rgba(30,17,9,0.68) 100%)"
    : "#FFF4CC";

  /* text colour flips based on scroll */
  const textColor = scrolled ? "#ffffff" : "#1a1209";
  const hamColor = scrolled ? "##ffffff" : "#1a1209";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');

        /* ── pill wrapper ── */
        .nav-pill {
          position: fixed;
          top: 18px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          width: min(calc(100% - 32px), 1300px);
          border-radius: 9999px;
          padding: 0 6px;
          transition:
            background 0.4s ease,
            box-shadow 0.4s ease,
            top 0.4s ease,
            backdrop-filter 0.4s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-pill.scrolled {
          top: 12px;
          box-shadow:
            0 0 0 1px rgba(232,96,60,0.25),
            0 8px 40px rgba(0,0,0,0.18),
            0 2px 8px rgba(232,96,60,0.1);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
        }

        /* entrance */
        .nav-pill { opacity:0; transform: translateX(-50%) translateY(-22px); }
        .nav-pill.in { animation: pillIn 0.7s cubic-bezier(0.34,1.2,0.64,1) forwards; }
        @keyframes pillIn {
          to { opacity:1; transform: translateX(-50%) translateY(0); }
        }

        /* border accent ring */
        .nav-pill::before {
          content:'';
          position:absolute; inset:0;
          border-radius:9999px;
          border:1px solid rgba(232,96,60,0.22);
          pointer-events:none;
          transition: border-color 0.4s;
        }
        .nav-pill.scrolled::before { border-color: rgba(232,96,60,0.35); }

        /* glow line bottom */
        .nav-pill::after {
          content:'';
          position:absolute;
          bottom:0; left:15%; right:15%; height:1px;
          background: linear-gradient(90deg, transparent, ${C.primary}88, transparent);
          border-radius:99px;
          opacity:0;
          transition: opacity 0.4s;
        }
        .nav-pill.scrolled::after { opacity:1; }

        /* inner row */
        .nav-inner {
          display:flex; align-items:center; justify-content:space-between;
          height:64px; padding:0 20px;
        }

        /* ── logo ── */
        .logo {
          display:flex; align-items:center; gap:10px; cursor:pointer;
          text-decoration:none; opacity:0;
        }
        .logo.in { animation: fadeSlideL 0.6s cubic-bezier(0.34,1.3,0.64,1) 0.2s forwards; }
        @keyframes fadeSlideL {
          from { opacity:0; transform:translateX(-20px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .logo-ring {
          width:60px; height:60px; border-radius:50%;
          border:2px solid ${C.primary};
          display:flex; align-items:center; justify-content:center;
          background: radial-gradient(circle, rgba(232,96,60,0.18), transparent);
          transition: transform 0.4s cubic-bezier(0.34,1.5,0.64,1), box-shadow 0.3s;
        }
        .logo-ring img { width:28px; height:28px; object-fit:contain; border-radius:50%; }
        .logo:hover .logo-ring {
          transform: rotate(10deg) scale(1.12);
          box-shadow: 0 0 18px ${C.primary}66;
        }

        .logo-name {
          font-family:'Syne',sans-serif;
          font-weight:800;
          font-size:1.1rem;
          letter-spacing:0.04em;
          transition: letter-spacing 0.3s ease, color 0.3s ease;
        }
        .logo:hover .logo-name { letter-spacing:0.09em; }

        /* ── desktop links ── */
        .desk-links {
          display:flex; align-items:center; gap:6px;
        }
        @media(max-width:768px){ .desk-links { display:none!important; } }

        .rl {
          position:relative;
          background:none; border:none; cursor:pointer;
          padding:8px 14px 10px;
          font-family:'DM Sans',sans-serif;
          font-size:0.88rem; font-weight:500;
          border-radius:9999px;
          transition: background 0.25s, color 0.3s ease;
          opacity:0;
        }
        .rl.in { animation: dropIn 0.45s cubic-bezier(0.34,1.3,0.64,1) forwards; }
        @keyframes dropIn {
          from { opacity:0; transform:translateY(-10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .rl:hover { background: rgba(232,96,60,0.12); }

        .rl-inner { display:block; height:1.15em; overflow:hidden; position:relative; }
        .rl-a, .rl-b {
          display:block;
          transition: transform 0.35s cubic-bezier(0.76,0,0.24,1);
        }
        .rl-b { position:absolute; top:100%; left:0; color:${C.primary}; }
        .rl:hover .rl-a { transform:translateY(-100%); }
        .rl:hover .rl-b { transform:translateY(-100%); }

        .rl-dot {
          position:absolute; bottom:5px; left:50%;
          transform:translateX(-50%) scale(0);
          width:4px; height:4px; border-radius:50%;
          background:${C.primary};
          transition: transform 0.3s cubic-bezier(0.34,1.5,0.64,1);
        }
        .rl:hover .rl-dot { transform:translateX(-50%) scale(1); }

        /* ── CTA button ── */
        .cta {
          position:relative; overflow:hidden;
          background: linear-gradient(135deg, ${C.primary}, #c94e28);
          color:#fff; border:none; cursor:pointer;
          padding:10px 22px; border-radius:9999px;
          font-family:'Syne',sans-serif; font-weight:700;
          font-size:0.82rem; letter-spacing:0.06em; text-transform:uppercase;
          box-shadow: 0 4px 18px rgba(232,96,60,0.38), inset 0 1px 0 rgba(255,255,255,0.2);
          transition: transform 0.25s cubic-bezier(0.34,1.5,0.64,1), box-shadow 0.25s;
          opacity:0;
        }
        .cta.in { animation: fadeSlideR 0.6s cubic-bezier(0.34,1.3,0.64,1) 0.3s forwards; }
        @keyframes fadeSlideR {
          from { opacity:0; transform:translateX(20px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .cta::after {
          content:'';
          position:absolute; top:-20%; left:-70%;
          width:45%; height:140%;
          background:rgba(255,255,255,0.22);
          transform:skewX(-20deg);
          opacity:0;
          transition: left 0.45s ease, opacity 0.45s;
        }
        .cta:hover { transform:translateY(-2px) scale(1.04); box-shadow:0 10px 28px rgba(232,96,60,0.5); }
        .cta:hover::after { left:130%; opacity:1; }
        .cta:active { transform:scale(0.97); }
        @media(max-width:768px){ .cta { display:none!important; } }

        /* ── hamburger ── */
        .ham {
          display:none;
          background:none; border:none; cursor:pointer;
          flex-direction:column; gap:5px; padding:6px;
          border-radius:50%;
          transition: background 0.2s;
          opacity:0;
        }
        .ham.in { animation: fadeSlideR 0.6s cubic-bezier(0.34,1.3,0.64,1) 0.3s forwards; }
        .ham:hover { background: rgba(232,96,60,0.15); }
        @media(max-width:768px){ .ham { display:flex!important; } }

        .hline {
          display:block; border-radius:2px;
          height:2px;
          transition: transform 0.35s cubic-bezier(0.76,0,0.24,1), opacity 0.25s, width 0.3s, background 0.3s ease;
        }
        .hline.t { width:22px; }
        .hline.m { width:16px; }
        .hline.b { width:20px; }
        .ham.open .hline.t { width:22px; transform:rotate(45deg) translate(5px,5px); }
        .ham.open .hline.m { opacity:0; width:0; }
        .ham.open .hline.b { width:22px; transform:rotate(-45deg) translate(5px,-5px); }

        /* ── mobile drawer ── */
        .drawer {
          display:grid; grid-template-rows:0fr;
          transition: grid-template-rows 0.45s cubic-bezier(0.76,0,0.24,1);
          border-radius:0 0 32px 32px;
          overflow:hidden;
        }
        .drawer.open { grid-template-rows:1fr; }
        .drawer-inner {
          overflow:hidden;
          display:flex; flex-direction:column; align-items:center;
          gap:4px; padding:0;
          transition: padding 0.3s;
        }
        .drawer.open .drawer-inner { padding:14px 0 20px; }

        @keyframes mIn {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        .mitem { opacity:0; }
        .drawer.open .mitem {
          animation: mIn 0.38s cubic-bezier(0.34,1.2,0.64,1) forwards;
        }
        .drawer.open .mitem:nth-child(1) { animation-delay:0.05s; }
        .drawer.open .mitem:nth-child(2) { animation-delay:0.11s; }
        .drawer.open .mitem:nth-child(3) { animation-delay:0.17s; }
        .drawer.open .mitem:nth-child(4) { animation-delay:0.23s; }
        .drawer.open .mitem:nth-child(5) { animation-delay:0.29s; }

        .mlink {
          background:none; border:none; cursor:pointer;
          width:100%; text-align:center;
          padding:10px 0; font-size:0.95rem; font-weight:500;
          color:#fff; font-family:'DM Sans',sans-serif;
          transition: color 0.2s, letter-spacing 0.3s;
        }
        .mlink:hover { color:${C.primary}; letter-spacing:0.05em; }

        .mcta {
          margin-top:8px;
          width:calc(100% - 48px);
        }
        .mcta.cta {
          display:block!important;
          text-align:center;
        }

        /* separator */
        .drawer-sep {
          width: calc(100% - 48px);
          height:1px;
          background: linear-gradient(90deg,transparent,rgba(232,96,60,0.3),transparent);
          margin-bottom:4px;
        }
      `}</style>

      {/* ── import logo ── NOTE: keep your actual import at top of real file */}
      <nav
        className={`nav-pill${scrolled ? " scrolled" : ""}${mounted ? " in" : ""}`}
        style={{ background: pillBg }}
      >
        <div className="nav-inner">

          {/* Logo */}
          <div
            className={`logo${mounted ? " in" : ""}`}
            onClick={() => go("home")}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === "Enter" && go("home")}
          >
            <div className="logo-ring">
              <img style={{ color: C.primary, fontWeight: 800, fontSize: "0.7rem" ,height:"60px",width:"60px"}} src={TrinLogo} alt="" />
              {/* <span style={{ color: C.primary, fontWeight: 800, fontSize: "0.7rem" }}>TT</span> */}
            </div>
            <span className="logo-name" style={{ color: textColor }}>Tring Tring</span> 
          </div>
          

          {/* Desktop links */}
          <div className="desk-links">
            {navItems.map((item, i) => (
              <div key={item} style={{ animationDelay: `${0.28 + i * 0.08}s` }}>
                <RollLink
                  label={item === "About  Us" ? "About Us" : item.charAt(0).toUpperCase() + item.slice(1)}
                  onClick={() => go(item)}
                  color={textColor}
                  mounted={mounted}
                />
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className={`cta${mounted ? " in" : ""}`}>
            ↓ Download App
          </button>

          {/* Hamburger */}
          <button
            className={`ham${menuOpen ? " open" : ""}${mounted ? " in" : ""}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <span className="hline t" style={{ background: hamColor }} />
            <span className="hline m" style={{ background: hamColor }} />
            <span className="hline b" style={{ background: hamColor }} />
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`drawer${menuOpen ? " open" : ""}`}>
          <div className="drawer-inner">
            <div className="drawer-sep" />
            {navItems.map(item => (
              <div key={item} className="mitem" style={{ width: "100%" }}>
                <button className="mlink" onClick={() => go(item)} style={{ color: textColor }}>
                  {item === "About  Us" ? "About Us" : item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </div>
            ))}
            <div className="mitem mcta">
              <button className="cta mcta" style={{ width: "100%" }}>
                ↓ Download App
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}