import colors from "../theme/colors";

function CTA() {
  return (
    <section
      className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 text-center"
      style={{ backgroundColor: colors.primaryBg }}
    >
      <div className="max-w-4xl mx-auto">

        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold"
          style={{ color: colors.textDark }}
        >
          Start Ordering Food Today
        </h2>

        <p
          className="mt-4 text-sm md:text-base"
          style={{ color: colors.gray }}
        >
          Experience simple food ordering with Tring Tring.
        </p>

        {/* TRUST MESSAGE */}
        <div className="mt-6">
          <p
            className="text-base font-semibold"
            style={{ color: colors.textDark }}
          >
            Trusted by Local Restaurants and Food Lovers
          </p>

          <p
            className="text-sm mt-2 max-w-xl mx-auto"
            style={{ color: colors.gray }}
          >
            Tring Tring is designed for cities where people value real
            conversations, honest prices, and reliable delivery.
          </p>
        </div>

        {/* CTA BUTTON */}
        <button
          className="mt-8 px-8 md:px-10 py-3 rounded-lg font-semibold text-white transition duration-300"
          style={{ backgroundColor: colors.primary }}
          onClick={() => {
            const section = document.getElementById("app-preview");
            if (section) {
              section.scrollIntoView({ behavior: "smooth" });
            }
          }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = colors.primaryDark)
          }
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = colors.primary)
          }
        >
          Get Started
        </button>

      </div>
    </section>
  );
}

export default CTA;