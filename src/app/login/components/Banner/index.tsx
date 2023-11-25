import React from 'react'
import Image from "next/image";
import LoginImage from "@/assets/login image.png";

const Banner = () => {
  return (
    <div className="w-full md:width-3/5 relative">
      <Image
        src={LoginImage}
        fill
        alt=""
        className="rounded-r-lg object-cover"
      />
    </div>
  )
}

export default Banner