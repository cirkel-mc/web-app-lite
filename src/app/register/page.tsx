import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '../../domains/register/components/Title'
import Subtitle from '../../domains/register/components/Subtitle'
import Banner from '../../domains/register/components/Banner'
import ThirdPartyLogin from '../../domains/register/components/ThirdPartyLogin'
import Divider from '../../domains/register/components/Divider'
import RegisterForm from '@/domains/register/components/RegisterForm'

function RegisterPage() {
  return (
    <div className="w-screen h-screen bg-primary-40">
      <div className="flex-col w-[90%] md:w-full max-w-[500px] fixed z-10 left-1/2 top-1/2 rounded-lg shadow-md bg-white -translate-x-1/2 -translate-y-1/2">
        <div className="w-full p-4">
          <Title />
          <Subtitle />
          <RegisterForm />
          <Divider />
          <ThirdPartyLogin
            href=""
            icon={<FontAwesomeIcon icon="google" />}
            text="Sign in with Google"
          />
          <p className="text-xs mt-6 text-center">
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
