import React from 'react'

const Alert = ({children, ...props}) => {
  return (
    <div className='bg-default rounded-3xl font-display w-min flex justify-center'>
      <div className=''>
        {children}
      </div>
    </div>
  )
}

export default Alert