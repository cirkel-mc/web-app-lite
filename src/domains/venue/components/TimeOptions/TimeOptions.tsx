import { useState } from 'react'
import BottomSheet from '@/domains/common/components/BottomSheet'
import { MOCK_TIME_RANGE } from '@/models/venue/mock-data/time-range-mock'
import TimeOptionsItem from './Item'

interface TimeOptionsProps {
  isOpen: boolean
  onClose: () => void
  onItemClick?: (item: string) => void
}

const TimeOptions = ({ isOpen, onClose, onItemClick }: TimeOptionsProps) => {
  const [time, setTime] = useState('')

  return (
    <BottomSheet open={isOpen} title="Pilih Waktu" onClose={onClose}>
      <div>
        <div className="p-5">
          <p className="font-medium mb-4">Jadwal Pagi</p>
          <div className="flex flex-wrap gap-3">
            {MOCK_TIME_RANGE.pagi.times.map((item, index) => (
              <TimeOptionsItem
                key={index}
                label={item}
                isActive={item === time}
                onClick={() => {
                  if (onItemClick) onItemClick(item)
                  setTime(item)
                  onClose()
                }}
              />
            ))}
          </div>

          <p className="font-medium mb-4 mt-7">Jadwal Sore</p>
          <div className="flex flex-wrap gap-3">
            {MOCK_TIME_RANGE.sore.times.map((item, index) => (
              <TimeOptionsItem
                key={index}
                label={item}
                isActive={item === time}
                onClick={() => {
                  if (onItemClick) onItemClick(item)
                  setTime(item)
                  onClose()
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </BottomSheet>
  )
}

export default TimeOptions
