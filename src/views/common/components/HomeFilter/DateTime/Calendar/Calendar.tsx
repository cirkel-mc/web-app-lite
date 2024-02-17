import React from 'react'
import type { FC } from 'react'
import BottomSheet from '@/views/common/components/BottomSheet'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'

interface CalendarProps {
  open: boolean
  value: any
  onClose: () => void
  onChange: (e: any) => void
}

const Calendar: FC<CalendarProps> = ({ open, value, onClose, onChange }) => {
  return (
    <BottomSheet title="Date" open={open} onClose={onClose}>
      <div className="max-w-[500px] mx-auto overflow-auto h-[400px]">
        <DateCalendar value={value} onChange={onChange} />
      </div>
    </BottomSheet>
  )
}

export default Calendar
