import Input from "../../elements/Input/Input.jsx";
import Header from "../../elements/Header/Header.jsx";
import Alert from "../../elements/Alert/Alert.jsx";
import axios from "axios";
import Button from "../../elements/Button/Button.jsx";
import {useState} from "react";

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const logIn = () => {
    const result = axios({
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Access-Control-Allow-Origin": "https://quizzycall.ru/api"
      },
      data: {
        username, password
      },
      url: "https://quizzycall.ru/api/user/login-user/"
    })
    console.log(result)
  }
  
  return (
    <div>
      <Header />
      <div className="flex relative justify-center items-center mt-10">
        <Alert children={
          <div className="m-10 w-96 h-64">
            <h1 className="font-display text-2xl font-semibold">Привет, с возвращением!</h1>
            <h1 className="font-display text-xl font-medium mb-10">Введите данные</h1>
            <Input placeholder="Логин" onChange={(e) => setUsername(e.target.value)}/>
            <h1 className="mb-2"></h1>
            <Input placeholder="Пароль" type="password" onChange={(e) => setPassword(e.target.value)}/>
            <h1 className="mb-5"/>
            <Button color="blue-default" onClick={logIn}>Войти</Button>
          </div>
        } color="gray-bg-default" round_lvl="lg"/>
      </div>
    </div>
  )
}

export default Login