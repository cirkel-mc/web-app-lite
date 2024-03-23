'use client'

import Search from '@/domains/common/components/Search/Search'
import MusicianCard from '@/domains/create-session/components/MusicianCard'
import { MOCK_MUSICIANS } from '@/app/create-session/mock-data-musicians'
import { MusicianAttribute } from '@/models/user/types/musician-types'

interface Deps {
  form: any
  setCurrent: React.Dispatch<React.SetStateAction<string>>
  setMembers: React.Dispatch<React.SetStateAction<Partial<MusicianAttribute>[]>>
  members: Partial<MusicianAttribute>[]
}

function AddMember({ form, setCurrent, members, setMembers }: Deps) {
  const { formState, handleSubmit, setValue, getValues, register } = form
  const { errors } = formState

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
                setValue('member', [
                  ...members,
                  {
                    profilePicture: item.image,
                    fullname: item.name,
                    skills: item.instrument,
                  },
                ])
                setCurrent('session')
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AddMember
