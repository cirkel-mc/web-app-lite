import React from 'react'

import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Select from '@/views/common/ui/components/Select'
import { cityOptions } from '@/models/common/mock-data/cities'

function Location() {
  return (
    <Select
      options={cityOptions}
      placeholder="Location"
      icon={faLocationDot}
      value=""
      onChange={() => null}
    />
  )
}

export default Location
