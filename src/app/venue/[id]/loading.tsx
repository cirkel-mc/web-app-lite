import React from 'react'

function Loading() {
  return (
    <div className="w-full box-border overflow-hidden">
      <div className="w-full h-[240px] bg-slate-300 animate-pulse rounded" />
      <div className='flex justify-around mt-4'>
        <div className='h-5 w-[70px] bg-slate-300 animate-pulse rounded' />
        <div className='h-5 w-[70px] bg-slate-300 animate-pulse rounded' />
        <div className='h-5 w-[70px] bg-slate-300 animate-pulse rounded' />
      </div>
      <div className='w-full h-1 bg-slate-300 animate-pulse rounded mt-2' />
      <div className='flex items-center mt-6 '>
        <div className='w-6 h-6 bg-slate-300 animate-pulse rounded' />
        <div className="flex gap-4 pl-4 pr-4 overflow-hidden w-full">
          <div className="min-w-[67px] bg-slate-300 h-9 animate-pulse rounded" />
          <div className="min-w-[67px] bg-slate-300 h-9 animate-pulse rounded" />
          <div className="min-w-[67px] bg-slate-300 h-9 animate-pulse rounded" />
          <div className="min-w-[67px] bg-slate-300 h-9 animate-pulse rounded" />
          <div className="min-w-[67px] bg-slate-300 h-9 animate-pulse rounded" />
          <div className="min-w-[67px] bg-slate-300 h-9 animate-pulse rounded" />
        </div>
      </div>
      <div className='mt-4 flex gap-4 items-center w-full'>
        <div className='w-6 h-6 bg-slate-300 animate-pulse rounded-full' />
        <div className='flex justify-between w-full gap-4'>
          <div className='rounded w-1/2 h-6 bg-slate-300 animate-pulse' />
          <div className='rounded w-1/2 h-6 bg-slate-300 animate-pulse' />
          <div />
        </div>
      </div>
    </div>
  )
}

export default Loading
