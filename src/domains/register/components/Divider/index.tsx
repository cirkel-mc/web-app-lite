import React from 'react'

function Divider() {
  return (
    <div className="flex items-center my-4 text-white">
      <div className="h-[1px] bg-gray-300 w-1/2 mr-4" />
      <span className="text-sm">or</span>
      <div className="h-[1px] bg-gray-300 w-1/2 ml-4" />
    </div>
  )
}

export default Divider
