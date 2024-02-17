import React from 'react'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

import IconGopay from '@/views/common/components/Icons/Gopay'
import IconOvo from '@/views/common/components/Icons/Ovo'
import IconDana from '@/views/common/components/Icons/Dana'

const PaymentMethod = () => {
  return (
    <div className="mt-8 pr-4">
      <FormControl sx={{ width: '100%' }}>
        <p className="mb-2">Select Payment Method: </p>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
          sx={{ width: '100%' }}
        >
          <FormControlLabel
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
            labelPlacement="start"
            value="Gopay"
            control={<Radio />}
            label={<IconGopay className="w-[100px] h-[50px]" />}
          />
          <FormControlLabel
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
            labelPlacement="start"
            value="Ovo"
            control={<Radio />}
            label={<IconOvo className="w-[100px] h-[50px] -ml-8" />}
          />
          <FormControlLabel
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
            labelPlacement="start"
            value="Dana"
            control={<Radio />}
            label={<IconDana className="w-[100px] h-[50px]" />}
          />
        </RadioGroup>
      </FormControl>
    </div>
  )
}

export default PaymentMethod
