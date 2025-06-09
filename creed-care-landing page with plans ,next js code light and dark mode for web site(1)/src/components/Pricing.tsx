import { Check, Star, Crown, Zap } from "lucide-react"

const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      icon: <Star className="w-6 h-6" />,
      price: "₹2,999",
      period: "/month",
      description: "Perfect for individuals starting their wellness journey",
      features: [
        "Personalized nutrition plan",
        "Monthly nutritionist consultation",
        "Basic health tracking",
        "Email support",
        "Access to wellness workshops",
        "Mobile app access",
      ],
      popular: false,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      name: "Premium",
      icon: <Crown className="w-6 h-6" />,
      price: "₹4,999",
      period: "/month",
      description: "Comprehensive care with enhanced support and features",
      features: [
        "Everything in Essential",
        "Bi-weekly consultations",
        "Advanced health monitoring",
        "24/7 chat support",
        "Meal delivery partnership",
        "Family plan (up to 4 members)",
        "Priority booking",
        "Personalized supplements",
      ],
      popular: true,
      color: "from-primary-500 to-secondary-500",
      bgColor: "bg-primary-50 dark:bg-primary-900/20",
    },
    {
      name: "Elite",
      icon: <Zap className="w-6 h-6" />,
      price: "₹7,999",
      period: "/month",
      description: "Premium healthcare with dedicated support and exclusive benefits",
      features: [
        "Everything in Premium",
        "Weekly consultations",
        "Dedicated health coach",
        "Home health assessments",
        "Concierge support",
        "Exclusive workshops",
        "Annual health retreat",
        "Direct doctor access",
      ],
      popular: false,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
  ]

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Choose Your Wellness Plan
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Start with a plan that fits your needs and upgrade anytime as your
            wellness journey evolves.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${plan.bgColor} rounded-3xl p-8 border-2 ${
                plan.popular
                  ? "border-primary-500 dark:border-primary-400 shadow-2xl scale-105"
                  : "border-gray-200 dark:border-gray-700 shadow-lg"
              } transition-all duration-300 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}
                >
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400 ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-lg"
                    : "bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">All plans include a 30-day money-back guarantee</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
              Compare all features →
            </button>
            <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium">
              Talk to our team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
