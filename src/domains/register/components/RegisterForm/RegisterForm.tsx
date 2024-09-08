'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { useGeolocation } from '@/domains/common/hooks/geolocation/useGeolocation'
import { useRegister } from '@/domains/register/query/use-register'
import { useCities } from '@/domains/cities/query/useCities'
import Select from '@/views/common/ui/components/Select'
import Button from '@/views/common/ui/components/Button'
import ErrorMessage from '@/domains/login/components/ErrorMessage'
import { cookie } from '@/domains/common/utils/cookie/cookie'
import { registerSchema } from '@/models/register/schema/register'
import { RegisterFormPayload } from '../../types/register-form'
import FieldInput from '@/views/common/ui/components/FieldInput'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import Alert from '@/views/common/ui/components/Alert'

const RegisterForm = () => {
  const router = useRouter()
  const [type, setType] = useState('password')
  const {
    mutate,
    data: result,
  } = useRegister()
  const { data: city } = useCities()

  const form = useForm({
    defaultValues: {
      email: '',
      username: '',
      password: '',
      city: 0,
    },
    resolver: yupResolver(registerSchema),
    mode: 'all',
  })
  const { register, handleSubmit, getValues, formState, setValue } = form
  const { errors } = formState
  const { location } = useGeolocation(); console.log(location)

  const onSubmit = (data: RegisterFormPayload) => {
    console.log(data)
    mutate({
      username: data.username,
      email: data.email,
      password: data.password,
      city_id: data.city,
      lat: location?.latitude ?? 0,
      long: location?.longitude ?? 0,
    })

    if (result?.code === 200) {
      cookie.set('user', {
        email: data.email,
        username: data.username,
        city_id: data.city,
      })

      setTimeout(() => {
        router.push('/login')
      }, 2000)
    }
  }

  return (
    <div>
      {result?.code === 200 && (
        <Alert variant="success">
          <p>Please login with registered account</p>
        </Alert>
      )}
      {result?.error_message && (
        <Alert variant="error">
          <p>{result.error_message}</p>
        </Alert>
      )}
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
          <div className="mt-4">
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
          <div className="mt-4">
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
          <div className="mt-4">
            {errors.password && (
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            )}
          </div>
        </div>

        <div className="w-full">
          <p className="text-sm mb-1">City:</p>
          {city && (
            <Select
              options={
                city
                  ? city?.data?.map((item: any) => {
                    return { label: item.name, value: item.id }
                  })
                  : []
              }
              placeholder="Your city"
              value={getValues('city')}
              onChange={(e) => {
                setValue('city', e)
              }}
            />
          )}
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
    </div>
  )
}

export default RegisterForm
