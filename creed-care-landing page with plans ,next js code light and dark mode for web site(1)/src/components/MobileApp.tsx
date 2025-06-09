import { Smartphone, Download, Star, Bell, Activity, Users } from "lucide-react"

const MobileApp = () => {
  const features = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Health Tracking",
      description: "Monitor your progress with intuitive charts and insights",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Smart Reminders",
      description: "Never miss a meal, medication, or appointment",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Support",
      description: "Connect with others on similar wellness journeys",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Personalized Plans",
      description: "Access your custom nutrition and wellness plans",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              <span>Available on iOS & Android</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Your Health Companion,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Always With You
              </span>
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Take control of your wellness journey with our intuitive mobile app. Track progress, access your
              personalized plans, and stay connected with your care team - all from your smartphone.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download for iOS</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors">
                <Download className="w-5 h-5" />
                <span>Download for Android</span>
              </button>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">4.8/5 rating from 10,000+ users</span>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-64 h-96 bg-gray-900 dark:bg-gray-800 rounded-3xl p-2 shadow-2xl">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl overflow-hidden">
                {/* Phone Screen Content */}
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold">Good Morning, Sarah!</h3>
                    <div className="w-8 h-8 bg-white/20 rounded-full"></div>
                  </div>
                  <p className="text-sm opacity-90">Today's wellness score: 85%</p>
                </div>

                <div className="p-4 space-y-4">
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Activity className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Daily Progress</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Bell className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Next Meal</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Grilled salmon with quinoa</p>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Community</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">3 new messages</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-200 dark:bg-primary-800 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-60 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileApp
