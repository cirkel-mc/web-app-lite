"use client"

import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

const DateRange = () => {
  const [value, setValue] = React.useState();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className='flex flex-col w-full justify-center'>
        <p className='text-sm mb-2'>Choose Date</p>
        <MobileDatePicker
          // @ts-ignore
          inputFormat="DD MMMM yyyy"
          value={value}
          onChange={() => { }}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  )
}

export default DateRange