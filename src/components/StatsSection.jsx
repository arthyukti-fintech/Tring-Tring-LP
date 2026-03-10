import { useState, useEffect, useRef } from "react";
import colors from "../theme/colors";

const stats = [
  {
    value: 70,
    label: "Faster Ordering",
    description: "Compared to traditional food apps",
  },
  {
    value: 80,
    label: "Restaurant Partners",
    description: "500+ restaurants joining soon",
  },
  {
    value: 90,
    label: "User Interest",
    description: "10K+ users waiting for launch",
  },
  {
    value: 85,
    label: "Expected Rating",
    description: "Target customer satisfaction",
  },
];

function Circle({ value }) {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e5e7eb"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke={colors.primary}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        strokeLinecap="round"
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="18"
        fill={colors.textDark}
        fontWeight="bold"
      >
        {value}%
      </text>
    </svg>
  );
}

function StatItem({ item, isVisible }) {
  const [currentValue, setCurrentValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      let current = 0;
      const target = item.value;
      if (target === 0) {
        setCurrentValue(0);
        return;
      }
      const step = 1;
      const intervalTime = 20; // ms
      const interval = setInterval(() => {
        current += step;
        if (current >= target) {
          setCurrentValue(target);
          clearInterval(interval);
        } else {
          setCurrentValue(current);
        }
      }, intervalTime);
      return () => clearInterval(interval);
    }
  }, [isVisible, item.value]);

  return (
    <div className="flex flex-col items-center">
      <Circle value={currentValue} />
      <h3
        className="mt-5 text-lg font-semibold"
        style={{ color: colors.textDark }}
      >
        {item.label}
      </h3>
      <p
        className="text-sm mt-2 text-center"
        style={{ color: colors.gray }}
      >
        {item.description}
      </p>
    </div>
  );
}

function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
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
      className="px-6 md:px-12 lg:px-16 py-20"
      style={{ backgroundColor: colors.primaryBg }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-14"
          style={{ color: colors.textDark }}
        >
          Why Tring Tring Will Change Food Ordering
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((item, index) => (
            <StatItem key={index} item={item} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsSection;