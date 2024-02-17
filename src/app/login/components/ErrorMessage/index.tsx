import React from 'react'

const ErrorMessage = (props: React.PropsWithChildren) => {
  return <p className="text-sm text-red-500 -mt-2">{props.children}</p>
}

export default ErrorMessage
