import React from 'react'
import type { FC } from 'react'
import BottomSheet from '@/domains/common/components/BottomSheet'
import Calendar from '@/views/common/ui/components/Calendar'

interface CalendarProps {
  open: boolean
  value: any
  onClose: () => void
  onChange: (e: any) => void
}

const BottomSheetCalendar: FC<CalendarProps> = ({
  open,
  value,
  onClose,
  onChange,
}) => (
  <BottomSheet title="Date" open={open} onClose={onClose}>
    <div className="max-w-[500px] mx-auto overflow-auto">
      <Calendar open={open} onClose={onClose} onSubmit={onChange} />
    </div>
  </BottomSheet>
)

export default BottomSheetCalendar
