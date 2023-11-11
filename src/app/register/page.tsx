import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/ui/component/Button'
import LoginImage from '@/assets/login image.png'
import { Sound, Google } from 'iconsax-react';

const RegisterPage = () => {
  return (
    <div className='flex-col md:flex md:flex-row w-[80%] max-w-[700px] fixed z-10 left-1/2 top-1/2 rounded-lg shadow-md bg-white -translate-x-1/2 -translate-y-1/2'>
      <div className='w-full md:width-2/5 p-4'>
        <p className="text-3xl text-center">Comrades</p>
        <p className='text-center text-xs mt-2 mb-4'>Sign up</p>
        <div className='mb-4 w-full'>
          <p className='text-sm mb-1'>Email:</p>
          <input type="text" alt="" placeholder="Ex: johndoe@gmail.com" className='w-full text-sm rounded-lg border-gray-800 border-[1px] py-2 px-3' />
        </div>
        <div className='w-full mb-4'>
          <p className='text-sm mb-1'>Username:</p>
          <input type="text" alt="" placeholder="Ex: John Doe" className='w-full text-sm rounded-lg border-gray-800 border-[1px] py-2 px-3' />
        </div>
        <div className='w-full'>
          <p className='text-sm mb-1'>Password:</p>
          <input type="password" alt="" placeholder="Your password" className='w-full text-sm rounded-lg border-gray-800 border-[1px] py-2 px-3' />
        </div>
        <Button size='sm' round='md' variant='primary' type='fill' classes='w-full mt-6 text-sm py-2' >Sign up</Button>
        <div className='flex items-center my-4'>
          <div className='h-[1px] bg-gray-300 w-1/2 mr-4' />
          <span className='text-xs'>or</span>
          <div className='h-[1px] bg-gray-300 w-1/2 ml-4' />
        </div>
        <a href='' className='flex items-center gap-2 justify-center w-full text-sm bg-white text-black hover:bg-white mb-2' >
          <Google />
          Sign up with Google
        </a>
        <a href='' className='flex items-center gap-2 justify-center w-full text-sm bg-white text-black hover:bg-white' >
          <Sound />
          Sign up with SoundCloud
        </a>
        <p className='text-xs mt-6 text-center'>Already have account? <Link href="/login" className='text-sky-500'>Sign in here</Link></p>
      </div>
      <div className='w-full md:width-3/5 relative'>
        <Image src={LoginImage} fill alt='' className='rounded-r-lg object-cover' />
      </div>

    
    </div>
  )
}

export default RegisterPage