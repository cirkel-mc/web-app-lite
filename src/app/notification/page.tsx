import React from 'react'

const NotificationPage = () => {
  return (
    <div className='mt-[80px]'>
      <div className='flex gap-2 px-4'>
        <div className='rounded-2xl w-fit py-1 px-4 shadow-lg border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white'>View all</div>
        <div className='rounded-2xl w-fit py-1 px-4 shadow-lg border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white'>Unread</div>
        <div className='rounded-2xl w-fit py-1 px-4 shadow-lg border-[1px] border-gray-100 hover:bg-secondary-40 hover:border-none hover:text-white'>Read</div>
      </div>
      <div className='flex flex-col py-4 mt-4'>
        {/* Notif Item  */}
        <div className='flex gap-4 relative hover:bg-gray-200 px-4 py-4 bg-gray-200'>
          <div className='w-[40px] h-[40px] rounded-full bg-cyan-400 flex justify-center items-center text-white'>SU</div>
          <div className='flex-col gap-2'>
            <p className='font-medium text-base leading-6'>Your booking has been successfull</p>
            <div className='flex justify-between text-sm text-gray-500 leading-6'>
              <p>Thursday 3.12pm</p>
              <p>2 hours ago</p>
            </div>
          </div>
          <div className='w-3 h-3 bg-blue-500 rounded-full absolute right-4 top-4' />
        </div>
        {/* Notif Item  */}
        <div className='flex gap-4 relative hover:bg-gray-200 px-4 py-4 bg-gray-200'>
          <div className='w-[40px] h-[40px] rounded-full bg-cyan-400 flex justify-center items-center text-white'>SU</div>
          <div className='flex-col gap-2'>
            <p className='font-medium text-base leading-6'>Your booking has been successfull</p>
            <div className='flex justify-between text-sm text-gray-500 leading-6'>
              <p>Thursday 3.12pm</p>
              <p>2 hours ago</p>
            </div>
          </div>
          <div className='w-3 h-3 bg-blue-500 rounded-full absolute right-4 top-4' />
        </div>
        {/* Notif Item  */}
        <div className='flex gap-4 relative hover:bg-gray-200 px-4 py-4 bg-gray-200'>
          <div className='w-[40px] h-[40px] rounded-full bg-cyan-400 flex justify-center items-center text-white'>SU</div>
          <div className='flex-col gap-2'>
            <p className='font-medium text-base leading-6'>Your booking has been successfull</p>
            <div className='flex justify-between text-sm text-gray-500 leading-6'>
              <p>Thursday 3.12pm</p>
              <p>2 hours ago</p>
            </div>
          </div>
          <div className='w-3 h-3 bg-blue-500 rounded-full absolute right-4 top-4' />
        </div>
        {/* Notif Item  */}
        <div className='flex gap-4 relative hover:bg-gray-200 px-4 py-4'>
          <div className='w-[40px] h-[40px] rounded-full bg-cyan-400 flex justify-center items-center text-white'>SU</div>
          <div className='flex-col gap-2'>
            <p className='font-medium text-base leading-6'>Your booking has been successfull</p>
            <div className='flex justify-between text-sm text-gray-500 leading-6'>
              <p>Thursday 3.12pm</p>
              <p>2 hours ago</p>
            </div>
          </div>
        </div>
        {/* Notif Item  */}
        <div className='flex gap-4 relative hover:bg-gray-200 px-4 py-4'>
          <div className='w-[40px] h-[40px] rounded-full bg-cyan-400 flex justify-center items-center text-white'>SU</div>
          <div className='flex-col gap-2'>
            <p className='font-medium text-base leading-6'>Your booking has been successfull</p>
            <div className='flex justify-between text-sm text-gray-500 leading-6'>
              <p>Thursday 3.12pm</p>
              <p>2 hours ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationPage