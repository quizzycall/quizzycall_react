import Home from "./components/pages/Home/Home"
import Login from "./components/pages/Login/Login.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    // <Login />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/" element={<Login />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
