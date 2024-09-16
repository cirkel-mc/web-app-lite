'use client'
import { useState, useEffect, useMemo } from 'react'
import Lottie from 'lottie-react'

import Button from '@/views/common/ui/components/Button'
import BottomContent from '@/domains/home/components/BottomContent'
import BottomSheet from '@/domains/common/components/BottomSheet'
import HomeFilter from '@/domains/common/components/HomeFilter'
import CardCarousel from '@/domains/common/components/CardCarousel'
import AvatarCarousel from '@/domains/common/components/AvatarCarousel'
import NearMeCarousel from '@/domains/home/components/NearMeCarousel'
import Loader from '@/domains/home/components/ActiveSession/Loader'
import SessionCarousel from '@/domains/common/components/SessionCarousel'

import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import { cardCarouselData } from '@/models/common/mock-data/card-carousel-data'
import { avatarCarouselData } from '@/models/common/mock-data/avatar-carousel-data'
import InstallAppsAnimation from '@/views/common/assets/Install-Apps-Animation.json'


interface UserChoice {
  outcome: 'accepted' | 'dismissed'
}

interface BeforeInstallPromptEvent extends Event {
  prompt: () => void
  userChoice: Promise<UserChoice>
}

function Home() {
  const { user } = useAuth()
  const [isMount, setIsMount] = useState(false)
  const [deferredPrompt, setDefferedPrompt] = useState<any>(null)

  const isMobile = useMemo(() => {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i
    ];

    if (isMount) {
      return toMatch.some((toMatchItem) => {
        return window.navigator.userAgent.match(toMatchItem);
      });
    }
  }, [isMount])
  const [showInstallButton, setShowInstallButton] = useState(isMobile ?? false);

  const handler = (e: Event) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault()
    // Stash the event so it can be triggered later.
    // @ts-ignore
    setDefferedPrompt(e as BeforeInstallPromptEvent)
    // Update UI notify the user they can install the PWA
    setShowInstallButton(true)
  }

  const handleInstall = async () => {
    console.log(deferredPrompt)
    deferredPrompt.prompt()
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice
    // Optionally, send analytics event with outcome of user choice
    console.info(`User response to the install prompt: ${outcome}`)
    // We've used the prompt, and can't use it again, throw it away
    setDefferedPrompt(null)
    setShowInstallButton(false)
  }

  const renderActiveSession = () => {
    if (!isMount) return <Loader />
    if (!user && isMount) return <div />

    return (
      <div className="overflow-hidden">
        <p className="text-2xl font-semibold mb-2">Active Session</p>
        <SessionCarousel />
      </div>
    )
  }

  useEffect(() => {
    setIsMount(true)
  }, [])

  useEffect(() => {
    if (isMount && !showInstallButton && typeof window !== 'undefined') {
      if (isMobile) window.addEventListener('beforeinstallprompt', handler)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler)
    }
  }, [showInstallButton, isMount, isMobile])

  return (
    <>
      <div className="px-4 mt-[90px] mb-8 max-w-[500px] mx-auto">
        <HomeFilter />
        <div className="lg:max-w-[1024px] pt-6 mx-auto">
          {renderActiveSession()}
          <NearMeCarousel />
          <AvatarCarousel title="Popular Musician" data={avatarCarouselData} />
          <CardCarousel title="Recomended Studio" data={cardCarouselData} />
        </div>
      </div>
      <BottomContent />
      <BottomSheet title='Install App' open={showInstallButton} onClose={() => setShowInstallButton(false)}>
        <div className='flex flex-col justify-center items-center'>
          <Lottie animationData={InstallAppsAnimation} className='h-[200px]' loop />
          <p className='text-neutral-900 text-center w-4/5 mb-6 font-thin'><span className='font-bold'>Keep in touch</span> with your cirkel. Wanna install the apps?</p>
          <div className='flex gap-4 w-full'>
            <Button size="md" round="md" variant="ghost" classes='border-none shadow-[0px_0px_10px_rgba(0,0,0,0.25)]' block onClick={() => setShowInstallButton(false)}>Stay in browser</Button>
            <Button size="md" round="md" variant="secondary" block onClick={handleInstall}>Install PWA</Button>
          </div>
        </div>
      </BottomSheet>
    </>
  )
}

export default Home
