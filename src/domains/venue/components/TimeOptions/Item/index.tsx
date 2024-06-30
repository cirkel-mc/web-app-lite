import { twMerge } from "tailwind-merge"

interface TimeOptionsItemProps {
  label: string
  isActive: boolean
  onClick: () => void
}

const TimeOptionsItem = ({ label, isActive, onClick }: TimeOptionsItemProps) => {
  return (
    <div className={twMerge("border-[1px] border-neutral-200 rounded px-2 py-1 text-[#717171]", isActive && 'bg-[#717171] text-white cursor-pointer')} onClick={onClick}>
      {label}
    </div>
  )
}

export default TimeOptionsItem