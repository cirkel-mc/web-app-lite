import React from 'react'
import Input from '@/views/common/ui/components/Input'
import type { InputProps } from '@/views/common/ui/components/Input/types'

interface FieldProps extends InputProps {
  label: string
  containerClass?: string
}

function Field({ label, containerClass, value, ...rest }: FieldProps) {
  return (
    <div className={containerClass}>
      <p className="mb-2 text-white">{label}</p>
      <Input value={value} {...rest} />
    </div>
  )
}

export default Field
