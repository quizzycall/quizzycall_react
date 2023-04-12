import React from 'react'
import Button from "../Button/Button.jsx";
const Header = ({name}) => {

  return (
    <header className='w-full h-20 bg-lightred-default flex justify-around font-display text-lg'>
      <div>
          <ul className='text-[color:white] relative top-2'>
            <img src="/menu.png" className='h-16 inline'/>
            <li className='inline mr-5 ml-5'><a href="">Главная</a></li>
            <li className='inline'><a href="">Квизы</a></li>
          </ul>
      </div>
      <div className="relative top-3">
        {
          name
          ? <div className="relative bg-blue-default w-16 h-16 rounded-full bottom-1">
            <h1 className="justify-center align-middle">{name.split("")[0]}</h1>
          </div>
          : <Button color="blue-default">Log in</Button>
        }

      </div>
    </header>
  )
}

export default Header