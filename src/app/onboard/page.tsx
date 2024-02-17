'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'

import Button from '@/views/common/ui/components/Button'
import BandMemberImage from '@/views/common/assets/Pro.png'
import JamSessionImage from '@/views/common/assets/Casual.png'

const Onboarding = () => {
  const router = useRouter()
  const [preference, setPreference] = useState<string | undefined>('casual')
  const [step, setStep] = useState(1)
  const [instrument, setInstrument] = useState<string | undefined>('')
  const [level, setLevel] = useState<string | undefined>('')
  const [genre, setGenre] = useState<string | undefined>('')

  const handlePreference = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset.value
    setPreference(value)
  }

  const handleInstrument = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset.value
    setInstrument(value)
  }

  const handleGenre = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset.value
    setGenre(value)
  }

  const handleLevel = (e: React.MouseEvent<HTMLDivElement>) => {
    const value = e.currentTarget.dataset.value
    setLevel(value)
  }

  const handleNext = () => {
    if (step !== 2) {
      setStep((prev) => prev + 1)
    }
    if (step === 2) {
      router.push('/')
    }
  }

  const handleBack = () => {
    if (step !== 1) {
      setStep((prev) => prev - 1)
    }
  }

  return (
    <div className="w-screen h-screen bg-primary-500">
      <div className="pt-6 px-10 pb-10 fixed w-full h-full md:h-[unset]  md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 shadow-1 rounded-lg bg-white md:max-w-[800px] overflow-auto md:min-w-[700px]">
        {step === 1 ? (
          <div className="mb-6">
            <p className="text-lg leading-6 font-semibold text-center sm:text-2xl mb-1">
              What are you looking for ?
            </p>
            <p className="text-sm text-gray-500 text-center sm:text-base">
              Please choose your why you using comrades
            </p>
          </div>
        ) : (
          <div className="mb-6">
            <p className="text-lg leading-6 font-semibold text-center sm:text-2xl mb-1">
              Are you...
            </p>
            <p className="text-sm text-gray-500 text-center sm:text-base">
              Help us to define you
            </p>
          </div>
        )}

        {step === 1 ? (
          <div className="flex flex-col sm:flex-row gap-4 w-full overflow-auto mt-10">
            <div
              className={clsx(
                'p-4 w-full sm:w-1/2 rounded-2xl border-[2px]',
                preference === 'casual'
                  ? 'border-primary-40'
                  : 'border-gray-400',
              )}
              onClick={handlePreference}
              data-value="casual"
            >
              <div className="relative w-full aspect-square">
                <Image src={BandMemberImage} fill alt="" />
              </div>
              <p className="text-gray-600 text-sm text-center mt-4">
                Casual Jamming
              </p>
            </div>
            <div
              className={clsx(
                'p-4 w-full sm:w-1/2 rounded-2xl border-[2px]',
                preference === 'profesional'
                  ? 'border-primary-40'
                  : 'border-gray-400',
              )}
              onClick={handlePreference}
              data-value="profesional"
            >
              <div className="relative w-full aspect-square">
                <Image src={JamSessionImage} fill alt="" />
              </div>
              <p className="text-gray-600 text-sm text-center mt-4">
                Profesional reason
              </p>
            </div>
          </div>
        ) : (
          <div className="max-h-[500px] overflow-scroll">
            <p className="mb-2">Choose your instrument</p>
            <div className="flex flex-wrap gap-3">
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'guitar'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="guitar"
                onClick={handleInstrument}
              >
                Guitar
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'piano'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="piano"
                onClick={handleInstrument}
              >
                Piano / Keyboard
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'drum'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="drum"
                onClick={handleInstrument}
              >
                Drum
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'bass'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="bass"
                onClick={handleInstrument}
              >
                Bass
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'vocal'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="vocal"
                onClick={handleInstrument}
              >
                Vocal
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'saxophone'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="saxophone"
                onClick={handleInstrument}
              >
                Saxophone
              </div>

              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'trumpet'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="trumpet"
                onClick={handleInstrument}
              >
                Trumpet
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'violin'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="violin"
                onClick={handleInstrument}
              >
                Violin
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'flute'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="flute"
                onClick={handleInstrument}
              >
                Flute
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'percussion'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="percussion"
                onClick={handleInstrument}
              >
                Percussion
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  instrument === 'harmonica'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="harmonica"
                onClick={handleInstrument}
              >
                Harmonica
              </div>
            </div>

            <p className="mb-2 mt-6">Choose your skill</p>
            <div className="flex flex-wrap gap-3">
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  level === 'beginner'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="beginner"
                onClick={handleLevel}
              >
                Beginner
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  level === 'intermediete'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="intermediete"
                onClick={handleLevel}
              >
                Intermediete
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  level === 'pro'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="pro"
                onClick={handleLevel}
              >
                Pro
              </div>
            </div>

            <p className="mb-2 mt-6">Choose your genre</p>
            <div className="flex flex-wrap gap-3">
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'jazz'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="jazz"
                onClick={handleGenre}
              >
                Jazz
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'pop'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="pop"
                onClick={handleGenre}
              >
                Pop
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'rock'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="rock"
                onClick={handleGenre}
              >
                Rock
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'blues'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="blues"
                onClick={handleGenre}
              >
                Blues
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'dangdut'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="dangdut"
                onClick={handleGenre}
              >
                Dangdut
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'classic'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="classic"
                onClick={handleGenre}
              >
                Classic
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'reggae'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="reggae"
                onClick={handleGenre}
              >
                Reggae
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'funk'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="funk"
                onClick={handleGenre}
              >
                Funk
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'punk'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="punk"
                onClick={handleGenre}
              >
                Punk
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'hiphop'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="hiphop"
                onClick={handleGenre}
              >
                Hip hop
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'metal'
                    ? 'bg-primary-40  border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="metal"
                onClick={handleGenre}
              >
                Metal
              </div>
              <div
                className={clsx(
                  'px-4 py-2  border-solid border-[1px] rounded-lg cursor-pointer',
                  genre === 'electronic'
                    ? 'bg-primary-40 border-white text-white'
                    : 'border-gray-400 text-gray-500',
                )}
                data-value="electronic"
                onClick={handleGenre}
              >
                Electronic
              </div>
            </div>
          </div>
        )}

        <div className="flex md:fle justify-between items-center mt-6">
          <Button
            size="lg"
            round="md"
            variant="primary"
            disabled={step === 1}
            onClick={handleBack}
          >
            Back
          </Button>
          <div className="w-full h-4 bg-gray-400 mx-4 rounded-2xl">
            <div
              className={clsx(
                'w-0 h-4 rounded-2xl bg-primary-40 duration-300 ease-in-out',
                step === 2 ? 'w-full' : 'w-1/2',
              )}
            />
          </div>
          <Button size="lg" round="md" variant="primary" onClick={handleNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Onboarding
