import React from 'react'
import { motion } from 'framer-motion';

const InfoCard = ({ title, value, bgColor }) => {
  return (
    <motion.div
      className={`p-4 w-36 h-24  rounded-lg shadow-lg text-white ${bgColor}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
    <div className='text-center text-sm font-bold'>{title}</div>
    <div className="text-2xl text-center font-bold">{value}</div>
  </motion.div>
  )
}

export default InfoCard