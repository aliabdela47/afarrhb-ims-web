import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
              AfarRHB Inventory Management System
            </h1>
            <p className="text-gray-600 mb-8">
              Phase 0: Bootstrap Complete ✅
            </p>
            
            <div className="space-y-4">
              <div className="p-6 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-xl text-white">
                <p className="text-lg font-semibold mb-2">Tech Stack:</p>
                <ul className="text-sm space-y-1 text-left">
                  <li>✓ React 18 + TypeScript</li>
                  <li>✓ Vite</li>
                  <li>✓ Tailwind CSS</li>
                  <li>✓ Firebase Web SDK (v10+)</li>
                </ul>
              </div>

              <div className="p-6 border border-gray-200 rounded-xl">
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Count: {count}
                </button>
              </div>

              <div className="text-sm text-gray-500">
                <p>Ready for Phase 1 development 🚀</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
