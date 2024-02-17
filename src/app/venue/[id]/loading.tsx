import React from 'react'

const Loading = () => {
  return (
    <div className="w-full box-border overflow-hidden">
      <div className="w-full h-[240px] bg-slate-300 animate-pulse rounded-b-2xl" />
      <div className="w-[170px] h-6 mx-auto my-4 bg-slate-300 animate-pulse rounded-md"></div>
      <div className="w-[100px] h-4 my-4 ml-4 bg-slate-300 animate-pulse rounded-md"></div>
      <div className="w-[90%] box-border h-10 my-4 ml-4 mr-4 bg-slate-300 animate-pulse rounded-md" />
      <div className="flex gap-2 mt-6 pl-4 pr-4">
        <div className="w-[67px] bg-slate-300 h-9 animate-pulse rounded-md" />
        <div className="w-[67px] bg-slate-300 h-9 animate-pulse rounded-md" />
        <div className="w-[67px] bg-slate-300 h-9 animate-pulse rounded-md" />
        <div className="w-[67px] bg-slate-300 h-9 animate-pulse rounded-md" />
      </div>
    </div>
  )
}

export default Loading
