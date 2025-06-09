const Results = () => {
  const metrics = [
    {
      value: "92%",
      label: "of members report improved energy levels within 30 days",
    },
    {
      value: "87%",
      label: "of members with chronic conditions see measurable improvements",
    },
    {
      value: "94%",
      label: "member satisfaction rate with our personalized care approach",
    },
    {
      value: "89%",
      label: "of members achieve their primary health goal within 6 months",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-primary-500 dark:bg-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Real Results, Real Impact</h2>
          <p className="text-lg text-gray-900 dark:text-gray-100 max-w-3xl mx-auto opacity-90">
            Our evidence-based approach delivers measurable improvements in health and wellbeing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center transform transition-transform hover:-translate-y-1 shadow-soft"
            >
              <div className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-3">{metric.value}</div>
              <p className="text-gray-700 dark:text-gray-300">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Results
