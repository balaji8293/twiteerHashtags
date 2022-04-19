import './App.css'
import Dashboard from './components/Dashboard'
import { Route, Routes } from "react-router-dom"
import Tweets from './components/Tweets'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Tweets' elemen={<Tweets />} />
      </Routes>
    </div>
  )
}

export default App
