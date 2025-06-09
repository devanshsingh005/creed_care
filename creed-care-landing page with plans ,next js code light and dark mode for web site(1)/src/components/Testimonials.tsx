import { Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Member since 2024",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Creed.Care transformed my approach to nutrition. The personalized plan addressed my specific needs, and the ongoing support kept me motivated. I've lost 15kg and gained so much energy!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Member since 2024",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "As someone with specific dietary restrictions, finding a nutrition plan that works has been challenging. Creed.Care's experts created a plan that not only meets my health needs but is actually enjoyable to follow.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Member since 2025",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "The teleconsultation service has been a game-changer for me. Being able to connect with nutritionists from home saves me so much time, and the quality of care is exceptional.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Transforming Lives, One Plan at a Time
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from members who have experienced the Creed.Care difference in their
            wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-primary-500" />
                ))}
              </div>

              <p className="text-gray-600 dark:text-gray-300 italic">{testimonial.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors dark:bg-primary-600 dark:hover:bg-primary-700">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
