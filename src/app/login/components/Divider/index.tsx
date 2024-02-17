import React from 'react'

const Divider = () => {
  return (
    <div className="flex items-center my-4">
      <div className="h-[1px] bg-gray-300 w-1/2 mr-4" />
      <span className="text-xs">or</span>
      <div className="h-[1px] bg-gray-300 w-1/2 ml-4" />
    </div>
  )
}

export default Divider
