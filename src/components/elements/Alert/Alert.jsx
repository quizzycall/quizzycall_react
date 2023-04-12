import React from 'react'

const Alert = ({children, round_lvl, color,...props}) => {
  return (
    <div className={"rounded-"+round_lvl+" font-display w-min flex justify-center bg-"+color+" "}>
      <div className=''>
        {children}
      </div>
    </div>
  )
}

export default Alert