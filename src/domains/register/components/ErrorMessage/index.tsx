import React from 'react'

function ErrorMessage(props: React.PropsWithChildren) {
  return <p className="text-sm text-red-500 mt-1">{props.children}</p>
}

export default ErrorMessage
