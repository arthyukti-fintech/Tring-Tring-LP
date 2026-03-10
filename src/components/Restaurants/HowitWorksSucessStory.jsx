import React, { forwardRef } from "react";
import colors from "../../theme/colors";


const testimonials = [
  {
    name: "Maria's Pizzeria",
    location: "Chicago, IL",
    quote:
      "Since joining Trin Trin, we've seen a 30% increase in direct takeaway orders. No commissions means we can offer better prices to our loyal customers.",
    owner: "– Maria G.",
    image: "🍕",
  },
  {
    name: "Spice Garden",
    location: "Austin, TX",
    quote:
      "The setup was incredibly easy. Within a week, we got our first call. Customers love that they can talk to us directly – it builds trust.",
    owner: "– Raj P.",
    image: "🍛",
  },
  {
    name: "Burger & Fry",
    location: "Portland, OR",
    quote:
      "Finally a platform that puts restaurants first. No more worrying about tablet management or hidden fees. Highly recommend!",
    owner: "– Jamie L.",
    image: "🍔",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Sign up",
    description: "Fill out the simple form below – it takes less than 5 minutes.",
    icon: "📝",
  },
  {
    step: "2",
    title: "Get verified",
    description: "Our team quickly reviews and verifies your restaurant details.",
    icon: "✅",
  },
  {
    step: "3",
    title: "Activate your page",
    description: "We create a beautiful, custom page for your restaurant.",
    icon: "🚀",
  },
  {
    step: "4",
    title: "Start receiving calls",
    description: "Customers find you and call directly – no app needed.",
    icon: "📞",
  },
];

const HowitWorksSucessStory = forwardRef(({ howRef, storyRef }) => {
  return (
    <div>

      {/* HOW IT WORKS */}
      <section
        ref={howRef}
        className="px-6 md:px-12 lg:px-16 py-16 md:py-24 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="section-title text-3xl md:text-4xl mb-4 text-center">
            How It Works
          </h2>

          <p className="section-sub text-center mb-12 max-w-2xl mx-auto">
            Getting started with Trin Trin is quick and easy. Follow these simple steps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="glass-card p-6 rounded-xl text-center">

                <div className="step-number mx-auto">{step.step}</div>

                <div className="text-4xl mb-2">{step.icon}</div>

                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: colors.primary }}
                >
                  {step.title}
                </h3>

                <p className="section-sub text-sm">{step.description}</p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section
        ref={storyRef}
        className="px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-black/20 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto">

          <h2 className="section-title text-3xl md:text-4xl mb-4 text-center">
            Success Stories
          </h2>

          <p className="section-sub text-center mb-12 max-w-2xl mx-auto">
            Hear from restaurant owners who have grown their business with Trin Trin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card p-6 rounded-xl">

                <div className="flex items-center mb-4">

                  <span className="text-4xl mr-3">{testimonial.image}</span>

                  <div>
                    <h3
                      className="font-semibold text-lg"
                      style={{ color: "black" }}
                    >
                      {testimonial.name}
                    </h3>

                    <p className="text-xs text-gray-800">
                      {testimonial.location}
                    </p>
                  </div>

                </div>

                <p className="section-sub text-sm italic mb-3">
                  "{testimonial.quote}"
                </p>

                <p className="text-xs text-gray-600">
                  {testimonial.owner}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
});

export default HowitWorksSucessStory;