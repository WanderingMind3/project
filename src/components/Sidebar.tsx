import React from 'react'

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-64 bg-white h-full border-r">
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-lg font-bold">My App</span>
      </div>
      <div className="flex flex-col p-4">
        <a href="#" className="mb-4 text-gray-600 hover:text-gray-800">
         Contact
        </a>
        <a href="#" className="mb-4 text-gray-600 hover:text-gray-800">
          Charts and Maps
        </a>
     
      </div>
    </div>
  )
}

export default Sidebar