import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Navbar that appears on all pages */}
      <Navbar />
      
      {/* Main content area where child routes will be rendered */}
      <main className="min-h-screen">
        <Outlet />
      </main>
      
      {/* Footer (optional) */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 SHIVAM KARN. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout