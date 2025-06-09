const About = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h2>

        <div className="prose prose-lg mx-auto text-gray-700 dark:text-gray-300 mb-8">
          <p className="text-lg leading-relaxed mb-6">
            What began in 2024 as a heartfelt idea has grown into a thriving wellness movement. With the launch of our
            MVP in 2025 and over 100 early users onboarded, Creedcare is now expanding rapidly across Tamil Nadu and
            South India — transforming lives with personalized care, one person at a time.
          </p>

          <blockquote className="border-l-4 border-primary-500 dark:border-primary-400 pl-6 italic text-xl text-gray-900 dark:text-white my-8">
            "Imagine waking up energized, not drained. At Creed.care, we understand the struggle to find balance in a
            busy world—because we've been there too. That's why we make self-care a shared journey, with interactive
            workshops, personalized plans, and a supportive community."
          </blockquote>
        </div>

        <div className="bg-gradient-to-r from-primary-500 to-primary-600 dark:from-primary-600 dark:to-primary-700 text-white p-8 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Join us to discover your best self, connect with others, and start a new, empowering chapter in your
            well-being.
          </h3>
        </div>
      </div>
    </section>
  )
}

export default About
