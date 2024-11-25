import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="flex items-center shadow-2xl px-5 py-3 mb-4 sticky top-0 left-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
    {/* Logo */}
    <div className="flex-1 tracking-wide font-bold text-xl sm:text-2xl text-white">
      Spero Home Healthcare Services
    </div>

    {/* Hamburger Icon (visible on small screens) */}
    <div className="sm:hidden flex items-center">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>

    {/* Desktop Menu */}
    <div className="hidden sm:flex gap-x-4 items-center">
      <div className="text-white">Welcome, Management Dashboard</div>
      <div className="w-9 h-9 rounded-full bg-slate-300"></div>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
      <div className="absolute top-16 left-0 w-full bg-white shadow-lg sm:hidden">
        <div className="flex flex-col gap-y-3 px-5 py-4">
          <div className="text-indigo-600 font-medium">Welcome, Management Dashboard</div>
          <div className="w-9 h-9 rounded-full bg-slate-300 self-start"></div>
        </div>
      </div>
    )}
  </header>
  )
}

export default Header