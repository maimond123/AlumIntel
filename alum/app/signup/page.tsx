'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { InlineWidget } from 'react-calendly'
import NetworkVisualization from '../../components/network-visualization'
import Footer from '../../components/footer'
import Navigation from '../../components/navigation-signup'

export default function Signup() {
  const [showCalendly, setShowCalendly] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolEmail: '',
    schoolName: '',
    schoolWebsite: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
      <Navigation />
      <main className="relative min-h-screen w-full">
        <div className="container mx-auto px-6 pt-32">
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start">
  
            <div className="md:w-1/2 mb-12 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-7xl font-bold text-emerald-800 mb-4"
              >
                Join the Alumni<br />
                Revolution<span className="text-teal-500">.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-emerald-green mb-8"
              >
                Transform your alumni analytics today.
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <input
                      type="text"
                      name="firstName"
                      required
                      className="w-full bg-white bg-opacity-50 border-2 border-emerald-green rounded-lg px-4 py-3 text-forest-green placeholder-emerald-green/50 focus:outline-none focus:border-golden-yellow transition-colors"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                    <input
                      type="text"
                      name="lastName"
                      required
                      className="w-full bg-white bg-opacity-50 border-2 border-emerald-green rounded-lg px-4 py-3 text-forest-green placeholder-emerald-green/50 focus:outline-none focus:border-golden-yellow transition-colors"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <input
                    type="email"
                    name="schoolEmail"
                    required
                    className="w-full bg-white bg-opacity-50 border-2 border-emerald-green rounded-lg px-4 py-3 text-forest-green placeholder-emerald-green/50 focus:outline-none focus:border-golden-yellow transition-colors"
                    placeholder="School Email *"
                    value={formData.schoolEmail}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  <input
                    type="text"
                    name="schoolName"
                    required
                    className="w-full bg-white bg-opacity-50 border-2 border-emerald-green rounded-lg px-4 py-3 text-forest-green placeholder-emerald-green/50 focus:outline-none focus:border-golden-yellow transition-colors"
                    placeholder="School Name *"
                    value={formData.schoolName}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
                  <input
                    type="url"
                    name="schoolWebsite"
                    className="w-full bg-white bg-opacity-50 border-2 border-emerald-green rounded-lg px-4 py-3 text-forest-green placeholder-emerald-green/50 focus:outline-none focus:border-golden-yellow transition-colors"
                    placeholder="School Website"
                    value={formData.schoolWebsite}
                    onChange={handleChange}
                  />
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
                  <button
                    type="submit"
                    className="w-full bg-forest-green text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-emerald-green transition-colors"
                  >
                    Submit
                  </button>
                </motion.div>
              </form>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="mt-6">
                <button
                  onClick={() => setShowCalendly(true)}
                  className="w-full bg-golden-yellow text-forest-green border-2 border-forest-green px-8 py-4 rounded-full text-xl font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Schedule Demo
                </button>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-8 text-center">
                <p className="text-emerald-green text-lg">
                  If your school already uses AlumIntel, <a href="/login" className="underline text-teal-500">log-in here</a>.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Network Visualization taking full height */}
        <div className="absolute top-0 right-0 w-1/2 h-screen">
          <NetworkVisualization />
        </div>

        {showCalendly && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-lg p-8 w-full max-w-2xl">
              <button 
                onClick={() => setShowCalendly(false)}
                className="mb-4 text-forest-green hover:text-emerald-green"
              >
                Close
              </button>
              <InlineWidget url="https://calendly.com/maimondavid553/alumintel-demo" />
            </div>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  )
}