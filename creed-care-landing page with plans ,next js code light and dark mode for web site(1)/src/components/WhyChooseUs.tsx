import { Shield, Heart, Headphones, TrendingUp, Calendar, Users, Target, Smartphone, Clock, User } from "lucide-react"

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Medical Supervision",
      description: "Expert medical oversight ensuring safe and effective nutrition plans",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Comprehensive Care",
      description: "Complete wellness approach addressing all aspects of your health",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Certified nutritionists and healthcare professionals at your service",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Results Driven",
      description: "Proven methodologies focused on achieving your health goals",
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support & Teleconsultation",
      description: "Round-the-clock assistance whenever you need it most",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Kickoff Workshop",
      description: "Comprehensive onboarding to set you up for success",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Monthly Wellness Modules",
      description: "Ongoing education and skill-building sessions",
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Personalized Health Care",
      description: "Tailored solutions designed specifically for your unique needs",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Peer Support Circles",
      description: "Connect with others on similar wellness journeys",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Access to Digital Tools",
      description: "Cutting-edge technology to track and optimize your progress",
    },
  ]

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            What makes us different? We combine medical expertise with personalized care, technology with human touch,
            and science with compassion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
