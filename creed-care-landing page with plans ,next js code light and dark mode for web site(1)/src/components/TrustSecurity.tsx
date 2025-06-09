import { Shield, Lock, Award, CheckCircle } from "lucide-react"

const TrustSecurity = () => {
  const trustFeatures = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Medical Grade Security",
      description: "HIPAA compliant platform ensuring your health data is protected with bank-level encryption.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Professionals",
      description: "All our nutritionists and healthcare providers are licensed and certified in their specialties.",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your personal health information is never shared without your explicit consent.",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Evidence-Based Care",
      description: "Our recommendations are backed by the latest scientific research and clinical studies.",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Trust is Our Foundation
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We understand that your health is your most valuable asset. That's why we've built our platform with the
            highest standards of security, privacy, and professional excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white dark:bg-gray-900 px-6 py-3 rounded-full shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Trusted by 10,000+ members</span>
            </div>
            <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">99.9% uptime guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSecurity
