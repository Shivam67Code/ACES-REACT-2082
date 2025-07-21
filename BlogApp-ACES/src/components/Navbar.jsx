import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="relative overflow-hidden rounded-xl border border-blue-500/20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 backdrop-blur-md" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute h-4 w-4 rounded-full bg-blue-400/10 animate-float top-4 left-[10%]" />
          <div className="absolute h-3 w-3 rounded-full bg-blue-400/10 animate-float top-8 left-[20%] [animation-delay:0.5s]" />
          <div className="absolute h-5 w-5 rounded-full bg-blue-400/10 animate-float top-6 left-[80%] [animation-delay:1s]" />
          <div className="absolute h-6 w-6 rounded-full bg-blue-400/10 animate-float top-2 left-[60%] [animation-delay:1.5s]" />
        </div>
        <div className="relative px-4 sm:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur group-hover:blur-md transition-all duration-300" />
                <svg className="relative w-8 sm:w-10 h-8 sm:h-10 text-white transform group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.721 12.752a9.711 9.711 0 00-.945-5.003 12.754 12.754 0 01-4.339 2.708 18.991 18.991 0 01-.214 4.772 17.165 17.165 0 005.498-2.477zM14.634 15.55a17.324 17.324 0 00.332-4.647c-.952.227-1.945.347-2.966.347-1.021 0-2.014-.12-2.966-.347a17.515 17.515 0 00.332 4.647 17.385 17.385 0 005.268 0zM9.772 17.119a18.963 18.963 0 004.456 0A17.182 17.182 0 0112 21.724a17.18 17.18 0 01-2.228-4.605zM7.777 15.23a18.87 18.87 0 01-.214-4.774 12.753 12.753 0 01-4.34-2.708 9.711 9.711 0 00-.944 5.004 17.165 17.165 0 005.498 2.477zM21.356 14.752a9.765 9.765 0 01-7.478 6.817 18.64 18.64 0 001.988-4.718 18.627 18.627 0 005.49-2.098zM2.644 14.752c1.682.971 3.53 1.688 5.49 2.099a18.64 18.64 0 001.988 4.718 9.765 9.765 0 01-7.478-6.816zM13.878 2.43a9.755 9.755 0 016.116 3.986 11.267 11.267 0 01-3.746 2.504 18.63 18.63 0 00-2.37-6.49zM12 2.276a17.152 17.152 0 012.805 7.121c-.897.23-1.837.353-2.805.353-.968 0-1.908-.122-2.805-.353A17.151 17.151 0 0112 2.276zM10.122 2.43a18.629 18.629 0 00-2.37 6.49 11.266 11.266 0 01-3.746-2.504 9.755 9.755 0 016.116-3.985z" />
                </svg>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-white">SHIVAM KARN</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/home" className="relative group px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-1">
                  <svg className="w-4 h-4 text-amber-400 group-hover:text-amber-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-amber-300 font-medium group-hover:text-amber-100 transition-colors duration-300">Home</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-300 group-hover:w-3/4 transition-all duration-400" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white/40 group-hover:w-1/2 transition-all duration-600 delay-100" />
              </Link>
              
              <Link to="/create" className="relative group px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-1">
                  <svg className="w-4 h-4 text-blue-400 group-hover:text-blue-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-blue-300 font-medium group-hover:text-blue-100 transition-colors duration-300">Create</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-300 group-hover:w-3/4 transition-all duration-400" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white/40 group-hover:w-1/2 transition-all duration-600 delay-100" />
              </Link>
              
              <Link to="/edit" className="relative group px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-1">
                  <svg className="w-4 h-4 text-green-400 group-hover:text-green-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <span className="text-green-300 font-medium group-hover:text-green-100 transition-colors duration-300">Edit</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-300 group-hover:w-3/4 transition-all duration-400" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white/40 group-hover:w-1/2 transition-all duration-600 delay-100" />
              </Link>
              
              <Link to="/liked" className="relative group px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-1">
                  <svg className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span className="text-pink-400 font-medium group-hover:text-pink-200 transition-colors duration-300">Liked</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-300 group-hover:w-3/4 transition-all duration-400" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white/40 group-hover:w-1/2 transition-all duration-600 delay-100" />
              </Link>
              
              <Link to="/single" className="relative group px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-1">
                  <svg className="w-4 h-4 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                  <span className="text-indigo-300 font-medium group-hover:text-indigo-100 transition-colors duration-300">Blogs</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-300 group-hover:w-3/4 transition-all duration-400" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white/40 group-hover:w-1/2 transition-all duration-600 delay-100" />
              </Link>
              
              <Link to="/learning" className="relative group px-4 py-2 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="absolute inset-0 bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300" />
                <div className="relative flex items-center space-x-1">
                  <svg className="w-4 h-4 text-yellow-400 group-hover:text-yellow-200 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-yellow-400 font-medium group-hover:text-yellow-200 transition-colors duration-300">Learning</span>
                </div>
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-300 group-hover:w-3/4 transition-all duration-400" />
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white/40 group-hover:w-1/2 transition-all duration-600 delay-100" />
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button className="hidden sm:flex relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
                <div className="relative px-5 sm:px-7 py-2 sm:py-3 bg-blue-950 rounded-lg leading-none flex items-center">
                  <div className="flex items-center space-x-2">
                    <span className="text-blue-200 group-hover:text-white transition duration-200">Get Started</span>
                    <svg className="w-5 h-5 text-blue-200 group-hover:text-white transform group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </button>
              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="md:hidden relative group" 
                aria-label="Toggle mobile menu"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded blur opacity-60 group-hover:opacity-100 transition duration-200" />
                <div className="relative p-2 bg-blue-950 rounded leading-none">
                  {!isOpen ? (
                    <svg className="w-6 h-6 text-blue-200 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-blue-200 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              </button>
            </div>
          </div>
          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="relative mt-4 md:hidden animate-slide-down">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-900/50 backdrop-blur-sm rounded-lg border border-blue-500/10">
                <Link to="/home" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/create" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Create</Link>
                <Link to="/edit" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Edit</Link>
                <Link to="/liked" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>💖 Liked</Link>
                <Link to="/single" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Blogs Page</Link>
                <Link to="/learning" className="block px-3 py-2 rounded-md text-base font-medium text-blue-100 hover:text-white hover:bg-blue-800/50 transition-all duration-200" onClick={() => setIsOpen(false)}>Learning</Link>
                <div className="px-3 py-2">
                  <button className="w-full relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-200" />
                    <div className="relative px-4 py-2 bg-blue-950 rounded-lg leading-none flex items-center justify-center">
                      <span className="text-blue-200 group-hover:text-white transition duration-200">Get Started</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar