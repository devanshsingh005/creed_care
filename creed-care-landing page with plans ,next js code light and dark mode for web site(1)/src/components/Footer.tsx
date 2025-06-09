const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center">
                <span className="text-gray-900 dark:text-white font-bold">C</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Creed</h3>
                <p className="text-xs text-gray-400">a personal health care</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Your health is our creed. Delivering personalized nutrition and wellness solutions backed by medical
              recommendations. Because caring is the best medicine.
            </p>
            <p className="text-xs text-gray-500">Caring is the best medicine.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#home" className="hover:text-primary-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-primary-400 transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Nutritional Assessment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Medical Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Wellness Workshops
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Community Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Digital Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>hello@creed.care</li>
              <li>
                123 Wellness Street
                <br />
                Health City, HC 12345
              </li>
            </ul>
            <div className="mt-4">
              <h5 className="font-semibold mb-2">Follow Us</h5>
              <div className="flex space-x-2">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <div className="w-6 h-6 bg-blue-400 rounded"></div>
                <div className="w-6 h-6 bg-pink-500 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2024 Creed Personal Healthcare. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
