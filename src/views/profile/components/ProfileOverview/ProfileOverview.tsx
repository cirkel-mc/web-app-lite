import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson, faUser } from '@fortawesome/free-solid-svg-icons'
import PlaceholderImage from '@/views/common/assets/placeholder-musician.png'
import Button from '@/views/common/ui/components/Button'

interface ProfileOverviewProps {
  profilePicture?: string
  username?: string
  info?: string
  bands?: number
  instrument?: string[]
  genre?: string[]
  handleLogout?: () => void
}

const ProfileOverview = ({
  profilePicture,
  username,
  info,
  bands,
  instrument,
  genre,
  handleLogout
}: ProfileOverviewProps) => {
  return (
    <div className="relative border-neutral-20 border-[1px] p-4 rounded-lg">
      {handleLogout && <Button classes='absolute right-4 top-4' size='sm' round='sm' variant='primary' onClick={handleLogout}>Logout</Button>}
      <div className="flex gap-[36px]">
        <div className="min-w-[108px] mt-3.5">
          <Image
            src={profilePicture ?? PlaceholderImage}
            alt=""
            className="w-[108px] h-[108px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="font-medium">Detail Info</p>
          <div className="mt-2.5">
            <p className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon
                icon={faPerson}
                className="w-3 h-3 text-primary-10"
              />
              {bands} Bands
            </p>
            <p className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon
                icon={faUser}
                className="w-3 h-3 text-primary-10"
              />
              {instrument?.map((i, index) => (
                <span key={index}>{i}</span>
              ))}
            </p>
            <p className="flex items-center gap-2 mb-1">
              <FontAwesomeIcon
                icon={faUser}
                className="w-3 h-3 text-primary-10"
              />
              {genre?.map((g, index) => (
                <span key={index}>{g}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-[18px] mt-4">
        <p className="font-medium text-2xl mt-2 max-w-[128px]">{username}</p>
        <div>
          <p className="font-medium">Detail Info</p>
          <p>{info}</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileOverview
