import React from 'react'

const Button = ({children, color,...props}) => {
  return (
    <button className={"rounded-lg text-center text-xl text-[color:white] font-display bg-"+color} {...props}>
      <div className='m-3'>{children}</div>
    </button>
  )
}

export default Button