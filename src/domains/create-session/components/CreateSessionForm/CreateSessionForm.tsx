'use client'

import React, { Fragment, useState, useEffect, useCallback } from 'react'
import ToggleCategory from '@/views/session/components/ToggleCategory'
import FieldInput from '@/views/common/ui/components/FieldInput'
import FieldSelect from '@/views/common/ui/components/FieldSelect'
import { faClock, faCalendar, faPlus } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '@/views/common/ui/components/Checkbox'
import BottomSheetCalendar from '@/domains/common/components/BottomSheetCalendar/BottomSheetCalendar'
import dayjs, { Dayjs } from 'dayjs'
import Select from '@/views/common/ui/components/Select'
import { HOUR_OPTIONS } from '@/domains/common/components/HomeFilter/constants'
import FilterItem from '@/domains/common/components/FilterItem/FilterItem'
import Button from '@/views/common/ui/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useCreateSession } from '@/domains/create-session/usecase/useCreateSession'
import { useCreateSessionForm } from '@/domains/create-session/usecase/useCreateSessionForm'
import { MOCK_GENRES } from '@/app/create-session/mock-data-genres'
import ErrorMessage from '@/domains/login/components/ErrorMessage'
import { emitter } from '@/domains/common/utils/event/emitter'
import MemberCard from '@/domains/create-session/components/MemberCard'
import { MusicianAttribute } from '@/models/user/types/musician-types'
import { UseFormReturn } from 'react-hook-form'

interface Deps {
  form: any
  setCurrent: React.Dispatch<React.SetStateAction<string>>
  category: string
  isRecurring: boolean
  open: boolean
  date: Dayjs | null
  genre: string[]
  countMember: number
  members: Partial<MusicianAttribute>[]
  setGenre: React.Dispatch<React.SetStateAction<string[]>>
  setCategory: React.Dispatch<React.SetStateAction<string>>
  setRecurring: React.Dispatch<React.SetStateAction<boolean>>
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>
  setCountMember: React.Dispatch<React.SetStateAction<number>>
}

