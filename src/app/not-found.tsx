'use client'
import { useRouter } from "next/navigation"
import Image from "next/image"
import PlaceholderImage from '@/views/common/assets/placeholder-musician.png'
import Button from "@/views/common/ui/components/Button"

export default function NotFoundPage() {
  const router = useRouter()
  return (
    <div className='fixed left-0 top-0 bg-white h-screen w-screen !z-[999] flex flex-col items-center justify-center'>
      <Image src={PlaceholderImage} alt="image" width={150} height={150} />
      <p className="text-2xl font-bold text-center mt-4">Page is not found</p>
      <p className="mt-1 mb-6 text-neutral-500 text-center w-[90%]">Please ensure your destination is valid. Lets find another cool things on <span className="text-primary-30 ">Cirkel</span></p>
      <Button variant="primary" round="md" size="md" classes=" w-[180px]" onClick={() => router.back()}>Back to previous</Button>
    </div>
  )
}