import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "How does the video protection work?",
      answer:
        "We use AES-256 encryption combined with DRM technologies to secure your content at every stage.",
    },
    {
      question: "Can I try before I buy?",
      answer:
        "Yes, we offer a 14-day free trial with full access to all features.",
    },
    {
      question: "What video formats are supported?",
      answer:
        "We support all major formats including MP4, MOV, AVI, and MKV.",
    },
    {
      question: "How is billing handled?",
      answer:
        "We offer monthly and annual billing with secure payment processing.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-700">
                  {faq.question}
                </span>
                <svg
                  className={`h-6 w-6 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 animate-fadeIn">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
