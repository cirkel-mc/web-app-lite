import Link from "next/link"
import Image from "next/image"
import LogoCirkel from '@/views/common/assets/Cirkel-New-Logo.png'

function Title() {
  return (
    <div className="mx-auto flex justify-center items-center">
      <Link href="/" className="relative w-[100px] h-[50px]">
        <Image fill src={LogoCirkel} alt="" className="" />
      </Link>
    </div>
  )
}

export default Title
