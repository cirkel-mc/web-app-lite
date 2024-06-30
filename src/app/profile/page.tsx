'use client'

import { useRouter } from "next/navigation"
import ProfileOverview from "@/views/profile/components/ProfileOverview"
import Tabs from "@/views/common/ui/components/Tabs"
import { TAB_ITEMS } from "@/domains/profile/constants/tab-list"

export default function ProfilePage() {
  const router = useRouter()

  const handleLogout = () => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem('user')
      router.push('/login')
    }
  }

  return (
    <div className="w-screen h-screen mt-[75px] px-2.5 box-border">
      <ProfileOverview
        username='Zed Zeplin'
        info='Lorem ipsum lorem ipsum'
        bands={3}
        instrument={['Guitar', 'Saxophone']}
        genre={['Jazz', 'Rock']}
        handleLogout={handleLogout}
      />
      <div className="mt-3">
        <Tabs data={TAB_ITEMS} />
      </div>
    </div>
  )
}
