import Link from 'next/link'
import BottomSheet from '@/domains/common/components/BottomSheet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAddressCard,
  faBlog,
  faQuestion,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '@/domains/common/hooks/auth/use-auth'
import { useLogout } from '@/domains/common/hooks/auth/use-logout'
import Button from '@/views/common/ui/components/Button'

interface MenuProps {
  show: boolean
  onClose: () => void
}

function Menu(props: MenuProps) {
  const { show, onClose } = props
  const { user } = useAuth()
  const { logout } = useLogout()

  return (
    <BottomSheet title="My Menu" open={show} onClose={onClose}>
      {!user && (
        <div className="flex gap-4">
          <Link href="/login" className="w-full">
            <Button variant="primary" size="md" round="md" classes="w-full">
              Login
            </Button>
          </Link>
          <Link href="/register" className="w-full">
            <Button variant="ghost" size="md" round="md" classes="w-full">
              Register
            </Button>
          </Link>
        </div>
      )}
      <div className="pt-4 pl-3 pb-4 flex flex-col gap-7 max-w-[500px] mx-auto md:max-w-[700px] lg:max-w-[1024px]">
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/about"
        >
          <FontAwesomeIcon icon={faAddressCard} className="w-4" />
          About Us
        </Link>
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/faq"
        >
          <FontAwesomeIcon icon={faQuestion} className="w-4" />
          FAQ
        </Link>
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/blog"
        >
          <FontAwesomeIcon icon={faBlog} className="w-4" />
          Blog
        </Link>
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/contact-us"
        >
          <FontAwesomeIcon icon={faPhone} className="w-4" />
          Contact Us
        </Link>
        {user && (
          <>
            <div className="h-[2px] w-full bg-gray-100 -mt-1 -mb-1" />
            <Button size="md" round="md" variant="secondary" onClick={logout}>
              Log out
            </Button>
          </>
        )}
      </div>
    </BottomSheet>
  )
}

export default Menu
