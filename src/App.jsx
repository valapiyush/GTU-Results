
import { Route, Router, Routes } from 'react-router'
import './App.css'
import { HomePage } from './components/HomePage'
import { MyResults } from './components/MyResults'
import { ResultPage } from './components/ResultPage'
function App() {
  
  return (
    <>
       
      <Routes>
        <Route path="/" element={<MyResults />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/home" element={<MyResults />} />
        <Route path="/my-results" element={<ResultPage />} />
      </Routes>
    </>
  )
}

export default App
