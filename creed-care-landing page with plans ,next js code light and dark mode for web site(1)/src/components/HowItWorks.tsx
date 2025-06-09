import { ClipboardCheck, MessageCircle, UserCheck, LineChart } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Complete Your Assessment",
      description:
        "Take our comprehensive health assessment so we can understand your unique needs, goals, and preferences.",
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Meet Your Care Team",
      description:
        "Connect with certified nutritionists and healthcare professionals who will design your personalized plan.",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "Follow Your Plan",
      description:
        "Access your customized nutrition and wellness plan through our platform, with ongoing support and guidance.",
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Track Your Progress",
      description: "Monitor your improvements, adjust your plan as needed, and celebrate your wellness milestones.",
    },
  ]

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our simple four-step process makes it easy to start your personalized wellness journey with Creed.Care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center text-white mb-6 mx-auto">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Start Your Journey Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
