"'use client'"

import Link from "'next/link'"
import { motion } from "'framer-motion'"
import Image from "'next/image'"

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-emerald-800 text-2xl font-bold flex items-center">
          AlumIntel
          <Image src="/icons8-atom-24.png" alt="AlumIntel Logo" width={24} height={24} className="ml-2" />
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 text-white px-6 py-2 rounded-full hover:bg-teal-600 transition-colors"
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </div>
    </nav>
  )
}

