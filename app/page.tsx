export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
          AutoSphere
        </h1>
        <p className="text-xl text-center text-gray-600 dark:text-gray-400 mb-4">
          Automotive Social Network Platform
        </p>
        <p className="text-center text-gray-500 dark:text-gray-500">
          Connect with car enthusiasts, share experiences, and showcase your vehicles.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">🚗 My Garage</h2>
            <p className="text-gray-600 dark:text-gray-400">Showcase your vehicles and modifications</p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">👥 Communities</h2>
            <p className="text-gray-600 dark:text-gray-400">Join car clubs and connect with enthusiasts</p>
          </div>
          <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">📅 Events</h2>
            <p className="text-gray-600 dark:text-gray-400">Discover and participate in car meets</p>
          </div>
        </div>
      </div>
    </main>
  )
}
