export default function CTA() {
    return (
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Protecting Your Videos Today</h2>
          <p className="text-xl mb-8">Join thousands of content creators who trust our platform</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
              Start Free Trial
            </button>
            <button className="border border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg transition duration-300">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    )
  }