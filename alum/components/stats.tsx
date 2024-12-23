'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Partner Schools' },
  { value: '5000+', label: 'Alumni Tracked' },
  { value: '95%', label: 'Engagement Rate' },
  { value: '4.9', label: 'Client Rating' },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8 md:mt-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.5 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold text-yellow-500 mb-2">
            {stat.value}
          </div>
          <div className="text-sm md:text-base text-emerald-700">
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

