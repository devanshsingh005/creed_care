import { Heart, Users, Zap, Shield } from "lucide-react"

const ThematicIllustrations = () => {
  const themes = [
    {
      icon: <Heart className="w-16 h-16" />,
      title: "Personalized Care",
      description: "Every plan is crafted specifically for your unique health profile and lifestyle",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: <Users className="w-16 h-16" />,
      title: "Community Support",
      description: "Join a supportive community of individuals on similar wellness journeys",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: <Zap className="w-16 h-16" />,
      title: "Proven Results",
      description: "Evidence-based approaches that deliver measurable health improvements",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: <Shield className="w-16 h-16" />,
      title: "Medical Excellence",
      description: "Backed by certified healthcare professionals and medical supervision",
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Vision in Action</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover how we're revolutionizing healthcare through personalized care, community support, and proven
            methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {themes.map((theme, index) => (
            <div
              key={index}
              className={`${theme.bgColor} rounded-3xl p-8 text-center hover:scale-105 transition-all duration-300 cursor-pointer group border border-white/50 dark:border-gray-700/50`}
            >
              <div
                className={`w-24 h-24 bg-gradient-to-r ${theme.color} rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
              >
                {theme.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{theme.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{theme.description}</p>
            </div>
          ))}
        </div>

        {/* Central connecting visual */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-2xl">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-secondary-500 animate-pulse" />
            </div>
          </div>
          <p className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Where Health Meets Heart</p>
        </div>
      </div>
    </section>
  )
}

export default ThematicIllustrations
