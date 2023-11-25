import React, {useState} from 'react'

interface FormGroupProps {
  label: string;
  type: string; 
  alt: string; 
  placeholder: string; 
  value?: string;
  onChange?: (e: any) => void;
}

const FormGroup = (props: FormGroupProps) => {
  const { label, type = 'text', alt, placeholder, value, onChange, ...rest } = props 
  const [_value, setValue] = useState(value);

  const handleChange = (e: any) => {
    setValue(value)
    // onChange(e); 
  }

  console.log({...rest})

  return (
    <div className="mb-4 w-full">
      <p className="text-sm mb-1">{label}:</p>
      <input
        className="w-full text-sm rounded-lg border-gray-800 border-[1px] py-2 px-3"
        type={type}
        alt={alt}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  )
}

export default FormGroup