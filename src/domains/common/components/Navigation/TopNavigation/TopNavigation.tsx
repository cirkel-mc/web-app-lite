import { Fragment } from 'react'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPencil } from '@fortawesome/free-solid-svg-icons'
import BurgerButton from './BurgerButton'
import Logo from './Logo'
import { NavigationProps } from './types'

function TopNavigation({ isHome, isExclude, title }: NavigationProps) {
  const router = useRouter()

  const renderContent = () => {
    if (isExclude) return <div />
    if (isHome) {
      return (
        <div className="flex justify-between items-center px-4 py-4 max-w-[500px] md:max-w-[700px] lg:max-w-[1024px] ml-auto mr-auto">
          <Logo />
          <div className="flex gap-4 items-center justify-center">
            <BurgerButton />
          </div>
        </div>
      )
    }
    if (!isExclude && !isHome) {
      return (
        <div className="flex justify-between items-center px-4 py-4 max-w-[500px] md:max-w-[700px] lg:max-w-[1024px] ml-auto mr-auto">
          <div className="flex items-center gap-2">
            <div>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="w-5 h-4"
                onClick={() => router.back()}
              />
            </div>
            <span className="text-2xl">{title}</span>
          </div>
          <FontAwesomeIcon icon={faPencil} className="w-5 h-4" />
        </div>
      )
    }
  }

  return (
    <div
      className="w-full fixed left-0 top-0 text-white bg-primary-30 z-50"
      style={{
        boxShadow:
          '0 3px 5px 0 rgba(0,0,0,.05), 0 1px 18px 0 rgba(0,0,0,.05), 0 6px 10px 0 rgba(0,0,0,.05)',
      }}
    >
      <div className="max-w-[500px] mx-auto">{renderContent()}</div>
    </div>
  )
}

export default TopNavigation
