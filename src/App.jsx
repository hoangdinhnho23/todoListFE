import './App.css'
import CalendarEle from './calendarEle/CalendarEle'
import Home from './home/Home'
import { Route, Routes } from 'react-router-dom'


function App() {

  return (
   <Routes>
   <Route path='/' element={<CalendarEle/>}/>
   <Route path='/home/:date' element={<Home/>}/>

    
   </Routes>
  )
}

export default App
