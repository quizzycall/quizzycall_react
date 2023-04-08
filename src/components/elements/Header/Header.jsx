import React from 'react'

const Header = () => {
  return (
    <header className='w-full h-20 bg-default flex justify-around font-display text-lg'>
      <div>
          <ul className='text-[color:white]'>
            <img src="/menu.png" className='h-16 top-3/4 inline'/>
            <li className='inline mr-5 ml-5'><a href="">Главная</a></li>
            <li className='inline'><a href="">Квизы</a></li>
          </ul>
      </div>
      <div>
        H
      </div>
    </header>
  )
}

export default Header