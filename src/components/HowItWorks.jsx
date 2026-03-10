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
        How Trin Trin Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {/* Card 1 - slide from left */}
        <div
          className={`p-6 md:p-8 rounded-xl shadow transition-all duration-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ backgroundColor: colors.white }}
        >
          <img
            src="https://thumbs.dreamstime.com/b/business-owner-phone-call-woman-restaurant-tablet-communication-online-order-contact-us-manager-business-owner-360576063.jpg"
            alt="Call Restaurant"
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h3
            className="font-bold text-lg md:text-xl py-2"
            style={{ color: colors.textDark }}
          >
            Call Restaurant
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: colors.gray }}>
            Easily call your favorite restaurant directly from the app.
          </p>
        </div>

        {/* Card 2 - slide from right */}
        <div
          className={`p-6 md:p-8 rounded-xl shadow transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-10 translate-x-10"
          }`}
          style={{ backgroundColor: colors.white }}
        >
          <img
            src="https://img.freepik.com/free-vector/order-now-banner_52683-48697.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Place Order"
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h3
            className="font-bold text-lg md:text-xl py-2"
            style={{ color: colors.textDark }}
          >
            Place Order
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: colors.gray }}>
            Tell the restaurant what food you want to order.
          </p>
        </div>

        {/* Card 3 - slide from left */}
        <div
          className={`p-6 md:p-8 rounded-xl shadow transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
          style={{ backgroundColor: colors.white }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/070/209/202/small/a-man-holding-a-box-and-giving-the-thumbs-up-free-photo.jpg"
            alt="Pickup or Delivery"
            className="h-[200px] w-full object-cover rounded-lg"
          />
          <h3
            className="font-bold text-lg md:text-xl py-2"
            style={{ color: colors.textDark }}
          >
            Pickup or Delivery
          </h3>
          <p className="mt-2 text-sm md:text-base" style={{ color: colors.gray }}>
            Choose whether you want home delivery or pickup.
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