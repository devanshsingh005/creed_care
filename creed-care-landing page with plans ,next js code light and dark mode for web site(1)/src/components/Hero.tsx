import HeartbeatAnimation from "./HeartbeatAnimation"
import { Heart, Users, Brain, Leaf, Clock } from "lucide-react"

const Hero = () => {
  const healthAspects = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Physical Health",
      color: "from-red-400 to-pink-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      textColor: "text-red-600 dark:text-red-400",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Mental Wellbeing",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Nutrition that Nourishes",
      color: "from-green-400 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-600 dark:text-green-400",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Wellness that Lasts",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      textColor: "text-purple-600 dark:text-purple-400",
    },
  ]

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 dark:from-primary-700 dark:via-primary-800 dark:to-primary-900 py-16 lg:py-24 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-800/30 dark:to-secondary-800/30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Now shows first on mobile */}
          <div className="text-white order-1">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Your health is <span className="text-white drop-shadow-lg">our creed</span>
            </h2>

            <p className="text-lg mb-8 text-gray-900 dark:text-gray-100 opacity-90 leading-relaxed">
              Because caring is the best medicine. Experience healthcare that listens to your body, understands your
              needs, and grows with your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Plan
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">10k+</div>
                <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-300 opacity-80">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">500+</div>
                <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-300 opacity-80">Success Stories</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">50+</div>
                <div className="text-xs sm:text-sm text-gray-900 dark:text-gray-300 opacity-80">Experts</div>
              </div>
            </div>

            {/* Enhanced Health Aspects Section */}
            <div className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {healthAspects.map((aspect, index) => (
                  <div
                    key={index}
                    className={`${aspect.bgColor} rounded-2xl p-3 sm:p-4 border border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group`}
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${aspect.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow`}
                      >
                        {aspect.icon}
                      </div>
                      <span className={`${aspect.textColor} font-semibold text-xs sm:text-sm`}>{aspect.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Family Section */}
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-primary-200 to-secondary-200 dark:from-primary-800 dark:to-secondary-800 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <span className="text-gray-900 dark:text-gray-100 font-bold text-base sm:text-lg">
                      For Your Family
                    </span>
                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mx-auto mt-1"></div>
                  </div>
                </div>
              </div>

              {/* Final Message */}
              <div className="text-center">
                <p className="text-gray-900 dark:text-gray-100 font-bold text-lg sm:text-xl mb-2">
                  All of it in one place.
                </p>
                <p className="text-white font-bold text-xl sm:text-2xl drop-shadow-lg">For life.</p>
              </div>
            </div>
          </div>

          {/* Right Content - Quote Card and Animation - Now shows second on mobile */}
          <div className="flex flex-col items-center justify-center space-y-8 order-2">
            {/* Quote Card */}
            <div className="w-full max-w-md">
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700 backdrop-blur-sm">
                {/* Floating decorative elements */}
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-30 animate-pulse delay-1000"></div>

                {/* Heart pulse indicator */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Heart className="w-4 h-4 text-white animate-pulse" />
                  </div>
                </div>

                {/* Main quote */}
                <div className="text-center pt-4">
                  <p className="text-lg sm:text-2xl font-serif italic text-gray-900 dark:text-gray-100 leading-relaxed mb-6">
                    "You deserve a care plan as{" "}
                    <span className="relative">
                      <span className="text-secondary-500 font-bold">unique</span>
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full"></div>
                    </span>{" "}
                    as your{" "}
                    <span className="relative">
                      <span className="text-secondary-500 font-bold">heartbeat</span>
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary-400 to-secondary-600 rounded-full"></div>
                    </span>
                    ."
                  </p>

                  {/* Heartbeat visual */}
                  <div className="flex justify-center mb-6">
                    <svg width="80" height="30" viewBox="0 0 80 30" className="text-secondary-500">
                      <path
                        d="M5,15 L20,15 L25,8 L30,22 L35,5 L40,25 L45,15 L75,15"
                        stroke="currentColor"
                        strokeWidth="3"
                        fill="none"
                        className="animate-pulse"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Emotional connection text */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-800 rounded-2xl p-4 mb-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                      Because every heartbeat tells a story, and every story deserves personalized care.
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div className="flex justify-center">
                    <div className="w-16 h-1 bg-gradient-to-r from-secondary-500 via-primary-500 to-secondary-500 rounded-full"></div>
                  </div>
                </div>

                {/* Subtle background pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-gray-800/50 dark:to-gray-900/50 rounded-3xl -z-10"></div>
              </div>
            </div>

            {/* Heartbeat Animation - Now positioned below the card */}
            <div className="w-full flex justify-center">
              <HeartbeatAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
