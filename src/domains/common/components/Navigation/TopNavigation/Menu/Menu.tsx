import Link from 'next/link'
import BottomSheet from '@/domains/common/components/BottomSheet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'

interface MenuProps {
  show: boolean
  onClose: () => void
}

function Menu(props: MenuProps) {
  const { show, onClose } = props

  return (
    <BottomSheet title="My Menu" open={show} onClose={onClose}>
      <div className="pt-4 pl-3 pb-4 flex flex-col gap-7 max-w-[500px] mx-auto md:max-w-[700px] lg:max-w-[1024px]">
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/learn"
        >
          <FontAwesomeIcon icon={faMessage} />
          About Us
        </Link>
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/learn"
        >
          <FontAwesomeIcon icon={faMessage} />
          FAQ
        </Link>
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/learn"
        >
          <FontAwesomeIcon icon={faMessage} />
          Blog
        </Link>
        <Link
          key={2}
          className="text-black hover:opacity-60 flex gap-2 items-center"
          href="/learn"
        >
          <FontAwesomeIcon icon={faMessage} />
          Contact Us
        </Link>
      </div>
    </BottomSheet>
  )
}

export default Menu
