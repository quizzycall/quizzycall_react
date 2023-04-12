import React from 'react'
import Header from '../../elements/Header/Header'
import Button from '../../elements/Button/Button'
import Alert from '../../elements/Alert/Alert'

const Home = () => {
  return (
    <div className='font-display'>
      <Header />
      <div className=''>
        <div className='grid-rows-2 flex relative justify-center items-center mt-10'>
          <Alert color="blue-default" round_lvl="3xl" children={
            <div className='w-96 h-96 text-center text-[color:black] m-10 '>
              <h1 className='text-3xl font-semibold'>
                Привет, пользователь!
              </h1>
              <p className='font-medium text-xl'>
              Это Quizzycall, платформа для создания и решения квизов. 
              Данный проект зациклен на страны СНГ. Ты попал на <strong>БЕТА</strong> - тест нашего продукта
              </p>
              <p className='font-medium text-xl'>
                Этот продукт находится в стадии разработки и является 
                Open Source репозиторием на площадке <a href="https://github.com">GitHub</a>.
                Если вы хотите внести изменения и стать участником разработки QuizzyCall, то
                можешь создать свою ветку в <a href="https://github.com/quizzycall">Github репозитории</a>
              </p>
            </div>
          }/>
        </div>
      </div>
    </div>
  )
}

export default Home