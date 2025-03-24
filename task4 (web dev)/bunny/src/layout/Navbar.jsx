import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-900">Bunny</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}