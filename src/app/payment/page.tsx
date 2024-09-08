import React from 'react'

import Bill from './components/Bill'
import Description from './components/Description'
import PaymentMethod from './components/PaymentMethod/PaymentMethod'
import PayCTA from './components/PayCTA'

function Payment() {
  return (
    <div className="px-4 pt-[80px] max-w-[500px] mx-auto">
      <Description />
      <PaymentMethod />
      <Bill />
      <PayCTA />
    </div>
  )
}

export default Payment
