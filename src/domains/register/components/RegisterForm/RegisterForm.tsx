'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import Select from '@/views/common/ui/components/Select'
import Button from '@/views/common/ui/components/Button'
import ErrorMessage from '@/domains/login/components/ErrorMessage'
import { cookie } from '@/domains/common/utils/cookie/cookie'
import { registerSchema } from '@/models/register/schema/register'
import { RegisterFormPayload } from '../../types/register-form'
import FieldInput from '@/views/common/ui/components/FieldInput'
import { cityOptions } from '@/models/common/mock-data/cities'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const RegisterForm = () => {
  const router = useRouter()
  const [cities, setCities] = useState([])
  const [type, setType] = useState('password')

  const form = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      city: '',
    },
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })
  const { register, handleSubmit, getValues, formState, setValue } = form
  const { errors } = formState

  const onSubmit = (data: RegisterFormPayload) => {
    cookie.set('user', {
      email: data.email,
      username: data.username,
      cities,
    })
    // router.push('/onboard')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 w-full">
        <FieldInput
          label="Email:"
          type="text"
          placeholder="Ex: johndoe@gmail.com"
          {...register('email')}
          onChange={(e) => {
            setValue('email', e.target.value)
          }}
          value={getValues('email')}
        />
        <div className="mt-2">
          {errors.email && (
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          )}
        </div>
      </div>
      <div className="w-full mb-4">
        <FieldInput
          label="Username:"
          type="text"
          placeholder="Ex: John Doe"
          {...register('username')}
          onChange={(e) => {
            setValue('username', e.target.value)
          }}
          value={getValues('username')}
        />
        <div className="mt-2">
          {errors.username && (
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          )}
        </div>
      </div>
      <div className="w-full mb-4">
        <FieldInput
          label="Password:"
          type={type}
          placeholder="Your password"
          icon={type === 'password' ? faEye : faEyeSlash}
          iconClick={() => {
            if (type === 'password') setType('text')
            else if (type === 'text') setType('password')
          }}
          {...register('password')}
          onChange={(e) => {
            setValue('password', e.target.value)
          }}
          value={getValues('password')}
        />
        <div className="mt-2">
          {errors.password && (
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          )}
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm mb-1">City:</p>
        <Select
          options={cityOptions}
          placeholder="Your city"
          value={getValues('city')}
          onChange={(e) => {
            setValue('city', e)
          }}
        />
      </div>
      <Button
        disabled={!!errors.email || !!errors.password || !!errors.username}
        size="sm"
        round="md"
        variant="primary"
        btnType="fill"
        type="submit"
        classes="w-full mt-6 text-sm py-2"
      >
        Sign up
      </Button>
    </form>
  )
}

export default RegisterForm
