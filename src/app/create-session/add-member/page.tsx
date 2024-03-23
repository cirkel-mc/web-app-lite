'use client'

import { useRouter } from 'next/navigation'
import Search from '@/domains/common/components/Search/Search'
import MusicianCard from '@/domains/create-session/components/MusicianCard'
import { MOCK_MUSICIANS } from '../mock-data-musicians'
import { useCreateSession } from '@/domains/create-session/usecase/useCreateSession'

function AddMember() {
  const router = useRouter()

  const { setMembers, members } = useCreateSession()

  return (
    <div>
      <div className="p-4 pt-1 w-full max-w-[500px] mx-auto">
        <div className="mt-[80px]" />
        <Search />
        <div className="flex flex-col mt-6 gap-3 ">
          {MOCK_MUSICIANS.map((item) => (
            <MusicianCard
              key={item.name}
              name={item.name}
              instrument={item.instrument}
              genre={item.genre}
              onClick={() => {
                setMembers([
                  ...members,
                  {
                    profilePicture: item.image,
                    fullname: item.name,
                    skills: item.instrument,
                  },
                ])
                router.back()
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddMember
