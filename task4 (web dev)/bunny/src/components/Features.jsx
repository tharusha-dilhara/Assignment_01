import React from 'react'
import { FaShieldAlt, FaLock, FaEyeSlash, FaWater } from 'react-icons/fa'

export default function Features() {
  const features = [
    {
      icon: <FaShieldAlt size={40} className="text-indigo-500" />,
      title: "Military-Grade Encryption",
      desc: "AES-256 encryption for maximum security",
    },
    {
      icon: <FaLock size={40} className="text-green-500" />,
      title: "DRM Protection",
      desc: "Digital Rights Management integration",
    },
    {
      icon: <FaEyeSlash size={40} className="text-red-500" />,
      title: "Screen Capture Block",
      desc: "Prevent unauthorized screen recording",
    },
    {
      icon: <FaWater size={40} className="text-blue-500" />,
      title: "Watermarking",
      desc: "Dynamic user-specific watermarking",
    },
  ]

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-gray-800">Advanced Protection Features</h2>
          <p className="text-gray-600 text-lg">
            Experience unparalleled security and performance with our cutting-edge solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
