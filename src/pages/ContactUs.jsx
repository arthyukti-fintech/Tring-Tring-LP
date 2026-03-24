import React, { useEffect, useRef, useState } from "react";
import colors from "../theme/colors";
import FAQ from "../components/FAQ";
import { sendMessage } from "../redux/slices/messageSlice"
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const faq = [
  {
    question: "How quickly do you respond to inquiries?",
    answer: "We aim to respond within 24 hours on business days. For urgent matters, please call us directly.",
  },
  {
    question: "Do you offer support for restaurants?",
    answer: "Absolutely! We have a dedicated team to help restaurants onboard and answer any operational questions.",
  },
  {
    question: "Can I visit your office without an appointment?",
    answer: "While walk-ins are welcome, we recommend scheduling an appointment to ensure the right person is available.",
  },
  {
    question: "Is Tring Tring available in my city?",
    answer: "We're currently in Bangalore and expanding rapidly.",
  },
]
function ContactUs() {
  const sectionRefs = useRef([]);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { success, error, message } = useSelector((state) => state.message);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(sendMessage(formData));
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  };


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

        .contact-hero {
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
          color: white;
        }
           .section-title-heading {
          font-family: 'Bricolage Grotesque', sans-serif;
          font-weight: 800;
          color: black;
        }
        .section-sub {
          font-family: 'Outfit', sans-serif;
          color: black;
        }
          .section-getintouch-para {
          font-family: 'Outfit', sans-serif;
          color: white;
        }

        .form-input, .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          background: rgba(255,255,255,0.03);
          border: 1px solid black;
          border-radius: 8px;
          color: black;
          font-family: 'Outfit', sans-serif;
          transition: border-color 0.3s ease;
        }
        .form-input:focus, .form-textarea:focus {
          outline: none;
          border-color: ${colors.primary};
        }
        .form-input::placeholder, .form-textarea::placeholder {
          color:black;
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

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          color: white;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background: ${colors.primary};
          border-color: ${colors.primary};
          transform: translateY(-3px);
        }

        .faq-item {
          border-bottom: 1px solid rgba(255,255,255,0.1);
          padding: 1rem 0;
        }
        .faq-question {
          font-weight: 600;
          color: black;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .faq-answer {
          color: grey;
          margin-top: 0.5rem;
          font-size: 0.95rem;
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

      <div style={{ backgroundColor: colors.primaryBg, color: "white" }}>
        {/* ===== HERO SECTION ===== */}
        <section className="contact-hero  relative overflow-hidden px-6 md:px-12 lg:px-16 py-24 md:py-32 min-h-[70vh] md:min-h-[80vh] flex items-center ">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="section-title text-4xl md:text-5xl lg:text-6xl mb-4">
              Get in <span style={{ color: colors.primary }}>Touch</span>
            </h1>
            <p className="section-getintouch-para text-lg md:text-xl max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
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

        {/* ===== CONTACT INFO CARDS ===== */}
        <section
          ref={(el) => (sectionRefs.current[0] = el)}
          className="px-6 md:px-12 lg:px-16 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Address */}
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                  Visit Us
                </h3>
                <p className="section-sub text-sm">
                  150 19th Main road Rajajinagar 2nd Block<br />
                  Bangalore , 560010
                </p>
              </div>

              {/* Phone */}
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">📞</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                  Call Us
                </h3>
                <p className="section-sub text-sm">
                  +91 9663311116<br />
                  Mon-Fri 9am-6pm
                </p>
              </div>

              {/* Email */}
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">✉️</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                  Email Us
                </h3>
                <p className="section-sub text-sm">
                  support@trintrin.com
                </p>
              </div>

              {/* Hours */}
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
                  Business Hours
                </h3>
                <p className="section-sub text-sm">
                  Mon-Fri: 9am - 6pm<br />
                  Sat: WeekOff
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MAP & FORM SIDE BY SIDE ===== */}
        <section
          ref={(el) => (sectionRefs.current[1] = el)}
          className="px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-black/20 opacity-0 translate-y-10 transition-all duration-700"
        >
          <div className="max-w-7xl mx-auto">

            <div className="flex justify-center">

              <div className="w-full max-w-xl">
                <h2 className="section-title-heading text-3xl mb-6 text-center">
                  Send a Message
                </h2>

                <form
                  className="glass-card p-8 rounded-xl space-y-5"
                  onSubmit={handleSubmit}
                >

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black/80">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="form-input"
                      required
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black/80">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="I have a question about..."
                      className="form-input"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-black/80">
                      Message *
                    </label>
                    <textarea
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className="form-textarea"
                      required
                    ></textarea>
                  </div>

                  {/* Submit */}
                  <div className="text-center">
                    <button type="submit" className="submit-btn">
                      Send Message
                    </button>
                  </div>

                </form>
              </div>

            </div>

          </div>
        </section>

        {/* ===== FAQ SECTION (optional but adds length) ===== */}

        <FAQ ref={(el) => (sectionRefs.current[2] = el)} faq={faq} />

        {/* ===== SOCIAL MEDIA LINKS ===== */}
        {/* <section className="px-6 md:px-12 lg:px-16 py-12 text-center border-t border-white/10">
          <h3 className="section-title-heading text-2xl mb-4">Follow Us</h3>
          <div className="flex justify-center gap-4">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">🔗</a>
          </div>
          <p className="section-sub text-sm mt-6">
            © {new Date().getFullYear()} Trin Trin. All rights reserved.
          </p>
        </section> */}
      </div>
    </>
  );
}

export default ContactUs;