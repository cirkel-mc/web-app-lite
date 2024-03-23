'use client'

import Image from 'next/image'
import PlaceholderImage from '@/views/common/assets/placeholder-musician.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGuitar, faMusic, faPlus } from '@fortawesome/free-solid-svg-icons'

interface MusicianCardProps {
  key: string
  image?: string
  name: string
  instrument: string[]
  genre: string[]
  onClick: () => void
}

function MusicianCard(props: MusicianCardProps) {
  const {
    key,
    image = PlaceholderImage,
    name,
    instrument,
    genre,
    onClick,
  } = props

  return (
    <div
      key={key}
      className="relative shadow-[0px_0px_10px_rgba(0,0,0,0.25)] rounded-lg p-2 flex gap-3"
    >
      <div className="w-[80px]">
        <Image src={image} alt="" width={80} height={80} />
      </div>
      <div>
        <p className="text-[18px]">{name}</p>
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon
            icon={faGuitar}
            className="w-3 h-3 text-primary-10"
          />
          <p className="text-gray-400 text-sm">
            {instrument.map((item) => `${item}, `)}
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <FontAwesomeIcon icon={faMusic} className="w-3 h-3 text-primary-10" />
          <p className="text-gray-400 text-sm">
            {genre.map((item) => `${item}, `)}
          </p>
        </div>
      </div>
      <FontAwesomeIcon
        icon={faPlus}
        className="absolute right-3 top-2 w-4 h-4 text-primary-30"
        onClick={onClick}
      />
    </div>
  )
}

export default MusicianCard
