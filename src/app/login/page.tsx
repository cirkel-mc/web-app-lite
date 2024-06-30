'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Button from '@/views/common/ui/components/Button'

import { loginSchema } from '@/models/login/schema/login'
import Title from '../../domains/login/components/Title'
import Subtitle from '../../domains/login/components/Subtitle'
import Divider from '../../domains/login/components/Divider'
import ThirdPartyLogin from '../../domains/login/components/ThirdPartyLogin'
import Banner from '../../domains/login/components/Banner'
import ErrorMessage from '../../domains/login/components/ErrorMessage'
import Input from '@/views/common/ui/components/Input'

interface LoginForm {
  email: string
  password: string
}

function LoginPage() {
  const router = useRouter()
  const form = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(loginSchema),
    mode: 'all',
  })

  const { register, handleSubmit, getValues, formState, setValue } = form
  const { errors } = formState

  const onSubmit = (data: LoginForm) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('user', JSON.stringify(data.email))
      router.push('/')
    }
  }

  return (
    <div className="bg-primary-40 w-screen h-screen">
      <div className="flex-col w-[90%] md:w-full max-w-[500px] fixed z-10 left-1/2 top-1/2 rounded-lg shadow-md bg-white -translate-x-1/2 -translate-y-1/2">
        <div className="w-full p-4">
          <Title />
          <Subtitle />
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="mb-4 w-full">
              <p className="text-sm mb-2">Email</p>
              <Input
                type="email"
                alt="Please input your email"
                placeholder="Ex: johndoe@gmail.com"
                {...register('email')}
                onChange={(e) => {
                  setValue('email', e.target.value)
                }}
                value={getValues('email')}
              />
            </div>
            {errors.email && (
              <ErrorMessage>{errors?.email?.message}</ErrorMessage>
            )}
            <div className="mb-4" />
            <div className="mb-4 w-full">
              <p className="text-sm mb-2">Password</p>
              <Input
                type="password"
                alt="Please input your password"
                placeholder="Your password"
                {...register('password')}
                onChange={(e) => {
                  setValue('password', e.target.value)
                }}
                value={getValues('password')}
              />
            </div>
            {errors.password && (
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            )}
            <Button
              disabled={!!errors?.email || !!errors?.password}
              classes="w-full mt-6 text-sm py-2"
              size="sm"
              round="md"
              variant="primary"
              btnType="fill"
              type="submit"
            >
              Sign in
            </Button>
          </form>
          <Divider />
          <ThirdPartyLogin href="" text="Sign in with Google" />
          <p className="text-xs mt-6 text-center">
            Does not have account?{' '}
            <Link href="/register" className="text-primary-500">
              Sign up here
            </Link>
          </p>
        </div>
        <Banner />
      </div>
    </div>
  )
}

export default LoginPage
