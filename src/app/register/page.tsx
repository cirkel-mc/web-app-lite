import React from 'react'
import Link from 'next/link'
import Title from '../../domains/login/components/Title'
import Subtitle from '../../domains/register/components/Subtitle'
import Banner from '../../domains/register/components/Banner'
import Divider from '../../domains/register/components/Divider'
import RegisterForm from '@/domains/register/components/RegisterForm'

function RegisterPage() {
  return (
    <div className="bg-slate-200 w-screen h-screen ">
      <div className="flex-col bg-neutral-700 w-[90%] md:w-full max-w-[400px] fixed z-10 left-1/2 top-1/2 rounded-[24px] shadow-md -translate-x-1/2 -translate-y-1/2">
        <div className="w-full p-4">
          <Title />
          <Subtitle />
          <RegisterForm />
          <Divider />
          {/* <ThirdPartyLogin
            href=""
            text="Sign up with Google"
          /> */}
          <p className="text-xs mt-6 text-center text-white">
            Already have account?{' '}
            <Link href="/login" className="text-primary-500">
              Sign in here
            </Link>
          </p>
        </div>
        <Banner />
      </div>
    </div>
  )
}

export default RegisterPage
