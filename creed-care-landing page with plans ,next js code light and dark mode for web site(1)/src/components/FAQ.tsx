"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes Creed.care different from other nutrition programs?",
      answer:
        "Creed.care combines medical supervision with personalized care, offering 24/7 support, peer communities, and evidence-based approaches. Our programs are designed by certified nutritionists and healthcare professionals, ensuring both safety and effectiveness.",
    },
    {
      question: "Do I need a medical referral to start the program?",
      answer:
        "No medical referral is required to start our basic nutrition programs. However, for specialized medical nutrition therapy or if you have specific health conditions, we may recommend consulting with your healthcare provider first.",
    },
    {
      question: "How personalized are the nutrition plans?",
      answer:
        "Our nutrition plans are highly personalized based on your health goals, dietary preferences, lifestyle, medical history, and food allergies. Each plan is created by certified nutritionists and regularly adjusted based on your progress.",
    },
    {
      question: "What kind of support can I expect during my journey?",
      answer:
        "You'll receive comprehensive support including 24/7 teleconsultation access, regular check-ins with your nutritionist, peer support circles, monthly wellness modules, and access to our digital tracking tools.",
    },
    {
      question: "How long does it take to see results?",
      answer:
        "Results vary by individual and goals, but most clients begin to see improvements in energy levels within 2-3 weeks. Significant health improvements typically occur within 8-12 weeks of consistent program adherence.",
    },
    {
      question: "Is the program suitable for people with medical conditions?",
      answer:
        "Yes, our programs can be adapted for various medical conditions including diabetes, hypertension, PCOS, and digestive issues. We work closely with healthcare providers and offer medical supervision when needed.",
    },
    {
      question: "What is included in the monthly wellness modules?",
      answer:
        "Monthly wellness modules include interactive workshops on nutrition education, cooking classes, stress management, sleep optimization, exercise guidance, and community building activities with fellow participants.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about our personalized nutrition and wellness programs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
