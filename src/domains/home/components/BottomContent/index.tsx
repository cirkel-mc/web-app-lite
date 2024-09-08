import Link from "next/link"
import { twMerge } from "tailwind-merge"
import { useAuth } from "@/domains/common/hooks/auth/use-auth"

const BottomContent = () => {
  const { user } = useAuth()

  return (
    <div className={twMerge('bg-[#232a21] text-white flex justify-between max-w-[500px] mx-auto', user && 'mb-[74px]')}>
      <div className='w-full flex flex-col gap-4 px-6 pt-4 pb-6'>
        <p className='font-medium text-lg'>About</p>
        <a className="hover:underline" href="https://blog.cirkel.id" target="_blank" rel="noopener noreferrer">Blog</a>
        <Link className="hover:underline" href='/faq'>FAQ</Link>
        <Link className="hover:underline" href='/contact-us'>Contact Us</Link>
      </div>
      <div className='w-full flex flex-col gap-4 px-6 pt-4 pb-6'>
        <p className='font-medium text-lg'>Partnership</p>
        <a className="hover:underline" href="https://partner.cirkel.id" target="_blank" rel="noopener noreferrer">Join as Venue Owner</a>
      </div>

    </div>
  )
}

export default BottomContent