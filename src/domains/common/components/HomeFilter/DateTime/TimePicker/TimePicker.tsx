import React from 'react'
import Select from '@/views/common/ui/components/Select'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { HOUR_OPTIONS } from '../../constants'

function TimePicker() {
  return (
    <Select
      options={HOUR_OPTIONS}
      placeholder="HH:MM"
      icon={faClock}
      iconPosition="right"
      value=""
      onChange={() => null}
    />
  )
}

export default TimePicker
