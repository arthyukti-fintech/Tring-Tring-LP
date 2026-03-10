import React, { useState } from 'react';



function FAQ({ ref, faq }) {
  // State to track which FAQ items are open (all closed initially)
  const [openIndexes, setOpenIndexes] = useState([]);

  // Toggle function: if index is open, remove it; otherwise add it
  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      ref={ref}
      className="px-6 md:px-12 lg:px-16 py-16 md:py-24 bg-black/20 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-3xl md:text-4xl mb-4 text-center"
          style={{ fontWeight: 800, fontFamily: "Bricolage Grotesque, sans-serif" ,color: 'black' }}
        >
          Frequently Asked Questions
        </h2>
        <p className="section-sub text-center mb-12 max-w-2xl mx-auto" style={{ color: 'black' }}>
          Got questions? We've got answers. If you don't see what you're looking
          for, feel free to contact us.
        </p>
        <div className="space-y-4">
          {faq.map((faq, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <div key={idx} className="glass-card p-6 rounded-xl">
                {/* Question header with toggle button */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex justify-between items-center text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-lg font-semibold" style={{ color: 'black' }}>
                    {faq.question}
                  </h3>
                  <span className="ml-4 text-2xl font-bold text-gray-700">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {/* Answer – shown only when open */}
                {isOpen && (
                  <div className="mt-4 pt-2 border-t border-gray-200">
                    <p className="section-sub text-sm" style={{color:"black"}}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;