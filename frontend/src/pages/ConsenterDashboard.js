import React from 'react'

const ConsenterDashboard = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-lg mb-8">Consenter Dashboard Coming Soon!</p>
          <div className="flex justify-center">
            <div className="bg-gray-800 rounded-full p-2">
              <i className="fas fa-envelope text-2xl"></i>
            </div>
          </div>
          <p className="mt-4">Subscribe to our newsletter for updates.</p>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white border-2 border-gray-700 rounded-l-md py-2 px-4 focus:outline-none"
            />
            <button className="bg-blue-600 text-white rounded-r-md py-2 px-4 hover:bg-blue-700 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConsenterDashboard