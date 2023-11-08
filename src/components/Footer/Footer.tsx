import React from 'react'

const Footer = () => {
  return (
    <div className='fixed left-0 bottom-0 w-full px-4 py-4 bg-neutral-800 text-white z-10 mt-6'>
      <div className='flex text-sm mb-6 gap-3 max-w-[500px] md:max-w-[700px] lg:max-w-[1024px] 2xl:max-w-[1440px ml-auto mr-auto'>
        <a href='/about' role='button'>About Us</a>
        <a href='/tnc' role='button'>Terms & Conditions</a>
        <a href='/faq' role='button'>FAQ</a>
      </div>
      <p className='text-center text-xs'>Copyrights @2023 Comrades</p>
    </div>
  )
}

export default Footer