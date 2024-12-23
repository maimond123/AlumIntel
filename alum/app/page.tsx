import Navigation from '../components/navigation'
import NetworkVisualization from '../components/network-visualization'
import Stats from '../components/stats'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
      <Navigation />
      
      <main className="relative min-h-screen w-full">
        <div className="container mx-auto px-6 pt-32">
          <div className="relative z-10">
            <h1 className="text-5xl md:text-7xl font-bold text-emerald-800 mb-4">
              Alumni Intelligence<br />
              for Education<span className="text-teal-500">.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-black-700 mb-12 max-w-2xl">
              Our results tell a compelling story:
            </p>

            <Stats />
          </div>
        </div>

        {/* Network Visualization taking full height */}
        <div className="absolute top-0 right-0 w-1/2 h-screen">
          <NetworkVisualization />
        </div>
      </main>
    </div>
  )
}


