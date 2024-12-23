"'use client'"

import { useState } from "'react'"
import { motion } from "'framer-motion'"
import { InlineWidget } from "'react-calendly'"
import AnimatedInsights from "'../components/animated-insights'"
import Footer from "'../components/footer'"

export default function Signup() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "''",
    lastName: "''",
    schoolEmail: "''",
    schoolName: "''",
    schoolWebsite: "''"
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowCalendly(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-forest-green flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-4 text-soft-white">
                TRANSFORM ALUMNI ENGAGEMENT
              </h1>
              <p className="text-2xl mb-8 text-golden-yellow">
                Ready to get started? Let's connect!
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-transparent border-b-2 border-golden-yellow pb-3 text-xl text-soft-white placeholder-emerald-green focus:outline-none focus:border-emerald-green"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-transparent border-b-2 border-golden-yellow pb-3 text-xl text-soft-white placeholder-emerald-green focus:outline-none focus:border-emerald-green"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="schoolEmail"
                    required
                    className="w-full bg-transparent border-b-2 border-golden-yellow pb-3 text-xl text-soft-white placeholder-emerald-green focus:outline-none focus:border-emerald-green"
                    placeholder="School Email *"
                    value={formData.schoolEmail}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="schoolName"
                    required
                    className="w-full bg-transparent border-b-2 border-golden-yellow pb-3 text-xl text-soft-white placeholder-emerald-green focus:outline-none focus:border-emerald-green"
                    placeholder="School Name *"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </div>

                <div className="relative">
                  <input
                    type="url"
                    name="schoolWebsite"
                    className="w-full bg-transparent border-b-2 border-golden-yellow pb-3 text-xl text-soft-white placeholder-emerald-green focus:outline-none focus:border-emerald-green"
                    placeholder="School Website"
                    value={formData.schoolWebsite}
                    onChange={handleChange}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-emerald-green text-forest-green py-4 rounded-lg text-xl font-semibold hover:bg-golden-yellow transition-colors"
                >
                  Schedule Demo
                </motion.button>
              </form>

              {showCalendly && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-8 bg-soft-white rounded-lg p-4"
                >
                  <InlineWidget url="https://calendly.com/your-calendly-link" />
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Insights Section */}
          <div className="lg:col-span-1">
            <AnimatedInsights />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

