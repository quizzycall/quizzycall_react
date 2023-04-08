import React from 'react'

const Button = ({children, ...props}) => {
  return (
    <button className='bg-default rounded-2xl text-center text-xl text-[color:white]' {...props}>
      <div className='m-5'>{children}</div>
    </button>
  )
}

export default Button