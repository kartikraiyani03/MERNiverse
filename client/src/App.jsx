import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import Users from './components/Users'
import Create from './components/Create'
import Update from './components/Update'

import './App.css'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        {/* <h1 className='text-red-500 mx-auto text-center flex flex-col '>Hello</h1>  */}
        <Routes>
            <Route path="/" element={<Users/>}></Route>
            <Route path="/create" element={<Create/>}></Route>
            <Route path="/update/:id" element={<Update/>}></Route>
        </Routes>
    </div>
  )
}

export default App
