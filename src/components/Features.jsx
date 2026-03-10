import colors from "../theme/colors";

const features = [
  {
    title: "Fast Ordering",
    desc: "Just call and order food quickly without complicated apps.",
  },
  {
    title: "Direct Restaurant Contact",
    desc: "Talk directly with restaurant staff for accurate orders.",
  },
  {
    title: "Flexible Delivery",
    desc: "Choose pickup or home delivery according to your needs.",
  },
  {
    title: "No App Confusion",
    desc: "Simple calling experience instead of navigating complex menus.",
  },
  {
    title: "Local Restaurant Support",
    desc: "Helps small and local restaurants get more customers.",
  },
  {
    title: "Quick Pickup Option",
    desc: "Order and pick up your food without waiting in long queues.",
  },
  {
    title: "Real Human Interaction",
    desc: "Speak directly with restaurant staff for special requests.",
  },
  {
    title: "Reliable Ordering",
    desc: "Avoid order mistakes that sometimes happen in automated systems.",
  },
  {
    title: "Future Smart Features",
    desc: "Soon you'll see smart restaurant suggestions based on your taste.",
  },
];

function Features() {
  return (
    <section
      id="restaurants"
      className="px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20"
      style={{ backgroundColor: colors.primaryBg }}
    >
      <div className="max-w-7xl mx-auto">

        <h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-center"
          style={{ color: colors.textDark }}
        >
          Why Choose Tring Tring?
        </h2>

        <p
          className="text-center mt-4 max-w-2xl mx-auto"
          style={{ color: colors.gray }}
        >
          Tring Tring is built to simplify food ordering by connecting customers
          directly with restaurants. Here are some reasons why our platform is
          different.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-12">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-xl shadow transition hover:scale-105"
              style={{ backgroundColor: colors.white }}
            >
              <h3
                className="font-bold text-lg md:text-xl"
                style={{ color: colors.textDark }}
              >
                {feature.title}
              </h3>

              <p
                className="mt-2 text-sm md:text-base"
                style={{ color: colors.gray }}
              >
                {feature.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;