import { useState, useEffect, useRef } from "react";
import colors from "../theme/colors";

function HowItWorks() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // stop observing once visible
        }
      },
      { threshold: 0.3 } // trigger when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="features"
      className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: colors.primaryBg }}
    >
      <h2
        className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-10 md:mb-12"
        style={{ color: colors.textDark }}
      >
        How Tring Tring Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">

        {/* Card 1 */}
        <div
          className={`p-6 md:p-8 rounded-xl shadow transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          style={{ backgroundColor: colors.white }}
        >
          <img
            src="https://img.freepik.com/free-photo/man-using-smartphone-food-ordering-app_23-2148651108.jpg"
            alt="Call Restaurant"
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h3 className="font-bold text-lg md:text-xl py-2" style={{ color: colors.textDark }}>
            ☎️ Call the Restaurant
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: colors.gray }}>
            Tap the call button and speak directly with the restaurant to place your order.
          </p>
        </div>

        {/* Card 2 */}
        <div
          className={`p-6 md:p-8 rounded-xl shadow transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          style={{ backgroundColor: colors.white }}
        >
          <img
            src="https://img.freepik.com/free-vector/digital-payment-concept-illustration_114360-1525.jpg"
            alt="Get Bill"
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h3 className="font-bold text-lg md:text-xl py-2" style={{ color: colors.textDark }}>
            🧾 Get the Bill
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: colors.gray }}>
            The restaurant sends the final bill to your app after confirming your order.
          </p>
        </div>

        {/* Card 3 */}
        <div
          className={`p-6 md:p-8 rounded-xl shadow transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          style={{ backgroundColor: colors.white }}
        >
          <img
            src="https://img.freepik.com/free-vector/online-payment-concept-illustration_114360-5187.jpg"
            alt="Pay Securely"
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h3 className="font-bold text-lg md:text-xl py-2" style={{ color: colors.textDark }}>
            💳 Pay Securely
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: colors.gray }}>
            Pay easily through the app once you know the exact price.
          </p>
        </div>

        {/* Card 4 */}
        <div
          className={`p-6 md:p-8 rounded-xl shadow transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          style={{ backgroundColor: colors.white }}
        >
          <img
            src="https://img.freepik.com/free-vector/food-delivery-concept-illustration_114360-1404.jpg"
            alt="Delivery or Pickup"
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h3 className="font-bold text-lg md:text-xl py-2" style={{ color: colors.textDark }}>
            🛵 Choose Delivery or Pickup
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: colors.gray }}>
            Select takeaway, restaurant delivery, or Tring Tring delivery partner.
          </p>
        </div>

      </div>

      {/* Optional: add a subtle fade-in for the heading */}
      <style jsx>{`
        h2 {
          transition: opacity 0.6s ease;
          opacity: ${isVisible ? 1 : 0};
        }
      `}</style>
    </section>
  );
}

export default HowItWorks;