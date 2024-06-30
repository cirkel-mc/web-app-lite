import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBell } from "@fortawesome/free-solid-svg-icons"

interface NotificationIconProps {
  count: number;
}

const NotificationIcon = ({ count }: NotificationIconProps) => {
  return (
    <div className="flex gap-4 items-center justify-center relative">
      <FontAwesomeIcon icon={faBell} className='w-6 !h-6' />
      <div className='absolute -top-[8px] -right-[5px] bg-orange-400 w-4 h-4 text-xs rounded-full text-white flex items-center justify-center'>{count}</div>
    </div>
  )
}

export default NotificationIcon