const CreateSession = ({
  form,
  category,
  isRecurring,
  open,
  date,
  genre,
  countMember,
  members,
  setCategory,
  setGenre,
  setRecurring,
  setOpen,
  setCountMember,
  setCurrent,
}: Deps) => {
  const { formState, handleSubmit, setValue, getValues, register } = form
  const { errors } = formState

  const validSubmit = () => {
    alert(`Success: ${JSON.stringify(getValues())}`)
  }

  const invalidSubmit = () => {
    alert(`Error: ${JSON.stringify({ ...errors })}`)
  }

  const handleToggleGenre = useCallback(
    (s: string) => {
      if (!genre.some((item) => s === item)) {
        setGenre([...genre, s])
      } else if (genre.some((item) => s === item)) {
        setGenre(genre.filter((item) => item !== s))
      }
      setValue('genre', [...genre, s])
    },
    [genre.length],
  )

  const renderMember = useCallback(() => {
    const m = []
    for (let i = 0; i < countMember; i++) {
      if (members[i] !== undefined)
        m.push(
          <MemberCard
            isEmpty={false}
            member={members[i]}
            onClick={() => setCurrent('member')}
          />,
        )
      else m.push(<MemberCard isEmpty onClick={() => setCurrent('member')} />)
    }
    return m
  }, [countMember])

  return (
    <form onSubmit={handleSubmit(validSubmit, invalidSubmit)} noValidate>
      <div className="h-[80px]" />
      <div className="flex flex-col max-w-[500px] pb-[80px] mx-auto px-4 overflow-hidden">
        <ToggleCategory
          containerClass="mb-4"
          onChange={(e) => {
            setValue('category', e)
            setCategory(e)
          }}
        />
        <div>
          <FieldInput
            containerClass="mb-3"
            label="Event Name"
            type="text"
            placeholder="Your event name"
            value={getValues('eventName')}
            onChange={(e) => {
              setValue('eventName', e.target.value)
            }}
          />
          {errors.eventName && (
            <ErrorMessage>{errors?.eventName?.message}</ErrorMessage>
          )}
          <p>When it will be?</p>
          <div className="flex gap-3 items-end w-full mb-3">
            <FieldInput
              containerClass="w-1/2"
              label=""
              type="text"
              placeholder="DD/MM/YYYY"
              onChange={() => null}
              icon={faCalendar}
              onClick={() => setOpen(true)}
              value={dayjs(getValues('date')).format('DD/MM/YYYY')}
            />

            <div className="w-1/2">
              <Select
                options={HOUR_OPTIONS}
                placeholder="HH:MM"
                icon={faClock}
                iconPosition="right"
                value={getValues('time')}
                onChange={(e) => {
                  setValue('time', e)
                }}
              />
            </div>
          </div>
          <div className="flex justify-end">
            {errors.date && (
              <div>
                <ErrorMessage>{errors?.date?.message}</ErrorMessage>
              </div>
            )}
            {errors.time && (
              <div>
                <ErrorMessage>{errors?.time?.message}</ErrorMessage>
              </div>
            )}
          </div>
          {category === 'Jamming Session' ? (
            <>
              <div>
                <FieldSelect
                  label="Where is it?"
                  options={[
                    { label: 'Select Place', value: '' },
                    { label: 'Studio Nirwana', value: 'Studio Nirwana' },
                    { label: 'Boomerang Nirwana', value: 'Boomerang Nirwana' },
                  ]}
                  placeholder="Select Location"
                  onChange={(e) => {
                    setValue('location', e)
                  }}
                  value={getValues('location')}
                />
              </div>
              <div className="mt-3">
                {errors.location && (
                  <ErrorMessage>{errors?.location?.message}</ErrorMessage>
                )}
              </div>
            </>
          ) : (
            <div>
              <p className="mb-2">Where is it?</p>
              <textarea
                className="px-4 py-2 text-base border-2 border-neutral-500 rounded-[24px] placeholder:font-medium placeholder:text-neutral-500 text-neutral-500 font-medium w-full focus:outline-none"
                placeholder="Put your location"
                onChange={(e) => {
                  setValue('location', e.target.value)
                }}
                value={getValues('location')}
              >
                {getValues('location')}
              </textarea>
              {errors.location && (
                <ErrorMessage>{errors?.location?.message}</ErrorMessage>
              )}
            </div>
          )}
          <div className="flex justify-between mt-3">
            <span>Recurring Events?</span>
            <Checkbox
              onToggle={() => {
                setRecurring(!isRecurring)
                setValue('isRecurring', !isRecurring)
              }}
            />
          </div>
          <div className="h-[1px] w-full bg-gray-300 mt-4" />
        </div>
        <div className="pt-4">
          <div className="mb-4">
            <p>Choose Genre</p>
            <div className="mt-2 flex gap-2 overflow-auto pb-1">
              {MOCK_GENRES.map((g) => (
                <FilterItem
                  key={g}
                  label={g}
                  // @ts-expect-error
                  isActive={getValues('genre').some((item) => item === g)}
                  onClick={() => handleToggleGenre(g)}
                />
              ))}
            </div>
            <div className="mt-2">
              {errors.genre && (
                <ErrorMessage>{errors?.genre?.message}</ErrorMessage>
              )}
            </div>
          </div>
          <div className="mb-4">
            <div className="flex justify-between mb-4">
              <p className="mb-2">Add Member</p>
              <div className="flex justify-around w-[85px] items-center">
                <div
                  className="border-[2px] border-neutral-500 rounded w-[22px] h-[22px] flex justify-center items-center"
                  onClick={() => {
                    if (countMember > 1) setCountMember((prev) => prev - 1)
                  }}
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="w-4 h-4 text-neutral-500"
                  />
                </div>
                <span>{countMember}</span>
                <div
                  className="border-[2px] border-neutral-500 rounded w-[22px] h-[22px] flex justify-center items-center"
                  onClick={() => setCountMember((prev) => prev + 1)}
                >
                  <FontAwesomeIcon
                    icon={faAdd}
                    className="w-4 h-4  text-neutral-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-2 overflow-auto py-2">
              {renderMember()}
            </div>
            <div className="mt-2">
              {errors.member && (
                <ErrorMessage>{errors?.member?.message}</ErrorMessage>
              )}
            </div>
          </div>
          <div className="h-[1px] w-full bg-gray-300 mt-6 mb-[30px]" />
        </div>
        <div className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-2xl z-50">
          <Button
            type="submit"
            variant="secondary"
            size="md"
            round="md"
            classes="w-full"
          >
            Create Session
          </Button>
        </div>
      </div>
      <BottomSheetCalendar
        open={open}
        value={date}
        onClose={() => setOpen(false)}
        onChange={(newValue: Date) => {
          setValue('date', newValue)
        }}
      />
    </form>
  )
}

export default CreateSession
