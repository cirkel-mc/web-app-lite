import React from 'react'

import Bill from './components/Bill'
import Header from './components/Header/Header'
import Description from './components/Description'
import PaymentMethod from './components/PaymentMethod/PaymentMethod'
import PayCTA from './components/PayCTA'

const Payment = () => {
  return (
    <div className="px-4">
      <Header />
      <Description />
      <PaymentMethod />
      <Bill />
      <PayCTA />
    </div>
  )
}

export default Payment
