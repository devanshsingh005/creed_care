import { Users, Video, Heart, MessageCircle, Activity, Utensils } from "lucide-react"

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Personalized Nutrition Plans",
      description:
        "Comprehensive health and nutrition services designed to support your wellness journey with personalized care and expert guidance.",
      features: ["Online Consultations", "Custom meal planning", "Nutritional assessments", "Progress tracking"],
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Teleconsultation Services",
      description:
        "Connect with certified nutritionists and healthcare professionals through secure video calls and chat support.",
      features: ["Video consultations", "Chat support", "File sharing", "Appointment scheduling"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Wellness Workshops",
      description:
        "Interactive group sessions covering nutrition education, cooking classes, and lifestyle coaching with community support.",
      features: ["Live workshops", "Recorded sessions", "Group discussions", "Expert-led sessions"],
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Peer Support Circles",
      description:
        "Connect with like-minded individuals on similar wellness journeys through moderated online communities.",
      features: ["Peer mentorship", "Group conversations", "Success stories", "Motivation support"],
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Health Monitoring",
      description:
        "Track your progress with regular health assessments and monthly check-ins to stay on track with your goals.",
      features: ["Health tracking", "Progress reports", "Regular check-ins", "Goal adjustments"],
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Meal Delivery Partnership",
      description:
        "Optional meal delivery services aligned with your personalized nutrition plan for ultimate convenience and success.",
      features: ["Prepared meal kits", "Fresh ingredients", "Recipe cards", "Flexible scheduling"],
    },
  ]

  return (
    <section id="services" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive health and nutrition services designed to support your wellness journey with personalized
            care, expert guidance, and ongoing support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-lg flex items-center justify-center text-white mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 dark:bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-shrink-0 mt-auto">
                <button className="w-full bg-gray-900 dark:bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
