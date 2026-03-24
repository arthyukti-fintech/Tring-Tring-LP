import { useState, useEffect, useRef } from "react";
import colors from "../theme/colors";
import dishes from "../../src/assets/cardDishes.png";
import customDish from "../assets/customdish.png";
import GetTheBill from "../assets/GetTheBill.png";
import Paysecurely from "../assets/Paysecurely.png";
import delivery from "../assets/delivery.png";

function HowItWorks() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // 👈 trigger earlier
        rootMargin: "100px", // 👈 preload before visible
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      title: "Call the Restaurant",
      img: dishes,
      text: "Tap the call button and speak directly with the restaurant to place your order.",
    },
    {
      title: "Customize Your Food",
      img: customDish,
      text: "Add toppings, remove ingredients, and personalize your meal exactly how you like it.",
    },
    {
      title: "Get the Bill",
      img: GetTheBill,
      text: "The restaurant confirms your order and sends the final bill directly to the app.",
    },
    {
      title: "Pay Securely",
      img: Paysecurely,
      text: "Pay securely using UPI, cards, or wallets with full payment protection.",
    },
    {
      title: "Delivery or Pickup",
      img: delivery,
      text: "Choose takeaway, restaurant delivery, or Tring Tring delivery partner.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="px-6 md:px-12 lg:px-16 py-20"
      style={{ backgroundColor: colors.primaryBg }}
    >
      {/* Heading */}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-14 transition-all duration-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
        style={{ color: colors.textDark }}
      >
        How Tring Tring Works
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: `${index * 100}ms`, // 👈 stagger animation
            }}
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={step.img}
                loading="lazy" // 👈 performance boost
                alt={step.title}
                className="h-[180px] w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="pt-6 pb-6 px-6">
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: colors.textDark }}
              >
                {step.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.gray }}
              >
                {step.text}
              </p>
            </div>

            {/* Bottom Gradient Line */}
            <div
              className="h-1 w-0 group-hover:w-full transition-all duration-300"
              style={{
                background: `linear-gradient(90deg, ${colors.primary}, #ff9f43)`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;