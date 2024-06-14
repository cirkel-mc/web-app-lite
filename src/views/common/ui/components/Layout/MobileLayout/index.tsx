import type { PropsWithChildren } from 'react'

const MobileLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="mt-[70px] p-[10px]">
      <div className="max-w-[500px] mx-auto">{children}</div>
    </div>
  )
}

export default MobileLayout
