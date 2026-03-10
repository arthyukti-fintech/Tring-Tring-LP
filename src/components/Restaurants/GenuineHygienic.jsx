import React, { forwardRef } from "react";

const trustItems = [
  {
    title: "100% Genuine Listings",
    description: "We verify every restaurant to ensure authenticity.",
    icon: "✅",
  },
  {
    title: "Hygiene First",
    description: "We encourage and highlight best hygiene practices.",
    icon: "🧼",
  },
  {
    title: "Direct Feedback",
    description: "Customers can share feedback directly with you.",
    icon: "💬",
  },
  {
    title: "Local Focus",
    description: "We prioritize local, independent restaurants.",
    icon: "🏡",
  },
];

const GenuineHygienic = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-black/20 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-3xl md:text-4xl mb-4 text-center">
          Genuine. Hygienic. Trusted.
        </h2>

        <p className="section-sub text-center mb-12 max-w-2xl mx-auto">
          We take authenticity and cleanliness seriously. Every restaurant on
          Trin Trin is verified and encouraged to maintain the highest standards.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-xl text-center hover:shadow-xl transition-all"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3
                className="text-xl font-semibold mb-2"
                style={{ color: "black" }}
              >
                {item.title}
              </h3>

              <p className="section-sub text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default GenuineHygienic;