import { FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const footerLinks = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Documentation', 'Guides'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Press'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Security', 'Cookie Policy'],
    },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">Bunny</h3>
            <p className="text-sm mb-4">
              Protecting your digital content with next-generation security
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="mt-4 md:mt-0">
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Bunny. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}