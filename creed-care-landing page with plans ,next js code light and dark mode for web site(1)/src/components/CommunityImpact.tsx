import { Users, Heart, Globe, Zap } from "lucide-react"

const CommunityImpact = () => {
  const impacts = [
    {
      icon: <Users className="w-12 h-12" />,
      number: "10,000+",
      label: "Lives Transformed",
      description: "Members who have achieved their health goals",
    },
    {
      icon: <Heart className="w-12 h-12" />,
      number: "50,000+",
      label: "Healthy Meals Planned",
      description: "Personalized nutrition plans delivered",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      number: "25+",
      label: "Cities Served",
      description: "Across Tamil Nadu and South India",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      number: "95%",
      label: "Energy Improvement",
      description: "Members report increased daily energy",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Creating Healthier Communities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Every person we help creates a ripple effect of wellness in their family and community. Together, we're
            building a healthier future for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                {impact.icon}
              </div>
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{impact.number}</div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{impact.label}</div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-600 dark:to-secondary-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Be Part of Something Bigger</h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of individuals and families who are transforming their health and inspiring others to do the
            same. Your wellness journey can be the spark that ignites positive change in your community.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Start Your Impact Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default CommunityImpact
