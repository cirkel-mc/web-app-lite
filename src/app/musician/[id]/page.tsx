'use client'

import { usePathname } from "next/navigation"
import ProfileOverview from "@/views/profile/components/ProfileOverview"
import Tabs from "@/views/common/ui/components/Tabs"
import { TAB_ITEMS } from "@/domains/profile/constants/tab-list"

export default function MusicianDetailPage() {
  const path = usePathname()
  const splitPaths = path.split('/')
  const username = splitPaths[splitPaths.length - 1]

  return (
    <div className="w-screen h-screen mt-[75px] px-2.5 box-border">
      <ProfileOverview
        username={username.replace('-', ' ')}
        info='Lorem ipsum lorem ipsum'
        bands={3}
        instrument={['Guitar', 'Saxophone']}
        genre={['Jazz', 'Rock']}
      />
      <div className="mt-3">
        <Tabs data={TAB_ITEMS} />
      </div>
    </div>
  )
}
