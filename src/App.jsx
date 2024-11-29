import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import Home from "./screen/Home"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}></Route>
          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
