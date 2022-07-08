import { Route, Routes } from "react-router-dom"
import Home from "./templates/Home/Home";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
  )
}

export default Router;