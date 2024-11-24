import React from 'react'

const Header = () => {
  return (
    <header className="flex shadow-2xl px-5 py-3 mb-4 sticky top-0 left-0 justify-between items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className=' tracking-wide font-bold text-2xl text-white'> Spero Home Healthcare Services</div>
      <div className='flex gap-x-4 items-center'>
        <div className='text-white'>Welcome, Management Dashboard</div>
        <div className='w-9 h-9 rounded-full bg-slate-300'></div>
      </div>
    </header>
  )
}

export default Header