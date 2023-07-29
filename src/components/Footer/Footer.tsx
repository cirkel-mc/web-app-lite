import React from 'react'

const Footer = () => {
  return (
    <div className='relative left-0 bottom-0 w-full px-4 py-4 bg-sky-500 text-white -z-10'>
      <div className='flex text-sm mb-6 gap-3 max-w-[500px] ml-auto mr-auto'>
        <a href='/about' role='button'>About Us</a>
        <a href='/tnc' role='button'>Terms & Conditions</a>
        <a href='/faq' role='button'>FAQ</a>
      </div>
      <p className='text-center text-xs'>Copyrights @2023 Comrades</p>
    </div>
  )
}

export default Footer