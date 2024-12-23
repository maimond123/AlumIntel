import Navigation from "'./components/navigation'"
import NetworkVisualization from "'./components/network-visualization'"
import Stats from "'./components/stats'"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      <Navigation />
      
      <main className="relative pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10">
            <h1 className="text-7xl font-bold text-emerald-800 mb-4">
              Alumni Intelligence<br />
              for Education<span className="text-teal-500">.</span>
            </h1>
            
            <p className="text-xl text-emerald-700 mb-12 max-w-2xl">
              Our results tell a compelling story:
            </p>

            <Stats />
          </div>

          <NetworkVisualization />
        </div>
      </main>
    </div>
  )
}

