import React, { Fragment } from 'react'

import { StyledEngineProvider } from '@mui/material/styles';

import Title from './components/Title'
import Media from './components/Media'
import DateRange from './components/DateRange'
import AvailableTime from './components/AvailableTime'
import Description from './components/Description/Description';
import PurchaseBox from './components/PurchaseBox';

const VenueDetail = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Fragment>
        <Media />
        <div className='px-4'>
          <Title title='Studio Rawamangun' />
          <DateRange />
          <AvailableTime />
          <Description />
        </div>
        <PurchaseBox />
      </Fragment>
    </StyledEngineProvider>
  )
}

export default VenueDetail