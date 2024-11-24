import React from 'react'

const ServiceDetails = ({ services }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h2 className="font-bold text-center text-lg mb-2">Service Details</h2>
      <div className='flex gap-3 mb-5 justify-center text-sm'>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-blue-500'></div>
          <div>Completed Services</div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-blue-900'></div>
          <div>Ongoing</div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='w-3 h-3 bg-red-500'></div>
          <div>Pending</div>
        </div>
      </div>
      <div className='flex flex-col '>
        <div className='flex items-center gap-3 mb-3' >
          <p>Physician service :</p>
          <p className='bg-blue-500 w-12 h-6 text-center text-white'>12</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Healthcare attendents :</p>
          <p className='bg-red-500 w-48 h-6 text-center text-white'>12</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Respitratory care :</p>
          <p className='bg-blue-900 w-24 h-6 text-center text-white'>19</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Nurse :</p>
          <p className='bg-blue-500 w-10 h-6 text-center text-white'>8</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Physician assistant :</p>
          <p className='bg-blue-900 w-4 h-6 text-center text-white'>2</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Physotherapy :</p>
          <p className='bg-red-500 w-10 h-6 text-center text-white'>10</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Laboratory services :</p>
          <p className='bg-blue-900 w-24 h-6 text-center text-white'>19</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Medical Transportation :</p>
          <p className='bg-blue-500 w-16 h-6 text-center text-white'>12</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Medical Equipment  :</p>
          <p className='bg-red-500 w-24 h-6 text-center text-white'>19</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>X- Ray :</p>
          <p className='bg-blue-900  h-6 text-center text-white'>0</p>
        </div>
        <div className='flex items-center gap-3 mb-3' >
          <p>Physician Service(MBBS) :</p>
          <p className='bg-blue-500 w-3 h-6 text-center text-white'>1</p>
        </div>
      </div>

    </div>
  )
}

export default ServiceDetails