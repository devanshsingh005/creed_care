import { Mail, BookOpen, Video, FileText, ArrowRight } from "lucide-react"

const Newsletter = () => {
  const resources = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Nutrition Guides",
      description: "Evidence-based nutrition guides and meal planning tips",
      count: "50+ Articles",
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Wellness Videos",
      description: "Expert-led workshops and exercise routines",
      count: "100+ Videos",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Health Reports",
      description: "Latest research and health trend analysis",
      count: "Monthly Reports",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Newsletter */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Informed About Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Wellness Journey
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Get weekly insights, nutrition tips, and exclusive content delivered to your inbox. Join 25,000+
              subscribers who trust us for their wellness education.
            </p>

            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">What you'll receive:</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Weekly nutrition tips and meal ideas
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Exclusive wellness content and research
                </li>
                <li className="flex items-center text-gray-700 dark:text-gray-300">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                  Early access to new features and workshops
                </li>
              </ul>
            </div>

            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Mail className="w-5 h-5" />
                <span>Subscribe</span>
              </button>
            </form>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>

          {/* Right Content - Resources */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Free Wellness Resources</h3>

            <div className="space-y-6">
              {resources.map((resource, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                      {resource.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{resource.title}</h4>
                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                          {resource.count}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{resource.description}</p>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:text-primary-700 dark:group-hover:text-primary-300">
                        <span>Explore now</span>
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
