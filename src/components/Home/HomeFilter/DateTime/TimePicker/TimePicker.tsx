import React from 'react'
import type { FC } from 'react'
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker'
import BottomSheet from '@/components/BottomSheet'

interface TimePickerProps {
  open: boolean;
  onClose: () => void;
  value: any;
  onChange: (e: any) => void;
}

const TimePicker:FC<TimePickerProps> = ({open, onClose, value, onChange}) => {
  return (
    <BottomSheet title='Time' open={open} onClose={onClose}>
      <div>
        <StaticTimePicker value={value} onChange={onChange} />
      </div>
    </BottomSheet>
  )
}

export default TimePicker