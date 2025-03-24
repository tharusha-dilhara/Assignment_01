export default function Pricing() {
    const plans = [
      {
        name: "Basic",
        price: "29",
        features: [
          "1080p Protection",
          "Basic Watermarking",
          "5 Team Members",
          "100GB Storage",
        ],
      },
      {
        name: "Professional",
        price: "99",
        featured: true,
        features: [
          "4K Protection",
          "Advanced DRM",
          "Dynamic Watermarking",
          "20 Team Members",
          "1TB Storage",
        ],
      },
      {
        name: "Enterprise",
        price: "Custom",
        features: [
          "Custom Solutions",
          "24/7 Support",
          "Unlimited Team Members",
          "Custom Storage",
          "SLA",
        ],
      },
    ];
  
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">
            Simple, Transparent Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  plan.featured
                    ? "bg-blue-900 text-white border-4 border-blue-300"
                    : "bg-white shadow-lg"
                }`}
              >
                <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
                <div className="text-5xl font-extrabold mb-6">
                  ${plan.price}
                  {typeof plan.price === "number" && (
                    <span className="text-xl font-medium">/mo</span>
                  )}
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <svg
                        className={`w-6 h-6 mr-2 flex-shrink-0 ${
                          plan.featured ? "text-blue-300" : "text-blue-500"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full mt-8 py-3 rounded-lg font-semibold transition-colors duration-300 focus:outline-none ${
                    plan.featured
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-blue-900 hover:bg-blue-800 text-white"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  