import React from 'react'
import Image from 'next/image'

function Description() {
  return (
    <div className="flex justify-between mt-4">
      <div className="relative w-[120px] h-[120px] mr-4">
        <Image
          src="https://andreasagung.com/wp-content/uploads/2017/10/Studio-Band-2.jpg.webp"
          alt="dummy studio"
          fill
          className="rounded"
          priority={false}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div
        className="relative border-slate-300 border-[1px] rounded-2xl p-4"
        style={{ width: 'calc(100% - 120px)' }}
      >
        <p className="text-sm mb-1 font-bold">Studio Arkana</p>
        <p className="text-sm mb-1 text-slate-500">Rp 150.000</p>
        <p className="text-sm mb-1">Jakarta Selatan</p>
        <p
          className="absolute left-4 bottom-2 italic text-slate-500"
          style={{ fontSize: '8px' }}
        >
          ps: detail booking terdapat di page sebelumnya
        </p>
      </div>
    </div>
  )
}

export default Description
