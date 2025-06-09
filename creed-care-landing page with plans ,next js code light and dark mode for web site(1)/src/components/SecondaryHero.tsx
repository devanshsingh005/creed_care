import { ArrowRight, Star, Users, Award } from "lucide-react"

const SecondaryHero = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-200/30 dark:bg-primary-800/20 rounded-full -translate-x-36 -translate-y-36"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-800/20 rounded-full translate-x-48 translate-y-48"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Trusted by 10,000+ members</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                Health Journey?
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Join thousands of individuals who have discovered the power of personalized healthcare. Your wellness
              transformation starts with a single step.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                <span>Start Your Free Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                Schedule a Consultation
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-primary-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">10k+ Active Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-primary-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Certified Professionals</span>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Success metrics cards */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Member Satisfaction Rate</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow mt-8">
                <div className="text-3xl font-bold text-secondary-600 mb-2">30 Days</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Average Time to See Results</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow -mt-4">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Support Available</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow mt-4">
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Personalized Plans</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-3xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Your Health Transformation Awaits</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Don't wait for tomorrow to start feeling better. Join our community today and discover what personalized
              healthcare can do for you.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Begin Your Journey Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondaryHero
