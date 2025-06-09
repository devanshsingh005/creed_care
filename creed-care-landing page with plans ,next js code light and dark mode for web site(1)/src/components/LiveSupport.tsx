import { MessageCircle, Clock, Users, Headphones } from "lucide-react"

const LiveSupport = () => {
  const supportFeatures = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "24/7 Live Chat",
      description: "Instant support whenever you need it",
      availability: "Always Available",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Expert Consultations",
      description: "Connect with certified nutritionists",
      availability: "Mon-Fri, 9AM-6PM",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Get help from fellow members",
      availability: "24/7 Community",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            We're Here When You Need Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your wellness journey doesn't have to be lonely. Our support team and community are here to help you every
            step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {supportFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{feature.description}</p>
              <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                <span>{feature.availability}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Need Immediate Help?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our support team is standing by to help you with any questions about your wellness plan, technical
                issues, or general guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span>Start Live Chat</span>
                </button>
                <button className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Schedule Call
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">{"<"}30s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Average Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Issue Resolution Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4.9/5</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Support Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Availability</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveSupport
