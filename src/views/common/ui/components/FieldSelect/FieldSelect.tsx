import React from 'react'
import Select from '@/views/common/ui/components/Select'
import {
  SelectProps,
  SelectItem,
} from '@/views/common/ui/components/Select/Select'

interface FieldProps extends SelectProps {
  label: string
  options: SelectItem[]
  containerClass?: string
  value: string
}

function Field({ label, options, containerClass, value, ...rest }: FieldProps) {
  return (
    <div className={containerClass}>
      <p className="mb-2">{label}</p>
      <Select options={options} value={value} {...rest} />
    </div>
  )
}

export default Field
